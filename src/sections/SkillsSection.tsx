import type { IconType } from 'react-icons'
import {
  SiLangchain,
  SiLanggraph,
  SiHuggingface,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiGit,
  SiGithub,
  SiRender,
  SiVercel,
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiCursor,
  SiClaude,
} from 'react-icons/si'
import {
  TbBrain,
  TbNetwork,
  TbTopologyStar3,
  TbMessageChatbot,
  TbRobot,
  TbSparkles,
  TbAffiliate,
  TbUsersGroup,
  TbDatabaseSearch,
  TbListSearch,
  TbChartDots3,
  TbMessage2Code,
  TbSitemap,
  TbAdjustmentsHorizontal,
  TbAdjustmentsAlt,
  TbEye,
  TbCategory,
  TbTrendingUp,
  TbChartLine,
  TbFileText,
  TbTool,
  TbCpu2,
  TbBrandOpenai,
  TbChartHistogram,
  TbStack2,
  TbChartBar,
  TbApi,
  TbLock,
  TbFileUpload,
  TbClockHour4,
  TbVectorTriangle,
  TbDatabase,
  TbBrandAzure,
  TbTimeline,
  TbCloudUpload,
  TbGitBranch,
  TbTestPipe,
  TbBrowserCheck,
  TbSpider,
  TbArrowsShuffle,
  TbServer,
  TbBrandVscode,
  TbBulb,
  TbLayoutGrid,
  TbTargetArrow,
  TbCode,
  TbCircleDot,
} from 'react-icons/tb'
import FadeIn from '../components/FadeIn'

const SKILL_ICONS: Record<string, IconType> = {
  // AI / Machine Learning
  'Machine Learning': TbBrain,
  'Deep Learning': TbNetwork,
  'Artificial Neural Networks (ANN)': TbTopologyStar3,
  'Natural Language Processing (NLP)': TbMessageChatbot,
  'Large Language Models (LLMs)': TbRobot,
  'Generative AI': TbSparkles,
  'Agentic AI': TbAffiliate,
  'Multi-Agent Systems': TbUsersGroup,
  'Retrieval-Augmented Generation (RAG)': TbDatabaseSearch,
  'Hybrid RAG': TbListSearch,
  GraphRAG: TbChartDots3,
  'Prompt Engineering': TbMessage2Code,
  'AI Workflow Orchestration': TbSitemap,
  'Model Fine-tuning': TbAdjustmentsHorizontal,
  'Feature Engineering': TbAdjustmentsAlt,
  'Explainable AI (SHAP)': TbEye,
  Classification: TbCategory,
  Regression: TbTrendingUp,
  'Time Series Analysis': TbChartLine,
  'Context Engineering': TbFileText,
  'Harness Engineering': TbTool,

  // Frameworks & Libraries
  LangChain: SiLangchain,
  LangGraph: SiLanggraph,
  'Hugging Face Transformers': SiHuggingface,
  'Hugging Face Embeddings': SiHuggingface,
  'Groq SDK': TbCpu2,
  'OpenAI API': TbBrandOpenai,
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  'Scikit-learn': SiScikitlearn,
  XGBoost: TbChartHistogram,
  CatBoost: TbStack2,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  Matplotlib: TbChartBar,

  // Backend Development
  FastAPI: SiFastapi,
  Flask: SiFlask,
  'REST APIs': TbApi,
  'API Development': TbApi,
  'Python Backend Development': SiPython,
  Authentication: TbLock,
  'File Upload Pipelines': TbFileUpload,
  'Async Programming': TbClockHour4,

  // Databases & Vector Stores
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  pgvector: TbVectorTriangle,
  ChromaDB: TbDatabase,
  SQL: TbDatabase,
  Pinecone: TbVectorTriangle,

  // Cloud, DevOps & Deployment
  Docker: SiDocker,
  Git: SiGit,
  GitHub: SiGithub,
  Render: SiRender,
  Vercel: SiVercel,
  Azure: TbBrandAzure,
  LangSmith: TbTimeline,
  'Model Deployment': TbCloudUpload,
  'CI/CD Fundamentals': TbGitBranch,

  // Automation & Developer Tools
  Playwright: TbTestPipe,
  'Browser Automation': TbBrowserCheck,
  'Web Scraping': TbSpider,
  'Data Pipelines': TbArrowsShuffle,
  'MCP Servers': TbServer,
  'VS Code': TbBrandVscode,
  Cursor: SiCursor,
  'Claude Code': SiClaude,

  // Programming Languages
  Python: SiPython,
  JavaScript: SiJavascript,
  'C++': SiCplusplus,

  // Core Engineering Strengths
  'Agentic AI Architecture': TbAffiliate,
  'Multi-Agent Workflow Design': TbUsersGroup,
  'LLM Application Development': TbRobot,
  'Production AI Systems': TbServer,
  'End-to-End Machine Learning': TbArrowsShuffle,
  'Retrieval System Design': TbDatabaseSearch,
  'AI Product Development': TbBulb,
  'Full Stack AI Engineering': TbLayoutGrid,
  'Scalable Backend Development': TbServer,
  'Problem Solving': TbTargetArrow,
  'Software Engineering': TbCode,
}

const DEFAULT_ICON = TbCircleDot

const SKILL_GROUPS = [
  {
    title: 'AI / Machine Learning',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Artificial Neural Networks (ANN)',
      'Natural Language Processing (NLP)',
      'Large Language Models (LLMs)',
      'Generative AI',
      'Agentic AI',
      'Multi-Agent Systems',
      'Retrieval-Augmented Generation (RAG)',
      'Hybrid RAG',
      'GraphRAG',
      'Prompt Engineering',
      'AI Workflow Orchestration',
      'Model Fine-tuning',
      'Feature Engineering',
      'Explainable AI (SHAP)',
      'Classification',
      'Regression',
      'Time Series Analysis',
      'Context Engineering',
      'Harness Engineering',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      'LangChain',
      'LangGraph',
      'Hugging Face Transformers',
      'Hugging Face Embeddings',
      'Groq SDK',
      'OpenAI API',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'XGBoost',
      'CatBoost',
      'NumPy',
      'Pandas',
      'Matplotlib',
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      'FastAPI',
      'Flask',
      'REST APIs',
      'API Development',
      'Python Backend Development',
      'Authentication',
      'File Upload Pipelines',
      'Async Programming',
    ],
  },
  {
    title: 'Databases & Vector Stores',
    skills: ['PostgreSQL', 'Supabase', 'pgvector', 'ChromaDB', 'SQL', 'Pinecone'],
  },
  {
    title: 'Cloud, DevOps & Deployment',
    skills: [
      'Docker',
      'Git',
      'GitHub',
      'Render',
      'Vercel',
      'Azure',
      'LangSmith',
      'Model Deployment',
      'CI/CD Fundamentals',
    ],
  },
  {
    title: 'Automation & Developer Tools',
    skills: [
      'Playwright',
      'Browser Automation',
      'Web Scraping',
      'Data Pipelines',
      'MCP Servers',
      'VS Code',
      'Cursor',
      'Claude Code',
    ],
  },
  {
    title: 'Programming Languages',
    skills: ['Python', 'SQL', 'JavaScript', 'C++'],
  },
  {
    title: 'Core Engineering Strengths',
    skills: [
      'Agentic AI Architecture',
      'Multi-Agent Workflow Design',
      'LLM Application Development',
      'Production AI Systems',
      'End-to-End Machine Learning',
      'Retrieval System Design',
      'AI Product Development',
      'Full Stack AI Engineering',
      'Scalable Backend Development',
      'Problem Solving',
      'Software Engineering',
    ],
  },
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-10 bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="mx-auto flex max-w-5xl flex-col gap-10 sm:gap-12 md:gap-14">
        {SKILL_GROUPS.map((group, i) => (
          <FadeIn key={group.title} delay={i * 0.05}>
            <div className="flex flex-col gap-4">
              <h3
                className="font-medium uppercase tracking-wider text-[#D7E2EA]"
                style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.4rem)' }}
              >
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {group.skills.map((skill) => {
                  const Icon = SKILL_ICONS[skill] ?? DEFAULT_ICON
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/25 px-3 py-1.5 text-xs font-medium text-[#D7E2EA]/80 transition-colors duration-200 ease-out hover:border-[#D7E2EA]/60 hover:text-[#D7E2EA] sm:px-4 sm:py-2 sm:text-sm"
                    >
                      <Icon size={14} className="shrink-0 sm:size-4" aria-hidden="true" />
                      {skill}
                    </span>
                  )
                })}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
