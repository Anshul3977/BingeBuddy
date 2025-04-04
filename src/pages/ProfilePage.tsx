import React from 'react';
import { motion } from 'framer-motion';
import { 
  User,
  Settings,
  Star,
  Heart,
  Clock,
  Edit,
  ChevronRight,
  LogOut
} from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState('rated');
  
  const userProfile = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    joinDate: 'January 2024',
    preferences: {
      genres: ['Sci-Fi', 'Drama', 'Fantasy'],
      domains: ['Movies', 'TV Shows']
    }
  };

  const ratedItems = [
    {
      id: 1,
      title: 'Inception',
      type: 'Movie',
      rating: 5,
      date: '2024-02-15',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Breaking Bad',
      type: 'TV Show',
      rating: 4.5,
      date: '2024-02-10',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const favoriteItems = [
    {
      id: 3,
      title: 'Dune',
      type: 'Book',
      addedDate: '2024-02-20',
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const recentlyViewed = [
    {
      id: 4,
      title: 'Attack on Titan',
      type: 'Anime',
      viewedDate: '2024-02-25',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-sm p-6 mb-8"
      >
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 p-1.5 bg-indigo-600 text-white rounded-full">
              <Edit size={14} />
            </button>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{userProfile.name}</h1>
            <p className="text-gray-600 mb-4">Member since {userProfile.joinDate}</p>
            <div className="flex flex-wrap gap-2">
              {userProfile.preferences.genres.map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center gap-2">
            <Settings size={20} />
            <span>Settings</span>
          </button>
        </div>
      </motion.div>

      {/* Content Tabs */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="border-b">
          <div className="flex">
            <button
              onClick={() => setActiveTab('rated')}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === 'rated'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Star size={18} />
              Rated Items
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === 'favorites'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Heart size={18} />
              Favorites
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === 'history'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Clock size={18} />
              Recently Viewed
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'rated' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ratedItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-50 rounded-lg overflow-hidden group"
                >
                  <div className="relative aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm opacity-80">{item.type}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star size={18} className="text-yellow-400 fill-current" />
                        <span className="font-medium">{item.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        Rated on {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'favorites' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-50 rounded-lg overflow-hidden group"
                >
                  <div className="relative aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm opacity-80">{item.type}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <Heart size={18} className="text-red-500 fill-current" />
                      <span className="text-sm text-gray-500">
                        Added on {new Date(item.addedDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'history' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentlyViewed.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-50 rounded-lg overflow-hidden group"
                >
                  <div className="relative aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm opacity-80">{item.type}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <Clock size={18} className="text-gray-500" />
                      <span className="text-sm text-gray-500">
                        Viewed on {new Date(item.viewedDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Account Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden"
      >
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <User size={20} className="text-gray-500" />
                <span>Edit Profile</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <Settings size={20} className="text-gray-500" />
                <span>Preferences</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors text-red-600">
              <div className="flex items-center gap-3">
                <LogOut size={20} />
                <span>Sign Out</span>
              </div>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}