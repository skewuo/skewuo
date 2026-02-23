import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authService } from '../services/auth'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  // Form state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      let response;
      
      if (isLogin) {
        response = await authService.login({
          email: formData.email,
          password: formData.password
        })
      } else {
        response = await authService.register({
          email: formData.email,
          password: formData.password,
          name: formData.name
        })
      }

      // Store the token
      authService.setToken(response.token)

      // Show success message if provided
      if (response.message) {
        // You might want to add a toast notification here
        console.log(response.message)
      }

      // Redirect to dashboard
      navigate('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center text-3xl md:text-4xl font-gaegu font-bold">
          <span className="text-[hsl(var(--color-1))]">s</span>
          <span className="text-[hsl(var(--color-2))]">h</span>
          <span className="text-[hsl(var(--color-3))]">p</span>
          <span className="text-[hsl(var(--color-4))]">d</span>
          <span className="text-black">.</span>
          <span className="text-black">a</span>
          <span className="text-black">i</span>
        </Link>

        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          {isLogin ? 'Welcome back' : 'Create your account'}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={() => {
              setIsLogin(!isLogin)
              setError(null)
            }}
            className="font-medium text-[hsl(var(--color-4))] hover:text-[hsl(var(--color-3))] transition-colors"
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm sm:rounded-xl sm:px-10 border border-gray-100">
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
              {error}
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[hsl(var(--color-4))] focus:outline-none focus:ring-[hsl(var(--color-4))] sm:text-sm"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[hsl(var(--color-4))] focus:outline-none focus:ring-[hsl(var(--color-4))] sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete={isLogin ? "current-password" : "new-password"}
                  required
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[hsl(var(--color-4))] focus:outline-none focus:ring-[hsl(var(--color-4))] sm:text-sm"
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-[hsl(var(--color-4))] focus:ring-[hsl(var(--color-4))]"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-medium text-[hsl(var(--color-4))] hover:text-[hsl(var(--color-3))] transition-colors"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-lg bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--color-4))] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : isLogin ? (
                  'Sign in'
                ) : (
                  'Create account'
                )}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 border border-gray-300 hover:bg-gray-50 transition-all">
                <img className="h-5 w-5" src="/github.svg" alt="GitHub" />
                GitHub
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 border border-gray-300 hover:bg-gray-50 transition-all">
                <img className="h-5 w-5" src="/google.svg" alt="Google" />
                Google
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center items-center gap-8 px-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[hsl(var(--color-4))]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm text-gray-600">Secure login</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[hsl(var(--color-4))]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-sm text-gray-600">End-to-end encrypted</span>
          </div>
        </div>
      </div>
    </div>
  )
} 