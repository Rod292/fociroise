'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedStatProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
  duration?: number
}

export default function AnimatedStat({
  value,
  label,
  suffix = '',
  prefix = '',
  duration = 2000
}: AnimatedStatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-primary-200 font-medium tracking-wide uppercase text-sm">
        {label}
      </div>
    </motion.div>
  )
}
