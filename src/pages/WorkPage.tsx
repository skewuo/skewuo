import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function WorkPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.25, 0.4, 0.25, 1] }
  }

  const brands = [
    {
      id: 'vard',
      client: 'Värd',
      type: 'Brand Identity',
      year: '2024',
      description: 'Premium home goods. Swedish-inspired essentials — candles, ceramics, linens. Warm minimalism, tactile, quiet luxury.',
      deliverables: ['Wordmark', 'Color System', 'Packaging', 'Brand Guidelines']
    },
    {
      id: 'grounded',
      client: 'Grounded',
      type: 'Brand Identity',
      year: '2024',
      description: 'Functional beverage brand. Adaptogenic drinks for focus and calm. Earthy, modern apothecary aesthetic.',
      deliverables: ['Logo', 'Can Design', 'Brand Identity', 'Social Templates']
    },
    {
      id: 'the-cobbler-guy',
      client: 'The Cobbler Guy',
      type: 'Brand Identity',
      year: '2024',
      description: 'Luxury leather repair and restoration. Heritage craftsmanship meets modern service. Bold, confident, unapologetically premium.',
      deliverables: ['Logotype', 'Stationery', 'Website Design', 'Signage']
    },
  ]

  const products = [
    {
      id: 'halo',
      client: 'HALO',
      type: 'Product Design',
      year: '2024',
      description: 'Minimal LED desk lamp with a floating ring of light. Machined aluminum, USB-C, touch dimmer. Apple meets Dieter Rams.',
      deliverables: ['Industrial Design', 'CAD', 'Prototype', 'Packaging']
    },
    {
      id: 'mono',
      client: 'MONO',
      type: 'Product Design',
      year: '2024',
      description: 'Single-driver bluetooth speaker. Concrete base, fabric wrap, gesture control. Teenage Engineering meets Muji.',
      deliverables: ['Industrial Design', 'Material Selection', 'UI/UX', 'Branding']
    },
    {
      id: 'fold',
      client: 'FOLD',
      type: 'Product Design',
      year: '2024',
      description: 'Ultra-thin leather wallet with magnetic closure. 4 cards max. Forces minimalism. Architectural precision.',
      deliverables: ['Product Design', 'Material Sourcing', 'Packaging', 'Photography']
    },
  ]

  const logos = [
    {
      id: 'stillpoint',
      client: 'Stillpoint',
      type: 'Logo Design',
      year: '2024',
      description: 'Meditation app seeking a calm, centered mark. Circular, balanced, breathable negative space.',
      deliverables: ['Logo', 'App Icon', 'Guidelines']
    },
    {
      id: 'ironclad',
      client: 'Ironclad Coffee',
      type: 'Logo Design',
      year: '2024',
      description: 'Specialty coffee roasters with industrial city roots. Strong, vintage-modern badge design.',
      deliverables: ['Logo', 'Badge System', 'Packaging Applications']
    },
    {
      id: 'pathfinder',
      client: 'Pathfinder Ventures',
      type: 'Logo Design',
      year: '2024',
      description: 'Early-stage VC fund backing technical founders. Subtle, premium, abstract directional mark.',
      deliverables: ['Logo', 'Stationery', 'Pitch Deck Template']
    },
  ]

  const ProjectSection = ({ title, projects }: { title: string, projects: typeof brands }) => (
    <section className="py-20 sm:py-28">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-12"
      >
        {title}
      </motion.p>

      <div className="space-y-0 border-t border-border">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Link 
              to={`/work/${project.id}`}
              className="group block py-10 sm:py-12 border-b border-border hover:bg-secondary/30 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-3">
                  <p className="text-sm text-muted-foreground mb-1">{project.type}</p>
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight group-hover:text-muted-foreground transition-colors">
                    {project.client}
                  </h3>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.deliverables.map((d) => (
                      <span key={d} className="text-xs text-muted-foreground border border-border px-2 py-1 rounded">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-3 flex lg:justify-end items-start">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-32 sm:py-40 px-6 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            className="max-w-[900px]"
          >
            <motion.p 
              {...fadeInUp}
              className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-8"
            >
              Work
            </motion.p>

            <motion.h1 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-8"
            >
              Selected projects.
            </motion.h1>

            <motion.p 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="text-xl text-muted-foreground font-light leading-relaxed max-w-[600px]"
            >
              Brand identities, physical products, and logo design. 
              Each project approached with skeuomorphic sensibility and modern precision.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 sm:px-8 lg:px-16 pb-20">
        <div className="max-w-[1400px] mx-auto">
          <ProjectSection title="Brand Identity" projects={brands} />
          <ProjectSection title="Product Design" projects={products} />
          <ProjectSection title="Logo Design" projects={logos} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 sm:py-40 px-6 sm:px-8 lg:px-16 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-12"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight">
                Have a project?
              </h2>
              <p className="text-muted-foreground text-xl mt-6 max-w-[500px] font-light">
                Let's bring tactile design to your brand, product, or identity.
              </p>
            </div>
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-3 text-xl hover:text-muted-foreground hover:gap-5 transition-all duration-300 shrink-0"
            >
              Get in touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
