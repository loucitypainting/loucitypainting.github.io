import ServiceCard from '../components/ServiceCard'
import { Link } from 'react-router-dom'

const CommercialPage = () => {
  const commercialServices = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
        </svg>
      ),
      title: "Office Painting",
      description: "Professional office painting services to create an inspiring work environment.",
      features: [
        "Minimal business disruption",
        "After-hours painting available",
        "Low-odor paint options",
        "Corporate color schemes"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
        </svg>
      ),
      title: "Retail Store Painting",
      description: "Create an inviting retail atmosphere with professional store painting.",
      features: [
        "Brand color matching",
        "Display wall treatments",
        "Quick turnaround times",
        "After-hours service available"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Medical Facility Painting",
      description: "Specialized medical facility painting following healthcare standards.",
      features: [
        "Anti-microbial coatings",
        "Low-VOC paint options",
        "Minimal odor application",
        "OSHA compliant practices"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11z" clipRule="evenodd" />
        </svg>
      ),
      title: "Restaurant & Food Service",
      description: "Comprehensive painting for restaurants and food service establishments.",
      features: [
        "Kitchen-safe coatings",
        "Dining area ambiance",
        "Health code compliant paints",
        "Quick drying formulas"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z" />
        </svg>
      ),
      title: "Educational Facilities",
      description: "Safe and vibrant painting for schools and educational institutions.",
      features: [
        "Classroom color schemes",
        "Playground equipment painting",
        "Cafeteria murals",
        "Child-safe paint products"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
      ),
      title: "Industrial & Warehouse",
      description: "Heavy-duty painting for industrial facilities and warehouses.",
      features: [
        "Epoxy floor coatings",
        "Safety line marking",
        "Rust prevention coatings",
        "High-durability paints"
      ]
    }
  ]

  const industries = [
    { name: "Healthcare & Medical", icon: "🏥" },
    { name: "Education", icon: "🎓" },
    { name: "Retail & Shopping Centers", icon: "🛍️" },
    { name: "Corporate Offices", icon: "🏢" },
    { name: "Restaurants & Food Service", icon: "🍽️" },
    { name: "Manufacturing & Industrial", icon: "🏭" },
    { name: "Hospitality & Hotels", icon: "🏨" },
    { name: "Fitness Centers", icon: "💪" }
  ]

  return (
    <>
      <style>{`
        .commercial-bg {
          background-image: url('/commercial.webp');
          background-repeat: no-repeat;
        }
        @media (max-width: 768px) {
          .commercial-bg {
            background-attachment: scroll;
            background-size: 100% auto;
            background-position: top center;
            min-height: 100vh;
          }
        }
        @media (min-width: 769px) {
          .commercial-bg {
            background-attachment: fixed;
            background-size: cover;
            background-position: center center;
          }
        }
      `}</style>
      <div className="min-h-screen relative commercial-bg">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600/80 to-primary-800/80 text-white py-16 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Commercial Painting Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional painting solutions that enhance your business image and create inspiring workspaces.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            Request Quote
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
              Our Commercial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive painting solutions designed to meet the unique needs of your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
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

        {/* Industries We Serve */}
        <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Industries We Serve
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-gray-800">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Why Choose Our Commercial Services */}
        <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Businesses Choose Us
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Work around your business hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Bonded</h3>
              <p className="text-gray-600">Fully insured for your protection</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trained Professionals</h3>
              <p className="text-gray-600">Background-checked staff</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly Painting</h3>
              <p className="text-gray-600">Eco-friendly products available</p>
            </div>
          </div>
        </div>
      </section>

        {/* Custom Solutions */}
        <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Custom Painting Solutions
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Every business is unique. We work with you to create a customized painting plan that fits your specific 
            needs, budget, and schedule. From complete renovations to regular maintenance touch-ups.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">One-Time Projects</h3>
              <p className="text-gray-600">Perfect for renovations or complete makeovers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Regular Maintenance</h3>
              <p className="text-gray-600">Annual maintenance and touch-up contracts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Emergency Service</h3>
              <p className="text-gray-600">24/7 availability for urgent painting needs</p>
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Elevate Your Business Environment?
          </h2>
          <p className="text-xl text-white mb-8">
            Contact us today for a free consultation and customized quote for your commercial painting needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            Get Custom Quote
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </Link>
        </div>
        </section>
      </div>
    </div>
    </>
  )
}

export default CommercialPage