import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Activity, MessageSquare, DollarSign, Users, CheckCircle, Clock, ExternalLink, Zap, GitBranch } from 'lucide-react'
import { openclawService } from '../services/openclaw'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] },
})

export default function SkewuoOS() {
  const [gatewayOnline, setGatewayOnline] = useState<boolean | null>(null)

  useEffect(() => {
    openclawService.ping().then(setGatewayOnline)
  }, [])

  const stats = [
    { icon: DollarSign, label: 'Revenue this month', value: '$5,000', sub: 'MK-001 pending', color: 'text-emerald-500' },
    { icon: Users, label: 'Active clients', value: '1', sub: 'The Cobbler Guy', color: 'text-blue-500' },
    { icon: MessageSquare, label: 'AI sessions', value: '2', sub: 'via Telegram', color: 'text-purple-500' },
    { icon: Activity, label: 'Gateway', value: gatewayOnline === null ? '...' : gatewayOnline ? 'Online' : 'Offline', sub: 'Grok 4 · localhost:18789', color: gatewayOnline ? 'text-emerald-500' : 'text-red-500' },
  ]

  const setupSteps = [
    { title: 'Gateway running', desc: 'localhost:18789 · Grok 4', done: !!gatewayOnline, cmd: 'openclaw gateway --port 18789' },
    { title: 'Telegram connected', desc: 'Bot token configured', done: true, cmd: null },
    { title: 'WhatsApp Business', desc: 'Connect Guillaume\'s account', done: false, cmd: 'openclaw channels login --channel whatsapp' },
    { title: 'The Cobbler Guy webhook', desc: 'Auto-create orders from DMs', done: false, cmd: 'openclaw webhooks add --name the-cobbler-guy --url http://localhost:3002/api/mk/webhook' },
    { title: 'Stripe secrets', desc: 'Invoice & payment management', done: false, cmd: 'openclaw secrets set STRIPE_SECRET_KEY sk_...' },
    { title: 'The Cobbler Guy agent', desc: 'Train AI on services & pricing', done: false, cmd: 'openclaw agent configure --name the-cobbler-guy' },
  ]

  const channels = [
    { name: 'Telegram', status: 'connected', detail: 'Bot connected · ready' },
    { name: 'WhatsApp', status: 'disconnected', detail: 'Not connected yet' },
    { name: 'iMessage', status: 'disconnected', detail: 'Requires BlueBubbles node' },
    { name: 'Discord', status: 'disconnected', detail: 'Not connected yet' },
  ]

  const invoices = [
    { id: 'MK-001', client: 'The Cobbler Guy', amount: '$2,500', status: 'pending', due: 'Due upon acceptance' },
    { id: 'MK-002', client: 'The Cobbler Guy', amount: '$2,500', status: 'draft', due: 'Due on completion' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-16 py-16">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-12">
          <div className="flex items-center gap-2.5 mb-4">
            <div className={`w-2 h-2 rounded-full ${
              gatewayOnline === null ? 'bg-yellow-400 animate-pulse' :
              gatewayOnline ? 'bg-emerald-500' : 'bg-red-500'
            }`} />
            <span className="text-sm text-muted-foreground font-mono">
              openclaw · {gatewayOnline === null ? 'connecting...' : gatewayOnline ? 'online' : 'offline'} · localhost:18789
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-foreground">
            Skewüo OS
          </h1>
          <p className="text-xl text-muted-foreground mt-3 max-w-xl">
            The autonomous agency engine. Powered by OpenClaw.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} {...fadeUp(0.05 * (i + 1))} className="bg-secondary/30 border border-border rounded-xl p-5">
              <stat.icon className={`w-5 h-5 ${stat.color} mb-3`} />
              <div className="text-2xl font-semibold tracking-tight text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-0.5">{stat.label}</div>
              {stat.sub && <div className="text-xs text-muted-foreground/60 mt-1">{stat.sub}</div>}
            </motion.div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">

          {/* Setup Steps */}
          <motion.div {...fadeUp(0.25)} className="bg-secondary/30 border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Setup Progress</h2>
              <span className="text-xs text-muted-foreground">
                {setupSteps.filter(s => s.done).length}/{setupSteps.length} complete
              </span>
            </div>
            <div className="space-y-4">
              {setupSteps.map((step) => (
                <div key={step.title} className="flex items-start gap-3">
                  {step.done
                    ? <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    : <Clock className="w-4 h-4 text-muted-foreground/40 mt-0.5 flex-shrink-0" />
                  }
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-medium ${step.done ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-muted-foreground/60">{step.desc}</div>
                    {!step.done && step.cmd && (
                      <code className="text-xs font-mono text-muted-foreground/50 mt-1 block truncate">
                        $ {step.cmd}
                      </code>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Channels + Quick Links */}
          <div className="space-y-6">
            <motion.div {...fadeUp(0.3)} className="bg-secondary/30 border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Channels</h2>
                <a href="http://127.0.0.1:18789" target="_blank" rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  Open Control UI <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="space-y-3">
                {channels.map((ch) => (
                  <div key={ch.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${ch.status === 'connected' ? 'bg-emerald-500' : 'bg-border'}`} />
                      <div>
                        <div className="text-sm text-foreground">{ch.name}</div>
                        <div className="text-xs text-muted-foreground/60">{ch.detail}</div>
                      </div>
                    </div>
                    <span className={`text-xs ${ch.status === 'connected' ? 'text-emerald-500' : 'text-muted-foreground/40'}`}>
                      {ch.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.35)} className="bg-secondary/30 border border-border rounded-xl p-6">
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">Quick Links</h2>
              <div className="space-y-2">
                {[
                  { label: 'OpenClaw Control UI', url: 'http://127.0.0.1:18789', icon: Activity },
                  { label: 'Invoice Generator', url: 'http://localhost:5173', icon: DollarSign },
                  { label: 'The Cobbler Guy Platform', url: 'http://localhost:3000', icon: GitBranch },
                  { label: 'The Cobbler Guy Admin', url: 'http://localhost:3000/admin', icon: Zap },
                  { label: 'Platform API', url: 'http://localhost:3002/health', icon: Activity },
                ].map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                    <div className="flex items-center gap-2">
                      <link.icon className="w-3.5 h-3.5" />
                      {link.label}
                    </div>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Invoices + Clients */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div {...fadeUp(0.4)} className="bg-secondary/30 border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Invoices</h2>
              <a href="http://localhost:5173" target="_blank" rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                Generate <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="space-y-1">
              {invoices.map((inv) => (
                <div key={inv.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-muted-foreground">{inv.id}</span>
                    <div>
                      <div className="text-sm text-foreground">{inv.client}</div>
                      <div className="text-xs text-muted-foreground/60">{inv.due}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-foreground">{inv.amount}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      inv.status === 'pending' ? 'text-yellow-400 bg-yellow-400/10' :
                      inv.status === 'paid' ? 'text-emerald-500 bg-emerald-500/10' :
                      'text-muted-foreground bg-secondary'
                    }`}>
                      {inv.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Clients */}
          <motion.div {...fadeUp(0.45)} className="bg-secondary/30 border border-border rounded-xl p-6">
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">Clients</h2>
            <div className="flex items-center gap-4 py-3 border-b border-border">
              <div className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center text-xs font-bold">M</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground">The Cobbler Guy</div>
                <div className="text-xs text-muted-foreground/60">thecobblerguy.com · Guillaume Berteau · Miami</div>
              </div>
              <span className="text-xs text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">active</span>
            </div>
            <div className="pt-4">
              <div className="text-xs text-muted-foreground/40 text-center py-4">
                More clients coming soon via OpenClaw agent
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}
