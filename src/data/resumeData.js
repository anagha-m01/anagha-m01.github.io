// All content here is drawn directly from Anagha M's resume.
// No projects, technologies, metrics, or experience are invented.

export const profile = {
  name: "Anagha M",
  role: "AI/ML Engineer",
  location: "Thrissur, Kerala",
  email: "anagha2162@gmail.com",
  phone: "+91 9207302985",
  linkedin: "https://linkedin.com/in/anagha-m01",
  github: "https://github.com/anagha-m01",
  summary:
    "AI/ML Engineer experienced in agentic AI applications, multi-agent LLM workflows with LangGraph orchestration, RAG systems, and production backend services using Python, FastAPI, PostgreSQL, Redis, and Docker. Skilled in REST API design, third-party integrations (WhatsApp Business, Meta Cloud API), vector search, and workflow automation for scalable, real-world AI solutions.",
};

export const experience = [
  {
    role: "Software Engineer Intern",
    org: "QuanHack Solutions",
    location: "Kochi, Kerala",
    period: "Mar 2026 – Present",
    current: true,
    points: [
      "Built agentic AI and full-stack applications using Python, FastAPI, React, REST APIs, PostgreSQL/pgvector, and LLM orchestration frameworks, improving semantic retrieval workflows and reducing manual data retrieval by 60%.",
      "Designed LangGraph-based multi-agent workflows with human-in-the-loop guardrails, and integrated WhatsApp Business/Meta Cloud APIs with Redis-backed asynchronous tasks and Dockerized backend services.",
    ],
    tech: ["Python", "FastAPI", "React", "LangGraph", "PostgreSQL", "pgvector", "Redis", "Docker", "REST APIs"],
  },
  {
    role: "Data Science Trainee",
    org: "Luminar Technolab",
    location: "Kochi, Kerala",
    period: "Jun 2025 – Feb 2026",
    current: false,
    points: [
      "Delivered capstone projects applying classification and predictive analytics techniques in Python (Pandas, NumPy) to real-world datasets, translating raw data into actionable business insights.",
      "Applied NLP and computer vision techniques within training projects and presented findings through interactive Streamlit dashboards.",
    ],
    tech: ["Python", "Pandas", "NumPy", "NLP", "Computer Vision", "Streamlit"],
  },
  {
    role: "Application Engineer",
    org: "Centum Controls Pvt. Ltd",
    location: "Chennai, Tamil Nadu",
    period: "Sep 2024 – Apr 2025",
    current: false,
    points: [
      "Deployed PLC, DCS, and SCADA solutions, managing I/O databases, alarm configuration, testing, and commissioning to ensure reliable process automation and on-time project delivery.",
    ],
    tech: ["PLC", "DCS", "SCADA", "Industrial Automation"],
  },
];

export const projects = [
  {
    title: "Agentic Learning Coach",
    featured: true,
    description:
      "Multi-agent AI learning platform with a FastAPI backend and React frontend, orchestrating five cooperating LLM agents (skill analysis, planning, question generation, evaluation, feedback) via Groq API to generate adaptive, day-by-day study plans with Pydantic validation and deterministic code-based scoring.",
    tech: ["Python", "FastAPI", "React", "LangGraph", "Groq API", "Pydantic"],
    github: "https://github.com/anagha-m01/agentic-learning-coach",
    demo: "https://agentic-learning-coach.vercel.app",
  },
  {
    title: "DocQuery",
    featured: false,
    description:
      "LLM-powered document extraction application using FastAPI, React, PostgreSQL/pgvector, Groq LLMs, and sentence-transformers. Supports PDF, Excel, and CSV uploads with schema-based re-extraction using vector embeddings and cosine-similarity retrieval to output structured JSON.",
    tech: ["FastAPI", "React", "PostgreSQL", "pgvector", "Groq LLM", "sentence-transformers"],
    github: null,
    demo: null,
  },
  {
    title: "Customer Conversion Prediction",
    featured: false,
    description:
      "Machine learning classification models to predict customer conversion, achieving 95% campaign-targeting accuracy through end-to-end data preprocessing and exploratory analysis to uncover key conversion drivers.",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "EDA"],
    github: null,
    demo: null,
  },
];

export const flagshipProject = {
  name: "Agentic Learning Coach",
  description:
    "An AI learning platform that generates adaptive study plans using five specialized LLM components across a structured learning workflow.",
  points: [
    "Built with React and FastAPI, integrating Groq-hosted LLMs across the skill analysis, planning, question generation, evaluation, and feedback stages.",
    "Uses deterministic, code-based answer scoring and Pydantic input validation instead of relying on LLM self-grading.",
  ],
  flow: [
    { id: "skill", label: "Skill Analyzer", note: "Assesses current level" },
    { id: "planner", label: "Planner", note: "Builds the day-by-day plan" },
    { id: "question", label: "Question Generator", note: "Writes adaptive questions" },
    { id: "evaluator", label: "Evaluator", note: "Code-based, deterministic scoring" },
    { id: "feedback", label: "Feedback Agent", note: "Turns results into guidance" },
  ],
  tech: ["React", "FastAPI", "Groq API", "Pydantic", "LangGraph"],
  github: "https://github.com/anagha-m01/agentic-learning-coach",
};

export const otherProjects = [
  {
    name: "DocQuery – LLM-Powered Document Extraction",
    description:
      "Built a document extraction application using FastAPI, React, PostgreSQL/pgvector, Groq LLMs, and sentence-transformers, supporting PDF, Excel, and CSV uploads with schema-based re-extraction using vector embeddings into structured JSON format.",
    tech: ["FastAPI", "React", "PostgreSQL", "pgvector", "Groq LLM", "sentence-transformers"],
  },
  {
    name: "Customer Conversion Prediction in Digital Marketing",
    description:
      "A machine learning classification project for predicting customer conversion, covering preprocessing, exploratory analysis, model training, and evaluation.",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "EDA"],
  },
];

export const skillCategories = [
  {
    title: "AI & Generative AI",
    skills: [
      "LLMs",
      "RAG",
      "Multi-Agent Systems",
      "LangGraph",
      "Guardrails & HITL",
      "Prompt Engineering",
      "LangChain",
      "Vector Databases (Pinecone, pgvector)",
      "Semantic Search",
      "NLP",
      "Computer Vision",
    ],
  },
  {
    title: "Machine Learning & Data",
    skills: [
      "scikit-learn",
      "TensorFlow",
      "Keras",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "OpenCV",
      "MediaPipe",
      "Streamlit",
    ],
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      "Python",
      "FastAPI",
      "React",
      "REST APIs",
      "PostgreSQL (pgvector)",
      "Redis",
      "Docker",
      "Elasticsearch",
      "MySQL",
      "WhatsApp Business API",
      "Git",
    ],
  },
];

// Keep skillClusters alias for any backwards compatibility
export const skillClusters = skillCategories.map((c) => ({
  title: c.title,
  items: c.skills,
}));

export const certifications = [
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google — Coursera",
    date: "Jun 2024",
    url: "https://coursera.org/verify/VSAN97KCMWYA",
  },
  {
    title: "Ask Questions to Make Data-Driven Decisions",
    issuer: "Google — Coursera",
    date: "May 2025",
    url: "https://coursera.org/verify/CNQQK3RP0HXN",
  },
  {
    title: "Cybersecurity and Its Ten Domains",
    issuer: "University System of Georgia — Coursera",
    date: "Nov 2022",
    url: "https://coursera.org/verify/LLE6QR5898S3",
  },
];


