"use client"

import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(102, 47, 142, 0.1)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 border border-gray-100"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-cybernovr-purple"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-charcoal/80 mb-4">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-cybernovr-purple hover:text-cybernovr-purple/80 font-medium transition-colors group"
      >
        Learn More
        <motion.div whileHover={{ x: 5 }} className="ml-2">
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </motion.div>
      </Link>
    </motion.div>
  )
}
