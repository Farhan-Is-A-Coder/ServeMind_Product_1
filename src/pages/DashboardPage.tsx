import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, Eye, Download, Edit, Trash2, Plus, Filter } from 'lucide-react';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedModel, setSelectedModel] = useState(null);

  const stats = [
    {
      name: 'Total Models',
      value: '12',
      change: '+3',
      changeType: 'increase',
      icon: BarChart3,
    },
    {
      name: 'Total API Calls',
      value: '156.2k',
      change: '+12.5%',
      changeType: 'increase',
      icon: TrendingUp,
    },
    {
      name: 'Active Users',
      value: '2,847',
      change: '+8.2%',
      changeType: 'increase',
      icon: Users,
    },
    {
      name: 'Revenue',
      value: '$4,293',
      change: '+23.1%',
      changeType: 'increase',
      icon: DollarSign,
    },
  ];

  const models = [
    {
      id: 1,
      name: 'GPT-4 Text Generator',
      category: 'Text Generation',
      status: 'Active',
      views: 125000,
      downloads: 25400,
      apiCalls: 89500,
      revenue: 1247.50,
      lastUpdated: '2025-01-27',
    },
    {
      id: 2,
      name: 'Image Classifier Pro',
      category: 'Image Processing',
      status: 'Active',
      views: 89000,
      downloads: 18200,
      apiCalls: 45300,
      revenue: 892.30,
      lastUpdated: '2025-01-25',
    },
    {
      id: 3,
      name: 'Sentiment Analyzer',
      category: 'Classification',
      status: 'Pending Review',
      views: 67000,
      downloads: 14500,
      apiCalls: 32100,
      revenue: 0,
      lastUpdated: '2025-01-24',
    },
    {
      id: 4,
      name: 'Code Assistant AI',
      category: 'Code Generation',
      status: 'Active',
      views: 156000,
      downloads: 32100,
      apiCalls: 78900,
      revenue: 2153.20,
      lastUpdated: '2025-01-26',
    },
  ];

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'models', name: 'My Models' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'earnings', name: 'Earnings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Developer Dashboard</h1>
          <p className="text-lg text-gray-600">
            Manage your AI models, track performance, and monitor earnings.
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.name} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <stat.icon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                      <div className="flex items-baseline">
                        <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                        <p className={`ml-2 text-sm font-medium ${
                          stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { action: 'New API call', model: 'GPT-4 Text Generator', time: '2 minutes ago' },
                    { action: 'Model downloaded', model: 'Image Classifier Pro', time: '1 hour ago' },
                    { action: 'Revenue earned', model: 'Code Assistant AI', time: '3 hours ago' },
                    { action: 'Model viewed', model: 'Sentiment Analyzer', time: '5 hours ago' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <div>
                        <p className="font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.model}</p>
                      </div>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Models Tab */}
        {activeTab === 'models' && (
          <div className="space-y-6">
            {/* Header with Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center">
                  <Plus className="h-4 w-4 mr-2" />
                  Upload New Model
                </button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
              </div>
            </div>

            {/* Models Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-6 font-medium text-gray-900">Model</th>
                      <th className="text-left py-3 px-6 font-medium text-gray-900">Status</th>
                      <th className="text-left py-3 px-6 font-medium text-gray-900">Views</th>
                      <th className="text-left py-3 px-6 font-medium text-gray-900">Downloads</th>
                      <th className="text-left py-3 px-6 font-medium text-gray-900">API Calls</th>
                      <th className="text-left py-3 px-6 font-medium text-gray-900">Revenue</th>
                      <th className="text-left py-3 px-6 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {models.map((model) => (
                      <tr key={model.id} className="hover:bg-gray-50">
                        <td className="py-4 px-6">
                          <div>
                            <p className="font-medium text-gray-900">{model.name}</p>
                            <p className="text-sm text-gray-600">{model.category}</p>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            model.status === 'Active' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {model.status}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center text-gray-900">
                            <Eye className="h-4 w-4 mr-1 text-gray-400" />
                            {(model.views / 1000).toFixed(0)}k
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center text-gray-900">
                            <Download className="h-4 w-4 mr-1 text-gray-400" />
                            {(model.downloads / 1000).toFixed(0)}k
                          </div>
                        </td>
                        <td className="py-4 px-6 font-medium text-gray-900">
                          {(model.apiCalls / 1000).toFixed(0)}k
                        </td>
                        <td className="py-4 px-6 font-medium text-gray-900">
                          ${model.revenue.toFixed(2)}
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex space-x-2">
                            <button className="p-1 text-gray-400 hover:text-indigo-600 transition-colors">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics Dashboard</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Analytics charts would be displayed here</p>
              </div>
            </div>
          </div>
        )}

        {/* Earnings Tab */}
        {activeTab === 'earnings' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Earnings Overview</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Earnings breakdown would be displayed here</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;