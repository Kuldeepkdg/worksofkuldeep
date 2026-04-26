import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About',
  description: 'Kuldeep Garg — Data & AI Consultant at Taos Digital. Three years in data engineering, eighteen months building AI applications.',
}

export default function About() {
  return (
    <div>
      {/* ── Header band ───────────────────────────────── */}
      <section
        className="band-surface"
        style={{ padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}
      >
        {/* watermark */}
        <span
          className="watermark"
          style={{ fontSize: 'clamp(6rem, 16vw, 14rem)', right: '3%', bottom: '-15%' }}
        >
          03
        </span>

        <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4em', marginBottom: '1.5rem' }}>
            <span style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#B8543D' }} />
            <span className="small-caps" style={{ color: '#8B7E75' }}>About</span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 300,
              letterSpacing: '-0.025em',
              color: '#1A1613',
              lineHeight: 1.1,
              marginBottom: '0',
            }}
          >
            Kuldeep Garg
          </h1>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────── */}
      <section className="band-base" style={{ padding: '5rem 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '2rem',
            }}
          >
            {/* Prose — main column */}
            <div style={{ gridColumn: '1 / 8' }}>
              <div className="prose-warm">
                <p className="drop-cap">
                  Four and a half years ago, I started as a data analyst — building BI reports for
                  teams across ITSM, system monitoring, network monitoring, and FinOps to drive their
                  business decisions. The work quickly became more than just reporting: to get useful
                  data into dashboards, we had to build the pipelines that brought it there. Pulling
                  data from Zabbix, ServiceNow, Moogsoft, and cloud platforms meant building ETL
                  workflows, not just charts. That blend of data engineering and analytics has
                  defined most of my career since.
                </p>

                <p>
                  I&rsquo;m a Data &amp; AI Consultant at Taos Digital, where I spend most of my time
                  at the intersection of two things: enterprise data platforms that organizations have
                  built over years, and AI systems that can make those platforms speak. In practice,
                  that means building retrieval-augmented generation systems, designing agentic
                  workflows, and doing the hard work of making language models useful in
                  production — not demo-useful, but production-useful.
                </p>

                <p>
                  The work I&rsquo;m most proud of lately is{' '}
                  <a href="/work/askniki" className="accent-link">AskNIKI</a> — a multi-agent
                  document intelligence platform that derives insights and analytics from enterprise
                  documents. Built on a four-layer hybrid architecture using Google&rsquo;s A2A
                  v0.3.0 protocol, with two-tier LangGraph orchestration and a Communications Agent
                  for automated report delivery. It reduced manual report preparation effort by 85%
                  and achieved 98% document categorization accuracy. The interesting engineering was
                  not the AI itself but the constraints: how do you keep binary blobs out of LLM
                  token space? How do you give a Cloud LLM orchestrator only structured facts,
                  never raw chunks?
                </p>

                <p>
                  Before Taos, I was a Software Engineer at DRYiCE (an HCL subsidiary), building
                  their MyXalytics unified reporting and analytics platform. I designed SQL-based ETL
                  workflows using Apache NiFi and PySpark, built 35+ dashboards across Power BI,
                  Tableau, and MyXalytics, and optimized 65+ stored procedures — improving query
                  performance by 40% in production. The data came from everywhere: Zabbix, Moogsoft,
                  ServiceNow, Azure, AWS, GCP — supporting real-time, multi-domain reporting for
                  global clients.
                </p>

                <p>
                  I&rsquo;m based in India. I&rsquo;m 24. I&rsquo;m currently working toward the
                  Azure AI-102 certification and spending time on Responsible AI and agent
                  safety — researching how multi-agent systems should reason, fail safely, and stay
                  within intended boundaries. I think the next interesting problems are not in making
                  agents more powerful, but in making them more trustworthy.
                </p>
              </div>

              {/* Pull quote */}
              <blockquote className="pull-quote" style={{ marginTop: '2.5rem' }}>
                &ldquo;Even unglamorous data problems are worth solving well.&rdquo;
              </blockquote>
            </div>

            {/* Sidebar */}
            <div style={{ gridColumn: '9 / 13' }}>
              {/* Photo */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  maxWidth: '220px',
                  margin: '0 auto 2rem',
                  position: 'relative',
                }}
              >
                <div
                  className="photo-ring"
                  style={{ width: '100%', height: '100%', position: 'relative' }}
                >
                  <Image
                    src="/images/kuldeep.JPG"
                    alt="Kuldeep Garg"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />
                </div>
              </div>

              {/* Info card */}
              <div
                style={{
                  backgroundColor: '#F0EBE4',
                  border: '1px solid #D4CCC6',
                  borderLeft: '3px solid #B8543D',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}
              >
                {[
                  {
                    label: 'Currently',
                    lines: ['Data & AI Consultant', 'Taos Digital'],
                    sub: '',
                  },
                  {
                    label: 'Previously',
                    lines: ['DRYiCE (HCL)'],
                    sub: 'MyXalytics platform',
                  },
                  {
                    label: 'Focus areas',
                    lines: [
                      'RAG & agentic systems',
                      'Power BI consulting',
                      'Context engineering',
                      'Enterprise data platforms',
                    ],
                    sub: '',
                  },
                  {
                    label: 'Location',
                    lines: ['India'],
                    sub: '',
                  },
                ].map(({ label, lines, sub }) => (
                  <div key={label}>
                    <span
                      style={{
                        display: 'block',
                        fontVariantCaps: 'small-caps',
                        letterSpacing: '0.09em',
                        fontSize: '0.72rem',
                        color: '#B8543D',
                        marginBottom: '0.5rem',
                        fontWeight: 500,
                      }}
                    >
                      {label}
                    </span>
                    {lines.map((line) => (
                      <p key={line} style={{ fontSize: '0.9rem', color: '#1A1613', lineHeight: 1.65, margin: 0 }}>
                        {line}
                      </p>
                    ))}
                    {sub && (
                      <p style={{ fontSize: '0.78rem', color: '#8B7E75', marginTop: '0.15rem' }}>
                        {sub}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What I'm working on ───────────────────────── */}
      <section className="band-surface" style={{ padding: '3.5rem 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4em', marginBottom: '2rem' }}>
            <span style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#B8543D' }} />
            <span className="small-caps" style={{ color: '#8B7E75' }}>Currently on my desk</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1px',
              backgroundColor: '#D4CCC6',
              border: '1px solid #D4CCC6',
            }}
          >
            {[
              { item: 'AskNIKI', detail: 'Multi-agent intelligence · Active build' },
              { item: 'Contract Intelligence', detail: 'AI-native CLM SaaS · Active build' },
              { item: 'Responsible Agents', detail: 'Researching, reading, experimenting' },
              { item: 'Azure AI-102', detail: 'Certification · In progress' },
            ].map(({ item, detail }) => (
              <div
                key={item}
                style={{ backgroundColor: '#F0EBE4', padding: '1.25rem 1.5rem' }}
              >
                <p style={{ fontSize: '0.9rem', color: '#1A1613', fontWeight: 500, marginBottom: '0.2rem' }}>
                  {item}
                </p>
                <p style={{ fontSize: '0.75rem', color: '#8B7E75', fontFamily: 'var(--font-mono)', letterSpacing: '0.02em' }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
