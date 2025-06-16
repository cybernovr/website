import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Lock,
  Shield,
  Globe,
  Smartphone,
  Code,
  Database,
  Server,
} from "lucide-react";
import Link from "next/link";

export default function PenetrationTestingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-white">
        <div className="container-custom text-black">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Penetration Testing
            </h1>
            <p className="text-xl mb-8">
              Identify vulnerabilities in your systems and applications before
              attackers do with our advanced penetration testing services.
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
                  Advanced Penetration Testing Services
                </h2>
                <p className="text-lg text-charcoal/80 mb-6">
                  We provide advanced penetration testing services designed with
                  the evolving landscape of Machine Learning and Artificial
                  Intelligence in mind. Our comprehensive approach identifies
                  vulnerabilities across your networks and systems using
                  cutting-edge tools and technologies.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                  <div className="mb-4">
                    <Server className="h-10 w-10 text-electric-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Infrastructure Penetration Testing
                  </h3>
                  <p className="text-charcoal/80">
                    Comprehensive assessment of your network infrastructure,
                    servers, and security systems to identify vulnerabilities.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                  <div className="mb-4">
                    <Globe className="h-10 w-10 text-electric-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Web Application Penetration Testing
                  </h3>
                  <p className="text-charcoal/80">
                    Thorough testing of web applications to identify security
                    flaws that could be exploited by attackers.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                  <div className="mb-4">
                    <Smartphone className="h-10 w-10 text-electric-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Mobile Application Penetration Testing
                  </h3>
                  <p className="text-charcoal/80">
                    Security assessment of mobile applications across different
                    platforms to identify vulnerabilities.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                  <div className="mb-4">
                    <Code className="h-10 w-10 text-electric-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    API Penetration Testing
                  </h3>
                  <p className="text-charcoal/80">
                    Evaluation of API security to ensure that your interfaces
                    are protected against unauthorized access and attacks.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                  <div className="mb-4">
                    <Shield className="h-10 w-10 text-electric-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Desktop Application Penetration Testing
                  </h3>
                  <p className="text-charcoal/80">
                    Security assessment of desktop applications to identify
                    vulnerabilities that could be exploited.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                  <div className="mb-4">
                    <Database className="h-10 w-10 text-electric-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Cloud Security Penetration Testing
                  </h3>
                  <p className="text-charcoal/80">
                    Comprehensive assessment of cloud environments to identify
                    security gaps and vulnerabilities.
                  </p>
                </div>
              </div>

              <div className="bg-light-gray rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-4">
                  CRET OVS Web Application Penetration Testing
                </h3>
                <p className="text-charcoal/80 mb-6">
                  Our specialized CRET OVS Web Application Penetration Testing
                  service provides an in-depth assessment of web applications
                  using our proprietary methodology that combines automated
                  scanning with manual testing techniques.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">
                        Comprehensive Vulnerability Assessment
                      </h4>
                      <p className="text-charcoal/80">
                        Thorough identification of security weaknesses in web
                        applications
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">
                        Advanced Exploitation Techniques
                      </h4>
                      <p className="text-charcoal/80">
                        Simulation of real-world attack scenarios to test
                        application security
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">
                        Detailed Reporting and Remediation Guidance
                      </h4>
                      <p className="text-charcoal/80">
                        Comprehensive reports with actionable recommendations
                        for fixing vulnerabilities
                      </p>
                    </div>
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
                    Our Penetration Testing Approach
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">1</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">
                          <span className="font-medium">
                            Planning & Reconnaissance:
                          </span>{" "}
                          Define scope and gather information
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">2</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">
                          <span className="font-medium">Scanning:</span>{" "}
                          Identify potential vulnerabilities
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">3</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">
                          <span className="font-medium">Exploitation:</span>{" "}
                          Attempt to exploit identified vulnerabilities
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">4</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">
                          <span className="font-medium">Analysis:</span>{" "}
                          Evaluate results and assess impact
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">5</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">
                          <span className="font-medium">Reporting:</span>{" "}
                          Detailed documentation with remediation
                          recommendations
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
              Ready to Test Your Security Defenses?
            </h2>
            <p className="text-xl mb-8">
              Contact us today to learn how our penetration testing services can
              help identify and address vulnerabilities in your systems.
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
  );
}
