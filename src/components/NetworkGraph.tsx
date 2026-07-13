import { useEffect, useMemo, useRef, useState } from 'react'
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'

interface NodeDef {
  id: number
  x: number
  y: number
  r: number
  opacity: number
}

const VIEW_W = 100
const VIEW_H = 125

const ALL_NODES: NodeDef[] = [
  { id: 0, x: 50, y: 14, r: 4.4, opacity: 0.85 },
  { id: 1, x: 28, y: 24, r: 2.8, opacity: 0.55 },
  { id: 2, x: 71, y: 22, r: 3.4, opacity: 0.7 },
  { id: 3, x: 18, y: 46, r: 2.4, opacity: 0.5 },
  { id: 4, x: 46, y: 40, r: 5, opacity: 0.9 },
  { id: 5, x: 69, y: 46, r: 3, opacity: 0.6 },
  { id: 6, x: 87, y: 38, r: 2.6, opacity: 0.5 },
  { id: 7, x: 12, y: 66, r: 3, opacity: 0.6 },
  { id: 8, x: 39, y: 69, r: 3.8, opacity: 0.8 },
  { id: 9, x: 61, y: 71, r: 3.2, opacity: 0.65 },
  { id: 10, x: 83, y: 63, r: 2.4, opacity: 0.45 },
  { id: 11, x: 27, y: 91, r: 2.8, opacity: 0.55 },
  { id: 12, x: 53, y: 96, r: 4, opacity: 0.85 },
  { id: 13, x: 76, y: 89, r: 2.6, opacity: 0.5 },
]

const ALL_EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 4],
  [1, 3],
  [1, 4],
  [2, 4],
  [2, 5],
  [4, 3],
  [4, 5],
  [4, 7],
  [4, 8],
  [5, 6],
  [5, 9],
  [3, 7],
  [7, 8],
  [7, 11],
  [8, 9],
  [8, 12],
  [9, 10],
  [9, 13],
  [11, 12],
  [12, 13],
]

const MOBILE_NODE_IDS = new Set([0, 1, 2, 4, 5, 7, 8, 9])

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 640,
  )

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)')
    const handler = () => setIsMobile(mq.matches)
    handler()
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return isMobile
}

function seededRange(seed: number, min: number, max: number) {
  const t = (Math.sin(seed * 12.9898) * 43758.5453) % 1
  const normalized = t < 0 ? t + 1 : t
  return min + normalized * (max - min)
}

function GraphNode({
  node,
  mouseX,
  mouseY,
  reduced,
}: {
  node: NodeDef
  mouseX: ReturnType<typeof useMotionValue<number>>
  mouseY: ReturnType<typeof useMotionValue<number>>
  reduced: boolean
}) {
  const driftX = useMotionValue(0)
  const driftY = useMotionValue(0)

  useEffect(() => {
    if (reduced) return

    const duration = seededRange(node.id + 1, 4, 8)
    const delay = seededRange(node.id + 11, 0, 2)
    const ampX = seededRange(node.id + 21, 1, 2.6)
    const ampY = seededRange(node.id + 31, 1, 2.6)

    const controlsX = animate(driftX, [0, ampX, 0, -ampX, 0], {
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    })
    const controlsY = animate(driftY, [0, -ampY, 0, ampY, 0], {
      duration: duration * 1.2,
      delay: delay + 0.5,
      repeat: Infinity,
      ease: 'easeInOut',
    })

    return () => {
      controlsX.stop()
      controlsY.stop()
    }
  }, [reduced, node.id, driftX, driftY])

  const cursorRadius = 20
  const cursorStrength = 2.5

  const cursorOffsetX = useTransform(() => {
    if (reduced) return 0
    const dx = mouseX.get() - node.x
    const dy = mouseY.get() - node.y
    const dist = Math.hypot(dx, dy)
    if (dist > cursorRadius || dist < 0.01) return 0
    return (dx / dist) * (1 - dist / cursorRadius) * cursorStrength
  })
  const cursorOffsetY = useTransform(() => {
    if (reduced) return 0
    const dx = mouseX.get() - node.x
    const dy = mouseY.get() - node.y
    const dist = Math.hypot(dx, dy)
    if (dist > cursorRadius || dist < 0.01) return 0
    return (dy / dist) * (1 - dist / cursorRadius) * cursorStrength
  })

  const springX = useSpring(cursorOffsetX, { stiffness: 120, damping: 16, mass: 0.6 })
  const springY = useSpring(cursorOffsetY, { stiffness: 120, damping: 16, mass: 0.6 })

  const x = useTransform(() => driftX.get() + springX.get())
  const y = useTransform(() => driftY.get() + springY.get())

  return (
    <motion.circle
      cx={node.x}
      cy={node.y}
      r={node.r}
      style={{ x, y, opacity: node.opacity }}
      fill="#b478ff"
      filter="url(#network-node-glow)"
    />
  )
}

export default function NetworkGraph() {
  const svgRef = useRef<SVGSVGElement>(null)
  const shouldReduceMotion = !!useReducedMotion()
  const isMobile = useIsMobile()
  const mouseX = useMotionValue(-999)
  const mouseY = useMotionValue(-999)

  const nodes = useMemo(
    () => (isMobile ? ALL_NODES.filter((n) => MOBILE_NODE_IDS.has(n.id)) : ALL_NODES),
    [isMobile],
  )
  const nodeMap = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes])
  const edges = useMemo(
    () => ALL_EDGES.filter(([a, b]) => nodeMap.has(a) && nodeMap.has(b)),
    [nodeMap],
  )

  useEffect(() => {
    if (shouldReduceMotion) return
    const svg = svgRef.current
    if (!svg) return

    const handlePointerMove = (e: PointerEvent) => {
      const rect = svg.getBoundingClientRect()
      mouseX.set(((e.clientX - rect.left) / rect.width) * VIEW_W)
      mouseY.set(((e.clientY - rect.top) / rect.height) * VIEW_H)
    }
    const handlePointerOut = (e: PointerEvent) => {
      if (e.relatedTarget) return
      mouseX.set(-999)
      mouseY.set(-999)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerout', handlePointerOut)
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerout', handlePointerOut)
    }
  }, [shouldReduceMotion, mouseX, mouseY])

  const [pulse, setPulse] = useState<{ key: number; from: NodeDef; to: NodeDef } | null>(null)

  useEffect(() => {
    if (shouldReduceMotion || edges.length === 0) return
    let key = 0

    const trigger = () => {
      const [a, b] = edges[Math.floor(Math.random() * edges.length)]
      const from = nodeMap.get(a)
      const to = nodeMap.get(b)
      if (from && to) {
        key += 1
        setPulse({ key, from, to })
      }
    }

    const interval = setInterval(trigger, 2800 + Math.random() * 1800)
    return () => clearInterval(interval)
  }, [shouldReduceMotion, edges, nodeMap])

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className="pointer-events-none h-auto w-full overflow-visible"
      role="img"
      aria-label="Animated network graph representing agentic multi-agent AI systems"
    >
      <defs>
        <filter id="network-node-glow" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g stroke="#b478ff" strokeOpacity={0.2} strokeWidth={0.3}>
        {edges.map(([a, b]) => {
          const from = nodeMap.get(a)
          const to = nodeMap.get(b)
          if (!from || !to) return null
          return <line key={`${a}-${b}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} />
        })}
      </g>

      {nodes.map((node) => (
        <GraphNode key={node.id} node={node} mouseX={mouseX} mouseY={mouseY} reduced={shouldReduceMotion} />
      ))}

      <AnimatePresence>
        {pulse && !shouldReduceMotion && (
          <motion.circle
            key={pulse.key}
            r={1.3}
            fill="#eeddff"
            filter="url(#network-node-glow)"
            initial={{ cx: pulse.from.x, cy: pulse.from.y, opacity: 0 }}
            animate={{
              cx: [pulse.from.x, pulse.to.x],
              cy: [pulse.from.y, pulse.to.y],
              opacity: [0, 1, 1, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3, times: [0, 0.15, 0.85, 1], ease: 'easeInOut' }}
            onAnimationComplete={() => setPulse(null)}
          />
        )}
      </AnimatePresence>
    </svg>
  )
}
