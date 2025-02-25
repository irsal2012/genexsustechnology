
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = async () => {
    if (user) {
      await signOut();
    }
    navigate('/auth');
  };

  return (
    <nav className="fixed w-full z-50 bg-white bg-opacity-70 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <svg 
                viewBox="0 0 100 100" 
                className="w-10 h-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer circle with more transparent gradient */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  className="stroke-[2] stroke-purple-600/80"
                  fill="url(#grad1)"
                />
                
                {/* Inner curved paths with adjusted opacity */}
                <path
                  d="M30 50 Q50 20 70 50 T30 50"
                  className="stroke-[2] stroke-indigo-600/70 fill-none"
                />
                <path
                  d="M30 50 Q50 80 70 50 T30 50"
                  className="stroke-[2] stroke-purple-600/70 fill-none"
                />
                
                {/* Central node with less opacity */}
                <circle
                  cx="50"
                  cy="50"
                  r="6"
                  className="fill-indigo-600/60"
                />
                
                {/* Curved connecting lines with lighter stroke */}
                <path
                  d="M50 30 Q70 50 50 70"
                  className="stroke-[1.5] stroke-purple-600/60 fill-none"
                />
                <path
                  d="M30 50 Q50 60 70 50"
                  className="stroke-[1.5] stroke-indigo-600/60 fill-none"
                />
                
                {/* Define more transparent gradients */}
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9333EA" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
              </svg>
              <Link to="/" className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Genexsus Technology
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-gray-700 hover:text-purple-600 smooth-transition">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 smooth-transition">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 smooth-transition">
              Contact
            </Link>
            {user ? (
              <Button 
                variant="outline" 
                className="smooth-transition border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                onClick={handleAuthAction}
              >
                Sign Out
              </Button>
            ) : (
              <div className="space-x-4">
                <Button 
                  variant="ghost" 
                  className="smooth-transition text-purple-600 hover:bg-purple-50"
                  onClick={() => navigate('/auth?mode=signin')}
                >
                  Sign In
                </Button>
                <Button 
                  className="smooth-transition bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                  onClick={() => navigate('/auth?mode=signup')}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 smooth-transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/products"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 smooth-transition"
              >
                Products
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 smooth-transition"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 smooth-transition"
              >
                Contact
              </Link>
              {user ? (
                <Button 
                  variant="outline" 
                  className="w-full smooth-transition border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                  onClick={handleAuthAction}
                >
                  Sign Out
                </Button>
              ) : (
                <div className="space-y-2">
                  <Button 
                    variant="ghost"
                    className="w-full smooth-transition text-purple-600 hover:bg-purple-50"
                    onClick={() => navigate('/auth?mode=signin')}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="w-full smooth-transition bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                    onClick={() => navigate('/auth?mode=signup')}
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
