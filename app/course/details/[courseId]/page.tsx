"use client"

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import FadeIn from '@/components/animations/fade-in'
import { Loader2, BookOpen, Shield, Clock, User, Award, FileText, Video, HelpCircle } from 'lucide-react'
import cyberfund from '@/components/images/cyberfund.jpeg'
import cyber from '@/components/images/0.png'
import Image from 'next/image'

export default function CourseDetailsPage({ params }: { params: { courseId: string } }) {
  const router = useRouter()
  const [course, setCourse] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`https://robiatschools.com/api/v1/course/summary/68891facbc9839284aebb86d?userId=6878e210bc9839284aebb865`)

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
  }, [params.courseId])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'DOCUMENT':
        return <FileText className="w-5 h-5 text-cybernovr-purple" />
      case 'VIDEO':
        return <Video className="w-5 h-5 text-cybernovr-purple" />
      case 'QUIZ':
        return <HelpCircle className="w-5 h-5 text-cybernovr-purple" />
      case 'TEXT':
        return <BookOpen className="w-5 h-5 text-cybernovr-purple" />
      default:
        return <BookOpen className="w-5 h-5 text-cybernovr-purple" />
    }
  }

  const getLessonTypeText = (type: string) => {
    switch (type) {
      case 'DOCUMENT':
        return 'PDF Document'
      case 'VIDEO':
        return 'Video Lesson'
      case 'QUIZ':
        return 'Quiz'
      case 'TEXT':
        return 'Text Lesson'
      default:
        return 'Lesson'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <Loader2 className="h-8 w-8 animate-spin text-cybernovr-purple" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
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
      <div className="min-h-screen flex items-center justify-center pt-24">
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
                  {/* Course Thumbnail */}
                  <div className="w-full md:w-1/3 rounded-lg overflow-hidden h-64">
                    <Image
                      src={cyberfund}
                      alt={course.courseName}
                      className="object-cover w-full h-full"
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
                      {course.price > 0 && (
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
                      <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
                        <Clock className="w-4 h-4 mr-1 text-cybernovr-purple" />
                        {course.target || 'All levels'}
                      </div>
                      <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
                        <Award className="w-4 h-4 mr-1 text-cybernovr-purple" />
                        Certificate
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button 
                        onClick={() => router.push('/courses/enroll')}
                        className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white px-8 py-4 text-lg w-full md:w-auto"
                      >
                        Enroll Now
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
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Course Curriculum</h2>
                    
                    {course.curriculum?.topic?.length > 0 ? (
                      <div className="space-y-8">
                        {course.curriculum.topic.map((topic: any, index: number) => (
                          <div key={topic.id || index} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                              <span className="bg-cybernovr-purple text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                                {index + 1}
                              </span>
                              {topic.title}
                            </h3>
                            
                            {topic.description && (
                              <p className="text-gray-600 mb-4">{topic.description}</p>
                            )}
                            
                            {topic.lessons?.length > 0 && (
                              <div className="space-y-3">
                                {topic.lessons.map((lesson: any, lessonIndex: number) => (
                                  <div key={lesson.id || lessonIndex} className="flex items-center bg-gray-50 p-4 rounded-lg">
                                    <div className="mr-4">
                                      {getLessonIcon(lesson.type)}
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-800">{lesson.title}</h4>
                                      <p className="text-sm text-gray-500 mt-1">
                                        {getLessonTypeText(lesson.type)}
                                        {lesson.extension && ` • ${lesson.extension.toUpperCase()}`}
                                      </p>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      {lesson.orderIndex && `Lesson ${lesson.orderIndex}`}
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
                    <div className="w-16 h-16 rounded-full bg-cybernovr-purple/10 flex items-center justify-center text-cybernovr-purple font-bold text-xl">
                      {course.author?.firstname?.charAt(0)}{course.author?.lastname?.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {course.author?.firstname} {course.author?.lastname}
                      </h4>
                      <p className="text-sm text-gray-600">{course.author?.email}</p>
                      <p className="text-sm text-gray-600 mt-1">Cybersecurity Expert</p>
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
                      <span className="text-gray-600">Level:</span>
                      <span className="font-medium">{course.target || 'Beginner to Intermediate'}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-medium">{formatPrice(course.price || 0)}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Modules:</span>
                      <span className="font-medium">{course.curriculum?.topic?.length || 0}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Lessons:</span>
                      <span className="font-medium">
                        {course.curriculum?.topic?.reduce((total: number, topic: any) => 
                          total + (topic.lessons?.length || 0), 0) || 0}
                      </span>
                    </li>
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
                
                {/* What You'll Learn */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">What You'll Learn</h3>
                  <ul className="space-y-3">
                    {course.curriculum?.topic?.slice(0, 5).map((topic: any, index: number) => (
                      <li key={topic.id || index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{topic.title}</span>
                      </li>
                    ))}
                    {course.curriculum?.topic?.length > 5 && (
                      <li className="text-cybernovr-purple font-medium">
                        +{course.curriculum.topic.length - 5} more modules
                      </li>
                    )}
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