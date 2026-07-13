import { ArrowUpRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const CERTIFICATIONS = [
  {
    name: 'IBM -- Fundamentals of Artificial Intelligence',
    href: 'https://www.credly.com/badges/ea5490d0-fced-40a6-b725-e96c6915b41b',
  },
  {
    name: 'Anthropic -- AI Fluency Certification',
    href: 'http://verify.skilljar.com/c/t6e5oxtxkh67',
  },
  {
    name: 'AWS -- Prompt Engineering',
    href: 'https://drive.google.com/file/d/1I5Sfb8Rhf6ON4gbtczVaBkNXXHWbCQO3/view?usp=sharing',
  },
  {
    name: 'LangChain Academy -- LangChain',
    href: 'https://academy.langchain.com/certificates/f2c9oy3fbw',
  },
  {
    name: 'LangChain Academy -- LangGraph',
    href: 'https://academy.langchain.com/certificates/ifwscy8h2z',
  },
]

export default function CertificationsSection() {
  return (
    <section className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <h2
        className="mb-16 text-center font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Certifications
      </h2>

      <div className="mx-auto max-w-4xl">
        {CERTIFICATIONS.map((cert, i) => (
          <FadeIn key={cert.name} delay={i * 0.07}>
            <a
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-6 transition-opacity duration-200 ease-out hover:opacity-70 sm:py-7"
              style={{
                borderBottom:
                  i < CERTIFICATIONS.length - 1
                    ? '1px solid rgba(12, 12, 12, 0.15)'
                    : undefined,
              }}
            >
              <span
                className="font-medium uppercase text-[#0C0C0C]"
                style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.5rem)' }}
              >
                {cert.name}
              </span>
              <ArrowUpRight
                size={22}
                className="shrink-0 text-[#0C0C0C] transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
