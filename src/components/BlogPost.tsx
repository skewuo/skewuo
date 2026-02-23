import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Highlight, themes } from 'prism-react-renderer'
import { motion } from 'framer-motion'
import { blogService } from '../services/blogService'
import type { BlogPost as BlogPostType } from '../types/blog'

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [post, setPost] = useState<BlogPostType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return
      try {
        const fetchedPost = await blogService.getPostBySlug(slug)
        if (!fetchedPost) {
          navigate('/blog')
          return
        }
        setPost(fetchedPost)
      } catch (error) {
        console.error('Error fetching post:', error)
        navigate('/blog')
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug, navigate])

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-32 flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground"></div>
      </div>
    )
  }

  if (!post) {
    return null
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <article className="min-h-screen bg-background">
      {/* Full-screen header image */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.headerImage.url})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Category */}
            <div className="mb-6">
              <motion.span 
                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                {post.category || 'General'}
              </motion.span>
            </div>

            {/* Title */}
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight relative group"
              whileHover={{ scale: 1.02 }}
            >
              <span className="relative">
                {post.title}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 to-violet-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
            </motion.h1>

            {/* Author and Meta */}
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-3">
                <motion.img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full shadow-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                />
                <div>
                  <span className="block font-medium">{post.author.name}</span>
                  <div className="flex items-center gap-2 text-sm opacity-80">
                    <time>{formattedDate}</time>
                    <span>•</span>
                    <span>{post.readingTime || '5 min read'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Share buttons */}
            <div className="flex justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors group"
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
              >
                <FaXTwitter className="group-hover:rotate-12 transition-transform" />
                <span>Share on X</span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors group"
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
              >
                <FaLinkedin className="group-hover:rotate-12 transition-transform" />
                <span>Share on LinkedIn</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white flex items-start justify-center p-1">
            <motion.div 
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 relative"
          >
            {/* Floating Elements */}
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-pink-600/20 dark:bg-pink-500/30 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-violet-600/20 dark:bg-violet-500/30 rounded-full blur-2xl animate-pulse delay-700" />

            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ inline, className, children, ...props }: CodeProps) {
                  const match = /language-(\w+)/.exec(className || '')
                  const language = match ? match[1] : ''
                  
                  if (!inline && language) {
                    return (
                      <div className="relative group">
                        <div className="absolute -inset-4 bg-muted rounded-lg -z-10" />
                        <Highlight
                          theme={themes.github}
                          code={String(children).replace(/\n$/, '')}
                          language={language}
                        >
                          {({ className, style, tokens, getLineProps, getTokenProps }) => (
                            <pre className={`${className} p-4 overflow-auto rounded-lg bg-muted`} style={style}>
                              {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line })} className="table-row">
                                  <span className="table-cell pr-4 text-muted-foreground select-none text-right">{i + 1}</span>
                                  <span className="table-cell">
                                    {line.map((token, key) => (
                                      <span key={key} {...getTokenProps({ token })} />
                                    ))}
                                  </span>
                                </div>
                              ))}
                            </pre>
                          )}
                        </Highlight>
                      </div>
                    )
                  }
                  return <code className={`${className} bg-muted`} {...props}>{children}</code>
                },
                a: ({ node, ...props }) => (
                  <a 
                    {...props} 
                    className="text-primary hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary/50"
                    target={props.href?.startsWith('http') ? '_blank' : undefined}
                    rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  />
                ),
                img: ({ node, ...props }) => (
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-muted rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                    <img 
                      {...props} 
                      className="rounded-lg shadow-md"
                      loading="lazy"
                    />
                  </div>
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote 
                    {...props} 
                    className="border-l-4 border-border pl-6 italic text-muted-foreground my-8"
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h2 {...props} className="text-3xl font-bold text-foreground mt-12 mb-6" />
                ),
                h3: ({ node, ...props }) => (
                  <h3 {...props} className="text-2xl font-bold text-foreground mt-8 mb-4" />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </motion.div>

          {/* Tags */}
          <div className="mt-12 pt-12 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <motion.span 
                  key={tag}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-secondary text-secondary-foreground"
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
} 