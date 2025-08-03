"use client"

import { useState } from 'react'
import Image from "next/image";
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'
import FadeIn from '@/components/animations/fade-in'
import herobanner from "@/components/images/carouselworthy2.jpeg";

export default function OnboardingPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const userId = searchParams.get('userId')
  const email = searchParams.get('email')
  const name = searchParams.get('name')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [tokenSent, setTokenSent] = useState(false)
  const [token, setToken] = useState('')

const encodeUserId = (userId: string) => {
    return Buffer.from(userId).toString('base64');
  };

  // console.log('User ID:', userId)
  // console.log(encodeUserId(userId ?? ''))

const generateToken = async () => {
  try {
    setLoading(true);
    setError('');
    
    if (!email) {
      throw new Error('Email is required');
    }

    // console.log('Attempting to generate token for:', email)

    const response = await fetch('/api/lms/generate-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        organizationId: "685ec1191008ea7cff78dbc8",
        email
      })
    });

    // First check if response exists
    if (!response) {
      throw new Error('No response from server');
    }

    // Handle empty responses
    const responseText = await response.text();
    let responseData: any = {};
    
    try {
      responseData = responseText ? JSON.parse(responseText) : {};
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      throw new Error('Invalid server response');
    }

    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to generate token');
    }

    // console.log('Token generation successful', responseData);
    setTokenSent(true);
  } catch (err) {
    console.error('Generate token error:', err);
    setError(err instanceof Error ? err.message : 'Failed to send reset token');
  } finally {
    setLoading(false);
  }
};

const resetPassword = async () => {
  if (password !== confirmPassword) {
    setError('Passwords do not match');
    return;
  }

  if (password.length < 8) {
    setError('Password must be at least 8 characters');
    return;
  }

  try {
    setLoading(true);
    setError('');
    
    // console.log('Attempting password reset with:', {
    //   email,
    //   token,
    //   passwordLength: password.length
    // });

    const response = await fetch('/api/lms/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        organizationId: "685ec1191008ea7cff78dbc8",
        email,
        password,
        token
      })
    });

    const responseText = await response.text();
    // console.log('Raw api response:', responseText);

    let responseData;
    try {
      responseData = responseText ? JSON.parse(responseText) : responseText;
    } catch (e) {
      responseData = responseText;
    }

    if (!response.ok) {
      throw new Error(
        typeof responseData === 'object' 
          ? responseData.message || 'Failed to reset password'
          : responseData || 'Failed to reset password'
      );
    }

    const successMessage = typeof responseData === 'object'
      ? responseData.message || 'Password reset successful'
      : responseData;

    // console.log('Password reset success:', successMessage);
    setSuccess(true);
    
    // setTimeout(() => {
    //   router.push(`/course/${searchParams.get('courseId')}/?userId=${encodeUserId(userId)}`);
    // }, 2000);
    setTimeout(() => {
        router.push(`/course/${searchParams.get('courseId')}?userId=${encodeUserId(userId ?? '')}`);
    }, 2000);
  } catch (err) {
    console.error('Password reset error:', err);
    setError(err instanceof Error ? err.message : 'Failed to reset password');
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-light-gray pt-32 pb-20 flex">
      <div className='container-custom colspan-1 flex justify-center items-center mb-8 hidden lg:block'>
        <FadeIn direction="left" delay={0.3} duration={0.7}>
          <div className=" rounded-lg shadow-xl">
            <Image
              src={herobanner}
              alt="Onboarding Hero"
              fill
              className="object-cover max-h-screen max-w-[50%]"
            />
          </div>
        </FadeIn>
      </div>
      <div className="container-custom colspan-1 flex justify-center items-center mb-8">
        <FadeIn direction="up">
          <div className="max-w-md mx-auto colspan-1 flex justify-center items-center mb-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-2xl font-bold mb-6 text-center">
                Hello, {name}!
              </h1>
              
              <p className="text-gray-600 mb-6 text-center">
                Welcome to your learning journey. <br /> We are thrilled to have you at Cybernovr Limited. Before you begin, you need to set your password.
              </p>

              {!tokenSent ? (
                <div className="space-y-4">
                  <Button
                    onClick={generateToken}
                    disabled={loading}
                    className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      'Send Verification Code'
                    )}
                  </Button>
                </div>
              ) : !success ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="token">Verification Code</Label>
                    <Input
                      id="token"
                      type="text"
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                      placeholder="Enter code sent to your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">New Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your new password"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your new password"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}

                  <Button
                    onClick={resetPassword}
                    disabled={loading}
                    className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      'Set Password'
                    )}
                  </Button>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-green-500 mb-4">Password set successfully! Redirecting to your course...</p>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}