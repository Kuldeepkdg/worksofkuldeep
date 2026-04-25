export interface Metric {
  value: string
  label: string
}

export interface CaseStudy {
  problem: string
  approach: string
  built: string
  results: string
  retrospective: string
  sidenotes?: {
    afterText: string   // a short unique substring of the paragraph after which the note appears
    text: string
  }[]
}

export interface Project {
  slug: string
  title: string
  subtitle?: string
  year: number
  description: string
  tech: string[]
  metrics?: Metric[]
  featured: boolean
  category: 'ai' | 'data' | 'learning'
  employer?: string
  status?: 'active' | 'completed' | 'deployed'
  caseStudy?: CaseStudy
}

export const projects: Project[] = [
  {
    slug: 'askniki',
    title: 'AskNIKI',
    subtitle: 'Contract intelligence at scale',
    year: 2025,
    description:
      'A contract intelligence tool that turns unstructured procurement documents into queryable, actionable data. Built on a three-stage semantic pipeline — vector retrieval, neural reranking, SLM fact extraction — with a natural-language-to-SQL agent for ad-hoc querying.',
    tech: ['FastAPI', 'LangGraph', 'PostgreSQL', 'pgvector', 'Azure OpenAI', 'Cohere Rerank', 'MCP', 'A2A'],
    metrics: [
      { value: '~90%', label: 'token reduction via structured facts' },
      { value: '80%', label: 'reduction in manual prep effort' },
      { value: '98%', label: 'document categorization accuracy' },
    ],
    featured: true,
    category: 'ai',
    status: 'active',
    caseStudy: {
      problem:
        'Enterprise procurement teams spend hours manually extracting clauses, pricing, and obligations from contracts. Most tools do OCR and keyword search — they retrieve text but don\'t understand it. The result: analysts copy-pasting across documents to answer questions that should take seconds.',
      approach:
        'Three-stage semantic pipeline. Stage one: pgvector retrieval using a schema registry to give the retriever contextual grounding about what it\'s searching for. Stage two: Cohere Rerank to filter signal from noise — a step we almost skipped and shouldn\'t have. Stage three: a small language model extracts structured facts from the top-k chunks, turning prose into typed data. A2A and MCP architecture means each stage is a composable agent that can be swapped or upgraded independently.',
      built:
        'FastAPI backend with LangGraph orchestration. The NL-to-SQL agent sits on top of the pipeline: natural language questions are routed through the schema registry (itself a RAG system over the database schema), translated to SQL, and executed against a PostgreSQL store populated by the extraction pipeline. Session management handles multi-turn conversations with full context awareness.',
      results:
        'Roughly 90% reduction in tokens sent to the primary LLM — the fact extraction step means we\'re passing structured data to GPT-4o instead of raw document chunks. Categorization accuracy hit 98% after tuning the reranker threshold. Manual prep time for contract review fell by 80%.',
      retrospective:
        'I underestimated the reranker. The initial prototype used vector search alone and precision was acceptable — but adding Cohere Rerank as a second stage was the highest-ROI single change we made. I\'d add it on day one in the next project. The other thing: schema registry design is load-bearing. The quality of the NL-to-SQL translation is almost entirely determined by how well the registry describes column semantics, not by the LLM itself.',
      sidenotes: [
        {
          afterText: 'Stage two: Cohere Rerank to filter signal from noise',
          text: 'Precision improved from ~71% to ~91% after adding this stage. The cost increase was negligible.',
        },
        {
          afterText: '90% reduction in tokens sent to the primary LLM',
          text: 'At scale this matters: fewer tokens = lower latency + cost, and structured inputs produce more reliable outputs.',
        },
      ],
    },
  },
  {
    slug: 'contract-intelligence-platform',
    title: 'Contract Intelligence Platform',
    subtitle: 'Five microservices, one coherent system',
    year: 2024,
    description:
      'A document intelligence platform built as five independently deployable microservices: TemplateLearning, ChunkProcessor, DocumentGenerator, SessionManager, and a Gateway. Deployed on Azure Container Apps with Azure Document Intelligence parsing and GPT-4o generation.',
    tech: ['Azure Container Apps', 'Azure Document Intelligence', 'GPT-4o', 'pgvector', 'Python', 'FastAPI'],
    metrics: [
      { value: '79%', label: 'reduction in document generation time' },
      { value: '98%', label: 'document categorization accuracy' },
    ],
    featured: true,
    category: 'ai',
    status: 'deployed',
    caseStudy: {
      problem:
        'Contract drafting is repetitive and slow. Legal and procurement teams work from templates but each contract requires significant manual customization — pulling clauses from precedents, adjusting terms, ensuring internal consistency. The bottleneck isn\'t knowledge; it\'s transfer.',
      approach:
        'Five microservices with clean ownership boundaries. TemplateLearning ingests existing contracts and learns structural patterns — where clauses live, what they look like, what varies. ChunkProcessor handles document parsing via Azure Document Intelligence and embeds chunks into pgvector. DocumentGenerator takes a user request and assembles a draft by retrieving relevant precedents and prompting GPT-4o with structured context. SessionManager maintains conversation state across multi-step generation flows. Gateway handles auth, routing, and rate limiting.',
      built:
        'Each service is a FastAPI application containerized with Docker and deployed to Azure Container Apps. pgvector stores document embeddings. Azure Document Intelligence handles PDF parsing — significantly better than open-source alternatives on multi-column and table-heavy legal documents. Communication between services is async where possible.',
      results:
        'Document generation time fell 79%. The TemplateLearning service eliminated the need to manually configure templates — it learns from existing documents in the corpus. Categorization accuracy at 98% means the right clause types are retrieved reliably.',
      retrospective:
        'The microservice boundary between ChunkProcessor and TemplateLearning ended up being tighter than designed — they share assumptions about chunk structure that I\'d formalize as a shared schema in v2. The async service communication also introduced ordering bugs in early development that a message queue would have prevented.',
    },
  },
  {
    slug: 'vertex-itsm-agent',
    title: 'Vertex Energy ITSM Agent',
    subtitle: 'Ticket monitoring with automatic triage',
    year: 2024,
    description:
      'An IT service management automation for Vertex Energy. Monitors incoming tickets, classifies by keyword category, sends admin digests, and auto-replies to password reset requests — eliminating a full manual triage loop from the IT team\'s daily workflow.',
    tech: ['n8n', 'Docker', 'Claude API', 'Salesforce REST', 'Outlook M365', 'Python'],
    metrics: [
      { value: '80%', label: 'reduction in manual triage effort' },
    ],
    featured: true,
    category: 'ai',
    status: 'deployed',
    caseStudy: {
      problem:
        'The IT team at Vertex Energy was manually reviewing every incoming ITSM ticket to classify it, route it, and respond to routine requests like password resets. High-volume, low-complexity work that occupied time better spent on actual infrastructure problems.',
      approach:
        'n8n as the orchestration layer — low operational overhead, runs in Docker, and the visual workflow editor makes the logic auditable by non-engineers. Claude API handles classification where keyword matching isn\'t sufficient. Salesforce REST for ticket data; Outlook M365 for automated email responses.',
      built:
        'Classification runs in two passes: first a keyword filter (fast, zero LLM cost) that catches high-confidence patterns; then Claude for ambiguous cases. Password reset tickets trigger an automated Outlook response with instructions and mark the ticket resolved. Admin digest runs on a schedule and summarizes open tickets by category and priority.',
      results:
        'Manual triage effort fell 80%. Password reset automation alone handles a significant fraction of ticket volume — entirely unattended.',
      retrospective:
        'The keyword filter handles more than expected; Claude is rarely needed. If I were building this fresh I\'d start with the keyword classifier alone and only add the LLM layer after measuring the gap. The two-pass approach is right architecturally, but the LLM threshold could be tuned more aggressively.',
    },
  },
  {
    slug: 'vertex-it-dashboard',
    title: 'Vertex Energy IT Portfolio Dashboard',
    subtitle: 'Power BI reporting for 40 IT projects',
    year: 2024,
    description:
      'A Power BI dashboard tracking ~40 concurrent IT projects for Vertex Energy. Custom theme, DAX measures for schedule and budget variance, native visuals only. Pulls from Coupa API via OAuth 2.0 with incremental refresh.',
    tech: ['Power BI', 'DAX', 'Power Query M', 'Coupa API', 'OAuth 2.0', 'SQL Server'],
    featured: false,
    category: 'data',
    status: 'deployed',
  },
  {
    slug: 'ask-dia',
    title: 'ASK DIA',
    subtitle: 'Agentic RAG with dual-mode intelligence',
    year: 2024,
    description:
      'An agentic RAG system with a LangGraph multi-agent architecture: Planner, Router, Executor, Context Builder, and Generator agents. Dual mode — Insights (summarize and explain) and Analytics (quantify and query) — routing to the appropriate workflow based on query intent.',
    tech: ['LangGraph', 'LangChain', 'Azure OpenAI', 'pgvector', 'FastAPI', 'Python'],
    featured: false,
    category: 'ai',
    status: 'completed',
  },
  {
    slug: 'heart-disease-prediction',
    title: 'Heart Disease Prediction',
    subtitle: 'Classification with scikit-learn',
    year: 2023,
    description:
      'Binary classification model predicting heart disease risk from clinical features. Compared logistic regression, random forest, and gradient boosting. Documented the feature engineering and model selection process as a learning artifact.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter'],
    featured: false,
    category: 'learning',
    status: 'completed',
  },
  {
    slug: 'bulldozer-price-prediction',
    title: 'Bulldozer Price Prediction',
    subtitle: 'Regression on auction data',
    year: 2023,
    description:
      'Time-series aware regression to predict heavy equipment auction prices. Feature engineering on date variables, ordinal encoding for machine specifications. Placed focus on understanding the Kaggle evaluation metric (RMSLE) and how it shaped model choice.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
    featured: false,
    category: 'learning',
    status: 'completed',
  },
  {
    slug: 'youtube-aws-project',
    title: 'YouTube Data Analysis on AWS',
    subtitle: 'Cloud pipeline from API to dashboard',
    year: 2023,
    description:
      'End-to-end data pipeline: YouTube Data API → AWS S3 (raw) → AWS Glue (catalog + ETL) → Amazon Athena (query) → QuickSight (dashboard). Built to learn cloud-native data architecture patterns.',
    tech: ['AWS S3', 'AWS Glue', 'Amazon Athena', 'QuickSight', 'Python', 'YouTube Data API'],
    featured: false,
    category: 'learning',
    status: 'completed',
  },
  {
    slug: 'ml-algorithms',
    title: 'Machine Learning Algorithms',
    subtitle: 'From-scratch implementations for understanding',
    year: 2023,
    description:
      'Implemented core ML algorithms from scratch in Python — linear regression, logistic regression, k-means, decision trees — to build intuition before using library abstractions. Companion notebooks explain the math.',
    tech: ['Python', 'NumPy', 'Matplotlib', 'Jupyter'],
    featured: false,
    category: 'learning',
    status: 'completed',
  },
  {
    slug: 'myxalytics',
    title: 'DRYiCE MyXalytics',
    subtitle: 'Enterprise reporting at HCL',
    year: 2022,
    description:
      'Worked on the MyXalytics reporting platform at DRYiCE (an HCL subsidiary). Built and maintained dashboards for ITSM metrics — Zabbix, ServiceNow, Moogsoft, Nimble integrations. First experience building for production scale.',
    tech: ['Power BI', 'T-SQL', 'Zabbix', 'ServiceNow', 'Tableau', 'Python'],
    featured: false,
    category: 'data',
    employer: 'DRYiCE (HCL)',
    status: 'completed',
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug)
}
