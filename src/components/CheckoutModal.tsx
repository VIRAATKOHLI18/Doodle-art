'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, CreditCard, Smartphone, Building, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  artwork: {
    id: number
    title: string
    price: number
    image: string
  } | null
}

const paymentOptions = [
  { id: 'upi', name: 'UPI', icon: Smartphone, description: 'Pay using UPI apps like GPay, PhonePe, Paytm' },
  { id: 'card', name: 'Card', icon: CreditCard, description: 'Credit/Debit cards, Net Banking' },
  { id: 'cash', name: 'Cash', icon: Building, description: 'Cash on Delivery (Local orders only)' },
  { id: 'complement', name: 'Complement', icon: MessageCircle, description: 'Share a genuine complement!' }
]

export default function CheckoutModal({ isOpen, onClose, artwork }: CheckoutModalProps) {
  const [selectedPayment, setSelectedPayment] = useState('')
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    complement: ''
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async () => {
    if (!selectedPayment) {
      toast.error('Please select a payment method')
      return
    }

    if (!customerInfo.name || !customerInfo.email) {
      toast.error('Please fill in required fields')
      return
    }

    if (selectedPayment === 'complement' && !customerInfo.complement) {
      toast.error('Please share your complement!')
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      if (selectedPayment === 'complement') {
        toast.success('Thank you for your kind words! Your complement means the world to us! 💖')
      } else {
        toast.success('Payment successful! Your artwork will be delivered soon! 🎨')
      }
      setIsProcessing(false)
      onClose()
    }, 2000)
  }

  if (!artwork) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Checkout</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Artwork Summary */}
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{artwork.title}</h3>
                  <p className="text-2xl font-bold text-purple-600">₹{artwork.price.toLocaleString()}</p>
                </div>
              </div>

              {/* Customer Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Customer Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Payment Method</h3>
                <div className="grid gap-3">
                  {paymentOptions.map((option) => (
                    <motion.label
                      key={option.id}
                      className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        selectedPayment === option.id
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={option.id}
                        checked={selectedPayment === option.id}
                        onChange={(e) => setSelectedPayment(e.target.value)}
                        className="sr-only"
                      />
                      <option.icon className="w-6 h-6 text-purple-600 mr-3" />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{option.name}</div>
                        <div className="text-sm text-gray-600">{option.description}</div>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Complement Input */}
              {selectedPayment === 'complement' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-medium text-gray-700">
                    Share your complement *
                  </label>
                  <textarea
                    placeholder="Tell us what you love about this artwork or our work..."
                    value={customerInfo.complement}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, complement: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  />
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <motion.button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                  whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing...</span>
                    </div>
                  ) : selectedPayment === 'complement' ? (
                    'Share Complement'
                  ) : (
                    `Pay ₹${artwork.price.toLocaleString()}`
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}