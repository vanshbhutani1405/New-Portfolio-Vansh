import FadeIn from '../components/FadeIn'

const EXPERIENCE = [
  {
    number: '01',
    name: 'Resolute AI Software',
    role: 'Gen AI Intern',
    dates: 'June 2026 -- Present',
    description:
      'AI browser automation building autonomous web agents with Playwright, agentic AI systems, and LLM integration.',
  },
  {
    number: '02',
    name: 'Flyrank AI',
    role: 'Backend Engineering Intern',
    dates: 'July 2026 -- Present',
    description:
      'Backend engineering for AI-powered products -- scalable backend services, FastAPI REST API development, database integration, and production-ready software systems.',
  },
  {
    number: '03',
    name: 'EduNet Foundation (AICTE + IBM)',
    role: 'AI & Machine Learning Intern',
    dates: 'June 2025 -- August 2025',
    description:
      'Machine learning, classification, feature engineering, model evaluation, and cross validation.',
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <h2
        className="mb-16 text-center font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Experience
      </h2>

      <div className="mx-auto max-w-5xl">
        {EXPERIENCE.map((job, i) => (
          <FadeIn key={job.number} delay={i * 0.1}>
            <div
              className="flex gap-6 py-8 sm:gap-8 sm:py-10 md:gap-10 md:py-12"
              style={{
                borderBottom:
                  i < EXPERIENCE.length - 1
                    ? '1px solid rgba(12, 12, 12, 0.15)'
                    : undefined,
              }}
            >
              <span
                className="shrink-0 font-black text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {job.number}
              </span>

              <div className="flex flex-col gap-2 pt-2 sm:pt-4">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {job.name}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-wider text-[#0C0C0C]/50 sm:text-sm">
                    {job.dates}
                  </span>
                </div>
                <span className="text-sm font-medium uppercase tracking-wider text-[#0C0C0C]/70 sm:text-base">
                  {job.role}
                </span>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {job.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
