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
  const [lmsStatus, setLmsStatus] = useState<'idle' | 'processing' | 'completed' | 'failed'>('idle')
  const reference = searchParams.get('reference')
  const [registrationData, setRegistrationData] = useState<any>(null);

  const encodeUserId = (userId: string) => {
    return Buffer.from(userId).toString('base64');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price / 100)
  }

  const sendEmailNotification = async (type: 'failed' | 'completed', formDetails: any) => {
    try {
      // console.log("yesssss", formDetails)
      const subject = type === 'failed'
        ? `LMS Registration Failed for ${formDetails.name}`
        : `New User Onboarded: ${formDetails.name}`;
  
      const response = await fetch("https://formsubmit.co/ajax/info@cybernovr.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formDetails,
          _subject: subject,
          _replyto: formDetails.email || 'info@cybernovr.com',
          _template: "table",
          _captcha: "false",
          status: type === 'failed' ? 'Registration Failed' : 'Registration Completed',
          reference: paymentDetails?.reference || 'N/A',
        })
      });
  
      const data = await response.json();
      return data.success === "true";
    } catch (error) {
      console.error('Error sending email notification:', error);
      return false;
    }
  };

  const handleLmsRegistration = async (
    email: string, 
    name: string,
    applicantContact: string,
    courseId: string, 
    metadata: any
  ) => {
    setLmsStatus('processing');
    try {
      // console.log('Starting LMS registration with:', { email, name, courseId });

      const formDetails = {
        courseId,
        name,
        applicantContact,
        schoolName: metadata?.schoolName || 'N/A',
        headOfSchoolEmail: metadata?.headOfSchoolEmail || 'N/A',
        parentName: metadata?.parentName || 'N/A',
        parentEmail: metadata?.parentEmail || 'N/A',
        classInSchool: metadata?.classInSchool || 'N/A',
        dateOfBirth: metadata?.dateOfBirth || 'N/A',
        reference: paymentDetails?.reference || 'N/A',
        email : metadata?.applicantContact
      };
      
      const userPayload = {
        firstname: name?.split(' ')[0] || 'Student',
        lastname: name?.split(' ').slice(1).join(' ') || 'User',
        country: "",
        password: "",
        organizationId: "685ec1191008ea7cff78dbc8",
        bio: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: applicantContact,
        email: applicantContact,
        type: "STUDENT"    
      };

      const authString = Buffer.from(
        `${process.env.LMS_API_EMAIL}:${process.env.LMS_API_PASSWORD}`
      ).toString('base64');
  
      // console.log('User payload:', userPayload);
  
      const userResponse = await fetch('/api/lms/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${authString}`,
          'Accept': 'application/json'
        },
        body: JSON.stringify(userPayload)
      });
  
      const userData = await userResponse.json();
      // console.log('LMS user creation response:', userData);
  
      if (!userResponse.ok) {
        throw new Error(userData.message || 'Failed to create LMS user');
      }

      const registrationResponse = await fetch('/api/lms/register-course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${authString}`,
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          user: userData.id,
          id: courseId,
        })
      });
  
      const registrationData = await registrationResponse.json();
      setRegistrationData(registrationData);
      // console.log('Course registration response:', registrationData);
  
      if (registrationResponse.ok) {
        await sendEmailNotification('completed', formDetails);
        setLmsStatus('completed');
      } else {
        throw new Error(registrationData.message || 'Failed to register for course');
      }
    } catch (error) {
      console.error('LMS registration error:', error);
      const formDetails = {
        courseId,
        name,
        applicantContact,
        schoolName: metadata?.schoolName || 'N/A',
        headOfSchoolEmail: metadata?.headOfSchoolEmail || 'N/A',
        parentName: metadata?.parentName || 'N/A',
        parentEmail: metadata?.parentEmail || 'N/A',
        classInSchool: metadata?.classInSchool || 'N/A',
        dateOfBirth: metadata?.dateOfBirth || 'N/A',
        reference: paymentDetails?.reference || 'N/A',
        email : metadata?.applicantContact,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
      
      await sendEmailNotification('failed', formDetails);
      setLmsStatus('failed');
    }
  };

  useEffect(() => {
    if (!reference) {
      setStatus('failed')
      return
    }

  const verifyPayment = async () => {
  try {
    const response = await fetch(`/api/paystack/verify?reference=${reference}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.success) {
      setStatus('success');
      setPaymentDetails(data.data);

      const email = data.data.metadata?.applicantContact;
      const name = data.data.metadata?.name || 'Student';
      const courseId = data.data.metadata?.courseId;
      const applicantContact =data.data.metadata?.applicantContact
      
      // console.log('Extracted values:', { email, name, applicantContact, courseId });

      if (!email) {
        throw new Error('Customer email not found in payment details');
      }

      if (!courseId) {
        throw new Error('Course ID not found in payment metadata');
      }

      await handleLmsRegistration(email, name, applicantContact, courseId, data.data.metadata);
    } else {
      setStatus('failed');
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    setStatus('failed');
  }
}
    verifyPayment()
  }, [reference])

  console.log('Payment Details:', paymentDetails)
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
                    <div className="mb-6 bg-gray-50 p-4 rounded-lg text-left mx-auto">
                      <div className="grid my-7 text-xs md:text-sm">
                        <div className='flex justify-between mb-3'>
                          <div className="text-gray-500">Amount:</div>
                          <div className="text-right font-medium">{formatPrice(paymentDetails.amount)}</div>
                        </div>
                        <div className='flex justify-between mb-3'>
                          <div className="text-gray-500">Email:</div>
                          <div className="text-right font-medium">{paymentDetails.customer?.email}</div>
                        </div>
                        <div className='flex justify-between mb-3'>
                          <div className="text-gray-500">Ref:</div>
                          <div className="text-right font-medium">{paymentDetails.reference}</div>
                        </div>
                        <div className='flex justify-between mb-3'>
                          <div className="text-gray-500">Date:</div>
                          <div className="text-right font-medium">
                            {new Date(paymentDetails.paid_at).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* LMS Registration Status */}
                  {lmsStatus === 'processing' && (
                    <div className="mb-6">
                      <div className="flex items-center justify-center gap-2 text-cybernovr-purple">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
                        <span>Setting up your course access...</span>
                      </div>
                    </div>
                  )}

                  {lmsStatus === 'completed' && (
                    <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
                      <p>Your course access has been successfully set up!</p>
                    </div>
                  )}

                  {lmsStatus === 'failed' && (
                    <div className="mb-6 p-4 bg-yellow-50 text-yellow-700 rounded-lg">
                      <p  className="text-sm mt-1">Payment succeeded but we encountered an issue setting up your course access. <br /> Our team has been notified and will contact you shortly.</p>
                    </div>
                  )}
                  
                  <p className="text-gray-600 mb-6">
                    {lmsStatus === 'completed' && 'Please set up your LMS account to access your course materials.'}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => router.push('/courses')}
                      className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white"
                    >
                      Return to Courses
                    </Button>
                    {lmsStatus === 'completed' && paymentDetails?.metadata?.courseId && registrationData?.userId && (
                      <><Button
                        onClick={() => router.push(`/onboard?userId=${registrationData.userId}&email=${encodeURIComponent(paymentDetails.customer?.email)}&courseId=${paymentDetails.metadata.courseId}&name=${paymentDetails.metadata.name}`)}
                        variant="outline"
                        className="border-cybernovr-purple text-cybernovr-purple hover:bg-cybernovr-purple/10"
                      >
                          Set Up Your Account
                        </Button></>
                    )}
                  </div>
                </div>
              )}

              {lmsStatus === 'completed' && (
                <div className="mb-6 p-4 bg-blue-50 text-blue-700 rounded-lg">
                  <p className="text-sm mt-1">Kindly take notice that you cannot revisit this page for your course information, please check you mailbox for nessessary steps to proceed from here.</p>
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
