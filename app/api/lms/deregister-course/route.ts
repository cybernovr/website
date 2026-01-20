import { NextResponse } from 'next/server'

const LMS_API_URL = process.env.LMS_API_URL || 'https://robiatschools.com';
const LMS_API_EMAIL = process.env.LMS_API_EMAIL || 'info@cybernovr.com';
const LMS_API_PASSWORD = process.env.LMS_API_PASSWORD || 'Novrcorp@123';

export async function PUT(request: Request) {
  try {
    const { user, id } = await request.json();
    
    if (!user || !id) {
      return NextResponse.json(
        { success: false, message: 'Missing user ID or course ID' },
        { status: 400 }
      );
    }

    const authString = Buffer.from(
      `${LMS_API_EMAIL}:${LMS_API_PASSWORD}`
    ).toString('base64');

    // Try different payload formats
    const payloads = [
      // { 
      //   user: userId,
      //   courseId: courseId,
      //   organizationId: "685ec1191008ea7cff78dbc8",
      //   activeStep: 0,
      //   comment: "Registered via bulk course registration"
      // },
      // { 
      //   userId: userId,
      //   courseId: courseId,
      //   organizationId: "685ec1191008ea7cff78dbc8",
      //   activeStep: 0,
      //   comment: "Registered via bulk course registration"
      // },
      { 
        user: user,
        id: id,
        organizationId: "685ec1191008ea7cff78dbc8",
        activeStep: 0,
        comment: "Registered via bulk course registration"
      }
    ];

    const attempts = [];
    let lastError = null;

    for (const payload of payloads) {
      try {
        console.log('Attempting payload:', payload);
        
        const response = await fetch(`${LMS_API_URL}/api/v1/reg/remove`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${authString}`,
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const responseData = await response.json();
        const attempt = {
          payload,
          status: response.status,
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

        lastError = responseData;
      } catch (error) {
        const attempt = {
          payload,
          status: 'ERROR',
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        };
        attempts.push(attempt);
        lastError = error;
      }
    }

    return NextResponse.json(
      { 
        success: false,
        message: 'All registration attempts failed',
        attempts: attempts,
        lastError: lastError
      },
      { status: 400 }
    );

  } catch (error) {
    console.error('Single course registration error:', error);
    return NextResponse.json(
      { 
        success: false,
        message: error instanceof Error ? error.message : 'Internal server error'
      },
      { status: 500 }
    );
  }
}