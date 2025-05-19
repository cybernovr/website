import AnimatedCounter from "@/components/animations/animated-counter"

interface StatCardProps {
  value: string
  label: string
}

export default function StatCard({ value, label }: StatCardProps) {
  // Extract numeric part and suffix
  const numericMatch = value.match(/^(\d+)(\+|%|\/\d+)?$/)

  if (numericMatch) {
    const numericValue = Number.parseInt(numericMatch[1])
    const suffix = numericMatch[2] || ""

    return (
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-white mb-2">
          <AnimatedCounter end={numericValue} suffix={suffix} />
        </div>
        <div className="text-lg text-white">{label}</div>
      </div>
    )
  }

  // Fallback for non-numeric values
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-purple-500 mb-2">{value}</div>
      <div className="text-lg text-white">{label}</div>
    </div>
  )
}
