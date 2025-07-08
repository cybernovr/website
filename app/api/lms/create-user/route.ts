import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, applicantContact, name, courseId, ...userPayload } = await request.json();

    const LMS_API_URL = process.env.LMS_API_URL || 'https://robiatschools.com/';
    const CREATE_USER_ENDPOINT = `${LMS_API_URL}/api/v1/user/add`;
    console.log('Calling endpoint:', CREATE_USER_ENDPOINT);
    
    const authString = Buffer.from(
      `${process.env.LMS_API_EMAIL}:${process.env.LMS_API_PASSWORD}`
    ).toString('base64');

    const response = await fetch(CREATE_USER_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${authString}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...userPayload,
        email,
        name,
        applicantContact
        // courseId
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Horace LMS Error:', {
        status: response.status,
        statusText: response.statusText,
        errorText
      });
      throw new Error(`API request failed with status ${response.status}`);
    }

    const responseData = await response.json();
    return NextResponse.json(responseData);

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}