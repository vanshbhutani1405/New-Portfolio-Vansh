import { motion, type MotionStyle } from 'framer-motion'
import LiveProjectButton from './LiveProjectButton'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  motionStyle?: MotionStyle
  className?: string
}

export default function ProjectCard({ project, motionStyle, className }: ProjectCardProps) {
  return (
    <motion.div
      style={motionStyle}
      className={`flex h-full flex-col rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8 ${className ?? ''}`}
    >
      <div className="mb-4 flex flex-wrap items-start justify-between gap-4 sm:mb-6">
        <div className="flex flex-wrap items-baseline gap-4 sm:gap-6">
          <span
            className="font-black text-[#D7E2EA]"
            style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
          >
            {project.number}
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA]/60 sm:text-base">
              {project.category}
            </span>
            <h3
              className="font-medium uppercase text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
            >
              {project.name}
            </h3>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {project.live && <LiveProjectButton href={project.live} />}
          <LiveProjectButton href={project.github} label="GitHub" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 md:flex-row md:gap-6">
        <div
          className="w-full shrink-0 overflow-hidden rounded-[40px] sm:rounded-[50px] md:w-[36%] md:rounded-[60px]"
          style={{ height: 'clamp(160px, 20vw, 260px)' }}
        >
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            width={1366}
            height={686}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <p
            className="max-w-2xl font-light leading-relaxed text-[#D7E2EA]/80"
            style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.15rem)' }}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#D7E2EA]/30 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#D7E2EA]/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
