export interface TechItem {
  name: string
  context: string
}

export interface StackCategory {
  id: string
  label: string
  angle: number   // degrees, 0 = right, -90 = top, clockwise
  color: string
  items: TechItem[]
}

// 7 categories at 360/7 ≈ 51.43° apart, starting at -90° (top)
export const stackCategories: StackCategory[] = [
  {
    id: 'ai',
    label: 'AI / ML\nAgents',
    angle: -90,
    color: '#B8543D',
    items: [
      { name: 'LangGraph', context: 'Planner/Router/Executor agent architecture in AskNIKI and ASK DIA' },
      { name: 'LangChain', context: 'Chain composition, tool integration, and prompt templating' },
      { name: 'Azure OpenAI', context: 'Primary LLM in AskNIKI and Contract Intelligence Platform' },
      { name: 'Claude API', context: 'Classification and analysis in Vertex Energy ITSM agent' },
      { name: 'pgvector', context: 'Vector similarity search for schema registry in AskNIKI' },
      { name: 'Cohere Rerank', context: 'Second-stage reranking in AskNIKI semantic pipeline' },
      { name: 'MCP / A2A', context: 'Model Context Protocol and agent-to-agent patterns in AskNIKI' },
      { name: 'FastAPI', context: 'Backend framework for AskNIKI and Contract Intelligence APIs' },
      { name: 'RAG', context: 'Three-stage pipeline: retrieval → reranking → structured extraction' },
    ],
  },
  {
    id: 'data',
    label: 'Data\nEngineering',
    angle: -38.57,
    color: '#C07A52',
    items: [
      { name: 'Power Query M', context: 'ETL transformations across multiple client datasets in Power BI' },
      { name: 'DAX', context: 'Calculated measures and KPIs for Vertex Energy IT dashboard' },
      { name: 'T-SQL', context: 'Query optimization for SQL Server data sources at DRYiCE' },
      { name: 'Coupa API', context: 'Procurement data extraction for Vertex Energy dashboards' },
      { name: 'OAuth 2.0', context: 'Authentication for Coupa REST API integration' },
      { name: 'Incremental Refresh', context: 'Power BI performance optimization for large datasets' },
      { name: 'ETL Pipelines', context: 'Data movement from APIs and databases into BI layers' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud &\nDevOps',
    angle: 12.86,
    color: '#9B5E35',
    items: [
      { name: 'Azure Container Apps', context: 'Hosting for Contract Intelligence microservices' },
      { name: 'Azure AI Foundry', context: 'Model deployment and endpoint management' },
      { name: 'Azure Doc Intelligence', context: 'Document parsing in Contract Intelligence Platform' },
      { name: 'Docker', context: 'Containerization for n8n ITSM agent and all microservices' },
      { name: 'n8n', context: 'Workflow orchestration for Vertex Energy ITSM automation' },
      { name: 'Vercel', context: 'Deployment target for Next.js web projects' },
    ],
  },
  {
    id: 'bi',
    label: 'BI &\nAnalytics',
    angle: 64.29,
    color: '#A67340',
    items: [
      { name: 'Power BI', context: 'Primary BI tool — enterprise dashboards and executive reports' },
      { name: 'Power BI Service', context: 'Workspace management, RLS, and scheduled dataset refresh' },
      { name: 'Power Automate', context: 'Automated report distribution and alert workflows' },
      { name: 'Paginated Reports', context: 'Pixel-perfect operational reports for Vertex Energy' },
      { name: 'RLS', context: 'Row-level security for multi-tenant Power BI datasets' },
      { name: 'Tableau', context: 'Used at DRYiCE MyXalytics for ITSM metric dashboards' },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    angle: 115.72,
    color: '#7A6048',
    items: [
      { name: 'Python', context: 'Primary language — FastAPI, LangChain, data processing, scripting' },
      { name: 'SQL', context: 'Query design across PostgreSQL, SQL Server, and Athena' },
      { name: 'TypeScript', context: 'Next.js projects and type-safe API client code' },
      { name: 'JavaScript', context: 'Frontend scripting and n8n custom function nodes' },
      { name: 'M (Power Query)', context: 'Data transformation language for Power BI datasets' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    angle: 167.15,
    color: '#C08B5A',
    items: [
      { name: 'PostgreSQL', context: 'Primary database for AskNIKI and Contract Intelligence Platform' },
      { name: 'pgvector', context: 'Vector extension for semantic search within PostgreSQL' },
      { name: 'SQL Server', context: 'Enterprise data warehousing for client BI projects' },
      { name: 'MySQL', context: 'Used in early learning projects and the Flask portfolio' },
    ],
  },
  {
    id: 'learning',
    label: 'Learning',
    angle: 218.58,
    color: '#B87755',
    items: [
      { name: 'Azure AI-102', context: 'AI Engineer certification — currently in progress' },
      { name: 'Scikit-learn', context: 'ML algorithms for heart disease and bulldozer price projects' },
      { name: 'AWS Glue / Athena', context: 'Cloud data pipeline in the YouTube AWS analysis project' },
      { name: 'Pandas / NumPy', context: 'Data manipulation and feature engineering in learning projects' },
      { name: 'Flask', context: 'Previous portfolio site and early web development experiments' },
    ],
  },
]
