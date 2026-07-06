import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Reveal from '../components/Reveal'
import BeforeAfter from '../components/BeforeAfter'
import Gallery from '../components/Gallery'
import QuoteEstimator from '../components/QuoteEstimator'
import { Link } from 'react-router-dom'
import {
  Home,
  Building2,
  Shield,
  Users,
  Star,
  Award,
  Clock,
  Wrench,
  ArrowRight,
  Phone,
  MapPin,
  CheckCircle2,
} from 'lucide-react'

/* Feature flags — toggle these on once the business has real reviews and a
   portfolio of completed projects. Off for now (brand-new business). */
const SHOW_TESTIMONIALS = false
const SHOW_GALLERY = false

const testimonials = [
  {
    text: 'Lou City Painting transformed our home! The attention to detail and professionalism was outstanding. They completed our interior painting project on time and the results exceeded our expectations.',
    author: 'Brittany H.',
    role: 'Homeowner, St. Matthews',
    initials: 'BH',
  },
  {
    text: '5 stars! They do an excellent job and are extremely thorough and professional. The exterior paint job on our house looks amazing even after a year. Their prep work was meticulous.',
    author: 'Hilary W.',
    role: 'Homeowner, The Highlands',
    initials: 'HW',
  },
  {
    text: "We've used Lou City Painting for both our home and business. Their commercial painting team is efficient, clean, and minimally disruptive. We'll continue using their services.",
    author: 'Clay J.',
    role: 'Business Owner, Downtown',
    initials: 'CJ',
  },
]

const serviceAreas = [
  'St. Matthews', 'The Highlands', 'Jeffersontown',
  'Middletown', 'Prospect', 'Anchorage',
  'Norton Commons', 'New Albany, IN', 'Clarksville, IN',
]

const whyUs = [
  { icon: Wrench,      title: 'Premium Materials',       desc: 'We use top-quality paints and materials for lasting, beautiful results.' },
  { icon: Clock,       title: 'On Time, Every Time',     desc: 'We respect your schedule and complete projects when promised.' },
  { icon: CheckCircle2,title: '100% Satisfaction',       desc: "Not happy with the finish? We'll return and make it right — at no extra cost." },
  { icon: Users,       title: 'Skilled Painters',        desc: 'Meticulous, background-checked painters who treat your property with care.' },
  { icon: Shield,      title: 'Clean & Respectful',      desc: 'We protect your space, keep the site tidy, and clean up fully when we finish.' },
  { icon: Award,       title: 'Detail-Obsessed Prep',    desc: 'Thorough prep, patching, and priming for a flawless, long-lasting result.' },
]

const HomePage = () => {
  return (
    <>
      <Hero />

      {/* ── Services ──────────────────────────────────────── */}
      <section className="py-28 bg-cream" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <p className="label-tag mb-4">Our Services</p>
              <h2 id="services-heading" className="font-display font-black text-4xl sm:text-5xl text-ink leading-tight">
                Complete Painting<br />
                <span className="italic text-sienna">Solutions</span> for Louisville
              </h2>
            </div>
            <p className="font-sans font-light text-slate text-base max-w-sm leading-relaxed lg:text-right lg:pb-2">
              From residential refreshes to commercial transformations,
              expert craftsmanship on every project.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-5">
            <Reveal delay={60}>
              <ServiceCard
                icon={<Home className="w-5 h-5" />}
                title="Residential Painting"
                description="Transform your Louisville home with our comprehensive residential painting services — from interior walls to exterior siding throughout Kentucky."
                features={['Interior painting', 'Exterior painting', 'Cabinet refinishing', 'Deck & fence staining']}
                linkTo="/residential"
              />
            </Reveal>
            <Reveal delay={160}>
              <ServiceCard
                icon={<Building2 className="w-5 h-5" />}
                title="Commercial Painting"
                description="Professional commercial painting for Louisville businesses. We work efficiently to minimize disruption while delivering exceptional results."
                features={['Office & retail spaces', 'Industrial coatings', 'After-hours service', 'Multi-location projects']}
                linkTo="/commercial"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Before / After Showcase ───────────────────────── */}
      <section className="py-28 bg-cream-dark overflow-hidden" aria-labelledby="ba-heading">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal variant="left">
              <p className="label-tag mb-4">See the Difference</p>
              <h2 id="ba-heading" className="font-display font-black text-4xl sm:text-5xl text-ink leading-tight mb-6">
                Drag to reveal<br />
                <span className="italic text-sienna">the transformation</span>
              </h2>
              <p className="font-sans font-light text-slate text-base leading-relaxed mb-8 max-w-md">
                Tired, weathered siding becomes a crisp, protected finish that lifts your
                whole home. Grab the handle and slide to see the difference a fresh,
                professional coat makes.
              </p>
              <Link to="/contact" className="btn-ink">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>

            <Reveal variant="right" delay={120}>
              <BeforeAfter
                beforeSrc="/residential_before.webp"
                afterSrc="/residential.webp"
                beforeAlt="Faded, weathered home exterior before painting"
                afterAlt="Freshly painted, vibrant home exterior after painting"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Why Lou City — dark editorial ─────────────────── */}
      <section className="py-28 bg-ink grain" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <Reveal className="mb-16">
            <p className="label-tag-light mb-4">The Lou City Standard</p>
            <h2 id="why-heading" className="font-display font-black text-4xl sm:text-5xl text-white leading-tight">
              Why Louisville<br />
              <span className="italic text-white/30">Chooses</span> Us
            </h2>
          </Reveal>

          {/* Big award callout + feature grid */}
          <div className="grid lg:grid-cols-12 gap-6">

            {/* Large feature */}
            <div className="lg:col-span-5 bg-sienna p-8 sm:p-10 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="w-12 h-12 bg-white/15 flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight mb-4">
                  Fresh Painting, Done Right
                </h3>
                <p className="font-sans font-light text-white/70 text-sm leading-relaxed">
                  Lou City Painting brings meticulous prep, premium materials, and a
                  satisfaction guarantee to every Louisville home and business. We treat
                  your property like our own — and stand behind every finish.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-sans font-semibold text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors mt-8 link-underline"
              >
                Get Your Free Quote <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Feature grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyUs.map(({ icon: Icon, title, desc }, i) => (
                <Reveal
                  key={title}
                  delay={(i % 3) * 80}
                  className="bg-white/[0.04] border border-white/[0.08] p-5 hover:bg-white/[0.07] hover:border-white/[0.14] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-sienna flex items-center justify-center mb-4 group-hover:bg-sienna-light transition-colors">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-sans font-semibold text-white/85 text-sm mb-2">{title}</h3>
                  <p className="font-sans font-light text-white/40 text-xs leading-relaxed">{desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials (hidden until real reviews exist) ─── */}
      {SHOW_TESTIMONIALS && (
      <section className="py-28 bg-cream-dark" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <Reveal className="text-center mb-16">
            <p className="label-tag justify-center mb-4">Client Reviews</p>
            <h2 id="testimonials-heading" className="font-display font-black text-4xl sm:text-5xl text-ink">
              Louisville Loves<br />
              <span className="italic text-sienna">Our Work</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 110} className="card bg-white p-8 flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Opening quote mark */}
                <span className="font-display font-black text-7xl text-sienna/12 leading-none -mt-4 mb-1 select-none" aria-hidden="true">
                  &ldquo;
                </span>

                {/* Text */}
                <p className="font-sans font-light text-sm text-slate leading-relaxed flex-grow mb-7 -mt-2">
                  {t.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-ink/[0.07] mt-auto">
                  <div className="w-10 h-10 bg-sienna flex items-center justify-center font-display font-black text-sm text-white flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-ink text-sm">{t.author}</p>
                    <p className="font-sans text-slate-light text-xs">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ── Recent Work Gallery (hidden until portfolio exists) ─ */}
      {SHOW_GALLERY && (
      <section className="py-28 bg-cream" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="label-tag mb-4">Our Portfolio</p>
              <h2 id="gallery-heading" className="font-display font-black text-4xl sm:text-5xl text-ink leading-tight">
                Recent Work<br />
                <span className="italic text-sienna">Around Louisville</span>
              </h2>
            </div>
            <p className="font-sans font-light text-slate text-base max-w-sm leading-relaxed lg:text-right lg:pb-2">
              A look at homes and businesses we've recently transformed.
              Tap any project to see it up close.
            </p>
          </Reveal>
          <Gallery />
        </div>
      </section>
      )}

      {/* ── Instant Estimate ──────────────────────────────── */}
      <section className="py-28 bg-cream-dark" aria-labelledby="estimate-heading">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="text-center mb-12">
            <p className="label-tag justify-center mb-4">No Waiting, No Pressure</p>
            <h2 id="estimate-heading" className="font-display font-black text-4xl sm:text-5xl text-ink leading-tight">
              What Will It<br />
              <span className="italic text-sienna">Cost?</span>
            </h2>
          </Reveal>
          <Reveal variant="scale" delay={100}>
            <QuoteEstimator />
          </Reveal>
        </div>
      </section>

      {/* ── Service Areas ─────────────────────────────────── */}
      <section className="py-24 bg-cream" aria-labelledby="areas-heading">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12">

            <div className="lg:w-2/5">
              <p className="label-tag mb-4">Where We Work</p>
              <h2 id="areas-heading" className="font-display font-black text-3xl sm:text-4xl text-ink mb-5 leading-tight">
                Serving Louisville<br />& Surrounding<br />Communities
              </h2>
              <p className="font-sans font-light text-slate text-sm leading-relaxed mb-6">
                From the Highlands to the East End suburbs, we proudly serve homeowners
                and businesses throughout the greater Louisville metro.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-sans font-semibold text-xs uppercase tracking-widest text-sienna link-underline"
              >
                Check your area <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="lg:w-3/5">
              <div className="flex flex-wrap gap-2.5">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-ink/[0.08] font-sans text-sm text-ink/70 hover:border-sienna/40 hover:text-sienna transition-all duration-200 cursor-default"
                  >
                    <MapPin className="w-3 h-3 text-sienna" />
                    {area}
                  </span>
                ))}
                <span className="inline-flex items-center px-4 py-2.5 bg-sienna/10 border border-sienna/20 font-sans text-sm font-semibold text-sienna">
                  + More areas
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      {/* Reduced bottom padding: the footer directly below is the same dark
          color, so a big pb here just creates a large empty gap above the logo. */}
      <section className="pt-28 pb-12 bg-ink grain relative overflow-hidden" aria-labelledby="cta-heading">
        {/* Large faded "PAINT" background text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-display font-black text-white/[0.025] whitespace-nowrap"
            style={{ fontSize: 'clamp(6rem, 22vw, 18rem)', letterSpacing: '-0.04em' }}
          >
            LOU CITY
          </span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="label-tag-light justify-center mb-6">Ready to Get Started?</p>
          <h2
            id="cta-heading"
            className="font-display font-black text-4xl sm:text-6xl text-white mb-5 leading-none"
          >
            Transform<br />
            <span className="italic text-sienna-light">Your Space.</span>
          </h2>
          <p className="font-sans font-light text-white/45 text-base sm:text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            Tell us about your project and we'll get you a free, no-obligation estimate —
            with honest pricing and a finish we stand behind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get Free Estimate <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+15025550123" className="btn-ghost">
              <Phone className="w-4 h-4" />
              (502) 555-0123
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
