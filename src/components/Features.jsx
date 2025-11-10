import { Shield, Users, Workflow, ChartBar } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'SSO, audit logs, fine-grained roles, and data encryption by default.'
  },
  {
    icon: Users,
    title: 'Team alignment',
    desc: 'Keep everyone in sync with shared views, mentions, and approvals.'
  },
  {
    icon: Workflow,
    title: 'Automations',
    desc: 'Reduce manual work with triggers, rules, and reusable templates.'
  },
  {
    icon: ChartBar,
    title: 'Actionable insights',
    desc: 'Understand velocity, workload, and risks with real-time analytics.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need to lead</h2>
          <p className="mt-3 text-white/70">Built to scale from startup to enterprise with the polish your team deserves.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-400 ring-1 ring-inset ring-white/10">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
