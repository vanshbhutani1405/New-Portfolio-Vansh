import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import ChatPanel from './chatbot/ChatPanel'

const DRAG_THRESHOLD = 5

export default function FloatingDock() {
  const [chatOpen, setChatOpen] = useState(false)
  const constraintsRef = useRef<HTMLDivElement>(null)
  const draggedRef = useRef(false)

  return (
    <>
      <div ref={constraintsRef} className="pointer-events-none fixed inset-0 z-50" />

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-24 z-50 inline-block rounded-full border border-white/25 bg-black/20 px-5 py-3 text-center text-xs font-medium uppercase tracking-widest text-white backdrop-blur-sm transition-colors duration-200 ease-out hover:border-[#B600A8] hover:text-[#B600A8]"
      >
        Resume
      </a>

      <motion.button
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
        dragElastic={0}
        onDragStart={() => {
          draggedRef.current = false
        }}
        onDrag={(_, info) => {
          if (Math.abs(info.offset.x) > DRAG_THRESHOLD || Math.abs(info.offset.y) > DRAG_THRESHOLD) {
            draggedRef.current = true
          }
        }}
        onClick={() => {
          if (draggedRef.current) {
            draggedRef.current = false
            return
          }
          setChatOpen((v) => !v)
        }}
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-grab items-center justify-center rounded-full text-white transition-transform duration-200 ease-out hover:scale-[1.05] active:cursor-grabbing active:scale-[0.98]"
        style={{
          background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
          boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
          outline: '2px solid white',
          outlineOffset: '-3px',
        }}
      >
        <MessageCircle size={22} />
      </motion.button>

      <ChatPanel open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  )
}
