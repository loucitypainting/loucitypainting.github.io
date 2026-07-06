import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/',            label: 'Home' },
  { path: '/residential', label: 'Residential' },
  { path: '/commercial',  label: 'Commercial' },
  { path: '/contact',     label: 'Contact' },
]

const NavBar = () => {
  const [isOpen,   setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setIsOpen(false) }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream shadow-[0_1px_0_rgba(15,25,35,0.08)] shadow-md'
            : 'bg-cream border-b border-ink/[0.06]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-20' : 'h-24'}`}>

            {/* Logo */}
            <Link to="/" viewTransition className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="Lou City Painting"
                className={`w-auto transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ path, label }) => {
                const active = location.pathname === path
                return (
                  <Link
                    key={path}
                    to={path}
                    viewTransition
                    className={`relative px-4 py-2 font-sans font-500 text-sm tracking-wide transition-colors duration-200 ${
                      active
                        ? 'text-sienna'
                        : 'text-ink/60 hover:text-ink'
                    }`}
                  >
                    {label}
                    {active && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-sienna rounded-full" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href="tel:+15025550123"
                className="flex items-center gap-1.5 font-sans font-semibold text-sm text-ink/60 hover:text-ink transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                (502) 555-0123
              </a>
              <Link to="/contact" className="btn-primary">
                Free Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 -mr-1 text-ink/70 hover:text-ink transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay ────────────────────── */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[min(340px,90vw)] bg-cream flex flex-col transition-transform duration-[350ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-ink/[0.08]">
            <img src="/logo.png" alt="Lou City Painting" className="h-14 w-auto" />
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-ink/50 hover:text-ink transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 px-6 py-8 overflow-y-auto">
            <ul className="space-y-1">
              {navLinks.map(({ path, label }) => {
                const active = location.pathname === path
                return (
                  <li key={path}>
                    <Link
                      to={path}
                      viewTransition
                      className={`block font-display font-bold text-3xl py-3 transition-colors duration-200 ${
                        active ? 'text-sienna' : 'text-ink/80 hover:text-ink'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer CTAs */}
          <div className="px-6 py-6 border-t border-ink/[0.08] space-y-3">
            <a
              href="tel:+15025550123"
              className="flex items-center justify-center gap-2 w-full py-3.5 border border-ink/20 font-sans font-semibold text-sm tracking-wide uppercase text-ink/70 hover:border-ink/50 hover:text-ink transition-all"
            >
              <Phone className="w-4 h-4" />
              (502) 555-0123
            </a>
            <Link to="/contact" className="btn-primary w-full justify-center">
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
