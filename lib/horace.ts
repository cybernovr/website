interface CreateProps {
  email: string;
  amount: number; // in kobo (Naira * 100)
  metadata?: Record<string, any>;
  callback_url?: string;
  reference?: string;
}

export async function initializeCreateUser(data: CreateProps) {
  try {
    const userPayload = {
      firstname: "Sheriff",
      lastname: "jr",
      country: "Nigeria",
      password: "Pass1234$",
      organizationId: "685ec1191008ea7cff78dbc8",
      bio: "Student from Nigeria",
      address: "123 Main Street",
      city: "Lagos",
      state: "Lagos",
      zip: "100001",
      phone: "+2348012345678",
      email: "sheriffazeez333@gmail.com",
      type: "STUDENT"    
    }
    const url = 'https://lms.horacelearning.com/api/v1/user/add/';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`info@cybernovr.com:Novrcorp@123`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userPayload),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

// export async function verifyPaystackTransaction(reference: string) {
//   try {
//     const url = `https://api.paystack.co/transaction/verify/${reference}`;
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY}`,
//       },
//     });

//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error('Error verifying Paystack transaction:', error);
//     throw error;
//   }
// }

// Function to generate a unique reference
export function generateReference() {
  const timestamp = new Date().getTime();
  const randomStr = Math.random().toString(36).substring(2, 15);
  return `cybernovr_${timestamp}_${randomStr}`;
} 