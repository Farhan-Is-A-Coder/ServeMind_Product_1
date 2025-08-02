import React, { useState } from 'react';
import { User, Mail, Calendar, MapPin, Link as LinkIcon, Github, Twitter, Edit, Save, X } from 'lucide-react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    bio: 'AI/ML Engineer passionate about building innovative models and sharing knowledge with the community.',
    location: 'San Francisco, CA',
    website: 'https://alexjohnson.dev',
    github: 'alexjohnson',
    twitter: 'alexjohnson_ai',
    joinDate: '2024-03-15',
    avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
  });

  const [editData, setEditData] = useState(profileData);

  const stats = [
    { label: 'Models Published', value: '12' },
    { label: 'Total Downloads', value: '45.2K' },
    { label: 'API Calls', value: '1.2M' },
    { label: 'Followers', value: '2.8K' }
  ];

  const recentModels = [
    {
      name: 'GPT-4 Text Generator',
      downloads: '25.4K',
      rating: 4.8,
      status: 'Active'
    },
    {
      name: 'Image Classifier Pro',
      downloads: '18.2K',
      rating: 4.6,
      status: 'Active'
    },
    {
      name: 'Sentiment Analyzer',
      downloads: '14.5K',
      rating: 4.7,
      status: 'Pending Review'
    }
  ];

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(profileData);
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-slate-800 rounded-xl p-8 mb-8 border border-slate-700">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="relative">
              <img
                src={profileData.avatar}
                alt={profileData.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-cyan-500"
              />
              <button className="absolute bottom-2 right-2 bg-cyan-500 text-white p-2 rounded-full hover:bg-cyan-400 transition-colors">
                <Edit className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1">
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleInputChange}
                    className="text-2xl font-bold bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white w-full"
                  />
                  <textarea
                    name="bio"
                    value={editData.bio}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-slate-300 resize-none"
                  />
                  <div className="flex space-x-3">
                    <button
                      onClick={handleSave}
                      className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-400 transition-colors"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-colors"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-bold text-white">{profileData.name}</h1>
                    <button
                      onClick={handleEdit}
                      className="flex items-center px-4 py-2 bg-slate-700 text-cyan-400 rounded-lg hover:bg-slate-600 transition-colors border border-slate-600"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </button>
                  </div>
                  <p className="text-slate-300 mb-4 leading-relaxed">{profileData.bio}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      {profileData.email}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {profileData.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Joined {new Date(profileData.joinDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long' 
                      })}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mt-4">
                    {profileData.website && (
                      <a
                        href={profileData.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <LinkIcon className="h-4 w-4 mr-1" />
                        Website
                      </a>
                    )}
                    {profileData.github && (
                      <a
                        href={`https://github.com/${profileData.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        GitHub
                      </a>
                    )}
                    {profileData.twitter && (
                      <a
                        href={`https://twitter.com/${profileData.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <Twitter className="h-4 w-4 mr-1" />
                        Twitter
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700">
              <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Models */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl font-semibold text-white mb-6">Recent Models</h2>
          <div className="space-y-4">
            {recentModels.map((model, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                <div>
                  <h3 className="font-medium text-white">{model.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-slate-400 mt-1">
                    <span>{model.downloads} downloads</span>
                    <span>★ {model.rating}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  model.status === 'Active' 
                    ? 'bg-emerald-500/20 text-emerald-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {model.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;