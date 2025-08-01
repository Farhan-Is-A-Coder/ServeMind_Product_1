import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Eye, Download, MessageSquare, Image, Brain, Code, Music } from 'lucide-react';

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Models', icon: Brain },
    { id: 'text', name: 'Text Generation', icon: MessageSquare },
    { id: 'image', name: 'Image Processing', icon: Image },
    { id: 'classification', name: 'Classification', icon: Brain },
    { id: 'code', name: 'Code Generation', icon: Code },
    { id: 'audio', name: 'Audio Processing', icon: Music },
  ];

  const models = [
    {
      id: '1',
      name: 'GPT-4 Text Generator',
      description: 'Advanced language model for high-quality text generation and completion tasks.',
      category: 'text',
      author: 'OpenAI Labs',
      rating: 4.8,
      views: 125000,
      downloads: 25400,
      price: 'Free',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: '2',
      name: 'Image Classifier Pro',
      description: 'State-of-the-art image classification model trained on 10M+ diverse images.',
      category: 'image',
      author: 'VisionTech',
      rating: 4.6,
      views: 89000,
      downloads: 18200,
      price: '$9.99/mo',
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: '3',
      name: 'Sentiment Analyzer',
      description: 'Accurate sentiment analysis for social media, reviews, and customer feedback.',
      category: 'classification',
      author: 'DataMind',
      rating: 4.7,
      views: 67000,
      downloads: 14500,
      price: 'Free',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: '4',
      name: 'Code Assistant AI',
      description: 'Intelligent code completion and generation for multiple programming languages.',
      category: 'code',
      author: 'CodeCraft AI',
      rating: 4.9,
      views: 156000,
      downloads: 32100,
      price: '$19.99/mo',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: '5',
      name: 'Audio Transcriber',
      description: 'High-accuracy speech-to-text conversion supporting 50+ languages.',
      category: 'audio',
      author: 'SpeechLab',
      rating: 4.5,
      views: 43000,
      downloads: 9800,
      price: '$4.99/mo',
      image: 'https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: '6',
      name: 'Style Transfer Network',
      description: 'Transform images with artistic styles using neural style transfer techniques.',
      category: 'image',
      author: 'ArtificialArt',
      rating: 4.4,
      views: 78000,
      downloads: 16700,
      price: 'Free',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const filteredModels = models.filter(model => {
    const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         model.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || model.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedModels = [...filteredModels].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.views - a.views;
      case 'rating':
        return b.rating - a.rating;
      case 'downloads':
        return b.downloads - a.downloads;
      case 'newest':
        return 0; // Would use actual date in real app
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Explore AI Models</h1>
          <p className="text-lg text-gray-600">Discover and test cutting-edge AI models from our community</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search models..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="downloads">Most Downloaded</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {sortedModels.map(model => (
            <div key={model.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    model.price === 'Free' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-indigo-100 text-indigo-800'
                  }`}>
                    {model.price}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {model.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{model.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{model.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>by {model.author}</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{(model.views / 1000).toFixed(0)}k</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{(model.downloads / 1000).toFixed(0)}k</span>
                    </div>
                  </div>
                </div>
                
                <Link
                  to={`/model/${model.id}`}
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors text-center font-medium block"
                >
                  Try Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {sortedModels.length === 0 && (
          <div className="text-center py-12">
            <Brain className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No models found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or browse different categories.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;