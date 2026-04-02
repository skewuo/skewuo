# Skewuo - AI Agent Development Guide

Design studio portfolio built with React, TypeScript, Vite. Modern animation-rich UI with dark mode.

---

## Commands

```bash
# Development
bun install          # Install dependencies
bun dev              # Start dev server (port 3000)

# Build
bun run build        # Production build (fast, no type check)
bun run build:full   # Full build with TypeScript checking
bun run preview      # Preview production build

# Linting
bun run lint         # Run ESLint

# No test suite configured
```

---

## Tech Stack

- **React 18** + TypeScript + Vite (SWC)
- **React Router v7** for routing
- **Framer Motion** for animations
- **Tailwind CSS** + shadcn/ui components
- **Radix UI** primitives

---

## Project Structure

```
src/
├── App.tsx                    # Router setup
├── main.tsx                   # Entry point
├── components/
│   ├── ui/                    # shadcn/ui components (34 files)
│   ├── AnimatedMarquee.tsx
│   └── FloatingOrbs.tsx
├── pages/                     # Page components (16 files)
│   ├── EnhancedLandingPage.tsx  # CURRENT landing page
│   ├── NewWorkPage.tsx
│   ├── NewAboutPage.tsx
│   └── NewContactPage.tsx
├── lib/
│   ├── utils.ts               # cn() utility
│   └── ThemeContext.tsx       # Theme provider
├── hooks/
│   └── use-mobile.tsx         # Mobile breakpoint (768px)
├── services/
│   ├── blogService.ts         # Blog API
│   └── auth.ts                # Auth API
├── types/
│   └── blog.ts                # Interfaces
└── styles/
    └── globals.css            # Tailwind + custom CSS
```

---

## Code Style

### Import Order
1. React/React hooks
2. Third-party libraries
3. React Router
4. Local components (relative)
5. Services/utils
6. Types

```typescript
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedMarquee } from '../components/AnimatedMarquee'
import { cn } from '@/lib/utils'
import type { BlogPost } from '@/types/blog'
```

### Path Aliases
- `@/*` → `./src/*` (absolute imports)
- Use relative imports for same/parent directories

### Naming Conventions
- **Files**: PascalCase for components (`AnimatedMarquee.tsx`)
- **Pages**: PascalCase + "Page" suffix (`LandingPage.tsx`)
- **Hooks**: camelCase + "use-" prefix (`use-mobile.tsx`)
- **Services**: camelCase + "Service" suffix (`blogService.ts`)
- **Variables**: camelCase
- **Components**: PascalCase
- **Constants**: UPPER_SNAKE_CASE

### Component Patterns

#### Basic Component
```typescript
export default function PageName() {
  return <div>...</div>
}
```

#### With Props
```typescript
interface Props {
  items: string[]
  duration?: number
  className?: string
}

export function Component({ items, duration = 30, className = '' }: Props) {
  return <div className={cn("base", className)}>...</div>
}
```

#### With forwardRef (UI Components)
```typescript
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return <button className={cn(buttonVariants({ variant }), className)} ref={ref} {...props} />
  }
)
Button.displayName = "Button"
```

### TypeScript
- **Strict mode enabled**
- No implicit any
- Type all props, state, returns
- Use interfaces for objects, types for unions
- `import type` for type-only imports

### Styling

#### Tailwind with cn() Utility
```typescript
import { cn } from "@/lib/utils"

<div className={cn(
  "base-classes",
  variant === "primary" && "variant-classes",
  className
)}>
```

#### Design Tokens (CSS Variables)
Always use Tailwind classes that map to CSS variables:
- `bg-background` / `text-foreground`
- `bg-secondary` / `text-secondary-foreground`  
- `bg-primary` / `text-primary-foreground`
- `border-border` / `text-muted-foreground`

Never hardcode colors like `bg-white` or `text-black`

#### Responsive Design (Mobile-First)
```typescript
<div className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
<div className="hidden md:flex">  // Desktop only
```

### Animations (Framer Motion)

#### Standard Pattern
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.25, 0.4, 0.25, 1] }
}

<motion.div {...fadeInUp}>Content</motion.div>
```

#### Scroll-Based
```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
```

#### Interactions
```typescript
<motion.button
  whileTap={{ scale: 0.95 }}
  whileHover={{ scale: 1.05 }}
>
```

---

## Design System Rules

### Layout
- **Max width**: 1200px for content (`max-w-[1200px]`)
- **Padding**: `px-6 sm:px-8 lg:px-16` (responsive)
- **Sections**: `py-20 sm:py-32` spacing between
- **Vertical borders**: Fixed left/right borders for visual structure

### Typography Scale
- **Hero**: text-6xl → text-9xl
- **Headings**: text-4xl → text-7xl  
- **Body**: text-base → text-xl
- **Small**: text-sm
- **Font weights**: 300-700 (Poppins)

### Card Patterns
- **Borders**: `border border-border`
- **Backgrounds**: `bg-secondary/30` or `bg-background`
- **Rounding**: `rounded-xl` or `rounded-2xl`
- **Padding**: `p-6` to `p-10` depending on size
- **Hover**: `hover:bg-secondary/50 transition-colors`

### Button Patterns
```typescript
// Primary CTA
<button className="px-10 py-5 bg-foreground text-background text-xl font-semibold rounded-full hover:opacity-90 transition-opacity">

// Secondary
<button className="px-10 py-5 border-2 border-border text-xl font-semibold rounded-full hover:bg-secondary transition-colors">
```

---

## API Integration

### Service Layer
All API calls go through service files in `/src/services/`:

```typescript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost/api'

export const service = {
  async fetchData(): Promise<Type[]> {
    const response = await fetch(`${API_URL}/endpoint`)
    if (!response.ok) throw new Error('Failed')
    return response.json()
  }
}
```

### Error Handling
```typescript
try {
  const data = await service.fetchData()
  setData(data)
} catch (error) {
  console.error('Error:', error)
  // Show error to user or redirect
} finally {
  setLoading(false)
}
```

---

## Development Guidelines

### When Creating Components
1. Match existing patterns in `components/ui/`
2. Use TypeScript interfaces for props
3. Use `cn()` for conditional classes
4. Add Framer Motion for animations
5. Support dark mode (test both themes)
6. Make responsive (mobile-first)

### When Adding Pages
1. Create in `/src/pages/` with "Page" suffix
2. Add route in `App.tsx`
3. Use same layout structure (max-w, padding)
4. Add navigation link in navbar if needed
5. Follow animation patterns (initial/animate)

### When Styling
1. Use Tailwind utilities first
2. Use design token classes (bg-background, not bg-white)
3. Maintain consistent spacing (py-20 sm:py-32)
4. Keep content centered with max-w-[1200px]
5. Test in dark mode

### Before Committing
1. Run `bun run lint` to check for errors
2. Run `bun run build:full` to verify TypeScript
3. Test in browser (light + dark mode)
4. Check mobile responsiveness

---

## Deployment

- **GitHub Actions**: Builds on push to `main`
- **Docker**: Multi-stage build (Bun → nginx)
- **K8s**: ArgoCD auto-deploys from GitHub Container Registry
- **Live**: https://www.skewuo.com

---

**Last Updated:** February 28, 2026
