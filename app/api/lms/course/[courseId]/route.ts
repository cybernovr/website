import { NextResponse } from 'next/server'

const LMS_API_URL = process.env.LMS_API_URL || 'https://robiatschools.com';
const LMS_API_EMAIL = process.env.LMS_API_EMAIL;
const LMS_API_PASSWORD = process.env.LMS_API_PASSWORD;

export async function GET(
  request: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    
    if (!userId) {
      return NextResponse.json(
        { message: 'User ID is required' },
        { status: 400 }
      );
    }

    const authString = Buffer.from(
      `${LMS_API_EMAIL}:${LMS_API_PASSWORD}`
    ).toString('base64');

    const courseResponse = await fetch(`${LMS_API_URL}/api/v1/course/${params.courseId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${authString}`,
        'Accept': 'application/json'
      }
    });

    if (!courseResponse.ok) {
      throw new Error('Failed to fetch course details');
    }

    const courseData = await courseResponse.json();

    const enrollmentResponse = await fetch(`${LMS_API_URL}/api/v1/reg/user/${userId}/course/${params.courseId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${authString}`,
        'Accept': 'application/json'
      }
    });

    const enrollmentData = enrollmentResponse.ok ? await enrollmentResponse.json() : null;

    return NextResponse.json({
      ...courseData,
      lmsUrl: `${LMS_API_URL}/course/${params.courseId}?userId=${Buffer.from(userId).toString('base64')}`,
      isEnrolled: enrollmentData !== null,
      enrollmentDate: enrollmentData?.createdAt
    });

  } catch (error) {
    console.error('Course fetch error:', error);
    return NextResponse.json(
      { 
        message: error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}