'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import LogoutButton from '@/components/LogoutButton'

export default function DashboardPage() {
  const router = useRouter()
  const [userEmail, setUserEmail] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    if (!token) {
      router.push('/login')
    } else {
      // In a real application, you would decode the JWT token to get the user's email
      // For this example, we'll just use a placeholder
      setUserEmail('user@example.com')
    }
  }, [router])

  if (!userEmail) {
    return null // or a loading spinner
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">Welcome to your dashboard, {userEmail}!</p>
      <LogoutButton />
    </div>
  )
}

