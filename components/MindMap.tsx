'use client'

import { useState } from 'react'
import { stackCategories, type StackCategory, type TechItem } from '@/lib/stack'

// ── Geometry ─────────────────────────────────────────────────────────────────

const CX = 600
const CY = 410
const CAT_R = 190   // category node radius from center
const LEAF_R = 305  // leaf node radius from center
const TEXT_R = 322  // text label radius from center

function toRad(deg: number) {
  return (deg * Math.PI) / 180
}

function polar(r: number, angleDeg: number): [number, number] {
  return [CX + r * Math.cos(toRad(angleDeg)), CY + r * Math.sin(toRad(angleDeg))]
}

function catPos(cat: StackCategory): [number, number] {
  return polar(CAT_R, cat.angle)
}

function leafAngles(cat: StackCategory): number[] {
  const n = cat.items.length
  if (n === 1) return [cat.angle]
  const spread = 48
  return cat.items.map((_, i) => cat.angle - spread / 2 + (spread / (n - 1)) * i)
}

// Cubic bezier S-curve from center to category node
function trunkPath(cx: number, cy: number, ex: number, ey: number): string {
  const dx = ex - cx
  const dy = ey - cy
  const len = Math.sqrt(dx * dx + dy * dy)
  const nx = (-dy / len) * 18
  const ny = (dx / len) * 18
  const cp1x = cx + dx / 3 + nx
  const cp1y = cy + dy / 3 + ny
  const cp2x = cx + (2 * dx) / 3 - nx
  const cp2y = cy + (2 * dy) / 3 - ny
  return `M ${cx} ${cy} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${ex} ${ey}`
}

// Quadratic bezier from category to leaf
function branchPath(sx: number, sy: number, ex: number, ey: number): string {
  const mx = (sx + ex) / 2
  const my = (sy + ey) / 2
  return `M ${sx} ${sy} Q ${mx} ${my} ${ex} ${ey}`
}

// Text anchor and offset based on angle
function textAnchor(angleDeg: number): 'start' | 'end' | 'middle' {
  const c = Math.cos(toRad(angleDeg))
  if (c > 0.25) return 'start'
  if (c < -0.25) return 'end'
  return 'middle'
}

function textDy(angleDeg: number): number {
  const s = Math.sin(toRad(angleDeg))
  if (s > 0.6) return 14
  if (s < -0.6) return -6
  return 4
}

// ── Accordion (mobile) ────────────────────────────────────────────────────────

function Accordion({ categories }: { categories: StackCategory[] }) {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <div style={{ borderTop: '1px solid #D4CCC6' }}>
      {categories.map((cat) => (
        <div key={cat.id} style={{ borderBottom: '1px solid #D4CCC6' }}>
          <button
            onClick={() => setOpen(open === cat.id ? null : cat.id)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem 0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              fontFamily: 'var(--font-hand)',
              fontSize: '1.1rem',
              color: cat.color,
            }}
          >
            <span>{cat.label.replace('\n', ' ')}</span>
            <span style={{ fontSize: '1rem', color: '#8B7E75', fontFamily: 'var(--font-mono)', transform: open === cat.id ? 'rotate(45deg)' : undefined, transition: 'transform 0.2s' }}>+</span>
          </button>
          {open === cat.id && (
            <div style={{ paddingBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {cat.items.map((item) => (
                <span key={item.name} className="tech-chip" title={item.context}>
                  {item.name}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ── SVG MindMap ───────────────────────────────────────────────────────────────

interface HoveredItem {
  name: string
  context: string
}

export default function MindMap() {
  const [hovered, setHovered] = useState<HoveredItem | null>(null)

  return (
    <div>
      {/* Desktop SVG */}
      <div className="hidden md:block" style={{ position: 'relative' }}>
        <svg
          viewBox="0 0 1200 820"
          style={{ width: '100%', height: 'auto', display: 'block' }}
          aria-label="Technical experience stack mind map"
        >
          {/* Center node */}
          <ellipse cx={CX} cy={CY} rx={92} ry={36} fill="#F0EBE4" stroke="#C4BAB0" strokeWidth={1} />
          <text
            x={CX}
            y={CY - 5}
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontFamily: 'var(--font-serif)', fontSize: '11px', fontWeight: 400, fill: '#1A1613', letterSpacing: '-0.01em' }}
          >
            Technical Experience
          </text>
          <text
            x={CX}
            y={CY + 10}
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontFamily: 'var(--font-serif)', fontSize: '11px', fontWeight: 400, fill: '#1A1613', letterSpacing: '-0.01em' }}
          >
            Stack
          </text>

          {stackCategories.map((cat) => {
            const [catX, catY] = catPos(cat)
            const angles = leafAngles(cat)

            return (
              <g key={cat.id}>
                {/* Trunk: center → category */}
                <path
                  d={trunkPath(CX, CY, catX, catY)}
                  fill="none"
                  stroke={cat.color}
                  strokeWidth={2}
                  strokeOpacity={0.5}
                />

                {/* Category node */}
                <ellipse
                  cx={catX}
                  cy={catY}
                  rx={54}
                  ry={22}
                  fill="#FAF7F2"
                  stroke={cat.color}
                  strokeWidth={1.5}
                />
                {cat.label.split('\n').map((line, li) => (
                  <text
                    key={li}
                    x={catX}
                    y={catY + (li === 0 ? -5 : 9)}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                      fontFamily: 'var(--font-hand)',
                      fontSize: '13px',
                      fill: cat.color,
                      pointerEvents: 'none',
                    }}
                  >
                    {line}
                  </text>
                ))}

                {/* Leaves */}
                {cat.items.map((item: TechItem, i: number) => {
                  const ang = angles[i]
                  const [lx, ly] = polar(LEAF_R, ang)
                  const [tx, ty] = polar(TEXT_R, ang)
                  const anchor = textAnchor(ang)
                  const dy = textDy(ang)
                  const isHov = hovered?.name === item.name

                  return (
                    <g
                      key={item.name}
                      onMouseEnter={() => setHovered({ name: item.name, context: item.context })}
                      onMouseLeave={() => setHovered(null)}
                      style={{ cursor: 'default' }}
                    >
                      {/* Branch: category → leaf */}
                      <path
                        d={branchPath(catX, catY, lx, ly)}
                        fill="none"
                        stroke={cat.color}
                        strokeWidth={1}
                        strokeOpacity={0.35}
                      />
                      {/* Leaf dot */}
                      <circle
                        cx={lx}
                        cy={ly}
                        r={3.5}
                        fill={isHov ? cat.color : '#FAF7F2'}
                        stroke={cat.color}
                        strokeWidth={1.5}
                      />
                      {/* Label */}
                      <text
                        x={tx}
                        y={ty + dy}
                        textAnchor={anchor}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          fill: isHov ? cat.color : '#4A3F38',
                          letterSpacing: '0.01em',
                          textDecoration: isHov ? 'underline' : undefined,
                        }}
                      >
                        {item.name}
                      </text>
                    </g>
                  )
                })}
              </g>
            )
          })}
        </svg>

        {/* Tooltip bar */}
        <div
          style={{
            minHeight: '3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.5rem 0',
            borderTop: '1px solid #D4CCC6',
            marginTop: '0.5rem',
            transition: 'opacity 0.15s',
            opacity: hovered ? 1 : 0,
          }}
        >
          {hovered && (
            <>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#B8543D',
                  flexShrink: 0,
                }}
              >
                {hovered.name}
              </span>
              <span style={{ color: '#D4CCC6', fontSize: '0.75rem' }}>·</span>
              <span style={{ fontSize: '0.8125rem', color: '#8B7E75', lineHeight: 1.5 }}>
                {hovered.context}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Mobile accordion */}
      <div className="md:hidden">
        <Accordion categories={stackCategories} />
      </div>
    </div>
  )
}
