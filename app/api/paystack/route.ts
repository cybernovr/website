import { NextRequest, NextResponse } from 'next/server';
import { initializePaystackPayment, generateReference } from '@/lib/paystack';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, amount, courseId, name } = body;

    if (!email || !amount || !courseId) {
      return NextResponse.json(
        { error: 'Email, amount and courseId are required' },
        { status: 400 }
      );
    }

    // Convert to kobo (Paystack uses the smallest currency unit)
    const amountInKobo = Math.floor(amount * 100);

    const reference = generateReference();
    const callbackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/courses/enrollment-success?reference=${reference}`;

    const metadata = {
      courseId,
      name,
      custom_fields: [
        {
          display_name: "Course ID",
          variable_name: "course_id",
          value: courseId
        },
        {
          display_name: "Student Name",
          variable_name: "student_name",
          value: name || "Student"
        }
      ]
    };

    const response = await initializePaystackPayment({
      email,
      amount: amountInKobo,
      callback_url: callbackUrl,
      reference,
      metadata
    });

    if (response.status && response.data && response.data.authorization_url) {
      return NextResponse.json({
        success: true,
        redirectUrl: response.data.authorization_url,
        reference: response.data.reference
      });
    } else {
      return NextResponse.json(
        { error: 'Failed to initialize payment', details: response },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('Payment initialization error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
} 