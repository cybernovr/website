import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Award, BookOpen } from "lucide-react"
import CourseCard from "@/components/courses/course-card"
import FadeIn from "@/components/animations/fade-in"
import AnimatedBackground from "@/components/animations/animated-background"
import Link from "next/link"
import course1 from "@/components/images/TechWorkspace.jpeg"
import course2 from "@/components/images/pentest.jpg"
import course3 from "@/components/images/cyberfund.jpeg"
import course4 from "@/components/images/cheerful2.jpeg"


export default function CoursesPage() {
  const courses = [
    {
      id: "686178635633410c68907cf5",
      title: "Cybersecurity Fundamentals",
      description:
        "Learn the basics of cybersecurity, including key concepts, common threats, and essential protection strategies.",
      price: 14999,
      duration: "4 weeks",
      level: "Beginner",
      icon: <Shield className="h-12 w-12 text-cybernovr-purple" />,
      image: course3,
    }, // first here
    {
      id: "cs201",
      title: "Network Security Essentials",
      description:
        "Dive into network security principles, protocols, and best practices for protecting organizational infrastructure.",
      price: 14999,
      duration: "6 weeks",
      level: "Intermediate",
      icon: <BookOpen className="h-12 w-12 text-cybernovr-purple" />,
      image: course1,
    },
    {
      id: "cs301",
      title: "Advanced Penetration Testing",
      description:
        "Master the techniques used by ethical hackers to identify and exploit vulnerabilities in systems and applications.",
      price: 14999,
      duration: "8 weeks",
      level: "Advanced",
      icon: <Award className="h-12 w-12 text-cybernovr-purple" />,
      image: course2,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-cybernovr-purple to-cybernovr-purple/80 text-white relative overflow-hidden">
        <AnimatedBackground className="opacity-30" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn direction="up" duration={0.7}>
              <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">Cybersecurity Courses</h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} duration={0.7}>
              <p className="text-xl text-white mb-8">
                Enhance your cybersecurity skills with our expert-led courses designed for professionals at all levels.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container-custom">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Courses</h2>
              <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
                Choose from our selection of comprehensive cybersecurity courses taught by industry experts.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="relative h-[600px] rounded-lg overflow-hidden shadow-lg">
                <Image src={course4} alt="ZIASS Training" fill className="object-cover" />
              </div>
            </FadeIn>
            <div className="space-y-6">
              <FadeIn direction="left">
                <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our Courses</h2>
                <p className="text-lg text-charcoal/80">
                  Our cybersecurity courses are designed to provide practical, hands-on experience that you can
                  immediately apply in your professional role. Learn from industry experts with years of real-world
                  experience.
                </p>
              </FadeIn>

              <div className="space-y-4 mt-8">
                {[
                  {
                    title: "Industry-Leading Instructors",
                    description: "Learn from certified professionals with extensive experience in the field.",
                  },
                  {
                    title: "Practical, Hands-On Learning",
                    description: "Apply concepts in real-world scenarios through labs and exercises.",
                  },
                  {
                    title: "Flexible Learning Options",
                    description: "Study at your own pace with on-demand access to course materials.",
                  },
                  {
                    title: "Certification Preparation",
                    description: "Prepare for industry-recognized certifications with our targeted courses.",
                  },
                ].map((item, index) => (
                  <FadeIn key={index} direction="left" delay={index * 0.1}>
                    <div className="flex">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-charcoal/80">{item.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cybernovr-purple to-cybernovr-purple/80 text-white relative overflow-hidden">
        <AnimatedBackground className="opacity-20" />
        <div className="container-custom relative z-10">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
              <p className="text-xl mb-8">
                Invest in your future with our industry-leading cybersecurity courses. Enroll today and take the first
                step toward becoming a cybersecurity expert.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/courses/enroll">
                  <Button size="lg" className="bg-cybernovr-purple text-white hover:bg-cybernovr-purple/90">
                    Enroll Now
                  </Button>
                </Link>
                <Button
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 transition-all"
                >
                  View Course Catalog
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
