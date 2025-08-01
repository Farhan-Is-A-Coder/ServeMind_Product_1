import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Globe, Brain, Image, MessageSquare, Code } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Deploy and run your models with millisecond response times using our optimized infrastructure.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance with industry standards.',
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Serve your models from 200+ edge locations worldwide for optimal performance.',
    },
    {
      icon: Code,
      title: 'Easy Integration',
      description: 'Simple REST APIs and SDKs for seamless integration into your applications.',
    },
  ];

  const modelTypes = [
    { icon: MessageSquare, name: 'Text Generation', count: '2,341' },
    { icon: Image, name: 'Image Processing', count: '1,892' },
    { icon: Brain, name: 'Classification', count: '3,567' },
    { icon: Code, name: 'Code Generation', count: '1,234' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Deploy AI Models
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Effortlessly</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                The most powerful Model-as-a-Service platform. Upload your AI models, share with the community, and monetize your expertise through our seamless API infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/explore"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Explore Models
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/upload"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-indigo-600 bg-white border-2 border-indigo-600 rounded-xl hover:bg-indigo-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Upload Your Model
                </Link>
              </div>
              <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>9,234 active models</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>45M+ API calls today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Model Categories</h2>
            <p className="text-lg text-gray-600">Discover AI models across various domains</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {modelTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center group cursor-pointer"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                  <type.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-2xl font-bold text-indigo-600">{type.count}</p>
                <p className="text-sm text-gray-500">models available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ModelHub?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built for developers, by developers. Experience the most advanced model deployment platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who trust ModelHub for their AI model deployment needs.
          </p>
          <Link
            to="/auth"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-indigo-600 bg-white rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Free Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;