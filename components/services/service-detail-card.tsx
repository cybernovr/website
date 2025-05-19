import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceDetailCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

export default function ServiceDetailCard({ title, description, icon, href }: ServiceDetailCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-charcoal/80 mb-6">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-electric-blue hover:text-deep-blue font-medium transition-colors"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  )
}
