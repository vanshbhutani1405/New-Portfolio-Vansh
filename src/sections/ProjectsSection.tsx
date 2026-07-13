import { useScroll, useTransform } from 'framer-motion'
import { useRef, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import ProjectCard from '../components/ProjectCard'
import { FEATURED_PROJECTS, type Project } from '../data/projects'

function StackingProjectCard({
  project,
  index,
  totalCards,
}: {
  project: Project
  index: number
  totalCards: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={containerRef}
      className="sticky top-[calc(6rem+var(--card-offset))] h-[85vh] md:top-[calc(8rem+var(--card-offset))]"
      style={
        {
          '--card-offset': `${index * 28}px`,
        } as CSSProperties
      }
    >
      <ProjectCard project={project} motionStyle={{ scale }} />
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-6xl">
        {FEATURED_PROJECTS.map((project, index) => (
          <StackingProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={FEATURED_PROJECTS.length}
          />
        ))}
      </div>

      <FadeIn delay={0.1}>
        <div className="mt-12 flex justify-center sm:mt-16">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-3 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-colors duration-200 ease-out hover:bg-[#D7E2EA] hover:text-[#0C0C0C] sm:px-8 sm:py-4 sm:text-base"
          >
            View All Projects
          </Link>
        </div>
      </FadeIn>
    </section>
  )
}
