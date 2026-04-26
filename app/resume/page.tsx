import type { Metadata } from 'next'
import Link from 'next/link'
import SmallCapsLabel from '@/components/SmallCapsLabel'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Kuldeep Garg — Data & AI Consultant. Resume and professional background.',
}

const rule = <hr style={{ border: 'none', borderTop: '1px solid #D4CCC6', margin: '2rem 0' }} />

export default function Resume() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1rem',
        }}
      >
        <div style={{ gridColumn: '1 / 9' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
            <div>
              <SmallCapsLabel dot style={{ display: 'block', marginBottom: '1rem' } as React.CSSProperties}>
                Resume
              </SmallCapsLabel>
              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.5rem',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  color: '#1A1613',
                  lineHeight: 1.1,
                  marginBottom: '0.4rem',
                }}
              >
                Kuldeep Garg
              </h1>
              <p style={{ fontSize: '0.9rem', color: '#8B7E75' }}>
                Data &amp; AI Consultant · Taos Digital · India
              </p>
            </div>
            <a
              href="/resume.pdf"
              download
              style={{
                display: 'inline-block',
                border: '1px solid #D4CCC6',
                padding: '0.5rem 1rem',
                fontSize: '0.8rem',
                color: '#8B7E75',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.03em',
                flexShrink: 0,
                marginTop: '2.5rem',
              }}
            >
              Download PDF
            </a>
          </div>

          {/* Current role */}
          {rule}
          <section style={{ marginBottom: '2rem' }}>
            <SmallCapsLabel style={{ display: 'block', marginBottom: '1.25rem' } as React.CSSProperties}>
              Experience
            </SmallCapsLabel>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 300, color: '#1A1613' }}>
                  Data &amp; AI Consultant
                </h2>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#8B7E75' }}>
                  {/* TODO: Add start date */}2024 — Present
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#B8543D', marginBottom: '0.75rem', fontVariantCaps: 'small-caps', letterSpacing: '0.04em' }}>
                Taos Digital
              </p>
              <ul style={{ fontSize: '0.9rem', color: '#1A1613', lineHeight: 1.75, listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li style={{ paddingLeft: '1.2em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#B8543D' }}>·</span>
                  Built AskNIKI — dual-mode multi-agent document intelligence platform; four-layer hybrid architecture with A2A v0.3.0; 85% reduction in report prep time, 98% categorization accuracy
                </li>
                <li style={{ paddingLeft: '1.2em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#B8543D' }}>·</span>
                  Built Contract Intelligence Platform — AI-native CLM SaaS with 14 vertical-slice modules on .NET 10 + React 19; 92% reduction in contract lifecycle time, 79% reduction in document generation time
                </li>
                <li style={{ paddingLeft: '1.2em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#B8543D' }}>·</span>
                  Delivered Power BI dashboard tracking ~40 IT projects for Vertex Energy with custom DAX, Coupa API integration, and incremental refresh
                </li>
              </ul>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 300, color: '#1A1613' }}>
                  Software Engineer I — Data Engineering &amp; Reporting
                </h2>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#8B7E75' }}>
                  Oct 2022 — 2024
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#B8543D', marginBottom: '0.75rem', fontVariantCaps: 'small-caps', letterSpacing: '0.04em' }}>
                HCL Software · DRYiCE · MyXalytics
              </p>
              <ul style={{ fontSize: '0.9rem', color: '#1A1613', lineHeight: 1.75, listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li style={{ paddingLeft: '1.2em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#B8543D' }}>·</span>
                  Designed and optimized SQL-based ETL workflows for FinOps, ITSM, alerting, and performance monitoring using Apache NiFi, PySpark, and HCL&apos;s in-house data mining tools; applied Jolt transformations to standardize complex JSON inputs
                </li>
                <li style={{ paddingLeft: '1.2em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#B8543D' }}>·</span>
                  Built 35+ interactive dashboards and reports using Power BI, Tableau, and MyXalytics — converting raw data into actionable insights for global enterprise clients
                </li>
                <li style={{ paddingLeft: '1.2em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#B8543D' }}>·</span>
                  Developed DAX queries and applied advanced Power BI features (slicers, custom visuals, KPI indicators) to surface trends and anomalies
                </li>
                <li style={{ paddingLeft: '1.2em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#B8543D' }}>·</span>
                  Optimized 65+ stored procedures and views, improving query performance by <strong>40% in production</strong>
                </li>
                <li style={{ paddingLeft: '1.2em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#B8543D' }}>·</span>
                  Ingested multi-source data from Zabbix, Moogsoft, ServiceNow, Azure, AWS, and GCP — supporting real-time, multi-domain reporting for global clients
                </li>
                <li style={{ paddingLeft: '1.2em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#B8543D' }}>·</span>
                  Improved data relevance and clarity by 25% by working with stakeholders to define key metrics and KPIs across reports
                </li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          {rule}
          <section style={{ marginBottom: '2rem' }}>
            <SmallCapsLabel style={{ display: 'block', marginBottom: '1.25rem' } as React.CSSProperties}>
              Skills &amp; Technologies
            </SmallCapsLabel>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { label: 'AI / ML', items: 'LangGraph, LangChain, Azure OpenAI, Claude API, RAG, pgvector, Cohere Rerank' },
                { label: 'BI', items: 'Power BI, DAX, Power Query M, Paginated Reports, RLS' },
                { label: 'Cloud', items: 'Azure Container Apps, Azure AI Foundry, Docker, n8n, Vercel' },
                { label: 'Languages', items: 'Python, SQL, TypeScript, JavaScript, M' },
                { label: 'Databases', items: 'PostgreSQL, pgvector, SQL Server, MySQL' },
                { label: 'Frameworks', items: 'FastAPI, Next.js, Flask' },
              ].map(({ label, items }) => (
                <div key={label}>
                  <span style={{ fontSize: '0.72rem', color: '#8B7E75', fontVariantCaps: 'small-caps', letterSpacing: '0.07em', display: 'block', marginBottom: '0.35rem' }}>
                    {label}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: '#1A1613', lineHeight: 1.6 }}>
                    {items}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          {rule}
          <section>
            <SmallCapsLabel style={{ display: 'block', marginBottom: '1.25rem' } as React.CSSProperties}>
              Education
            </SmallCapsLabel>
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 300, color: '#1A1613', marginBottom: '0.2rem' }}>
                {/* TODO: Add your degree and institution */}
                [Degree] — [Institution]
              </h2>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#8B7E75' }}>
                [Year] {/* TODO: Add graduation year */}
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
