import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProductCardProps {
  name: string
  description: string
  image: any
  href: string
  category: string
}

export default function ProductCard({ name, description, image, href, category }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md, hover:shadow-lg transition-all duration-300">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover py-14" />
        <div className="absolute top-4 left-4 text-sm font-medium py-1 px-3 rounded-full bg-primary text-white">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{name}</h3>
        <p className="text-charcoal/80 mb-6">{description}</p>
        <Link
          href={href}
          target="_blank"
          className="inline-flex items-center text-electric-blue hover:text-deep-blue font-medium transition-colors"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
