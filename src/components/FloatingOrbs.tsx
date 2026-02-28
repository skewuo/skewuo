import { motion } from 'framer-motion'

interface Orb {
  id: number
  size: number
  color: string
  initialX: string
  initialY: string
  duration: number
}

export function FloatingOrbs() {
  const orbs: Orb[] = [
    {
      id: 1,
      size: 600,
      color: 'bg-purple-500/10',
      initialX: '10%',
      initialY: '20%',
      duration: 25
    },
    {
      id: 2,
      size: 500,
      color: 'bg-blue-500/10',
      initialX: '70%',
      initialY: '60%',
      duration: 30
    },
    {
      id: 3,
      size: 400,
      color: 'bg-pink-500/10',
      initialX: '40%',
      initialY: '80%',
      duration: 35
    }
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full blur-[100px] ${orb.color}`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.initialX,
            top: orb.initialY,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
