import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600/80 via-primary-700/80 to-primary-800/80 text-white overflow-hidden backdrop-blur-sm">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            Professional Painting Services
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-3 text-primary-100 animate-slide-up">
              You Can Trust
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-4xl mx-auto text-primary-50 leading-relaxed animate-fade-in opacity-90">
            Transform your Louisville, KY space with Lou City Painting. Exceptional interior and exterior painting services for residential and commercial properties throughout Kentucky with a commitment to excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-white text-gray-900 hover:bg-gray-50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-soft hover:shadow-medium"
            >
              Get a Free Quote
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/residential"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-primary-700/50 text-white hover:bg-primary-600/60 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 border-2 border-primary-400/30 backdrop-blur-sm"
            >
              Our Services
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="group text-center animate-fade-in hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-18 h-18 bg-white/10 rounded-2xl mb-6 group-hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm">
                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Licensed & Insured</h3>
              <p className="text-primary-100 leading-relaxed">Fully certified professionals with comprehensive insurance coverage</p>
            </div>
            
            <div className="group text-center animate-fade-in hover:transform hover:scale-105 transition-all duration-300" style={{animationDelay: '0.1s'}}>
              <div className="inline-flex items-center justify-center w-18 h-18 bg-white/10 rounded-2xl mb-6 group-hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm">
                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">5-Star Service</h3>
              <p className="text-primary-100 leading-relaxed">Consistently rated excellent by satisfied customers</p>
            </div>
            
            <div className="group text-center animate-fade-in hover:transform hover:scale-105 transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <div className="inline-flex items-center justify-center w-18 h-18 bg-white/10 rounded-2xl mb-6 group-hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm">
                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
              <p className="text-primary-100 leading-relaxed">Available when you need us, including evenings and weekends</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default Hero