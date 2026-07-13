import { useReducedMotion } from 'framer-motion'
import type { MouseEvent } from 'react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import NetworkGraph from '../components/NetworkGraph'
import { scrollToSection } from '../lib/scroll'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function HeroSection() {
  const shouldReduceMotion = !!useReducedMotion()

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToSection(href.slice(1), shouldReduceMotion)
  }

  return (
    <section className="relative flex h-screen flex-col overflow-x-clip">
      <FadeIn delay={0} y={-20}>
        <nav className="flex flex-wrap justify-between gap-x-4 gap-y-2 px-6 pt-6 md:px-10 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 ease-out hover:opacity-70"
              style={{ fontSize: 'clamp(0.75rem, 1.1vw + 0.5rem, 1.4rem)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading mt-6 w-full whitespace-nowrap font-black uppercase leading-none tracking-tight sm:mt-4 md:-mt-5"
            style={{ fontSize: 'clamp(3.5rem, 4vw + 8rem, 17.5vw)' }}
          >
            Hi, i{'’'}m vansh
          </h1>
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="pointer-events-none absolute right-[4%] top-[35%] z-10 w-[180px] sm:top-[40%] sm:right-[6%] sm:w-[240px] md:top-[42%] md:right-[8%] md:w-[300px] lg:top-[44%] lg:right-[10%] lg:w-[360px]"
      >
        <NetworkGraph />
      </FadeIn>

      <div className="mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            AI Engineer building production-ready agentic AI, LLM & RAG systems
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
