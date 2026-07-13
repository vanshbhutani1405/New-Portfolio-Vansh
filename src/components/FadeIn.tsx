import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type MotionTag = 'div' | 'section' | 'nav' | 'h1' | 'h2' | 'p' | 'span'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  as?: MotionTag
  className?: string
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
}: FadeInProps) {
  const Component = motion.create(as) as typeof motion.div
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Component>
  )
}
