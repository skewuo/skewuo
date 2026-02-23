import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ResumePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }
  }

  const experiences = [
    {
      title: "Founder & Head of Product",
      company: "Hyper",
      period: "2022 — Present",
      description: "Leading product vision, strategy, and design for an early-stage startup from 0-to-1.",
      highlights: [
        "Defined product vision and roadmap, translating market opportunities into shipped features",
        "Led end-to-end product design from user research through high-fidelity prototypes",
        "Built and led cross-functional founding team across engineering, design, and business",
        "Drove fundraising efforts, pitching to investors and closing early funding"
      ]
    },
    {
      title: "Product & Platform Lead",
      company: "Defense Unicorns",
      period: "Current",
      description: "Driving product strategy for developer platforms serving enterprise and government clients.",
      highlights: [
        "Shaped product direction for platforms used by Lockheed Martin, SpaceX, NASA, and DoD",
        "Collaborated with stakeholders to translate complex requirements into intuitive solutions",
        "Led cross-functional initiatives bridging engineering teams and end-user needs",
        "Championed design thinking and user-centered approaches in enterprise contexts"
      ]
    },
    {
      title: "Product Engineer",
      company: "OPSWAT",
      period: "2021",
      description: "Bridged engineering and product, focusing on user experience and system reliability.",
      highlights: [
        "Drove product improvements based on user feedback and performance data",
        "Collaborated cross-functionally to prioritize features and reduce friction"
      ]
    },
    {
      title: "Product Engineer",
      company: "Motional",
      period: "2018 — 2021",
      description: "Built developer tools and infrastructure with a focus on user experience.",
      highlights: [
        "Designed developer workflows that improved team velocity",
        "Partnered with product and design to ship user-facing improvements",
        "Led initiatives to standardize and improve developer experience"
      ]
    }
  ]

  const skills = {
    "Product": ["Strategy", "Roadmapping", "Go-to-Market", "User Research", "A/B Testing"],
    "Design": ["Figma", "Design Systems", "Prototyping", "UX/UI", "Information Architecture"],
    "Leadership": ["Team Building", "Stakeholder Management", "Cross-functional", "Agile"],
    "Technical": ["React", "TypeScript", "Python", "System Architecture", "Data Analysis"]
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.p 
              {...fadeInUp}
              className="text-muted-foreground text-sm font-medium tracking-wide uppercase"
            >
              Resume
            </motion.p>

            <motion.h1 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
              className="text-display max-w-[900px]"
            >
              Experience
              <span className="block text-muted-foreground">& expertise.</span>
            </motion.h1>

            <motion.p 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="text-body-lg text-muted-foreground max-w-[700px]"
            >
              Product leader with a track record of building from 0-to-1. 
              I combine design thinking with technical depth to ship products people love.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-16"
          >
            <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">
              Experience
            </p>
            <h2 className="text-headline">
              Where I've led.
            </h2>
          </motion.div>

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1] 
                }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
              >
                {/* Left Column - Company & Period */}
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-32">
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-1">
                      {exp.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>
                </div>

                {/* Right Column - Description & Highlights */}
                <div className="lg:col-span-8">
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-4">
                    {exp.highlights.map((highlight, i) => (
                      <li 
                        key={i} 
                        className="flex items-start gap-4 text-foreground/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5 flex-shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-12 bg-secondary/50">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-16"
          >
            <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">
              Expertise
            </p>
            <h2 className="text-headline">
              What I bring.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1] 
                }}
              >
                <h3 className="text-lg font-semibold mb-6 tracking-tight">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((skill) => (
                    <li 
                      key={skill}
                      className="text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-16"
          >
            <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">
              Recognition
            </p>
            <h2 className="text-headline">
              Milestones.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 border border-border rounded-2xl"
            >
              <p className="text-sm text-muted-foreground font-medium mb-4">Patent</p>
              <h3 className="text-xl font-semibold tracking-tight mb-3">
                U.S. Patent Holder
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                System and Method for Real-Time Managing, Monitoring, Tracking, 
                and Pricing of Retail Products
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                US Application No. 62/473,720
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 border border-border rounded-2xl"
            >
              <p className="text-sm text-muted-foreground font-medium mb-4">Founder</p>
              <h3 className="text-xl font-semibold tracking-tight mb-3">
                Technical Founder
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Built and launched products from 0-to-1, wearing every hat from 
                design to engineering to fundraising.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-8"
          >
            <div>
              <h2 className="text-headline mb-4">
                Let's connect.
              </h2>
              <p className="text-body-lg text-muted-foreground max-w-[500px]">
                Always interested in new opportunities and conversations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://linkedin.com/in/robmcelvenny" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                LinkedIn
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a 
                href="mailto:rob@robmcelvenny.com"
                className="btn-secondary"
              >
                Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
