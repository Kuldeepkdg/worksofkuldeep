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
                  Built AskNIKI — contract intelligence tool with three-stage semantic pipeline; ~90% token reduction, 98% categorization accuracy
                </li>
                <li style={{ paddingLeft: '1.2em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#B8543D' }}>·</span>
                  Designed Contract Intelligence Platform as 5 microservices on Azure Container Apps; 79% reduction in document generation time
                </li>
                <li style={{ paddingLeft: '1.2em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#B8543D' }}>·</span>
                  Built Vertex Energy ITSM automation (n8n + Claude API + Salesforce); 80% reduction in manual triage
                </li>
                <li style={{ paddingLeft: '1.2em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#B8543D' }}>·</span>
                  Delivered Power BI dashboard tracking ~40 IT projects with custom DAX, Coupa API integration, and incremental refresh
                </li>
              </ul>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 300, color: '#1A1613' }}>
                  Data Analyst {/* TODO: Confirm exact title */}
                </h2>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#8B7E75' }}>
                  {/* TODO: Add dates */}2022 — 2024
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#B8543D', marginBottom: '0.75rem', fontVariantCaps: 'small-caps', letterSpacing: '0.04em' }}>
                DRYiCE (HCL)
              </p>
              <ul style={{ fontSize: '0.9rem', color: '#1A1613', lineHeight: 1.75, listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li style={{ paddingLeft: '1.2em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#B8543D' }}>·</span>
                  Built and maintained ITSM dashboards on the MyXalytics reporting platform
                </li>
                <li style={{ paddingLeft: '1.2em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#B8543D' }}>·</span>
                  Integrated Zabbix, ServiceNow, Moogsoft, and Nimble data into unified reporting
                </li>
                <li style={{ paddingLeft: '1.2em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#B8543D' }}>·</span>
                  Delivered dashboards using Power BI, Tableau, and T-SQL for enterprise clients
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
