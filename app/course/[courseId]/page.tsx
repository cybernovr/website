"use client"

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import FadeIn from '@/components/animations/fade-in'
import { Loader2, BookOpen, Shield, Code, Gavel, Clock, User, Award } from 'lucide-react'
import cyberfund from '@/components/images/cyberfund.jpeg'
import cyber from '@/components/images/0.png'
import Image from 'next/image'

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [course, setCourse] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const encodedUserId = searchParams.get('userId')
  const userId = encodedUserId ? atob(encodedUserId) : null

  useEffect(() => {
    if (!userId) {
      setError('User ID is required')
      setLoading(false)
      return
    }

    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/lms/course/${params.courseId}?userId=${userId}`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch course details')
        }

        const data = await response.json()
        setCourse(data)
      } catch (err) {
        console.error('Error fetching course:', err)
        setError(err instanceof Error ? err.message : 'Failed to load course')
      } finally {
        setLoading(false)
      }
    }

    fetchCourse()
  }, [params.courseId, userId])

  const lmsUrl = 'https://lms.horacelearning.com/'

  // const handleStartCourse = () => {
  //   if (course?.lmsUrl) {
  //     window.open(course.lmsUrl, '_blank')
  //   }
  // }

  const handleStartCourse = () => {
  if (course?.courseId && userId) {
    const encodedUserId = Buffer.from(userId).toString('base64')
    const lmsUrl = `https://lms.horacelearning.com/course/${course.courseId}/?userId=${encodedUserId}`
    window.open(lmsUrl, '_blank')
  }
}

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-cybernovr-purple" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-cybernovr-purple">Error Loading Course</h2>
          <p className="text-red-500 mb-6">{error}</p>
          <Button 
            onClick={() => router.push('/courses')}
            className="bg-cybernovr-purple hover:bg-cybernovr-purple/90"
          >
            Back to Courses
          </Button>
        </div>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-cybernovr-purple">Course Not Found</h2>
          <Button 
            onClick={() => router.push('/courses')}
            className="bg-cybernovr-purple hover:bg-cybernovr-purple/90"
          >
            Back to Courses
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container-custom">
        <FadeIn direction="up">
          <div className="max-w-6xl mx-auto">
            {/* Course Header */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Course Thumbnail Placeholder */}
                  <div className="w-full md:w-1/3 bg-gray-200 rounded-lg flex items-center justify-center h-64">
                    {/* {course.thumbnail ? (
                      <img 
                        src={cyberfund.src} 
                        alt={course.courseName}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="text-gray-400 text-center p-4">
                        <BookOpen className="w-12 h-12 mx-auto mb-2" />
                        <p>Course Image</p>
                      </div>
                    )} */}
                    <Image
                      src={cyberfund}
                      alt={course.courseName}
                      className="object-cover w-full h-full rounded-lg"
                      width={300}
                      height={200}
                    />
                  </div>
                  
                  {/* Course Info */}
                  <div className="w-full md:w-2/3">
                    <div className="flex justify-between items-start mb-4">
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {course.courseName}
                      </h1>
                      {course.price && (
                        <div className="bg-cybernovr-purple/10 px-4 py-2 rounded-lg">
                          <span className="text-cybernovr-purple font-bold text-xs md:text-sm">
                            {formatPrice(course.price)}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-lg">
                      {course.brief || "Comprehensive cybersecurity training course"}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
                        <Shield className="w-4 h-4 mr-1 text-cybernovr-purple" />
                        {course.category || 'Cybersecurity'}
                      </div>
                      <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
                        <User className="w-4 h-4 mr-1 text-cybernovr-purple" />
                        {course.author?.firstname} {course.author?.lastname}
                      </div>
                      {/* <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
                        <Clock className="w-4 h-4 mr-1 text-cybernovr-purple" />
                        {course.target || 'All levels'}
                      </div> */}
                      {course.certificate && (
                        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
                          <Award className="w-4 h-4 mr-1 text-cybernovr-purple" />
                          Certificate
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-6">
                      <Button 
                        onClick={handleStartCourse}
                        className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white px-8 py-4 text-lg w-full md:w-auto"
                      >
                        {course.isEnrolled ? 'Go To class' : 'Go To Class'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Course Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Course Overview */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                      <BookOpen className="w-6 h-6 mr-2 text-cybernovr-purple" />
                      Course Overview
                    </h2>
                    <div className="prose max-w-none text-gray-700">
                      {course.overview ? (
                        <p>{course.overview}</p>
                      ) : (
                        <p>This comprehensive cybersecurity course covers fundamental concepts and practical skills needed to protect digital assets. Through interactive lessons and real-world scenarios, you'll gain the knowledge to identify threats and implement security measures.</p>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Curriculum */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Curriculum</h2>
                    
                    {course.curriculum?.topic?.length > 0 ? (
                      <div className="space-y-6">
                        {course.curriculum.topic.map((topic: any) => (
                          <div key={topic.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">
                              {topic.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{topic.description}</p>
                            
                            {topic.lessons?.length > 0 && (
                              <div className="space-y-3">
                                {topic.lessons.map((lesson: any) => (
                                  <div key={lesson.id} className="flex items-start bg-gray-50 p-3 rounded-lg">
                                    <div className="mr-3 mt-1">
                                      {lesson.type === 'DOCUMENT' ? (
                                        <BookOpen className="w-5 h-5 text-cybernovr-purple" />
                                      ) : lesson.type === 'VIDEO' ? (
                                        <svg className="w-5 h-5 text-cybernovr-purple" fill="currentColor" viewBox="0 0 20 20">
                                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                                        </svg>
                                      ) : (
                                        <Code className="w-5 h-5 text-cybernovr-purple" />
                                      )}
                                    </div>
                                    <div>
                                      <h4 className="font-medium text-gray-800">{lesson.title}</h4>
                                      {/* {lesson.content && (
                                        <a 
                                          href={lesson.content} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="text-sm text-cybernovr-purple hover:underline mt-1 inline-block"
                                        >
                                          View Resource
                                        </a>
                                      )} */}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-gray-500 italic">
                        Curriculum details coming soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Instructor Card */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Instructor</h3>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center">
                      {/* {course.author?.firstname?.charAt(0)}{course.author?.lastname?.charAt(0)} */}
                      <Image
                        src={cyber}
                        alt={course.courseName}
                        className="object-cover w-full h-full rounded-lg"
                        width={3}
                        height={2}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {/* {course.author?.firstname} {course.author?.lastname} */}
                        Cybernovr Limited
                      </h4>
                      <p className="text-sm text-gray-600">{course.author?.email}</p>
                      <p className="text-sm text-gray-600 mt-1">Cybersecurity Experts</p>
                    </div>
                  </div>
                </div>
                
                {/* Course Details */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Course Details</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium">{course.category || 'Cybersecurity'}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Age Level:</span>
                      <span className="font-medium">{course.target || 'Beginner to Intermediate'}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-medium">{formatPrice(course.price || 0)}</span>
                    </li>
                    {/* <li className="flex justify-between">
                      <span className="text-gray-600">Certificate:</span>
                      <span className="font-medium">{course.certificate ? 'Yes' : 'No'}</span>
                    </li> */}
                    <li className="flex justify-between">
                      <span className="text-gray-600">Created:</span>
                      <span className="font-medium">
                        {new Date(course.createdOn).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </li>
                  </ul>
                </div>
                
                {/* Course Highlights */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">What You'll Learn</h3>
                  <ul className="space-y-3">
                    {course.curriculum?.topic?.slice(0, 5).map((topic: any) => (
                      <li key={topic.id} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{topic.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}