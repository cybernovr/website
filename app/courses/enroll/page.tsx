// "use client"

// import type React from "react"

// import { useState } from "react"
// import { useSearchParams, useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Checkbox } from "@/components/ui/checkbox"
// import { motion } from "framer-motion"
// import FadeIn from "@/components/animations/fade-in"
// import { ArrowLeft, CheckCircle } from "lucide-react"

// const courses = {
//   cs101: {
//     title: "Cybersecurity Education and Awareness Program (CEAP)",
//     price: 80000,
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

// export default function EnrollPage() {
//   const router = useRouter()
//   const searchParams = useSearchParams()
//   const courseId = searchParams.get("course") || "cs101"
//   const course = courses[courseId as keyof typeof courses] || courses.cs101

//   const [formData, setFormData] = useState({
//     name: "",
//     dateOfBirth: "",
//     schoolName: "",
//     classInSchool: "",
//     applicantContact: "",
//     headOfSchoolName: "",
//     headOfSchoolEmail: "",
//     parentName: "",
//     parentEmail: "",
//     schoolConsent: false,
//     parentConsent: false,
//   })
//   const [step, setStep] = useState(1)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [paymentError, setPaymentError] = useState("")

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleCheckboxChange = (name: string, checked: boolean) => {
//     setFormData((prev) => ({ ...prev, [name]: checked }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Store form data and move t payment step
//     setStep(2)
//     setIsSubmitting(false)
//   }

//   const initiatePayment = async () => {
//     setIsSubmitting(true)
//     setPaymentError("")

//     try {
//       const response = await fetch('/api/paystack', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.applicantContact,
//           amount: course.price,
//           courseId,
//           name: formData.name,
//           schoolName: formData.schoolName,
//           classInSchool: formData.classInSchool,
//           headOfSchoolName: formData.headOfSchoolName,
//           headOfSchoolEmail: formData.headOfSchoolEmail,
//           parentName: formData.parentName,
//           parentEmail: formData.parentEmail,
//           schoolConsent: formData.schoolConsent,
//           parentConsent: formData.parentConsent,
//           applicantContact: formData.applicantContact,
//         }),
//       });

//       const data = await response.json();

//       if (data.success && data.redirectUrl) {
//         // Redirect to Paystack payment page
//         window.location.href = data.redirectUrl;
//       } else {
//         setPaymentError(data.error || 'Failed to initialize payment. Please try again.');
//         setIsSubmitting(false);
//       }
//     } catch (error) {
//       console.error('Payment initialization error:', error);
//       setPaymentError('An error occurred while processing your payment. Please try again.');
//       setIsSubmitting(false);
//     }
//   };

//   // Format price in Naira
//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat('en-NG', {
//       style: 'currency',
//       currency: 'NGN',
//       minimumFractionDigits: 0,
//     }).format(price);
//   };

//   return (
//     <div className="min-h-screen bg-light-gray pt-32 pb-20">
//       <div className="container-custom">
//         <FadeIn direction="up">
//           <div className="max-w-2xl mx-auto">
//             <button
//               onClick={() => router.back()}
//               className="flex items-center text-cybernovr-purple hover:text-cybernovr-purple/90 mb-6 transition-colors"
//             >
//               <ArrowLeft className="h-4 w-4 mr-2" />
//               Back to Courses
//             </button>

//             <div className="bg-white rounded-lg shadow-md p-8">
//               <h1 className="text-3xl font-bold mb-2">Cybersecurity Training Enrollment</h1>
//               <h2 className="text-xl mb-6">Registration Form for Cybersecurity Youth League</h2>

//               <div className="flex mb-8">
//                 <div className="flex items-center">
//                   <div
//                     className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-cybernovr-purple text-white" : "bg-gray-200 text-gray-500"
//                       }`}
//                   >
//                     1
//                   </div>
//                   <span className="ml-2 font-medium">Your Details</span>
//                 </div>
//                 <div className="mx-4 border-t border-gray-300 flex-1 self-center"></div>
//                 <div className="flex items-center">
//                   <div
//                     className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-cybernovr-purple text-white" : "bg-gray-200 text-gray-500"
//                       }`}
//                   >
//                     2
//                   </div>
//                   <span className="ml-2 font-medium">Payment</span>
//                 </div>
//               </div>

//               {step === 1 && (
//                 <motion.form
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   onSubmit={handleSubmit}
//                   className="space-y-6"
//                 >
//                   <div>
//                     <Label htmlFor="name">Name</Label>
//                     <Input
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="mt-1"
//                       placeholder="Enter your full name"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="applicantContact">Email Address of Applicant/Guardian</Label>
//                     <Input
//                       id="applicantContact"
//                       name="applicantContact"
//                       value={formData.applicantContact}
//                       onChange={handleChange}
//                       required
//                       className="mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="dateOfBirth">Date of Birth</Label>
//                     <Input
//                       id="dateOfBirth"
//                       name="dateOfBirth"
//                       type="date"
//                       value={formData.dateOfBirth}
//                       onChange={handleChange}
//                       required
//                       className="mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="schoolName">Name of School</Label>
//                     <Input
//                       id="schoolName"
//                       name="schoolName"
//                       value={formData.schoolName}
//                       onChange={handleChange}
//                       required
//                       className="mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="classInSchool">Class in School (JS1 through SS3)</Label>
//                     <Input
//                       id="classInSchool"
//                       name="classInSchool"
//                       value={formData.classInSchool}
//                       onChange={handleChange}
//                       required
//                       className="mt-1"
//                       placeholder="e.g. JS1, SS3"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="headOfSchoolName">Principal (Head of School) Name</Label>
//                     <Input
//                       id="headOfSchoolName"
//                       name="headOfSchoolName"
//                       value={formData.headOfSchoolName}
//                       onChange={handleChange}
//                       required
//                       className="mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="headOfSchoolEmail">Principal (Head of School) Email</Label>
//                     <Input
//                       id="headOfSchoolEmail"
//                       name="headOfSchoolEmail"
//                       type="email"
//                       value={formData.headOfSchoolEmail}
//                       onChange={handleChange}
//                       required
//                       className="mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="parentName">Name of Parent</Label>
//                     <Input
//                       id="parentName"
//                       name="parentName"
//                       value={formData.parentName}
//                       onChange={handleChange}
//                       required
//                       className="mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="parentEmail">Email Address of Parent</Label>
//                     <Input
//                       id="parentEmail"
//                       name="parentEmail"
//                       type="email"
//                       value={formData.parentEmail}
//                       onChange={handleChange}
//                       required
//                       className="mt-1"
//                     />
//                   </div>

//                   <div className="flex items-center space-x-2 pt-2">
//                     <Checkbox
//                       id="schoolConsent"
//                       checked={formData.schoolConsent}
//                       onCheckedChange={(checked) =>
//                         handleCheckboxChange('schoolConsent', checked as boolean)
//                       }
//                       required
//                     />
//                     <Label htmlFor="schoolConsent" className="text-sm">
//                       <strong>Consent of School:</strong> I consent to the student of my school to join the Cybersecurity Youth League of <strong>CYBERNOVR</strong> Limited in line with the terms and conditions
//                     </Label>
//                   </div>

//                   <div className="flex items-center space-x-2">
//                     <Checkbox
//                       id="parentConsent"
//                       checked={formData.parentConsent}
//                       onCheckedChange={(checked) =>
//                         handleCheckboxChange('parentConsent', checked as boolean)
//                       }
//                       required
//                     />
//                     <Label htmlFor="parentConsent" className="text-sm">
//                       <strong>Consent of Parent</strong>: I consent to my child/ward to join the Cybersecurity Youth League of <strong>CYBERNOVR</strong> Limited in line with the terms and conditions
//                     </Label>
//                   </div>

//                   <div className="pt-4">
//                     <Button
//                       type="submit"
//                       className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white text-lg py-6 font-medium shadow-lg"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? "Processing..." : "Continue to Payment"}
//                     </Button>
//                   </div>
//                 </motion.form>
//               )}

//               {step === 2 && (
//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   className="space-y-6"
//                 >
//                   <div className="border rounded-lg p-6 bg-light-gray">
//                     <h3 className="text-lg font-bold mb-4">Order Summary</h3>
//                     <div className="flex justify-between mb-2">
//                       <div className="mt-2">{course.title}</div>
//                       <div className="">
//                         <div className="text-sm line-through text-charcoal/70">{formatPrice(100000)}</div>

//                         <div>{formatPrice(course.price)}</div>
//                       </div>
//                     </div>
//                     <div className="border-t border-gray-300 my-4"></div>
//                     <div className="flex justify-between mb-2 text-gray-600">
//                       <span>Discount</span>
//                       <span>20%</span>
//                     </div>
//                     <div className="flex justify-between font-bold">
//                       <span>Total</span>
//                       <span>{formatPrice(course.price)}</span>
//                     </div>
//                   </div>

//                   <div className="border rounded-lg p-6">
//                     <h3 className="text-lg font-bold mb-4">Payment Method</h3>
//                     <div className="space-y-4">
//                       <div className="flex items-center">
//                         <input
//                           type="radio"
//                           id="paystack"
//                           name="paymentMethod"
//                           value="paystack"
//                           checked
//                           readOnly
//                           className="h-4 w-4 text-cybernovr-purple"
//                         />
//                         <label htmlFor="paystack" className="ml-2">
//                           Pay with Paystack
//                         </label>
//                       </div>

//                       {paymentError && (
//                         <div className="bg-red-50 border border-red-200 text-red-600 rounded p-3 text-sm">
//                           {paymentError}
//                         </div>
//                       )}

//                       <div className="pt-4">
//                         <Button
//                           onClick={initiatePayment}
//                           className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white text-lg py-6 font-medium shadow-lg"
//                           disabled={isSubmitting}
//                         >
//                           {isSubmitting ? "Processing Payment..." : `Pay ${formatPrice(course.price)}`}
//                         </Button>
//                         <p className="text-xs text-center mt-2 text-gray-500">
//                           You will be redirected to Paystack to complete your payment
//                         </p>
//                       </div>

//                       <button
//                         type="button"
//                         onClick={() => setStep(1)}
//                         className="text-cybernovr-purple hover:text-cybernovr-purple/90 text-sm w-full text-center mt-4"
//                       >
//                         Return to previous step
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </div>
//           </div>
//         </FadeIn>
//       </div>
//     </div>
//   )
// }


// "use client"

// import type React from "react"

// import { useState } from "react"
// import { useSearchParams, useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Checkbox } from "@/components/ui/checkbox"
// import { motion } from "framer-motion"
// import FadeIn from "@/components/animations/fade-in"
// import { ArrowLeft, CheckCircle, Users, User, Download } from "lucide-react"

// const courses = {
//   cs101: {
//     title: "Cybersecurity Education and Awareness Program (CEAP)",
//     price: 100,
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

// // Import your students data
// import { STUDENTS_DATA } from "@/lib/new-data"

// // Helper function to transform student data to bulk payload
// function transformStudentsToBulkPayload(students: any[]) {
//   return students.map((student, index) => ({
//     firstname: student.name?.split(' ')[0] || `Student${index + 1}`,
//     lastname: student.name?.split(' ').slice(1).join(' ') || 'User',
//     country: "Nigeria",
//     password: generateRandomPassword(),
//     bio: "",
//     organizationId: "685ec1191008ea7cff78dbc8",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     email: student.email,
//     phone: student.phone || "",
//     type: "STUDENT"
//   }));
// }

// function generateRandomPassword() {
//   const length = 12;
//   const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     password += charset.charAt(Math.floor(Math.random() * charset.length));
//   }
//   return password;
// }

// export default function EnrollPage() {
//   const router = useRouter()
//   const searchParams = useSearchParams()
//   const courseId = searchParams.get("course") || "cs101"
//   const course = courses[courseId as keyof typeof courses] || courses.cs101

//   const [registrationType, setRegistrationType] = useState<"individual" | "bulk">("individual")
//   const [formData, setFormData] = useState({
//     name: "",
//     dateOfBirth: "",
//     schoolName: "",
//     classInSchool: "",
//     applicantContact: "",
//     headOfSchoolName: "",
//     headOfSchoolEmail: "",
//     parentName: "",
//     parentEmail: "",
//     schoolConsent: false,
//     parentConsent: false,
//   })
//   const [step, setStep] = useState(1)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [paymentError, setPaymentError] = useState("")
//   const [bulkResults, setBulkResults] = useState<any>(null)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleCheckboxChange = (name: string, checked: boolean) => {
//     setFormData((prev) => ({ ...prev, [name]: checked }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
    
//     if (registrationType === "individual") {
//       // Individual registration - move to payment
//       setStep(2)
//     } else {
//       // Bulk registration - process immediately
//       await handleBulkRegistration()
//     }
//   }

//   const handleBulkRegistration = async () => {
//     setIsSubmitting(true)
//     setPaymentError("")

//     try {
//       // Filter students with email and consent
//       const studentsToRegister = STUDENTS_DATA.filter((student: any) => 
//         student.email && 
//         (student.consentG === 'y' || student.consentH === 'y')
//       );

//       if (studentsToRegister.length === 0) {
//         setPaymentError('No eligible students found. Students must have email and consent.')
//         setIsSubmitting(false)
//         return
//       }

//       // Transform to bulk payload format (DIRECT ARRAY - no "users" wrapper)
//       const bulkPayload = transformStudentsToBulkPayload(studentsToRegister);

//       console.log('Sending bulk payload:', bulkPayload);

//       // Send DIRECT ARRAY to API (not wrapped in "users" object)
//       const response = await fetch('/api/lms/bulk-create-users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bulkPayload) // Direct array, no wrapper
//       });

//       const data = await response.json()
//       setBulkResults(data)
      
//       if (data.success) {
//         console.log('Bulk registration completed:', data)
        
//         // If we have successful users and courseId, register them for the course
//         if (data.data?.successfullusers && data.data.successfullusers.length > 0 && courseId) {
//           await registerUsersForCourse(data.data.successfullusers, courseId);
//         }
//       } else {
//         setPaymentError(data.message || 'Bulk registration failed')
//         console.error('Bulk registration failed:', data)
//       }
//     } catch (error) {
//       console.error('Bulk registration error:', error)
//       setPaymentError('An error occurred during bulk registration')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   // Helper function to register users for course after bulk creation
//   const registerUsersForCourse = async (users: any[], courseId: string) => {
//     try {
//       const registrationPromises = users.map(async (user) => {
//         const response = await fetch('/api/lms/register-single-course', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             user: user.id,
//             courseId: courseId
//           })
//         });
        
//         return response.json();
//       });

//       const results = await Promise.all(registrationPromises);
//       console.log('Course registration results:', results);
      
//       return results;
//     } catch (error) {
//       console.error('Course registration error:', error);
//       return [];
//     }
//   }

//   const initiatePayment = async () => {
//     setIsSubmitting(true)
//     setPaymentError("")

//     try {
//       const response = await fetch('/api/paystack', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.applicantContact,
//           amount: course.price,
//           courseId,
//           name: formData.name,
//           schoolName: formData.schoolName,
//           classInSchool: formData.classInSchool,
//           headOfSchoolName: formData.headOfSchoolName,
//           headOfSchoolEmail: formData.headOfSchoolEmail,
//           parentName: formData.parentName,
//           parentEmail: formData.parentEmail,
//           schoolConsent: formData.schoolConsent,
//           parentConsent: formData.parentConsent,
//           applicantContact: formData.applicantContact,
//         }),
//       });

//       const data = await response.json();

//       if (data.success && data.redirectUrl) {
//         window.location.href = data.redirectUrl;
//       } else {
//         setPaymentError(data.error || 'Failed to initialize payment. Please try again.');
//         setIsSubmitting(false);
//       }
//     } catch (error) {
//       console.error('Payment initialization error:', error);
//       setPaymentError('An error occurred while processing your payment. Please try again.');
//       setIsSubmitting(false);
//     }
//   };

//   // Format price in Naira
//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat('en-NG', {
//       style: 'currency',
//       currency: 'NGN',
//       minimumFractionDigits: 0,
//     }).format(price);
//   };

//   // Calculate bulk pricing
//   const calculateBulkPrice = () => {
//     const eligibleStudents = STUDENTS_DATA.filter((student: any) => 
//       student.email && 
//       (student.consentG === 'y' || student.consentH === 'y')
//     ).length;
//     return eligibleStudents * course.price;
//   };

//   // Download bulk registration report
//   const downloadBulkReport = () => {
//     if (!bulkResults?.data) return;

//     const report = {
//       summary: {
//         totalProcessed: bulkResults.data.totalProcessed || 0,
//         successCount: bulkResults.data.successCount || 0,
//         errorCount: bulkResults.data.errorCount || 0,
//         course: course.title,
//         timestamp: new Date().toISOString()
//       },
//       successfulUsers: bulkResults.data.successfulUsers || [],
//       errors: bulkResults.data.errors || []
//     };

//     const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `bulk-registration-report-${new Date().getTime()}.json`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   const eligibleStudentsCount = STUDENTS_DATA.filter((student: any) => 
//     student.email && 
//     (student.consentG === 'y' || student.consentH === 'y')
//   ).length;

//   return (
//     <div className="min-h-screen bg-light-gray pt-32 pb-20">
//       <div className="container-custom">
//         <FadeIn direction="up">
//           <div className="max-w-2xl mx-auto">
//             <button
//               onClick={() => router.back()}
//               className="flex items-center text-cybernovr-purple hover:text-cybernovr-purple/90 mb-6 transition-colors"
//             >
//               <ArrowLeft className="h-4 w-4 mr-2" />
//               Back to Courses
//             </button>

//             <div className="bg-white rounded-lg shadow-md p-8">
//               <h1 className="text-3xl font-bold mb-2">Cybersecurity Training Enrollment</h1>
//               <h2 className="text-xl mb-6">Registration Form for Cybersecurity Youth League</h2>

//               {/* Registration Type Selection */}
//               <div className="mb-8">
//                 <Label className="text-lg font-semibold mb-4 block">Registration Type</Label>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div
//                     className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
//                       registrationType === "individual"
//                         ? "border-cybernovr-purple bg-cybernovr-purple/5"
//                         : "border-gray-200 hover:border-gray-300"
//                     }`}
//                     onClick={() => setRegistrationType("individual")}
//                   >
//                     <div className="flex items-center">
//                       <User className="h-5 w-5 mr-2" />
//                       <span className="font-medium">Individual Registration</span>
//                     </div>
//                     <p className="text-sm text-gray-600 mt-2">
//                       Register a single student for the course
//                     </p>
//                   </div>
                  
//                   <div
//                     className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
//                       registrationType === "bulk"
//                         ? "border-cybernovr-purple bg-cybernovr-purple/5"
//                         : "border-gray-200 hover:border-gray-300"
//                     }`}
//                     onClick={() => setRegistrationType("bulk")}
//                   >
//                     <div className="flex items-center">
//                       <Users className="h-5 w-5 mr-2" />
//                       <span className="font-medium">Bulk Registration</span>
//                     </div>
//                     <p className="text-sm text-gray-600 mt-2">
//                       Register multiple students from your data file
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex mb-8">
//                 <div className="flex items-center">
//                   <div
//                     className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                       step >= 1 ? "bg-cybernovr-purple text-white" : "bg-gray-200 text-gray-500"
//                     }`}
//                   >
//                     1
//                   </div>
//                   <span className="ml-2 font-medium">
//                     {registrationType === "individual" ? "Your Details" : "Bulk Registration"}
//                   </span>
//                 </div>
//                 <div className="mx-4 border-t border-gray-300 flex-1 self-center"></div>
//                 <div className="flex items-center">
//                   <div
//                     className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                       step >= 2 ? "bg-cybernovr-purple text-white" : "bg-gray-200 text-gray-500"
//                     }`}
//                   >
//                     2
//                   </div>
//                   <span className="ml-2 font-medium">
//                     {registrationType === "individual" ? "Payment" : "Confirmation"}
//                   </span>
//                 </div>
//               </div>

//               {step === 1 && registrationType === "individual" && (
//                 <motion.form
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   onSubmit={handleSubmit}
//                   className="space-y-6"
//                 >
//                   {/* Individual form fields - keep your existing form */}
//                   <div>
//                     <Label htmlFor="name">Name</Label>
//                     <Input
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="mt-1"
//                       placeholder="Enter your full name"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="applicantContact">Email Address of Applicant/Guardian</Label>
//                     <Input
//                       id="applicantContact"
//                       name="applicantContact"
//                       value={formData.applicantContact}
//                       onChange={handleChange}
//                       required
//                       className="mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="dateOfBirth">Date of Birth</Label>
//                     <Input
//                       id="dateOfBirth"
//                       name="dateOfBirth"
//                       type="date"
//                       value={formData.dateOfBirth}
//                       onChange={handleChange}
//                       required
//                       className="mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="schoolName">Name of School</Label>
//                     <Input
//                       id="schoolName"
//                       name="schoolName"
//                       value={formData.schoolName}
//                       onChange={handleChange}
//                       required
//                       className="mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="classInSchool">Class in School (JS1 through SS3)</Label>
//                     <Input
//                       id="classInSchool"
//                       name="classInSchool"
//                       value={formData.classInSchool}
//                       onChange={handleChange}
//                       required
//                       className="mt-1"
//                       placeholder="e.g. JS1, SS3"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="headOfSchoolName">Principal (Head of School) Name</Label>
//                     <Input
//                       id="headOfSchoolName"
//                       name="headOfSchoolName"
//                       value={formData.headOfSchoolName}
//                       onChange={handleChange}
//                       required
//                       className="mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="headOfSchoolEmail">Principal (Head of School) Email</Label>
//                     <Input
//                       id="headOfSchoolEmail"
//                       name="headOfSchoolEmail"
//                       type="email"
//                       value={formData.headOfSchoolEmail}
//                       onChange={handleChange}
//                       required
//                       className="mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="parentName">Name of Parent</Label>
//                     <Input
//                       id="parentName"
//                       name="parentName"
//                       value={formData.parentName}
//                       onChange={handleChange}
//                       required
//                       className="mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="parentEmail">Email Address of Parent</Label>
//                     <Input
//                       id="parentEmail"
//                       name="parentEmail"
//                       type="email"
//                       value={formData.parentEmail}
//                       onChange={handleChange}
//                       required
//                       className="mt-1"
//                     />
//                   </div>

//                   <div className="flex items-center space-x-2 pt-2">
//                     <Checkbox
//                       id="schoolConsent"
//                       checked={formData.schoolConsent}
//                       onCheckedChange={(checked) =>
//                         handleCheckboxChange('schoolConsent', checked as boolean)
//                       }
//                       required
//                     />
//                     <Label htmlFor="schoolConsent" className="text-sm">
//                       <strong>Consent of School:</strong> I consent to the student of my school to join the Cybersecurity Youth League of <strong>CYBERNOVR</strong> Limited in line with the terms and conditions
//                     </Label>
//                   </div>

//                   <div className="flex items-center space-x-2">
//                     <Checkbox
//                       id="parentConsent"
//                       checked={formData.parentConsent}
//                       onCheckedChange={(checked) =>
//                         handleCheckboxChange('parentConsent', checked as boolean)
//                       }
//                       required
//                     />
//                     <Label htmlFor="parentConsent" className="text-sm">
//                       <strong>Consent of Parent</strong>: I consent to my child/ward to join the Cybersecurity Youth League of <strong>CYBERNOVR</strong> Limited in line with the terms and conditions
//                     </Label>
//                   </div>

//                   <div className="pt-4">
//                     <Button
//                       type="submit"
//                       className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white text-lg py-6 font-medium shadow-lg"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? "Processing..." : "Continue to Payment"}
//                     </Button>
//                   </div>
//                 </motion.form>
//               )}

//               {step === 1 && registrationType === "bulk" && (
//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   className="space-y-6"
//                 >
//                   <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//                     <h3 className="font-semibold text-blue-800 mb-2">Bulk Registration Information</h3>
//                     <p className="text-blue-700 text-sm">
//                       This will register all eligible students from your data file. Students must have an email address and consent to be registered.
//                     </p>
//                   </div>

//                   <div className="border rounded-lg p-6 bg-light-gray">
//                     <h3 className="text-lg font-bold mb-4">Registration Summary</h3>
                    
//                     <div className="space-y-3">
//                         <div className="flex justify-between">
//                           <span>Total students in data:</span>
//                           <span className="font-medium">{STUDENTS_DATA.length}</span>
//                         </div>
                        
//                         <div className="flex justify-between">
//                           <span>Students with email addresses:</span>
//                           <span className="font-medium">
//                             {STUDENTS_DATA.filter((s: any) => s.email).length}
//                           </span>
//                         </div>
                        
//                         <div className="flex justify-between">
//                           <span>Eligible for registration:</span>
//                           <span className="font-medium text-green-600">
//                             {eligibleStudentsCount}
//                           </span>
//                         </div>
                        
//                         <div className="border-t border-gray-300 my-3"></div>
                        
//                         <div className="flex justify-between text-lg font-bold">
//                           <span>Total Cost:</span>
//                           <span>{formatPrice(calculateBulkPrice())}</span>
//                         </div>
//                       </div>
//                   </div>

//                   {paymentError && (
//                     <div className="bg-red-50 border border-red-200 text-red-600 rounded p-3 text-sm">
//                       {paymentError}
//                     </div>
//                   )}

//                   <div className="pt-4">
//                     <Button
//                       onClick={handleSubmit}
//                       className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white text-lg py-6 font-medium shadow-lg"
//                       disabled={isSubmitting || eligibleStudentsCount === 0}
//                     >
//                       {isSubmitting ? "Processing Bulk Registration..." : `Register ${eligibleStudentsCount} Students`}
//                     </Button>
                    
//                     {eligibleStudentsCount === 0 && (
//                       <p className="text-red-500 text-sm mt-2 text-center">
//                         No eligible students found. Students need email and consent.
//                       </p>
//                     )}
//                   </div>

//                   {bulkResults && (
//                     <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//                       <div className="flex justify-between items-center mb-4">
//                         <h3 className="text-lg font-semibold">Registration Results</h3>
//                         <Button
//                           onClick={downloadBulkReport}
//                           variant="outline"
//                           size="sm"
//                           className="flex items-center gap-2"
//                         >
//                           <Download className="h-4 w-4" />
//                           Download Report
//                         </Button>
//                       </div>
                      
//                       <div className="text-sm space-y-2">
//                         <div className="flex justify-between">
//                           <span>Total Processed:</span>
//                           <span>{bulkResults.data?.totalProcessed || 0}</span>
//                         </div>
//                         <div className="flex justify-between text-green-600">
//                           <span>Successful:</span>
//                           <span>{bulkResults.data?.successCount || 0}</span>
//                         </div>
//                         <div className="flex justify-between text-red-600">
//                           <span>Errors:</span>
//                           <span>{bulkResults.data?.errorCount || 0}</span>
//                         </div>
//                       </div>
                      
//                       {bulkResults.data?.errors && bulkResults.data.errors.length > 0 && (
//                         <div className="mt-4">
//                           <h4 className="font-semibold mb-2">Errors:</h4>
//                           <div className="text-xs bg-red-50 p-3 rounded">
//                             {bulkResults.data.errors.map((error: any, index: number) => (
//                               <div key={index} className="mb-1">
//                                 Row {error.rowIndex}: {error.email} - {error.errorMessage}
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 </motion.div>
//               )}

//               {step === 2 && registrationType === "individual" && (
//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   className="space-y-6"
//                 >
//                   {/* Individual payment section - keep your existing payment UI */}
//                   <div className="border rounded-lg p-6 bg-light-gray">
//                     <h3 className="text-lg font-bold mb-4">Order Summary</h3>
//                     <div className="flex justify-between mb-2">
//                       <div className="mt-2">{course.title}</div>
//                       <div className="">
//                         <div className="text-sm line-through text-charcoal/70">{formatPrice(100000)}</div>
//                         <div>{formatPrice(course.price)}</div>
//                       </div>
//                     </div>
//                     <div className="border-t border-gray-300 my-4"></div>
//                     <div className="flex justify-between mb-2 text-gray-600">
//                       <span>Discount</span>
//                       <span>20%</span>
//                     </div>
//                     <div className="flex justify-between font-bold">
//                       <span>Total</span>
//                       <span>{formatPrice(course.price)}</span>
//                     </div>
//                   </div>

//                   <div className="border rounded-lg p-6">
//                     <h3 className="text-lg font-bold mb-4">Payment Method</h3>
//                     <div className="space-y-4">
//                       <div className="flex items-center">
//                         <input
//                           type="radio"
//                           id="paystack"
//                           name="paymentMethod"
//                           value="paystack"
//                           checked
//                           readOnly
//                           className="h-4 w-4 text-cybernovr-purple"
//                         />
//                         <label htmlFor="paystack" className="ml-2">
//                           Pay with Paystack
//                         </label>
//                       </div>

//                       {paymentError && (
//                         <div className="bg-red-50 border border-red-200 text-red-600 rounded p-3 text-sm">
//                           {paymentError}
//                         </div>
//                       )}

//                       <div className="pt-4">
//                         <Button
//                           onClick={initiatePayment}
//                           className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white text-lg py-6 font-medium shadow-lg"
//                           disabled={isSubmitting}
//                         >
//                           {isSubmitting ? "Processing Payment..." : `Pay ${formatPrice(course.price)}`}
//                         </Button>
//                         <p className="text-xs text-center mt-2 text-gray-500">
//                           You will be redirected to Paystack to complete your payment
//                         </p>
//                       </div>

//                       <button
//                         type="button"
//                         onClick={() => setStep(1)}
//                         className="text-cybernovr-purple hover:text-cybernovr-purple/90 text-sm w-full text-center mt-4"
//                       >
//                         Return to previous step
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </div>
//           </div>
//         </FadeIn>
//       </div>
//     </div>
//   )
// }

"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import { ArrowLeft, CheckCircle, ExternalLink, Mail, CreditCard, BookOpen, HelpCircle } from "lucide-react"

export default function EnrollPage() {
  const router = useRouter()
  const [hasReadInstructions, setHasReadInstructions] = useState(false)

  const steps = [
    {
      number: 1,
      icon: <ExternalLink className="h-6 w-6" />,
      title: "Redirect to Academy Portal",
      description: "You will be redirected to our official academy portal where you can create your account.",
      details: "Click the button below to go to https://academy.cybernovr.xyz"
    },
    {
      number: 2,
      icon: <Mail className="h-6 w-6" />,
      title: "Sign Up & Verify Email",
      description: "Create your account using your email address and verify it through the confirmation email sent to you.",
      details: "Check your inbox (and spam folder) for the verification link"
    },
    {
      number: 3,
      icon: <BookOpen className="h-6 w-6" />,
      title: "Navigate to CEAP Course",
      description: "After verification, log into your account and find the Cybersecurity Education and Awareness Program (CEAP) course.",
      details: "Browse through the course catalog or use the search function"
    },
    {
      number: 4,
      icon: <CreditCard className="h-6 w-6" />,
      title: "Make One-Time Payment",
      description: "Click on the course and proceed to make a one-time payment to gain full access.",
      details: "Complete the payment process to unlock all course materials"
    },
    {
      number: 5,
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Enjoy Course Benefits",
      description: "Once payment is confirmed, you'll have full access to all course modules, materials, and benefits.",
      details: "Start learning immediately with our comprehensive cybersecurity curriculum"
    }
  ]

  const handleRedirect = () => {
    window.open("https://academy.cybernovr.xyz/login/signup.php", "_blank")
  }

  return (
    <div className="min-h-screen bg-light-gray pt-32 pb-20">
      <div className="container-custom">
        <FadeIn direction="up">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => router.back()}
              className="flex items-center text-cybernovr-purple hover:text-cybernovr-purple/90 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </button>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold mb-4">How to Enroll in Cybersecurity Training</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Follow these simple steps to enroll in our Cybersecurity Education and Awareness Program (CEAP)
                </p>
              </div>

              <div className="mb-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <div className="flex items-start">
                  <HelpCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-blue-800 font-medium mb-1">Important Notice</p>
                    <p className="text-blue-700">
                      Enrollment and payment processing are handled through our dedicated academy portal. 
                      Please read all instructions carefully before proceeding.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mb-10">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start p-6 border border-gray-200 rounded-lg hover:border-cybernovr-purple/30 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-cybernovr-purple/10 rounded-full flex items-center justify-center mr-6">
                      <div className="flex items-center justify-center w-10 h-10 bg-cybernovr-purple text-white rounded-full font-bold text-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className="text-cybernovr-purple mr-3">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-3">{step.description}</p>
                      <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded">{step.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="readInstructions"
                    checked={hasReadInstructions}
                    onChange={(e) => setHasReadInstructions(e.target.checked)}
                    className="mt-1 h-5 w-5 text-cybernovr-purple rounded focus:ring-cybernovr-purple"
                  />
                  <label htmlFor="readInstructions" className="ml-3 text-gray-700">
                    <span className="font-semibold">I have read and understood all the enrollment steps</span>
                    <p className="text-sm text-gray-500 mt-1">
                      I understand that I need to create an account, verify my email, find the CEAP course, 
                      and complete payment on the academy portal.
                    </p>
                  </label>
                </div>
              </div>

              <div className="mb-10 p-6 bg-amber-50 border border-amber-200 rounded-lg">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-amber-600" />
                  Need Assistance?
                </h3>
                <p className="text-gray-700 mb-4">
                  If you get lost at any step of the way or encounter issues during enrollment, 
                  please don't hesitate to <a href="https://www.cybernovr.com/contact" className="text-cybernovr-purple">contact</a> our support team.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <strong>Email Support:</strong> info@cybernovr.com
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Phone Support:</strong> +234 814-378-8857
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM WAT
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleRedirect}
                  disabled={!hasReadInstructions}
                  className="flex-1 bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white text-lg py-6 font-medium shadow-lg"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Go to Academy Portal
                </Button>
                
                <Button
                  onClick={() => router.back()}
                  variant="outline"
                  className="flex-1 py-6 text-lg"
                >
                  Back to Courses
                </Button>
              </div>

              {!hasReadInstructions && (
                <p className="text-center text-red-500 mt-4 text-sm">
                  Please confirm that you've read the instructions before proceeding
                </p>
              )}

              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-500 text-sm">
                  Remember to bookmark https://academy.cybernovr.xyz for easy access to your course
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}