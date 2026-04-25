'use client'

import { useState, useEffect } from 'react'

const roles = [
  'Data & AI Consultant',
  'Power BI Developer',
  'RAG Architect',
  'Data Engineer',
  'AI Application Builder',
  'Context Engineer',
]

export default function TypingAnimation() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'erasing'>('typing')

  useEffect(() => {
    const currentRole = roles[roleIndex]

    if (phase === 'typing') {
      if (displayed.length < currentRole.length) {
        const t = setTimeout(
          () => setDisplayed(currentRole.slice(0, displayed.length + 1)),
          58
        )
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('pausing'), 1800)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'pausing') {
      const t = setTimeout(() => setPhase('erasing'), 300)
      return () => clearTimeout(t)
    }

    if (phase === 'erasing') {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setPhase('typing')
      }
    }
  }, [displayed, phase, roleIndex])

  return (
    <span style={{ color: '#B8543D' }}>
      {displayed}
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '0.85em',
          backgroundColor: '#B8543D',
          marginLeft: '2px',
          verticalAlign: 'middle',
          animation: 'blink 0.9s step-end infinite',
        }}
      />
    </span>
  )
}
