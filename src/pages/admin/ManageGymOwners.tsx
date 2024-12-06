import React, { useState } from 'react';
import { AdminNavbar } from '../../components/admin/AdminNavbar';
import { GymOwnersList } from '../../components/admin/GymOwnersList';
import { Search, Plus } from 'lucide-react';
import toast from 'react-hot-toast';

const mockGymOwners = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@fitzoneelite.com',
    gymName: 'FitZone Elite',
    location: 'New York, NY',
    joinDate: '2024-01-10',
    status: 'active' as const
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@powerhouse.com',
    gymName: 'PowerHouse Gym',
    location: 'Los Angeles, CA',
    joinDate: '2024-02-05',
    status: 'pending' as const
  }
];

export function ManageGymOwners() {
  const [searchQuery, setSearchQuery] = useState('');
  const [gymOwners] = useState(mockGymOwners);

  const handleEdit = (owner: typeof mockGymOwners[0]) => {
    toast.success(`Edit gym owner: ${owner.name}`);
  };

  const handleDelete = (ownerId: string) => {
    toast.success(`Delete gym owner: ${ownerId}`);
  };

  const filteredGymOwners = gymOwners.filter(owner =>
    owner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    owner.gymName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    owner.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Manage Gym Owners</h1>
          <button className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700">
            <Plus className="h-5 w-5 mr-2" />
            Add Gym Owner
          </button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search gym owners..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <GymOwnersList
          gymOwners={filteredGymOwners}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}