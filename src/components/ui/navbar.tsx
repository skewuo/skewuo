import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle } from './theme-toggle'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const navLinks = [
    { path: '/work', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 group transition-opacity duration-300 hover:opacity-80"
            >
              <svg width="1098" height="1047" viewBox="0 0 1098 1047" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto">
                <path d="M459.5 377.5H277.5V633.5C289.9 842.7 462.333 895 547 895C634 895 694.302 861.264 735.5 824C802.586 763.319 820.723 683.786 820 633.5V377.5H637.5V636.5C634.5 663.5 621.5 716 547 715C518.667 715 468 702.5 459.5 636.5V377.5Z" fill="currentColor" stroke="currentColor"/>
                <circle cx="386" cy="244" r="95.5" fill="currentColor" stroke="currentColor"/>
                <circle cx="711" cy="244" r="95.5" fill="currentColor" stroke="currentColor"/>
              </svg>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`text-sm transition-colors duration-300 ${
                    isActive(link.path) 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground p-2 -mr-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        <div 
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className={`relative flex flex-col items-center justify-center h-full gap-8 transition-all duration-500 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-8'
        }`}>
          {navLinks.map((link, index) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-2xl font-light tracking-tight transition-all duration-300 ${
                isActive(link.path) 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
