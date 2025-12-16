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
              The Problem
            </span>
            <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            You're <span className="text-primary">Burning Money</span> at the Wellhead
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Infrastructure gaps, negative pricing, and capital constraints force operators to flare gas that could generate revenue. We solve that problem without requiring your capital.
          </p>
        </div>

        {/* Problem Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {[
            {
              icon: DollarSign,
              title: 'Negative Pricing',
              description: 'Waha Hub traded negative nearly half of 2024. When you have to pay to have your gas taken, flaring becomes the economically rational choice.',
              stat: '-$6.41',
              statLabel: 'Waha low (Aug 2024)'
            },
            {
              icon: AlertTriangle,
              title: 'Infrastructure Gaps',
              description: 'Pipeline construction costs hit $10.7M per mile. Midstream companies prioritize high-volume commitments. Smaller operators wait—or flare.',
              stat: '$10.7M',
              statLabel: 'Per mile pipeline cost'
            },
            {
              icon: Flame,
              title: 'Regulatory Cliff Ahead',
              description: 'Federal methane fees hit $1,500/ton by 2026. EPA rules phase out routine flaring at new wells. The permissive Texas environment won\'t last.',
              stat: '$1,500',
              statLabel: 'Per ton methane fee (2026)'
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
                <span className="text-primary font-medium text-sm">The Numbers Don't Lie</span>
              </div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                Texas operators burned $750 million in 2018. The problem hasn't gone away.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Even with reduced flaring intensity, record production means substantial volumes still go up in smoke. That's revenue you're not capturing—and costs you'll face when federal rules bite.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">99%+</div>
                  <div className="text-gray-400">RRC permit approval rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-green mb-1">2026</div>
                  <div className="text-gray-400">EPA flaring phase-out deadline</div>
                </div>
              </div>
            </div>

            {/* Regulatory Timeline */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h4 className="font-semibold text-lg mb-4">Federal Methane Fee Schedule</h4>
              <div className="space-y-4">
                {[
                  { year: '2024', fee: '$900/ton', width: 60 },
                  { year: '2025', fee: '$1,200/ton', width: 80 },
                  { year: '2026+', fee: '$1,500/ton', width: 100 },
                ].map((item) => (
                  <div key={item.year} className="flex items-center gap-4">
                    <span className="text-gray-400 w-16">{item.year}</span>
                    <div className="flex-1 flex gap-2 items-center">
                      <div
                        className="h-8 bg-primary/80 rounded-r-full flex items-center justify-end pr-3"
                        style={{ width: `${item.width}%` }}
                      >
                        <span className="text-white text-sm font-semibold">{item.fee}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400">Applies to facilities reporting &gt;25,000 metric tons CO2-equivalent/year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
