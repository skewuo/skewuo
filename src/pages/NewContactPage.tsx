import { motion } from 'framer-motion'
import { Mail, Calendar, ArrowRight } from 'lucide-react'

export default function NewContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: "Send a note and we'll reply within 24 hours.",
      action: 'hello@skewuo.com',
      link: 'mailto:hello@skewuo.com',
    },
    {
      icon: Calendar,
      title: 'Book a call',
      description: '15 minutes. Tell us what you need. No pitch, no pressure.',
      action: 'Schedule now',
      link: 'https://cal.com/skewuo',
    },
    {
      icon: ArrowRight,
      title: 'Start today',
      description: 'Subscribe and request your first design. First delivery in 48 hours.',
      action: 'See pricing',
      link: '/#pricing',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="mb-8">
              <span className="text-lg text-muted-foreground tracking-wide">Contact</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-12 max-w-[1000px]">
              Let's build{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                something.
              </span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-[620px] font-light leading-relaxed">
              Have a project, a problem, or just a question. We're quick to reply.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative p-10 rounded-3xl border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-foreground/20 transition-all duration-300 cursor-pointer overflow-hidden block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center mb-8">
                    <method.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{method.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">{method.description}</p>
                  <div className="inline-flex items-center gap-2 text-lg font-semibold group-hover:gap-4 transition-all duration-300">
                    <span>{method.action}</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Direct email */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-muted-foreground mb-4">Prefer to go direct?</p>
            <a
              href="mailto:hello@skewuo.com"
              className="inline-block text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              hello@skewuo.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Social */}
      <section className="py-20 px-6 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-muted-foreground mb-8">Follow the work</p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'Twitter / X', url: 'https://twitter.com/skewuo' },
                { name: 'Instagram', url: 'https://instagram.com/skewuo' },
                { name: 'LinkedIn', url: 'https://linkedin.com/company/skewuo' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-base font-semibold border border-border rounded-full hover:bg-secondary hover:border-foreground/30 transition-all"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
