import React from 'react';
import { Edit2, Trash2, MoreVertical, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface GymOwner {
  id: string;
  name: string;
  email: string;
  gymName: string;
  location: string;
  joinDate: string;
  status: 'active' | 'pending' | 'suspended';
}

interface GymOwnersListProps {
  gymOwners: GymOwner[];
  onEdit: (owner: GymOwner) => void;
  onDelete: (ownerId: string) => void;
}

export function GymOwnersList({ gymOwners, onEdit, onDelete }: GymOwnersListProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Owner/Gym
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Join Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {gymOwners.map((owner) => (
            <motion.tr
              key={owner.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Building2 className="h-10 w-10 text-gray-400 bg-gray-100 rounded-full p-2" />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{owner.name}</div>
                    <div className="text-sm text-gray-500">{owner.gymName}</div>
                    <div className="text-sm text-gray-500">{owner.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {owner.location}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {owner.joinDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    owner.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : owner.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {owner.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(owner)}
                    className="text-purple-600 hover:text-purple-900"
                  >
                    <Edit2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onDelete(owner.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}