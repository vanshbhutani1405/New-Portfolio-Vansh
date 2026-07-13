import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data/projects'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24">
      <FadeIn delay={0}>
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[#D7E2EA]/70 transition-colors duration-200 ease-out hover:text-[#D7E2EA] sm:mb-14"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </Link>
      </FadeIn>

      <FadeIn delay={0.05} y={40}>
        <h1
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          All Projects
        </h1>
      </FadeIn>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:gap-10 md:gap-12">
        {PROJECTS.map((project, i) => (
          <FadeIn key={project.number} delay={Math.min(i * 0.05, 0.3)} y={40}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
