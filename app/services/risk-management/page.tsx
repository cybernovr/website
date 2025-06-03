import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Shield, CheckCircle, RefreshCw } from "lucide-react";
import Link from "next/link";
import InitiateForm from "@/components/initiate-convo/initiate-form";

export default function RiskManagementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-white">
        <div className="container-custom text-black">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Risk Management
            </h1>
            <p className="text-xl mb-8">
              Comprehensive risk management services to identify, assess, and
              mitigate cybersecurity threats to your organization.
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
                  Our Risk Management Approach
                </h2>
                <p className="text-lg text-charcoal/80 mb-6">
                  Our risk management service addresses core functional
                  components of risk management, providing a comprehensive
                  approach to identifying, assessing, and mitigating
                  cybersecurity risks to your organization.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                  <AlertTriangle className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Core Components</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-electric-blue flex items-center justify-center">
                        <span className="text-white font-bold">1</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">
                        Risk Identification
                      </h4>
                      <p className="text-charcoal/80">
                        We identify assets, attack surfaces, threats, and
                        vulnerabilities to create a comprehensive risk profile.
                      </p>
                      <ul className="mt-2 space-y-1">
                        <li className="flex items-center">
                          <span className="text-electric-blue mr-2">•</span>
                          <span>Assets/Attack Surface Assessment</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-electric-blue mr-2">•</span>
                          <span>Threat Analysis</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-electric-blue mr-2">•</span>
                          <span>Vulnerability Identification</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-electric-blue flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Risk Assessment</h4>
                      <p className="text-charcoal/80">
                        We evaluate and calculate risks based on likelihood and
                        potential impact to prioritize mitigation efforts.
                      </p>
                      <ul className="mt-2 space-y-1">
                        <li className="flex items-center">
                          <span className="text-electric-blue mr-2">•</span>
                          <span>Risk Calculation</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-electric-blue mr-2">•</span>
                          <span>Risk Evaluation</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-electric-blue flex items-center justify-center">
                        <span className="text-white font-bold">3</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Risk Treatment</h4>
                      <p className="text-charcoal/80">
                        We implement appropriate security controls and calculate
                        residual risk after mitigation measures.
                      </p>
                      <ul className="mt-2 space-y-1">
                        <li className="flex items-center">
                          <span className="text-electric-blue mr-2">•</span>
                          <span>Selection of Security Controls</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-electric-blue mr-2">•</span>
                          <span>Implementation of Controls</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-electric-blue mr-2">•</span>
                          <span>Calculation of Residual Risk</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-electric-blue flex items-center justify-center">
                        <span className="text-white font-bold">4</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Risk Monitoring</h4>
                      <p className="text-charcoal/80">
                        We continuously assess the effectiveness of security
                        measures and monitor for new or evolving risks.
                      </p>
                      <ul className="mt-2 space-y-1">
                        <li className="flex items-center">
                          <span className="text-electric-blue mr-2">•</span>
                          <span>Effectiveness Assessment</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-electric-blue mr-2">•</span>
                          <span>Continuous Risk Monitoring</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-electric-blue flex items-center justify-center">
                        <span className="text-white font-bold">5</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">
                        Resilience Management
                      </h4>
                      <p className="text-charcoal/80">
                        We implement the 4Rs approach to ensure your
                        organization can withstand and recover from security
                        incidents.
                      </p>
                      <ul className="mt-2 space-y-1">
                        <li className="flex items-center">
                          <span className="text-electric-blue mr-2">•</span>
                          <span>Resistance</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-electric-blue mr-2">•</span>
                          <span>Reliability</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-electric-blue mr-2">•</span>
                          <span>Redundancy</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-electric-blue mr-2">•</span>
                          <span>Response & Recovery</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-light-gray rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-4">Our Experience</h3>
                <p className="text-charcoal/80 mb-6">
                  We have conducted risk management services for a national
                  government, governmental entities, and several medium-to-large
                  organisations. Our service prioritizes and treats critical
                  risk functions segregated into organizational, technical, and
                  legal measures.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-electric-blue/10 mb-4">
                      <Shield className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">
                      Organizational Measures
                    </h4>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-electric-blue/10 mb-4">
                      <CheckCircle className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">Technical Measures</h4>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-electric-blue/10 mb-4">
                      <RefreshCw className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h4 className="font-semibold mb-2">Legal Measures</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-32">
                {/* <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 mb-8"> */}
                  <InitiateForm />
                {/* </div> */}
                <div className="bg-light-gray rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4">
                    Benefits of Our Risk Management Services
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">
                          Proactive identification of security threats
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">
                          Prioritized risk mitigation strategies
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">
                          Enhanced organizational resilience
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">
                          Reduced security incidents and breaches
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-electric-blue flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">
                          Improved compliance with regulations
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
      <section className="py-16 bg-deep-blue text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl text-black  md:text-4xl font-bold mb-6">
              Ready to Strengthen Your Security Posture?
            </h2>
            <p className="text-xl text-black mb-8">
              Contact us today to learn how our risk management services can
              help protect your organization from evolving threats.
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
