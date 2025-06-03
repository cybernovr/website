import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe, Shield, Server, Lock } from "lucide-react"
import Link from "next/link"
import InitiateForm from "@/components/initiate-convo/initiate-form"

export default function DNSSecurityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">DNS Security (DNSSec)</h1>
            <p className="text-xl mb-8">
              Proactive protection against cyber threats before they can impact your network.
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
                <h2 className="text-3xl font-bold mb-6">DNS Security Services</h2>
                <p className="text-lg text-charcoal/80 mb-6">
                  Our DNSSec services proactively block cyber threats before they can impact your customers or internal network. 
                  We leverage advanced DNS protection technologies to identify and block malicious domains and IP addresses 
                  before they can establish connections with your systems.
                </p>
                <p className="text-lg text-charcoal/80 mb-6">
                  Our partner project, DNS4EU, offers centralized DNS protection for European public institutions. The project 
                  strengthened the digital security and independence of the European Union by providing EU citizens, companies, 
                  and institutions with a secure, privacy-compliant, and powerful recursive DNS.
                </p>
                <p className="text-lg text-charcoal/80 mb-6">
                  The challenge was that EU governmental institutions and citizens were not well protected, with slow reaction to threats. 
                  The project created independent EU-based DNS protection with real-time reaction to threats — with easy distribution 
                  to citizens and institutions.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                  <Globe className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Implementation Approach</h3>
                <p className="text-charcoal/80 mb-6">
                  We can use this approach for the protection of critical infrastructure, and it is easily implemented as a 
                  cross-department project, which can show results in under 2 months. New threats and campaigns identified 
                  are immediately propagated to DNS4EU resolver, enabling CERT to use a powerful tool to block these in a very short time.
                </p>
                <div className="relative w-full h-[400px] mt-6 rounded-lg overflow-hidden">
                  <Image 
                    src="/images/dns-implementation-diagram.png" 
                    alt="DNS Security Implementation Approach" 
                    fill 
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-light-gray rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-4">Benefits of DNS Security</h3>
                <p className="text-charcoal/80 mb-6">
                  DNS Security provides a critical layer of protection for your organization by blocking malicious domains 
                  before connections can be established. This proactive approach significantly reduces the risk of successful 
                  cyberattacks and data breaches.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-electric-blue/10 mb-4">
                      <Shield className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">Proactive Threat Protection</h4>
                    <p className="text-charcoal/80">Block malicious domains and IP addresses before connections are established</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-electric-blue/10 mb-4">
                      <Server className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">Real-time Threat Intelligence</h4>
                    <p className="text-charcoal/80">Continuously updated threat intelligence to protect against emerging threats</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-electric-blue/10 mb-4">
                      <Lock className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">Enhanced Privacy</h4>
                    <p className="text-charcoal/80">Privacy-compliant DNS resolution that protects user data and browsing habits</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-electric-blue/10 mb-4">
                      <Globe className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">Easy Implementation</h4>
                    <p className="text-charcoal/80">Quick deployment with minimal disruption to existing infrastructure</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-32">
                <InitiateForm />
                <div className="bg-light-gray rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4">Why Choose Our DNS Security</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Proactive protection against emerging threats</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Real-time threat intelligence and blocking</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Easy implementation with minimal disruption</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Protection for both internal networks and customer-facing services</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Proven technology used by European public institutions</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Network at the DNS Level</h2>
            <p className="text-xl mb-8">
              Contact us today to learn how our DNS Security services can provide an essential layer of protection for your organization.
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