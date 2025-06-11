import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Shield, FileCheck, AlertTriangle } from "lucide-react";
import ContactForm from "@/components/contact/contact-form";
import Link from "next/link";
import InitiateForm from "@/components/initiate-convo/initiate-form";

export default function ProfessionalServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl text-black mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cybersecurity and Digital Transformation
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
                      <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
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
                      <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
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
                      <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
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
                <InitiateForm />
                
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
