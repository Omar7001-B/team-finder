import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface User {
  id: string
  name: string
  level: number
  branch: string
  section: string
  gpa: number
  skills: string[]
}

interface UserCardProps {
  user: User
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p><strong>Level:</strong> {user.level}</p>
        <p><strong>Branch:</strong> {user.branch}</p>
        <p><strong>Section:</strong> {user.section}</p>
        <p><strong>GPA:</strong> {user.gpa.toFixed(2)}</p>
        {user.skills && user.skills.length > 0 && (
          <div>
            <strong>Skills:</strong>
            <ul className="list-disc list-inside">
              {user.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

