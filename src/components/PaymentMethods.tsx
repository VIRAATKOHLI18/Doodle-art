'use client'

import { motion } from 'framer-motion'
import { CreditCard, Banknote, MessageCircle, Shield, Zap, Heart } from 'lucide-react'

const paymentMethods = [
  {
    icon: CreditCard,
    title: "Card Payments",
    description: "Secure payments via UPI, Credit/Debit cards, Net Banking",
    color: "bg-blue-500",
    features: ["Instant Processing", "Bank-level Security", "All Major Cards"]
  },
  {
    icon: Banknote,
    title: "Cash Payments",
    description: "Cash on delivery available for local orders",
    color: "bg-green-500",
    features: ["No Processing Fee", "Local Delivery", "Pay on Receipt"]
  },
  {
    icon: MessageCircle,
    title: "Complements",
    description: "We also accept genuine complements and kind words!",
    color: "bg-pink-500",
    features: ["Spread Joy", "Build Community", "Share Love"]
  }
]

export default function PaymentMethods() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Payment <span className="gradient-text">Options</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We believe art should be accessible to everyone. Choose your preferred payment method!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center"
            >
              <motion.div
                className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <method.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
              <p className="text-gray-600 mb-6">{method.description}</p>
              
              <div className="space-y-3">
                {method.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center space-x-2 text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">100% Secure</h4>
              <p className="text-gray-600">Bank-level encryption for all transactions</p>
            </div>
            
            <div className="text-center">
              <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Instant Processing</h4>
              <p className="text-gray-600">Quick and seamless payment experience</p>
            </div>
            
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Made with Love</h4>
              <p className="text-gray-600">Every transaction supports local artists</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}