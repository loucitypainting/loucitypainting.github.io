import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/painting_crew.webp')" }}
      ></div>
      
      {/* Blur overlay like the stats box */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 p-8 rounded-2xl">
            <div>
              <div className="inline-block px-4 py-2 bg-accent-400 text-secondary-900 rounded-full text-sm font-semibold mb-4">
                Louisville's Premier Painting Experts
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white">
                Transform Your Space with
                <span className="block text-accent-300">
                  Expert Painting
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl">
              Professional residential and commercial painting services throughout Louisville, Kentucky. Quality craftsmanship, premium materials, and customer satisfaction guaranteed.
            </p>
          
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-accent-400 text-secondary-900 hover:bg-accent-300 transition-colors duration-300"
              >
                Get a Free Estimate
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/residential"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-accent-400 text-accent-400 hover:bg-accent-400 hover:text-secondary-900 transition-colors duration-300"
              >
                View Our Services
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="rounded-2xl p-8 border-2 border-white/30">
              <h3 className="text-2xl font-bold text-center mb-8">Why Louisville Trusts Us</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-300 mb-2">15+</div>
                  <div className="text-sm text-gray-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-300 mb-2">500+</div>
                  <div className="text-sm text-gray-200">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-300 mb-2">100%</div>
                  <div className="text-sm text-gray-200">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-300 mb-2">24hr</div>
                  <div className="text-sm text-gray-200">Response Time</div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-center space-x-4 text-sm text-white">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Licensed & Insured
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free Estimates
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Paint brush stroke decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="brush-divider"></div>
      </div>
    </section>
  )
}

export default Hero