import type { Metadata } from 'next'
import StackGrid from '@/components/StackGrid'

export const metadata: Metadata = {
  title: 'Stack',
  description: 'Technical experience stack — AI, data engineering, cloud, BI, languages, and databases.',
}

export default function Stack() {
  return (
    <div>
      {/* Header */}
      <section
        className="band-surface"
        style={{ padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}
      >
        <span
          className="watermark"
          style={{ fontSize: 'clamp(6rem, 15vw, 12rem)', right: '4%', bottom: '-10%' }}
        >
          04
        </span>
        <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4em', marginBottom: '1.5rem' }}>
            <span style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#B8543D' }} />
            <span className="small-caps" style={{ color: '#8B7E75' }}>Stack</span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 300,
              letterSpacing: '-0.025em',
              color: '#1A1613',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            Technical experience
          </h1>
          <p style={{ fontSize: '1rem', color: '#8B7E75', maxWidth: '480px', lineHeight: 1.72 }}>
            Hover any chip to see where I&rsquo;ve used it. Wider cards are areas of deepest expertise.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="band-base" style={{ padding: '4rem 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <StackGrid />
        </div>
      </section>

      {/* Footer note */}
      <section className="band-surface" style={{ padding: '2.5rem 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <p style={{ fontSize: '0.875rem', color: '#8B7E75', lineHeight: 1.75, maxWidth: '520px' }}>
            The tools I reach for most: Python, LangGraph, pgvector, Power BI, and SQL.
            Everything else is context-dependent — I pick what the problem needs, not what
            I&rsquo;m most comfortable with.
          </p>
        </div>
      </section>
    </div>
  )
}
