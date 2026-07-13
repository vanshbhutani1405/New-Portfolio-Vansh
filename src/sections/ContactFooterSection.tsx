import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'

const CONTACT_LINKS = [
  { label: 'Email', value: 'vanshbhutani2005@gmail.com', href: 'mailto:vanshbhutani2005@gmail.com' },
  { label: 'Phone', value: '+91-7888845986', href: 'tel:+917888845986' },
  { label: 'Location', value: 'Kapurthala, Punjab, India', href: undefined },
]

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/vanshbhutani1405' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/vansh-62b84a184' },
  { label: 'Kaggle', href: 'https://kaggle.com/vanshbhutani' },
]

export default function ContactFooterSection() {
  return (
    <section
      id="contact"
      className="relative bg-[#0C0C0C] px-5 pb-10 pt-20 sm:px-8 sm:pt-24 md:px-10 md:pt-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Let{'’'}s Talk
        </h2>
      </FadeIn>

      <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-10 sm:mt-16 sm:gap-12 md:mt-20">
        <FadeIn delay={0.15} y={20}>
          <ContactButton />
        </FadeIn>

        <FadeIn delay={0.25} y={20}>
          <div className="flex flex-col flex-wrap items-center justify-center gap-4 text-center sm:flex-row sm:gap-8">
            {CONTACT_LINKS.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-light tracking-wide text-[#D7E2EA]/80 transition-opacity duration-200 ease-out hover:opacity-70 sm:text-base"
                >
                  {item.value}
                </a>
              ) : (
                <span
                  key={item.label}
                  className="text-sm font-light tracking-wide text-[#D7E2EA]/80 sm:text-base"
                >
                  {item.value}
                </span>
              ),
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.35} y={20}>
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-opacity duration-200 ease-out hover:opacity-70 sm:text-base"
              >
                {item.label}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>

      <p className="mt-16 text-center text-xs font-light tracking-wide text-[#D7E2EA]/40 sm:mt-20">
        © {new Date().getFullYear()} Vansh. All rights reserved.
      </p>
    </section>
  )
}
