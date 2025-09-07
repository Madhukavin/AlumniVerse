
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Users, Briefcase, Search, HandCoins } from 'lucide-react';
import Link from 'next/link';

export default function RecruiterDashboard() {
  return (
    <div className="flex flex-col h-full">
       <header className="bg-card border-b border-border p-4 md:p-6 sticky top-0 z-10">
        <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Recruiter Dashboard</h1>
                <p className="text-muted-foreground">
                    Find and recruit top talent from our alumni network.
                </p>
            </div>
             <Link href="/jobs">
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Post a New Job
                </Button>
            </Link>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Search Alumni</CardTitle>
              <Search className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <Link href="/" className="hover:underline">
                    <div className="text-2xl font-bold">Advanced Search</div>
                    <p className="text-xs text-muted-foreground">Filter by skills, experience, and more.</p>
                </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Your Job Postings</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                 <Link href="/jobs" className="hover:underline">
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">Active postings</p>
                </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Applicants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87</div>
              <p className="text-xs text-muted-foreground">New applicants this week</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fundraising</CardTitle>
              <HandCoins className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <Link href="/fundraising" className="hover:underline">
                    <div className="text-2xl font-bold">₹1,25,00,000</div>
                    <p className="text-xs text-muted-foreground">View fundraising analytics</p>
                </Link>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6">
          {/* Placeholder for job postings list or applicant management */}
        </div>
      </main>
    </div>
  );
}
