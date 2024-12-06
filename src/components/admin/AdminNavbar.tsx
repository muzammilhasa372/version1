import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Users, Building2, LogOut } from 'lucide-react';
import { useAdminStore } from '../../store/admin-store';
import { useNavigate } from 'react-router-dom';

export function AdminNavbar() {
  const { logout } = useAdminStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/admin/dashboard" className="flex items-center">
              <Settings className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Admin Dashboard</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/admin/users"
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600"
            >
              <Users className="h-5 w-5" />
              <span>Users</span>
            </Link>
            <Link
              to="/admin/gym-owners"
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600"
            >
              <Building2 className="h-5 w-5" />
              <span>Gym Owners</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}