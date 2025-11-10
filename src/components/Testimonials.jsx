import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Amelia Turner',
    title: 'Head of Operations, Luma',
    quote:
      'Nexa consolidated five tools into one. Our weekly planning time dropped by 60% and the team is visibly happier.'
  },
  {
    name: 'Ravi Patel',
    title: 'CTO, Northwave',
    quote:
      'The automations are a game changer. Tasks flow seamlessly and nothing slips through the cracks anymore.'
  },
  {
    name: 'Sofia Mendes',
    title: 'Program Manager, Orbit Labs',
    quote:
      'From projects to people ops, everything lives in Nexa now. It’s the single source of truth we always needed.'
  }
]

export default function Testimonials() {
  return (
    <section className="relative border-t border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Loved by modern teams</h2>
          <p className="mt-3 text-white/70">What our customers say about using Nexa Manager every day.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-white/90">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-white/60">
                <span className="font-medium text-white">{t.name}</span> — {t.title}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
