import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="max-w-md mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Auth System</h1>
      <p className="mb-8">Please register or login to continue.</p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/register">Register</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  )
}

