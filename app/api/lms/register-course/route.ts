import { NextResponse } from 'next/server'

const LMS_API_URL = process.env.LMS_API_URL || 'https://robiatschools.com';
const LMS_API_EMAIL = process.env.LMS_API_EMAIL;
const LMS_API_PASSWORD = process.env.LMS_API_PASSWORD;

export async function POST(request: Request) {
  try {
    const { user, id: courseId } = await request.json();
    
    if (!user || !courseId) {
      return NextResponse.json(
        { message: 'Missing user ID or course ID' },
        { status: 400 }
      );
    }

    const authString = Buffer.from(
      `${LMS_API_EMAIL}:${LMS_API_PASSWORD}`
    ).toString('base64');

    const payloads = [
      { user, id: courseId },
      { userId: user, courseId },
      { 
        userId: user,
        courseId,
        organizationId: "685ec1191008ea7cff78dbc8",
        activeStep: 0,
        comment: "Registered via payment gateway"
      }
    ];

    let lastError = null;

    for (const payload of payloads) {
      try {
        // console.log('Trying payload:', payload);
        
        const response = await fetch(`${LMS_API_URL}/api/v1/reg/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${authString}`,
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const responseData = await response.json();
        
        if (response.ok) {
          return NextResponse.json(responseData);
        }

        lastError = responseData;
        console.warn('Attempt failed:', responseData);
      } catch (error) {
        lastError = error;
        console.warn('Attempt error:', error);
      }
    }

    return NextResponse.json(
      { 
        message: 'All registration attempts failed',
        details: lastError 
      },
      { status: 400 }
    );

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { 
        message: error instanceof Error ? error.message : 'Internal server error',
        stack: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}