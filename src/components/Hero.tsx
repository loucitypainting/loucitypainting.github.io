import { Link } from 'react-router-dom'
import { ArrowRight, Phone, ChevronDown } from 'lucide-react'

const stats = [
  { value: 'Free',    label: 'No-Obligation Quotes' },
  { value: '100%',    label: 'Satisfaction Guarantee' },
  { value: 'On Time', label: 'Every Project' },
  { value: 'Local',   label: 'Louisville-Based' },
]

const Hero = () => {
  return (
    <>
      <style>{`
        .hero-photo {
          position: absolute;
          inset: 0;
          background-image: url('/painting_crew.webp');
          background-size: cover;
          background-position: center 30%;
          background-repeat: no-repeat;
          /* Heavy blur + darken: keeps focus on the headline and reduces the
             photo to soft texture (also fully obscures any signage in it). */
          filter: blur(20px) brightness(0.42) saturate(0.85);
          transform: scale(1.15);
        }
        @media (min-width: 769px) {
          .hero-photo { background-position: center; }
        }
        .hero-title {
          font-size: clamp(3.75rem, 12vw, 9.5rem);
          line-height: 0.92;
          letter-spacing: -0.02em;
        }
      `}</style>

      <section className="relative min-h-screen flex flex-col grain overflow-hidden">
        {/* Blurred crew photo layer */}
        <div className="hero-photo" />
        {/* Overlay — left-heavy so headline pops */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1923]/85 via-[#0f1923]/70 to-[#0f1923]/45" />

        {/* Main content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 pt-28">

            {/* Location label */}
            <p className="label-tag-light anim-fade-in mb-8">
              Louisville, Kentucky
            </p>

            {/* Headline */}
            <div className="anim-fade-up">
              <h1 className="font-display font-black text-white hero-title">
                WE
              </h1>
              <h1 className="font-display font-black hero-title italic text-white/30 -mt-1 sm:-mt-2">
                PAINT
              </h1>
              <h1 className="font-display font-black text-white hero-title -mt-1 sm:-mt-2">
                LOUISVILLE.
              </h1>
            </div>

            {/* Sienna rule */}
            <div className="w-14 h-[2px] bg-sienna mt-8 mb-7 anim-scale-x" style={{ animationDelay: '0.45s' }} />

            {/* Subtext */}
            <p className="text-white/80 font-sans font-normal text-lg sm:text-xl max-w-md leading-relaxed anim-fade-up-2" style={{ animationDelay: '0.5s' }}>
              Professional residential and commercial painting<br className="hidden sm:block" />
              throughout the Louisville metro area.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-10 anim-fade-up-3" style={{ animationDelay: '0.65s' }}>
              <Link to="/contact" className="btn-primary">
                Get Free Estimate <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+15025550123" className="btn-ghost">
                <Phone className="w-4 h-4" />
                (502) 555-0123
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="relative z-10 flex justify-center pb-5 anim-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="flex flex-col items-center gap-1 text-white/40 anim-bounce-y">
            <span className="font-sans text-[0.6rem] tracking-[0.2em] uppercase">Scroll</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Value-prop bar */}
        <div className="relative z-10 bg-sienna">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
              {stats.map(({ value, label }) => (
                <div key={label} className="py-4 px-4 sm:px-6 text-center">
                  <div className="font-display font-black text-white text-2xl sm:text-3xl leading-none">
                    {value}
                  </div>
                  <div className="font-sans font-medium text-white/70 text-[0.65rem] uppercase tracking-widest mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
