"use client"

import { useState } from 'react'
import Image from "next/image"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, Mail, Shield, CheckCircle } from 'lucide-react'
import FadeIn from '@/components/animations/fade-in'
import herobanner from "@/components/images/cybersecurity-event-rotary.jpg"

const ORGANIZATION_ID = "685ec1191008ea7cff78dbc8"

type Step = 'email' | 'token' | 'success'

export default function OnboardingPage() {
  const [step, setStep] = useState<Step>('email')
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [studentName, setStudentName] = useState('')

  const generateToken = async () => {
    try {
      setLoading(true)
      setError('')

      if (!email) {
        throw new Error('Email is required')
      }

      if (!email.includes('@')) {
        throw new Error('Please enter a valid email address')
      }

      const response = await fetch('/api/lms/generate-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          organizationId: ORGANIZATION_ID,
          email
        })
      })

      const responseText = await response.text()
      let responseData: any = {}

      try {
        responseData = responseText ? JSON.parse(responseText) : {}
      } catch (parseError) {
        console.error('JSON parse error:', parseError)
        throw new Error('Invalid server response')
      }

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to generate token')
      }

      // Extract name from email for display
      const nameFromEmail = email.split('@')[0]
      setStudentName(nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1))

      setStep('token')
    } catch (err) {
      console.error('Generate token error:', err)
      setError(err instanceof Error ? err.message : 'Failed to send verification code')
    } finally {
      setLoading(false)
    }
  }

  const resetPassword = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }

    try {
      setLoading(true)
      setError('')

      const response = await fetch('/api/lms/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          organizationId: ORGANIZATION_ID,
          email,
          password,
          token
        })
      })

      const responseText = await response.text()
      let responseData

      try {
        responseData = responseText ? JSON.parse(responseText) : responseText
      } catch (e) {
        responseData = responseText
      }

      if (!response.ok) {
        throw new Error(
          typeof responseData === 'object'
            ? responseData.message || 'Failed to set password'
            : responseData || 'Failed to set password'
        )
      }

      setStep('success')
    } catch (err) {
      console.error('Password reset error:', err)
      setError(err instanceof Error ? err.message : 'Failed to set password')
    } finally {
      setLoading(false)
    }
  }

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step === 'email' ? 'bg-cybernovr-purple text-white' : 'bg-gray-300 text-gray-600'
          }`}>
          <Mail className="h-4 w-4" />
        </div>
        <div className={`w-16 h-1 mx-2 ${step === 'email' ? 'bg-gray-300' : 'bg-cybernovr-purple'
          }`} />
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step === 'token' ? 'bg-cybernovr-purple text-white' :
          step === 'success' ? 'bg-cybernovr-purple text-white' : 'bg-gray-300 text-gray-600'
          }`}>
          <Shield className="h-4 w-4" />
        </div>
        <div className={`w-16 h-1 mx-2 ${step === 'success' ? 'bg-cybernovr-purple' : 'bg-gray-300'
          }`} />
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step === 'success' ? 'bg-cybernovr-purple text-white' : 'bg-gray-300 text-gray-600'
          }`}>
          <CheckCircle className="h-4 w-4" />
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-light-gray pt-32 pb-20 flex ">
      {/* Left Side - Hero Image */}
      <div className='container-custom colspan-1 flex justify-center items-center mb-8 hidden lg:block '>
        <FadeIn direction="left" delay={0.3} duration={0.7}>
          <div className="rounded-lg hidden lg:flex lg:w-full bg-light-gray items-center justify-center p-5">
            <Image
              src={herobanner}
              alt="CEAP Program"
              // fill
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
        </FadeIn>
      </div>

      {/* Right Side - Form */}
      <div className="container-custom colspan-1 flex justify-center items-center mb-8">
        <FadeIn direction="up">
          <div className="max-w-md mx-auto colspan-1 flex justify-center items-center mb-8">
            <Card className="w-full shadow-lg">
              <CardHeader className="text-center pb-4">
                {renderStepIndicator()}
                <CardTitle className="text-2xl font-bold">
                  {step === 'email' && 'Welcome to CEAP Program'}
                  {step === 'token' && 'Set Your Password'}
                  {step === 'success' && 'Welcome Aboard!'}
                </CardTitle>
                <CardDescription>
                  {step === 'email' && 'Cybersecurity Education and Awareness Program'}
                  {step === 'token' && 'Enter the verification code sent to your email'}
                  {step === 'success' && 'Your account has been successfully created'}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Step 1: Email Input */}
                {step === 'email' && (
                  <div className="space-y-4">
                    <div className="text-center mb-4">
                      <p className="text-gray-600">
                        Enter your email address to receive a verification code and begin your cybersecurity journey.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full"
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    <Button
                      onClick={generateToken}
                      disabled={loading || !email}
                      className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                          Sending Code...
                        </>
                      ) : (
                        'Send Verification Code'
                      )}
                    </Button>
                  </div>
                )}

                {/* Step 2: Token and Password */}
                {step === 'token' && (
                  <div className="space-y-4">
                    <div className="text-center mb-4">
                      <p className="text-gray-600">
                        A verification code has been sent to <strong>{email}</strong>.
                        Enter the code and create your password.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="token">Verification Code</Label>
                      <Input
                        id="token"
                        type="text"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                        placeholder="Enter 6-digit code"
                        className="w-full text-center text-lg font-mono tracking-widest"
                        maxLength={6}
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
                        className="w-full"
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
                        className="w-full"
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setStep('email')
                          setError('')
                          setToken('')
                          setPassword('')
                          setConfirmPassword('')
                        }}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={resetPassword}
                        disabled={loading || !token || !password || !confirmPassword}
                        className="flex-1 bg-cybernovr-purple hover:bg-cybernovr-purple/90"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                            Setting Password...
                          </>
                        ) : (
                          'Set Password'
                        )}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Success */}
                {step === 'success' && (
                  <div className="text-center space-y-6 py-4">
                    <div className="flex justify-center">
                      <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">
                        Congratulations, {studentName}!
                      </h3>
                      <p className="text-gray-600">
                        Welcome onboard to the <strong>Cybersecurity Education and Awareness Program (CEAP)</strong>
                      </p>
                    </div>

                    <div className="bg-cybernovr-purple/10 p-4 rounded-lg">
                      <p className="text-sm text-cybernovr-purple">
                        Your account has been successfully created and you're now ready to begin your cybersecurity journey.
                      </p>
                    </div>

                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-medium text-yellow-800 mb-2">Important Note:</h4>
                      <p className="text-yellow-700">
                        Check your inbox for an email titled <strong>Welcome to Cybersecurity Education and Awareness Program (CEAP)</strong> from Horace Learning admin.  <br /> 
                        Click the <strong>Start Learning Now</strong> button in the email to access your learning portal and begin your training.
                      </p>
                    </div>

                    <Button
                      onClick={() => {
                        // Redirect to login or dashboard
                        window.location.href = 'https://lms.horacelearning.com/course/68ce2cd9a05a4b67aa4d8e2d/'
                      }}
                      className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90"
                    >
                      Continue to Learning Portal
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}