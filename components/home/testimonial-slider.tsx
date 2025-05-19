"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, User } from "lucide-react"

const testimonials = [
  {
    quote:
      "Cybernovr has transformed our security posture. Their team of experts provided tailored solutions that addressed our specific needs and challenges.",
    author: "John Smith",
    title: "CIO, Global Financial Services",
  },
  {
    quote:
      "Working with Cybernovr has been a game-changer for our organization. Their proactive approach to cybersecurity has helped us stay ahead of emerging threats.",
    author: "Sarah Johnson",
    title: "CISO, Healthcare Provider",
  },
  {
    quote:
      "The team at Cybernovr delivered exceptional results. Their penetration testing identified critical vulnerabilities that we were able to address before they could be exploited.",
    author: "Michael Chen",
    title: "IT Director, E-commerce Platform",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative">
      {/* Remove the gradient overlay to improve visibility */}
      
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full px-4">
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200 relative hover:shadow-xl transition-shadow">
                <div className="text-cybernovr-purple text-6xl font-serif absolute -top-6 left-6">"</div>
                <p className="text-xl text-charcoal mb-8 italic leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="h-14 w-14 rounded-full overflow-hidden mr-4 bg-cybernovr-purple/10 flex items-center justify-center">
                    <User className="h-8 w-8 text-cybernovr-purple" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-charcoal">{testimonial.author}</h4>
                    <p className="text-md text-charcoal/80">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-4 w-4 rounded-full transition-colors ${
              index === currentIndex ? "bg-cybernovr-purple" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevTestimonial}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-20 text-cybernovr-purple hover:bg-cybernovr-purple hover:text-white transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-20 text-cybernovr-purple hover:bg-cybernovr-purple hover:text-white transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}
