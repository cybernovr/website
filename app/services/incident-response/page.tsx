import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Zap, Clock, Shield, FileSearch, Server, RefreshCw } from "lucide-react"

export default function IncidentResponsePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Incident Response & Forensics</h1>
            <p className="text-xl  mb-8">
              Rapid response to security incidents to minimize damage and restore normal operations quickly.
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
                <h2 className="text-3xl font-bold mb-6">Incident Response and Forensic Services</h2>
                <p className="text-lg text-charcoal/80 mb-6">
                  Cybercrimes pose a serious threat to your critical assets, sensitive data, and overall business integrity. 
                  These threats can stem from external attackers or malicious insiders, and can significantly impact your 
                  operations, reputation, and bottom line.
                </p>
                <p className="text-lg text-charcoal/80 mb-6">
                  Our incident response team provides rapid, effective response to security incidents, helping you contain 
                  the threat, minimize damage, and restore normal operations as quickly as possible. We also conduct thorough 
                  forensic investigations to determine the cause, scope, and impact of security incidents.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                  <Zap className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Incident Response Process</h3>
                <div className="space-y-6 mt-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-electric-blue flex items-center justify-center">
                        <span className="text-white font-bold">1</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Preparation</h4>
                      <p className="text-charcoal/80">
                        We help you develop incident response plans and procedures to ensure you're ready when an incident occurs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-electric-blue flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Detection & Analysis</h4>
                      <p className="text-charcoal/80">
                        Rapid identification and analysis of security incidents to determine their nature and scope.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-electric-blue flex items-center justify-center">
                        <span className="text-white font-bold">3</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Containment</h4>
                      <p className="text-charcoal/80">
                        Immediate actions to limit the damage and prevent further spread of the threat.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-electric-blue flex items-center justify-center">
                        <span className="text-white font-bold">4</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Eradication</h4>
                      <p className="text-charcoal/80">
                        Complete removal of the threat from your environment to prevent recurrence.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-electric-blue flex items-center justify-center">
                        <span className="text-white font-bold">5</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Recovery</h4>
                      <p className="text-charcoal/80">
                        Restoration of systems and data to normal operations with enhanced security measures.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-electric-blue flex items-center justify-center">
                        <span className="text-white font-bold">6</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Lessons Learned</h4>
                      <p className="text-charcoal/80">
                        Comprehensive review of the incident and response to improve future security posture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-light-gray rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-4">Digital Forensics</h3>
                <p className="text-charcoal/80 mb-6">
                  Our digital forensics team uses advanced tools and techniques to investigate security incidents, 
                  collect and preserve evidence, and provide detailed analysis of what happened, how it happened, 
                  and who was responsible.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-electric-blue/10 mb-4">
                      <FileSearch className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">Evidence Collection & Preservation</h4>
                    <p className="text-charcoal/80">Proper collection and preservation of digital evidence for investigation and potential legal proceedings</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-electric-blue/10 mb-4">
                      <Server className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">System & Network Analysis</h4>
                    <p className="text-charcoal/80">Detailed examination of systems and networks to identify compromise indicators</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-electric-blue/10 mb-4">
                      <Clock className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">Timeline Reconstruction</h4>
                    <p className="text-charcoal/80">Reconstruction of incident timeline to understand the sequence of events</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-electric-blue/10 mb-4">
                      <RefreshCw className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">Root Cause Analysis</h4>
                    <p className="text-charcoal/80">Identification of the underlying causes of security incidents to prevent recurrence</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-32">
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-deep-blue">Initiate a Conversation</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-1">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="Your Phone Number"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white">
                      Send Message
                    </Button>
                  </form>
                </div>
                <div className="bg-light-gray rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4">Benefits of Our Incident Response Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Rapid response to minimize damage and downtime</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Expert forensic analysis to understand the full scope of incidents</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Proper evidence handling for potential legal proceedings</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Improved security posture through lessons learned</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">24/7 availability for emergency response</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prepare for the Unexpected</h2>
            <p className="text-xl mb-8">
              Contact us today to learn how our incident response and forensic services can help your organization prepare for and respond to security incidents.
            </p>
            <Button size="lg" className="bg-accent-cyan hover:bg-accent-cyan/90 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}