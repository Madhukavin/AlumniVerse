
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar, Users, Sparkles } from 'lucide-react';

export default function StudentDashboard() {
  return (
    <div className="flex flex-col h-full">
       <header className="bg-card border-b border-border p-4 md:p-6 sticky top-0 z-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Student Dashboard</h1>
          <p className="text-muted-foreground">
            Your hub for connecting with alumni and finding opportunities.
          </p>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Find Mentors</CardTitle>
              <Sparkles className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">AI-Powered</div>
              <p className="text-xs text-muted-foreground">Get matched with alumni mentors.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Job Board</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">150+</div>
              <p className="text-xs text-muted-foreground">Active job postings</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alumni Directory</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10,000+</div>
              <p className="text-xs text-muted-foreground">Connections to make</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Events this month</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6">
          {/* Placeholder for more student-specific components */}
        </div>
      </main>
    </div>
  );
}
