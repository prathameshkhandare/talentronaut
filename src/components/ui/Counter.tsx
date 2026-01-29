"use client"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface CounterProps {
  from: number
  to: number
  duration?: number
  className?: string
  suffix?: string
}

export function Counter({ from, to, duration = 2, className, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = (timestamp - startTime) / (duration * 1000)

        if (progress < 1) {
          const nextCount = Math.floor(from + (to - from) * progress)
          setCount(nextCount)
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(to)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, from, to, duration])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}
