'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import logo from '@/assets/10netzero-logo.png'
export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-900">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gray-900/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/30 to-transparent" />

      {/* Full-Width Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <div 
          className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ease-out ${
            isScrolled 
              ? 'bg-gray-900/95 backdrop-blur-xl border-b border-white/10' 
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img src={logo} alt="10NetZero" className="h-40 w-auto" />
            </motion.div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { href: '#problem', label: 'The Problem' },
                { href: '#solution', label: 'Solution' },
                { href: '#services', label: 'Services' },
                { href: '#team', label: 'Team' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-white/80 hover:text-white font-medium gentle-animation hover:scale-105"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="hidden sm:block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 gentle-animation cursor-pointer"
              >
                Get Started
              </motion.button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden glass-effect p-3 rounded-full text-white hover:bg-white/20 cursor-pointer z-[120]"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-[80]"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-gray-900/95 backdrop-blur-xl border-l border-white/10 z-[90]"
          >
            <div className="flex flex-col h-full pt-20 px-6">
              {[
                { href: '#problem', label: 'The Problem' },
                { href: '#solution', label: 'Solution' },
                { href: '#services', label: 'Services' },
                { href: '#team', label: 'Team' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  className="mobile-menu-link px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  setIsMobileMenuOpen(false)
                }}
                className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 mt-8"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 sm:px-8 lg:px-12 pt-24 pb-12">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-medium text-sm">Stranded Gas Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-6">
              <span className="block">Our Goal:</span>
              <span className="block text-primary">Zero Waste</span>
              <span className="block">Net Zero Emissions</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              We help O&G firms monetize their stranded natural gas while meeting their ESG goals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 gentle-animation text-lg"
              >
                See How It Works
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 gentle-animation text-lg"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 lg:mt-24 grid grid-cols-3 gap-4 lg:gap-8 max-w-2xl"
          >
            {[
              { value: '98%', label: 'Reduced Methane' },
              { value: '63%', label: 'Reduced CO2e' },
              { value: '93%', label: 'Reduced VOCs' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-3xl lg:text-5xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm lg:text-base text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </div>
  )
}
