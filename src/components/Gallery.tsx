'use client'

import { motion } from 'framer-motion'
import { Heart, ShoppingCart, Eye } from 'lucide-react'
import { useState } from 'react'
import CheckoutModal from './CheckoutModal'

const artworks = [
  {
    id: 1,
    title: "Whimsical Dreams",
    price: 2999,
    image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=500",
    likes: 24,
    category: "Abstract"
  },
  {
    id: 2,
    title: "Nature's Dance",
    price: 3499,
    image: "https://images.pexels.com/photos/1070527/pexels-photo-1070527.jpeg?auto=compress&cs=tinysrgb&w=500",
    likes: 31,
    category: "Nature"
  },
  {
    id: 3,
    title: "Urban Vibes",
    price: 2799,
    image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=500",
    likes: 18,
    category: "Urban"
  },
  {
    id: 4,
    title: "Cosmic Journey",
    price: 4199,
    image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=500",
    likes: 42,
    category: "Space"
  },
  {
    id: 5,
    title: "Floral Fantasy",
    price: 3299,
    image: "https://images.pexels.com/photos/1070527/pexels-photo-1070527.jpeg?auto=compress&cs=tinysrgb&w=500",
    likes: 27,
    category: "Floral"
  },
  {
    id: 6,
    title: "Geometric Harmony",
    price: 3799,
    image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=500",
    likes: 35,
    category: "Geometric"
  }
]

export default function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const handleBuyNow = (artwork: typeof artworks[0]) => {
    setSelectedArtwork(artwork)
    setIsCheckoutOpen(true)
  }

  return (
    <section id="gallery" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Artworks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each piece is carefully crafted with love and attention to detail. 
            Find the perfect artwork that speaks to your soul.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/90 rounded-full text-gray-700 hover:text-red-500 transition-colors"
                  >
                    <Heart className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/90 rounded-full text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </motion.button>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                    {artwork.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{artwork.title}</h3>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{artwork.likes}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">
                    ₹{artwork.price.toLocaleString()}
                  </span>
                  <motion.button
                    onClick={() => handleBuyNow(artwork)}
                    className="px-6 py-2 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Buy Now</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        artwork={selectedArtwork}
      />
    </section>
  )
}