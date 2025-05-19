"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Clock, BarChart } from "lucide-react"

interface CourseProps {
  course: {
    id: string
    title: string
    description: string
    price: number
    duration: string
    level: string
    icon: React.ReactNode
    image: any
  }
}

export default function CourseCard({ course }: CourseProps) {
  // Format price in Naira
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(102, 47, 142, 0.1)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100"
    >
      <div className="relative h-48">
        <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
        <div className="absolute top-4 right-4 bg-cybernovr-purple text-white text-sm font-medium py-1 px-3 rounded-full">
          {formatPrice(course.price)}
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4">{course.icon}</div>
        <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
        <p className="text-charcoal/80 mb-4">{course.description}</p>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center text-sm text-charcoal/70">
            <Clock className="h-4 w-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center text-sm text-charcoal/70">
            <BarChart className="h-4 w-4 mr-1" />
            <span>{course.level}</span>
          </div>
        </div>

        <Link href={`/courses/enroll?course=${course.id}`}>
          <Button className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white">Enroll Now</Button>
        </Link>
      </div>
    </motion.div>
  )
}
