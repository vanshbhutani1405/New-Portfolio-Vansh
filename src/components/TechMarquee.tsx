const SKILLS = [
  'LangGraph',
  'FastAPI',
  'RAG',
  'Groq',
  'React',
  'LangChain',
  'PostgreSQL',
  'Multi-Agent Systems',
]

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 items-center">
      {SKILLS.map((skill, i) => (
        <span key={i} className="flex items-center">
          <span className="cursor-default px-3 text-xs font-medium uppercase tracking-[0.2em] text-white/30 transition-colors duration-200 ease-out hover:text-[#B600A8] sm:px-4 sm:text-sm">
            {skill}
          </span>
          <span className="text-white/15">·</span>
        </span>
      ))}
    </div>
  )
}

export default function TechMarquee() {
  return (
    <div className="group w-full overflow-hidden py-4">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </div>
  )
}
