import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { blogService } from '../services/blogService'
import type { BlogPost } from '../types/blog'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await blogService.getAllPosts()
        setPosts(fetchedPosts)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }
  }

  // Fallback posts when database is empty
  const fallbackPosts = [
    {
      _id: '1',
      title: "Why Design-Led Companies Win",
      excerpt: "How putting design at the center of product decisions creates sustainable competitive advantages and builds products people actually want to use.",
      date: "2024-01-15",
      slug: "design-led-companies",
      category: "Product"
    },
    {
      _id: '2',
      title: "From Engineer to Product Leader",
      excerpt: "Lessons learned transitioning from building systems to building products. The mindset shifts that matter most.",
      date: "2024-01-10",
      slug: "engineer-to-product-leader",
      category: "Leadership"
    },
    {
      _id: '3',
      title: "The Art of Saying No",
      excerpt: "Product leadership is as much about what you don't build as what you do. How to make hard decisions with confidence.",
      date: "2024-01-05",
      slug: "art-of-saying-no",
      category: "Product"
    },
    {
      _id: '4',
      title: "Building for Zero to One",
      excerpt: "What I learned launching products from scratch. The frameworks, mistakes, and wins that shaped my approach.",
      date: "2023-12-20",
      slug: "zero-to-one",
      category: "Startup"
    },
    {
      _id: '5',
      title: "Design Systems That Scale",
      excerpt: "Creating design infrastructure that grows with your team. Principles over pixels.",
      date: "2023-12-15",
      slug: "design-systems-scale",
      category: "Design"
    },
    {
      _id: '6',
      title: "The Technical Founder Advantage",
      excerpt: "Why understanding the stack makes you a better product leader, and how to leverage it without micromanaging.",
      date: "2023-12-01",
      slug: "technical-founder-advantage",
      category: "Startup"
    }
  ]

  const displayPosts = posts.length > 0 ? posts : fallbackPosts

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <motion.p 
              {...fadeInUp}
              className="text-muted-foreground text-sm font-medium tracking-wide uppercase"
            >
              Writing
            </motion.p>

            <motion.h1 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
              className="text-display max-w-[800px]"
            >
              Thoughts on
              <span className="block text-muted-foreground">product & craft.</span>
            </motion.h1>

            <motion.p 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="text-body-lg text-muted-foreground max-w-[600px]"
            >
              Ideas on building products, leading teams, and the craft of making things people love.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 sm:py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-6 h-6 border-2 border-muted-foreground/30 border-t-foreground rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {displayPosts.map((post, index) => (
                <motion.article
                  key={post._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.25, 0.4, 0.25, 1] 
                  }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`} className="block space-y-4">
                    {/* Category & Date */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {post.category && (
                        <>
                          <span className="font-medium">{post.category}</span>
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                        </>
                      )}
                      <time>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <span className="inline-flex items-center gap-2 text-sm font-medium pt-2 group-hover:gap-3 transition-all duration-300">
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="max-w-[600px]"
          >
            <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">
              Newsletter
            </p>
            <h2 className="text-headline mb-6">
              Stay in the loop.
            </h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              Occasional updates on product, design, and what I'm building. No spam, unsubscribe anytime.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-6 py-4 bg-secondary border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all duration-300"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
