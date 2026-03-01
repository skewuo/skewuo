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
      {/* Hero - Fullscreen */}
      <section className="min-h-screen flex flex-col justify-center px-6 sm:px-8 lg:px-16 relative z-10 -mt-20">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {/* Small badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm font-medium">
                ✨ Design subscription for modern brands
              </div>
            </motion.div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[10rem] font-bold tracking-tight leading-[0.9] mb-8">
              Design that feels{' '}
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
                real
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-[900px] mx-auto mb-12 font-light leading-relaxed">
              A design subscription for brands that want tactile, intentional work. 
              No freelancers. No agencies. Just one senior designer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="#pricing">
                <button className="px-10 py-5 bg-foreground text-background text-lg font-semibold rounded-full hover:scale-105 transition-transform shadow-lg shadow-foreground/20">
                  See pricing
                </button>
              </Link>
              <Link to="/work">
                <button className="px-10 py-5 border-2 border-border text-lg font-semibold rounded-full hover:bg-secondary hover:border-foreground transition-all">
                  View work
                </button>
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-12 text-left max-w-3xl mx-auto"
            >
              <div>
                <div className="text-4xl font-bold mb-1">48hrs</div>
                <div className="text-muted-foreground">avg. delivery</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">100+</div>
                <div className="text-muted-foreground">projects delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">$4,995</div>
                <div className="text-muted-foreground">flat monthly rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Services */}
      <section className="py-12 border-y border-border relative overflow-hidden bg-secondary/20">
        <AnimatedMarquee items={services} duration={30} />
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-12 text-lg">
              Trusted by forward-thinking brands
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-40">
              {['Värd', 'HALO', 'Stillpoint', 'Grounded'].map((client) => (
                <div key={client} className="text-3xl font-bold">{client}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apple App Store Approval Expert */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 relative z-10 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-[1400px] mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <div className="px-4 py-2 rounded-full border border-border bg-background/80 text-sm font-medium">
                🍎 Specialized Expertise
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Apple App Store{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                approval expert
              </span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-[900px] mx-auto font-light">
              Stuck with App Store rejections? We've helped dozens of apps navigate Apple's review process and get approved.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 rounded-3xl border-2 border-border bg-background/80 backdrop-blur-sm"
            >
              <h3 className="text-3xl font-bold mb-6">Common rejection fixes</h3>
              <ul className="space-y-4">
                {[
                  '2.1 - App completeness and functionality',
                  '4.3 - Spam and duplicate apps',
                  '5.1.1 - Privacy compliance and data collection',
                  '2.3.1 - Hidden features and functionality',
                  '4.2 - Minimum functionality requirements'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-foreground" />
                    </div>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-10 rounded-3xl border-2 border-border bg-background/80 backdrop-blur-sm"
            >
              <h3 className="text-3xl font-bold mb-6">What we do</h3>
              <ul className="space-y-4">
                {[
                  'Review your rejection and identify root causes',
                  'Fix design, copy, and functionality issues',
                  'Update App Store metadata and screenshots',
                  'Craft appeal responses to Apple reviewers',
                  'Implement changes and resubmit for approval'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Sparkles className="w-4 h-4 text-foreground" />
                    </div>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-purple-500/30">
                  Fix my rejection
                  <ArrowRight className="w-6 h-6 inline-block ml-2" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-10 py-5 border-2 border-border text-xl font-semibold rounded-full hover:bg-secondary hover:border-foreground transition-all">
                  Book a consultation
                </button>
              </Link>
            </div>
            <p className="text-muted-foreground mt-6">
              Usually resolved within 48-72 hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid - Enhanced */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 relative z-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Why Skewüo?
            </h2>
            <p className="text-2xl text-muted-foreground max-w-[800px] mx-auto font-light">
              Tired of unreliable freelancers and overpriced agencies? 
              Get unlimited design for one flat monthly fee.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative p-10 rounded-3xl border-2 border-border bg-gradient-to-br from-secondary/80 to-secondary/40 hover:border-foreground/20 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 bg-secondary/30 relative z-10 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-[1400px] mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-2xl text-muted-foreground font-light">
              One subscription. Unlimited design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[700px] mx-auto"
          >
            <div className="relative p-12 rounded-3xl border-2 border-border bg-background shadow-2xl shadow-foreground/5">
              {/* Popular badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                Most Popular
              </div>

              <div className="text-center mb-10">
                <h3 className="text-4xl font-bold mb-3">Monthly Subscription</h3>
                <p className="text-muted-foreground text-lg mb-8">Pause or cancel anytime</p>
                <div className="flex items-baseline justify-center gap-3 mb-2">
                  <span className="text-7xl sm:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    $4,995
                  </span>
                  <span className="text-3xl text-muted-foreground font-light">/mo</span>
                </div>
                <p className="text-muted-foreground text-sm">Billed monthly, pause anytime</p>
              </div>

              <div className="space-y-5 mb-10">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="text-lg leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <button className="w-full py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-purple-500/30">
                  Get started
                  <ArrowRight className="w-6 h-6 inline-block ml-2" />
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12 space-y-4"
          >
            <p className="text-lg text-muted-foreground">
              ✨ Try risk-free. Not happy after a week? Get 75% back, no questions asked.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <span>✓ No contracts</span>
              <span>✓ Cancel anytime</span>
              <span>✓ Pause when needed</span>
            </div>
          </motion.div>
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
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Recent work
            </h2>
            <p className="text-2xl text-muted-foreground mb-10 font-light">
              See what we've been building
            </p>
            <Link 
              to="/work"
              className="inline-flex items-center gap-3 text-xl font-semibold hover:text-muted-foreground transition-colors group"
            >
              View all projects
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Värd', type: 'Brand Identity', color: 'from-amber-500/20 to-orange-500/20' },
              { name: 'HALO', type: 'Product Design', color: 'from-blue-500/20 to-cyan-500/20' },
              { name: 'Stillpoint', type: 'Logo Design', color: 'from-purple-500/20 to-pink-500/20' }
            ].map((project, index) => (
              <Link key={project.name} to={`/work/${project.name.toLowerCase()}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group aspect-[4/3] rounded-3xl bg-secondary border-2 border-border overflow-hidden cursor-pointer relative"
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-8">
                    <div className="transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                      <p className="text-sm text-muted-foreground mb-2">{project.type}</p>
                      <h3 className="text-4xl font-bold">{project.name}</h3>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </Link>
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
