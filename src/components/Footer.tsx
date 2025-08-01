import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <Brain className="h-8 w-8" />
              <span className="text-xl font-bold">ModelHub</span>
            </Link>
            <p className="mt-4 text-slate-400 max-w-md">
              The premier platform for AI/ML model sharing and deployment. Connect developers with users through our seamless Model-as-a-Service infrastructure.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/explore" className="hover:text-cyan-400 transition-colors">Explore Models</Link></li>
              <li><Link to="/upload" className="hover:text-cyan-400 transition-colors">Upload Model</Link></li>
              <li><Link to="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
              <li><Link to="/dashboard" className="hover:text-cyan-400 transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 ModelHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;