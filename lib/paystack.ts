interface PaystackInitializePaymentProps {
  applicantContact: string;
  email: string;
  amount: number; // in kobo (Naira * 100)
  metadata?: Record<string, any>;
  callback_url?: string;
  reference?: string;
}

export async function initializePaystackPayment(data: PaystackInitializePaymentProps) {
  try {
    const url = 'https://api.paystack.co/transaction/initialize';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error initializing Paystack payment:', error);
    throw error;
  }
}

export async function verifyPaystackTransaction(reference: string) {
  try {
    const url = `https://api.paystack.co/transaction/verify/${reference}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY}`,
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error verifying Paystack transaction:', error);
    throw error;
  }
}

// Function to generate a unique reference
export function generateReference() {
  const timestamp = new Date().getTime();
  const randomStr = Math.random().toString(36).substring(2, 15);
  return `cybernovr_${timestamp}_${randomStr}`;
} 