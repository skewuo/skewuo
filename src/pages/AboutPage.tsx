import { motion } from 'framer-motion'

function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.25, 0.4, 0.25, 1] }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-32 sm:py-40 px-6 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-[900px]"
          >
            <motion.p 
              variants={fadeInUp}
              className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-8"
            >
              About
            </motion.p>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-12"
            >
              Tactile in a flat world.
            </motion.h1>

            <motion.div variants={fadeInUp} className="space-y-8 text-xl text-muted-foreground font-light leading-relaxed">
              <p>
                Skewüo is a design studio returning to what got lost. When software went flat, 
                we lost texture. When brands went minimal, we lost warmth. When products went 
                digital-first, we lost the feeling of holding something real.
              </p>
              <p>
                We design brands, products, and objects with skeuomorphic sensibility — 
                not nostalgic imitation, but intentional texture. Design that feels like something 
                because it references something real.
              </p>
              <p>
                The name comes from skeuomorphism — design that references the physical in the digital. 
                We're bringing that philosophy forward, into brand systems, physical products, and 
                everything in between.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 sm:py-40 px-6 sm:px-8 lg:px-16 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-20"
          >
            Philosophy
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              {
                title: "Tactile",
                description: "Design should feel like something. Even on a screen, there should be weight, texture, depth. We design for the fingertips, not just the eyes."
              },
              {
                title: "Referenced",
                description: "Good design doesn't exist in a vacuum. It references the real — materials, objects, history. That's what makes it resonate."
              },
              {
                title: "Intentional",
                description: "Every choice has a reason. We don't add elements because they look nice — we add them because they mean something."
              },
              {
                title: "Warm",
                description: "Minimal doesn't mean cold. Reduction should reveal warmth, not strip it away. The best design invites you in."
              },
              {
                title: "Lasting",
                description: "We design for decades, not trends. Skeuomorphic design ages well because it's rooted in the timeless — the physical world."
              },
              {
                title: "Crafted",
                description: "The details you don't notice consciously are the ones that matter most. We obsess over what others overlook."
              }
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-light tracking-tight mb-4">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 sm:py-40 px-6 sm:px-8 lg:px-16 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-20"
          >
            Services
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {[
              {
                number: "01",
                title: "Brand Identity",
                items: ["Logo Design", "Visual Identity Systems", "Brand Guidelines", "Naming & Verbal Identity", "Brand Strategy"]
              },
              {
                number: "02",
                title: "Product Design",
                items: ["Industrial Design", "Product Concepts", "Packaging Design", "Material Selection", "Prototyping"]
              },
              {
                number: "03",
                title: "Digital Design",
                items: ["Website Design", "App Design", "Design Systems", "UI/UX Design", "Motion Design"]
              },
              {
                number: "04",
                title: "Art Direction",
                items: ["Photography Direction", "Visual Campaigns", "Content Strategy", "Creative Direction"]
              }
            ].map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <span className="text-sm text-muted-foreground">{service.number}</span>
                <h3 className="text-3xl font-light tracking-tight mt-2 mb-6">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-32 sm:py-40 px-6 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-12"
          >
            Founder
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-[700px]"
          >
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-8">
              Rob McElvenny
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Designer and founder. Previously led product and design at companies building 
                autonomous vehicles, defense software, and AI systems. Background in engineering 
                means designs are buildable, not just beautiful.
              </p>
              <p>
                Started Skewüo to return tactile design to a world gone flat. Currently focused 
                on brand identity and product design, building toward industrial design and 
                physical products.
              </p>
              <p>
                Based in the US. Available for select projects worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
