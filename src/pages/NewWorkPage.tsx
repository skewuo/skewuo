import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NewWorkPage() {
  const featured = {
    id: 'the-cobbler-guy',
    client: 'The Cobbler Guy',
    type: 'AI Operating System',
    year: '2026',
    description: 'An entire luxury restoration business — AI quoting, Stripe payments, artisan pipeline, autonomous emails — built and deployed in weeks.',
    deliverables: ['Claude Vision AI', 'Stripe Payments', 'Admin CRM', 'Customer Portal', 'k8s Infrastructure'],
    color: 'from-violet-500/20 to-purple-500/20',
  }

  const brandIdentity = [
    {
      id: 'vard',
      client: 'Värd',
      type: 'Brand Identity',
      year: '2024',
      description: 'Premium home goods. Swedish-inspired essentials — candles, ceramics, linens. Warm minimalism, tactile, quiet luxury.',
      deliverables: ['Wordmark', 'Color System', 'Packaging', 'Brand Guidelines'],
      color: 'from-amber-500/20 to-orange-500/20',
    },
    {
      id: 'grounded',
      client: 'Grounded',
      type: 'Brand Identity',
      year: '2024',
      description: 'Functional beverage brand. Adaptogenic drinks for focus and calm. Earthy, modern apothecary aesthetic.',
      deliverables: ['Logo', 'Can Design', 'Brand Identity', 'Social Templates'],
      color: 'from-green-500/20 to-emerald-500/20',
    },
    {
      id: 'ironclad',
      client: 'Ironclad Coffee',
      type: 'Brand Identity',
      year: '2024',
      description: 'Specialty coffee roasters with industrial city roots. Strong, vintage-modern badge design.',
      deliverables: ['Logo', 'Badge System', 'Packaging Applications'],
      color: 'from-amber-500/20 to-yellow-500/20',
    },
  ]

  const websiteDesign = [
    {
      id: 'halo',
      client: 'HALO',
      type: 'Website Design',
      year: '2024',
      description: 'Minimal LED desk lamp with a floating ring of light. Machined aluminum, USB-C, touch dimmer. Product site built to launch.',
      deliverables: ['Landing Page', 'Design System', 'Prototype', 'Copywriting'],
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      id: 'pathfinder',
      client: 'Pathfinder Ventures',
      type: 'Website Design',
      year: '2024',
      description: 'Early-stage VC fund backing technical founders. Subtle, premium, built for credibility.',
      deliverables: ['Website', 'Logo', 'Pitch Deck Template', 'Stationery'],
      color: 'from-purple-500/20 to-indigo-500/20',
    },
  ]

  const logos = [
    {
      id: 'symphos',
      client: 'Symphos',
      type: 'Logo Design',
      year: '2024',
      description: 'Clean, confident mark for a modern brand. Built to work at every scale — from app icon to billboard.',
      deliverables: ['Logo', 'Mark', 'Guidelines'],
      color: 'from-violet-500/20 to-blue-500/20',
    },
  ]

  const appStore = [
    {
      id: 'stillpoint',
      client: 'Stillpoint',
      type: 'App Store + Brand',
      year: '2024',
      description: 'Meditation app with three App Store rejections. Fixed the design, metadata, and submission — live within 72 hours.',
      deliverables: ['App Icon', 'Screenshots', 'Metadata', 'Rejection Resolution'],
      color: 'from-blue-500/20 to-indigo-500/20',
    },
    {
      id: 'mono',
      client: 'MONO',
      type: 'App Store + Brand',
      year: '2024',
      description: 'Single-driver bluetooth speaker with companion app. Full App Store optimization alongside product launch.',
      deliverables: ['App Design', 'App Icon', 'Screenshots', 'Brand Identity'],
      color: 'from-slate-500/20 to-gray-500/20',
    },
  ]

  const ProjectSection = ({ title, projects, eyebrow }: { title: string; eyebrow: string; projects: typeof brandIdentity }) => (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-14"
      >
        <p className="text-sm text-muted-foreground tracking-widest uppercase mb-3">{eyebrow}</p>
        <h2 className="text-4xl sm:text-5xl font-bold">{title}</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Link key={project.id} to={`/work/${project.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group h-full"
            >
              <div className="h-full p-10 rounded-3xl border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-foreground/20 transition-all duration-300 cursor-pointer overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">{project.type} &middot; {project.year}</p>
                    <h3 className="text-4xl font-bold mb-4">{project.client}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.deliverables.map((d) => (
                      <span key={d} className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground">
                        {d}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 font-semibold group-hover:gap-4 transition-all duration-300">
                    <span>View project</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="mb-8">
              <span className="text-lg text-muted-foreground tracking-wide">Work</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
              Selected{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                projects.
              </span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-[760px] font-light leading-relaxed">
              Brand identities, websites, app store launches, and social campaigns. Every project approached with craft and delivered fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured — The Cobbler Guy */}
      <section className="px-6 sm:px-8 lg:px-16 pb-0">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="mb-8">
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-3">Featured</p>
          </motion.div>
          <Link to="/work/the-cobbler-guy">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-3xl border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-foreground/20 transition-all duration-500 overflow-hidden cursor-pointer p-12 mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-muted-foreground tracking-widest uppercase">Live</span>
              </div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-sm text-muted-foreground mb-3">AI Operating System · 2026</p>
                  <h3 className="text-5xl font-bold mb-5">The Cobbler Guy</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    An entire luxury restoration business orchestrated by AI.
                    Claude Vision quoting, Stripe payments, artisan pipeline,
                    autonomous emails — zero to deployed in weeks.
                  </p>
                  <div className="flex items-center gap-2 font-semibold group-hover:gap-4 transition-all duration-300">
                    <span>View case study</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { stat: '15s', label: 'AI quote generation' },
                    { stat: '50%', label: 'Deposit via Stripe' },
                    { stat: '0', label: 'Manual interventions' },
                    { stat: '∞', label: 'Scalable quotes/day' },
                  ].map(s => (
                    <div key={s.stat} className="p-5 rounded-xl border border-border bg-background/50">
                      <div className="text-3xl font-bold mb-1">{s.stat}</div>
                      <div className="text-xs text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Rest of work */}
      <section className="px-6 sm:px-8 lg:px-16 pb-20">
        <div className="max-w-[1400px] mx-auto divide-y divide-border">
          <ProjectSection title="Brand Identity" eyebrow="01" projects={brandIdentity} />
          <ProjectSection title="Website Design" eyebrow="02" projects={websiteDesign} />
          <ProjectSection title="Logo Design" eyebrow="03" projects={logos} />
          <ProjectSection title="App Store" eyebrow="04" projects={appStore} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
              Have a project in mind?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-[560px] font-light">
              If it needs to look right, work right, and think intelligently — let's talk.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background text-xl font-semibold rounded-full hover:opacity-90 transition-opacity">
                Start a project <ArrowRight className="w-6 h-6" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
