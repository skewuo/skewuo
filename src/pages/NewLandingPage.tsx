import { motion } from 'framer-motion'
import { ArrowRight, Check, Sparkles, Zap, Layers, Package } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedMarquee } from '../components/AnimatedMarquee'

function NewLandingPage() {
  const benefits = [
    {
      icon: Zap,
      title: "Fast turnaround",
      description: "Get your designs in 48 hours or less on average."
    },
    {
      icon: Sparkles,
      title: "Premium quality",
      description: "Senior-level design work, every single time."
    },
    {
      icon: Layers,
      title: "Unlimited requests",
      description: "Add as many design requests to your queue as you'd like."
    },
    {
      icon: Package,
      title: "Pause anytime",
      description: "Only pay for what you need. Pause or cancel anytime."
    }
  ]

  const services = [
    'Brand Identity',
    'Product Design',
    'Logo Design',
    'Website Design',
    'UI/UX Design',
    'Design Systems',
    'Packaging Design',
    'Typography',
    'Illustration',
    'Motion Design'
  ]

  const pricingFeatures = [
    'One request at a time',
    'Average 48 hour delivery',
    'Unlimited revisions',
    'Unlimited brands',
    'Pause or cancel anytime',
    'Senior designer quality'
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-32 px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-8">
              Design that feels{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                real
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-[900px] mx-auto mb-12 font-light">
              A design subscription for brands that want tactile, intentional work. 
              No freelancers. No agencies. Just one senior designer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="#pricing">
                <button className="px-8 py-4 bg-foreground text-background text-lg font-medium rounded-full hover:opacity-90 transition-opacity">
                  See pricing
                </button>
              </Link>
              <Link to="/work">
                <button className="px-8 py-4 border-2 border-border text-lg font-medium rounded-full hover:bg-secondary transition-colors">
                  View work
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Services */}
      <section className="py-12 border-y border-border relative overflow-hidden">
        <AnimatedMarquee items={services} duration={30} />
      </section>

      {/* Benefits Grid */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Why Skewüo?
            </h2>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              Tired of unreliable freelancers and overpriced agencies? 
              Get unlimited design for one flat monthly fee.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-border bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <benefit.icon className="w-10 h-10 mb-6 text-foreground" />
                <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 bg-secondary/30 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              One subscription. Unlimited design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[600px] mx-auto"
          >
            <div className="p-10 rounded-3xl border-2 border-border bg-background">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">Monthly</h3>
                <p className="text-muted-foreground mb-6">Pause or cancel anytime</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl sm:text-7xl font-bold">$4,995</span>
                  <span className="text-2xl text-muted-foreground">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-background" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <button className="w-full py-4 bg-foreground text-background text-lg font-semibold rounded-full hover:opacity-90 transition-opacity">
                  Get started
                  <ArrowRight className="w-5 h-5 inline-block ml-2" />
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-muted-foreground mt-8"
          >
            Try risk-free. Not happy after a week? Get 75% back, no questions asked.
          </motion.p>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Recent work
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              See what we've been building
            </p>
            <Link 
              to="/work"
              className="inline-flex items-center gap-2 text-lg hover:text-muted-foreground transition-colors"
            >
              View all projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Project 1', 'Project 2', 'Project 3'].map((project, index) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="aspect-[4/3] rounded-3xl bg-secondary border border-border flex items-center justify-center hover:bg-secondary/80 transition-colors cursor-pointer"
              >
                <span className="text-2xl text-muted-foreground/50">{project}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 border-t border-border relative z-10">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-[700px] mx-auto">
              Subscribe now and start requesting designs. Pause or cancel anytime.
            </p>
            <Link to="/contact">
              <button className="px-10 py-5 bg-foreground text-background text-xl font-semibold rounded-full hover:opacity-90 transition-opacity">
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

export default NewLandingPage
