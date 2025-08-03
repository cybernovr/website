import { NextResponse } from 'next/server'

const LMS_API_URL = process.env.LMS_API_URL || 'https://robiatschools.com';
const LMS_API_EMAIL = process.env.LMS_API_EMAIL;
const LMS_API_PASSWORD = process.env.LMS_API_PASSWORD;

export async function POST(request: Request) {
  try {
    const requestBody = await request.text();
    if (!requestBody) {
      return NextResponse.json(
        { message: 'Empty request body' },
        { status: 400 }
      );
    }

    const { organizationId, email, password, token } = JSON.parse(requestBody);
    
    if (!organizationId || !email || !password || !token) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const authString = Buffer.from(
      `${LMS_API_EMAIL}:${LMS_API_PASSWORD}`
    ).toString('base64');

    const lmsResponse = await fetch(`${LMS_API_URL}/api/v1/user/reset/password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${authString}`,
        'Accept': '*/*' // Changed to accept any response type
      },
      body: JSON.stringify({
        organizationId,
        email,
        password,
        token
      })
    });

    const lmsResponseText = await lmsResponse.text();
    
    let lmsData;
    try {
      lmsData = lmsResponseText ? JSON.parse(lmsResponseText) : lmsResponseText;
    } catch {
      lmsData = lmsResponseText;
    }

    if (!lmsResponse.ok) {
      return NextResponse.json(
        { 
          message: typeof lmsData === 'object' 
            ? lmsData.message || 'Failed to reset password'
            : lmsData || 'Failed to reset password',
          status: lmsResponse.status 
        },
        { status: lmsResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: typeof lmsData === 'object' 
        ? lmsData.message || 'Password reset successful'
        : lmsData || 'Password reset successful'
    });

  } catch (error) {
    console.error('Password reset error:', error);
    return NextResponse.json(
      { 
        message: error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}