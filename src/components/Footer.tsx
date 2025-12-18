'use client'

import { Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '@/assets/10netzero-logo-transparent.png'

export function Footer() {
  const navigation = [
    { name: 'The Problem', href: '/#problem' },
    { name: 'Solution', href: '/#solution' },
    { name: 'Services', href: '/#services' },
    { name: 'Team', href: '/#team' },
    { name: 'Contact', href: '/#contact' },
  ]

  const services = [
    { name: 'Digital Midstream™', href: '/services/digital-midstream' },
    { name: 'Data Center Operations', href: '/services/data-center-operations' },
    { name: 'Consulting & Design', href: '/services/consulting-design' },
  ]

  return (
    <footer className="relative py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-5">
            <div className="flex items-center mb-4">
              <img src={logo} alt="10NetZero" className="h-6 w-auto" width="94" height="24" loading="lazy" />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-sm">
              Digital Midstream™ solutions for Texas operators. We bring the infrastructure to your wellhead so you can turn stranded gas into revenue.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/10netzero"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="10NetZero on LinkedIn"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/10netzero"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="10NetZero on Twitter"
              >
                <Twitter className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-sm text-gray-300 uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-sm text-gray-300 uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="text-xs text-gray-600">
              © {new Date().getFullYear()} 10NetZero. All rights reserved.
            </div>
            <div className="text-xs text-gray-600">
              Houston, Texas
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
