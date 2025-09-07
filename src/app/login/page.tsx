
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GraduationCap } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState('');

  const handleLogin = () => {
    if (role) {
      // In a real app, you'd handle authentication here.
      // For now, we'll just store the role in localStorage and redirect.
      localStorage.setItem('userRole', role);
      switch (role) {
        case 'student':
          router.push('/student/dashboard');
          break;
        case 'alumni':
          router.push('/');
          break;
        case 'recruiter':
          router.push('/recruiter/dashboard');
          break;
        case 'institution':
          router.push('/institution/dashboard');
          break;
        default:
          router.push('/');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <GraduationCap className="w-12 h-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold">AlumniVerse</CardTitle>
          <CardDescription>Welcome back! Please log in to your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select onValueChange={setRole} value={role}>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="alumni">Alumni</SelectItem>
                  <SelectItem value="recruiter">Recruiter</SelectItem>
                  <SelectItem value="institution">Institution Management</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleLogin} type="submit" className="w-full">
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
