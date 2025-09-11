import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const testimonials = [
    {
      text: "Lou City Painting transformed our home! The attention to detail and professionalism was outstanding. They completed our interior painting project on time and the results exceeded our expectations. Highly recommend their team for any painting needs.",
      author: "Brittany H.",
      role: "Customer"
    },
    {
      text: "5 stars! They do an excellent job and are extremely thorough and professional. The exterior paint job on our house looks amazing even after a year. Their prep work was meticulous and it really shows in the final result. I cannot recommend enough.",
      author: "Hilary W.",
      role: "Customer"
    },
    {
      text: "We've used Lou City Painting for both our home and business properties. Their commercial painting team is efficient, clean, and minimally disruptive. We'll continue using their services for all our painting needs!",
      author: "Clay J.",
      role: "Customer"
    }
  ]

  return (
    <>
      <style>{`
        .hero-bg {
          background-image: url('/painting_crew.webp');
          background-repeat: no-repeat;
        }
        @media (max-width: 768px) {
          .hero-bg {
            background-attachment: scroll;
            background-size: 100% auto;
            background-position: top center;
            min-height: 100vh;
          }
        }
        @media (min-width: 769px) {
          .hero-bg {
            background-attachment: fixed;
            background-size: cover;
            background-position: center center;
          }
        }
      `}</style>
      <div className="min-h-screen relative hero-bg">
      {/* Blur overlay like the stats box */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/60 z-0"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
        <Hero />
      
      {/* Services Overview */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-1 brush-divider"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
              Complete Painting Solutions
              <span className="block text-primary-600 text-3xl md:text-4xl mt-2">for Louisville & Beyond</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              From residential refreshes to commercial transformations, we bring expertise, quality materials, and attention to detail to every project.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ServiceCard
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              }
              title="Residential House Painting Louisville"
              description="Transform your Louisville home with our comprehensive residential painting services. We handle everything from interior walls to exterior siding throughout Kentucky."
              features={[
                "Interior painting",
                "Exterior painting",
                "Cabinet refinishing",
                "Deck & fence staining"
              ]}
              linkTo="/residential"
            />
            <ServiceCard
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
                </svg>
              }
              title="Commercial Painting Louisville"
              description="Professional commercial painting services for Louisville businesses. We work efficiently to minimize disruption while delivering exceptional results."
              features={[
                "Office painting",
                "Retail spaces",
                "Industrial coatings",
                "After-hours service"
              ]}
              linkTo="/commercial"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
                The Lou City
                <span className="block text-primary-600">Difference</span>
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                When you choose Lou City Painting, you're choosing Louisville's most trusted painting professionals. Here's what sets us apart from the competition.
              </p>
              <div className="brush-divider w-full max-w-md"></div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-secondary-800 mb-2">Licensed & Insured</h3>
                  <p className="text-secondary-600 text-sm">Fully licensed and insured for your peace of mind</p>
                </div>
            
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-secondary-800 mb-2">Expert Team</h3>
                  <p className="text-secondary-600 text-sm">Professional painters with 15+ years experience</p>
                </div>
            
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-secondary-800 mb-2">Premium Materials</h3>
                  <p className="text-secondary-600 text-sm">Top-quality paints and materials for lasting results</p>
                </div>
            
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-secondary-800 mb-2">100% Guaranteed</h3>
                  <p className="text-secondary-600 text-sm">Complete satisfaction guarantee on all services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
              Client Reviews
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
              Louisville Loves
              <span className="block text-primary-600">Our Work</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Don't just take our word for it - see what our satisfied customers have to say about their Lou City Painting experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-700 relative overflow-hidden">
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform
            <span className="block text-accent-300">Your Space?</span>
          </h2>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            Join hundreds of satisfied Louisville customers who have trusted us with their painting projects. Get your free, no-obligation estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-accent-400 text-secondary-900 px-8 py-4 rounded-lg font-semibold hover:bg-accent-300 transition-colors duration-300 text-lg"
            >
              Get a Free Estimate
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/residential" 
              className="inline-flex items-center justify-center border-2 border-accent-400 text-accent-400 px-8 py-4 rounded-lg font-semibold hover:bg-accent-400 hover:text-secondary-900 transition-colors duration-300 text-lg"
            >
              View Portfolio
            </Link>
          </div>
        </div>
        
        {/* Bottom brush stroke */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="brush-divider"></div>
        </div>
      </section>
      </div>
    </div>
    </>
  )
}

export default HomePage