import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

// Project data
const projects: Record<string, {
  client: string
  type: string
  year: string
  headline: string
  description: string[]
  deliverables: string[]
  challenge: string
  approach: string
  result: string
  color: string
  nextProject: string
}> = {
  // BRANDS
  'vard': {
    client: 'Värd',
    type: 'Brand Identity',
    year: '2024',
    headline: 'Premium home goods for intentional living.',
    description: [
      'Värd is a Swedish-inspired home essentials brand offering candles, ceramics, and linens for those who value quality over quantity.',
      'The brand needed an identity that felt warm yet minimal — tactile and inviting, but never cluttered.'
    ],
    deliverables: ['Wordmark', 'Color System', 'Packaging Design', 'Brand Guidelines', 'Photography Direction'],
    challenge: 'Create a brand identity that stands out in the crowded home goods market while maintaining the quiet, understated elegance the founders envisioned.',
    approach: 'We drew inspiration from Scandinavian design principles — function first, beauty as a byproduct. The wordmark uses a custom-drawn typeface with subtle rounded terminals, evoking warmth. The color palette centers on natural, earthy tones with a single accent color.',
    result: 'A cohesive brand system that translates seamlessly across packaging, digital, and physical retail environments. The identity feels premium without being pretentious.',
    color: 'bg-amber-50 dark:bg-amber-950/30',
    nextProject: 'grounded'
  },
  'grounded': {
    client: 'Grounded',
    type: 'Brand Identity',
    year: '2024',
    headline: 'Functional beverages for modern wellness.',
    description: [
      'Grounded creates adaptogenic drinks designed for focus and calm — sold in specialty cafes and direct-to-consumer.',
      'They needed a brand that felt earthy and authentic, not another wellness brand with hollow promises.'
    ],
    deliverables: ['Logo', 'Can Design', 'Brand Identity', 'Social Templates', 'Retail POS'],
    challenge: 'Differentiate in the crowded functional beverage space while communicating real benefits without pseudoscience.',
    approach: 'We created a modern apothecary aesthetic — matte textures, botanical illustrations, and a restrained color palette. The typography balances approachability with credibility.',
    result: 'A brand that stands out on shelf while building trust through honest, clean design. The can design became a point of differentiation in retail environments.',
    color: 'bg-green-50 dark:bg-green-950/30',
    nextProject: 'mad-kobblers'
  },
  'mad-kobblers': {
    client: 'Mad Kobblers',
    type: 'Brand Identity',
    year: '2024',
    headline: 'Luxury repair. Heritage craft.',
    description: [
      'Mad Kobblers is a luxury leather repair and restoration service — bringing worn Hermès, Chanel, and heritage pieces back to life.',
      'They needed a brand that felt as premium as the items they restore. Bold, confident, unapologetically craft-focused.'
    ],
    deliverables: ['Logotype', 'Stationery System', 'Website Design', 'Signage', 'Service Menu'],
    challenge: 'Position a repair service as luxury, not discount. Make restoration feel like an investment, not a last resort.',
    approach: 'We developed a bold typographic identity with craft-inspired details — subtle stitching motifs, rich leather tones, gold foil accents. The name itself is irreverent; the design backs it up with confidence.',
    result: 'An identity that commands premium pricing and attracts clients who value craftsmanship over convenience. The brand now sits alongside the luxury houses it services.',
    color: 'bg-neutral-100 dark:bg-neutral-900',
    nextProject: 'halo'
  },
  // PRODUCTS
  'halo': {
    client: 'HALO',
    type: 'Product Design',
    year: '2024',
    headline: 'Light, distilled to its essence.',
    description: [
      'HALO is a minimal LED desk lamp featuring a floating ring of light. No base clutter, no unnecessary controls.',
      'The goal: create a lamp that disappears when off and transforms a space when on.'
    ],
    deliverables: ['Industrial Design', 'CAD Modeling', 'Prototype Development', 'Packaging Design'],
    challenge: 'Engineer a floating ring of light that feels magical but is structurally sound and manufacturable at scale.',
    approach: 'Machined aluminum construction with hidden cable management. Touch-sensitive dimmer integrated into the stem. USB-C power for universal compatibility. Every decision reduced complexity.',
    result: 'A desk lamp that embodies the principle "good design is as little design as possible." Apple meets Dieter Rams.',
    color: 'bg-slate-50 dark:bg-slate-950/30',
    nextProject: 'mono'
  },
  'mono': {
    client: 'MONO',
    type: 'Product Design',
    year: '2024',
    headline: 'One driver. Pure sound.',
    description: [
      'MONO is a single-driver bluetooth speaker that prioritizes audio clarity over volume. Quality over quantity.',
      'The design philosophy: remove everything that isn\'t essential to the listening experience.'
    ],
    deliverables: ['Industrial Design', 'Material Selection', 'UI/UX Design', 'Brand Identity'],
    challenge: 'Create a speaker with no visible buttons that still feels intuitive to control.',
    approach: 'Concrete base for acoustic dampening and stability. Woven fabric wrap for warmth. Gesture control eliminates buttons — wave to change volume, tap to pause.',
    result: 'A speaker that feels like a sculpture when not in use and disappears when music plays. Teenage Engineering meets Muji.',
    color: 'bg-stone-100 dark:bg-stone-900',
    nextProject: 'fold'
  },
  'fold': {
    client: 'FOLD',
    type: 'Product Design',
    year: '2024',
    headline: 'Carry less. Live more.',
    description: [
      'FOLD is an ultra-thin leather wallet with magnetic closure. Four cards maximum. Forces minimalism.',
      'Not a wallet for everyone — a wallet for those who\'ve eliminated the unnecessary.'
    ],
    deliverables: ['Product Design', 'Material Sourcing', 'Packaging', 'Product Photography'],
    challenge: 'Create a wallet thin enough to forget, secure enough to trust, and beautiful enough to last decades.',
    approach: 'Full-grain leather ages gracefully. Magnetic closure is invisible but secure. Architectural construction — no stitching where it isn\'t needed.',
    result: 'A wallet that challenges the assumption that more capacity is better. Constraints breed elegance.',
    color: 'bg-orange-50 dark:bg-orange-950/30',
    nextProject: 'stillpoint'
  },
  // LOGOS
  'stillpoint': {
    client: 'Stillpoint',
    type: 'Logo Design',
    year: '2024',
    headline: 'Centered. Calm. Present.',
    description: [
      'Stillpoint is a meditation app focused on presence over performance — no streaks, no gamification, just stillness.',
      'The mark needed to embody calm without feeling clinical or spiritual.'
    ],
    deliverables: ['Logo', 'App Icon', 'Brand Guidelines'],
    challenge: 'Design a mark that feels calm and centered in a 16x16 pixel app icon.',
    approach: 'We explored circular forms with intentional negative space — the stillness is in what\'s not there. The final mark suggests a moment of pause, a breath held.',
    result: 'A logo that works at any scale and feels like a visual exhale. The app icon became the entire brand.',
    color: 'bg-blue-50 dark:bg-blue-950/30',
    nextProject: 'ironclad'
  },
  'ironclad': {
    client: 'Ironclad Coffee',
    type: 'Logo Design',
    year: '2024',
    headline: 'Strong roots. Stronger coffee.',
    description: [
      'Ironclad Coffee Roasters is a specialty coffee company with industrial city roots — heritage, craft, and no-nonsense quality.',
      'They needed a mark that honored tradition while feeling contemporary.'
    ],
    deliverables: ['Logo', 'Badge System', 'Packaging Applications'],
    challenge: 'Balance vintage craft aesthetic with modern specialty coffee positioning.',
    approach: 'We developed a badge system with a strong wordmark at its core — versatile enough for bags, cups, and merchandise. The typography is muscular but refined.',
    result: 'A logo that feels like it\'s been around for decades while still looking fresh on a minimalist coffee bag.',
    color: 'bg-amber-100 dark:bg-amber-950/30',
    nextProject: 'pathfinder'
  },
  'pathfinder': {
    client: 'Pathfinder Ventures',
    type: 'Logo Design',
    year: '2024',
    headline: 'Backing technical founders.',
    description: [
      'Pathfinder Ventures is an early-stage VC fund focused on technical founders building infrastructure and dev tools.',
      'The identity needed to signal credibility without the clichés of VC branding.'
    ],
    deliverables: ['Logo', 'Stationery', 'Pitch Deck Template'],
    challenge: 'Create a premium mark that doesn\'t rely on arrows, mountains, or other VC visual clichés.',
    approach: 'An abstract directional mark that suggests forward motion and discovery without being literal. The color palette is restrained — this brand lets portfolio companies shine.',
    result: 'A sophisticated identity that positions Pathfinder as a serious partner for technical founders, not another logo on a slide.',
    color: 'bg-indigo-50 dark:bg-indigo-950/30',
    nextProject: 'vard'
  }
}

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const project = projectId ? projects[projectId] : null

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Project not found</h1>
          <Link to="/work" className="text-muted-foreground hover:text-foreground">
            Back to work
          </Link>
        </div>
      </div>
    )
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.25, 0.4, 0.25, 1] }
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className={`py-32 sm:py-40 px-6 sm:px-8 lg:px-16 ${project.color}`}>
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            className="max-w-[900px]"
          >
            <motion.div {...fadeInUp} className="mb-8">
              <Link 
                to="/work" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to work
              </Link>
            </motion.div>

            <motion.p 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
              className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4"
            >
              {project.type} — {project.year}
            </motion.p>

            <motion.h1 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-8"
            >
              {project.client}
            </motion.h1>

            <motion.p 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
              className="text-2xl sm:text-3xl text-muted-foreground font-light leading-relaxed"
            >
              {project.headline}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Project Image Placeholder */}
      <section className="px-6 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[16/9] bg-secondary rounded-lg flex items-center justify-center -mt-20"
          >
            <span className="text-4xl text-muted-foreground/30 font-light">Project Imagery</span>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-8"
            >
              <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-8">Overview</h2>
              <div className="space-y-6 text-xl font-light leading-relaxed">
                {project.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-8">Deliverables</h2>
              <ul className="space-y-3">
                {project.deliverables.map((d, i) => (
                  <li key={i} className="text-lg">{d}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">Challenge</h3>
              <p className="text-lg font-light leading-relaxed">{project.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">Approach</h3>
              <p className="text-lg font-light leading-relaxed">{project.approach}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">Result</h3>
              <p className="text-lg font-light leading-relaxed">{project.result}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Images Placeholder */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="aspect-[4/3] bg-secondary rounded-lg flex items-center justify-center"
              >
                <span className="text-2xl text-muted-foreground/30 font-light">Image {i}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-8">Next Project</p>
            <Link 
              to={`/work/${project.nextProject}`}
              className="group inline-flex items-center gap-4"
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight group-hover:text-muted-foreground transition-colors">
                {projects[project.nextProject]?.client}
              </span>
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
