import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, 
  Search, 
  Bell,
  LogIn,
  Menu,
  X,
  Sparkles
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Recommendations', path: '/recommendations' },
    { name: 'Explore', path: '/explore' },
    { name: 'Profile', path: '/profile' },
    { name: 'About', path: '/about' }
  ];

  return (
    <div className="min-h-screen bg-gray-200 text-gray-800">
      {/* Header wrapper with padding */}
      <div className="px-4 sm:px-8 md:px-12 mx-auto sticky top-2 z-50">
        {/* Header with original rounded-full style */}
        <header className="bg-white/80 shadow-lg backdrop-blur-md border-b border-gray-100 rounded-full">
          <nav className="px-4 sm:px-6">
            <div className="flex items-center justify-between h-14">
              {/* Logo */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-2"
              >
                <Link to="/" className="flex items-center space-x-2">
                  <div className="relative">
                    <Play className="text-black-600" size={32} />
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="absolute -top-1 -right-1"
                    >
                      <Sparkles className="text-black-500" size={16} />
                    </motion.div>
                  </div>
                  <span className="text-2xl font-bold text-black font-inter">
                    BingeBuddy
                  </span>
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                  >
                    <Link
                      to={item.path}
                      className={`text-gray-500 hover:text-black hover:font-bold transition-colors font-inter ${
                        location.pathname === item.path || (item.path === '/' && location.pathname === '/') ? 'text-black font-bold' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                  </motion.div>
                ))}
                
                {/* Notification Bell */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  <Bell size={20} className="text-gray-600" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                </motion.button>

                {/* Search Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="text-gray-600 hover:text-black-600"
                >
                  <Search size={20} />
                </motion.button>

                {/* Login Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-black text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center space-x-2 shadow-md"
                >
                  <LogIn size={18} />
                  <span>Login</span>
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>

            {/* Expanded Search Bar */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isSearchOpen ? 'auto' : 0,
                opacity: isSearchOpen ? 1 : 0
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="py-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search for movies, shows, books, or anime..."
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-600 transition-colors bg-gray-50"
                  />
                </div>
              </div>
            </motion.div>
          </nav>
        </header>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b mx-4 sm:mx-8 md:mx-12 rounded-b-lg"
        >
          <div className="px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 transition-colors ${
                  location.pathname === item.path
                    ? 'text-indigo-600'
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
              <LogIn size={18} />
              <span>Login</span>
            </button>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Play className="text-black" size={24} />
                <span className="font-bold">BingeBuddy</span>
              </div>
              <p className="text-sm text-gray-500">
                Your ultimate entertainment companion for discovering great content.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link to="/about" className="hover:text-indigo-600">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-600">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-indigo-600">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-indigo-600">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link to="/explore?category=movies" className="hover:text-indigo-600">Movies</Link></li>
                <li><Link to="/explore?category=tv" className="hover:text-indigo-600">TV Shows</Link></li>
                <li><Link to="/explore?category=books" className="hover:text-indigo-600">Books</Link></li>
                <li><Link to="/explore?category=anime" className="hover:text-indigo-600">Anime</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-indigo-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            © 2024 BingeBuddy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}