"use client"

import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  threshold?: number
  delay?: number
  duration?: number
  type?: "words" | "chars"
}

export default function AnimatedText({
  text,
  className = "",
  once = true,
  threshold = 0.1,
  delay = 0,
  duration = 0.05,
  type = "words",
}: AnimatedTextProps) {
  const splitText = () => {
    if (type === "words") {
      return text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once, threshold }}
          transition={{ delay: delay + index * duration, duration: 0.5 }}
        >
          {word}
          {index !== text.split(" ").length - 1 ? " " : ""}
        </motion.span>
      ))
    } else {
      return text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once, threshold }}
          transition={{ delay: delay + index * duration, duration: 0.5 }}
        >
          {char}
        </motion.span>
      ))
    }
  }

  return <div className={className}>{splitText()}</div>
}
