import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Award, Users, Mail, Briefcase } from "lucide-react"
import ApplyForm from "@/components/apply-here/apply-form"

export default function CareerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 bg-gradient-to-r from-deep-blue to-electric-blue text-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Career</h1>
            <p className="text-xl  mb-8">
                Join our mission to defend the digital world — start your cybersecurity journey here.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Join the Team</h2>
                <p className="text-lg text-charcoal/80 mb-6">
                    Cybernovr is a leading Cybersecurity company providing information assurance and services
                    in cybersecurity risk management, critical information infrastructure protection, and 
                    cybersecurity capacity building for critical stakeholders. Cybernovr is registered in Canada
                    and Nigeria.
                </p>
                <p className="text-lg text-charcoal/80 mb-6">
                    You are going to be part of a team that is not only dynamic and innovative, but supporting
                    a critical mission of safeguarding data, people and infrastructure. Are you passionate about
                    this? Check out our <a href="https://www.linkedin.com/in/cybernovr-limited-21831a36b/" target="_blank" className="text-primary hover:underline"> LinkedIn</a> page for available opportunities. 
                </p>
                <p>
                    Welcome to our world, a world where “It is Possible”
                </p>
              </div>
              
              <div className="bg-light-gray rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4">Bare Requirements</h3>
                  <p className="text-charcoal/80 mb-4">
                    We seek members who share our commitment to integrity, innovation, and resilience in cybersecurity education. Your mission should align with our vision to build a safer digital future.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Customer-Obsessed </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Ethical & Transparent</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Team-Oriented</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Resilient & Adaptable</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href="https://www.linkedin.com/in/cybernovr-limited-21831a36b/" target="_blank">
                      <Button variant="outline" className="w-full">
                        Go To Our LinkedIn
                      </Button>
                    </Link>
                  </div>
                </div>
                
            </div>
            
            <div>
                <ApplyForm />
            </div>
            
          </div>
        </div>
      </section>

    </>
  )
}