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

    const { organizationId, email } = JSON.parse(requestBody);
    
    if (!organizationId || !email) {
      return NextResponse.json(
        { message: 'Missing organizationId or email' },
        { status: 400 }
      );
    }

    const authString = Buffer.from(
      `${LMS_API_EMAIL}:${LMS_API_PASSWORD}`
    ).toString('base64');

    const lmsResponse = await fetch(`${LMS_API_URL}/api/v1/user/dotoken`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${authString}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        organizationId,
        email
      })
    });

    const lmsResponseText = await lmsResponse.text();
    const lmsData = lmsResponseText ? JSON.parse(lmsResponseText) : {};

    if (!lmsResponse.ok) {
      return NextResponse.json(
        { 
          message: lmsData.message || 'Failed to generate token',
          status: lmsResponse.status 
        },
        { status: lmsResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Token generated successfully',
      data: lmsData
    });

  } catch (error) {
    console.error('Token generation error:', error);
    return NextResponse.json(
      { 
        message: error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}