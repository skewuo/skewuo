import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

function ContactPage() {
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
      <section className="py-32 sm:py-40 px-6 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.p 
              variants={fadeInUp}
              className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-8"
            >
              Contact
            </motion.p>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-12 max-w-[800px]"
            >
              Let's create something meaningful together.
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl text-muted-foreground font-light leading-relaxed max-w-[600px] mb-16"
            >
              Whether you have a project in mind or just want to connect, 
              we'd love to hear from you.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <p className="text-sm text-muted-foreground tracking-wide uppercase mb-3">
                  Email
                </p>
                <a 
                  href="mailto:hello@skewuo.com"
                  className="text-2xl sm:text-3xl font-light hover:text-muted-foreground transition-colors"
                >
                  hello@skewuo.com
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-24 pt-16 border-t border-border"
          >
            <p className="text-sm text-muted-foreground tracking-wide uppercase mb-8">
              Follow
            </p>
            <div className="flex flex-wrap gap-8">
              {[
                { name: "Twitter", url: "https://twitter.com/robmcelvenny" },
                { name: "LinkedIn", url: "https://linkedin.com/in/robmcelvenny" },
                { name: "Instagram", url: "https://instagram.com/robmcelvenny" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-lg hover:text-muted-foreground transition-colors"
                >
                  {social.name}
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
