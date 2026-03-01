import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NewWorkPage() {
  const brands = [
    {
      id: 'vard',
      client: 'Värd',
      type: 'Brand Identity',
      year: '2024',
      description: 'Premium home goods. Swedish-inspired essentials — candles, ceramics, linens. Warm minimalism, tactile, quiet luxury.',
      deliverables: ['Wordmark', 'Color System', 'Packaging', 'Brand Guidelines'],
      color: 'from-amber-500/20 to-orange-500/20'
    },
    {
      id: 'grounded',
      client: 'Grounded',
      type: 'Brand Identity',
      year: '2024',
      description: 'Functional beverage brand. Adaptogenic drinks for focus and calm. Earthy, modern apothecary aesthetic.',
      deliverables: ['Logo', 'Can Design', 'Brand Identity', 'Social Templates'],
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: 'mad-kobblers',
      client: 'Mad Kobblers',
      type: 'Brand Identity',
      year: '2024',
      description: 'Luxury leather repair and restoration. Heritage craftsmanship meets modern service. Bold, confident, unapologetically premium.',
      deliverables: ['Logotype', 'Stationery', 'Website Design', 'Signage'],
      color: 'from-neutral-500/20 to-stone-500/20'
    },
  ]

  const products = [
    {
      id: 'halo',
      client: 'HALO',
      type: 'Product Design',
      year: '2024',
      description: 'Minimal LED desk lamp with a floating ring of light. Machined aluminum, USB-C, touch dimmer. Apple meets Dieter Rams.',
      deliverables: ['Industrial Design', 'CAD', 'Prototype', 'Packaging'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 'mono',
      client: 'MONO',
      type: 'Product Design',
      year: '2024',
      description: 'Single-driver bluetooth speaker. Concrete base, fabric wrap, gesture control. Teenage Engineering meets Muji.',
      deliverables: ['Industrial Design', 'Material Selection', 'UI/UX', 'Branding'],
      color: 'from-slate-500/20 to-gray-500/20'
    },
    {
      id: 'fold',
      client: 'FOLD',
      type: 'Product Design',
      year: '2024',
      description: 'Ultra-thin leather wallet with magnetic closure. 4 cards max. Forces minimalism. Architectural precision.',
      deliverables: ['Product Design', 'Material Sourcing', 'Packaging', 'Photography'],
      color: 'from-orange-500/20 to-red-500/20'
    },
  ]

  const logos = [
    {
      id: 'stillpoint',
      client: 'Stillpoint',
      type: 'Logo Design',
      year: '2024',
      description: 'Meditation app seeking a calm, centered mark. Circular, balanced, breathable negative space.',
      deliverables: ['Logo', 'App Icon', 'Guidelines'],
      color: 'from-blue-500/20 to-indigo-500/20'
    },
    {
      id: 'ironclad',
      client: 'Ironclad Coffee',
      type: 'Logo Design',
      year: '2024',
      description: 'Specialty coffee roasters with industrial city roots. Strong, vintage-modern badge design.',
      deliverables: ['Logo', 'Badge System', 'Packaging Applications'],
      color: 'from-amber-500/20 to-yellow-500/20'
    },
    {
      id: 'pathfinder',
      client: 'Pathfinder Ventures',
      type: 'Logo Design',
      year: '2024',
      description: 'Early-stage VC fund backing technical founders. Subtle, premium, abstract directional mark.',
      deliverables: ['Logo', 'Stationery', 'Pitch Deck Template'],
      color: 'from-purple-500/20 to-indigo-500/20'
    },
  ]

  const ProjectSection = ({ title, projects }: { title: string, projects: typeof brands }) => (
    <section className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold mb-16"
      >
        {title}
      </motion.h2>

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
              <div className="h-full p-10 rounded-3xl border-2 border-border bg-secondary/50 hover:border-foreground/20 transition-all duration-300 cursor-pointer overflow-hidden relative">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">{project.type} · {project.year}</p>
                    <h3 className="text-4xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.client}
                    </h3>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-foreground group-hover:gap-4 transition-all duration-300">
                    <span className="font-semibold">View project</span>
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
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="text-lg text-muted-foreground">Portfolio</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              Selected{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                projects
              </span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-[800px] font-light leading-relaxed">
              Brand identities, physical products, and logo design. Each project approached with skeuomorphic sensibility and modern precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 sm:px-8 lg:px-16 pb-20">
        <div className="max-w-[1400px] mx-auto space-y-32">
          <ProjectSection title="Brand Identity" projects={brands} />
          <ProjectSection title="Product Design" projects={products} />
          <ProjectSection title="Logo Design" projects={logos} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 border-t border-border">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
              Have a project in mind?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-[600px] mx-auto">
              Let's bring tactile design to your brand, product, or identity.
            </p>
            <Link to="/contact">
              <button className="px-10 py-5 bg-foreground text-background text-xl font-semibold rounded-full hover:scale-105 transition-transform shadow-lg shadow-foreground/20">
                Get started
                <ArrowRight className="w-6 h-6 inline-block ml-2" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
