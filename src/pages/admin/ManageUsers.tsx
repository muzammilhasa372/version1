import React, { useState } from 'react';
import { AdminNavbar } from '../../components/admin/AdminNavbar';
import { UsersList } from '../../components/admin/UsersList';
import { Search, Plus } from 'lucide-react';
import toast from 'react-hot-toast';

const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    membershipType: 'Pro Pass',
    joinDate: '2024-01-15',
    status: 'active' as const
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    membershipType: 'Basic Pass',
    joinDate: '2024-02-01',
    status: 'active' as const
  }
];

export function ManageUsers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [users] = useState(mockUsers);

  const handleEdit = (user: typeof mockUsers[0]) => {
    toast.success(`Edit user: ${user.name}`);
  };

  const handleDelete = (userId: string) => {
    toast.success(`Delete user: ${userId}`);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Manage Users</h1>
          <button className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700">
            <Plus className="h-5 w-5 mr-2" />
            Add User
          </button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <UsersList
          users={filteredUsers}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}