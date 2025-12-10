'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Flame, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react'

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="problem" className="relative py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              The Challenge
            </span>
            <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            <span className="text-primary">Wasting</span> Gas is No Longer Necessary
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            10NetZero offers flexible, no-cost solutions to excess natural gas problems. Our customized plug-n-play products create economic value, reduce Methane, and meet ESG initiatives.
          </p>
        </div>

        {/* Problem Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {[
            {
              icon: Flame,
              title: 'Global Flaring Crisis',
              description: 'Billions of cubic feet of natural gas are flared or vented annually, wasting valuable resources and harming the environment.',
              stat: '145B m³',
              statLabel: 'Gas flared annually'
            },
            {
              icon: AlertTriangle,
              title: 'Growing Regulations',
              description: 'Increasingly strict ESG requirements and emissions regulations are putting pressure on operators to find solutions.',
              stat: '47 States',
              statLabel: 'With flaring regulations'
            },
            {
              icon: DollarSign,
              title: 'Lost Revenue',
              description: 'Stranded gas represents billions in lost potential revenue for operators who lack infrastructure to capture it.',
              stat: '$Billions',
              statLabel: 'In annual lost value'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card clean-border rounded-2xl p-8 hover:shadow-lg gentle-animation group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 gentle-animation">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
              <div className="pt-4 border-t border-border">
                <div className="text-2xl font-bold text-primary">{item.stat}</div>
                <div className="text-sm text-muted-foreground">{item.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Growing Problem Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">A Growing Problem</span>
              </div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                Fields are getting more gaseous, with increasing pressure to act.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                As oil production continues to grow, so does the associated gas. Without proper infrastructure, this valuable resource goes to waste—and operators face mounting regulatory and public pressure.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">150%</div>
                  <div className="text-gray-400">Increase in flaring since 2010</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-green mb-1">2030</div>
                  <div className="text-gray-400">Zero routine flaring target</div>
                </div>
              </div>
            </div>
            
            {/* Chart Placeholder */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h4 className="font-semibold text-lg mb-4">Expected U.S. Production Growth</h4>
              <div className="space-y-4">
                {[
                  { year: '2024', oil: 85, gas: 75 },
                  { year: '2026', oil: 90, gas: 82 },
                  { year: '2028', oil: 95, gas: 90 },
                  { year: '2030', oil: 100, gas: 98 },
                ].map((item) => (
                  <div key={item.year} className="flex items-center gap-4">
                    <span className="text-gray-400 w-12">{item.year}</span>
                    <div className="flex-1 flex gap-2">
                      <div 
                        className="h-6 bg-primary/80 rounded-r-full"
                        style={{ width: `${item.oil}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-6 mt-6 pt-4 border-t border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="text-sm text-gray-400">Oil Production Index</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
