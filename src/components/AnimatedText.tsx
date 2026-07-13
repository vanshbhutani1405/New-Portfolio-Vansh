import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef, type CSSProperties } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

interface CharacterProps {
  char: string
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}

function Character({ char, index, total, scrollYProgress }: CharacterProps) {
  if (char === ' ') {
    return <span className="inline"> </span>
  }

  const start = index / total
  const end = Math.min((index + 1) / total, 1)
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])

  return (
    <span className="relative inline">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  )
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const shouldReduceMotion = useReducedMotion()
  const characters = text.split('')

  if (shouldReduceMotion) {
    return (
      <p className={className} style={style}>
        {text}
      </p>
    )
  }

  return (
    <p ref={ref} className={className} style={style}>
      {characters.map((char, i) => (
        <Character
          key={`${char}-${i}`}
          char={char}
          index={i}
          total={characters.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  )
}
