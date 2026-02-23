import Navbar from '../components/ui/navbar'
import Footer from '../components/ui/footer'

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-24 overflow-y-auto">
              <nav className="space-y-8">
                <div>
                  <h3 className="font-display text-sm font-semibold text-black mb-4">Getting Started</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#introduction" className="text-sm text-black/60 hover:text-black transition-colors">Introduction</a>
                    </li>
                    <li>
                      <a href="#prerequisites" className="text-sm text-black/60 hover:text-black transition-colors">Prerequisites</a>
                    </li>
                    <li>
                      <a href="#installation" className="text-sm text-black/60 hover:text-black transition-colors">Installation</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-sm font-semibold text-black mb-4">Core Concepts</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#architecture" className="text-sm text-black/60 hover:text-black transition-colors">Architecture Overview</a>
                    </li>
                    <li>
                      <a href="#docker" className="text-sm text-black/60 hover:text-black transition-colors">Docker Setup</a>
                    </li>
                    <li>
                      <a href="#authentication" className="text-sm text-black/60 hover:text-black transition-colors">Authentication</a>
                    </li>
                    <li>
                      <a href="#database" className="text-sm text-black/60 hover:text-black transition-colors">Database & Prisma</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-sm font-semibold text-black mb-4">Features</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#payments" className="text-sm text-black/60 hover:text-black transition-colors">Payment Integration</a>
                    </li>
                    <li>
                      <a href="#email" className="text-sm text-black/60 hover:text-black transition-colors">Email System</a>
                    </li>
                    <li>
                      <a href="#deployment" className="text-sm text-black/60 hover:text-black transition-colors">Deployment</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <article className="max-w-3xl">
              <h1 className="font-display text-4xl font-bold text-black mb-8">Documentation</h1>
              
              <section id="introduction" className="mb-16">
                <h2 className="font-display text-2xl font-bold text-black mb-4">Introduction</h2>
                <p className="text-black/60 leading-relaxed mb-4">
                  Welcome to the shpd.ai documentation. Our boilerplate provides a production-ready foundation
                  for building modern SaaS applications with React, TypeScript, and Docker.
                </p>
                <p className="text-black/60 leading-relaxed mb-4">
                  This documentation will guide you through setting up your development environment,
                  understanding the architecture, and implementing key features.
                </p>
              </section>

              <section id="prerequisites" className="mb-16">
                <h2 className="font-display text-2xl font-bold text-black mb-4">Prerequisites</h2>
                <p className="text-black/60 leading-relaxed mb-4">
                  Before you begin, ensure you have the following installed:
                </p>
                <ul className="list-disc list-inside text-black/60 space-y-2 mb-6">
                  <li>Docker and Docker Compose</li>
                  <li>Node.js 18+ (for local development)</li>
                  <li>A code editor (we recommend VSCode)</li>
                </ul>
                <div className="bg-black/5 rounded-lg p-4">
                  <p className="text-sm text-black/80 mb-2 font-medium">To verify Docker installation:</p>
                  <pre className="text-sm text-black/60 bg-white rounded p-3">
                    <code>docker --version
docker-compose --version</code>
                  </pre>
                </div>
              </section>

              {/* Continue with other sections using similar styling... */}
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 