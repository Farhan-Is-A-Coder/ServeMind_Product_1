import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X, User, Upload } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Explore Models', href: '/explore' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm shadow-lg shadow-cyan-500/10 sticky top-0 z-50 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <Brain className="h-8 w-8" />
              <span className="text-xl font-bold">ModelHub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/upload"
              className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-cyan-400 border border-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-colors"
            >
              <Upload className="h-4 w-4" />
              <span>Upload Model</span>
            </Link>
            <Link
              to="/auth"
              className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-slate-900 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-lg hover:from-cyan-300 hover:to-emerald-300 transition-all"
            >
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-700 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-slate-700 pt-4 space-y-2">
                <Link
                  to="/upload"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-cyan-400 hover:bg-cyan-400/10 rounded-md transition-colors"
                >
                  <Upload className="h-5 w-5" />
                  <span>Upload Model</span>
                </Link>
                <Link
                  to="/auth"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-slate-900 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 rounded-md transition-all"
                >
                  <User className="h-5 w-5" />
                  <span>Sign In</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;