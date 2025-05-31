import Image from "next/image"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/products/product-card"
import Darktrace from "@/components/images/darktracelogo.png"
import Proofpoint from "@/components/images/Proofpoint.jpg"
import Cisco from "@/components/images/cisco.jpg"
import PaloAltoNetworks from "@/components/images/PaloAltoNetworks.png"
import whalebone from "@/components/images/whalebonelogo.png"
import CrowdStrike from "@/components/images/crowdstrike.png"
import Sectigo from "@/components/images/sectigo.jpeg"
import Centraleyes from "@/components/images/centraleyes-logo.jpeg"
import Tenable from "@/components/images/tenable-logo.jpeg"

export default function ProductsPage() {
  const products = [
    {
      name: "Darktrace",
      description:
        "AI-powered cybersecurity platform that uses machine learning to detect and respond to cyber threats in real-time.",
      image: Darktrace,
      href: "https://www.darktrace.com",
      category: "Threat Detection",
    },
    {
      name: "Proofpoint",
      description:
        "Advanced email security and data protection solutions to safeguard your organization from email-based threats.",
      image: Proofpoint,
      href: "https://www.proofpoint.com/",
      category: "Email Security",
    },
    // {
    //   name: "CrowdStrike",
    //   description:
    //     "Cloud-delivered endpoint protection platform that combines next-gen antivirus with endpoint detection and response.",
    //   image: CrowdStrike,
    //   href: "/products/crowdstrike",
    //   category: "Endpoint Security",
    // },
    // {
    //   name: "Palo Alto Networks",
    //   description:
    //     "Comprehensive security solutions including next-generation firewalls, cloud security, and threat intelligence.",
    //   image: PaloAltoNetworks,
    //   href: "/products/palo-alto",
    //   category: "Network Security",
    // },
    {
      name: "Sectigo",
      description:
        " Platform of choice to deliver digital trust across the enterprise, as the industry’s most innovative provider of comprehensive certificate lifecycle management (CLM).",
      image: Sectigo,
      href: "https://www.sectigo.com",
      category: "Certificate Lifecycle Management (CLM)",
    },
    {
      name: "Whalebone",
      description:
        "DNS security solution that provides protection against malware, phishing, and other cyber threats at the network level.",
      image: whalebone,
      href: "/products/whalebone",
      category: "DNS Security",
    },
    // {
    //   name: "Splunk",
    //   description:
    //     "Data platform for security monitoring, analytics, and intelligence to help detect and respond to threats.",
    //   image: "/placeholder.svg?height=300&width=400",
    //   href: "/products/splunk",
    //   category: "Security Analytics",
    // },
    {
      name: "Tenable",
      description:
        "Unlock the power of exposure management with a single, prioritized view of risk when you connect all of your third-party data with Tenable One.",
      image: Tenable,
      href: "https://www.tenable.com/",
      category: "Exposure Management",
    },
    {
      name: "Centraleyes",
      description:
        "AI-powered GRC platform to eliminate manual work, adapt to your environment, and gain instant clarity, putting you in control of risk and compliance, not buried in it.",
      image: Centraleyes,
      href: "https://www.centraleyes.com/",
      category: "Risk and Compliance",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl">
              We partner with industry-leading technology providers to deliver comprehensive security solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                description={product.description}
                image={product.image} 
                href={product.href}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section> 
    </>
  )
}
