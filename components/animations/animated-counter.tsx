"use client"

import { useCountAnimation } from "@/hooks/use-animation"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export default function AnimatedCounter({ end, duration = 2000, suffix = "", className = "" }: AnimatedCounterProps) {
  const { ref, count } = useCountAnimation(end, duration)

  return (
    <div ref={ref} className={className}>
      {count}
      {suffix}
    </div>
  )
}
