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
              <svg width="1098" height="1047" viewBox="0 0 1098 1047" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-16 w-auto">
                <path d="M459.5 377.5H277.5V633.5C289.9 842.7 462.333 895 547 895C634 895 694.302 861.264 735.5 824C802.586 763.319 820.723 683.786 820 633.5V377.5H637.5V636.5C634.5 663.5 621.5 716 547 715C518.667 715 468 702.5 459.5 636.5V377.5Z" fill="currentColor" stroke="currentColor"/>
                <circle cx="386" cy="244" r="95.5" fill="currentColor" stroke="currentColor"/>
                <circle cx="711" cy="244" r="95.5" fill="currentColor" stroke="currentColor"/>
              </svg>
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
