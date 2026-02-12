import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShieldAlert, Brain, Clock, ScanEye, FileText, Globe, Lock } from "lucide-react"
import RequestForm from "@/components/req-more-info/request-form"

export default function SecuBreachPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">SecuBreach</h1>
            <p className="text-xl md:text-2xl font-semibold mb-4 text-charcoal/90">
              VULNERABILITY, THREAT & EXPOSURE MANAGEMENT SYSTEM
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-charcoal/80">
              AI-based passive vulnerability detection solution that scans internet-facing systems across a country's cyberspace.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              
              {/* General Description */}
              <div>
                <h2 className="text-3xl font-bold mb-6">General Description</h2>
                <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                  SecuBreach performs metadata-based inspection—ensuring full compliance with data protection laws such as GDPR, HIPAA, SOX, and PCI-DSS. It identifies vulnerabilities and generates remediation guidance autonomously.
                </p>
              </div>

              {/* USP Section */}
              <div className="bg-light-gray/50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Brain className="h-6 w-6 text-electric-blue mr-2" />
                  Why SecuBreach?
                </h3>
                <p className="text-charcoal/80 mb-4">
                  What distinguishes this solution is its <strong>AI-driven geospatial attribution and behavioral analysis</strong>.
                </p>
                <p className="text-charcoal/80 text-sm">
                  Using metadata alone, the system identifies the origin and destination of suspected threat traffic and links it to known threat actor infrastructure. For example, if a device attempts communication with a command-and-control server abroad, the system flags the interaction and classifies the threat type without compromising sensitive content.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Feature 1 */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <ScanEye className="h-8 w-8 text-electric-blue mb-3" />
                  <h3 className="text-lg font-bold mb-2">Passive Scanning</h3>
                  <p className="text-sm text-charcoal/70">
                    No packet injection or content access, ensuring safe monitoring.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <ShieldAlert className="h-8 w-8 text-electric-blue mb-3" />
                  <h3 className="text-lg font-bold mb-2">CVE-Driven Engine</h3>
                  <p className="text-sm text-charcoal/70">
                    Advanced detection engine based on Common Vulnerabilities and Exposures.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <Lock className="h-8 w-8 text-electric-blue mb-3" />
                  <h3 className="text-lg font-bold mb-2">Metadata-Only</h3>
                  <p className="text-sm text-charcoal/70">
                    Inspection strictly via metadata to ensure legal compliance.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <FileText className="h-8 w-8 text-electric-blue mb-3" />
                  <h3 className="text-lg font-bold mb-2">Auto-Remediation</h3>
                  <p className="text-sm text-charcoal/70">
                    Autonomously generates plain-language, prioritized remediation reports.
                  </p>
                </div>
                 
                 {/* Feature 5 */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <Globe className="h-8 w-8 text-electric-blue mb-3" />
                  <h3 className="text-lg font-bold mb-2">Regulatory Tagging</h3>
                  <p className="text-sm text-charcoal/70">
                    Context-aware tagging for GDPR, HIPAA, SOX, PCI, etc.
                  </p>
                </div>
              </div>

            </div>

            {/* Sidebar / Form */}
            <div className="relative">
              <div className="sticky top-32">
                <div>
                  <RequestForm />
                </div>
                
                <div className="bg-light-gray rounded-lg p-6 shadow-md mt-8">
                  <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80 text-sm">Identifies vulnerabilities without disrupting operations.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80 text-sm">Context-aware regulatory tagging for compliance.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80 text-sm">Centralized or distributed deployment options.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Infrastructure with SecuBreach</h2>
            <p className="text-xl mb-8">
              Contact us today to learn how our AI-powered vulnerability management can protect your organization.
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