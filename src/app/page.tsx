'use client'

import { motion } from 'framer-motion'
import { Palette, Heart, Star, ShoppingCart, CreditCard, Banknote, MessageCircle } from 'lucide-react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import PaymentMethods from '@/components/PaymentMethods'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />
      <Hero />
      <Gallery />
      <PaymentMethods />
      <Footer />
    </main>
  )
}