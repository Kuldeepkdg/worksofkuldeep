import type { Metadata } from 'next'
import { projects } from '@/lib/projects'
import ProjectEntry from '@/components/ProjectEntry'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Projects and case studies — AI systems, agentic workflows, Power BI, and data engineering.',
}

const aiProjects = projects.filter((p) => p.category === 'ai')
const dataProjects = projects.filter((p) => p.category === 'data')
const learningProjects = projects.filter((p) => p.category === 'learning')

interface BandProps {
  warm?: boolean
  children: React.ReactNode
}
function Band({ warm, children }: BandProps) {
  return (
    <div className={warm ? 'band-surface' : 'band-base'} style={{ padding: '4.5rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </div>
  )
}

interface SectionHeaderProps {
  label: string
  accent: string
  description?: string
}
function SectionHeader({ label, accent, description }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <div className="category-header">
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5em',
            fontVariantCaps: 'small-caps',
            letterSpacing: '0.1em',
            fontSize: '0.78rem',
            fontWeight: 600,
            color: accent,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: accent,
            }}
          />
          {label}
        </span>
      </div>
      {description && (
        <p style={{ fontSize: '0.9rem', color: '#8B7E75', lineHeight: 1.65, maxWidth: '520px' }}>
          {description}
        </p>
      )}
    </div>
  )
}

export default function Work() {
  return (
    <div>
      {/* Page header — base background with watermark */}
      <div
        className="band-base"
        style={{ padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}
      >
        {/* dot texture */}
        <div
          className="dot-grid"
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
        />
        {/* watermark */}
        <span
          className="watermark"
          style={{ fontSize: 'clamp(6rem, 15vw, 12rem)', right: '4%', bottom: '-10%' }}
        >
          02
        </span>

        <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4em', marginBottom: '1.5rem' }}>
            <span style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#B8543D' }} />
            <span className="small-caps" style={{ color: '#8B7E75' }}>Work</span>
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
              maxWidth: '640px',
            }}
          >
            Selected work and case studies
          </h1>
          <p style={{ fontSize: '1rem', color: '#8B7E75', maxWidth: '480px', lineHeight: 1.72 }}>
            Hover a project to highlight it. Click the title or "Read case study" for the full write-up.
          </p>
        </div>
      </div>

      {/* AI & Agents — warm surface band */}
      <Band warm>
        <SectionHeader label="AI & Agents" accent="#B8543D" />
        {aiProjects.map((project, i) => (
          <div key={project.slug}>
            <div className="project-entry">
              <ProjectEntry project={project} />
            </div>
            {i < aiProjects.length - 1 && (
              <hr style={{ border: 'none', borderTop: '1px solid #D4CCC6', margin: '0 1rem' }} />
            )}
          </div>
        ))}
      </Band>

      {/* Data & BI — base band */}
      <Band>
        <SectionHeader label="Data & BI" accent="#C07A52" />
        {dataProjects.map((project, i) => (
          <div key={project.slug}>
            <div className="project-entry">
              <ProjectEntry project={project} />
            </div>
            {i < dataProjects.length - 1 && (
              <hr style={{ border: 'none', borderTop: '1px solid #D4CCC6', margin: '0 1rem' }} />
            )}
          </div>
        ))}
      </Band>

      {/* Learning — warm surface band */}
      <Band warm>
        <SectionHeader
          label="Learning projects"
          accent="#8B7E75"
          description="Earlier work — built to understand the fundamentals before reaching for abstractions."
        />
        {learningProjects.map((project, i) => (
          <div key={project.slug}>
            <div className="project-entry">
              <ProjectEntry project={project} />
            </div>
            {i < learningProjects.length - 1 && (
              <hr style={{ border: 'none', borderTop: '1px solid #D4CCC6', margin: '0 1rem' }} />
            )}
          </div>
        ))}
      </Band>
    </div>
  )
}
