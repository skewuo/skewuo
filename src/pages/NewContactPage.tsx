import { motion } from 'framer-motion'
import { Mail, MessageSquare, Calendar } from 'lucide-react'

export default function NewContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Drop us a line and we\'ll get back to you within 24 hours.',
      action: 'hello@skewuo.com',
      link: 'mailto:hello@skewuo.com'
    },
    {
      icon: Calendar,
      title: 'Book a call',
      description: 'Schedule a 15-minute intro call to discuss your project.',
      action: 'Schedule now',
      link: '#'
    },
    {
      icon: MessageSquare,
      title: 'Start a project',
      description: 'Ready to subscribe? Get started and request your first design.',
      action: 'Get started',
      link: '/#pricing'
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
            className="text-center"
          >
            <div className="mb-8">
              <span className="text-lg text-muted-foreground">Contact</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-12 max-w-[1000px] mx-auto">
              Let's create something{' '}
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                meaningful
              </span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-[700px] mx-auto font-light leading-relaxed">
              Whether you have a project in mind or just want to connect, we'd love to hear from you.
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative p-10 rounded-3xl border-2 border-border bg-secondary/50 hover:border-foreground/20 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-8 h-8 text-foreground" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {method.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {method.description}
                  </p>

                  <div className="text-xl font-semibold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {method.action} →
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-16 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-8">
              Prefer email?
            </h2>
            <a 
              href="mailto:hello@skewuo.com"
              className="inline-block text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              hello@skewuo.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 px-6 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Follow along</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: 'Twitter', url: 'https://twitter.com/robmcelvenny' },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/robmcelvenny' },
                { name: 'Instagram', url: 'https://instagram.com/robmcelvenny' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-lg font-semibold border-2 border-border rounded-full hover:bg-secondary hover:border-foreground transition-all"
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
