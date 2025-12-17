'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { useEffect, useState } from 'react'

export function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile/slow connection - show static image instead of video
  useEffect(() => {
    const checkMobile = () => {
      const isSmallScreen = window.innerWidth < 768
      const connection = (navigator as any).connection
      const isSlowConnection = connection &&
        (connection.saveData || connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g')

      setIsMobile(isSmallScreen || isSlowConnection)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-900">
      {/* Background - Static image on mobile/slow connections, video on desktop */}
      {isMobile ? (
        <img
          src="/images/hero-background.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          width="1920"
          height="1080"
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-background.webp"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      )}

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gray-900/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/30 to-transparent" />

      {/* Navbar */}
      <Navbar />

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
              <span className="text-primary font-medium text-sm">Digital Midstream Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-6">
              <span className="block">Turn a</span>
              <span className="block text-primary">Cost Center</span>
              <span className="block">Into Revenue</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              When Waha goes negative, flaring becomes your least-bad option. We give you a better one that generates actual income.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('solution-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg"
              >
                See How It Works
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
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
              { value: '47%', label: 'Waha Negative Days in 2024' },
              { value: '$750M', label: 'Burned in Texas (2018)' },
              { value: '$0', label: 'Your Capital Outlay' },
            ].map((stat) => (
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
