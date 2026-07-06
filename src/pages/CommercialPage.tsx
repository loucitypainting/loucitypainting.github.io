import ServiceCard from '../components/ServiceCard'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import {
  Building2,
  ShoppingBag,
  Stethoscope,
  UtensilsCrossed,
  GraduationCap,
  Factory,
  Hotel,
  Dumbbell,
  Clock,
  Shield,
  Users,
  Leaf,
  ArrowRight,
  Phone,
} from 'lucide-react'

const commercialServices = [
  {
    icon: <Building2 className="w-5 h-5" />,
    title: 'Office Painting',
    description: 'Create an inspiring work environment with professional office painting services tailored to your brand.',
    features: ['Minimal business disruption', 'After-hours painting available', 'Low-odor paint options', 'Corporate color schemes'],
  },
  {
    icon: <ShoppingBag className="w-5 h-5" />,
    title: 'Retail Store Painting',
    description: 'Create an inviting retail atmosphere that attracts customers and reinforces your brand identity.',
    features: ['Brand color matching', 'Display wall treatments', 'Quick turnaround times', 'After-hours service available'],
  },
  {
    icon: <Stethoscope className="w-5 h-5" />,
    title: 'Medical Facility Painting',
    description: 'Specialized medical facility painting following strict healthcare standards for safety and compliance.',
    features: ['Anti-microbial coatings', 'Low-VOC paint options', 'Minimal odor application', 'OSHA compliant practices'],
  },
  {
    icon: <UtensilsCrossed className="w-5 h-5" />,
    title: 'Restaurant & Food Service',
    description: 'Comprehensive painting for restaurants and food service establishments with health code compliance.',
    features: ['Kitchen-safe coatings', 'Dining area ambiance', 'Health code compliant', 'Quick drying formulas'],
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: 'Educational Facilities',
    description: 'Safe, vibrant painting for schools and educational institutions that inspire learning.',
    features: ['Classroom color schemes', 'Playground equipment', 'Cafeteria murals', 'Child-safe paint products'],
  },
  {
    icon: <Factory className="w-5 h-5" />,
    title: 'Industrial & Warehouse',
    description: 'Heavy-duty painting solutions for industrial facilities and warehouses built to last.',
    features: ['Epoxy floor coatings', 'Safety line marking', 'Rust prevention coatings', 'High-durability paints'],
  },
]

const industries = [
  { name: 'Healthcare & Medical', icon: Stethoscope },
  { name: 'Education',            icon: GraduationCap },
  { name: 'Retail & Shopping',    icon: ShoppingBag },
  { name: 'Corporate Offices',    icon: Building2 },
  { name: 'Restaurants',          icon: UtensilsCrossed },
  { name: 'Manufacturing',        icon: Factory },
  { name: 'Hospitality & Hotels', icon: Hotel },
  { name: 'Fitness Centers',      icon: Dumbbell },
]

const whyStats = [
  { icon: Clock,  stat: '24/7',    label: 'Flexible Scheduling', desc: 'After-hours and weekend painting available' },
  { icon: Shield, stat: 'Free',    label: 'Detailed Quotes',     desc: 'Transparent, itemized commercial estimates' },
  { icon: Users,  stat: 'Pro',     label: 'Skilled Team',        desc: 'Background-checked, detail-focused painters' },
  { icon: Leaf,   stat: 'Low-VOC', label: 'Eco-Friendly',        desc: 'Low-odor, low-VOC options available' },
]

const CommercialPage = () => {
  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────── */}
      <>
        <style>{`
          .comm-hero-bg {
            background-image: url('/commercial.webp');
            background-size: cover;
            background-position: center 35%;
            background-repeat: no-repeat;
          }
          @media (min-width: 769px) {
            .comm-hero-bg { background-attachment: fixed; }
          }
        `}</style>

        <section className="relative min-h-[65vh] flex items-center text-white overflow-hidden grain">
          <div className="absolute inset-0 comm-hero-bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1923]/92 via-[#0f1923]/75 to-[#0f1923]/45" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 pt-28 w-full">
            <div className="max-w-2xl anim-fade-up">
              <p className="label-tag-light mb-6">Louisville, KY Businesses</p>
              <h1 className="font-display font-black text-5xl sm:text-6xl text-white leading-none mb-2">
                Commercial
              </h1>
              <h1 className="font-display font-black text-5xl sm:text-6xl italic text-white/30 leading-none mb-7">
                Painting Services
              </h1>
              <p className="font-sans font-light text-lg text-white/60 leading-relaxed mb-10 max-w-lg">
                Professional painting solutions that enhance your business image and create inspiring
                workspaces. Minimal disruption. Maximum impact.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Request a Quote <ArrowRight className="w-4 h-4" />
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
      <section className="py-28 bg-cream" aria-labelledby="comm-services-heading">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="mb-16">
            <p className="label-tag mb-4">What We Offer</p>
            <h2 id="comm-services-heading" className="font-display font-black text-4xl sm:text-5xl text-ink leading-tight">
              Our Commercial<br />
              <span className="italic text-sienna">Services</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {commercialServices.map((service, i) => (
              <Reveal key={i} delay={(i % 3) * 90}>
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

      {/* ── Industries ─────────────────────────────────────── */}
      <section className="py-28 bg-ink grain" aria-labelledby="industries-heading">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <p className="label-tag-light mb-4">Diverse Experience</p>
            <h2 id="industries-heading" className="font-display font-black text-4xl sm:text-5xl text-white leading-tight">
              Industries<br />
              <span className="italic text-sienna-light">We Serve</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map(({ name, icon: Icon }, i) => (
              <Reveal
                key={name}
                delay={(i % 4) * 70}
                className="bg-white/[0.04] border border-white/[0.08] p-6 text-center group hover:bg-white/[0.08] hover:border-sienna/30 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-sienna flex items-center justify-center mx-auto mb-4 group-hover:bg-sienna-light transition-colors">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="font-sans font-semibold text-white/70 text-sm leading-snug group-hover:text-white/90 transition-colors">{name}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Businesses Choose Us ───────────────────────── */}
      <section className="py-28 bg-cream-dark" aria-labelledby="why-comm-heading">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="text-center mb-16">
            <p className="label-tag justify-center mb-4">Trusted by Business Owners</p>
            <h2 id="why-comm-heading" className="font-display font-black text-4xl sm:text-5xl text-ink leading-tight">
              Why Businesses<br />
              <span className="italic text-sienna">Choose Us</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyStats.map(({ icon: Icon, stat, label, desc }, i) => (
              <Reveal key={label} delay={(i % 4) * 80} className="card bg-white p-7 text-center">
                <div className="w-11 h-11 bg-sienna/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-sienna" />
                </div>
                <div className="font-display font-black text-4xl text-sienna mb-1 leading-none">{stat}</div>
                <h3 className="font-sans font-semibold text-ink text-sm mb-1">{label}</h3>
                <p className="font-sans font-light text-slate-light text-xs leading-relaxed">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Custom Solutions ───────────────────────────────── */}
      {/* Reduced bottom padding: the dark footer follows directly below. */}
      <section className="pt-28 pb-12 bg-ink grain" aria-labelledby="custom-heading">
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <p className="label-tag-light justify-center mb-6">Tailored to Your Business</p>
          <h2 id="custom-heading" className="font-display font-black text-4xl sm:text-5xl text-white mb-6 leading-tight">
            Custom Painting<br />
            <span className="italic text-sienna-light">Solutions</span>
          </h2>
          <p className="font-sans font-light text-white/45 text-base mb-14 max-w-2xl mx-auto leading-relaxed">
            Every business is unique. We work with you to create a customized painting plan that fits
            your specific needs, budget, and schedule.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { title: 'One-Time Projects',    desc: 'Perfect for renovations or complete makeovers' },
              { title: 'Maintenance Contracts', desc: 'Annual touch-up agreements to keep spaces fresh' },
              { title: 'Emergency Service',    desc: '24/7 availability for urgent painting needs' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white/[0.05] border border-white/[0.10] p-6 text-left hover:bg-white/[0.08] transition-all duration-300">
                <h3 className="font-sans font-semibold text-white text-sm mb-2">{title}</h3>
                <p className="font-sans font-light text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <Link to="/contact" className="btn-primary">
            Get a Custom Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default CommercialPage
