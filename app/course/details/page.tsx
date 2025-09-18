import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Clock, Users, FileText, Video, BookOpen, CheckCircle, Award } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import AnimatedBackground from "@/components/animations/animated-background"
import Link from "next/link"
import courseImage from "@/components/images/cyberfund.jpeg"

export default function CourseDetailsPage() {
    // Hardcoded data for the Cybersecurity Fundamentals course
    const course = {
        id: "68891facbc9839284aebb86d",
        title: "Cybersecurity Fundamentals",
        description: "Learn the basics of cybersecurity, including key concepts, common threats, and essential protection strategies.",
        overview: "This comprehensive course provides a solid foundation in cybersecurity principles and practices. You'll learn how to protect yourself and organizations from cyber threats, understand security fundamentals, and develop the skills needed for a career in cybersecurity.",
        price: 14999,
        duration: "4 weeks",
        level: "Beginner",
        image: courseImage,
        instructor: {
            name: "Cyber Novr",
            bio: "Experienced cybersecurity professional with years of industry experience in threat detection and prevention."
        },
        modules: [
            {
                id: "686178635633410c68907cf6",
                title: "Introduction to Cybersecurity",
                lessons: [
                    {
                        id: "686178635633410c68907cf7",
                        title: "Introduction to Cybersecurity",
                        type: "DOCUMENT",
                        duration: "30 min"
                    }
                ]
            },
            {
                id: "686178635633410c68907cf8",
                title: "Identity Management",
                lessons: [
                    {
                        id: "68891868bc9839284aebb868",
                        title: "Identity Management",
                        type: "DOCUMENT",
                        duration: "45 min"
                    },
                    {
                        id: "68891868bc9839284aebb868",
                        title: "Identity Management 2",
                        type: "DOCUMENT",
                        duration: "45 min"
                    }
                ]
            },
            {
                id: "686178645633410c68907cfa",
                title: "Cyber Threat Awareness",
                lessons: [
                    {
                        id: "686178645633410c68907cfb",
                        title: "Cyber Threat Awareness",
                        type: "DOCUMENT",
                        duration: "40 min"
                    }
                ]
            },
            {
                id: "686178645633410c68907cfc",
                title: " Introduction to Ethical Hacking and Coding",
                lessons: [
                    {
                        id: "686178665633410c68907d09",
                        title: "Introduction to Ethical Hacking and Privacy Law",
                        type: "DOCUMENT",
                        duration: "55 min"
                    },
                    {
                        id: "6863961463364d779c4aa333",
                        title: "Ethical Hacking Video",
                        type: "VIDEO",
                        duration: "60 min"
                    }
                ]
            },
            {
                id: "686178645633410c68907cfe",
                title: "Cyber Laws and Regulations",
                lessons: [
                    {
                        id: "686178645633410c68907cff",
                        title: "Cyber Laws and Regulations",
                        type: "DOCUMENT",
                        duration: "50 min"
                    },
                    {
                        id: "68663db863364d779c4aa336",
                        title: "Cyber Laws and Regulations Quiz",
                        type: "QUIZ",
                        duration: "20 min"
                    }
                ]
            },
            {
                id: "686178655633410c68907d00",
                title: "Introduction to Penetration Testing",
                lessons: [
                    {
                        id: "686178655633410c68907d01",
                        title: "Learn penetration testing",
                        type: "TEXT",
                        duration: "30 min"
                    }
                ]
            },
            {
                id: "686178655633410c68907d02",
                title: "Digital Literacy & Critical Thinking",
                lessons: [
                    {
                        id: "686178655633410c68907d03",
                        title: "Digital Literacy & Critical Thinking",
                        type: "DOCUMENT",
                        duration: "45 min"
                    }
                ]
            },
            {
                id: "686178655633410c68907d04",
                title: "Responsible Use of Social Media",
                lessons: [
                    {
                        id: "686178655633410c68907d05",
                        title: "Responsible Use of Social Media",
                        type: "DOCUMENT",
                        duration: "40 min"
                    }
                ]
            },
            {
                id: "686178655633410c68907d06",
                title: "Data & Privacy Management",
                lessons: [
                    {
                        id: "686178665633410c68907d07",
                        title: "Threat Landscape",
                        type: "DOCUMENT",
                        duration: "50 min"
                    }
                ]
            },
            {
                id: "686178665633410c68907d08",
                title: "Cyber Hygiene Practices",
                lessons: [
                    {
                        id: "686178665633410c68907d08",
                        title: "Cyber Hygiene Practices",
                        type: "DOCUMENT",
                        duration: "50 min"
                    },
                ]
            },
            {
                id: "686178665633410c68907d0a",
                title: "Cybersecurity Career Paths",
                lessons: [
                    {
                        id: "686178665633410c68907d0b",
                        title: "Career Opportunities in Cybersecurity",
                        type: "DOCUMENT",
                        duration: "45 min"
                    },
                    {
                        id: "686178665633410c68907d0c",
                        title: "Building a Cybersecurity Portfolio",
                        type: "DOCUMENT",
                        duration: "30 min"
                    },
                    {
                        id: "686178665633410c68907d0d",
                        title: "Preparing for Cybersecurity Interviews",
                        type: "DOCUMENT",
                        duration: "40 min"
                    }
                ]
            },
            {
                id: "686178665633410c68907d0e",
                title: "Complimentary",
                lessons: [
                    {
                        id: "686178665633410c68907d0f",
                        title: "Course Completion Certificate",
                        type: "DOCUMENT",
                        duration: "10 min"
                    }
                ]
            }
        ],
        features: [
            "12 comprehensive modules",
            "Downloadable resources",
            "Quizzes and assessments",
            "Certificate of completion",
            "Lifetime access to course materials",
            "Expert instructor support"
        ]
    }

    // Format price in Naira
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 0,
        }).format(price);
    };

    const getLessonIcon = (type: string) => {
        switch (type) {
            case "DOCUMENT":
                return <FileText className="h-5 w-5 text-cybernovr-purple" />;
            case "VIDEO":
                return <Video className="h-5 w-5 text-cybernovr-purple" />;
            case "QUIZ":
                return <BookOpen className="h-5 w-5 text-cybernovr-purple" />;
            case "TEXT":
                return <FileText className="h-5 w-5 text-cybernovr-purple" />;
            default:
                return <FileText className="h-5 w-5 text-cybernovr-purple" />;
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-r from-cybernovr-purple to-cybernovr-purple/80 text-white relative overflow-hidden">
                <AnimatedBackground className="opacity-30" />
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <FadeIn direction="up" duration={0.7}>
                            <div className="flex items-center mb-4">
                                <Shield className="h-8 w-8 mr-2" />
                                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{course.level}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">{course.title}</h1>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.2} duration={0.7}>
                            <p className="text-xl text-white mb-8">{course.description}</p>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.4} duration={0.7}>
                            <div className="flex flex-wrap gap-6 mb-8">
                                <div className="flex items-center">
                                    <Clock className="h-5 w-5 mr-2" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center">
                                    <Users className="h-5 w-5 mr-2" />
                                    <span>Beginner Level</span>
                                </div>
                                <div className="flex items-center">
                                    <Award className="h-5 w-5 mr-2" />
                                    <span>Certificate of Completion</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Course Content */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <FadeIn direction="up">
                                <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
                                <p className="text-lg text-charcoal/80 mb-8">{course.overview}</p>
                            </FadeIn>

                            <FadeIn direction="up" delay={0.2}>
                                <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                    {course.features.map((feature, index) => (
                                        <div key={index} className="flex items-start">
                                            <CheckCircle className="h-6 w-6 text-cybernovr-purple mr-3 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>

                            <FadeIn direction="up" delay={0.4}>
                                <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>
                                <div className="space-y-4">
                                    {course.modules.map((module, moduleIndex) => (
                                        <div key={module.id} className="border rounded-lg overflow-hidden">
                                            <div className="bg-light-gray p-4 border-b">
                                                <h3 className="text-xl font-bold">Module {moduleIndex + 1}: {module.title}</h3>
                                            </div>
                                            <div className="divide-y">
                                                {module.lessons.map((lesson, lessonIndex) => (
                                                    <div key={lesson.id} className="p-4 flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div className="mr-4">
                                                                {getLessonIcon(lesson.type)}
                                                            </div>
                                                            <div>
                                                                <h4 className="font-medium">Lesson {lessonIndex + 1}: {lesson.title}</h4>
                                                                <p className="text-sm text-charcoal/70">{lesson.duration}</p>
                                                            </div>
                                                        </div>
                                                        <span className="text-sm text-charcoal/70 capitalize">{lesson.type.toLowerCase()}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <FadeIn direction="left">
                                <div className="sticky top-24 rounded-lg overflow-hidden shadow-lg border border-gray-200">
                                    <div className="relative h-48">
                                        <Image
                                            src={course.image}
                                            alt={course.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-3xl font-bold text-cybernovr-purple">{formatPrice(course.price)}</span>
                                            <span className="text-sm line-through text-charcoal/70">{formatPrice(24999)}</span>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between">
                                                <span>Duration:</span>
                                                <span className="font-medium">{course.duration}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Level:</span>
                                                <span className="font-medium">{course.level}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Modules:</span>
                                                <span className="font-medium">{course.modules.length}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Lessons:</span>
                                                <span className="font-medium">
                                                    {course.modules.reduce((total, module) => total + module.lessons.length, 0)}
                                                </span>
                                            </div>
                                        </div>

                                        <Link href={`/courses/enroll?course=${course.id}`} className="flex-1">
                                            <Button
                                                className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white"
                                            >
                                                Enroll Now
                                            </Button>
                                        </Link>

                                        {/* <Button variant="outline" className="w-full" size="lg">
                      Add to Wishlist
                    </Button> */}

                                        <div className="mt-6 pt-6 border-t">
                                            <h3 className="font-bold mb-3">This course includes:</h3>
                                            <ul className="space-y-2">
                                                <li className="flex items-center">
                                                    <CheckCircle className="h-5 w-5 text-cybernovr-purple mr-2" />
                                                    <span>Lifetime access</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <CheckCircle className="h-5 w-5 text-cybernovr-purple mr-2" />
                                                    <span>Certificate of completion</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <CheckCircle className="h-5 w-5 text-cybernovr-purple mr-2" />
                                                    <span>Downloadable resources</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <CheckCircle className="h-5 w-5 text-cybernovr-purple mr-2" />
                                                    <span>Instructor support</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instructor Section */}
            <section className="py-16 bg-light-gray">
                <div className="container-custom">
                    <FadeIn direction="up">
                        <h2 className="text-3xl font-bold mb-12 text-center">About the Instructor</h2>
                    </FadeIn>
                    <div className="max-w-2xl mx-auto">
                        <FadeIn direction="up" delay={0.2}>
                            <div className="bg-white rounded-lg p-8 shadow-md">
                                <div className="flex items-center mb-6">
                                    <div className="h-16 w-16 rounded-full bg-cybernovr-purple flex items-center justify-center text-white text-xl font-bold mr-4">
                                        {course.instructor.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{course.instructor.name}</h3>
                                        <p className="text-charcoal/70">Cybersecurity Expert</p>
                                    </div>
                                </div>
                                <p className="text-charcoal/80">{course.instructor.bio}</p>
                                <div className="mt-6 pt-6 border-t">
                                    <div className="flex justify-between">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-cybernovr-purple">5+</div>
                                            <div className="text-sm text-charcoal/70">Years Experience</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-cybernovr-purple">100+</div>
                                            <div className="text-sm text-charcoal/70">Students Taught</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-cybernovr-purple">4.9</div>
                                            <div className="text-sm text-charcoal/70">Instructor Rating</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-cybernovr-purple to-cybernovr-purple/80 text-white relative overflow-hidden">
                <AnimatedBackground className="opacity-20" />
                <div className="container-custom relative z-10">
                    <FadeIn direction="up">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Cybersecurity Journey Today</h2>
                            <p className="text-xl mb-8">
                                Join thousands of students who have transformed their careers with our Cybersecurity Fundamentals course.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button size="lg" className="bg-white text-cybernovr-purple hover:bg-gray-100">
                                    Enroll Now
                                </Button>
                                <Link href="/courses">
                                    <Button
                                        size="lg"
                                        className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 transition-all"
                                    >
                                        Browse All Courses
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    )
}