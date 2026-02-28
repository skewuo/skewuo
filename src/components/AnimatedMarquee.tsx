import { motion } from 'framer-motion'

interface MarqueeProps {
  items: string[]
  duration?: number
  className?: string
}

export function AnimatedMarquee({ items, duration = 30, className = '' }: MarqueeProps) {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items]

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -100 * (items.length / 3) + '%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-muted-foreground/[0.03] select-none"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
