"use client"

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle } from 'lucide-react'
import FadeIn from '@/components/animations/fade-in'

export default function EnrollmentSuccess() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<'loading' | 'success' | 'failed'>('loading')
  const [paymentDetails, setPaymentDetails] = useState<any>(null)
  const reference = searchParams.get('reference')
  const trxref = searchParams.get('trxref')

  useEffect(() => {
    if (!reference) {
      setStatus('failed')
      return
    }

    const verifyPayment = async () => {
      try {
        // Verify payment with our API
        const response = await fetch(`/api/paystack/verify?reference=${reference}`)
        const data = await response.json()

        if (data.success) {
          setStatus('success')
          setPaymentDetails(data.data)
        } else {
          setStatus('failed')
        }
      } catch (error) {
        console.error('Error verifying payment:', error)
        setStatus('failed')
      }
    }

    verifyPayment()
  }, [reference])

  // Format price in Naira
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price / 100); // Paystack returns amount in kobo
  };

  return (
    <div className="min-h-screen bg-light-gray pt-32 pb-20">
      <div className="container-custom">
        <FadeIn direction="up">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              {status === 'loading' && (
                <div className="py-8">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cybernovr-purple mx-auto"></div>
                  <h2 className="text-2xl font-bold mt-6 mb-2">Verifying Payment</h2>
                  <p className="text-gray-600">Please wait while we verify your payment...</p>
                </div>
              )}

              {status === 'success' && (
                <div className="py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
                  
                  {paymentDetails && (
                    <div className="mb-6 bg-gray-50 p-4 rounded-lg text-left max-w-md mx-auto">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-gray-500">Amount:</div>
                        <div className="text-right font-medium">{formatPrice(paymentDetails.amount)}</div>
                        
                        <div className="text-gray-500">Email:</div>
                        <div className="text-right font-medium">{paymentDetails.customer?.email}</div>
                        
                        <div className="text-gray-500">Reference:</div>
                        <div className="text-right font-medium text-xs">{paymentDetails.reference}</div>
                        
                        <div className="text-gray-500">Date:</div>
                        <div className="text-right font-medium">
                          {new Date(paymentDetails.paid_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <p className="text-gray-600 mb-6">
                    Thank you for enrolling in our course. You will receive an email with course access details shortly.
                  </p>
                  <Button
                    onClick={() => router.push('/courses')}
                    className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white"
                  >
                    Return to Courses
                  </Button>
                </div>
              )}

              {status === 'failed' && (
                <div className="py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
                    <XCircle className="h-8 w-8 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Payment Failed</h2>
                  <p className="text-gray-600 mb-6">
                    We couldn't verify your payment. Please try again or contact our support team for assistance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => router.push('/courses/enroll')}
                      className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white"
                    >
                      Try Again
                    </Button>
                    <Button
                      onClick={() => router.push('/contact')}
                      variant="outline"
                      className="border-cybernovr-purple text-cybernovr-purple hover:bg-cybernovr-purple/10"
                    >
                      Contact Support
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
} 