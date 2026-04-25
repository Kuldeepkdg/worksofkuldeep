import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedProjects } from '@/lib/projects'
import TypingAnimation from '@/components/TypingAnimation'
import MetricCard from '@/components/MetricCard'
import ProjectRow from '@/components/ProjectRow'

export const metadata: Metadata = {
  title: 'Kuldeep Garg — Data & AI Consultant',
  description:
    'Data & AI Consultant at Taos Digital. Building intelligent systems at the intersection of enterprise data and applied AI.',
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Kuldeep Garg',
      jobTitle: 'Data & AI Consultant',
      worksFor: { '@type': 'Organization', name: 'Taos Digital' },
      url: 'https://kuldeepgarg.dev',
      sameAs: ['#', '#', '#'],
    },
    { '@type': 'WebSite', name: 'Kuldeep Garg', url: 'https://kuldeepgarg.dev' },
  ],
}

const metrics = [
  { value: '98%',  label: 'Document categorization accuracy',       sub: 'AskNIKI · Contract Intelligence' },
  { value: '~90%', label: 'Token reduction via structured facts',    sub: 'AskNIKI semantic pipeline' },
  { value: '80%',  label: 'Reduction in manual triage effort',       sub: 'Vertex Energy ITSM Agent' },
]

export default function Home() {
  const featured = getFeaturedProjects()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* ── HERO ─────────────────────────────────────── */}
      <section
        className="band-base"
        style={{
          minHeight: 'calc(100vh - 56px)',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dot-grid texture */}
        <div
          className="dot-grid"
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
        />

        {/* Decorative watermark monogram */}
        <span
          className="watermark"
          style={{
            fontSize: 'clamp(10rem, 22vw, 18rem)',
            right: '-2%',
            bottom: '-5%',
          }}
        >
          KG
        </span>

        <div className="max-w-6xl mx-auto px-6 w-full py-20" style={{ position: 'relative' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            {/* Left */}
            <div style={{ gridColumn: '1 / 8' }}>
              <div className="masthead fade-up" style={{ marginBottom: '1.5rem' }}>
                Data &amp; AI · India · 2026
              </div>

              <h1
                className="fade-up delay-1"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(3rem, 6vw, 5.25rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.0,
                  color: '#1A1613',
                  marginBottom: '1.1rem',
                }}
              >
                Kuldeep Garg
              </h1>

              {/* Typing role line */}
              <div
                className="fade-up delay-2"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.2rem, 2.4vw, 1.65rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.01em',
                  color: '#8B7E75',
                  marginBottom: '2rem',
                  minHeight: '2.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4em',
                  flexWrap: 'wrap',
                }}
              >
                <span>I&rsquo;m a</span>
                <TypingAnimation />
              </div>

              <p
                className="fade-up delay-3"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.8,
                  color: '#1A1613',
                  maxWidth: '500px',
                  marginBottom: '2.5rem',
                }}
              >
                Building intelligent systems at the intersection of enterprise data and applied AI.
                Currently at Taos Digital, focused on agentic workflows, RAG, and Power BI.
              </p>

              <div
                className="fade-up delay-4"
                style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}
              >
                <Link href="/work" className="btn-accent">
                  View work
                </Link>
                <Link href="/about" className="arrow-link">About me →</Link>
                <Link href="/contact" className="arrow-link">Get in touch →</Link>
              </div>
            </div>

            {/* Right: photo */}
            <div
              className="scale-in delay-2 hidden md:flex"
              style={{
                gridColumn: '8 / 13',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.25rem',
              }}
            >
              <div
                className="photo-ring"
                style={{ width: '280px', height: '280px', position: 'relative' }}
              >
                <Image
                  src="/images/kuldeep.jpg"
                  alt="Kuldeep Garg"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  priority
                />
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.875rem',
                  color: '#8B7E75',
                  fontStyle: 'italic',
                  textAlign: 'center',
                }}
              >
                Data &amp; AI Consultant
                <br />
                <span style={{ fontSize: '0.78rem', color: '#C4BAB0' }}>Taos Digital · India</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS BAND ─────────────────────────────── */}
      <section
        className="band-surface"
        style={{
          padding: 'clamp(40px, 5vw, 72px)',
          borderTop: '1px solid #D4CCC6',
          borderBottom: '1px solid #D4CCC6',
          position: 'relative',
        }}
      >
        {/* Section header row */}
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          marginBottom: 48,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#B8543D', display: 'inline-block' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: '#8B7E75',
            }}>
              § 01 · Impact by numbers
            </span>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#8B7E75' }}>p. 02</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 48 }}>
          {metrics.map((m, i) => (
            <MetricCard key={m.value} value={m.value} label={m.label} sub={m.sub} index={i} />
          ))}
        </div>
      </section>

      {/* ── FEATURED WORK ─────────────────────────────── */}
      <section
        className="band-base"
        style={{ padding: 'clamp(48px, 6vw, 96px) clamp(24px, 5vw, 72px) 80px' }}
      >
        {/* Section header */}
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          marginBottom: 56, flexWrap: 'wrap', gap: '1rem',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#B8543D', display: 'inline-block' }} />
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: '#8B7E75',
              }}>
                § 02 · Featured work
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 300, letterSpacing: '-0.035em', lineHeight: 1, margin: 0,
            }}>
              Selected <span style={{ fontStyle: 'italic' }}>projects</span><span style={{ color: '#B8543D' }}>.</span>
            </h2>
          </div>
          <Link href="/work" style={{
            fontSize: 14, color: '#1A1613', textDecoration: 'none',
            borderBottom: '1px solid #1A1613', paddingBottom: 2,
          }}>
            All projects →
          </Link>
        </div>

        {/* Project rows */}
        <div>
          {featured.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} isFirst={i === 0} />
          ))}
        </div>
      </section>

      {/* ── FOOTNOTE ──────────────────────────────────── */}
      <section className="band-surface" style={{ padding: '2.5rem clamp(24px, 5vw, 72px)' }}>
        <p style={{ fontSize: '0.8rem', color: '#8B7E75', lineHeight: 1.65 }}>
          <sup className="sidenote-marker">¹</sup> Currently working on{' '}
          <em>AskNIKI</em> — contract intelligence at scale.{' '}
          Last updated April 2026.
        </p>
      </section>
    </>
  )
}
