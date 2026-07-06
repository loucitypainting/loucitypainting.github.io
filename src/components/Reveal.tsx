import type { ElementType, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type Variant = 'up' | 'fade' | 'left' | 'right' | 'scale'

interface RevealProps {
  children: ReactNode
  /** Rendered element/tag. Defaults to a div. */
  as?: ElementType
  variant?: Variant
  /** Stagger delay in milliseconds. */
  delay?: number
  className?: string
  threshold?: number
  once?: boolean
}

const variantClass: Record<Variant, string> = {
  up: 'reveal reveal-up',
  fade: 'reveal reveal-fade',
  left: 'reveal reveal-left',
  right: 'reveal reveal-right',
  scale: 'reveal reveal-scale',
}

/**
 * Wrap any block of content to fade/slide it in as it scrolls into view.
 * Respects prefers-reduced-motion (content shows immediately).
 */
const Reveal = ({
  children,
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  threshold = 0.15,
  once = true,
}: RevealProps) => {
  const { ref, inView } = useInView<HTMLElement>({ threshold, once })

  return (
    <Tag
      ref={ref}
      className={`${variantClass[variant]} ${inView ? 'reveal-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

export default Reveal
