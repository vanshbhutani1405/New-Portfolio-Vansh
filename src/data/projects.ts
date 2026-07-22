import pranrakshakImg from '../assets/projects/pranrakshak.png'
import togetherImg from '../assets/projects/together.png'
import ragifyImg from '../assets/projects/ragify.png'
import quoraImg from '../assets/projects/quora.png'
import customerChurnImg from '../assets/projects/customer-churn.png'
import studentPerformanceImg from '../assets/projects/student-performance.png'
import farmcultureImg from '../assets/projects/farmculture.png'
import pragyaImg from '../assets/projects/pragya.png'


export interface Project {
  number: string
  category: string
  name: string
  description: string
  tech: string[]
  live?: string
  github: string
  image: string
}

export const PROJECTS: Project[] = [
  {
  number: '01',
  category: 'Enterprise AI',
  name: 'Pragya AI',
  description:
    'Enterprise AI platform for industrial knowledge intelligence powered by a hybrid GraphRAG architecture. Combines Neo4j knowledge graphs, vector search, OCR, and LangGraph-based agentic workflows to deliver grounded, citation-backed reasoning across SOPs, safety manuals, regulations, maintenance manuals, and compliance documents.',
  tech: [
    'FastAPI',
    'React',
    'TypeScript',
    'Neo4j',
    'Supabase pgvector',
    'LangGraph',
    'Groq',
    'Llama 3.3 70B'
  ],
  live: 'https://youtu.be/-P0H1Lew7Vg',
  github: 'https://github.com/vanshbhutani1405/PRAGYA-AI',
  image: pragyaImg,
},
  {
    number: '02',
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
    number: '03',
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
    number: '04',
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
    number: '07',
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
    number: '08',
    category: 'AgriTech · ML',
    name: 'FarmCulture',
    description:
      'AI-powered crop recommendation platform using machine learning and data analysis to help farmers choose the right crops.',
    tech: ['Machine Learning', 'Data Analysis', 'Python'],
    github: 'https://github.com/vanshbhutani1405/FarmCulture',
    image: farmcultureImg,
  },
]

export const FEATURED_PROJECTS = PROJECTS.slice(0, 4)
