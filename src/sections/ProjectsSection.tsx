import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type CSSProperties } from 'react'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'
import pranrakshakImg from '../assets/projects/pranrakshak.png'
import togetherImg from '../assets/projects/together.png'
import ragifyImg from '../assets/projects/ragify.png'
import quoraImg from '../assets/projects/quora.png'
import customerChurnImg from '../assets/projects/customer-churn.png'
import studentPerformanceImg from '../assets/projects/student-performance.png'
import farmcultureImg from '../assets/projects/farmculture.png'

interface Project {
  number: string
  category: string
  name: string
  description: string
  tech: string[]
  live?: string
  github: string
  image: string
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Healthcare AI',
    name: 'PranRakshak AI',
    description:
      'AI-powered hospital command center for early sepsis detection combining ML, explainable AI, OCR, and RAG. Predicts sepsis risk on 40K+ ICU records with SHAP explainability, an OCR-powered lab report analyzer, a RAG medical assistant, and patient priority queuing.',
    tech: ['FastAPI', 'React', 'PostgreSQL', 'LangGraph', 'LangChain', 'Groq', 'Llama 3.3 70B', 'SHAP'],
    live: 'https://pranrakshak-ai.vercel.app/',
    github: 'https://github.com/vanshbhutani1405/PranRakshak-AI-MAIN',
    image: pranrakshakImg,
  },
  {
    number: '02',
    category: 'Multi-Agent Systems',
    name: 'Together Intelligence Toolkit',
    description:
      'Multi-agent venture intelligence platform built for Together Fund to discover startups, evaluate AI companies, and recommend founder pathways -- with Corridor Atlas, AI MoatLens, and SwarmSpace Navigator modules.',
    tech: ['LangGraph', 'FastAPI', 'Groq', 'React', 'Supabase', 'PostgreSQL', 'pgvector'],
    live: 'https://together-intelligence-toolkit.vercel.app/dashboard',
    github: 'https://github.com/vanshbhutani1405/Together-Intelligence-Toolkit',
    image: togetherImg,
  },
  {
    number: '03',
    category: 'Generative AI · RAG',
    name: 'RAGify',
    description:
      'Multi-document AI assistant with isolated retrieval pipelines for accurate, document-specific question answering.',
    tech: ['LangChain', 'RAG', 'FastAPI', 'Vector Search'],
    live: 'https://ragify-vansh.vercel.app/',
    github: 'https://github.com/vanshbhutani1405/RAGify',
    image: ragifyImg,
  },
  {
    number: '04',
    category: 'NLP',
    name: 'Quora Question Pair Semantic Similarity',
    description:
      'NLP system to detect semantic similarity between Quora questions using TF-IDF and transformer embeddings, trained on 400K+ question pairs with 79% accuracy and a 0.70 F1 score.',
    tech: ['NLP', 'TF-IDF', 'Transformers', 'Scikit-learn'],
    live: 'https://quora-question-pairs-nlp.streamlit.app',
    github: 'https://github.com/vanshbhutani1405/Quora-Question-Pairs-NLP',
    image: quoraImg,
  },
  {
    number: '05',
    category: 'Deep Learning',
    name: 'Customer Churn ANN Classifier',
    description:
      'Deep learning customer churn prediction system built with an artificial neural network and deployed with Streamlit.',
    tech: ['TensorFlow', 'ANN', 'Streamlit'],
    live: 'https://customer-churn-ann-classifier-vansh.streamlit.app',
    github: 'https://github.com/vanshbhutani1405/Customer-Churn-ANN-Classifier-',
    image: customerChurnImg,
  },
  {
    number: '06',
    category: 'Machine Learning',
    name: 'Student Performance Prediction',
    description:
      'Production-ready end-to-end ML pipeline for predicting student performance, from data ingestion to deployment.',
    tech: ['Python', 'Scikit-learn', 'End-to-End ML', 'Render'],
    live: 'https://vansh-end-to-end-ml.onrender.com',
    github: 'https://github.com/vanshbhutani1405/End-to-End-ML_Project',
    image: studentPerformanceImg,
  },
  {
    number: '07',
    category: 'AgriTech · ML',
    name: 'FarmCulture',
    description:
      'AI-powered crop recommendation platform using machine learning and data analysis to help farmers choose the right crops.',
    tech: ['Machine Learning', 'Data Analysis', 'Python'],
    github: 'https://github.com/vanshbhutani1405/FarmCulture',
    image: farmcultureImg,
  },
]

function ProjectCard({
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
      <motion.div
        style={{ scale }}
        className="flex h-full flex-col rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
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
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  )
}
