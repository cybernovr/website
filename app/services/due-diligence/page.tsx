import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Database, Search, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function DueDiligencePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl text-black mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cybersecurity Due Diligence
            </h1>
            <p className="text-xl  mb-8">
              Thorough security assessments for mergers, acquisitions, and
              third-party vendors to identify potential risks.
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
                <h2 className="text-3xl font-bold mb-6">
                  What is Cybersecurity Due Diligence?
                </h2>
                <p className="text-lg text-charcoal/80 mb-6">
                  Cybersecurity due diligence is the process of evaluating and
                  validating an organization's security posture prior to a
                  transaction or partnership. It involves reviewing current
                  cybersecurity measures, uncovering vulnerabilities, and
                  assessing potential risks.
                </p>
                <p className="text-lg text-charcoal/80 mb-6">
                  The core objective is to determine whether the transaction or
                  partnering organisations meets established security standards
                  and to identify any cybersecurity-related liabilities. The due
                  diligence assessment supports informed decision-making in
                  investments, mergers, or acquisitions by highlighting
                  potential cybersecurity challenges and associated costs of
                  remediation.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                  <Database className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Our Due Diligence Process
                </h3>
                <p className="text-charcoal/80 mb-6">
                  We typically carry out this exercise through risk profiling
                  comprising of several key components:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white font-bold">1</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">
                        Security Architecture Review
                      </h4>
                      <p className="text-charcoal/80">
                        Comprehensive assessment of the organization's security
                        infrastructure and controls
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">
                        Penetration Tests
                      </h4>
                      <p className="text-charcoal/80">
                        Simulated attacks to identify vulnerabilities in systems
                        and applications
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white font-bold">3</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">
                        Sensitive Data Scanning
                      </h4>
                      <p className="text-charcoal/80">
                        Identification of where sensitive data resides and how
                        it's protected
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white font-bold">4</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">
                        Indicators of Compromise Assessment
                      </h4>
                      <p className="text-charcoal/80">
                        Searching for evidence of past or current security
                        breaches and their severity
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white font-bold">5</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">
                        Security Controls Design, Deployment and Validation
                      </h4>
                      <p className="text-charcoal/80">
                        Recommendations and implementation of appropriate
                        security measures
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-light-gray rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-4">
                  When You Need Due Diligence
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent/10 mb-4">
                      <Search className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">
                      Mergers & Acquisitions
                    </h4>
                    <p className="text-charcoal/80">
                      Assess cybersecurity risks before finalizing a merger or
                      acquisition
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent/10 mb-4">
                      <Shield className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">Vendor Assessment</h4>
                    <p className="text-charcoal/80">
                      Evaluate third-party vendors who will have access to your
                      systems or data
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent/10 mb-4">
                      <CheckCircle className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">
                      Partnership Formation
                    </h4>
                    <p className="text-charcoal/80">
                      Verify security posture before entering strategic
                      partnerships
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent/10 mb-4">
                      <Database className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">Investment Decisions</h4>
                    <p className="text-charcoal/80">
                      Understand cybersecurity risks before making significant
                      investments
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-32">
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-deep-blue">
                    Initiate a Conversation
                  </h3>
                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-charcoal mb-1"
                      >
                        Name *
                      </label>
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
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-charcoal mb-1"
                      >
                        Email *
                      </label>
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
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-charcoal mb-1"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-charcoal mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="Your Phone Number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-charcoal mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
                <div className="bg-light-gray rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4">
                    Benefits of Our Due Diligence Services
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">
                          Identify hidden security risks before they become
                          costly problems
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">
                          Make informed decisions based on comprehensive
                          security assessments
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">
                          Understand remediation costs and timelines before
                          committing
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">
                          Protect your organization from inheriting security
                          vulnerabilities
                        </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Assess Your Security Risks?
            </h2>
            <p className="text-xl mb-8">
              Contact us today to learn how our due diligence services can help
              you make informed decisions and protect your investments.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
