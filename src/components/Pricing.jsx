import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    cta: 'Get started',
    features: ['2 projects', 'Up to 3 members', 'Basic automations']
  },
  {
    name: 'Growth',
    price: '$19',
    period: 'per user / mo',
    cta: 'Start free trial',
    featured: true,
    features: ['Unlimited projects', 'Unlimited members', 'Advanced automations', 'Priority support']
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    period: '',
    cta: 'Contact sales',
    features: ['SSO & SCIM', 'DPA & audit logs', 'Custom SLAs']
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Choose a plan that grows with your team.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border ${plan.featured ? 'border-indigo-400/50 bg-indigo-500/10' : 'border-white/10 bg-white/5'} p-6`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-indigo-400/60 bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-200">
                  POPULAR
                </span>
              )}
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-2 text-white">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-sm text-white/60">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/80">
                    <Check size={16} className="mt-0.5 text-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-semibold ${plan.featured ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'border border-white/15 bg-white/5 text-white/90 hover:bg-white/10'} transition`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
