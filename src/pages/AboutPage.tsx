import React from 'react';
import { Users, Target, Award, Globe } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { label: 'Active Models', value: '10,000+' },
    { label: 'Developers', value: '50,000+' },
    { label: 'API Calls Daily', value: '5M+' },
    { label: 'Countries', value: '120+' }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-founder',
      bio: 'Former ML engineer at Google, PhD in Computer Science from Stanford',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-founder',
      bio: 'Ex-Tesla AI lead, 15+ years in distributed systems and ML infrastructure',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'Head of AI Research',
      bio: 'Former research scientist at OpenAI, published 50+ papers in top-tier conferences',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'James Kim',
      role: 'VP of Engineering',
      bio: 'Previously at Stripe and Airbnb, expert in building scalable platforms',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI, constantly exploring new frontiers and breakthrough technologies.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Our platform thrives on the collective intelligence of developers, researchers, and AI enthusiasts worldwide.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in model quality, platform reliability, and developer experience.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making advanced AI accessible to everyone, from individual developers to enterprise teams.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Democratizing AI for Everyone
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            ModelHub is the world's leading Model-as-a-Service platform, connecting AI researchers 
            and developers with users who need powerful, accessible AI solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                We believe that artificial intelligence should be accessible to everyone, not just 
                large tech companies with unlimited resources. Our mission is to democratize AI 
                by providing a platform where researchers can share their innovations and developers 
                can easily integrate cutting-edge models into their applications.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Since our founding in 2023, we've grown from a small team of AI enthusiasts to 
                a global platform serving thousands of developers and hosting some of the most 
                advanced AI models in the world.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI Technology"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              The principles that guide everything we do at ModelHub
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              The brilliant minds behind ModelHub's success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-cyan-500/30"
                />
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400 mb-3">{member.role}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-800 via-blue-900 to-indigo-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Journey</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of the AI revolution. Whether you're a researcher, developer, or innovator, 
            there's a place for you in the ModelHub community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg hover:from-cyan-400 hover:to-emerald-400 transition-all font-semibold">
              Start Building
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors font-semibold">
              View Open Positions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;