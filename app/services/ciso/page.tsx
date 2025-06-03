import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, FileCheck, Shield, AlertTriangle, Clock, RefreshCw } from "lucide-react"
import Link from "next/link"
import InitiateForm from "@/components/initiate-convo/initiate-form"

export default function CISOPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">CISO & vCISO Advisory Services</h1>
            <p className="text-xl mb-8">
              Strategic security leadership and advisory services to strengthen your organization's security posture.
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
                <h2 className="text-3xl font-bold mb-6">Comprehensive CISO & vCISO Services</h2>
                <p className="text-lg text-charcoal/80 mb-6">
                  We offer a comprehensive range of Chief Information Security Officer (CISO) and Virtual Chief Information 
                  Security Officer (vCISO) services. These services are a combination of one or more of our cybersecurity 
                  services tailored to your organization's specific needs.
                </p>
                <p className="text-lg text-charcoal/80 mb-6">
                  Our dedicated team of professionals is on hand to deliver these services while bearing in mind the 
                  Service Level Agreement (SLA) obligations associated with our CISO and vCISO services.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                  <Users className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our CISO & vCISO Services Include</h3>
                <div className="space-y-4 mt-6">
                  {[
                    "Prioritizing security projects and budgets",
                    "Designing security projects and the vendor selection process",
                    "Updating the management team about potential risks and issues",
                    "Establishing and managing a third-party vendor security program",
                    "Assisting in crisis management and handling incident response",
                    "Coordinating resources for ongoing risk management",
                    "Facilitating quarterly security/risk management meetings",
                    "Acting as ombudsman to interested parties to facilitate client audits, investigations and strategic initiatives",
                    "Introducing tools to manage security projects and risk",
                    "Developing reports and/or presentations to executive management and interested parties",
                    "Educating and training on current threat intelligence"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-6 w-6 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-charcoal/80">{service}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-light-gray rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-4">Benefits of Our CISO & vCISO Services</h3>
                <p className="text-charcoal/80 mb-6">
                  Our CISO and vCISO services provide your organization with expert security leadership without the cost 
                  of a full-time executive. We work closely with your team to understand your business objectives and 
                  develop a security strategy that aligns with your goals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-electric-blue/10 mb-4">
                      <Shield className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">Strategic Security Leadership</h4>
                    <p className="text-charcoal/80">Expert guidance to develop and implement effective security strategies aligned with business goals</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-electric-blue/10 mb-4">
                      <FileCheck className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">Regulatory Compliance</h4>
                    <p className="text-charcoal/80">Ensure your organization meets industry regulations and standards with expert guidance</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-electric-blue/10 mb-4">
                      <AlertTriangle className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">Risk Management</h4>
                    <p className="text-charcoal/80">Comprehensive risk assessment and management to identify and mitigate security threats</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-electric-blue/10 mb-4">
                      <Clock className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">Cost-Effective Solution</h4>
                    <p className="text-charcoal/80">Access to expert security leadership without the cost of a full-time executive</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-32">
                <InitiateForm />
                <div className="bg-light-gray rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4">Why Choose Our CISO & vCISO Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Expert security leadership without the full-time executive cost</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Tailored security strategies aligned with your business objectives</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Comprehensive security program development and management</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Ongoing support and guidance from experienced security professionals</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Flexible engagement models to meet your specific needs</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-deep-blue text-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Strengthen Your Security Leadership</h2>
            <p className="text-xl mb-8">
              Contact us today to learn how our CISO and vCISO services can help your organization build a stronger security posture.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-cybernovr-red hover:bg-cybernovr-red/90 text-white"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}