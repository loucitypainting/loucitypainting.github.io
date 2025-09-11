import ServiceCard from '../components/ServiceCard'
import { Link } from 'react-router-dom'

const ResidentialPage = () => {
  const residentialServices = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Interior Painting",
      description: "Transform your home's interior with professional painting services.",
      features: [
        "Walls, ceilings, and trim",
        "Color consultation available",
        "Premium paint options",
        "Furniture protection included"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Exterior Painting",
      description: "Protect and beautify your home's exterior with durable paint solutions.",
      features: [
        "Siding, trim, and shutters",
        "Power washing preparation",
        "Weather-resistant coatings",
        "Complete surface preparation"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      title: "Cabinet Refinishing",
      description: "Give your kitchen or bathroom a fresh look with cabinet painting and refinishing.",
      features: [
        "Kitchen cabinet painting",
        "Bathroom vanity refinishing",
        "Hardware updating options",
        "Multiple finish choices"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Deck & Fence Staining",
      description: "Protect and enhance your outdoor wood surfaces with professional staining.",
      features: [
        "Deck staining and sealing",
        "Fence painting and staining",
        "Pressure washing prep",
        "Weather protection coating"
      ]
    }
  ]

  return (
    <>
      <style>{`
        .residential-bg {
          background-image: url('/residential.webp');
          background-repeat: no-repeat;
        }
        @media (max-width: 768px) {
          .residential-bg {
            background-attachment: scroll;
            background-size: 100% auto;
            background-position: top center;
            min-height: 100vh;
          }
        }
        @media (min-width: 769px) {
          .residential-bg {
            background-attachment: fixed;
            background-size: cover;
            background-position: center center;
          }
        }
      `}</style>
      <div className="min-h-screen relative residential-bg">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-500/80 to-primary-700/80 text-white py-16 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Residential Painting Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transform your home with our comprehensive residential painting services tailored to your vision.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            Get Free Quote
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Residential Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From single room refreshes to complete home makeovers, we offer comprehensive painting solutions for every home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Simple Process
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Online</h3>
              <p className="text-gray-600">Schedule your painting consultation online or give us a call. We'll provide a detailed estimate.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">We Paint</h3>
              <p className="text-gray-600">Our professional team arrives with all supplies and transforms your home with precision.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enjoy</h3>
              <p className="text-gray-600">Relax and enjoy your beautifully painted home. We guarantee your satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

        {/* Pricing Note */}
        <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Transparent, Fair Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our pricing is based on the size of your project, materials selected, and specific services requested. 
            We provide free, no-obligation quotes for all residential painting services.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Interior Painting</h3>
              <p className="text-gray-600">Starting at $80 for a 2-bedroom home</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Exterior Painting</h3>
              <p className="text-gray-600">Starting at $150 for a 2-bedroom home</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Move In/Out</h3>
              <p className="text-gray-600">Starting at $200 for a 2-bedroom home</p>
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Spotless Home?
          </h2>
          <p className="text-xl text-white mb-8">
            Contact us today for a free quote and experience the difference professional painting makes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            Schedule Your Painting
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
        </section>
      </div>
    </div>
    </>
  )
}

export default ResidentialPage