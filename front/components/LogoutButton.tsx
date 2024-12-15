'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function LogoutButton() {
  const router = useRouter()
  const { toast } = useToast()

  const handleLogout = () => {
    localStorage.removeItem('token')
    sessionStorage.removeItem('token')
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    })
    router.push('/login')
  }

  return (
    <Button onClick={handleLogout} variant="outline">
      Logout
    </Button>
  )
}

