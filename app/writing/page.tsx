import type { Metadata } from 'next'
import SmallCapsLabel from '@/components/SmallCapsLabel'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Writing by Kuldeep Garg — coming soon.',
}

export default function Writing() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <SmallCapsLabel dot style={{ display: 'block', marginBottom: '2rem' } as React.CSSProperties}>
        Writing
      </SmallCapsLabel>

      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          color: '#1A1613',
          lineHeight: 1.15,
          marginBottom: '2rem',
          maxWidth: '600px',
        }}
      >
        Writing is coming.
      </h1>

      <p
        style={{
          fontSize: '1.0625rem',
          color: '#8B7E75',
          lineHeight: 1.75,
          maxWidth: '480px',
        }}
      >
        Ideas need time before they become prose worth reading. I&rsquo;ll publish here
        when something is ready.
      </p>
    </div>
  )
}
