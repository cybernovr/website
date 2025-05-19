import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Users, FileCheck, AlertTriangle, Database, Globe, Zap } from "lucide-react"
import ServiceDetailCard from "@/components/services/service-detail-card"

export default function ServicesPage() {
  const services = [
    {
      title: "Professional Services",
      description:
        "Our team of cybersecurity experts provides tailored consulting services to help you identify and address your security challenges.",
      icon: <Shield className="h-12 w-12 text-electric-blue" />,
      href: "/services/professional-services",
    },
    {
      title: "GRC",
      description:
        "Governance, Risk, and Compliance services to help you meet regulatory requirements and industry standards.",
      icon: <FileCheck className="h-12 w-12 text-electric-blue" />,
      href: "/services/grc",
    },
    {
      title: "Risk Management",
      description:
        "Comprehensive risk assessment and management services to identify, evaluate, and mitigate security risks.",
      icon: <AlertTriangle className="h-12 w-12 text-electric-blue" />,
      href: "/services/risk-management",
    },
    {
      title: "Due Diligence",
      description:
        "Thorough security assessments for mergers, acquisitions, and third-party vendors to identify potential risks.",
      icon: <Database className="h-12 w-12 text-electric-blue" />,
      href: "/services/due-diligence",
    },
    {
      title: "Compliance",
      description: "Ensure your organization meets industry regulations and standards with our compliance services.",
      icon: <FileCheck className="h-12 w-12 text-electric-blue" />,
      href: "/services/compliance",
    },
    {
      title: "Penetration Testing",
      description:
        "Identify vulnerabilities in your systems and applications before attackers do with our penetration testing services.",
      icon: <Lock className="h-12 w-12 text-electric-blue" />,
      href: "/services/penetration-testing",
    },
    {
      title: "Incident Response",
      description: "Rapid response to security incidents to minimize damage and restore normal operations quickly.",
      icon: <Zap className="h-12 w-12 text-electric-blue" />,
      href: "/services/incident-response",
    },
    {
      title: "CISO/vCISO",
      description:
        "Strategic security leadership without the full-time executive cost through our virtual CISO services.",
      icon: <Users className="h-12 w-12 text-electric-blue" />,
      href: "/services/ciso",
    },
    {
      title: "DNS Security",
      description:
        "Protect your organization from DNS-based attacks and ensure the integrity of your domain name system.",
      icon: <Globe className="h-12 w-12 text-electric-blue" />,
      href: "/services/dns-security",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-black mb-8">
              Comprehensive cybersecurity solutions to protect your business from evolving threats.
            </p>
            <Button size="lg" className="bg-accent-cyan hover:bg-accent-cyan/90 text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceDetailCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>
     
    </>
  )
}
