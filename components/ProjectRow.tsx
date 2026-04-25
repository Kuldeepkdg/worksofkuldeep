'use client'
import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'
import type { Project } from '@/lib/projects'

interface Props {
  project: Project
  index: number
  isFirst: boolean
}

export default function ProjectRow({ project, index, isFirst }: Props) {
  const [ref, visible] = useReveal()

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        display: 'grid',
        gridTemplateColumns: '120px 1fr 280px',
        gap: 48,
        padding: '36px 0',
        borderTop: isFirst ? '1px solid #D4CCC6' : 'none',
        borderBottom: '1px solid #D4CCC6',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 120}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 120}ms`,
      }}
    >
      {/* Col 1 — year + status */}
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#8B7E75', letterSpacing: '0.06em' }}>
          {project.year}
        </div>
        {project.status && (
          <div style={{
            marginTop: 8,
            fontFamily: 'var(--font-mono)', fontSize: 10,
            padding: '3px 8px', background: '#B8543D', color: '#FAF7F2',
            display: 'inline-block', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            {project.status}
          </div>
        )}
      </div>

      {/* Col 2 — title, subtitle, description, chips */}
      <div>
        <Link href={`/work/${project.slug}`} style={{ textDecoration: 'none' }}>
          <h3 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.05,
            margin: 0, color: '#1A1613',
          }}>
            {project.title}
          </h3>
        </Link>
        {project.subtitle && (
          <div style={{
            marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: 11,
            color: '#8B7E75', letterSpacing: '0.09em', textTransform: 'uppercase',
          }}>
            {project.subtitle}
          </div>
        )}
        <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.7, color: '#1A1613', maxWidth: 560, margin: '16px 0 0' }}>
          {project.description}
        </p>
        <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.tech.slice(0, 6).map(t => (
            <span key={t} style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, color: '#8B7E75',
              border: '1px solid #D4CCC6', padding: '3px 9px', background: '#FAF7F2',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Col 3 — per-project metrics */}
      <div>
        {project.metrics?.map((m, j) => (
          <div key={j} style={{
            paddingBottom: 12, marginBottom: 12,
            borderBottom: j < (project.metrics?.length ?? 0) - 1 ? '1px solid #D4CCC6' : 'none',
          }}>
            <div style={{
              fontFamily: 'var(--font-serif)', fontSize: 32, color: '#B8543D',
              fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1,
            }}>
              {m.value}
            </div>
            <div style={{ marginTop: 4, fontSize: 12, color: '#8B7E75' }}>{m.label}</div>
          </div>
        ))}
      </div>
    </article>
  )
}
