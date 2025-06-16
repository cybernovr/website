import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ClipboardList, Shield, TestTube2, FileText } from "lucide-react"
import darktrace from "@/components/images/darktracelogo.png"
import prism from "@/components/images/prism.png"

export default function NovrGRCPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NovrGRC</h1>
            <p className="text-xl mb-8">
            GRC platform designed to simplify compliance, manage risks, and strengthen cybersecurity.
            </p>
            {/* <div className="flex justify-center">
              <Image 
                src={prism} 
                alt="Darktrace Logo" 
                width={200} 
                height={200} 
                className="object-contain"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">NovrGRC Solution</h2>
                <p className="text-lg text-charcoal/80 mb-6">
                Cybersecurity threats are now more prevalent than ever, compelling organizations to implement robust Governance, Risk, and Compliance (GRC) frameworks. An effective GRC framework ensures that cybersecurity strategies are aligned with business objectives, enhances resilience against cyber attacks, and ensures compliance with relevant regulations. 
                <br /> <br />
                NovrGRC is developed to meet the unique compliance requirements of our environment. Built to help organisations in Nigeria to comply with regulatory requirements such as CBN Cybersecurity Framework, Nigeria Data Protection Act (NDPA) and PCI-DSS. More and more frameworks will be added as they emerge in the future.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                    <TestTube2 className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Threat Simulation</h3>
                <p className="text-charcoal/80 mb-6">
                    To simulate attacks relevant to the many industries, such as DDoS attacks, man-in-the-middle attacks targeting communication protocols, or attacks exploiting vulnerabilities in network infrastructure – NovrGRC connects to our threat intelligence platform (NovrPRISM) and other similar platforms via API.
                </p>
                <a href="/contact">
                    <Button variant="outline" className="mt-2">
                    Test your defenses
                    </Button>
                </a>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                    <Shield className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Security Control Validation</h3>
                <p className="text-charcoal/80 mb-6">
                    NovrGRC is able to validate the effectiveness of existing security controls (e.g., firewalls, intrusion detection systems, endpoint protection) in preventing, detecting, and responding to the simulated attacks.
                </p>
                <a href="/contact">
                    <Button variant="outline" className="mt-2">
                    Validate your controls
                    </Button>
                </a>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                    <ClipboardList className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Gap Identification</h3>
                <p className="text-charcoal/80 mb-6">
                    Our platform identify weaknesses and gaps in your cybersecurity framework/strategy based on the results of the simulations and control validations.
                </p>
                <a href="/contact">
                    <Button variant="outline" className="mt-2">
                    Close security gaps
                    </Button>
                </a>
            </div>
            
            {/* <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                    <ClipboardList className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Continuous Validation</h3>
                <p className="text-charcoal/80 mb-6">
                    A continuous validation program using Cybernovr Security Validation tools to regularly test and improve the effectiveness of your cybersecurity controls and policies.
                </p>
                <a href="/contact">
                    <Button variant="outline" className="mt-2">
                    Manage validation
                    </Button>
                </a>
            </div> */}

            {/* <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                    <FileText className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Reporting and Remediation</h3>
                <p className="text-charcoal/80 mb-6">
                    NovrGRC is able to generate reports detailing the identified gaps and prioritize remediation efforts based on the potential impact of the vulnerabilities. Reports are tailored to industry/regulators.
                </p>
                <a href="/contact">
                    <Button variant="outline" className="mt-2">
                    Get compliance-ready insights
                    </Button>
                </a>
            </div> */}

              {/* <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                  <Shield className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Deep Learning & Automated Threat Detection</h3>
                <p className="text-charcoal/80 mb-6">
                  Darktrace is a leader in automated threat detection using self-learning AI to understand every user and 
                  digital asset within your enterprise. Darktrace DETECT works by analyzing thousands of metrics to reveal 
                  subtle deviations that may signal an evolving threat.
                </p>
                <a href="/contact">
                  <Button variant="outline" className="mt-2">
                    Reach out to learn more
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
                <a href="/contact">
                  <Button variant="outline" className="mt-2">
                    Reach out to learn more
                  </Button>
                </a>
              </div> */}

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
                    <h3 className="text-xl font-bold mb-4">Why Choose NovrGRC?</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                            <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                        </div>
                        <div className="ml-3">
                            <p className="text-charcoal/80">Simulate real-world attacks relevant to your industry including DDoS, MITM, and infrastructure exploits through API-connected threat intelligence.</p>
                        </div>
                        </li>
                        <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                            <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                            </div>
                        </div>
                        <div className="ml-3">
                            <p className="text-charcoal/80">Validate effectiveness of security controls (firewalls, IDS, endpoint protection) against simulated attacks.</p>
                        </div>
                        </li>
                        <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                            <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                            </div>
                        </div>
                        <div className="ml-3">
                            <p className="text-charcoal/80">Identify weaknesses and gaps in your cybersecurity framework based on simulation results.</p>
                        </div>
                        </li>
                        <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                            <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                            </div>
                        </div>
                        <div className="ml-3">
                            <p className="text-charcoal/80">Generate compliance-ready reports detailing gaps and prioritized remediation actions tailored to your industry.</p>
                        </div>
                        </li>
                        <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                            <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                            </div>
                        </div>
                        <div className="ml-3">
                            <p className="text-charcoal/80">Continuously validate and improve security controls through automated testing programs.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Strengthen Your Cybersecurity Posture with NovrGRC</h2>
            <p className="text-xl mb-8">
              Contact us today to learn how NovrGRC security solutions can protect your organization.
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