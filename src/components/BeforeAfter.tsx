import { useCallback, useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'

interface BeforeAfterProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt?: string
  afterAlt?: string
  /** Aspect ratio, e.g. "3/2". Defaults to 3/2. */
  ratio?: string
  className?: string
}

/**
 * Draggable before/after image comparison.
 * Works with pointer (mouse/touch) and keyboard (arrow keys on the handle).
 */
const BeforeAfter = ({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before',
  afterAlt = 'After',
  ratio = '3/2',
  className = '',
}: BeforeAfterProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
    setFromClientX(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    setFromClientX(e.clientX)
  }
  const onPointerUp = () => {
    dragging.current = false
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4))
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4))
    if (e.key === 'Home') setPos(0)
    if (e.key === 'End') setPos(100)
  }

  return (
    <div
      ref={containerRef}
      className={`ba-slider shadow-card-lg ${className}`}
      style={{ aspectRatio: ratio, ['--pos' as string]: `${pos}%` }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* Before (full, underneath) */}
      <img src={beforeSrc} alt={beforeAlt} className="ba-img absolute inset-0" loading="lazy" />
      <span className="ba-tag left-3.5">Before</span>

      {/* After (clipped from the right) */}
      <div className="ba-after">
        <img src={afterSrc} alt={afterAlt} className="ba-img" loading="lazy" />
        <span className="ba-tag right-3.5 bg-sienna/80">After</span>
      </div>

      {/* Handle */}
      <div className="ba-handle" aria-hidden="true">
        <div
          role="slider"
          tabIndex={0}
          aria-label="Drag to compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKeyDown}
          className="ba-knob pointer-events-auto cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-sienna focus:ring-offset-2"
        >
          <MoveHorizontal className="w-5 h-5" />
        </div>
      </div>
    </div>
  )
}

export default BeforeAfter
