"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

export function useScrollAnimation(options = { threshold: 0.1, once: true }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, options)

  return { ref, isInView }
}

export function useAnimationDelay(delay = 0) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return isVisible
}

export function useCountAnimation(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const { ref, isInView } = useScrollAnimation()

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    if (isInView) {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        }
      }

      animationFrame = requestAnimationFrame(step)
    }

    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, end, duration])

  return { ref, count }
}
