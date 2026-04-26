import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getProjectBySlug, getAllSlugs } from '@/lib/projects'
import SmallCapsLabel from '@/components/SmallCapsLabel'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

const sectionLabel: React.CSSProperties = {
  fontVariantCaps: 'small-caps',
  letterSpacing: '0.09em',
  fontSize: '0.72rem',
  color: '#8B7E75',
  display: 'block',
  marginBottom: '0.75rem',
  fontWeight: 500,
}

const sectionHead: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: '1.25rem',
  fontWeight: 300,
  color: '#1A1613',
  letterSpacing: '-0.01em',
  marginBottom: '0.9rem',
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const { caseStudy } = project

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Back link */}
      <div style={{ marginBottom: '3rem' }}>
        <Link href="/work" className="arrow-link" style={{ fontSize: '0.85rem', color: '#8B7E75' }}>
          ← Work
        </Link>
      </div>

      {/* Header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1rem',
          marginBottom: '4rem',
        }}
      >
        <div style={{ gridColumn: '1 / 9' }}>
          <SmallCapsLabel dot style={{ display: 'block', marginBottom: '1.25rem' } as React.CSSProperties}>
            {project.category === 'ai' ? 'AI & Agents' : project.category === 'data' ? 'Data & BI' : 'Learning'}
            {' '}· {project.year}
          </SmallCapsLabel>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              fontWeight: 300,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: '#1A1613',
              marginBottom: '1rem',
            }}
          >
            {project.title}
          </h1>

          {project.subtitle && (
            <p
              style={{
                fontSize: '0.82rem',
                color: '#8B7E75',
                fontVariantCaps: 'small-caps',
                letterSpacing: '0.07em',
                marginBottom: '1.5rem',
              }}
            >
              {project.subtitle}
            </p>
          )}

          {project.points ? (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '580px' }}>
              {project.points.map((point, i) => (
                <li key={i} style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1A1613', paddingLeft: '1.3em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#B8543D' }}>·</span>
                  {point.split(/\*\*(.*?)\*\*/g).map((part, j) =>
                    j % 2 === 1 ? <strong key={j} style={{ fontWeight: 600 }}>{part}</strong> : part
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1A1613', maxWidth: '580px' }}>
              {project.description}
            </p>
          )}
        </div>

        {/* Right sidebar: tech + metrics */}
        <div
          style={{
            gridColumn: '10 / 13',
            paddingTop: '3rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <span style={sectionLabel}>Results</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.5rem',
                        fontWeight: 300,
                        color: '#B8543D',
                        display: 'block',
                      }}
                    >
                      {m.value}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#8B7E75', lineHeight: 1.4 }}>
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <span style={sectionLabel}>Stack</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.tech.map((t) => (
                <span key={t} className="tech-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.status && (
            <div>
              <span style={sectionLabel}>Status</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: project.status === 'active' ? '#5A6B3A' : '#8B7E75',
                }}
              >
                {project.status}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Architecture / preview image */}
      {project.image && (
        <div style={{ marginBottom: '4rem' }}>
          <span style={{
            display: 'block',
            fontVariantCaps: 'small-caps',
            letterSpacing: '0.09em',
            fontSize: '0.72rem',
            color: '#8B7E75',
            marginBottom: '1rem',
            fontWeight: 500,
          }}>
            Architecture
          </span>
          <div style={{
            position: 'relative',
            width: '100%',
            borderRadius: '2px',
            border: '1px solid #D4CCC6',
            overflow: 'hidden',
            background: '#F0EBE4',
          }}>
            <Image
              src={project.image}
              alt={`${project.title} architecture diagram`}
              width={1200}
              height={720}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      )}

      {/* Case study body */}
      {caseStudy ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1rem',
          }}
        >
          <div style={{ gridColumn: '1 / 8' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
              {/* Problem */}
              <section>
                <hr className="warm-rule" style={{ marginTop: 0 }} />
                <span style={sectionLabel}>Problem</span>
                <h2 style={sectionHead}>What needed solving</h2>
                <div className="prose-warm">
                  <p>{caseStudy.problem}</p>
                </div>
              </section>

              {/* Approach */}
              <section>
                <hr className="warm-rule" style={{ marginTop: 0 }} />
                <span style={sectionLabel}>Approach</span>
                <h2 style={sectionHead}>How we thought about it</h2>
                <div className="prose-warm sidenote-wrapper" style={{ position: 'relative' }}>
                  <p>{caseStudy.approach}</p>
                  {/* Sidenote 1 */}
                  {caseStudy.sidenotes?.[0] && (
                    <aside className="sidenote hidden lg:block">
                      <sup className="sidenote-marker">†</sup>
                      {caseStudy.sidenotes[0].text}
                    </aside>
                  )}
                </div>
              </section>

              {/* Built */}
              <section>
                <hr className="warm-rule" style={{ marginTop: 0 }} />
                <span style={sectionLabel}>What I built</span>
                <h2 style={sectionHead}>The system</h2>
                <div className="prose-warm">
                  <p>{caseStudy.built}</p>
                </div>
              </section>

              {/* Results */}
              <section>
                <hr className="warm-rule" style={{ marginTop: 0 }} />
                <span style={sectionLabel}>Results</span>
                <h2 style={sectionHead}>What changed</h2>
                <div className="prose-warm sidenote-wrapper" style={{ position: 'relative' }}>
                  <p>{caseStudy.results}</p>
                  {/* Sidenote 2 */}
                  {caseStudy.sidenotes?.[1] && (
                    <aside className="sidenote hidden lg:block">
                      <sup className="sidenote-marker">‡</sup>
                      {caseStudy.sidenotes[1].text}
                    </aside>
                  )}
                </div>
              </section>

              {/* Retrospective */}
              <section>
                <hr className="warm-rule" style={{ marginTop: 0 }} />
                <span style={sectionLabel}>Retrospective</span>
                <h2 style={sectionHead}>What I&apos;d do differently</h2>
                <div className="prose-warm">
                  <p>{caseStudy.retrospective}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ borderTop: '1px solid #D4CCC6', paddingTop: '2.5rem' }}>
          <p style={{ fontSize: '0.9375rem', color: '#8B7E75', lineHeight: 1.7 }}>
            Case study coming soon.
          </p>
        </div>
      )}

      {/* Nav between projects */}
      <div
        style={{
          borderTop: '1px solid #D4CCC6',
          paddingTop: '2rem',
          marginTop: '5rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/work" className="arrow-link">
          ← All work
        </Link>
        <Link href="/contact" className="arrow-link">
          Get in touch →
        </Link>
      </div>
    </div>
  )
}
