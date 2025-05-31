import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Shield, FileCheck, AlertTriangle } from "lucide-react";
import ContactForm from "@/components/contact/contact-form";
import Link from "next/link";

export default function ProfessionalServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl text-black mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cybersecurity Strategy and Transformation
            </h1>
            <p className="text-xl mb-8">
              Proactively defend against evolving cyber threats while enabling secure digital growth.
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
                  Cybersecurity Resilience Strategy
                </h2>
                <p className="text-lg text-charcoal/80 mb-6">
                  Digital transformation continues to expand the attack surface. In addition, Artificial Intelligence (AI) is turbo charging cyber attacks. We help to ensure your digital transformation aligns with your cybersecurity goals. 
                </p>
                <p className="text-lg text-charcoal/80 mb-6">
                  Through transforming and strengthening your cybersecurity programmes, we work with governments and private organisations stay ahead of evolving threats and build confidence among stakeholders during their digital transformation journeys. 
                </p>
                <p className="text-lg text-charcoal/80 mb-6">
                  Contact us today to get more insight into how we help organisations to maintain the Confidentiality, Integrity, and Availability (CIA) of their critical information infrastructure.
                </p>
              </div>

              <div className="bg-light-gray rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-4">
                  Our Services Include:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">
                        Cybersecurity Resilience Strategy Development & Implementation
                      </h4>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">
                        Cybersecurity & Digital Transformation Management
                      </h4>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">
                        Cybersecurity Governance & Compliance Management
                      </h4>
                    </div>
                  </li>
                </ul>
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
              Ready to Enhance Your Security Posture?
            </h2>
            <p className="text-xl mb-8">
              Contact us today to learn how our professional services can help
              protect your organization.
            </p>
            <Link href="/courses">
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
