import { useEffect, useRef, useState } from 'react'
import pranrakshakImg from '../assets/projects/pranrakshak.png'
import togetherImg from '../assets/projects/together.png'
import ragifyImg from '../assets/projects/ragify.png'
import quoraImg from '../assets/projects/quora.png'
import customerChurnImg from '../assets/projects/customer-churn.png'
import studentPerformanceImg from '../assets/projects/student-performance.png'
import farmcultureImg from '../assets/projects/farmculture.png'
import pragyaImg from '../assets/projects/pragya.png'

interface MarqueeImage {
  src: string
  alt: string
}

const MARQUEE_IMAGES: MarqueeImage[] = [
  { src: pragyaImg, alt: 'Pragya AI' },
  { src: pranrakshakImg, alt: 'PranRakshak AI' },
  { src: togetherImg, alt: 'Together Intelligence Toolkit' },
  { src: ragifyImg, alt: 'RAGify' },
  { src: quoraImg, alt: 'Quora Question Pair Semantic Similarity' },
  { src: customerChurnImg, alt: 'Customer Churn ANN Classifier' },
  { src: studentPerformanceImg, alt: 'Student Performance Prediction' },
  { src: farmcultureImg, alt: 'FarmCulture' },
]

const ROW_1 = MARQUEE_IMAGES.slice(0, 4)
const ROW_2 = MARQUEE_IMAGES.slice(4)

function MarqueeRow({
  images,
  direction,
  offset,
}: {
  images: MarqueeImage[]
  direction: 'left' | 'right'
  offset: number
}) {
  const tripled = [...images, ...images, ...images]
  const translateX =
    direction === 'right' ? offset - 200 : -(offset - 200)

  return (
    <div
      className="flex gap-3"
      style={{
        transform: `translateX(${translateX}px)`,
        willChange: 'transform',
      }}
    >
      {tripled.map((image, i) => (
        <img
          key={`${image.src}-${i}`}
          src={image.src}
          alt={image.alt}
          width={420}
          height={270}
          loading="lazy"
          decoding="async"
          className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
        />
      ))}
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY
      const scrollOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(scrollOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow images={ROW_1} direction="right" offset={offset} />
        <MarqueeRow images={ROW_2} direction="left" offset={offset} />
      </div>
    </section>
  )
}
