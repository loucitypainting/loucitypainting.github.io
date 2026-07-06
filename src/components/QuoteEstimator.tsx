import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, Building2, PaintBucket, Shield, ArrowRight, Check } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ProjectType {
  id: string
  label: string
  icon: LucideIcon
  unitLabel: string
  unit: string
  min: number
  max: number
  step: number
  def: number
  low: number
  high: number
}

const projectTypes: ProjectType[] = [
  { id: 'interior', label: 'Interior',  icon: Home,       unitLabel: 'Approx. area to paint', unit: 'sq ft', min: 400, max: 4000, step: 100, def: 1400, low: 2.2, high: 3.8 },
  { id: 'exterior', label: 'Exterior',  icon: Shield,     unitLabel: 'Approx. area to paint', unit: 'sq ft', min: 600, max: 5000, step: 100, def: 2000, low: 1.9, high: 4.2 },
  { id: 'cabinets', label: 'Cabinets',  icon: PaintBucket,unitLabel: 'Doors & drawer fronts', unit: 'pieces', min: 5,  max: 60,   step: 1,   def: 20,   low: 60,  high: 110 },
  { id: 'commercial', label: 'Commercial', icon: Building2, unitLabel: 'Approx. floor area',  unit: 'sq ft', min: 1000, max: 20000, step: 500, def: 4000, low: 1.6, high: 3.4 },
]

interface AddOn {
  id: string
  label: string
  mult?: number
  flat?: number
}

const addOns: AddOn[] = [
  { id: 'ceilings', label: 'Ceilings included', mult: 1.15 },
  { id: 'trim',     label: 'Trim, doors & baseboards', mult: 1.12 },
  { id: 'premium',  label: 'Premium / low-VOC paint', mult: 1.18 },
  { id: 'consult',  label: 'Color consultation', flat: 150 },
]

const coatOptions = [
  { coats: 1, label: '1 coat', mult: 0.82 },
  { coats: 2, label: '2 coats', mult: 1 },
  { coats: 3, label: '3 coats', mult: 1.22 },
]

const money = (n: number) => {
  const rounded = Math.round(n / 25) * 25
  return '$' + rounded.toLocaleString('en-US')
}

const QuoteEstimator = () => {
  const [typeId, setTypeId] = useState('interior')
  const [size, setSize] = useState(1400)
  const [coats, setCoats] = useState(2)
  const [selected, setSelected] = useState<Set<string>>(new Set(['trim']))

  const type = projectTypes.find((t) => t.id === typeId)!

  const selectType = (t: ProjectType) => {
    setTypeId(t.id)
    setSize(t.def)
  }

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const { low, high } = useMemo(() => {
    const coatMult = coatOptions.find((c) => c.coats === coats)?.mult ?? 1
    let lo = size * type.low * coatMult
    let hi = size * type.high * coatMult
    let flat = 0
    addOns.forEach((a) => {
      if (!selected.has(a.id)) return
      if (a.mult) { lo *= a.mult; hi *= a.mult }
      if (a.flat) flat += a.flat
    })
    // sensible project minimum
    lo = Math.max(lo + flat, 250)
    hi = Math.max(hi + flat, 450)
    return { low: lo, high: hi }
  }, [size, type, coats, selected])

  return (
    <div className="bg-white border border-ink/[0.08] shadow-card-lg grid lg:grid-cols-5">
      {/* ── Controls ─────────────────────────────── */}
      <div className="lg:col-span-3 p-7 sm:p-9">
        <p className="label-tag mb-3">Instant Estimate</p>
        <h3 className="font-display font-black text-2xl sm:text-3xl text-ink leading-tight mb-8">
          Ballpark your project<br />
          <span className="italic text-sienna">in seconds</span>
        </h3>

        {/* Project type */}
        <label className="block font-sans font-semibold text-xs uppercase tracking-widest text-ink/60 mb-3">
          Project type
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {projectTypes.map((t) => {
            const active = t.id === typeId
            const Icon = t.icon
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => selectType(t)}
                className={`flex flex-col items-center gap-2 py-4 px-2 border transition-all duration-200 ${
                  active
                    ? 'bg-sienna border-sienna text-white'
                    : 'bg-white border-ink/[0.12] text-ink/60 hover:border-sienna/40 hover:text-ink'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-sans font-semibold text-xs">{t.label}</span>
              </button>
            )
          })}
        </div>

        {/* Size slider */}
        <div className="flex items-baseline justify-between mb-3">
          <label htmlFor="estimate-size" className="font-sans font-semibold text-xs uppercase tracking-widest text-ink/60">
            {type.unitLabel}
          </label>
          <span className="font-display font-bold text-lg text-sienna">
            {size.toLocaleString('en-US')} <span className="text-sm text-ink/40 font-sans font-normal">{type.unit}</span>
          </span>
        </div>
        <input
          id="estimate-size"
          type="range"
          min={type.min}
          max={type.max}
          step={type.step}
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          className="range-sienna mb-8"
          aria-label={type.unitLabel}
        />

        {/* Coats */}
        <label className="block font-sans font-semibold text-xs uppercase tracking-widest text-ink/60 mb-3">
          Number of coats
        </label>
        <div className="flex gap-2 mb-8">
          {coatOptions.map((c) => (
            <button
              key={c.coats}
              type="button"
              onClick={() => setCoats(c.coats)}
              className={`flex-1 py-2.5 border font-sans font-semibold text-sm transition-all duration-200 ${
                coats === c.coats
                  ? 'bg-ink border-ink text-white'
                  : 'bg-white border-ink/[0.12] text-ink/60 hover:border-ink/40'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Add-ons */}
        <label className="block font-sans font-semibold text-xs uppercase tracking-widest text-ink/60 mb-3">
          Add-ons
        </label>
        <div className="grid sm:grid-cols-2 gap-2">
          {addOns.map((a) => {
            const on = selected.has(a.id)
            return (
              <button
                key={a.id}
                type="button"
                onClick={() => toggle(a.id)}
                aria-pressed={on}
                className={`flex items-center gap-2.5 py-2.5 px-3 border text-left transition-all duration-200 ${
                  on
                    ? 'bg-sienna/[0.06] border-sienna/40'
                    : 'bg-white border-ink/[0.12] hover:border-ink/30'
                }`}
              >
                <span
                  className={`w-4 h-4 flex items-center justify-center flex-shrink-0 border transition-colors ${
                    on ? 'bg-sienna border-sienna text-white' : 'border-ink/25'
                  }`}
                >
                  {on && <Check className="w-3 h-3" />}
                </span>
                <span className="font-sans text-sm text-ink/80">{a.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Result ───────────────────────────────── */}
      <div className="lg:col-span-2 bg-ink grain p-7 sm:p-9 flex flex-col justify-center text-center relative">
        <p className="label-tag-light justify-center mb-4">Your Estimate</p>
        <div className="font-display font-black text-white leading-none mb-1" style={{ fontSize: 'clamp(2.25rem, 6vw, 3.25rem)' }}>
          {money(low)}
          <span className="text-white/30 mx-1.5">–</span>
          {money(high)}
        </div>
        <p className="font-sans text-white/45 text-xs mb-8">
          Estimated range for your {type.label.toLowerCase()} project
        </p>

        <Link to="/contact" className="btn-primary justify-center mb-3">
          Get an Exact Quote <ArrowRight className="w-4 h-4" />
        </Link>
        <a href="tel:+15025550123" className="btn-ghost justify-center">
          Call (502) 555-0123
        </a>

        <p className="font-sans text-white/30 text-[0.68rem] leading-relaxed mt-7">
          This is a ballpark estimate only. Final pricing depends on surface
          condition, prep work, and site details — your on-site quote is always free.
        </p>
      </div>
    </div>
  )
}

export default QuoteEstimator
