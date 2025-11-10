import { Globe, Clock, FileText } from 'lucide-react'

const steps = [
  {
    icon: Globe,
    title: 'Connect your tools',
    desc: 'Bring tasks, docs, and messages from your favorite apps in minutes.'
  },
  {
    icon: FileText,
    title: 'Standardize workflows',
    desc: 'Templates keep teams consistent while still flexible when needed.'
  },
  {
    icon: Clock,
    title: 'Track and iterate',
    desc: 'Dashboards give real-time visibility so you can ship with confidence.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative border-t border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">Onboard in less than an afternoon and keep momentum forever.</p>
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-600/20 text-fuchsia-300 ring-1 ring-inset ring-white/10">
                <Icon size={20} />
              </div>
              <p className="text-xs uppercase tracking-wide text-white/50">Step {i + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
