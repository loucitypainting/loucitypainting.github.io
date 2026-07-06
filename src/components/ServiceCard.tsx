import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import type { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  features?: string[]
  linkTo?: string
}

const ServiceCard = ({ icon, title, description, features, linkTo }: ServiceCardProps) => {
  return (
    <div className="card group bg-white p-7 flex flex-col h-full border-l-2 border-l-transparent hover:border-l-sienna transition-all duration-300">
      {/* Icon */}
      <div className="w-11 h-11 bg-sienna flex items-center justify-center text-white flex-shrink-0 mb-5 transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-xl text-ink mb-3 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="font-sans font-light text-sm text-slate leading-relaxed mb-5 flex-grow">
        {description}
      </p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 font-sans text-xs text-slate">
              <CheckCircle2 className="w-3.5 h-3.5 text-sienna flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* Link */}
      {linkTo && (
        <Link
          to={linkTo}
          className="inline-flex items-center gap-1.5 font-sans font-semibold text-xs uppercase tracking-widest text-sienna link-underline mt-auto"
        >
          Learn More <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      )}
    </div>
  )
}

export default ServiceCard
