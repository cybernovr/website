import { NextRequest, NextResponse } from 'next/server';
import { verifyPaystackTransaction } from '@/lib/paystack';

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const reference = url.searchParams.get('reference');

    if (!reference) {
      return NextResponse.json(
        { error: 'Reference is required' },
        { status: 400 }
      );
    }

    const response = await verifyPaystackTransaction(reference);

    if (response.status && response.data && response.data.status === 'success') {
      return NextResponse.json({
        success: true,
        data: response.data
      });
    } else {
      return NextResponse.json(
        { success: false, error: 'Payment verification failed', details: response },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}


// import { NextRequest, NextResponse } from 'next/server';
// import { verifyPaystackTransaction } from '@/lib/paystack';

// // Helper function to create Base64 encoded authorization
// function createBasicAuth(email: string, password: string): string {
//   return `Basic ${Buffer.from(`${email}:${password}`).toString('base64')}`;
// }

// // Function to create user in Horace LMS
// async function createLMSUser(userData: any, authHeader: string) {
//   const response = await fetch('https://lms.horacelearning.com/api/v1/user/add', {
//     method: 'POST',
//     headers: {
//       'accept': '*/*',
//       'Content-Type': 'application/json',
//       'Authorization': authHeader
//     },
//     body: JSON.stringify({
//       firstname: userData.name?.split(' ')[0] || 'Student',
//       lastname: userData.name?.split(' ')[1] || 'User',
//       country: 'Nigeria', // Default or from user data
//       password: 'Novrcorp@123', // You might want to generate a random one
//       organizationId: '685b1544c2ca00475d71f4a4', // Replace with your org ID
//       email: userData.email,
//       type: 'USER', // Default role
//       phone: userData.applicantContact || '',
//       // Add other fields as needed
//     })
//   });

//   if (!response.ok) {
//     throw new Error(`User creation failed: ${response.statusText}`);
//   }

//   return await response.json();
// }

// // Function to register user for course
// async function registerForCourse(userId: string, courseId: string, authHeader: string) {
//   const response = await fetch('https://lms.horacelearning.com/api/v1/reg/add', {
//     method: 'POST',
//     headers: {
//       'accept': '*/*',
//       'Content-Type': 'application/json',
//       'Authorization': authHeader
//     },
//     body: JSON.stringify({
//       user: userId,
//       course: courseId,
//       // Add other registration fields as needed
//     })
//   });

//   if (!response.ok) {
//     throw new Error(`Course registration failed: ${response.statusText}`);
//   }

//   return await response.json();
// }

// export async function GET(request: NextRequest) {
//   try {
//     const url = new URL(request.url);
//     const reference = url.searchParams.get('reference');

//     if (!reference) {
//       return NextResponse.json(
//         { error: 'Reference is required' },
//         { status: 400 }
//       );
//     }

//     const response = await verifyPaystackTransaction(reference);

//     if (response.status && response.data && response.data.status === 'success') {
//       const metadata = response.data.metadata;
//       const courseId = metadata.courseId || '686178635633410c68907cf5'; // Default to your Cybersecurity course
      
//       // Create auth header for Horace LMS API
//       const authHeader = createBasicAuth(
//         process.env.HORACE_ADMIN_EMAIL!, // Set these in your environment variables
//         process.env.HORACE_ADMIN_PASSWORD!
//       );

//       // Create user in LMS
//       const userResponse = await createLMSUser(metadata, authHeader);
      
//       if (!userResponse.id) {
//         throw new Error('User creation failed - no ID returned');
//       }

//       // Register user for course
//       await registerForCourse(userResponse.id, courseId, authHeader);

//       return NextResponse.json({
//         success: true,
//         data: {
//           paystackData: response.data,
//           lmsUser: userResponse,
//           courseRegistration: {
//             courseId,
//             status: 'registered'
//           }
//         }
//       });
//     } else {
//       return NextResponse.json(
//         { success: false, error: 'Payment verification failed', details: response },
//         { status: 400 }
//       );
//     }
//   } catch (error: any) {
//     console.error('Payment verification error:', error);
//     return NextResponse.json(
//       { 
//         error: 'Internal server error', 
//         details: error.message,
//         stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
//       },
//       { status: 500 }
//     );
//   }
// }