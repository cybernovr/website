import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Radar, ShieldCheck, Network, Database } from "lucide-react"
import RequestForm from "@/components/req-more-info/request-form"

export default function NovrRadarPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-gray-900 to-deep-blue text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NovrRADAR</h1>
            <p className="text-xl md:text-2xl font-semibold mb-4 text-gray-200">
              Gateway IoC Threat Detection Solution
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
              An AI-powered, passive cybersecurity monitoring system developed to detect Indicators of Compromise (IoCs) across a digital environment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                  Designed for deployment at internet gateway points, NovrRADAR leverages advanced machine learning to detect both known and unknown cyber threats targeting your cyberspace.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Importantly, it operates by analyzing only <strong>network metadata</strong>—such as IP addresses, ports, protocols, and flow patterns—ensuring that no content-level (payload) data is inspected or stored, preserving both user privacy and data confidentiality.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                  <Radar className="h-10 w-10 text-cybernovr-red mb-4" />
                  <h3 className="text-lg font-bold mb-2">Passive Monitoring</h3>
                  <p className="text-sm text-charcoal/70">
                    Operates passively at gateway points without disrupting network flow.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                  <Network className="h-10 w-10 text-cybernovr-red mb-4" />
                  <h3 className="text-lg font-bold mb-2">Metadata Analysis</h3>
                  <p className="text-sm text-charcoal/70">
                    Analyzes IPs, ports, protocols, and flow patterns only.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                  <ShieldCheck className="h-10 w-10 text-cybernovr-red mb-4" />
                  <h3 className="text-lg font-bold mb-2">Privacy Preserved</h3>
                  <p className="text-sm text-charcoal/70">
                    No content-level (payload) data is ever inspected or stored.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                  <Database className="h-10 w-10 text-cybernovr-red mb-4" />
                  <h3 className="text-lg font-bold mb-2">AI-Powered</h3>
                  <p className="text-sm text-charcoal/70">
                    Detects known and unknown threats using advanced ML models.
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}