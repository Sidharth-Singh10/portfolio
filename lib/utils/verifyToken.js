import { parse } from 'cookie'
import jwt from 'jsonwebtoken'

export function verifyToken(req) {
  const cookies = parse(req.headers.cookie || '')
  const token = cookies.token

  if (!token) return false

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded.authenticated === true
  } catch (err) {
    return false
  }
}
