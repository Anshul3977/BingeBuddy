import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import {
  Star,
  Heart,
  Share2,
  Clock,
  Calendar,
  Users,
  Film,
  BookOpen,
  Tv,
  Gamepad2
} from 'lucide-react';

export default function ItemDetailsPage() {
  const { id } = useParams();
  const [userRating, setUserRating] = React.useState<number | null>(null);
  const [isFavorite, setIsFavorite] = React.useState(false);

  // Mock data - in a real app, this would come from an API
  const item = {
    id,
    title: 'Inception',
    type: 'Movie',
    year: 2010,
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    rating: 4.8,
    votes: 2500000,
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    duration: '2h 28min',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    similar: [
      {
        id: 2,
        title: 'The Matrix',
        type: 'Movie',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 3,
        title: 'Interstellar',
        type: 'Movie',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 4,
        title: 'The Prestige',
        type: 'Movie',
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80'
      }
    ]
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'movie':
        return <Film />;
      case 'tv show':
        return <Tv />;
      case 'book':
        return <BookOpen />;
      case 'anime':
        return <Gamepad2 />;
      default:
        return <Film />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative aspect-[21/9] overflow-hidden rounded-xl"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-8"
          >
            {/* Poster */}
            <div className="hidden md:block w-48 aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                {getTypeIcon(item.type)}
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  {item.type}
                </span>
                {item.genres.map((genre) => (
                  <span
                    key={genre}
                    className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl font-bold mb-2">{item.title}</h1>
              <div className="flex items-center gap-6 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{item.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{item.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>{(item.votes / 1000000).toFixed(1)}M votes</span>
                </div>
              </div>
              <p className="text-lg text-gray-200 max-w-2xl mb-6">
                {item.description}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Star size={24} className="text-yellow-400 fill-current" />
                  <span className="text-2xl font-bold">{item.rating}</span>
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-2 rounded-full transition-colors ${
                    isFavorite
                      ? 'bg-red-500 text-white'
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  <Heart size={20} className={isFavorite ? 'fill-current' : ''} />
                </button>
                <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cast & Crew */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <h2 className="text-lg font-semibold mb-4">Cast & Crew</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Director</h3>
              <p>{item.director}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Cast</h3>
              <ul className="space-y-2">
                {item.cast.map((actor) => (
                  <li key={actor}>{actor}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* User Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <h2 className="text-lg font-semibold mb-4">Your Rating</h2>
          <div className="flex items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => setUserRating(rating)}
                className={`p-2 rounded-full transition-colors ${
                  userRating === rating
                    ? 'text-yellow-400'
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
              >
                <Star size={24} className="fill-current" />
              </button>
            ))}
          </div>
          {userRating ? (
            <p className="text-sm text-gray-600">
              You rated this {userRating} out of 5 stars
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Rate this {item.type.toLowerCase()} to improve your recommendations
            </p>
          )}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <h2 className="text-lg font-semibold mb-4">Additional Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Release Date</h3>
              <p>{item.year}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Duration</h3>
              <p>{item.duration}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Genres</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {item.genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Similar Items */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-bold mb-6">Similar {item.type}s</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {item.similar.map((similar) => (
            <motion.div
              key={similar.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden group"
            >
              <div className="relative aspect-video">
                <img
                  src={similar.image}
                  alt={similar.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-semibold text-lg">{similar.title}</h3>
                    <div className="flex items-center gap-2">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span>{similar.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}