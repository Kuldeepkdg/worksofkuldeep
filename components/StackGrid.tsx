'use client'

import { useState } from 'react'
import { stackCategories, type TechItem } from '@/lib/stack'

// Desktop bento spans — 3-column grid
// Row 1: AI (2 cols) + Data Eng (1 col)
// Row 2: Cloud (1 col) + BI (2 cols)
// Row 3: Languages (1) + Databases (1) + Learning (1)
const colSpans: Record<string, number> = {
  ai: 2,
  data: 1,
  cloud: 1,
  bi: 2,
  languages: 1,
  databases: 1,
  learning: 1,
}

interface TooltipState {
  name: string
  context: string
}

interface ChipProps {
  item: TechItem
  catColor: string
  onHover: (t: TooltipState | null) => void
}

function Chip({ item, catColor, onHover }: ChipProps) {
  return (
    <span
      onMouseEnter={() => onHover({ name: item.name, context: item.context })}
      onMouseLeave={() => onHover(null)}
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.695rem',
        letterSpacing: '0.02em',
        padding: '0.22em 0.6em',
        backgroundColor: '#FAF7F2',
        border: `1px solid #D4CCC6`,
        color: '#4A3F38',
        cursor: 'default',
        lineHeight: 1.65,
        transition: 'background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease',
      }}
      onMouseOver={(e) => {
        const el = e.currentTarget as HTMLSpanElement
        el.style.backgroundColor = `${catColor}14`
        el.style.borderColor = catColor
        el.style.color = catColor
      }}
      onMouseOut={(e) => {
        const el = e.currentTarget as HTMLSpanElement
        el.style.backgroundColor = '#FAF7F2'
        el.style.borderColor = '#D4CCC6'
        el.style.color = '#4A3F38'
      }}
    >
      {item.name}
    </span>
  )
}

export default function StackGrid() {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null)

  return (
    <div>
      {/* Bento grid */}
      <div className="stack-bento">
        {stackCategories.map((cat, i) => {
          const span = colSpans[cat.id] ?? 1

          return (
            <div
              key={cat.id}
              className={`${span === 2 ? 'bento-wide' : ''} fade-up delay-${Math.min(i + 1, 6)}`}
              style={{
                backgroundColor: `${cat.color}09`,
                border: `1px solid ${cat.color}28`,
                borderLeft: `3px solid ${cat.color}`,
                padding: '1.5rem 1.5rem 1.75rem',
                transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1), box-shadow 0.2s ease',
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(-3px)'
                el.style.boxShadow = `0 6px 24px ${cat.color}18`
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              {/* Category header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: span === 2 ? '1.3rem' : '1.1rem',
                    color: cat.color,
                    lineHeight: 1,
                  }}
                >
                  {cat.label.replace('\n', ' ')}
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: cat.color,
                    opacity: 0.6,
                    letterSpacing: '0.03em',
                  }}
                >
                  {cat.items.length}
                </span>
              </div>

              {/* Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {cat.items.map((item) => (
                  <Chip
                    key={item.name}
                    item={item}
                    catColor={cat.color}
                    onHover={setTooltip}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Context tooltip bar */}
      <div
        style={{
          marginTop: '1rem',
          minHeight: '2.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.5rem 0.75rem',
          borderTop: '1px solid #D4CCC6',
          transition: 'opacity 0.15s ease',
          opacity: tooltip ? 1 : 0,
        }}
      >
        {tooltip && (
          <>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: '#B8543D',
                flexShrink: 0,
                fontWeight: 500,
              }}
            >
              {tooltip.name}
            </span>
            <span style={{ color: '#D4CCC6', fontSize: '0.8rem', flexShrink: 0 }}>—</span>
            <span style={{ fontSize: '0.8125rem', color: '#8B7E75', lineHeight: 1.5 }}>
              {tooltip.context}
            </span>
          </>
        )}
      </div>

    </div>
  )
}
