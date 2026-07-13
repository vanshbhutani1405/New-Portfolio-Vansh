import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import AnimatedText from '../components/AnimatedText'

const DECORATIONS = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  object3d:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
}

const ABOUT_PARAGRAPHS = [
  'Building intelligent systems at the intersection of AI, software engineering, and automation. I specialize in LLM-powered applications, multi-agent architectures, Retrieval-Augmented Generation (RAG), and scalable backend systems that transform ambitious ideas into production-ready products.',
  'B.Tech in Computer Science & Engineering • I.K. Gujral Punjab Technical University • Class of 2027',
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 pt-20 pb-36 sm:px-8 sm:pt-24 sm:pb-44 md:px-10 md:pt-28 md:pb-52"
    >
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="hidden lg:block absolute top-[4%] left-[2%] xl:left-[4%]">
        <img
          src={DECORATIONS.moon}
          alt=""
          width={210}
          height={210}
          loading="lazy"
          decoding="async"
          className="w-[150px] xl:w-[210px]"
        />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="hidden lg:block absolute bottom-[10%] left-[3%] xl:left-[8%]">
        <img
          src={DECORATIONS.object3d}
          alt=""
          width={180}
          height={180}
          loading="lazy"
          decoding="async"
          className="w-[130px] xl:w-[180px]"
        />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="hidden lg:block absolute top-[4%] right-[2%] xl:right-[4%]">
        <img
          src={DECORATIONS.lego}
          alt=""
          width={210}
          height={210}
          loading="lazy"
          decoding="async"
          className="w-[150px] xl:w-[210px]"
        />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="hidden lg:block absolute bottom-[10%] right-[3%] xl:right-[8%]">
        <img
          src={DECORATIONS.group}
          alt=""
          width={220}
          height={220}
          loading="lazy"
          decoding="async"
          className="w-[160px] xl:w-[220px]"
        />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20">
          <div className="flex flex-col gap-6 max-w-[620px] w-full text-center px-4">
            {ABOUT_PARAGRAPHS.map((text, idx) => (
              <AnimatedText
                key={idx}
                text={text}
                className="font-medium leading-relaxed text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
              />
            ))}
          </div>

          <ContactButton />
        </div>
      </div>
    </section>
  )
}
