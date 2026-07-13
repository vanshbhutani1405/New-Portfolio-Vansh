import FadeIn from '../components/FadeIn'

const LEADERSHIP = [
  'Founder -- Upstarts (Technology & Startup Club, IKGPTU)',
  'Class Representative -- Computer Science Department, IKGPTU',
]

const ACHIEVEMENTS = [
  'Finalist -- Hack On Hills (NIT Hamirpur)',
  'Top 10 Finalist -- NIT Jalandhar Hackathon',
  'Top 5 Finalist -- LPU Hackathon',
  '3rd Prize -- University Startup Competition',
]

export default function LeadershipSection() {
  return (
    <section className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Leadership
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-5xl gap-12 sm:gap-16 md:grid-cols-2 md:gap-10">
        <FadeIn delay={0.1} x={-40} y={0}>
          <div className="flex flex-col gap-5">
            <h3
              className="font-medium uppercase tracking-wider text-[#D7E2EA]"
              style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.4rem)' }}
            >
              Leadership
            </h3>
            <ul className="flex flex-col gap-4">
              {LEADERSHIP.map((item) => (
                <li
                  key={item}
                  className="font-light leading-relaxed text-[#D7E2EA]/80"
                  style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)' }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} x={40} y={0}>
          <div className="flex flex-col gap-5">
            <h3
              className="font-medium uppercase tracking-wider text-[#D7E2EA]"
              style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.4rem)' }}
            >
              Achievements
            </h3>
            <ul className="flex flex-col gap-4">
              {ACHIEVEMENTS.map((item) => (
                <li
                  key={item}
                  className="font-light leading-relaxed text-[#D7E2EA]/80"
                  style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)' }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
