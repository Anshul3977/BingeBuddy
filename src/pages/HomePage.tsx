import React from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Tv, 
  Book, 
  Gamepad2,
  Star,
  Heart,
  TrendingUp
} from 'lucide-react';

export default function HomePage() {
  const [selectedTab, setSelectedTab] = React.useState('Movies');
  
  const categories = [
    { id: 'Movies', icon: <Play size={24} /> },
    { id: 'TV Shows', icon: <Tv size={24} /> },
    { id: 'Books', icon: <Book size={24} /> },
    { id: 'Anime', icon: <Gamepad2 size={24} /> },
  ];

  const featuredContent = [
    { 
      title: 'Inception', 
      type: 'Movie', 
      rating: 4.8, 
      image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=800&q=80',
      description: 'A mind-bending journey through dreams within dreams.'
    },
    { 
      title: 'Breaking Bad', 
      type: 'TV Show', 
      rating: 4.9, 
      image: 'https://images.unsplash.com/photo-1562329265-95a6d7a83440?auto=format&fit=crop&w=800&q=80',
      description: 'A high school chemistry teacher turned drug kingpin.'
    },
    { 
      title: 'Attack on Titan', 
      type: 'Anime', 
      rating: 4.7, 
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
      description: 'Humanity fights for survival against giant humanoid creatures.'
    },
    { 
      title: 'The Way of Kings', 
      type: 'Book', 
      rating: 4.8, 
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80',
      description: 'An epic fantasy of power, destiny, and redemption.'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
          Discover Your Next Favorite
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your personal entertainment companion. Find and track movies, TV shows, books, and anime that match your taste.
        </p>
      </motion.div>

      {/* Featured Content Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6">Featured For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredContent.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-md overflow-hidden group"
            >
              <div className="relative aspect-[3/4]">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-white/90 rounded-full p-2">
                  <Heart size={20} className="text-red-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.type}</span>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Category Tabs */}
      <div className="mb-12">
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedTab(category.id)}
              className={`px-6 py-3 rounded-full flex items-center space-x-2 whitespace-nowrap transition-colors ${
                selectedTab === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              <span>{category.id}</span>
            </motion.button>
          ))}
        </div>

        {/* Category Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-lg overflow-hidden aspect-[2/3] group cursor-pointer"
            >
              <img 
                src={`https://source.unsplash.com/random/300x450?${selectedTab.toLowerCase()}&sig=${item}`}
                alt={`${selectedTab} item ${item}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="text-white text-sm">
                  <div className="font-semibold">{selectedTab} Title {item}</div>
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span>4.{item}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Trending Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8"
      >
        <div className="flex items-center space-x-2 mb-6">
          <TrendingUp size={24} className="text-indigo-600" />
          <h2 className="text-2xl font-bold">Trending Now</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="relative aspect-[2/3]">
                <img 
                  src={`https://source.unsplash.com/random/300x450?trending&sig=${item}`}
                  alt={`Trending item ${item}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Trending Title {item}</h3>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Star size={14} className="text-yellow-400 fill-current" />
                  <span>4.{9-item}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}