"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Darktrace from "@/components/images/darktrace.png"
import Proofpoint from "@/components/images/Proofpoint.jpg"
import Whalebone from "@/components/images/whalebonelogo.png"
import Centraleyes from "@/components/images/centraleyes-logo.jpeg"
import Tenable from "@/components/images/tenable-logo.jpeg"
import Cisco from "@/components/images/cisco.jpg"
import PaloAltoNetworks from "@/components/images/PaloAltoNetworks.png"
import Fortinet from "@/components/images/Fortinet.png"
import CrowdStrike from "@/components/images/crowdstrike.png"
import Sectigo from "@/components/images/Sectigo.png"

const partners = [
  { name: "Darktrace", logo: Darktrace },
  { name: "Sectigo", logo: Sectigo },
  { name: "Centraleyes", logo: Centraleyes },
  { name: "Proofpoint", logo: Proofpoint },
  // { name: "Cisco", logo: Cisco },
  // { name: "Palo Alto Networks", logo: PaloAltoNetworks },
  // { name: "Fortinet", logo: Fortinet },
  // { name: "CrowdStrike", logo: CrowdStrike },
  { name: "Whalebone", logo: Whalebone },
  { name: "Tenable", logo: Tenable },
  
  

]

export default function PartnerLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.7
    const containerWidth = scrollContainer.scrollWidth

    const scroll = () => {
      if (!scrollContainer) return

      scrollPosition += scrollSpeed
      if (scrollPosition >= containerWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div ref={scrollRef} className="flex items-center space-x-12 overflow-x-hidden py-6">
        {/* First set of logos */}
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0"
            whileHover={{ scale: 1.1, filter: "grayscale(0)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              width={180}
              height={60}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}

        {/* Duplicate set for seamless scrolling */}
        {partners.map((partner, index) => (
          <motion.div
            key={`dup-${index}`}
            className="flex-shrink-0"
            whileHover={{ scale: 1.1, filter: "grayscale(0)" }}
          >
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              width={180}
              height={60}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
