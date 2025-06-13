// components/blogs/blog-card.tsx
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  image: any
  href: string
  author: string
  date: string
}

export default function BlogCard({ title, excerpt, image, href, author, date }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="relative h-60">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <div className="text-primary font-medium mb-4 flex justify-between">
          <p>By {author}</p>
          <p>{date}</p>
        </div>
        <p className="text-charcoal/80 mb-6">{excerpt}</p>
        <Link
          href={href}
          className="inline-flex items-center text-electric-blue hover:text-deep-blue font-medium transition-colors mt-auto"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}