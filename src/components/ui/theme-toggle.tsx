import { motion } from 'framer-motion'
import { useTheme } from '../../lib/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Sun icon */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-foreground"
        initial={false}
        animate={{
          opacity: theme === 'light' ? 1 : 0,
          scale: theme === 'light' ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </motion.svg>

      {/* Moon icon */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute h-5 w-5 text-foreground"
        initial={false}
        animate={{
          opacity: theme === 'dark' ? 1 : 0,
          scale: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </motion.svg>
    </motion.button>
  )
} 