// app/api/lms/delete-user/route.ts
import { NextResponse } from 'next/server'

const LMS_API_URL = process.env.LMS_API_URL || 'https://robiatschools.com';
const LMS_API_EMAIL = process.env.LMS_API_EMAIL;
const LMS_API_PASSWORD = process.env.LMS_API_PASSWORD;

export async function DELETE(request: Request) {
  try {
    // Check if credentials exist
    if (!LMS_API_EMAIL || !LMS_API_PASSWORD) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'API credentials not configured. Check your .env.local file',
          debug: {
            hasEmail: !!LMS_API_EMAIL,
            hasPassword: !!LMS_API_PASSWORD,
            apiUrl: LMS_API_URL
          }
        },
        { status: 500 }
      );
    }

    const { userId } = await request.json();
    
    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'Missing user ID' },
        { status: 400 }
      );
    }

    console.log('Attempting to delete user:', userId);
    console.log('Using API URL:', LMS_API_URL);

    // Create auth header
    const authString = Buffer.from(`${LMS_API_EMAIL}:${LMS_API_PASSWORD}`).toString('base64');
    
    const attempts = [];

    // Method 1: Try with different authentication approaches
    const authMethods = [
      `Basic ${authString}`,
      `Bearer ${authString}`,
      // Add other auth methods if needed
    ];

    for (const authHeader of authMethods) {
      try {
        console.log(`Trying auth method: ${authHeader.split(' ')[0]}`);
        
        const response = await fetch(`${LMS_API_URL}/api/v1/user/deluser/${userId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': authHeader,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        const responseText = await response.text();
        let responseData;
        try {
          responseData = responseText ? JSON.parse(responseText) : { message: 'No response body' };
        } catch {
          responseData = { rawResponse: responseText };
        }

        const attempt = {
          authMethod: authHeader.split(' ')[0],
          status: response.status,
          statusText: response.statusText,
          success: response.ok,
          response: responseData
        };
        
        attempts.push(attempt);

        if (response.ok) {
          return NextResponse.json({
            success: true,
            data: responseData,
            attempts: attempts
          });
        }

        // If we get 401, try next auth method
        if (response.status !== 401) {
          break; // Different error, don't try other auth methods
        }
      } catch (error) {
        attempts.push({
          authMethod: authHeader.split(' ')[0],
          status: 'ERROR',
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    // Method 2: Try login first to get a token
    try {
      console.log('Attempting to login first...');
      const loginResponse = await fetch(`${LMS_API_URL}/api/v1/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: LMS_API_EMAIL,
          password: LMS_API_PASSWORD
        })
      });

      if (loginResponse.ok) {
        const loginData = await loginResponse.json();
        const token = loginData.token || loginData.accessToken;
        
        if (token) {
          const response = await fetch(`${LMS_API_URL}/api/v1/user/deluser/${userId}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json'
            }
          });

          const responseData = await response.json();
          attempts.push({
            method: 'BEARER_TOKEN',
            status: response.status,
            success: response.ok,
            response: responseData
          });

          if (response.ok) {
            return NextResponse.json({
              success: true,
              data: responseData,
              attempts: attempts
            });
          }
        }
      }
    } catch (error) {
      attempts.push({
        method: 'LOGIN_FIRST',
        status: 'ERROR', 
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }

    return NextResponse.json(
      { 
        success: false,
        message: 'All delete attempts failed - Authentication issues',
        attempts: attempts
      },
      { status: 401 }
    );

  } catch (error) {
    console.error('Delete user error:', error);
    return NextResponse.json(
      { 
        success: false,
        message: error instanceof Error ? error.message : 'Internal server error'
      },
      { status: 500 }
    );
  }
}