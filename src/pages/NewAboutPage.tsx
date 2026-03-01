import { motion } from 'framer-motion'

export default function NewAboutPage() {
  const philosophy = [
    {
      title: 'Tactile',
      description: 'Design should feel like something. Even on a screen, there should be weight, texture, depth. We design for the fingertips, not just the eyes.'
    },
    {
      title: 'Referenced',
      description: 'Good design doesn\'t exist in a vacuum. It references the real — materials, objects, history. That\'s what makes it resonate.'
    },
    {
      title: 'Intentional',
      description: 'Every choice has a reason. We don\'t add elements because they look nice — we add them because they mean something.'
    },
    {
      title: 'Warm',
      description: 'Minimal doesn\'t mean cold. Reduction should reveal warmth, not strip it away. The best design invites you in.'
    },
    {
      title: 'Lasting',
      description: 'We design for decades, not trends. Skeuomorphic design ages well because it\'s rooted in the timeless — the physical world.'
    },
    {
      title: 'Crafted',
      description: 'The details you don\'t notice consciously are the ones that matter most. We obsess over what others overlook.'
    }
  ]

  const services = [
    {
      number: '01',
      title: 'Brand Identity',
      items: ['Logo Design', 'Visual Identity Systems', 'Brand Guidelines', 'Naming & Verbal Identity', 'Brand Strategy']
    },
    {
      number: '02',
      title: 'Product Design',
      items: ['Industrial Design', 'Product Concepts', 'Packaging Design', 'Material Selection', 'Prototyping']
    },
    {
      number: '03',
      title: 'Digital Design',
      items: ['Website Design', 'App Design', 'Design Systems', 'UI/UX Design', 'Motion Design']
    },
    {
      number: '04',
      title: 'Art Direction',
      items: ['Photography Direction', 'Visual Campaigns', 'Content Strategy', 'Creative Direction']
    }
  ]

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
              <span className="text-lg text-muted-foreground">About</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-12">
              Tactile in a{' '}
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                flat world
              </span>
            </h1>
            <div className="max-w-[900px] space-y-8 text-xl text-muted-foreground font-light leading-relaxed">
              <p>
                Skewüo is a design studio returning to what got lost. When software went flat, we lost texture. When brands went minimal, we lost warmth. When products went digital-first, we lost the feeling of holding something real.
              </p>
              <p>
                We design brands, products, and objects with skeuomorphic sensibility — not nostalgic imitation, but intentional texture. Design that feels like something because it references something real.
              </p>
              <p>
                The name comes from skeuomorphism — design that references the physical in the digital. We're bringing that philosophy forward, into brand systems, physical products, and everything in between.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold mb-20"
          >
            Philosophy
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <h3 className="text-3xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold mb-20"
          >
            Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group p-10 rounded-3xl border-2 border-border bg-secondary/50 hover:border-foreground/20 transition-all duration-300"
              >
                <div className="text-sm text-muted-foreground mb-2">{service.number}</div>
                <h3 className="text-4xl font-bold mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="text-lg text-muted-foreground flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-12">Founder</h2>
            
            <div className="max-w-[800px]">
              <h3 className="text-4xl font-bold mb-8">Rob McElvenny</h3>
              <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-light">
                <p>
                  Designer and founder. Previously led product and design at companies building autonomous vehicles, defense software, and AI systems. Background in engineering means designs are buildable, not just beautiful.
                </p>
                <p>
                  Started Skewüo to return tactile design to a world gone flat. Currently focused on brand identity and product design, building toward industrial design and physical products.
                </p>
                <p>
                  Based in the US. Available for select projects worldwide.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
