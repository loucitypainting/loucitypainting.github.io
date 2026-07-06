import ServiceCard from '../components/ServiceCard'
import Reveal from '../components/Reveal'
import BeforeAfter from '../components/BeforeAfter'
import QuoteEstimator from '../components/QuoteEstimator'
import { Link } from 'react-router-dom'
import {
  Home,
  Shield,
  PaintBucket,
  TreePine,
  ArrowRight,
  Phone,
  ClipboardList,
  Paintbrush,
  Smile,
  BadgeCheck,
} from 'lucide-react'

const residentialServices = [
  {
    icon: <Home className="w-5 h-5" />,
    title: 'Interior Painting',
    description: "Transform your home's interior with professional painting services tailored to your style and vision.",
    features: ['Walls, ceilings & trim', 'Color consultation available', 'Premium paint options', 'Furniture protection included'],
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Exterior Painting',
    description: "Protect and beautify your home's exterior with durable, weather-resistant solutions built for Kentucky seasons.",
    features: ['Siding, trim & shutters', 'Power washing preparation', 'Weather-resistant coatings', 'Complete surface prep'],
  },
  {
    icon: <PaintBucket className="w-5 h-5" />,
    title: 'Cabinet Refinishing',
    description: 'Give your kitchen or bathroom a fresh, modern look without the cost and hassle of a full renovation.',
    features: ['Kitchen cabinet painting', 'Bathroom vanity refinishing', 'Hardware updating options', 'Multiple finish choices'],
  },
  {
    icon: <TreePine className="w-5 h-5" />,
    title: 'Deck & Fence Staining',
    description: 'Protect and enhance your outdoor wood surfaces with professional staining and sealing.',
    features: ['Deck staining & sealing', 'Fence painting & staining', 'Pressure washing prep', 'Weather protection coating'],
  },
]

const processSteps = [
  {
    num: '01',
    icon: ClipboardList,
    title: 'Free Consultation',
    desc: "Schedule your free estimate online or by phone. We'll visit your property and provide a detailed, transparent quote.",
  },
  {
    num: '02',
    icon: Paintbrush,
    title: 'We Paint',
    desc: 'Our professional crew arrives fully equipped and transforms your home with precision and care.',
  },
  {
    num: '03',
    icon: Smile,
    title: 'You Enjoy',
    desc: 'Relax and enjoy your beautifully painted home. We guarantee your complete satisfaction.',
  },
]

const ResidentialPage = () => {
  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────── */}
      <>
        <style>{`
          .res-hero-bg {
            background-image: url('/residential.webp');
            background-size: cover;
            background-position: center 40%;
            background-repeat: no-repeat;
          }
          @media (min-width: 769px) {
            .res-hero-bg { background-attachment: fixed; }
          }
        `}</style>

        <section className="relative min-h-[65vh] flex items-center text-white overflow-hidden grain">
          <div className="absolute inset-0 res-hero-bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1923]/92 via-[#0f1923]/75 to-[#0f1923]/45" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 pt-28 w-full">
            <div className="max-w-2xl anim-fade-up">
              <p className="label-tag-light mb-6">Louisville, KY</p>
              <h1 className="font-display font-black text-5xl sm:text-6xl text-white leading-none mb-2">
                Residential
              </h1>
              <h1 className="font-display font-black text-5xl sm:text-6xl italic text-white/30 leading-none mb-7">
                Painting Services
              </h1>
              <p className="font-sans font-light text-lg text-white/60 leading-relaxed mb-10 max-w-lg">
                Transform your Louisville home with our comprehensive residential painting services.
                Expert craftsmanship, premium materials, satisfaction guaranteed.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+15025550123" className="btn-ghost">
                  <Phone className="w-4 h-4" />
                  (502) 555-0123
                </a>
              </div>
            </div>
          </div>
        </section>
      </>

      {/* ── Services Grid ──────────────────────────────────── */}
      <section className="py-28 bg-cream" aria-labelledby="res-services-heading">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="mb-16">
            <p className="label-tag mb-4">What We Offer</p>
            <h2 id="res-services-heading" className="font-display font-black text-4xl sm:text-5xl text-ink leading-tight">
              Our Residential<br />
              <span className="italic text-sienna">Services</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {residentialServices.map((service, i) => (
              <Reveal key={i} delay={(i % 4) * 90}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After ─────────────────────────────────── */}
      <section className="py-28 bg-cream-dark overflow-hidden" aria-labelledby="res-ba-heading">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal variant="right" delay={120} className="lg:order-2">
              <BeforeAfter
                beforeSrc="/residential_before.webp"
                afterSrc="/residential.webp"
                beforeAlt="Faded home exterior before painting"
                afterAlt="Freshly painted home exterior after painting"
              />
            </Reveal>
            <Reveal variant="left" className="lg:order-1">
              <p className="label-tag mb-4">Real Results</p>
              <h2 id="res-ba-heading" className="font-display font-black text-4xl sm:text-5xl text-ink leading-tight mb-6">
                From weathered<br />
                <span className="italic text-sienna">to wow</span>
              </h2>
              <p className="font-sans font-light text-slate text-base leading-relaxed mb-8 max-w-md">
                Faded, chalky siding and tired trim get a full prep and premium finish
                that protects your home for years. Drag the slider to compare.
              </p>
              <Link to="/contact" className="btn-ink">
                Get My Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────── */}
      <section className="py-28 bg-ink grain" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <p className="label-tag-light mb-4">Simple & Transparent</p>
            <h2 id="process-heading" className="font-display font-black text-4xl sm:text-5xl text-white leading-tight">
              Our 3-Step<br />
              <span className="italic text-sienna-light">Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {processSteps.map(({ num, icon: Icon, title, desc }) => (
              <div key={num} className="bg-white/[0.04] border border-white/[0.08] p-8 relative overflow-hidden group hover:bg-white/[0.07] transition-all duration-300">
                <span
                  className="absolute top-4 right-6 font-display font-black text-white/[0.06] select-none"
                  style={{ fontSize: '5rem', lineHeight: 1 }}
                >
                  {num}
                </span>
                <div className="w-11 h-11 bg-sienna flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3">{title}</h3>
                <p className="font-sans font-light text-white/45 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ────────────────────────────────────────── */}
      <section className="py-28 bg-cream-dark" aria-labelledby="pricing-heading">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="label-tag justify-center mb-4">Transparent Pricing</p>
            <h2 id="pricing-heading" className="font-display font-black text-4xl sm:text-5xl text-ink leading-tight">
              Fair, Upfront<br />
              <span className="italic text-sienna">Pricing</span>
            </h2>
            <p className="font-sans font-light text-slate text-sm mt-5 max-w-md mx-auto leading-relaxed">
              Every quote is free and obligation-free. Pricing based on project size, materials, and service type.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Interior */}
            <div className="card bg-white p-8 text-center">
              <div className="w-11 h-11 bg-sienna/10 flex items-center justify-center mx-auto mb-5">
                <Home className="w-5 h-5 text-sienna" />
              </div>
              <h3 className="font-display font-bold text-xl text-ink mb-3">Interior Painting</h3>
              <div className="font-display font-black text-5xl text-sienna my-4 leading-none">
                $80<span className="text-2xl text-ink/30">+</span>
              </div>
              <p className="font-sans text-sm text-slate">starting for a 2-bedroom home</p>
            </div>

            {/* Exterior — featured */}
            <div className="bg-sienna p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-ink font-sans font-semibold text-xs uppercase tracking-widest text-white">
                  <BadgeCheck className="w-3 h-3" />
                  Most Popular
                </span>
              </div>
              <div className="w-11 h-11 bg-white/20 flex items-center justify-center mx-auto mb-5">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Exterior Painting</h3>
              <div className="font-display font-black text-5xl text-white my-4 leading-none">
                $150<span className="text-2xl text-white/40">+</span>
              </div>
              <p className="font-sans text-sm text-white/60">starting for a 2-bedroom home</p>
            </div>

            {/* Move In/Out */}
            <div className="card bg-white p-8 text-center">
              <div className="w-11 h-11 bg-sienna/10 flex items-center justify-center mx-auto mb-5">
                <Paintbrush className="w-5 h-5 text-sienna" />
              </div>
              <h3 className="font-display font-bold text-xl text-ink mb-3">Move In / Out</h3>
              <div className="font-display font-black text-5xl text-sienna my-4 leading-none">
                $200<span className="text-2xl text-ink/30">+</span>
              </div>
              <p className="font-sans text-sm text-slate">starting for a 2-bedroom home</p>
            </div>
          </div>

          <p className="text-center font-sans text-xs text-slate-light mt-8">
            All prices are starting estimates. Contact us for a precise, no-obligation quote.
          </p>
        </div>
      </section>

      {/* ── Instant Estimate ───────────────────────────────── */}
      <section className="py-28 bg-cream" aria-labelledby="res-estimate-heading">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="text-center mb-12">
            <p className="label-tag justify-center mb-4">Try It Yourself</p>
            <h2 id="res-estimate-heading" className="font-display font-black text-4xl sm:text-5xl text-ink leading-tight">
              Estimate Your<br />
              <span className="italic text-sienna">Project Cost</span>
            </h2>
          </Reveal>
          <Reveal variant="scale" delay={100}>
            <QuoteEstimator />
          </Reveal>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="py-24 bg-sienna">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4 leading-tight">
            Ready for a Beautiful Home?
          </h2>
          <p className="font-sans font-light text-white/65 text-base mb-10 max-w-md mx-auto">
            Contact us today for a free quote and experience the Lou City difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-ghost">
              Schedule Your Painting <ArrowRight className="w-4 h-4" />
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

export default ResidentialPage
