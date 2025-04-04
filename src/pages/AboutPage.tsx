import React from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Users,
  Sparkles,
  Star,
  Heart,
  Zap,
  Shield,
  MessageSquare
} from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: <Sparkles className="text-purple-500" size={24} />,
      title: 'Smart Recommendations',
      description: 'Our advanced algorithm learns from your preferences to suggest content you\'ll love.'
    },
    {
      icon: <Users className="text-blue-500" size={24} />,
      title: 'Community Driven',
      description: 'Join a vibrant community of entertainment enthusiasts sharing their experiences.'
    },
    {
      icon: <Star className="text-yellow-500" size={24} />,
      title: 'Comprehensive Ratings',
      description: 'Get detailed insights from user ratings and reviews across all content types.'
    },
    {
      icon: <Heart className="text-red-500" size={24} />,
      title: 'Personalized Experience',
      description: 'Create your profile, track your favorites, and get tailored recommendations.'
    },
    {
      icon: <Zap className="text-orange-500" size={24} />,
      title: 'Real-time Updates',
      description: 'Stay up to date with the latest releases and trending content.'
    },
    {
      icon: <Shield className="text-green-500" size={24} />,
      title: 'Trusted Platform',
      description: 'Your data is secure, and our recommendations are unbiased.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Play className="text-indigo-600" size={48} />
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
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="text-purple-500" size={24} />
            </motion.div>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
          About BingeBuddy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your ultimate entertainment companion, helping you discover and track amazing content
          across movies, TV shows, books, and anime.
        </p>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12 mb-16"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            We believe everyone deserves to find content that resonates with them.
            Our mission is to connect people with entertainment they'll love,
            making the discovery process seamless and enjoyable.
          </p>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">What Makes Us Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-gray-50 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                />
                <div className="absolute inset-0 rounded-full border-2 border-indigo-600 opacity-0 hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gray-50 rounded-2xl p-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Have questions or feedback? We'd love to hear from you!
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center gap-2">
            <MessageSquare size={20} />
            Contact Us
          </button>
          <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors">
            Join Our Team
          </button>
        </div>
      </motion.div>
    </div>
  );
}