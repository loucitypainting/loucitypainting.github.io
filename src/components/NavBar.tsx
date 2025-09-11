import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/residential', label: 'Residential' },
    { path: '/commercial', label: 'Commercial' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <img 
                src="/logo.png" 
                alt="Lou City Painting Logo" 
                className="h-24 w-auto group-hover:scale-110 transition-transform duration-300"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 bg-gray-900 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Get Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === link.path
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block w-full text-center bg-gray-900 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors mt-2"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar