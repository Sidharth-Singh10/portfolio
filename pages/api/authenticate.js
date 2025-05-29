import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

const PASSWORD = process.env.AUTH_PASSWORD
const JWT_SECRET = process.env.JWT_SECRET
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { password } = req.body

  if (!password) {
    return res.status(400).json({ error: 'Password is required' })
  }

  if (password === PASSWORD) {
    const token = jwt.sign({ authenticated: true }, JWT_SECRET, {
      expiresIn: '1d', // token is valid for 1 day
    })

    const cookie = serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day in seconds
    })

    res.setHeader('Set-Cookie', cookie)
    return res.status(200).json({ success: true, message: 'Authentication successful' })
  } else {
    return res.status(401).json({ success: false, message: 'Invalid password' })
  }
}
