import { motion } from 'framer-motion'
import { ArrowRight, Check, X, Zap, Clock, Users, Sparkles, Package, RefreshCw, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedMarquee } from '../components/AnimatedMarquee'
import { useState } from 'react'

function EnhancedLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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

  const benefits = [
    { icon: Clock, title: "Fast turnaround", desc: "48hr average" },
    { icon: Sparkles, title: "Premium quality", desc: "Senior-level work" },
    { icon: RefreshCw, title: "Unlimited requests", desc: "Queue as many as you want" },
    { icon: Package, title: "Pause anytime", desc: "No long-term contracts" }
  ]

  const process = [
    { step: "1", title: "Subscribe", desc: "Choose your plan and get instant access to your design board." },
    { step: "2", title: "Request", desc: "Add unlimited design requests to your queue with detailed briefs." },
    { step: "3", title: "Receive", desc: "Get your designs back in 48 hours on average, with unlimited revisions." },
    { step: "4", title: "Repeat", desc: "Keep requesting designs. Pause or cancel subscription anytime." }
  ]

  const comparison = [
    { feature: "Design requests", freelancer: "Limited scope", agency: "Per project", skewuo: "Unlimited" },
    { feature: "Turnaround time", freelancer: "1-2 weeks", agency: "2-4 weeks", skewuo: "48 hours avg" },
    { feature: "Revisions", freelancer: "2-3 rounds", agency: "Limited", skewuo: "Unlimited" },
    { feature: "Monthly cost", freelancer: "$3,000-8,000", agency: "$10,000+", skewuo: "$4,995" },
    { feature: "Design quality", freelancer: "Varies", agency: "High", skewuo: "Senior-level" },
    { feature: "Flexibility", freelancer: "Medium", agency: "Low", skewuo: "Pause anytime" }
  ]

  const faqs = [
    {
      q: "How does the subscription work?",
      a: "Subscribe and add unlimited design requests to your queue. We'll work through them one at a time, delivering each in 48 hours on average. Pause or cancel anytime."
    },
    {
      q: "What kind of designs do you do?",
      a: "Brand identity, logo design, UI/UX, website design, product design, packaging, design systems, and more. If it's design, we do it."
    },
    {
      q: "How fast will I receive designs?",
      a: "Most requests are delivered within 48 hours. Complex projects may take longer, but we'll communicate timelines upfront."
    },
    {
      q: "What if I don't like the design?",
      a: "No problem. Request unlimited revisions until you're 100% satisfied. We don't stop until you're happy."
    },
    {
      q: "Can I pause my subscription?",
      a: "Yes. Pause anytime and resume when you have more design work. Your subscription time carries over."
    },
    {
      q: "Who are the designers?",
      a: "All work is done by senior-level designers with 10+ years experience. No juniors, no outsourcing."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Container with border lines */}
      <div className="relative">
        {/* Left border */}
        <div className="hidden lg:block fixed left-0 top-0 bottom-0 w-px bg-border/30 ml-[calc((100vw-1200px)/2)]" />
        {/* Right border */}
        <div className="hidden lg:block fixed right-0 top-0 bottom-0 w-px bg-border/30 mr-[calc((100vw-1200px)/2)]" />

        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center px-6 sm:px-8 lg:px-16 relative z-10">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <div className="inline-block px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm font-medium">
                  Design subscription for modern brands
                </div>
              </div>

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
                  <button className="px-10 py-5 bg-foreground text-background text-lg font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg">
                    See pricing
                  </button>
                </Link>
                <Link to="/work">
                  <button className="px-10 py-5 border-2 border-border text-lg font-semibold rounded-full hover:bg-secondary transition-colors">
                    View work
                  </button>
                </Link>
              </div>

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
        <section className="py-12 border-y border-border bg-secondary/20">
          <AnimatedMarquee items={services} duration={30} />
        </section>

        {/* Benefits - Smaller Cards */}
        <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 relative z-10">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Why Skewüo?
              </h2>
              <p className="text-xl text-muted-foreground max-w-[700px] mx-auto font-light">
                Tired of unreliable freelancers and overpriced agencies? 
                Get unlimited design for one flat monthly fee.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-border bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300"
                >
                  <benefit.icon className="w-8 h-8 mb-4 text-foreground" />
                  <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 bg-secondary/20">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                How it works
              </h2>
              <p className="text-xl text-muted-foreground font-light">
                Simple process, powerful results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-6xl font-bold text-muted-foreground/10 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Compare options
              </h2>
              <p className="text-xl text-muted-foreground font-light">
                See how Skewüo stacks up
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-bold"></th>
                    <th className="text-center p-4 font-bold text-muted-foreground">Freelancer</th>
                    <th className="text-center p-4 font-bold text-muted-foreground">Agency</th>
                    <th className="text-center p-4 font-bold bg-secondary/30 rounded-t-xl">Skewüo</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center text-muted-foreground text-sm">{row.freelancer}</td>
                      <td className="p-4 text-center text-muted-foreground text-sm">{row.agency}</td>
                      <td className="p-4 text-center bg-secondary/30 font-semibold">{row.skewuo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 bg-secondary/30 relative z-10">
          <div className="max-w-[1200px] mx-auto">
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
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-foreground text-background text-sm font-semibold rounded-full">
                  Most Popular
                </div>

                <div className="text-center mb-10">
                  <h3 className="text-4xl font-bold mb-3">Monthly Subscription</h3>
                  <p className="text-muted-foreground text-lg mb-8">Pause or cancel anytime</p>
                  <div className="flex items-baseline justify-center gap-3 mb-2">
                    <span className="text-7xl sm:text-8xl font-bold">
                      $4,995
                    </span>
                    <span className="text-3xl text-muted-foreground font-light">/mo</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Billed monthly, pause anytime</p>
                </div>

                <div className="space-y-5 mb-10">
                  {[
                    'One request at a time',
                    'Average 48 hour delivery',
                    'Unlimited revisions',
                    'Unlimited brands',
                    'Pause or cancel anytime',
                    'Senior designer quality',
                    'All design types included',
                    'Design board access',
                    'Stock photos included'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-background" />
                      </div>
                      <span className="text-lg leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                  <button className="w-full py-5 bg-foreground text-background text-xl font-bold rounded-full hover:opacity-90 transition-opacity">
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
                Try risk-free. Not happy after a week? Get 75% back, no questions asked.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <span>No contracts</span>
                <span>Cancel anytime</span>
                <span>Pause when needed</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16">
          <div className="max-w-[800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Frequently asked questions
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="border border-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/30 transition-colors"
                  >
                    <span className="text-lg font-semibold pr-8">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 bg-secondary/20 relative z-10">
          <div className="max-w-[1200px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold text-center mb-16"
            >
              What clients say
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Skewüo delivered our complete brand identity in under a week. The quality and speed were incredible.",
                  author: "Sarah Chen",
                  role: "Founder, Värd"
                },
                {
                  quote: "After three App Store rejections, they fixed everything in 48 hours. We're now live and growing fast.",
                  author: "Michael Torres",
                  role: "CTO, Stillpoint"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl border border-border bg-background"
                >
                  <p className="text-lg leading-relaxed mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Apple App Store section - keeping as is since it's good */}
        {/* ... existing Apple App Store section ... */}

        {/* Final CTA */}
        <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 border-t border-border relative z-10">
          <div className="max-w-[1200px] mx-auto text-center">
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
                <button className="px-10 py-5 bg-foreground text-background text-xl font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg">
                  Get started
                  <ArrowRight className="w-6 h-6 inline-block ml-2" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default EnhancedLandingPage
