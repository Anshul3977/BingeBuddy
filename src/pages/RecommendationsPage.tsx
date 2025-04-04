import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sliders, Filter } from 'lucide-react';

export default function RecommendationsPage() {
  const [selectedDomain, setSelectedDomain] = React.useState('All Domains');
  const [minRating, setMinRating] = React.useState(4.0);
  const [selectedGenre, setSelectedGenre] = React.useState('All');

  const domains = ['All Domains', 'Movies', 'TV Shows', 'Books', 'Anime'];
  const genres = ['All', 'Action', 'Drama', 'Comedy', 'Sci-Fi', 'Romance'];

  const recommendations = [
    {
      title: 'The Matrix',
      domain: 'Movie',
      predictedRating: 4.8,
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
      genre: 'Sci-Fi'
    },
    {
      title: 'Breaking Bad',
      domain: 'TV Show',
      predictedRating: 4.9,
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800&q=80',
      genre: 'Drama'
    },
    {
      title: 'Dune',
      domain: 'Book',
      predictedRating: 4.7,
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80',
      genre: 'Sci-Fi'
    },
    // Add more recommendations...
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="md:w-64 bg-white p-6 rounded-xl shadow-sm"
      >
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Sliders size={20} />
            Refine Recommendations
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Genre
              </label>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                {genres.map((genre) => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Rating
              </label>
              <input
                type="range"
                min="0"
                max="5"
                step="0.1"
                value={minRating}
                onChange={(e) => setMinRating(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="text-sm text-gray-500 mt-1">
                {minRating.toFixed(1)} stars and above
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Your Personalized Recommendations</h1>
          <p className="text-gray-600">
            Discover content tailored just for you based on your preferences and ratings.
          </p>
        </motion.div>

        {/* Domain Filter */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {domains.map((domain) => (
            <motion.button
              key={domain}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedDomain(domain)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedDomain === domain
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {domain}
            </motion.button>
          ))}
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden group"
            >
              <div className="relative aspect-[16/9]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="bg-white/20 px-2 py-1 rounded">
                        {item.domain}
                      </span>
                      <span className="bg-white/20 px-2 py-1 rounded">
                        {item.genre}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star size={18} className="text-yellow-400 fill-current" />
                    <span className="font-medium">{item.predictedRating}</span>
                    <span className="text-sm text-gray-500">predicted</span>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}