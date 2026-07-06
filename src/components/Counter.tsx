import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'

interface CounterProps {
  /** The final numeric value to count up to. */
  to: number
  /** Text rendered before the number (e.g. "$"). */
  prefix?: string
  /** Text rendered after the number (e.g. "+", "%"). */
  suffix?: string
  /** Decimal places to display (used for values like 5.0). */
  decimals?: number
  /** Animation length in ms. */
  duration?: number
  className?: string
}

/**
 * Counts from 0 up to `to` once it scrolls into view, using an ease-out curve.
 * Honors prefers-reduced-motion by snapping straight to the final value.
 */
const Counter = ({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1600,
  className = '',
}: CounterProps) => {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 })
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    const prefersReduced = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) {
      setValue(to)
      return
    }

    let raf = 0
    let startTime: number | null = null
    const step = (now: number) => {
      if (startTime === null) startTime = now
      const progress = Math.min((now - startTime) / duration, 1)
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setValue(to * eased)
      if (progress < 1) raf = requestAnimationFrame(step)
      else setValue(to)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default Counter
