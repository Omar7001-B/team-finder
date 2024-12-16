// front/lib/api.ts
import { endpoints } from '../src/config/api'

export async function registerUser(userData: any) {
  const response = await fetch(endpoints.auth.register, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Registration failed')
  }

  return response.json()
}

export async function loginUser(credentials: { email: string; password: string }) {
  const response = await fetch(endpoints.auth.login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Login failed')
  }

  return response.json()
}

export async function getUsers(page: number = 1, token: string) {
  const response = await fetch(`${endpoints.users.list}?page=${page}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }

  return response.json()
}