// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { motion, AnimatePresence } from "framer-motion"
// import img1 from "@/components/images/one.png"
// import img2 from "@/components/images/6.png"
// import img3 from "@/components/images/3.png"
// import img4 from "@/components/images/4.png"
// import img5 from "@/components/images/ziascarousel5.png"
// import img6 from "@/components/images/ziascarousel6.png"

// const slides = [
//   {
//     image: img1,
//     alt: "Cybersecurity Protection",
//   },
//   {
//     image: img2,
//     alt: "Network Security",
//   },
//     {
//       image: img3,
//       alt: "Data Protection",
//     },
//     {
//       image: img4,
//       alt: "Data Protection",
//     },
//     {
//       image: img5,
//       alt: "Data Protection",
//     },
//     {
//       image: img6,
//       alt: "Data Protection",
//     },
// ]

// export default function HeroCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [direction, setDirection] = useState(1)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDirection(1)
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   const variants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 500 : -500,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction: number) => ({
//       x: direction < 0 ? 500 : -500,
//       opacity: 0,
//     }),
//   }

//   return (
//     <div className="relative w-full h-full overflow-hidden rounded-lg">
//       <AnimatePresence initial={false} custom={direction} mode="wait">
//         <motion.div
//           key={currentSlide}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={slides[currentSlide].image || "/placeholder.svg"}
//             alt={slides[currentSlide].alt}
//             fill
//             className=""
//             priority={currentSlide === 0}
//           />
//         </motion.div>
//       </AnimatePresence>

//       <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setDirection(index > currentSlide ? 1 : -1)
//               setCurrentSlide(index)
//             }}
//             className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-4" : "bg-white/50"}`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import img1 from "@/components/images/1.png"
import img2 from "@/components/images/two.png"
import img3 from "@/components/images/three.png"
import img4 from "@/components/images/four.png"
import img5 from "@/components/images/five.png"
import img6 from "@/components/images/six.png"
import img7 from "@/components/images/seven.png"
import img8 from "@/components/images/eight.png"
import img9 from "@/components/images/nine.png"

const img0 = "https://www.nigeriacommunicationsweek.com.ng/wp-content/uploads/2025/08/NCC.jpg"

const slides = [

  {
    image: img1,
    alt: "Cybersecurity Protection",
  },
  {
    image: img0,
    alt: "Cybersecurity Protection",
  },
  {
    image: img2,
    alt: "Network Security",
  },
  {
    image: img3,
    alt: "Data Protection",
  },
  {
    image: img4,
    alt: "Data Protection",
  },
  {
    image: img5,
    alt: "Data Protection",
  },
  {
    image: img6,
    alt: "Data Protection",
  },
  {
    image: img7,
    alt: "Data Protection",
  },
  {
    image: img8,
    alt: "Data Protection",
  },
  {
    image: img9,
    alt: "Data Protection",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setDirection(1)
        setIsAnimating(true)
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [isAnimating])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg bg-[#f5f7fa]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-0"
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={slides[currentSlide].alt}
            fill
            className=""
            priority={currentSlide === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setDirection(index > currentSlide ? 1 : -1)
                setIsAnimating(true)
                setCurrentSlide(index)
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${index === currentSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white/70"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}