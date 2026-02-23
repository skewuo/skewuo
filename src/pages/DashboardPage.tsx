import { Link } from 'react-router-dom'
import { Home, Settings, CreditCard, Mail, Lock, Database, Terminal, Rocket } from 'lucide-react'
import { useState } from 'react'

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState('dashboard') // 'dashboard' | 'framework' | etc

  // Function to render the main content based on active section
  const renderMainContent = () => {
    switch (activeSection) {
      case 'framework':
        return (
          <>
            <div className="h-16 border-b border-gray-200 bg-white px-8 flex items-center justify-between">
              <h1 className="text-xl font-semibold text-gray-900">Framework Selection</h1>
            </div>
            <div className="p-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Vite Card */}
                  <div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-[hsl(var(--color-3))] transition-all shadow-sm hover:shadow-md">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <img src="/vite.svg" alt="Vite" className="w-12 h-12" />
                        <div>
                          <h3 className="text-xl font-semibold text-black">Vite</h3>
                          <p className="text-sm text-black/60">Lightning fast build tool</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 text-sm bg-[hsl(var(--color-4))] text-white rounded-full">
                        Recommended
                      </span>
                    </div>
                    {/* Rest of Vite card content */}
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-black/70">
                        <span className="mr-2 text-[hsl(var(--color-4))]">✓</span>
                        Instant server start
                      </li>
                      <li className="flex items-center text-black/70">
                        <span className="mr-2 text-[hsl(var(--color-4))]">✓</span>
                        Hot Module Replacement
                      </li>
                      <li className="flex items-center text-black/70">
                        <span className="mr-2 text-[hsl(var(--color-4))]">✓</span>
                        True on-demand compilation
                      </li>
                    </ul>
                    <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-all">
                      Select Vite
                    </button>
                  </div>

                  {/* Next.js Card */}
                  <div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-[hsl(var(--color-3))] transition-all shadow-sm hover:shadow-md">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <img src="/next.svg" alt="Next.js" className="w-12 h-12" />
                        <div>
                          <h3 className="text-xl font-semibold text-black">Next.js</h3>
                          <p className="text-sm text-black/60">React framework by Vercel</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 text-sm bg-black text-white rounded-full">
                        Popular
                      </span>
                    </div>
                    {/* Rest of Next.js card content */}
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-black/70">
                        <span className="mr-2 text-[hsl(var(--color-4))]">✓</span>
                        Server-side rendering
                      </li>
                      <li className="flex items-center text-black/70">
                        <span className="mr-2 text-[hsl(var(--color-4))]">✓</span>
                        Static site generation
                      </li>
                      <li className="flex items-center text-black/70">
                        <span className="mr-2 text-[hsl(var(--color-4))]">✓</span>
                        API routes built-in
                      </li>
                    </ul>
                    <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-all">
                      Select Next.js
                    </button>
                  </div>
                </div>

                {/* Coming Soon Section */}
                <div className="mt-12">
                  <h2 className="text-lg font-semibold text-black mb-4">Coming Soon</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Remix', 'Astro', 'Gatsby'].map((framework) => (
                      <div key={framework} className="bg-white p-6 rounded-xl border border-gray-100 opacity-50">
                        <div className="flex items-center gap-3">
                          <img src={`/${framework.toLowerCase()}.svg`} alt={framework} className="w-8 h-8" />
                          <h3 className="text-lg font-medium text-black">{framework}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      
      case 'payment':
        return (
          <>
            <div className="h-16 border-b border-gray-200 bg-white px-8 flex items-center justify-between">
              <h1 className="text-xl font-semibold text-gray-900">Payment Integration</h1>
            </div>
            <div className="p-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Stripe Card */}
                  <div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-[hsl(var(--color-3))] transition-all shadow-sm hover:shadow-md">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <img src="/stripe.svg" alt="Stripe" className="w-12 h-12" />
                        <div>
                          <h3 className="text-xl font-semibold text-black">Stripe</h3>
                          <p className="text-sm text-black/60">Global payment platform</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 text-sm bg-[hsl(var(--color-4))] text-white rounded-full">
                        Popular
                      </span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-black/70">
                        <span className="mr-2 text-[hsl(var(--color-4))]">✓</span>
                        Global payment methods
                      </li>
                      <li className="flex items-center text-black/70">
                        <span className="mr-2 text-[hsl(var(--color-4))]">✓</span>
                        Extensive documentation
                      </li>
                      <li className="flex items-center text-black/70">
                        <span className="mr-2 text-[hsl(var(--color-4))]">✓</span>
                        Fraud protection
                      </li>
                    </ul>
                    <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-all">
                      Select Stripe
                    </button>
                  </div>

                  {/* Lemonsqueezy Card */}
                  <div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-[hsl(var(--color-3))] transition-all shadow-sm hover:shadow-md">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <img src="/lemonsqueezy.svg" alt="Lemonsqueezy" className="w-12 h-12" />
                        <div>
                          <h3 className="text-xl font-semibold text-black">Lemonsqueezy</h3>
                          <p className="text-sm text-black/60">Simple payment solution</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 text-sm bg-black text-white rounded-full">
                        Simple
                      </span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-black/70">
                        <span className="mr-2 text-[hsl(var(--color-4))]">✓</span>
                        Quick setup
                      </li>
                      <li className="flex items-center text-black/70">
                        <span className="mr-2 text-[hsl(var(--color-4))]">✓</span>
                        Built-in checkout
                      </li>
                      <li className="flex items-center text-black/70">
                        <span className="mr-2 text-[hsl(var(--color-4))]">✓</span>
                        Subscription management
                      </li>
                    </ul>
                    <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-all">
                      Select Lemonsqueezy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )

      case 'email':
        return (
          <>
            <div className="h-16 border-b border-gray-200 bg-white px-8 flex items-center justify-between">
              <h1 className="text-xl font-semibold text-gray-900">Email Provider</h1>
            </div>
            <div className="p-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      name: 'Resend',
                      description: 'Email API for developers',
                      features: ['Modern API', 'Easy integration', 'Analytics'],
                      badge: 'Recommended'
                    },
                    {
                      name: 'Loops',
                      description: 'Email automation platform',
                      features: ['Automation', 'Templates', 'CRM integration'],
                      badge: 'New'
                    },
                    {
                      name: 'Postmark',
                      description: 'Transactional email service',
                      features: ['High deliverability', 'Templates', 'Analytics'],
                      badge: 'Reliable'
                    },
                    {
                      name: 'Amazon SES',
                      description: 'AWS email service',
                      features: ['Cost-effective', 'Scalable', 'AWS integration'],
                      badge: 'Enterprise'
                    }
                  ].map((provider) => (
                    <div key={provider.name} className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[hsl(var(--color-3))] transition-all shadow-sm hover:shadow-md">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black">{provider.name}</h3>
                          <p className="text-sm text-black/60">{provider.description}</p>
                        </div>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {provider.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-black/70">
                            <span className="mr-2 text-[hsl(var(--color-4))]">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-all">
                        Select {provider.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )

      case 'auth':
        return (
          <>
            <div className="h-16 border-b border-gray-200 bg-white px-8 flex items-center justify-between">
              <h1 className="text-xl font-semibold text-gray-900">Authentication</h1>
            </div>
            <div className="p-8">
              <div className="max-w-7xl mx-auto">
                <div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-[hsl(var(--color-3))] transition-all shadow-sm hover:shadow-md">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <img src="/supabase.svg" alt="Supabase" className="w-12 h-12" />
                      <div>
                        <h3 className="text-xl font-semibold text-black">Supabase Auth</h3>
                        <p className="text-sm text-black/60">Complete auth solution</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-sm bg-[hsl(var(--color-4))] text-white rounded-full">
                      Recommended
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-black/70">
                      <span className="mr-2 text-[hsl(var(--color-4))]">✓</span>
                      Multiple auth providers
                    </li>
                    <li className="flex items-center text-black/70">
                      <span className="mr-2 text-[hsl(var(--color-4))]">✓</span>
                      Row level security
                    </li>
                    <li className="flex items-center text-black/70">
                      <span className="mr-2 text-[hsl(var(--color-4))]">✓</span>
                      User management
                    </li>
                  </ul>
                  <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-all">
                    Select Supabase Auth
                  </button>
                </div>
              </div>
            </div>
          </>
        )

      case 'database':
        return (
          <>
            <div className="h-16 border-b border-gray-200 bg-white px-8 flex items-center justify-between">
              <h1 className="text-xl font-semibold text-gray-900">Database Selection</h1>
            </div>
            <div className="p-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      name: 'MongoDB',
                      description: 'NoSQL database',
                      features: ['Document-based', 'Scalable', 'Flexible schema'],
                      badge: 'Popular'
                    },
                    {
                      name: 'PostgreSQL',
                      description: 'SQL database',
                      features: ['ACID compliant', 'Reliable', 'Feature-rich'],
                      badge: 'Enterprise'
                    },
                    {
                      name: 'Supabase',
                      description: 'Postgres-based platform',
                      features: ['Real-time', 'Auth included', 'Auto-generated API'],
                      badge: 'Recommended'
                    }
                  ].map((db) => (
                    <div key={db.name} className="bg-white p-8 rounded-xl border border-gray-100 hover:border-[hsl(var(--color-3))] transition-all shadow-sm hover:shadow-md">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-xl font-semibold text-black">{db.name}</h3>
                          <p className="text-sm text-black/60">{db.description}</p>
                        </div>
                        <span className="px-3 py-1 text-sm bg-[hsl(var(--color-4))] text-white rounded-full">
                          {db.badge}
                        </span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {db.features.map((feature) => (
                          <li key={feature} className="flex items-center text-black/70">
                            <span className="mr-2 text-[hsl(var(--color-4))]">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-all">
                        Select {db.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )

      default:
        return (
          <>
            <div className="h-16 border-b border-gray-200 bg-white px-8 flex items-center justify-between">
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-black/90">
                  Deploy Changes
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="max-w-7xl mx-auto">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Status",
                      value: "Healthy",
                      icon: <Settings className="h-6 w-6" />,
                      color: "text-[hsl(var(--color-4))]",
                      dot: true
                    },
                    {
                      title: "API Usage",
                      value: "2.4k requests",
                      icon: <Terminal className="h-6 w-6" />
                    },
                    {
                      title: "Environment",
                      value: "Production",
                      icon: <Database className="h-6 w-6" />
                    }
                  ].map((card, index) => (
                    <div key={index} className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100">
                      <div className="p-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 text-gray-400">
                            {card.icon}
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 truncate">
                                {card.title}
                              </dt>
                              <dd className="flex items-center text-lg font-medium text-gray-900">
                                {card.dot && <span className={`${card.color} mr-2`}>●</span>}
                                {card.value}
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Configuration Status */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                    Configuration Status
                  </h3>
                  <div className="bg-white shadow-sm overflow-hidden rounded-xl border border-gray-100">
                    <ul className="divide-y divide-gray-200">
                      {[
                        { name: 'Database Connection', status: 'Configured', icon: '✓' },
                        { name: 'Email Provider', status: 'Not Configured', icon: '!' },
                        { name: 'Payment Integration', status: 'Configured', icon: '✓' },
                        { name: 'Authentication', status: 'Configured', icon: '✓' },
                      ].map((item, index) => (
                        <li key={index} className="hover:bg-gray-50 transition-colors">
                          <div className="px-6 py-4 flex items-center">
                            <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                              <div>
                                <div className="flex text-sm">
                                  <p className="font-medium text-gray-900">{item.name}</p>
                                </div>
                              </div>
                              <div className="mt-4 flex-shrink-0 sm:mt-0">
                                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                  item.status === 'Configured' 
                                    ? 'bg-[hsl(var(--color-4))/10] text-[hsl(var(--color-4))]' 
                                    : 'bg-[hsl(var(--color-2))/10] text-[hsl(var(--color-2))]'
                                }`}>
                                  {item.icon} {item.status}
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
    }
  }

  // Update the Configuration section click handlers
  const configItems = [
    { icon: CreditCard, name: "Payment Setup", section: 'payment' },
    { icon: Mail, name: "Email Config", section: 'email' },
    { icon: Lock, name: "Authentication", section: 'auth' },
    { icon: Database, name: "Database", section: 'database' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-white border-r border-gray-200">
          {/* Sidebar Header/Logo */}
          <div className="h-16 flex items-center px-4 border-b border-gray-200">
            <Link to="/" className="text-xl font-gaegu font-bold" >
              <span className="text-[hsl(var(--color-1))]">s</span>
              <span className="text-[hsl(var(--color-2))]">h</span>
              <span className="text-[hsl(var(--color-3))]">p</span>
              <span className="text-[hsl(var(--color-4))]">d</span>
              <span className="text-black">.</span>
              <span className="text-black">a</span>
              <span className="text-black">i</span>
            </Link>
          </div>

          <div className="h-[calc(100vh-64px)] px-3 py-4 overflow-y-auto">
            {/* Dashboard Section */}
            <ul className="space-y-2 font-medium">
              <li>
                <button
                  onClick={() => setActiveSection('dashboard')}
                  className={`flex w-full items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 ${
                    activeSection === 'dashboard' ? 'bg-gray-100' : ''
                  }`}
                >
                  <Home className="w-5 h-5" />
                  <span className="ml-3">Dashboard</span>
                </button>
              </li>
            </ul>

            {/* General Section */}
            <div className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200">
              <p className="px-2 text-sm font-semibold text-gray-400 uppercase">General</p>
              <ul className="space-y-1">
                <li>
                  <button 
                    onClick={() => setActiveSection('framework')}
                    className={`flex w-full items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 ${
                      activeSection === 'framework' ? 'bg-gray-100' : ''
                    }`}
                  >
                    <Settings className="w-5 h-5" />
                    <span className="ml-3">Frameworks</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Configuration Section */}
            <div className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200">
              <p className="px-2 text-sm font-semibold text-gray-400 uppercase">Configuration</p>
              <ul className="space-y-1">
                {configItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => setActiveSection(item.section)}
                      className={`flex w-full items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 ${
                        activeSection === item.section ? 'bg-gray-100' : ''
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="ml-3">{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deployment Section */}
            <div className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200">
              <p className="px-2 text-sm font-semibold text-gray-400 uppercase">Deployment</p>
              <ul className="space-y-1">
                {[
                  { icon: Terminal, name: "Environment" },
                  { icon: Rocket, name: "Deploy" }
                ].map((item) => (
                  <li key={item.name}>
                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                      <item.icon className="w-5 h-5" />
                      <span className="ml-3">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="ml-64 flex-1">
          {renderMainContent()}
        </main>
      </div>
    </div>
  )
} 