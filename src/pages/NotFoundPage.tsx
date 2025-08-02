import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft, Brain } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-full flex items-center justify-center">
            <Brain className="h-12 w-12 text-cyan-400" />
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Oops! The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, even our AI models sometimes get lost in the data.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg hover:from-cyan-400 hover:to-emerald-400 transition-all font-medium"
            >
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Link>
            <Link
              to="/explore"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-colors font-medium"
            >
              <Search className="h-5 w-5 mr-2" />
              Explore Models
            </Link>
          </div>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-4">Popular Pages</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Link to="/explore" className="text-slate-400 hover:text-cyan-400 transition-colors">
              Explore Models
            </Link>
            <Link to="/pricing" className="text-slate-400 hover:text-cyan-400 transition-colors">
              Pricing
            </Link>
            <Link to="/docs" className="text-slate-400 hover:text-cyan-400 transition-colors">
              Documentation
            </Link>
            <Link to="/support" className="text-slate-400 hover:text-cyan-400 transition-colors">
              Support
            </Link>
            <Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;