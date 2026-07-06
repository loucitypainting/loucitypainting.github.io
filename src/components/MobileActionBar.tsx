import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'

/**
 * Sticky call / quote bar pinned to the bottom on mobile.
 * Slides in after the user scrolls past the hero, hides on the contact page
 * (where the form already is), and stays out of the way of desktop layouts.
 */
const MobileActionBar = () => {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (location.pathname === '/contact') return null

  return (
    <div className={`mobile-bar md:hidden ${visible ? 'mobile-bar-visible' : ''}`}>
      <a
        href="tel:+15025550123"
        className="flex items-center justify-center gap-2 py-4 font-sans font-semibold text-sm text-ink border-r border-ink/[0.08]"
      >
        <Phone className="w-4 h-4 text-sienna" />
        Call
      </a>
      <Link
        to="/contact"
        className="flex items-center justify-center gap-2 py-4 font-sans font-semibold text-sm text-white bg-sienna"
      >
        Free Quote <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}

export default MobileActionBar
