// // app/course-registration/page.tsx
// "use client"

// import { useState, useEffect } from "react"
// import { useSearchParams } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { CheckCircle, XCircle, Clock, Play, StopCircle, Download } from "lucide-react"
// import { COURSE_REGISTRATION_DATA } from "@/lib/course-registration-data"

// const courses = {
//   cs101: {
//     title: "Cybersecurity Education and Awareness Program (CEAP)",
//     price: 1,
//   },
//   cs201: {
//     title: "Network Security Essentials",
//     price: 80000,
//   },
//   cs301: {
//     title: "Advanced Penetration Testing",
//     price: 80000,
//   },
// }

// interface RegistrationResult {
//   userId: string
//   email: string
//   name: string
//   status: 'pending' | 'processing' | 'success' | 'error'
//   payload?: any
//   response?: any
//   error?: string
//   attempts?: any[]
// }

// export default function CourseRegistrationPage() {
//   const searchParams = useSearchParams()
//   const courseId = searchParams.get("course") || "68ce2cd9a05a4b67aa4d8e2d"
//   const course = courses[courseId as keyof typeof courses] || courses.cs101

//   const [results, setResults] = useState<RegistrationResult[]>([])
//   const [isProcessing, setIsProcessing] = useState(false)
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [completed, setCompleted] = useState(0)
//   const [failed, setFailed] = useState(0)

//   // Initialize results
//   useEffect(() => {
//     const initialResults: RegistrationResult[] = COURSE_REGISTRATION_DATA.map(student => ({
//       userId: student.userId,
//       email: student.email,
//       name: student.name,
//       status: 'pending'
//     }))
//     setResults(initialResults)
//   }, [])

//   const processNextStudent = async () => {
//     if (currentIndex >= COURSE_REGISTRATION_DATA.length) {
//       setIsProcessing(false)
//       return
//     }

//     const student = COURSE_REGISTRATION_DATA[currentIndex]
    
//     // Update status to processing
//     setResults(prev => prev.map(r => 
//       r.userId === student.userId ? { ...r, status: 'processing' } : r
//     ))

//     try {
//       const response = await fetch('/api/lms/register-single-course', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           userId: student.userId,
//           courseId: courseId
//         })
//       })

//       const data = await response.json()

//       if (data.success) {
//         setResults(prev => prev.map(r => 
//           r.userId === student.userId ? { 
//             ...r, 
//             status: 'success', 
//             response: data.data,
//             attempts: data.attempts 
//           } : r
//         ))
//         setCompleted(prev => prev + 1)
//       } else {
//         setResults(prev => prev.map(r => 
//           r.userId === student.userId ? { 
//             ...r, 
//             status: 'error', 
//             error: data.message,
//             attempts: data.attempts,
//             response: data.lastError
//           } : r
//         ))
//         setFailed(prev => prev + 1)
//       }
//     } catch (error) {
//       setResults(prev => prev.map(r => 
//         r.userId === student.userId ? { 
//           ...r, 
//           status: 'error', 
//           error: 'Network error occurred'
//         } : r
//       ))
//       setFailed(prev => prev + 1)
//     }

//     setCurrentIndex(prev => prev + 1)
//   }

//   const startRegistration = async () => {
//     setIsProcessing(true)
//     setCurrentIndex(0)
//     setCompleted(0)
//     setFailed(0)
    
//     // Reset all to pending
//     setResults(prev => prev.map(r => ({ ...r, status: 'pending' })))
//   }

//   const stopRegistration = () => {
//     setIsProcessing(false)
//   }

//   // Process next student when currentIndex changes and isProcessing is true
//   useEffect(() => {
//     if (isProcessing && currentIndex < COURSE_REGISTRATION_DATA.length) {
//       const timer = setTimeout(processNextStudent, 500) // 500ms delay between requests
//       return () => clearTimeout(timer)
//     } else if (currentIndex >= COURSE_REGISTRATION_DATA.length) {
//       setIsProcessing(false)
//     }
//   }, [isProcessing, currentIndex])

//   const downloadResults = () => {
//     const report = {
//       course: course.title,
//       courseId: courseId,
//       timestamp: new Date().toISOString(),
//       summary: {
//         total: COURSE_REGISTRATION_DATA.length,
//         completed: completed,
//         failed: failed,
//         pending: COURSE_REGISTRATION_DATA.length - completed - failed
//       },
//       results: results
//     }

//     const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' })
//     const url = URL.createObjectURL(blob)
//     const a = document.createElement('a')
//     a.href = url
//     a.download = `course-registration-report-${new Date().getTime()}.json`
//     document.body.appendChild(a)
//     a.click()
//     document.body.removeChild(a)
//     URL.revokeObjectURL(url)
//   }

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case 'success':
//         return <CheckCircle className="h-4 w-4 text-green-500" />
//       case 'error':
//         return <XCircle className="h-4 w-4 text-red-500" />
//       case 'processing':
//         return <Clock className="h-4 w-4 text-blue-500 animate-pulse" />
//       default:
//         return <Clock className="h-4 w-4 text-gray-400" />
//     }
//   }

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'success':
//         return 'bg-green-100 text-green-800'
//       case 'error':
//         return 'bg-red-100 text-red-800'
//       case 'processing':
//         return 'bg-blue-100 text-blue-800'
//       default:
//         return 'bg-gray-100 text-gray-800'
//     }
//   }

//   return (
//     <div className="min-h-screen bg-light-gray pt-32 pb-20">
//       <div className="container-custom">
//         <div className="max-w-6xl mx-auto">
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold mb-2">Bulk Course Registration</h1>
//             <p className="text-xl text-gray-600">
//               Register {COURSE_REGISTRATION_DATA.length} students for {course.title}
//             </p>
//           </div>

//           {/* Control Panel */}
//           <Card className="mb-8">
//             <CardHeader>
//               <CardTitle>Registration Control</CardTitle>
//               <CardDescription>
//                 Process course registrations one by one with detailed monitoring
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <Button
//                     onClick={startRegistration}
//                     disabled={isProcessing}
//                     className="bg-green-600 hover:bg-green-700"
//                   >
//                     <Play className="h-4 w-4 mr-2" />
//                     Start Registration
//                   </Button>
                  
//                   <Button
//                     onClick={stopRegistration}
//                     disabled={!isProcessing}
//                     variant="outline"
//                     className="border-red-300 text-red-700 hover:bg-red-50"
//                   >
//                     <StopCircle className="h-4 w-4 mr-2" />
//                     Stop
//                   </Button>
//                 </div>

//                 <div className="flex items-center gap-6 text-sm">
//                   <div className="flex items-center gap-2">
//                     <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     <span>Completed: {completed}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                     <span>Failed: {failed}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
//                     <span>Pending: {COURSE_REGISTRATION_DATA.length - completed - failed}</span>
//                   </div>
//                 </div>

//                 <Button
//                   onClick={downloadResults}
//                   variant="outline"
//                   className="flex items-center gap-2"
//                 >
//                   <Download className="h-4 w-4" />
//                   Download Report
//                 </Button>
//               </div>

//               {isProcessing && (
//                 <div className="mt-4">
//                   <div className="w-full bg-gray-200 rounded-full h-2">
//                     <div 
//                       className="bg-cybernovr-purple h-2 rounded-full transition-all duration-300"
//                       style={{ width: `${(currentIndex / COURSE_REGISTRATION_DATA.length) * 100}%` }}
//                     ></div>
//                   </div>
//                   <p className="text-sm text-gray-600 mt-2 text-center">
//                     Processing {currentIndex} of {COURSE_REGISTRATION_DATA.length} students...
//                   </p>
//                 </div>
//               )}
//             </CardContent>
//           </Card>

//           {/* Results Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {results.map((result, index) => (
//               <Card key={result.userId} className="relative">
//                 <CardHeader className="pb-3">
//                   <div className="flex items-center justify-between">
//                     <CardTitle className="text-sm font-medium">
//                       {result.name}
//                     </CardTitle>
//                     {getStatusIcon(result.status)}
//                   </div>
//                   <CardDescription className="text-xs break-all">
//                     {result.email}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="pt-0">
//                   <div className="flex items-center justify-between">
//                     <Badge variant="secondary" className={getStatusColor(result.status)}>
//                       {result.status.toUpperCase()}
//                     </Badge>
//                     <span className="text-xs text-gray-500">#{index + 1}</span>
//                   </div>
                  
//                   {result.error && (
//                     <p className="text-xs text-red-600 mt-2">{result.error}</p>
//                   )}
                  
//                   {result.attempts && (
//                     <details className="mt-2">
//                       <summary className="text-xs text-blue-600 cursor-pointer">
//                         View Attempts ({result.attempts.length})
//                       </summary>
//                       <pre className="text-xs bg-gray-50 p-2 mt-1 rounded overflow-auto max-h-32">
//                         {JSON.stringify(result.attempts, null, 2)}
//                       </pre>
//                     </details>
//                   )}
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
