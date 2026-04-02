import { useRef, useEffect, useMemo } from 'react'
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Edges } from '@react-three/drei'
import * as THREE from 'three'
import Lenis from 'lenis'

// ── Smooth scroll setup ──────────────────────────────────────────────────────
function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
}

// ── 3D Hero Object ───────────────────────────────────────────────────────────
function WireframeIco({ mouse }: { mouse: React.MutableRefObject<{x:number,y:number}> }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, mouse.current.y * 0.5 + t * 0.04, 0.04)
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, mouse.current.x * 0.5 + t * 0.06, 0.04)
  })

  return (
    <Float speed={0.8} floatIntensity={0.3}>
      <mesh ref={ref} scale={2.4}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#7c3aed" transparent opacity={0.08} />
        <Edges color="#7c3aed" threshold={1} />
      </mesh>
      {/* Inner solid */}
      <mesh scale={1.2}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#a855f7" transparent opacity={0.04} wireframe />
      </mesh>
    </Float>
  )
}

function HeroScene() {
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}
      style={{ position: 'absolute', inset: 0 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -3, -5]} intensity={0.8} color="#7c3aed" />
      <WireframeIco mouse={mouse} />
    </Canvas>
  )
}

// ── Text reveal word by word ──────────────────────────────────────────────────
function SplitReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const words = text.split(' ')

  return (
    <span ref={ref} aria-label={text} className={className} style={{ display: 'block' }}>
      {words.map((word, i) => (
        <motion.span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.25em' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%', opacity: 0 }}
            animate={inView ? { y: '0%', opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: delay + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </span>
  )
}

// ── Cursor ────────────────────────────────────────────────────────────────────
function Cursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 200, damping: 30 })
  const springY = useSpring(cursorY, { stiffness: 200, damping: 30 })

  useEffect(() => {
    const move = (e: MouseEvent) => { cursorX.set(e.clientX - 6); cursorY.set(e.clientY - 6) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      style={{ x: springX, y: springY, position: 'fixed', top: 0, left: 0, width: 12, height: 12, borderRadius: '50%', background: '#7c3aed', pointerEvents: 'none', zIndex: 9999, mixBlendMode: 'difference' }}
    />
  )
}

// ── Horizontal scroll work section ───────────────────────────────────────────
function HorizontalWork() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%'])

  const WORK = [
    { client: 'The Cobbler Guy', type: 'AI Operating System', year: '2026', color: '#7c3aed', desc: 'An entire business orchestrated by AI. Claude Vision quoting, Stripe payments, artisan pipeline.' },
    { client: 'Stillpoint', type: 'Brand + App Store', year: '2025', color: '#0ea5e9', desc: 'Three App Store rejections resolved. Brand identity, screenshots, metadata — live in 72hrs.' },
    { client: 'Värd', type: 'Brand Identity', year: '2025', color: '#f59e0b', desc: 'Swedish-inspired home goods brand. Zero to complete — wordmark, system, packaging, guidelines.' },
    { client: 'HALO', type: 'Website + Design System', year: '2025', color: '#10b981', desc: 'Product launch site for a minimal LED desk lamp. Design system, copy, full build.' },
  ]

  return (
    <section ref={containerRef} className="relative" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="px-6 sm:px-8 lg:px-16 mb-16 absolute top-16 left-0 right-0">
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground">Selected work</p>
        </div>
        <motion.div style={{ x }} className="flex gap-6 pl-[15vw]" transition={{ ease: 'linear' }}>
          {WORK.map((project) => (
            <Link to={`/work/${project.client.toLowerCase().replace(/\s/g,'-')}`} key={project.client}>
              <motion.div
                whileHover={{ scale: 0.98 }}
                className="relative rounded-2xl border border-border bg-secondary/20 overflow-hidden cursor-pointer"
                style={{ width: '38vw', minWidth: 420, height: '65vh', flexShrink: 0 }}
              >
                {/* Gradient bg */}
                <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at 30% 40%, ${project.color}, transparent 70%)` }} />
                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-xs text-muted-foreground tracking-widest uppercase">{project.type}</span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold mb-4">{project.client}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-[320px]">{project.desc}</p>
                    <div className="flex items-center gap-2 mt-6 text-sm font-medium" style={{ color: project.color }}>
                      View project <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: project.color, opacity: 0.3 }} />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ── Case study section ────────────────────────────────────────────────────────
function CaseStudySection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y    = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])
  const opac = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const STACK = [
    ['AI Quote Engine', 'Claude Vision + pricing matrix'],
    ['Payments', 'Stripe deposit + balance flow'],
    ['Admin CRM', 'Pipeline, artisan management'],
    ['Customer Portal', 'Order tracking, history'],
    ['Autonomous Emails', 'Status-driven notifications'],
    ['Infrastructure', 'k8s, ArgoCD, Hetzner'],
  ]

  return (
    <section ref={ref} className="relative py-48 px-6 sm:px-8 lg:px-16 border-t border-border overflow-hidden">
      {/* Ambient glow that moves with scroll */}
      <motion.div style={{ y, opacity: opac }} className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', y, opacity: opac }} />

      <div className="max-w-[1200px] mx-auto">
        {/* Label */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs tracking-widest uppercase text-muted-foreground">Live case study · thecobblerguy.com</span>
          <a href="https://thecobblerguy.com" target="_blank" rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 ml-auto">
            Visit site <ArrowUpRight className="w-3 h-3" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-20 items-start">
          <div>
            <SplitReveal text="An entire business," className="text-[clamp(36px,5vw,72px)] font-bold tracking-tight leading-[1.05]" />
            <SplitReveal text="orchestrated by AI." className="text-[clamp(36px,5vw,72px)] font-bold tracking-tight leading-[1.05] text-muted-foreground" delay={0.18} />

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.45 }}
              className="text-lg text-muted-foreground leading-relaxed mt-10 max-w-[520px]">
              The Cobbler Guy needed more than a website. They needed an
              operating system. AI quoting, Stripe payments, artisan pipeline,
              autonomous customer emails. The business runs itself.
            </motion.p>

            {/* Numbered steps with line reveal */}
            <div className="mt-12 space-y-0">
              {[
                ['01', 'Customer uploads photos — Claude Vision identifies brand, damage type, and severity in seconds'],
                ['02', 'AI generates an itemized quote — approved with a single click'],
                ['03', 'Stripe collects 50% deposit upfront, balance on completion'],
                ['04', 'Status emails fire automatically as the order moves through the artisan pipeline'],
              ].map(([n, text], i) => (
                <motion.div key={n}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  className="flex gap-6 py-5 border-b border-border last:border-0">
                  <span className="text-xs text-muted-foreground/50 mt-0.5 w-6 shrink-0">{n}</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stack card */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:sticky lg:top-32">
            <div className="rounded-2xl border border-border bg-background/80 backdrop-blur-sm p-8">
              <div className="text-xs tracking-widest uppercase text-muted-foreground mb-6">Stack deployed</div>
              <div className="divide-y divide-border">
                {STACK.map(([label, detail], i) => (
                  <motion.div key={label}
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.06 }}
                    className="flex justify-between items-center py-3.5">
                    <span className="font-medium text-sm">{label}</span>
                    <span className="text-xs text-muted-foreground">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
              className="mt-4 p-5 rounded-xl border border-violet-500/20 bg-violet-500/5 flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">$2,500<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                <div className="text-xs text-muted-foreground mt-0.5">ongoing retainer</div>
              </div>
              <div className="text-xs text-violet-400 border border-violet-500/30 rounded-full px-3 py-1">Active</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ── Stats ─────────────────────────────────────────────────────────────────────
function StatsSection() {
  const STATS = [
    { n: '01', stat: '$15K+', label: 'Project minimum' },
    { n: '02', stat: '72hrs', label: 'Fastest full brand turnaround' },
    { n: '03', stat: '100%', label: 'Design + engineering, one person' },
    { n: '04', stat: '∞', label: 'Revisions included' },
  ]

  return (
    <section className="border-t border-border">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
        {STATS.map((s, i) => (
          <motion.div key={s.n}
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.08 }}
            className="p-10 lg:p-14 bg-background hover:bg-secondary/10 transition-colors">
            <div className="text-xs text-muted-foreground/40 mb-4">{s.n}</div>
            <div className="text-[clamp(40px,5vw,64px)] font-bold tracking-tight leading-none mb-3">{s.stat}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ── Pricing ───────────────────────────────────────────────────────────────────
function PricingSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  return (
    <section ref={ref} id="pricing" className="relative py-40 px-6 sm:px-8 lg:px-16 border-t border-border overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 60%, rgba(124,58,237,0.06) 0%, transparent 70%)', y: bgY }} />

      <div className="max-w-[1100px] mx-auto relative">
        <SplitReveal text="How we work with you." className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.92] mb-24" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Subscription */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-10 rounded-2xl border border-violet-500/30 bg-background overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm text-muted-foreground">Studio subscription</p>
                <span className="text-xs text-violet-400 border border-violet-500/30 rounded-full px-3 py-1">Popular</span>
              </div>
              <div className="mb-8">
                <div className="text-7xl font-bold tracking-tight">$4,995</div>
                <div className="text-muted-foreground text-sm mt-2">/month · pause anytime</div>
              </div>
              <div className="space-y-3 mb-10">
                {['Design + engineering — no handoffs','AI integration included','One active project at a time','Async — no mandatory calls','Unlimited revisions','Cancel anytime'].map((f, i) => (
                  <motion.div key={f} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.05 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />{f}
                  </motion.div>
                ))}
              </div>
              <Link to="/contact">
                <button className="w-full py-4 bg-foreground text-background font-semibold rounded-full hover:opacity-90 transition-opacity text-sm group-hover:bg-violet-600 group-hover:text-white">
                  Get started <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </button>
              </Link>
              <p className="text-xs text-muted-foreground text-center mt-4">Not right? 75% back — no questions.</p>
            </div>
          </motion.div>

          {/* Custom */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="p-10 rounded-2xl border border-border bg-secondary/10">
            <p className="text-sm text-muted-foreground mb-8">Custom project</p>
            <div className="mb-8">
              <div className="text-5xl font-bold">Scoped</div>
              <div className="text-muted-foreground text-sm mt-2">Fixed price · defined deliverables</div>
            </div>
            <div className="space-y-3 mb-10">
              {['Full-stack platform builds','AI system integration','Brand identity packages','WebGL / 3D experiences','Fixed timeline + milestones','Starts at $15,000'].map((f, i) => (
                <motion.div key={f} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-border shrink-0" />{f}
                </motion.div>
              ))}
            </div>
            <Link to="/contact">
              <button className="w-full py-4 border border-border font-semibold rounded-full hover:bg-secondary transition-colors text-sm">
                Let's talk
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ── CTA ───────────────────────────────────────────────────────────────────────
function CTASection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section ref={ref} className="py-48 px-6 sm:px-8 lg:px-16 border-t border-border overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div style={{ scale, opacity }}>
          <SplitReveal text="Let's build" className="text-[clamp(52px,9vw,120px)] font-bold tracking-tight leading-[0.88]" />
          <SplitReveal text="something real." className="text-[clamp(52px,9vw,120px)] font-bold tracking-tight leading-[0.88] bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent" delay={0.15} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Link to="/contact">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="group px-10 py-5 bg-foreground text-background text-base font-semibold rounded-full hover:opacity-90 transition-opacity flex items-center gap-3">
              Start a project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          <Link to="/work">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="px-10 py-5 border border-border text-base font-semibold rounded-full hover:bg-secondary/50 transition-colors">
              See the work
            </motion.button>
          </Link>
          <p className="text-sm text-muted-foreground sm:ml-4">
            Or email us at{' '}
            <a href="mailto:hello@skewuo.com" className="underline underline-offset-4 hover:text-foreground transition-colors">
              hello@skewuo.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NewLandingPage() {
  useLenis()

  const heroRef = useRef(null)
  const { scrollYProgress: heroP } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(heroP, [0, 0.7], [1, 0])
  const heroY       = useTransform(heroP, [0, 1], ['0%', '20%'])
  const heroScale   = useTransform(heroP, [0, 1], [1, 0.9])

  // Parallax text
  const studioRef = useRef(null)
  const { scrollYProgress: studioP } = useScroll({ target: studioRef, offset: ['start end', 'end start'] })
  const studioX = useTransform(studioP, [0, 1], ['-5%', '5%'])
  const studioX2 = useTransform(studioP, [0, 1], ['5%', '-5%'])

  return (
    <div className="min-h-screen bg-background">
      <Cursor />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden -mt-20">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <HeroScene />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_65%_50%,transparent_20%,hsl(var(--background))_75%)]" />
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative z-10 px-6 sm:px-8 lg:px-16 max-w-[1400px] mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm tracking-[0.35em] uppercase text-muted-foreground mb-10 font-medium"
          >
            Skewuo, Creative Tech Studio
          </motion.p>

          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: '100%' }} animate={{ y: '0%' }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(56px,10.5vw,148px)] font-bold tracking-tight leading-[0.86]"
            >
              Creative
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: '100%' }} animate={{ y: '0%' }}
              transition={{ duration: 1, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(56px,10.5vw,148px)] font-bold tracking-tight leading-[0.86] bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent"
            >
              Technology
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-14">
            <motion.h1
              initial={{ y: '100%' }} animate={{ y: '0%' }}
              transition={{ duration: 1, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(56px,10.5vw,148px)] font-bold tracking-tight leading-[0.86]"
            >
              Studio.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-muted-foreground max-w-[500px] mb-12 font-light leading-relaxed"
          >
            Design, engineering, and AI — built as one.
            Not handed off. Not approximated. Built.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-col sm:flex-row gap-4">
            <Link to="/work">
              <button className="group px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:opacity-90 transition-all flex items-center gap-3 text-sm">
                View our work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-4 border border-border font-semibold rounded-full hover:bg-secondary/50 transition-all text-sm">
                Start a project
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* scroll cue */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-16 z-10 flex items-center gap-3">
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
          <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
        </motion.div>
      </section>

      {/* ── Parallax studio name strip ───────────────────────────── */}
      <section ref={studioRef} className="py-24 overflow-hidden border-y border-border">
        <motion.div style={{ x: studioX }} className="whitespace-nowrap">
          <span className="text-[8vw] font-bold tracking-tight text-muted-foreground/10 select-none">
            DESIGN · ENGINEERING · ARTIFICIAL INTELLIGENCE · DESIGN · ENGINEERING · ARTIFICIAL INTELLIGENCE ·&nbsp;
          </span>
        </motion.div>
        <motion.div style={{ x: studioX2 }} className="whitespace-nowrap mt-2">
          <span className="text-[8vw] font-bold tracking-tight text-muted-foreground/10 select-none">
            THREE.JS · REACT · FULL STACK · AI SYSTEMS · BRAND IDENTITY · THREE.JS · REACT · FULL STACK · AI SYSTEMS ·&nbsp;
          </span>
        </motion.div>
      </section>

      {/* ── Studio statement ──────────────────────────────────────── */}
      <section className="py-40 px-6 sm:px-8 lg:px-16">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-12">Our approach</p>
          <SplitReveal
            text="Most studios hand off design to engineers."
            className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.05] mb-2"
          />
          <SplitReveal
            text="Engineers hand off back to design."
            className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.05] mb-2"
            delay={0.3}
          />
          <SplitReveal
            text="We don't."
            className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.05] text-muted-foreground"
            delay={0.55}
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground font-light leading-relaxed max-w-[580px] mt-16"
          >
            Skewuo is a creative technology studio where design and
            engineering happen in the same mind, at the same time.
            The result is work that looks intentional, moves with
            precision, and actually ships.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-px bg-border mt-20 border border-border rounded-2xl overflow-hidden"
          >
            {[
              { n: '01', title: 'Creative Direction', body: 'Brand identity, design systems, motion, visual language.' },
              { n: '02', title: 'Engineering', body: 'React, Three.js, WebGL, full-stack, k8s infrastructure.' },
              { n: '03', title: 'AI Integration', body: 'Vision models, autonomous agents, AI-powered systems.' },
            ].map((item, i) => (
              <div key={item.n} className="p-10 bg-background hover:bg-secondary/20 transition-colors">
                <div className="text-xs text-muted-foreground tracking-widest mb-6">{item.n}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Horizontal scroll work ────────────────────────────────── */}
      <HorizontalWork />

      {/* ── The Cobbler Guy — full bleed cinematic section ─────────── */}
      <CaseStudySection />

      {/* ── Numbers ──────────────────────────────────────────────── */}
      <StatsSection />

      {/* ── Pricing ───────────────────────────────────────────────── */}
      <PricingSection />

      {/* ── Final CTA ─────────────────────────────────────────────── */}
      <CTASection />
    </div>
  )
}
