
'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
  delay?: number
}

export function AnimatedCounter({ value, suffix = '', duration = 2000, delay = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true)
        const startTime = Date.now()
        const endTime = startTime + duration

        const updateCount = () => {
          const now = Date.now()
          const progress = Math.min((now - startTime) / duration, 1)
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4)
          const currentValue = Math.floor(easeOutQuart * value)
          
          setCount(currentValue)

          if (now < endTime) {
            requestAnimationFrame(updateCount)
          } else {
            setCount(value) // Ensure final value is exact
          }
        }

        requestAnimationFrame(updateCount)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [inView, hasAnimated, value, duration, delay])

  return (
    <span ref={ref} className="inline-block">
      {count}{suffix}
    </span>
  )
}
