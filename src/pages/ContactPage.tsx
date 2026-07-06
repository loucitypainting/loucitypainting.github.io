import ContactForm from '../components/ContactForm'
import ReviewForm from '../components/ReviewForm'
import Reveal from '../components/Reveal'

/* The review form collects real feedback from customers — always shown.
   (Only fabricated/placeholder testimonials are hidden, on the home page.) */
const SHOW_REVIEW_FORM = true
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const hours = [
  { day: 'Monday',    time: '8:00 AM – 6:00 PM', open: true },
  { day: 'Tuesday',   time: '8:00 AM – 6:00 PM', open: true },
  { day: 'Wednesday', time: '8:00 AM – 6:00 PM', open: true },
  { day: 'Thursday',  time: '8:00 AM – 6:00 PM', open: true },
  { day: 'Friday',    time: '8:00 AM – 6:00 PM', open: true },
  { day: 'Saturday',  time: '9:00 AM – 4:00 PM', open: true },
  { day: 'Sunday',    time: 'Closed',              open: false },
]

const faqs = [
  {
    q: 'How do you determine pricing?',
    a: 'Our pricing is based on the size of your project, materials selected, and specific services requested. We provide free, detailed quotes for all services.',
  },
  {
    q: 'Do I need to be home during painting?',
    a: "You don't need to be present during exterior work. For interior painting, we can work with your schedule. Our team treats your home with care and respect throughout the project.",
  },
  {
    q: "What if I'm not satisfied with the painting?",
    a: "We guarantee your satisfaction. If you're not completely happy with our work, we'll return and touch up or repaint the areas of concern at no charge.",
  },
  {
    q: 'Do you bring your own painting supplies?',
    a: 'Yes, we bring all necessary painting supplies and equipment. We use professional-grade paints and materials that are durable and safe for your family.',
  },
]

const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

const FAQ = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-ink/[0.08] overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-cream transition-colors"
        aria-expanded={open}
      >
        <span className="font-sans font-semibold text-ink text-sm md:text-base pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-sienna flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-slate-light flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 border-t border-ink/[0.06] bg-white">
          <p className="font-sans font-light text-slate text-sm leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  )
}

const ContactPage = () => {
  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className="relative py-24 text-white overflow-hidden bg-ink grain">
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-6">
          <p className="label-tag-light justify-center mb-6">Louisville, KY</p>
          <h1 className="font-display font-black text-5xl sm:text-6xl text-white leading-none mb-2">
            Let's Talk About
          </h1>
          <h1 className="font-display font-black text-5xl sm:text-6xl italic text-sienna-light leading-none mb-8">
            Your Project
          </h1>
          <p className="font-sans font-light text-white/50 text-base max-w-md mx-auto leading-relaxed">
            Ready to transform your space? Get a free, no-obligation estimate today.
            We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Main Contact Section ───────────────────────────── */}
      <section className="py-24 bg-cream" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-10 xl:gap-16">

            {/* Form */}
            <Reveal className="lg:col-span-2">
              <ContactForm />
            </Reveal>

            {/* Sidebar */}
            <Reveal as="aside" variant="right" delay={120} className="space-y-5">
              {/* Contact details */}
              <div className="bg-white border border-ink/[0.08] p-6">
                <h2 className="font-display font-bold text-xl text-ink mb-5">Contact Information</h2>
                <ul className="space-y-4">
                  {[
                    { href: 'tel:+15025550123',            Icon: Phone,  label: 'Phone',   val: '(502) 555-0123' },
                    { href: 'mailto:info@loucitypainting.com', Icon: Mail, label: 'Email', val: 'info@loucitypainting.com' },
                  ].map(({ href, Icon, label, val }) => (
                    <li key={label}>
                      <a href={href} className="flex items-start gap-3 group">
                        <div className="w-9 h-9 bg-sienna/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-sienna/20 transition-colors">
                          <Icon className="w-4 h-4 text-sienna" />
                        </div>
                        <div>
                          <p className="font-sans text-[0.65rem] text-slate-light uppercase tracking-wide mb-0.5">{label}</p>
                          <p className="font-sans font-semibold text-sm text-ink group-hover:text-sienna transition-colors break-all">{val}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-sienna/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-sienna" />
                    </div>
                    <div>
                      <p className="font-sans text-[0.65rem] text-slate-light uppercase tracking-wide mb-0.5">Address</p>
                      <p className="font-sans font-semibold text-sm text-ink">Louisville, KY 40202</p>
                      <p className="font-sans text-xs text-slate-light">Serving all surrounding communities</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div className="bg-white border border-ink/[0.08] p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="w-4 h-4 text-sienna" />
                  <h2 className="font-display font-bold text-lg text-ink">Business Hours</h2>
                </div>
                <ul className="space-y-1.5">
                  {hours.map(({ day, time, open }) => {
                    const isToday = day === today
                    return (
                      <li
                        key={day}
                        className={`flex items-center justify-between py-1.5 border-b border-ink/[0.05] last:border-0 text-sm ${isToday ? 'font-semibold' : ''}`}
                      >
                        <span className={`flex items-center gap-1.5 font-sans ${isToday ? 'text-sienna' : 'text-slate'}`}>
                          {isToday && <span className="w-1.5 h-1.5 bg-sienna inline-block" />}
                          {day}
                        </span>
                        <span className={`font-sans text-xs ${open ? 'text-ink' : 'text-slate-light'}`}>{time}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Why choose us */}
              <div className="bg-sienna p-6">
                <h3 className="font-sans font-semibold text-white text-sm mb-4 uppercase tracking-wider">Why Choose Lou City?</h3>
                <ul className="space-y-2.5">
                  {[
                    'Free, no-obligation quotes',
                    'Dedicated professional team',
                    'Premium quality paints',
                    '100% satisfaction guarantee',
                    'Flexible scheduling options',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 font-sans text-sm text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Review Form (hidden until there are customers to ask) ─ */}
      {SHOW_REVIEW_FORM && (
      <section className="py-24 bg-ink grain" aria-labelledby="review-heading">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="label-tag-light justify-center mb-4">Share Your Experience</p>
            <h2 id="review-heading" className="font-display font-black text-3xl sm:text-4xl text-white">
              How Was Your<br />
              <span className="italic text-sienna-light">Lou City Experience?</span>
            </h2>
            <p className="font-sans font-light text-white/40 mt-3 text-sm">Your feedback helps us serve Louisville better.</p>
          </div>
          <ReviewForm />
        </div>
      </section>
      )}

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="py-24 bg-cream" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <p className="label-tag mb-4">Got Questions?</p>
            <h2 id="faq-heading" className="font-display font-black text-3xl sm:text-4xl text-ink leading-tight">
              Frequently Asked<br />
              <span className="italic text-sienna">Questions</span>
            </h2>
          </div>

          <div className="space-y-px">
            {faqs.map((faq) => (
              <FAQ key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
