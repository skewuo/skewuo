/**
 * OpenClaw Gateway Service
 * Connects Skewüo to the local OpenClaw Gateway at localhost:18789
 */

const GATEWAY_URL = import.meta.env.VITE_OPENCLAW_URL || 'http://127.0.0.1:18789'
const GATEWAY_TOKEN = import.meta.env.VITE_OPENCLAW_TOKEN || 'c504862200f385f0d49eca13d5c95fc4ac5e23f3e3ecb4da'

const headers = {
  'Authorization': `Bearer ${GATEWAY_TOKEN}`,
  'Content-Type': 'application/json',
}

export interface Session {
  id: string
  agent: string
  channel: string
  peer: string
  lastActive: string
  messageCount: number
}

export interface Agent {
  id: string
  model: string
  sessions: number
  status: 'active' | 'idle'
}

export interface Channel {
  id: string
  type: 'telegram' | 'whatsapp' | 'discord' | 'slack' | 'imessage'
  status: 'connected' | 'disconnected' | 'error'
  account?: string
}

export interface GatewayStatus {
  gateway: string
  agents: number
  sessions: number
  channels: Channel[]
  model: string
  uptime: number
}

export interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
  channel?: string
}

export const openclawService = {
  /**
   * Get gateway health and status
   */
  async getStatus(): Promise<GatewayStatus> {
    const res = await fetch(`${GATEWAY_URL}/`, {
      headers: { 'Authorization': `Bearer ${GATEWAY_TOKEN}` }
    })
    if (!res.ok) throw new Error('Gateway unreachable')
    return res.json()
  },

  /**
   * List all active sessions
   */
  async getSessions(): Promise<Session[]> {
    const res = await fetch(`${GATEWAY_URL}/api/sessions`, { headers })
    if (!res.ok) throw new Error('Failed to get sessions')
    return res.json()
  },

  /**
   * Send a message to an agent session
   */
  async sendMessage(sessionId: string, message: string): Promise<{ reply: string }> {
    const res = await fetch(`${GATEWAY_URL}/api/sessions/${sessionId}/message`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ content: message })
    })
    if (!res.ok) throw new Error('Failed to send message')
    return res.json()
  },

  /**
   * Create a new agent session
   */
  async createSession(channel: string, peer: string): Promise<Session> {
    const res = await fetch(`${GATEWAY_URL}/api/sessions`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ channel, peer })
    })
    if (!res.ok) throw new Error('Failed to create session')
    return res.json()
  },

  /**
   * Get session history
   */
  async getSessionHistory(sessionId: string): Promise<Message[]> {
    const res = await fetch(`${GATEWAY_URL}/api/sessions/${sessionId}/history`, { headers })
    if (!res.ok) throw new Error('Failed to get history')
    return res.json()
  },

  /**
   * List connected channels
   */
  async getChannels(): Promise<Channel[]> {
    const res = await fetch(`${GATEWAY_URL}/api/channels`, { headers })
    if (!res.ok) throw new Error('Failed to get channels')
    return res.json()
  },

  /**
   * Check if gateway is reachable
   */
  async ping(): Promise<boolean> {
    try {
      const res = await fetch(`${GATEWAY_URL}/`, {
        headers: { 'Authorization': `Bearer ${GATEWAY_TOKEN}` },
        signal: AbortSignal.timeout(3000)
      })
      return res.ok || res.status === 401 // 401 means it's up but need auth
    } catch {
      return false
    }
  }
}
