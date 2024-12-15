'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { registerUser } from '@/lib/api'

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    branch: '',
    section: '',
    gpa: '',
    level: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await registerUser(formData)
      toast({
        title: "Registration successful",
        description: "You can now log in with your credentials.",
      })
      router.push('/login')
    } catch (error) {
      toast({
        title: "Registration failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="branch">Branch</Label>
        <Select name="branch" onValueChange={handleSelectChange('branch')} required>
          <SelectTrigger>
            <SelectValue placeholder="Select branch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Computer Science">Computer Science</SelectItem>
            <SelectItem value="Electrical">Electrical</SelectItem>
            <SelectItem value="Mechanical">Mechanical</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="section">Section</Label>
        <Select name="section" onValueChange={handleSelectChange('section')} required>
          <SelectTrigger>
            <SelectValue placeholder="Select section" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="A">A</SelectItem>
            <SelectItem value="B">B</SelectItem>
            <SelectItem value="C">C</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="gpa">GPA</Label>
        <Input 
          id="gpa" 
          name="gpa" 
          type="number" 
          min="0" 
          max="4" 
          step="0.1" 
          value={formData.gpa} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <Label htmlFor="level">Level</Label>
        <Select name="level" onValueChange={handleSelectChange('level')} required>
          <SelectTrigger>
            <SelectValue placeholder="Select level" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4].map(level => (
              <SelectItem key={level} value={level.toString()}>{level}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </Button>
    </form>
  )
}

