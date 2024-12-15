'use client'

import { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface User {
  _id: string
  name: string
  email: string
  level: number
  gpa: number
  section: string
  branch: string
  skills?: string[]
  requests?: any[]
  createdAt: string
  updatedAt: string
}

export default function ExplorePage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users', {
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }

        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) {
    return <div className="container mt-8">Loading...</div>
  }

  if (error) {
    return <div className="container mt-8 text-red-500">Error: {error}</div>
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Explore Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <Card key={user._id}>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Branch:</span>
                  <span>{user.branch}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Section:</span>
                  <span>{user.section}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Level:</span>
                  <span>{user.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GPA:</span>
                  <span>{user.gpa}</span>
                </div>
                {user.skills && user.skills.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {user.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

