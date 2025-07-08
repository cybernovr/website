import { NextResponse } from 'next/server'

const LMS_API_URL = process.env.LMS_API_URL;
const LMS_API_EMAIL = process.env.LMS_API_EMAIL;
const LMS_API_PASSWORD = process.env.LMS_API_PASSWORD;

export async function POST(request: Request) {
  try {
    const { user, courseId, comment, activeStep } = await request.json();

    const authString = Buffer.from(
      `${LMS_API_EMAIL}:${LMS_API_PASSWORD}`
    ).toString('base64');

    const registrationPayload = {
      user,
      id: courseId,
      comment: comment || "Registered via payment gateway",
      activeStep: activeStep || 0
    };

    const response = await fetch(`${LMS_API_URL}/api/v1/reg/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${authString}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify(registrationPayload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { message: errorData.message || 'Course registration failed' },
        { status: response.status }
      );
    }

    const responseData = await response.json();
    return NextResponse.json(responseData);

  } catch (error) {
    console.error('Error registering course:', error);
    return NextResponse.json(
      { 
        message: error instanceof Error ? error.message : 'Internal server error' 
      },
      { status: 500 }
    );
  }
}