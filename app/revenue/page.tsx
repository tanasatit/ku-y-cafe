'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, TrendingUp, Calendar, Users } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line } from 'recharts';

interface RevenuePageProps {
  onBackHome: () => void;
}

const dailyData = [
  { day: 'Mon', revenue: 1200 },
  { day: 'Tue', revenue: 1450 },
  { day: 'Wed', revenue: 980 },
  { day: 'Thu', revenue: 1670 },
  { day: 'Fri', revenue: 2100 },
  { day: 'Sat', revenue: 3200 },
  { day: 'Sun', revenue: 2750 },
];

const monthlyData = [
  { month: 'Jan', revenue: 18500 },
  { month: 'Feb', revenue: 19200 },
  { month: 'Mar', revenue: 21500 },
  { month: 'Apr', revenue: 22500 },
  { month: 'May', revenue: 24200 },
  { month: 'Jun', revenue: 26000 },
  { month: 'Jul', revenue: 27800 },
];

export default function RevenuePage({ onBackHome }: RevenuePageProps) {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl font-medium text-foreground">Cafe Revenue Dashboard</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track KU-Y Cafe’s performance with daily and monthly revenue insights.
          </p>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 rounded-2xl shadow-lg">
            <CardContent className="flex flex-col items-center text-center space-y-2">
              <DollarSign className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-medium">$12,450</h3>
              <p className="text-muted-foreground text-sm">This Week</p>
            </CardContent>
          </Card>

          <Card className="p-6 rounded-2xl shadow-lg">
            <CardContent className="flex flex-col items-center text-center space-y-2">
              <TrendingUp className="h-8 w-8 text-accent" />
              <h3 className="text-xl font-medium">+12%</h3>
              <p className="text-muted-foreground text-sm">Growth vs. Last Week</p>
            </CardContent>
          </Card>

          <Card className="p-6 rounded-2xl shadow-lg">
            <CardContent className="flex flex-col items-center text-center space-y-2">
              <Calendar className="h-8 w-8 text-destructive" />
              <h3 className="text-xl font-medium">$27,800</h3>
              <p className="text-muted-foreground text-sm">This Month</p>
            </CardContent>
          </Card>

          <Card className="p-6 rounded-2xl shadow-lg">
            <CardContent className="flex flex-col items-center text-center space-y-2">
              <Users className="h-8 w-8 text-amber-500" />
              <h3 className="text-xl font-medium">1,245</h3>
              <p className="text-muted-foreground text-sm">Customers Served</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Charts */}
      <section className="container mx-auto px-4 space-y-12">
        {/* Daily Revenue Chart */}
        <div className="bg-card p-6 rounded-2xl shadow-xl border">
          <h2 className="text-2xl font-medium mb-6">Daily Revenue (This Week)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Revenue Chart */}
        <div className="bg-card p-6 rounded-2xl shadow-xl border">
          <h2 className="text-2xl font-medium mb-6">Monthly Revenue (2025)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}
