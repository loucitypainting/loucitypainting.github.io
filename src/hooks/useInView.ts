import { useEffect, useRef, useState } from 'react'

interface Options {
  /** Fraction of the element that must be visible to trigger. */
  threshold?: number
  /** Margin around the root — negative bottom value triggers a bit early. */
  rootMargin?: string
  /** Keep the element "in view" after the first trigger (default true). */
  once?: boolean
}

/**
 * Observe an element and report when it scrolls into view.
 * Falls back to always-visible when IntersectionObserver is missing or the
 * user prefers reduced motion, so content is never hidden from those users.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
}: Options = {}) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setInView(false)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, inView }
}
