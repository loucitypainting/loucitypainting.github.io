import { Link } from 'react-router-dom'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features?: string[]
  linkTo?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, linkTo = "/contact" }) => {
  return (
    <article className="group bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-400 p-8 h-full flex flex-col border border-primary-100 hover:border-primary-300 hover:-translate-y-2">
      <header className="flex items-center mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center text-primary-600 mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
          {icon}
        </div>
        <div className="flex-grow">
          <h3 className="text-xl lg:text-2xl font-bold text-secondary-800 group-hover:text-primary-700 transition-colors duration-300 leading-tight">
            {title}
          </h3>
        </div>
      </header>
      
      <p className="text-secondary-600 mb-6 flex-grow leading-relaxed text-base lg:text-lg">
        {description}
      </p>
      
      {features && features.length > 0 && (
        <ul className="space-y-3 mb-8" role="list">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start" role="listitem">
              <div className="w-5 h-5 bg-accent-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                <svg 
                  className="w-3 h-3 text-accent-600" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 text-sm lg:text-base leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      <footer className="mt-auto">
        <Link
          to={linkTo}
          className="group/link inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-all duration-300"
          aria-label={`Learn more about ${title} services`}
        >
          Learn More
          <svg 
            className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </footer>
    </article>
  )
}

export default ServiceCard