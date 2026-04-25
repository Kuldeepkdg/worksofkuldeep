'use client'
import { useReveal } from '@/hooks/useReveal'
import { useCountUp } from '@/hooks/useCountUp'

interface Props {
  value: string
  label: string
  sub: string
  index: number
}

export default function MetricCard({ value, label, sub, index }: Props) {
  const [ref, visible] = useReveal()
  const displayValue = useCountUp(value, visible)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        borderTop: '2px solid #B8543D',
        paddingTop: 28,
        position: 'relative',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms`,
      }}
    >
      {/* Index badge sitting on the top rule */}
      <div style={{
        position: 'absolute', top: -1, right: 0,
        fontFamily: 'var(--font-mono)', fontSize: 10, color: '#8B7E75',
        background: '#F0EBE4', padding: '0 8px 0 10px',
        transform: 'translateY(-50%)', letterSpacing: '0.1em',
      }}>
        0{index + 1}
      </div>

      <div style={{
        fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 6rem)',
        fontWeight: 300, color: '#B8543D', lineHeight: 1, letterSpacing: '-0.04em',
      }}>
        {displayValue}
      </div>
      <div style={{ marginTop: 16, fontSize: 16, lineHeight: 1.5, color: '#1A1613', maxWidth: 280 }}>
        {label}
      </div>
      <div style={{
        marginTop: 10, fontFamily: 'var(--font-mono)', fontSize: 11,
        color: '#8B7E75', letterSpacing: '0.04em',
      }}>
        — {sub}
      </div>
    </div>
  )
}
