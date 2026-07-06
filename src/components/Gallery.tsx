import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './Reveal'

type Category = 'all' | 'interior' | 'exterior' | 'commercial'

interface Project {
  src: string
  title: string
  location: string
  category: Exclude<Category, 'all'>
}

/**
 * Placeholder project set derived from the site's source photos.
 * Replace each `src` with a real project photo (same filename works) and
 * update title/location to publish your own portfolio.
 */
const projects: Project[] = [
  { src: '/gallery-ext-1.webp',  title: 'Two-Story Repaint',   location: 'Norton Commons',   category: 'exterior' },
  { src: '/gallery-int-1.webp',  title: 'Open-Concept Interior', location: 'The Highlands',   category: 'interior' },
  { src: '/gallery-com-1.webp',  title: 'Retail Storefront',   location: 'Downtown',         category: 'commercial' },
  { src: '/gallery-ext-2.webp',  title: 'Porch & Entry Detail', location: 'St. Matthews',    category: 'exterior' },
  { src: '/gallery-com-2.webp',  title: 'Office Suite',        location: 'Middletown',       category: 'commercial' },
  { src: '/gallery-crew-1.webp', title: 'Full Exterior Service', location: 'Prospect',       category: 'interior' },
]

const filters: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'interior', label: 'Interior' },
  { id: 'exterior', label: 'Exterior' },
  { id: 'commercial', label: 'Commercial' },
]

const Gallery = () => {
  const [active, setActive] = useState<Category>('all')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const visible = active === 'all' ? projects : projects.filter((p) => p.category === active)

  // Lightbox keyboard controls + scroll lock
  useEffect(() => {
    if (lightbox === null) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((i) => (i === null ? i : (i + 1) % visible.length))
      if (e.key === 'ArrowLeft') setLightbox((i) => (i === null ? i : (i - 1 + visible.length) % visible.length))
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox, visible.length])

  const current = lightbox !== null ? visible[lightbox] : null

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f.id)}
            className={`px-5 py-2.5 font-sans font-semibold text-xs uppercase tracking-widest border transition-all duration-200 ${
              active === f.id
                ? 'bg-ink border-ink text-white'
                : 'bg-white border-ink/[0.12] text-ink/55 hover:border-ink/40 hover:text-ink'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((p, i) => (
          <Reveal
            key={p.src}
            variant="up"
            delay={(i % 3) * 90}
            className="group relative overflow-hidden aspect-[4/3] bg-ink text-left cursor-pointer"
          >
            <button
              type="button"
              onClick={() => setLightbox(i)}
              className="absolute inset-0 w-full h-full"
              aria-label={`View ${p.title}`}
            >
              <img
                src={p.src}
                alt={`${p.title} — ${p.location}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block font-sans text-[0.6rem] font-semibold uppercase tracking-widest text-sienna-light mb-1">
                  {p.category}
                </span>
                <h3 className="font-display font-bold text-lg text-white leading-tight">{p.title}</h3>
                <p className="font-sans text-xs text-white/55">{p.location}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="lightbox-backdrop p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? i : (i - 1 + visible.length) % visible.length)) }}
            className="absolute left-3 sm:left-6 w-11 h-11 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <figure className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={`${current.title} — ${current.location}`}
              className="w-full max-h-[78vh] object-contain shadow-card-lg"
            />
            <figcaption className="text-center mt-4">
              <h3 className="font-display font-bold text-xl text-white">{current.title}</h3>
              <p className="font-sans text-sm text-white/50">{current.location} · {current.category}</p>
            </figcaption>
          </figure>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? i : (i + 1) % visible.length)) }}
            className="absolute right-3 sm:right-6 w-11 h-11 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      )}
    </>
  )
}

export default Gallery
