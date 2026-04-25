import type { Metadata } from 'next'
import SmallCapsLabel from '@/components/SmallCapsLabel'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Kuldeep Garg.',
}

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1rem',
        }}
      >
        <div style={{ gridColumn: '1 / 7' }}>
          <SmallCapsLabel dot style={{ display: 'block', marginBottom: '2rem' } as React.CSSProperties}>
            Contact
          </SmallCapsLabel>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              color: '#1A1613',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            Get in touch
          </h1>

          <p
            style={{
              fontSize: '0.9375rem',
              color: '#8B7E75',
              lineHeight: 1.72,
              marginBottom: '3rem',
              maxWidth: '440px',
            }}
          >
            For consulting inquiries, project conversations, or anything else — use the form
            or reach out directly.
          </p>

          <ContactForm />

          {/* Alternate contacts */}
          <div className="page-footnote" style={{ maxWidth: '520px', marginTop: '3rem' }}>
            <p>
              Prefer email?{' '}
              <a href="mailto:kuldeep.g@taos.digital" className="accent-link">
                kuldeep.g@taos.digital
              </a>
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              LinkedIn, GitHub, and Twitter/X links are in the footer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
