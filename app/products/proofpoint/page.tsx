import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Mail, Lock } from "lucide-react"
import proofpoint from "@/components/images/Proofpoint.jpg"

export default function ProofpointPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Proofpoint Email Protection</h1>
            <p className="text-x mb-8">
              Advanced email security and data protection solutions to safeguard your organization from email-based threats.
            </p>
            <div className="flex justify-center">
              <Image 
                src={proofpoint}
                alt="Proofpoint Logo" 
                width={200} 
                height={80} 
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Email Protection Solutions</h2>
                <p className="text-lg text-charcoal/80 mb-6">
                  Our partner, Proofpoint, delivers powerful email gateway solutions—available both in the cloud and on-premises—to 
                  defend against malware, phishing, Business Email Compromise (BEC), and other advanced threats.
                </p>
                <p className="text-lg text-charcoal/80 mb-6">
                  Their platform leverages multilayered detection methods, including reputation scoring and content analysis, to 
                  enhance threat identification. Suspicious emails are automatically flagged, and graymail (such as newsletters 
                  and bulk messages) is identified through advanced, customizable filtering options.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                  <Mail className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Advanced Email Gateway Protection</h3>
                <p className="text-charcoal/80 mb-6">
                  Proofpoint's Email Protection solution provides comprehensive security against email-based threats, including 
                  malware, phishing, and business email compromise attacks. The solution uses advanced machine learning and 
                  threat intelligence to identify and block suspicious emails before they reach your inbox.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-charcoal/80">Real-time threat detection and blocking</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-charcoal/80">Protection against malware, phishing, and BEC attacks</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-charcoal/80">Advanced filtering for graymail and bulk messages</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                  <Shield className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Targeted Attack Protection</h3>
                <p className="text-charcoal/80 mb-6">
                  Proofpoint's Targeted Attack Protection (TAP) provides advanced protection against sophisticated email threats, 
                  including malicious attachments and URLs. TAP uses a combination of static and dynamic analysis techniques to 
                  detect and block threats that traditional security solutions might miss.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-charcoal/80">Protection against zero-day threats and advanced malware</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-charcoal/80">URL defense for protection against malicious links</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-charcoal/80">Detailed threat intelligence and reporting</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                  <Lock className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Data Loss Prevention</h3>
                <p className="text-charcoal/80 mb-6">
                  Proofpoint's Email Data Loss Prevention (DLP) solution helps organizations protect sensitive information from 
                  being accidentally or maliciously sent outside the organization. The solution uses advanced content analysis 
                  to identify and protect sensitive data in emails and attachments.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-charcoal/80">Protection for sensitive data in emails and attachments</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-charcoal/80">Customizable policies for different types of sensitive information</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-charcoal/80">Compliance with regulatory requirements</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-32">
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-deep-blue">Request More Information</h3>
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
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="Tell us about your email security needs"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white">
                      Send Request
                    </Button>
                  </form>
                </div>
                <div className="bg-light-gray rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4">Why Choose Proofpoint?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Industry-leading email security solutions</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Advanced protection against phishing and BEC attacks</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Comprehensive data protection capabilities</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Cloud and on-premises deployment options</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Trusted by thousands of organizations worldwide</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Email Communications</h2>
            <p className="text-xl mb-8">
              Contact us today to learn how Proofpoint's email security solutions can protect your organization from email-based threats.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-cybernovr-red hover:bg-cybernovr-red/90 text-white"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}