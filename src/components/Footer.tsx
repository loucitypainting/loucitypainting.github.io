import { Link } from 'react-router-dom'
import { Phone, Mail, Clock, MapPin, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink grain">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-10 lg:pt-14 pb-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/[0.08]">

          {/* Brand */}
          <div className="md:col-span-4 text-center md:text-left">
            <Link to="/" className="inline-block mb-5">
              <img src="/logo_text_white_trim.png" alt="Lou City Painting" className="h-20 md:h-16 w-auto opacity-90" />
            </Link>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs mx-auto md:mx-0 mb-7">
              Louisville's trusted painting professionals for residential and commercial
              properties. Quality craftsmanship, guaranteed.
            </p>

            {/* Social */}
            <div className="flex gap-2 mb-6 justify-center md:justify-start">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-white/[0.12] flex items-center justify-center text-white/40 hover:bg-sienna hover:border-sienna hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {['Locally Owned', 'Free Estimates', 'Satisfaction Guaranteed'].map(b => (
                <span key={b} className="px-2.5 py-1 border border-white/[0.10] text-white/35 text-[0.65rem] tracking-wide uppercase font-sans">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Services + Company */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h3 className="label-tag-light mb-5">Services</h3>
              <ul className="space-y-3">
                {[
                  { to: '/residential', label: 'Residential' },
                  { to: '/commercial',  label: 'Commercial' },
                  { to: '/residential', label: 'Cabinet Refinishing' },
                  { to: '/residential', label: 'Deck Staining' },
                  { to: '/contact',     label: 'Free Estimate' },
                ].map(({ to, label }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="font-sans text-sm text-white/40 hover:text-white/80 transition-colors link-underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="label-tag-light mb-5">Company</h3>
              <ul className="space-y-3">
                {[
                  { to: '/',        label: 'Home' },
                  { to: '/contact', label: 'Contact Us' },
                  { to: '/privacy', label: 'Privacy Policy' },
                  { to: '/terms',   label: 'Terms of Service' },
                ].map(({ to, label }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="font-sans text-sm text-white/40 hover:text-white/80 transition-colors link-underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="label-tag-light mb-5">Get in Touch</h3>
            <ul className="space-y-5">
              <li>
                <a href="tel:+15025550123" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-sienna/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-sienna/40 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-sienna-light" />
                  </div>
                  <div>
                    <p className="text-[0.65rem] text-white/30 uppercase tracking-wide font-sans mb-0.5">Phone</p>
                    <p className="text-sm text-white/60 group-hover:text-white/90 transition-colors font-sans">(502) 555-0123</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@loucitypainting.com" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-sienna/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-sienna/40 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-sienna-light" />
                  </div>
                  <div>
                    <p className="text-[0.65rem] text-white/30 uppercase tracking-wide font-sans mb-0.5">Email</p>
                    <p className="text-sm text-white/60 group-hover:text-white/90 transition-colors font-sans break-all">info@loucitypainting.com</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-sienna/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-sienna-light" />
                </div>
                <div>
                  <p className="text-[0.65rem] text-white/30 uppercase tracking-wide font-sans mb-0.5">Hours</p>
                  <p className="text-sm text-white/60 font-sans">Mon–Fri: 8AM–6PM</p>
                  <p className="text-sm text-white/60 font-sans">Sat: 9AM–4PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-sienna/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-sienna-light" />
                </div>
                <div>
                  <p className="text-[0.65rem] text-white/30 uppercase tracking-wide font-sans mb-0.5">Service Area</p>
                  <p className="text-sm text-white/60 font-sans leading-relaxed">Louisville, KY & surrounding communities</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/25">
            © {year} Lou City Painting · Louisville, KY · All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="font-sans text-xs text-white/25 hover:text-white/50 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-sans text-xs text-white/25 hover:text-white/50 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
