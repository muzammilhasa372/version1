import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, CreditCard, TrendingUp } from 'lucide-react';
import { AdminNavbar } from '../../components/admin/AdminNavbar';

export function AdminDashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: '2,543',
      change: '+12.5%',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Gym Partners',
      value: '156',
      change: '+5.2%',
      icon: Building2,
      color: 'bg-purple-500'
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+8.1%',
      icon: CreditCard,
      color: 'bg-green-500'
    },
    {
      title: 'Active Subscriptions',
      value: '1,789',
      change: '+15.3%',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <div className="flex items-center">
                <div className={`${stat.color} rounded-md p-3`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                    <p className="ml-2 text-sm font-medium text-green-600">{stat.change}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
          <div className="bg-white shadow rounded-lg">
            {/* Activity items would go here */}
          </div>
        </div>
      </div>
    </div>
  );
}