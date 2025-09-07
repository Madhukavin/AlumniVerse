
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HandCoins, Target, Trophy } from 'lucide-react';
import { ChartTooltip, ChartTooltipContent, ChartContainer } from '@/components/ui/chart';
import { Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Pie, PieChart, Cell, BarChart } from 'recharts';
import { LeaderboardTable } from '@/components/leaderboard-table';

const chartData = [
  { month: 'Jan', raised: 400000 },
  { month: 'Feb', raised: 300000 },
  { month: 'Mar', raised: 500000 },
  { month: 'Apr', raised: 450000 },
  { month: 'May', raised: 600000 },
  { month: 'Jun', raised: 750000 },
];

const pieData = [
    { name: 'Scholarships', value: 400, fill: 'hsl(var(--chart-1))' },
    { name: 'Infrastructure', value: 300, fill: 'hsl(var(--chart-2))' },
    { name: 'Research Grants', value: 200, fill: 'hsl(var(--chart-3))' },
    { name: 'Student Life', value: 100, fill: 'hsl(var(--chart-4))' },
]

export default function FundraisingPage() {
  return (
    <div className="flex flex-col h-full">
       <header className="bg-card border-b border-border p-4 md:p-6 sticky top-0 z-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Fundraising Analytics</h1>
          <p className="text-muted-foreground">
            Tracking our progress and the impact of your contributions.
          </p>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Raised</CardTitle>
              <HandCoins className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹1,25,00,000</div>
              <p className="text-xs text-muted-foreground">+15% from last year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Campaign Goal</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹2,00,00,000</div>
              <p className="text-xs text-muted-foreground">62.5% of goal reached</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Contributor</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">John Smith</div>
              <p className="text-xs text-muted-foreground">₹5,00,000 this quarter</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6 mt-6 md:grid-cols-5">
            <Card className="md:col-span-3">
                <CardHeader>
                    <CardTitle>Monthly Progress</CardTitle>
                </CardHeader>
                <CardContent>
                     <ChartContainer config={{}} className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData} margin={{ top: 20, right: 20, left: 20, bottom: 5 }}>
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                                <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `₹${Number(value) / 100000}L`} />
                                <ChartTooltip content={<ChartTooltipContent formatter={(value) => `₹${value.toLocaleString()}`}/>} />
                                <Bar dataKey="raised" fill="hsl(var(--primary))" radius={4} />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>
            <Card className="md:col-span-2">
                <CardHeader>
                    <CardTitle>Use of Funds</CardTitle>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={{}} className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                                <ChartTooltip content={<ChartTooltipContent />} />
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
        <div className="mt-6">
            <LeaderboardTable />
        </div>
      </main>
    </div>
  );
}
