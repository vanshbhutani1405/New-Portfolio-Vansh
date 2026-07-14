import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Send } from 'lucide-react'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatPanelProps {
  open: boolean
  onClose: () => void
}

const GREETING: ChatMessage = {
  role: 'assistant',
  content:
    "Hey, I'm Vansh's assistant. Ask me about my projects, experience, or skills in AI engineering.",
}

export default function ChatPanel({ open, onClose }: ChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || loading) return

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: trimmed }]
    setMessages(nextMessages)
    setInput('')
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })

      if (!res.ok) throw new Error('Request failed')

      const data = await res.json()
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])
    } catch {
      setError("Couldn't reach the assistant right now — try again in a moment.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-x-4 bottom-4 z-[60] flex h-[min(520px,70vh)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141118] shadow-2xl sm:inset-x-auto sm:bottom-24 sm:right-6 sm:w-[360px]"
        >
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-white">Ask about Vansh</p>
            <button
              onClick={onClose}
              aria-label="Close chat"
              className="rounded-full p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'rounded-br-sm text-white'
                      : 'rounded-bl-sm bg-white/5 text-[#D7E2EA]'
                  }`}
                  style={
                    m.role === 'user'
                      ? { background: 'linear-gradient(123deg, #B600A8 0%, #7621B0 100%)' }
                      : undefined
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white/5 px-3.5 py-3">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-white/50"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              </div>
            )}

            {error && <p className="text-xs text-red-400">{error}</p>}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-white/10 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 rounded-full bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:ring-1 focus:ring-[#B600A8]"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-200 ease-out hover:scale-[1.05] disabled:cursor-not-allowed disabled:opacity-40"
              style={{ background: 'linear-gradient(123deg, #B600A8 0%, #7621B0 100%)' }}
            >
              <Send size={15} />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
