import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link 
              to="/" 
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img 
                src="/logo.svg" 
                alt="Skewüo" 
                className="h-16 w-auto dark:invert"
              />
            </Link>
            <p className="text-sm text-muted-foreground mt-4 max-w-[250px]">
              Brand, product, and industrial design. Skeuomorphic sensibility, modern execution.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm text-muted-foreground mb-4">Pages</p>
            <nav className="flex flex-col gap-3">
              <Link 
                to="/work" 
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Work
              </Link>
              <Link 
                to="/about" 
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm text-muted-foreground mb-4">Connect</p>
            <nav className="flex flex-col gap-3">
              <a 
                href="https://twitter.com/skewuo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://www.linkedin.com/company/skewuo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://facebook.com/skewuo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Facebook
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            {currentYear} Skewüo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
