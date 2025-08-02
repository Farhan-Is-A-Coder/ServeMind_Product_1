import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'billing', label: 'Billing & Payments' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'press', label: 'Press & Media' },
    { value: 'other', label: 'Other' }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'support@modelhub.com',
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM PST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 AI Street, San Francisco, CA 94105',
      description: 'Our headquarters in the heart of Silicon Valley'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9AM - 6PM PST',
      description: 'We\'re here to help during business hours'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
              <Send className="h-8 w-8 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Message Sent!</h2>
            <p className="text-slate-300 mb-6">
              Thank you for contacting us. We've received your message and will get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  subject: '',
                  category: 'general',
                  message: ''
                });
              }}
              className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white py-3 px-4 rounded-lg hover:from-cyan-400 hover:to-emerald-400 transition-all font-medium"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have questions about ModelHub? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-cyan-400 font-medium mb-1">{info.details}</p>
                      <p className="text-slate-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Need Immediate Help?</h3>
              <div className="space-y-3">
                <a
                  href="/support"
                  className="flex items-center justify-between p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-cyan-400" />
                    <span className="text-white">Browse FAQ</span>
                  </div>
                  <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">→</span>
                </a>
                <a
                  href="/docs"
                  className="flex items-center justify-between p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-cyan-400" />
                    <span className="text-white">View Documentation</span>
                  </div>
                  <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">→</span>
                </a>
                <button className="w-full flex items-center justify-center space-x-2 p-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg hover:from-cyan-400 hover:to-emerald-400 transition-all">
                  <MessageCircle className="h-5 w-5" />
                  <span>Start Live Chat</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-slate-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-slate-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-slate-300 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-slate-400"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-slate-400 resize-none"
                  placeholder="Please provide as much detail as possible about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white py-4 px-6 rounded-lg hover:from-cyan-400 hover:to-emerald-400 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </div>
                )}
              </button>

              <p className="text-xs text-slate-400 text-center">
                By submitting this form, you agree to our{' '}
                <a href="/privacy" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;