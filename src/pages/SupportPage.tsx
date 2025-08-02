import React, { useState } from 'react';
import { Search, MessageCircle, Book, Video, Mail, Phone, Clock } from 'lucide-react';

const SupportPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'api', name: 'API Usage' },
    { id: 'billing', name: 'Billing' },
    { id: 'models', name: 'Model Management' },
    { id: 'troubleshooting', name: 'Troubleshooting' }
  ];

  const faqs = [
    {
      category: 'getting-started',
      question: 'How do I get started with ModelHub?',
      answer: 'Getting started is easy! Sign up for a free account, explore our model marketplace, and start using models through our simple API. Check out our quickstart guide for detailed instructions.'
    },
    {
      category: 'api',
      question: 'How do I authenticate API requests?',
      answer: 'Use your API key in the Authorization header: "Authorization: Bearer YOUR_API_KEY". You can find your API key in your dashboard settings.'
    },
    {
      category: 'billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.'
    },
    {
      category: 'models',
      question: 'How do I upload my own model?',
      answer: 'Navigate to the Upload page, fill in your model details, upload your model file, and configure pricing. Our team will review and approve your model within 24-48 hours.'
    },
    {
      category: 'troubleshooting',
      question: 'Why am I getting rate limit errors?',
      answer: 'Rate limits depend on your subscription plan. Free users get 10 calls/minute, Pro users get 100 calls/minute. Upgrade your plan or implement request throttling in your application.'
    },
    {
      category: 'api',
      question: 'What response formats are supported?',
      answer: 'All API endpoints return JSON responses. Some models may also support streaming responses for real-time applications.'
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      availability: 'Available 24/7',
      action: 'Start Chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 24 hours',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with our experts',
      availability: 'Mon-Fri, 9AM-6PM PST',
      action: 'Call Now'
    }
  ];

  const resources = [
    {
      icon: Book,
      title: 'Documentation',
      description: 'Comprehensive guides and API reference',
      link: '/docs'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '#'
    },
    {
      icon: MessageCircle,
      title: 'Community Forum',
      description: 'Connect with other developers',
      link: '#'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">How can we help you?</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-slate-400 text-lg"
            />
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactOptions.map((option, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                <option.icon className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{option.title}</h3>
              <p className="text-slate-300 mb-2">{option.description}</p>
              <div className="flex items-center justify-center text-sm text-slate-400 mb-4">
                <Clock className="h-4 w-4 mr-1" />
                {option.availability}
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white py-2 px-4 rounded-lg hover:from-cyan-400 hover:to-emerald-400 transition-all font-medium">
                {option.action}
              </button>
            </div>
          ))}
        </div>

        {/* Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Helpful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors group"
              >
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center group-hover:from-cyan-400/30 group-hover:to-emerald-400/30 transition-all">
                  <resource.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-slate-300">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <details key={index} className="group">
                <summary className="flex items-center justify-between p-4 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600 transition-colors">
                  <h3 className="font-medium text-white group-open:text-cyan-400 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-5 h-5 text-slate-400 group-open:text-cyan-400 group-open:rotate-45 transition-all">
                      +
                    </div>
                  </div>
                </summary>
                <div className="p-4 text-slate-300 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8">
              <p className="text-slate-400">No FAQs found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupportPage;