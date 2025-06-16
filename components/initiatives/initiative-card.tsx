import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface InitiativeCardProps {
  title: string
  description: string
  icon: React.ReactNode
  image: string
  href: string
  isReversed?: boolean
}

export default function InitiativeCard({
  title,
  description,
  icon,
  image,
  href,
  isReversed = false,
}: InitiativeCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className={`relative h-[400px] rounded-lg overflow-hidden shadow-lg ${isReversed ? "lg:order-last" : ""}`}>
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>

      <div className="space-y-6">
        <div className="mb-4">{icon}</div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg text-charcoal/80">{description}</p>
        <ul className="space-y-3">
          {[
            "Comprehensive programs for all skill levels",
            "Expert-led sessions and workshops",
            "Hands-on practical experience",
            "Community-focused approach",
          ].map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              <span className="ml-3">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="pt-4">
          <Link href={href}>
            <Button className="bg-accent hover:bg-deep-blue text-white">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
