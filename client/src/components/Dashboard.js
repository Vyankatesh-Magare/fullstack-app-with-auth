import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  User, 
  Shield, 
  Calendar, 
  Mail, 
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Dashboard = () => {
  const { user, isAdmin } = useAuth();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getAccountAge = () => {
    const created = new Date(user?.createdAt);
    const now = new Date();
    const diffTime = Math.abs(now - created);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const stats = [
    {
      name: 'Account Age',
      value: `${getAccountAge()} days`,
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      name: 'Role',
      value: user?.role || 'User',
      icon: Shield,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      name: 'Status',
      value: user?.isActive ? 'Active' : 'Inactive',
      icon: user?.isActive ? CheckCircle : AlertCircle,
      color: user?.isActive ? 'text-green-600' : 'text-red-600',
      bgColor: user?.isActive ? 'bg-green-100' : 'bg-red-100'
    },
    {
      name: 'Last Login',
      value: user?.lastLogin ? formatDate(user.lastLogin) : 'Never',
      icon: Clock,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.name}!
        </h1>
        <p className="mt-2 text-gray-600">
          Here's what's happening with your account.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="card">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Profile Card */}
        <div className="lg:col-span-2">
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Profile Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center">
                  <span className="text-white font-medium text-lg">
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{user?.name}</h3>
                  <p className="text-gray-600">{user?.email}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="text-gray-900 flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-gray-400" />
                    {user?.email}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Role</label>
                  <p className="text-gray-900 flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-gray-400" />
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      user?.role === 'admin' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user?.role}
                    </span>
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Member Since</label>
                  <p className="text-gray-900 flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    {formatDate(user?.createdAt)}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <p className="text-gray-900 flex items-center">
                    {user?.isActive ? (
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    ) : (
                      <AlertCircle className="h-4 w-4 mr-2 text-red-500" />
                    )}
                    <span className={user?.isActive ? 'text-green-600' : 'text-red-600'}>
                      {user?.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <button className="w-full btn btn-primary">
                Edit Profile
              </button>
              {isAdmin && (
                <button className="w-full btn btn-secondary">
                  Manage Users
                </button>
              )}
              <button className="w-full btn btn-secondary">
                View Settings
              </button>
            </div>
          </div>

          {/* System Info */}
          <div className="card mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              System Information
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">API Version:</span>
                <span className="font-medium">2.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Database:</span>
                <span className="font-medium">MongoDB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Authentication:</span>
                <span className="font-medium">JWT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Frontend:</span>
                <span className="font-medium">React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 