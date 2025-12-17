'use client'

import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '@/assets/10netzero-logo.png'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const serviceLinks = [
  { href: '/services/digital-midstream', label: 'Digital Midstream™' },
  { href: '/services/consulting-design', label: 'Consulting & Design' },
  { href: '/services/data-center-ops', label: 'Data Center Ops' },
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/team', label: 'Team' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

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

  const isActive = (href: string) => location.pathname === href
  const isServiceActive = serviceLinks.some(link => location.pathname === link.href)

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <div
          className={`w-full px-6 sm:px-8 lg:px-12 py-1 transition-all duration-300 ease-out ${
            isScrolled
              ? 'bg-gray-900/95 backdrop-blur-xl border-b border-white/10'
              : 'bg-gray-900/80 backdrop-blur-sm'
          }`}
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center cursor-pointer"
              >
                <img src={logo} alt="10NetZero" className="h-14 md:h-16 lg:h-20 w-auto" width="200" height="80" />
              </motion.div>
            </Link>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-white/80 hover:text-white'
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center gap-1 font-medium transition-colors hover:text-primary focus:outline-none ${
                  isServiceActive ? 'text-primary' : 'text-white/80 hover:text-white'
                }`}>
                  Services <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-900 border border-gray-700 min-w-[200px] shadow-xl">
                  {serviceLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild className="focus:bg-gray-800 hover:bg-gray-800">
                      <Link 
                        to={link.href}
                        className={`w-full cursor-pointer ${
                          isActive(link.href) ? 'text-primary' : 'text-white/80 hover:text-white'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link 
                to="/team"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive('/team') ? 'text-primary' : 'text-white/80 hover:text-white'
                }`}
              >
                Team
              </Link>

              <Link 
                to="/blog"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive('/blog') ? 'text-primary' : 'text-white/80 hover:text-white'
                }`}
              >
                Blog
              </Link>

              <Link 
                to="/#contact"
                className="text-white/80 hover:text-white font-medium transition-colors hover:text-primary"
              >
                Contact Us
              </Link>
            </div>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (location.pathname === '/') {
                    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
                  } else {
                    window.location.href = '/#contact'
                  }
                }}
                className="hidden sm:block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
              >
                Get Started
              </motion.button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden bg-white/10 p-3 rounded-full text-white hover:bg-white/20 cursor-pointer z-[120]"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
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
            id="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-gray-900/95 backdrop-blur-xl border-l border-white/10 z-[90]"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <Link 
                to="/"
                className="px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-4 py-3 text-white/60 font-medium text-sm uppercase tracking-wider">
                Services
              </div>
              {serviceLinks.map((link) => (
                <Link 
                  key={link.href}
                  to={link.href}
                  className="px-4 py-3 pl-8 text-white hover:bg-white/10 rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link 
                to="/team"
                className="px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </Link>

              <Link 
                to="/blog"
                className="px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  if (location.pathname === '/') {
                    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
                  } else {
                    window.location.href = '/#contact'
                  }
                }}
                className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 mt-8"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </>
  )
}
