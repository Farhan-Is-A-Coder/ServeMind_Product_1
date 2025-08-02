import React, { useState } from 'react';
import { Bell, Shield, CreditCard, Key, Globe, Moon, Sun, Monitor } from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      marketing: false,
      security: true
    },
    privacy: {
      profileVisibility: 'public',
      showEmail: false,
      showStats: true
    },
    appearance: {
      theme: 'dark',
      language: 'en'
    },
    security: {
      twoFactor: false,
      sessionTimeout: '24h'
    }
  });

  const tabs = [
    { id: 'account', name: 'Account', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'security', name: 'Security', icon: Key },
    { id: 'appearance', name: 'Appearance', icon: Monitor },
  ];

  const handleToggle = (section: string, key: string) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [key]: !prev[section as keyof typeof prev][key as keyof typeof prev[typeof section]]
      }
    }));
  };

  const handleSelect = (section: string, key: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [key]: value
      }
    }));
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Settings</h1>
          <p className="text-lg text-slate-300">Manage your account preferences and settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              {activeTab === 'account' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-white">Account Settings</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Alex Johnson"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="alex.johnson@example.com"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Username
                      </label>
                      <input
                        type="text"
                        defaultValue="alexjohnson"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Bio
                      </label>
                      <textarea
                        rows={4}
                        defaultValue="AI/ML Engineer passionate about building innovative models and sharing knowledge with the community."
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white resize-none"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button className="px-6 py-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors">
                      Cancel
                    </button>
                    <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg hover:from-cyan-400 hover:to-emerald-400 transition-all">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-white">Notification Preferences</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-white">Email Notifications</h3>
                        <p className="text-sm text-slate-400">Receive notifications via email</p>
                      </div>
                      <button
                        onClick={() => handleToggle('notifications', 'email')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.notifications.email ? 'bg-cyan-500' : 'bg-slate-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.notifications.email ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-white">Push Notifications</h3>
                        <p className="text-sm text-slate-400">Receive push notifications in your browser</p>
                      </div>
                      <button
                        onClick={() => handleToggle('notifications', 'push')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.notifications.push ? 'bg-cyan-500' : 'bg-slate-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.notifications.push ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-white">Marketing Communications</h3>
                        <p className="text-sm text-slate-400">Receive updates about new features and promotions</p>
                      </div>
                      <button
                        onClick={() => handleToggle('notifications', 'marketing')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.notifications.marketing ? 'bg-cyan-500' : 'bg-slate-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.notifications.marketing ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-white">Security Alerts</h3>
                        <p className="text-sm text-slate-400">Important security notifications</p>
                      </div>
                      <button
                        onClick={() => handleToggle('notifications', 'security')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.notifications.security ? 'bg-cyan-500' : 'bg-slate-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.notifications.security ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'billing' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-white">Billing & Subscription</h2>
                  
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-white">Current Plan</h3>
                        <p className="text-slate-300">Pro Plan - $29/month</p>
                      </div>
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
                        Active
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 mb-4">
                      Next billing date: February 15, 2025
                    </p>
                    <div className="flex space-x-3">
                      <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-colors">
                        Upgrade Plan
                      </button>
                      <button className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-600 transition-colors">
                        Cancel Subscription
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-4">Payment Methods</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="h-6 w-6 text-slate-400" />
                          <div>
                            <p className="font-medium text-white">•••• •••• •••• 4242</p>
                            <p className="text-sm text-slate-400">Expires 12/26</p>
                          </div>
                        </div>
                        <button className="text-cyan-400 hover:text-cyan-300 text-sm">
                          Edit
                        </button>
                      </div>
                    </div>
                    <button className="mt-3 text-cyan-400 hover:text-cyan-300 text-sm">
                      + Add Payment Method
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-white">Security Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-white mb-4">Password</h3>
                      <button className="px-4 py-2 bg-slate-700 text-cyan-400 rounded-lg hover:bg-slate-600 transition-colors border border-slate-600">
                        Change Password
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-white">Two-Factor Authentication</h3>
                        <p className="text-sm text-slate-400">Add an extra layer of security to your account</p>
                      </div>
                      <button
                        onClick={() => handleToggle('security', 'twoFactor')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.security.twoFactor ? 'bg-cyan-500' : 'bg-slate-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.security.twoFactor ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div>
                      <h3 className="font-medium text-white mb-2">Session Timeout</h3>
                      <select
                        value={settings.security.sessionTimeout}
                        onChange={(e) => handleSelect('security', 'sessionTimeout', e.target.value)}
                        className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="1h">1 hour</option>
                        <option value="24h">24 hours</option>
                        <option value="7d">7 days</option>
                        <option value="30d">30 days</option>
                      </select>
                    </div>

                    <div>
                      <h3 className="font-semibold text-white mb-4">API Keys</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                          <div>
                            <p className="font-medium text-white">Production API Key</p>
                            <p className="text-sm text-slate-400 font-mono">mk_prod_••••••••••••••••</p>
                          </div>
                          <button className="text-cyan-400 hover:text-cyan-300 text-sm">
                            Regenerate
                          </button>
                        </div>
                      </div>
                      <button className="mt-3 text-cyan-400 hover:text-cyan-300 text-sm">
                        + Create New API Key
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'appearance' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-white">Appearance Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-white mb-4">Theme</h3>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: 'light', name: 'Light', icon: Sun },
                          { id: 'dark', name: 'Dark', icon: Moon },
                          { id: 'system', name: 'System', icon: Monitor }
                        ].map(theme => (
                          <button
                            key={theme.id}
                            onClick={() => handleSelect('appearance', 'theme', theme.id)}
                            className={`flex flex-col items-center p-4 rounded-lg border transition-colors ${
                              settings.appearance.theme === theme.id
                                ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                                : 'border-slate-600 text-slate-300 hover:border-slate-500'
                            }`}
                          >
                            <theme.icon className="h-6 w-6 mb-2" />
                            <span className="text-sm">{theme.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-white mb-2">Language</h3>
                      <select
                        value={settings.appearance.language}
                        onChange={(e) => handleSelect('appearance', 'language', e.target.value)}
                        className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                        <option value="zh">中文</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;