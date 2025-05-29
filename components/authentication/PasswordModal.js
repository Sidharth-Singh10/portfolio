import { useState } from 'react'
import { useRouter } from 'next/router'

export default function PasswordModal({
  isOpen,
  onClose,
  onSuccess,
  title = 'Secret Access',
  placeholder = 'Enter secret password',
}) {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const authenticate = async (password) => {
    const res = await fetch('/api/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    const data = await res.json()
    return data.success
  }

  const handlePasswordSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setPasswordError('')

    try {
      const isAuthenticated = await authenticate(password)

      if (isAuthenticated) {
        console.log('Authenticated!')
        setPassword('')
        setPasswordError('')
        onClose()
        onSuccess()
        router.push('/stories')
      } else {
        console.log('Authentication failed.')
        setPasswordError('Incorrect password. Please try again.')
        setPassword('')
      }
    } catch (error) {
      console.error('Authentication error:', error)
      setPasswordError('Authentication failed. Please try again.')
      setPassword('')
    } finally {
      setIsLoading(false)
    }
  }

  const handleModalClose = () => {
    setPassword('')
    setPasswordError('')
    onClose()
  }

  // Don't render if not open
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-90vw w-96 rounded-lg bg-white p-6 dark:bg-gray-800">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          <button
            onClick={handleModalClose}
            className="text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handlePasswordSubmit}>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Enter Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder={placeholder}
              disabled={isLoading}
              autoFocus
            />
            {passwordError && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">{passwordError}</p>
            )}
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleModalClose}
              className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 rounded-md bg-pink-600 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-pink-700 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading && (
                <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {isLoading ? 'Authenticating...' : 'Enter'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
