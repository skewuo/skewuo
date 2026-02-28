import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedMarquee } from '../components/AnimatedMarquee'
import { FloatingOrbs } from '../components/FloatingOrbs'

function LandingPage() {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.25, 0.4, 0.25, 1] }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const services = [
    {
      number: "01",
      title: "Brand Identity",
      description: "Strategic brand systems built to last. Logo, typography, color, voice — every element intentional."
    },
    {
      number: "02", 
      title: "Product Design",
      description: "Digital products with the rigor of industrial design. Interfaces that feel inevitable."
    },
    {
      number: "03",
      title: "Design Systems",
      description: "Scalable foundations for teams. Components, patterns, and principles that compound."
    },
    {
      number: "04",
      title: "Industrial Design",
      description: "Physical products and objects. Form, material, and function in harmony."
    }
  ]

  const selectedWork = [
    {
      id: 'vard',
      client: 'Värd',
      type: 'Brand Identity',
      year: '2024'
    },
    {
      id: 'halo',
      client: 'HALO', 
      type: 'Product Design',
      year: '2024'
    },
    {
      id: 'stillpoint',
      client: 'Stillpoint',
      type: 'Logo Design',
      year: '2024'
    }
  ]

  const marqueeItems = [
    'Brand Identity',
    'Product Design', 
    'Design Systems',
    'Industrial Design',
    'UI/UX',
    'Typography',
    'Prototyping'
  ]

  return (
    <div className="min-h-screen relative">
      {/* Floating Background Orbs */}
      <FloatingOrbs />

      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 sm:px-8 lg:px-16 relative overflow-hidden">
        {/* Background Text Marquee */}
        <div className="absolute inset-0 flex items-center pointer-events-none opacity-[0.02]">
          <AnimatedMarquee 
            items={['SKEWÜO', 'STUDIO', 'DESIGN']} 
            duration={50}
          />
        </div>

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.p 
              variants={fadeIn}
              className="text-muted-foreground text-sm tracking-[0.2em] uppercase"
            >
              Skewüo
            </motion.p>

            <motion.h1 
              variants={fadeInUp}
              className="text-[clamp(2.5rem,8vw,7rem)] font-light leading-[0.95] tracking-tight max-w-[1000px]"
            >
              Tactile design for
              <span className="block text-muted-foreground">a flat world.</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-muted-foreground max-w-[600px] font-light leading-relaxed"
            >
              Brand, product, and industrial design. 
              Skeuomorphic sensibility, modern execution.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-8">
              <Link to="/work">
                <button className="group inline-flex items-center gap-3 text-lg hover:text-muted-foreground hover:gap-5 transition-all duration-300">
                  View Work
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 sm:py-40 px-6 sm:px-8 lg:px-16 border-t border-border relative overflow-hidden">
        {/* Background Marquee */}
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <AnimatedMarquee items={marqueeItems} duration={40} />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-20"
          >
            Services
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1] 
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }
                }}
                className="group p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-border hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer"
              >
                <span className="text-sm text-muted-foreground tracking-wide">
                  {service.number}
                </span>
                <h3 className="text-3xl sm:text-4xl font-light tracking-tight mt-4 mb-6 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-32 sm:py-40 px-6 sm:px-8 lg:px-16 bg-secondary/30 relative overflow-hidden">
        {/* Subtle Background Marquee */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-[0.02]">
          <AnimatedMarquee 
            items={['SELECTED WORK', '2024', 'PORTFOLIO']} 
            duration={35}
          />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-end mb-16"
          >
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
              Selected Work
            </p>
            <Link 
              to="/work"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View All
            </Link>
          </motion.div>

          <div className="space-y-0">
            {selectedWork.map((work, index) => (
              <motion.div
                key={work.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link 
                  to={`/work/${work.id}`}
                  className="group flex items-center justify-between py-8 border-b border-border hover:px-4 transition-all duration-300"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight group-hover:text-muted-foreground transition-colors">
                      {work.client}
                    </span>
                    <span className="hidden sm:block text-muted-foreground">
                      {work.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-muted-foreground">
                      {work.year}
                    </span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 sm:py-40 px-6 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            className="max-w-[900px]"
          >
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-12">
              Philosophy
            </p>
            <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.3] tracking-tight">
              "Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects."
            </blockquote>
            <p className="text-muted-foreground mt-8 text-lg">
              — Dieter Rams
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 sm:py-40 px-6 sm:px-8 lg:px-16 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-12"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
                Let's work together.
              </h2>
              <p className="text-muted-foreground text-xl mt-6 max-w-[500px] font-light">
                Have a project in mind? We'd love to hear about it.
              </p>
            </div>
            <a 
              href="mailto:hello@studio.com"
              className="group inline-flex items-center gap-3 text-xl hover:text-muted-foreground hover:gap-5 transition-all duration-300 shrink-0"
            >
              Get in touch
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
