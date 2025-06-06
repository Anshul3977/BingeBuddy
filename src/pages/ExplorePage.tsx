import React from 'react';
import { motion } from 'framer-motion';
import { Filter, SlidersHorizontal, Star, ChevronDown, Heart, ThumbsUp, Search } from 'lucide-react';

export default function ExplorePage() {
  const [sortBy, setSortBy] = React.useState('popular');
  const [selectedDomain, setSelectedDomain] = React.useState('All');
  const [yearRange, setYearRange] = React.useState([1990, 2024]);
  const [minRating, setMinRating] = React.useState(0);
  const [showPreferences, setShowPreferences] = React.useState(false);
  const [preferences, setPreferences] = React.useState({
    favoriteGenres: [],
    mood: '',
    length: 'any',
    complexity: 'medium',
    pace: 'medium',
    themes: []
  });

  const domains = ['All', 'Movies', 'TV Shows', 'Books', 'Anime'];
  const genres = ['Action', 'Drama', 'Comedy', 'Sci-Fi', 'Romance', 'Horror', 'Documentary'];
  const moods = ['Happy', 'Thoughtful', 'Exciting', 'Relaxing', 'Intense'];
  const themes = ['Adventure', 'Mystery', 'Love', 'Family', 'Technology', 'Fantasy', 'History'];
  const sortOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'newest', name: 'Newest' },
  ];

  const items = [
    {
      id: 1,
      title: 'The Dark Knight',
      domain: 'Movie',
      year: 2008,
      rating: 4.9,
      votes: 2500000,
      image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=800&q=80',
      genres: ['Action', 'Crime', 'Drama']
    },
    {
      id: 2,
      title: 'Stranger Things',
      domain: 'TV Show',
      year: 2016,
      rating: 4.8,
      votes: 1800000,
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
      genres: ['Drama', 'Horror', 'Sci-Fi']
    },
    {
      id: 3,
      title: 'The Name of the Wind',
      domain: 'Book',
      year: 2007,
      rating: 4.7,
      votes: 1000000,
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=800&q=80',
      genres: ['Fantasy', 'Adventure']
    },
    {
      id: 4,
      title: 'Death Note',
      domain: 'Anime',
      year: 2006,
      rating: 4.8,
      votes: 1500000,
      image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=800&q=80',
      genres: ['Thriller', 'Supernatural']
    },
  ];

  const handlePreferenceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPreferences(false);
    // Here you would typically make an API call to get personalized recommendations
  };

  const toggleGenre = (genre: string) => {
    setPreferences(prev => ({
      ...prev,
      favoriteGenres: prev.favoriteGenres.includes(genre)
        ? prev.favoriteGenres.filter(g => g !== genre)
        : [...prev.favoriteGenres, genre]
    }));
  };

  const toggleTheme = (theme: string) => {
    setPreferences(prev => ({
      ...prev,
      themes: prev.themes.includes(theme)
        ? prev.themes.filter(t => t !== theme)
        : [...prev.themes, theme]
    }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="md:w-72 bg-white rounded-xl shadow-sm p-6"
      >
        <div className="flex items-center gap-2 mb-6">
          <SlidersHorizontal size={20} className="text-black" />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>

        {/* Domain Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Domain</label>
          <div className="flex flex-wrap gap-2">
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedDomain === domain
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        {/* Genre Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Genres</label>
          <div className="space-y-2">
            {genres.map((genre) => (
              <label key={genre} className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-black" />
                <span className="text-sm text-gray-600">{genre}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Year Range */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Year Range</label>
          <div className="flex items-center gap-4">
            <input
              type="number"
              min="1900"
              max="2024"
              value={yearRange[0]}
              onChange={(e) => setYearRange([parseInt(e.target.value), yearRange[1]])}
              className="w-24 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
            <span className="text-gray-500">to</span>
            <input
              type="number"
              min="1900"
              max="2024"
              value={yearRange[1]}
              onChange={(e) => setYearRange([yearRange[0], parseInt(e.target.value)])}
              className="w-24 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
          </div>
        </div>

        {/* Rating Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Rating: {minRating.toFixed(1)}
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
        </div>

        {/* Reset Filters */}
        <button className="w-full px-4 py-2 text-sm text-black border border-black rounded-lg hover:bg-gray-50 transition-colors">
          Reset Filters
        </button>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold mb-2">Explore Entertainment</h1>
            <p className="text-gray-600">
              Discover amazing content across all domains
            </p>
          </motion.div>

          {/* Preference Button */}
          <button
            onClick={() => setShowPreferences(true)}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center gap-2"
          >
            <ThumbsUp size={20} />
            <span>Set Your Preferences</span>
          </button>
        </div>

        {/* Preferences Modal */}
        {showPreferences && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Your Entertainment Preferences</h2>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handlePreferenceSubmit} className="space-y-6">
                {/* Favorite Genres */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Favorite Genres</h3>
                  <div className="flex flex-wrap gap-2">
                    {genres.map((genre) => (
                      <button
                        key={genre}
                        type="button"
                        onClick={() => toggleGenre(genre)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          preferences.favoriteGenres.includes(genre)
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mood */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Current Mood</h3>
                  <div className="flex flex-wrap gap-2">
                    {moods.map((mood) => (
                      <button
                        key={mood}
                        type="button"
                        onClick={() => setPreferences(prev => ({ ...prev, mood }))}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          preferences.mood === mood
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {mood}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Length Preference */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Preferred Length</h3>
                  <select
                    value={preferences.length}
                    onChange={(e) => setPreferences(prev => ({ ...prev, length: e.target.value }))}
                    className="w-full rounded-lg border-gray-300 focus:border-black focus:ring-black"
                  >
                    <option value="any">Any Length</option>
                    <option value="short">Short (less than 2 hours / less than 12 episodes)</option>
                    <option value="medium">Medium (2-3 hours / 12-24 episodes)</option>
                    <option value="long">Long (more than 3 hours / more than 24 episodes)</option>
                  </select>
                </div>

                {/* Themes */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Preferred Themes</h3>
                  <div className="flex flex-wrap gap-2">
                    {themes.map((theme) => (
                      <button
                        key={theme}
                        type="button"
                        onClick={() => toggleTheme(theme)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          preferences.themes.includes(theme)
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {theme}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  Get Personalized Recommendations
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden group"
            >
              <div className="relative aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="bg-white/20 px-2 py-1 rounded">
                        {item.domain}
                      </span>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <Star size={18} className="text-yellow-400 fill-current" />
                    <span className="font-medium">{item.rating}</span>
                    <span className="text-sm text-gray-500">
                      ({(item.votes / 1000000).toFixed(1)}M votes)
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.genres.map((genre) => (
                    <span
                      key={genre}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}