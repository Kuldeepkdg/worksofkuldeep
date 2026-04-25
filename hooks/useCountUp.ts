'use client'
import { useState, useEffect } from 'react'

export function useCountUp(target: string, visible: boolean, duration = 1400) {
  const numeric = parseFloat(String(target).replace(/[^0-9.]/g, '')) || 0
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!visible) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(numeric)
      return
    }
    const start = performance.now()
    let raf: number
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(numeric * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible, numeric, duration])

  const display = String(target).replace(/[0-9.]+/, (n) =>
    n.includes('.') ? value.toFixed(1) : Math.round(value).toString()
  )
  return display
}
