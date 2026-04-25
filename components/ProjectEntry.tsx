import Link from 'next/link'
import type { Project } from '@/lib/projects'

interface Props {
  project: Project
  showYear?: boolean
}

export default function ProjectEntry({ project, showYear = true }: Props) {
  return (
    <article style={{ paddingBottom: '2.5rem' }}>
      <div className="flex flex-col sm:flex-row sm:gap-10">
        {/* Year */}
        {showYear && (
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: '#8B7E75',
              fontVariantNumeric: 'tabular-nums',
              letterSpacing: '0.03em',
              minWidth: '3.5rem',
              paddingTop: '0.35rem',
              flexShrink: 0,
            }}
          >
            {project.year}
          </div>
        )}

        {/* Content */}
        <div style={{ flex: 1 }}>
          {/* Title */}
          {project.caseStudy ? (
            <Link
              href={`/work/${project.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.375rem',
                  fontWeight: 300,
                  color: '#1A1613',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.25,
                  marginBottom: '0.15rem',
                  borderBottom: '1px solid #B8543D',
                  display: 'inline',
                }}
              >
                {project.title}
              </h3>
            </Link>
          ) : (
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.375rem',
                fontWeight: 300,
                color: '#1A1613',
                letterSpacing: '-0.01em',
                lineHeight: 1.25,
                marginBottom: '0.15rem',
              }}
            >
              {project.title}
            </h3>
          )}

          {/* Subtitle */}
          {project.subtitle && (
            <p
              style={{
                fontSize: '0.8rem',
                color: '#8B7E75',
                marginBottom: '0.75rem',
                marginTop: '0.2rem',
                fontVariantCaps: 'small-caps',
                letterSpacing: '0.06em',
              }}
            >
              {project.subtitle}
            </p>
          )}

          {/* Description */}
          <p
            style={{
              fontSize: '0.9375rem',
              lineHeight: 1.72,
              color: '#1A1613',
              marginBottom: '1rem',
            }}
          >
            {project.description}
          </p>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-3">
              {project.metrics.map((m) => (
                <div key={m.label} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.1rem',
                      fontWeight: 400,
                      color: '#B8543D',
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
          )}

          {/* Tech chips */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="tech-chip">
                {t}
              </span>
            ))}
          </div>

          {/* Case study link */}
          {project.caseStudy && (
            <div style={{ marginTop: '0.85rem' }}>
              <Link href={`/work/${project.slug}`} className="arrow-link">
                Read case study →
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
