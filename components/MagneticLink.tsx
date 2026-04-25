'use client'
import Link from 'next/link'
import { useMagnetic } from '@/hooks/useMagnetic'

interface Props {
  href: string
  children: React.ReactNode
  strength?: number
  style?: React.CSSProperties
  className?: string
}

export default function MagneticLink({ href, children, strength = 0.25, style, className }: Props) {
  const ref = useMagnetic(strength)
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ display: 'inline-block', transition: 'transform 0.25s ease' }}
    >
      <Link href={href} style={style} className={className}>
        {children}
      </Link>
    </div>
  )
}
