import { useEffect, useState } from 'react'

interface Command {
  cmd: string
  lines: string[]
}

const COMMANDS: Command[] = [
  {
    cmd: 'whois vansh',
    lines: [
      'AI Engineer',
      'Backend Engineering Intern @ Flyrank AI',
      'B.Tech CSE • Class of 2027',
      '',
      'Skills Loaded...',
      '✓ LangGraph',
      '✓ FastAPI',
      '✓ Langchain',
      '✓ PostgreSQL',
      '✓ Groq',
      '✓ Multi-Agent Systems',
    ],
  },
  {
    cmd: 'current_focus',
    lines: ['Building Production-Ready', 'Agentic AI Systems'],
  },
  {
    cmd: 'latest_projects',
    lines: [
      '✓ Together Intelligence Toolkit',
      '✓ RAGify',
      '✓ PranRakshak AI',
      '✓ AI Portfolio Assistant',
    ],
  },
  {
    cmd: 'ask_vansh',
    lines: ['Ask me anything using the AI assistant →'],
  },
]

export default function AITerminal({ className = '' }: { className?: string }) {
  const [typed, setTyped] = useState('')
  const [lines, setLines] = useState<string[]>([])
  const [clearing, setClearing] = useState(false)

  useEffect(() => {
    let cancelled = false
    const timers: ReturnType<typeof setTimeout>[] = []
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(setTimeout(resolve, ms))
      })

    async function run() {
      while (!cancelled) {
        for (const command of COMMANDS) {
          if (cancelled) return
          setClearing(false)
          setLines([])
          setTyped('')

          for (let i = 1; i <= command.cmd.length; i++) {
            if (cancelled) return
            setTyped(command.cmd.slice(0, i))
            await sleep(55)
          }

          await sleep(400)

          for (const line of command.lines) {
            if (cancelled) return
            setLines((prev) => [...prev, line])
            await sleep(110)
          }

          await sleep(3500)

          setClearing(true)
          await sleep(500)
        }
      }
    }

    run()
    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [])

  return (
    <div
      className={`relative w-full rounded-2xl border border-[#7621B0]/30 bg-[#111]/70 p-4 font-mono backdrop-blur-md motion-safe:animate-float ${className}`}
      style={{ boxShadow: '0 0 40px rgba(118, 33, 176, 0.25)' }}
    >
      <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
        <span className="h-3 w-3 rounded-full bg-[#B600A8] shadow-[0_0_8px_#B600A8]" />
        <span className="text-xs uppercase tracking-widest text-white/50">AI Terminal</span>
      </div>

      <div
        className={`min-h-[210px] text-[11px] leading-6 transition-opacity duration-500 sm:text-xs ${
          clearing ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="text-[#D7E2EA]">
          <span className="text-[#B600A8]">&gt;</span> {typed}
          <span className="ml-0.5 inline-block h-3.5 w-2 translate-y-0.5 bg-[#B600A8] motion-safe:animate-blink sm:h-4" />
        </div>
        {lines.map((line, i) => (
          <div
            key={i}
            className={line.startsWith('✓') ? 'text-[#c9a3e6]' : 'text-white/70'}
          >
            {line || ' '}
          </div>
        ))}
      </div>
    </div>
  )
}
