import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center">
          <div className="flex flex-col items-center text-center">
            <img 
              src="/logo_text_white.png" 
              alt="Lou City Painting Logo" 
              className="h-32 w-auto mb-4 opacity-90"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              Professional residential and commercial painting services in Louisville, KY. 
              Trusted by homeowners and businesses throughout Kentucky for quality painting solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/residential" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Residential Painting
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Commercial Painting
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Get a Quote
                </Link>
              </li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start justify-center">
                <svg className="w-5 h-5 text-primary-400 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@loucitypainting.com" className="text-gray-300 hover:text-primary-400 transition-colors">
                  info@loucitypainting.com
                </a>
              </div>
              <div className="flex items-start justify-center">
                <svg className="w-5 h-5 text-primary-400 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <div className="text-gray-300">
                  <p>Mon-Fri: 8AM-6PM</p>
                  <p>Sat: 9AM-4PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Lou City Painting. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer