// app/api/lms/bulk-create-users/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check if it's the old format with "users" array or direct array
    let usersArray;
    let courseId;
    let organizationId : string | undefined;

    if (Array.isArray(body)) {
      // Direct array format (correct)
      usersArray = body;
    } else if (body.users && Array.isArray(body.users)) {
      // Old format with "users" wrapper (for backward compatibility)
      usersArray = body.users;
      courseId = body.courseId;
      organizationId = body.organizationId;
    } else {
      return NextResponse.json(
        { success: false, message: 'Payload must be an array of user objects' },
        { status: 400 }
      );
    }

    if (!usersArray || usersArray.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Users array is required and cannot be empty' },
        { status: 400 }
      );
    }

    const LMS_API_URL = process.env.LMS_API_URL || 'https://robiatschools.com';
    const BULK_CREATE_ENDPOINT = `${LMS_API_URL}/api/v1/user/bulk-upload`;
    
    const authString = Buffer.from(
      `${process.env.LMS_API_EMAIL}:${process.env.LMS_API_PASSWORD}`
    ).toString('base64');

    // Prepare payload for bulk upload - DIRECT ARRAY as shown in PDF
    const bulkPayload = usersArray.map((user: any) => ({
      firstname: user.firstname || user.name?.split(' ')[0] || 'Student',
      lastname: user.lastname || user.name?.split(' ').slice(1).join(' ') || 'User',
      country: user.country || "Nigeria",
      password: user.password || '',
      bio: user.bio || "",
      organizationId: user.organizationId || organizationId || "685ec1191008ea7cff78dbc8",
      address: user.address || "",
      city: user.city || "",
      state: user.state || "",
      zip: user.zip || "",
      email: user.email,
      phone: user.phone || "",
      type: user.type || "STUDENT"
    }));

    console.log('Bulk creating users:', bulkPayload.length);
    console.log('Sending payload as direct array (not wrapped in "users")');

    const response = await fetch(BULK_CREATE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${authString}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(bulkPayload) // Send array directly
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Bulk User Creation Error:', {
        status: response.status,
        statusText: response.statusText,
        errorText
      });
      throw new Error(`Bulk API request failed with status ${response.status}`);
    }

    const responseData = await response.json();
    
    // If courseId is provided, register successful users for the course
    if (courseId && responseData.successfullusers) {
      await registerUsersForCourse(responseData.successfullusers, courseId, authString);
    }

    // Send email notifications
    await sendBulkRegistrationEmail(responseData, usersArray, courseId);

    return NextResponse.json({
      success: true,
      data: responseData,
      message: `Bulk user creation completed. Success: ${responseData.successCount}, Errors: ${responseData.errorCount}`
    });

  } catch (error) {
    console.error('Bulk User Creation Route Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

// Helper function to register users for course
async function registerUsersForCourse(users: any[], courseId: string, authString: string) {
  const LMS_API_URL = process.env.LMS_API_URL || 'https://robiatschools.com';
  
  const registrationPromises = users.map(async (user) => {
    try {
      const payload = {
        userId: user.id,
        courseId,
        organizationId: user.organizationId || "685ec1191008ea7cff78dbc8",
        activeStep: 0,
        comment: "Registered via bulk upload"
      };

      const response = await fetch(`${LMS_API_URL}/api/v1/reg/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${authString}`,
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        return { success: true, userId: user.id, email: user.email };
      } else {
        const errorData = await response.json();
        return { success: false, userId: user.id, email: user.email, error: errorData };
      }
    } catch (error) {
      return { success: false, userId: user.id, email: user.email, error };
    }
  });

  const results = await Promise.all(registrationPromises);
  const successfulRegistrations = results.filter(result => result.success);
  const failedRegistrations = results.filter(result => !result.success);

  console.log(`Course registration results: ${successfulRegistrations.length} successful, ${failedRegistrations.length} failed`);
  
  return { successfulRegistrations, failedRegistrations };
}

// Helper function to generate random password
// function generateRandomPassword(): string {
//   const length = 12;
//   const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     password += charset.charAt(Math.floor(Math.random() * charset.length));
//   }
//   return password;
// }

// Email notification function
async function sendBulkRegistrationEmail(responseData: any, originalUsers: any[], courseId: string) {
  try {
    const successfulCount = responseData.successCount || 0;
    const errorCount = responseData.errorCount || 0;
    
    const emailData = {
      _subject: `Bulk User Registration Report - ${successfulCount} Successful, ${errorCount} Failed`,
      _replyto: 'info@cybernovr.com',
      _template: "table",
      _captcha: "false",
      
      totalProcessed: responseData.totalProcessed || 0,
      successfulCount,
      errorCount,
      courseId: courseId || 'N/A',
      
      successfulUsers: responseData.successfullusers?.map((user: any) => 
        `Name: ${user.firstname} ${user.lastname}, Email: ${user.email}, ID: ${user.id}`
      ).join(' || ') || 'None',
      
      failedUsers: responseData.errors?.map((error: any) => 
        `Row: ${error.rowIndex}, Email: ${error.email}, Error: ${error.errorMessage}`
      ).join(' || ') || 'None',
      
      timestamp: new Date().toISOString()
    };

    const response = await fetch("https://formsubmit.co/ajax/info@cybernovr.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    const data = await response.json();
    return data.success === "true";
  } catch (error) {
    console.error('Error sending bulk registration email:', error);
    return false;
  }
}