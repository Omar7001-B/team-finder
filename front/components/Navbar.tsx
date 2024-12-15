'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import LogoutButton from './LogoutButton'

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token')
      setIsLoggedIn(!!token)
    }

    checkLoginStatus()
    window.addEventListener('storage', checkLoginStatus)

    return () => {
      window.removeEventListener('storage', checkLoginStatus)
    }
  }, [])

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">Auth System</Link>
          <div className="space-x-4">
            {isLoggedIn ? (
              <>
                <Button asChild variant="ghost">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/explore">Explore</Link>
                </Button>
                <LogoutButton />
              </>
            ) : (
              <>
                {pathname !== '/register' && (
                  <Button asChild variant="ghost">
                    <Link href="/register">Register</Link>
                  </Button>
                )}
                {pathname !== '/login' && (
                  <Button asChild variant="ghost">
                    <Link href="/login">Login</Link>
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

