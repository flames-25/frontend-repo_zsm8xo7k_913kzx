import { Rocket, ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-cyan-500/10" />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:grid lg:grid-cols-2 lg:gap-12 lg:py-32">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Rocket size={14} className="text-fuchsia-400" />
            <span>Introducing Nexa Manager</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Run your business, smarter and faster.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Nexa Manager centralizes projects, tasks, team collaboration, and insights in one elegant workspace. Less juggling, more doing.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500"
            >
              Start free trial
              <ArrowRight size={18} />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Play size={18} />
              See how it works
            </a>
          </div>
          <p className="mt-4 text-sm text-white/60">No credit card required · 14‑day free trial</p>
        </div>
        <div className="relative z-10 mt-16 lg:mt-0">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
            <div className="rounded-xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 p-6">
              <div className="grid grid-cols-2 gap-4 text-white/90">
                <div className="rounded-lg bg-black/30 p-4">
                  <p className="text-sm">Active Projects</p>
                  <p className="mt-2 text-3xl font-bold">24</p>
                </div>
                <div className="rounded-lg bg-black/30 p-4">
                  <p className="text-sm">Tasks Completed</p>
                  <p className="mt-2 text-3xl font-bold">1,284</p>
                </div>
                <div className="rounded-lg bg-black/30 p-4">
                  <p className="text-sm">Avg. Response</p>
                  <p className="mt-2 text-3xl font-bold">1.2h</p>
                </div>
                <div className="rounded-lg bg-black/30 p-4">
                  <p className="text-sm">Team Members</p>
                  <p className="mt-2 text-3xl font-bold">42</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
