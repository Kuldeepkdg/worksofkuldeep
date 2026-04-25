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
  image?: string
  caseStudy?: CaseStudy
}

export const projects: Project[] = [
  {
    slug: 'askniki',
    title: 'AskNIKI',
    subtitle: 'Dual-mode document intelligence · A2A v0.3.0',
    year: 2025,
    description:
      'A production-grade, dual-mode document intelligence platform — Insights and Analytics. Four-layer hybrid architecture: Cloud LLM orchestrator, SLM agents (Codestral-2501 / DeepSeek-R1-0528 via Azure AI Foundry), MCP servers, and PostgreSQL, connected via Google\'s A2A v0.3.0 protocol. Two-tier execution: Tier 1 ReAct for standard queries (~5–8s), Tier 2 LangGraph StateGraph for complex multi-step reasoning. Analytics mode delivers Chart.js dashboards, PDF/PPTX reports, and automated email delivery via a Communications Agent.',
    tech: ['FastAPI', 'LangGraph', 'React 18', 'TypeScript', 'PostgreSQL', 'pgvector', 'Azure OpenAI', 'Cohere Rerank', 'MCP', 'A2A', 'DeepSeek-R1', 'Codestral'],
    metrics: [
      { value: '~90%', label: 'token reduction via structured facts' },
      { value: '80%', label: 'reduction in manual prep effort' },
      { value: '98%', label: 'document categorization accuracy' },
    ],
    featured: true,
    category: 'ai',
    status: 'active',
    image: '/images/askniki-architecture.png',
    caseStudy: {
      problem:
        'Enterprise procurement teams spend hours manually extracting clauses, pricing, and obligations from contracts. Most tools do OCR and keyword search — they retrieve text but don\'t understand it. The result: analysts copy-pasting across documents to answer questions that should take seconds.',
      approach:
        'Four-layer hybrid architecture with strict layer contracts. The Cloud LLM orchestrator sees only A2A Agent Cards — never raw SQL rows, document chunks, or binary blobs. SLM agents (Codestral-2501 for SQL, DeepSeek-R1-0528 for semantic reasoning and email delivery) communicate via Google\'s A2A v0.3.0 protocol (JSON-RPC 2.0). MCP servers handle deterministic tool execution. Two-tier orchestration: Tier 1 ReAct for skills-based queries, Tier 2 LangGraph StateGraph (UNDERSTAND → PLAN → EXECUTE → REFLECT) for complex reasoning with MemorySaver checkpointing and stateful inline clarification.',
      built:
        'FastAPI backend with LangGraph orchestration across both modes. Each SLM agent exposes an Agent Card at /.well-known/agent-card.json; the orchestrator discovers tools dynamically via inputSchema — no local imports required. Analytics mode adds Chart.js visualizations, server-side matplotlib/PDF/PPTX generation, and a Communications Agent that delivers multi-chart email reports via Gmail SMTP. Blob isolation: binary payloads are stored in the SQL Agent\'s task store and referenced by draft_task_id — they never enter Cloud LLM token space. React 18 SPA with JWT authentication, persistent chat history, and credit-based rate limiting.',
      results:
        'Roughly 90% reduction in tokens sent to the primary LLM — the fact extraction step means we\'re passing structured data to GPT-4o instead of raw document chunks. Categorization accuracy hit 98% after tuning the reranker threshold. Manual prep time for contract review fell by 80%. The Communications Agent delivers formatted reports (HTML/PDF/PPTX) from A2A skill output without binary data entering the LLM inference path.',
      retrospective:
        'I underestimated the reranker. The initial prototype used vector search alone and precision was acceptable — but adding Cohere Rerank as a second stage was the highest-ROI single change we made. I\'d add it on day one in the next project. The other lesson: the A2A layer contract pays for itself. Enforcing that the Cloud LLM never touches raw data directly made the system far easier to debug, swap components, and reason about at scale — the boundary is load-bearing, not ceremonial.',
      sidenotes: [
        {
          afterText: 'Tier 2 LangGraph StateGraph (UNDERSTAND → PLAN → EXECUTE → REFLECT)',
          text: 'The REFLECT node can route back to PLAN up to twice if the answer is incomplete — a self-correction loop that meaningfully improves output quality on multi-hop queries.',
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
    subtitle: 'AI-native CLM SaaS · 14 vertical-slice modules',
    year: 2024,
    description:
      'An AI-native Contract Lifecycle Management SaaS built on .NET 10 Minimal APIs, React 19, and Python FastAPI. Fourteen vertical-slice modules cover the full contract lifecycle — AI-powered document generation, real-time co-editing (Y.js + SignalR), vendor portal, e-signature, obligation tracking, analytics, and public procurement compliance. Orchestrated locally via .NET Aspire; deployed to Azure Container Apps via Bicep.',
    tech: ['.NET 10', 'ASP.NET Core', 'React 19', 'Python FastAPI', 'LiteLLM', 'Docling', 'Hangfire', 'SignalR', 'Y.js', 'PostgreSQL', 'Redis', 'Azure Container Apps'],
    metrics: [
      { value: '79%', label: 'reduction in document generation time' },
      { value: '98%', label: 'document categorization accuracy' },
    ],
    featured: true,
    category: 'ai',
    status: 'deployed',
    caseStudy: {
      problem:
        'Contract drafting is repetitive and slow. Legal and procurement teams work from templates but each contract requires significant manual customization — pulling clauses from precedents, adjusting terms, ensuring internal consistency. The bottleneck isn\'t knowledge; it\'s transfer. And once a contract is signed, tracking obligations and renewals falls back to spreadsheets.',
      approach:
        'Fourteen vertical-slice modules, each with full ownership over its domain: identity, projects, documents, generation, collaboration, vendor portal, workflow, signature, intelligence, post-execution, analytics, notifications, administration, and government procurement. Each module is independently testable and deployable. AI inference routes through LiteLLM for provider flexibility; Docling handles PDF parsing with strong accuracy on multi-column and table-heavy legal documents. .NET Aspire orchestrates local development; NetArchTest enforces module boundaries in CI.',
      built:
        '.NET 10 Minimal API host with Hangfire background workers for async processing — document ingestion, embedding generation, obligation reminders. Real-time co-editing built on Y.js (CRDT) over SignalR, allowing multiple reviewers to edit simultaneously with conflict-free merge. Python FastAPI AI service handles generation and clause extraction via LiteLLM. React 19 frontend with TanStack Router and Query. Infrastructure as code via Azure Bicep targeting Container Apps with Postgres and Redis.',
      results:
        'Document generation time fell 79% — AI clause assembly from precedent corpus replaces manual copy-paste. Categorization accuracy at 98% means the right clause types are retrieved reliably. Real-time collaboration eliminated the version-control email chain that previously added days to review cycles.',
      retrospective:
        'The module boundary discipline enforced by NetArchTest was worth the setup cost — it caught several accidental cross-module dependencies early that would have become architectural debt. The Y.js + SignalR combination for co-editing was more straightforward than expected; the harder problem was preserving intent when two editors simultaneously revise the same clause, which required business logic above the CRDT layer.',
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
