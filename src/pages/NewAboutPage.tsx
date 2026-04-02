import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] },
})

export default function NewAboutPage() {
  const stack = [
    { category: 'Design', items: ['Brand Identity', 'UI/UX', 'Design Systems', 'Motion', 'App Store'] },
    { category: 'Engineering', items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Postgres'] },
    { category: 'AI', items: ['Claude Vision', 'Anthropic API', 'AI Workflows', 'LLM Integration', 'Prompt Engineering'] },
    { category: 'Infrastructure', items: ['Stripe Payments', 'Docker / K8s', 'GitHub Actions', 'ArgoCD', 'Cloud Deploy'] },
  ]

  const principles = [
    {
      title: 'Ship, then refine',
      description: 'A live thing beats a perfect mockup. Get it in front of real people, then make it better. Speed and quality are not opposites — overthinking is the enemy of both.',
    },
    {
      title: 'Design is a system',
      description: 'Not decoration. Not a handoff. Design is architecture — it has to hold together at scale, in code, in motion, in a year when someone else is maintaining it.',
    },
    {
      title: 'AI should be invisible',
      description: "The best AI integration doesn't announce itself. It just makes the product smarter. The goal is a better experience — not a feature called 'Powered by AI'.",
    },
    {
      title: 'One person. Total ownership',
      description: "There's no account manager translating your brief to a designer translating it to a developer. One person holds the whole thing. That's how quality stays consistent.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="mb-8">
              <span className="text-lg text-muted-foreground tracking-wide">About</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-[8rem] font-bold tracking-tight leading-[0.88] mb-12">
              The full{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                stack.
              </span>
            </h1>
            <div className="max-w-[780px] space-y-8 text-xl text-muted-foreground font-light leading-relaxed">
              <p>
                Skewüo is Rob McElvenny. One person who designs it, builds it, and integrates
                the AI — without a handoff between any of those three things.
              </p>
              <p>
                Most founders have to choose: hire a designer who can't code, a developer who
                can't design, or pay an agency $30k for both. Skewüo is the third option —
                one subscription that covers all of it, at a fraction of the cost.
              </p>
              <p>
                The differentiator isn't speed, though that's part of it. It's coherence.
                When the same mind designs the brand, writes the component, and builds the
                AI pipeline — the product holds together in a way that collaborative handoffs
                rarely achieve.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Rob ── */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 bg-secondary/20 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

            <motion.div {...inView()} className="lg:col-span-3">
              <div className="text-sm text-muted-foreground mb-4 tracking-widest uppercase">Founder</div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-10">Rob McElvenny</h2>
              <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-light">
                <p>
                  I've been building digital products for fifteen years. I started as a designer,
                  learned to code because I was tired of watching developers break my spacing,
                  and started integrating AI into products when the tools got good enough to
                  actually matter.
                </p>
                <p>
                  At my peak I was leading product and design at companies in autonomous vehicles,
                  defense software, and AI infrastructure — earning $180k a year doing work I
                  was proud of. Then that chapter ended, and I had a choice: find another job,
                  or build something of my own.
                </p>
                <p>
                  I chose the harder thing. Skewüo is the result — a design studio that
                  actually builds what it designs, and actually integrates AI instead of
                  just mentioning it. Every client gets the full version of what I can do.
                  No junior work, no offshore execution, no bait-and-switch.
                </p>
                <p>
                  The Cobbler Guy — a luxury leather restoration platform — was the first proof
                  that this model works. Six weeks. Claude Vision AI quote engine, Stripe
                  payments, full ops dashboard. Live. <em>$2,500/mo retainer.</em>
                </p>
                <p>
                  I'm building more of these. If you have a product idea that needs to look
                  right, work right, and think intelligently — let's talk.
                </p>
              </div>
            </motion.div>

            <motion.div {...inView(0.2)} className="lg:col-span-2 lg:pt-16">
              <div className="p-8 rounded-3xl border border-border bg-background mb-6">
                <div className="text-xs text-muted-foreground mb-6 tracking-widest uppercase">Career</div>
                <div className="space-y-0 divide-y divide-border">
                  {[
                    { role: 'Autonomous Vehicles', detail: 'Product & design leadership' },
                    { role: 'Defense Software', detail: 'Systems design' },
                    { role: 'AI Infrastructure', detail: 'Product design' },
                    { role: 'Skewüo', detail: 'Founder · 2026–present' },
                  ].map(item => (
                    <div key={item.role} className="flex items-center justify-between py-4 gap-4">
                      <span className="font-semibold text-sm">{item.role}</span>
                      <span className="text-muted-foreground text-sm text-right">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl border border-border bg-background">
                <div className="text-xs text-muted-foreground mb-6 tracking-widest uppercase">Live client</div>
                <div className="mb-2">
                  <span className="font-bold text-2xl">The Cobbler Guy</span>
                  <span className="ml-3 text-sm text-muted-foreground">· Active</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Luxury leather restoration platform. Full-stack AI build — Claude Vision, Stripe, ops dashboard.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Retainer</span>
                  <span className="font-bold">$2,500/mo</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Full stack breakdown ── */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...inView()} className="mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
              What "full stack" actually means.
            </h2>
            <p className="text-2xl text-muted-foreground font-light max-w-[700px]">
              Not buzzwords. The actual tools and disciplines used on every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {stack.map((col, i) => (
              <motion.div
                key={col.category}
                {...inView(i * 0.08)}
                className="p-10 bg-background hover:bg-secondary/20 transition-colors duration-300"
              >
                <div className="text-xs text-muted-foreground mb-3 tracking-widest uppercase">{`0${i + 1}`}</div>
                <h3 className="text-2xl font-bold mb-6">{col.category}</h3>
                <ul className="space-y-3">
                  {col.items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-lg text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 bg-secondary/20 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.h2 {...inView()} className="text-5xl sm:text-6xl font-bold mb-20">
            How I work.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                {...inView(i * 0.08)}
                className="p-10 bg-secondary/20 hover:bg-secondary/40 transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 border-t border-border relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...inView()}>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 max-w-[800px]">
              Let's build something together.
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-[560px] font-light leading-relaxed">
              Design, code, and AI — all from one person who cares about the outcome.
              Subscribe and start requesting work today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background text-xl font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-foreground/20">
                  Get started
                  <ArrowRight className="w-6 h-6" />
                </button>
              </Link>
              <Link to="/work">
                <button className="inline-flex items-center gap-3 px-10 py-5 border-2 border-border text-xl font-semibold rounded-full hover:bg-secondary transition-colors">
                  See the work
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
