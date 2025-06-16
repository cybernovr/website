import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Brain, RefreshCw } from "lucide-react"
import darktrace from "@/components/images/darktracelogo.png"

export default function DarktracePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Darktrace Security Solutions</h1>
            <p className="text-xl mb-8">
              AI-powered cybersecurity platform that uses machine learning to detect and respond to cyber threats in real-time.
            </p>
            <div className="flex justify-center">
              <Image 
                src={darktrace} 
                alt="Darktrace Logo" 
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
                <h2 className="text-3xl font-bold mb-6">Security Augmentation Solution</h2>
                <p className="text-lg text-charcoal/80 mb-6">
                  Through our partner products, we deliver 360-degree capabilities to handle typical day-to-day cybersecurity 
                  challenges around phishing, ransomware, and other insider or supply chain cyber-attacks. These solutions 
                  work across your entire digital landscape, covering legacy systems, cloud, email, apps, endpoint, and 
                  network platforms.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                  <Brain className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI-Powered Threat Prevention</h3>
                <p className="text-charcoal/80 mb-6">
                  Our Partner solution, Darktrace PREVENT, continuously monitors your attack surface for risks, high-impact 
                  vulnerabilities, and external threats. It provides actionable insights into your attack surface and associated 
                  risks. Finally, it presents trends on key metrics, such as the type of risks found and their criticality for 
                  prioritization.
                </p>
                <a href="https://darktrace.com/products/prevent" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="mt-2">
                    Learn More at Darktrace
                  </Button>
                </a>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                  <Shield className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Deep Learning & Automated Threat Detection</h3>
                <p className="text-charcoal/80 mb-6">
                  Darktrace is a leader in automated threat detection using self-learning AI to understand every user and 
                  digital asset within your enterprise. Darktrace DETECT works by analyzing thousands of metrics to reveal 
                  subtle deviations that may signal an evolving threat.
                </p>
                <a href="https://darktrace.com/products/detect" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="mt-2">
                    Learn More at Darktrace
                  </Button>
                </a>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                  <RefreshCw className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Autonomous Response</h3>
                <p className="text-charcoal/80 mb-6">
                  Darktrace RESPOND provides autonomous, always-on action to contain and disarm attacks within your enterprise's 
                  digital footprints. It can disarm attacks wherever they occur, be it cloud, email, apps, endpoint, network 
                  platforms, etc.
                </p>
                <a href="https://darktrace.com/products/respond" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="mt-2">
                    Learn More at Darktrace
                  </Button>
                </a>
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
                        placeholder="Tell us about your security needs"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white">
                      Send Request
                    </Button>
                  </form>
                </div>
                <div className="bg-light-gray rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4">Why Choose Darktrace?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Self-learning AI that adapts to your environment</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Real-time threat detection and autonomous response</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Comprehensive coverage across your digital infrastructure</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Proven track record with organizations worldwide</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Continuous innovation in AI security technology</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Strengthen Your Cybersecurity Posture with Darktrace</h2>
            <p className="text-xl mb-8">
              Contact us today to learn how Darktrace's AI-powered security solutions can protect your organization.
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