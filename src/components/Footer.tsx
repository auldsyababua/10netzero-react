'use client'

import { Flame, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const navigation = [
    { name: 'The Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-5">
            <div className="flex items-center mb-6">
              <Flame className="w-8 h-8 text-primary mr-2" />
              <span className="font-display text-2xl font-bold">10NetZero</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Helping O&G firms monetize their stranded natural gas while meeting ESG goals. 
              Zero waste, net zero emissions.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/10netzero"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary gentle-animation"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/10netzero"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary gentle-animation"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-white gentle-animation"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-lg mb-6">Our Solutions</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Gas-to-Power Generation</li>
              <li className="text-gray-400">Bitcoin Mining Solutions</li>
              <li className="text-gray-400">Gas Processing</li>
              <li className="text-gray-400">ESG Reporting</li>
              <li className="text-gray-400">Operations & Maintenance</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} 10NetZero. All rights reserved.
            </div>
            <div className="text-sm text-gray-500">
              Houston, Texas
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
