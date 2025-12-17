'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { DollarSign, TrendingUp, Shield, Clock } from 'lucide-react'

export function Awards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: DollarSign,
      value: '$0',
      label: 'Capital Required',
      description: 'We bring the equipment and handle installation. No upfront investment from you.',
      color: 'primary'
    },
    {
      icon: TrendingUp,
      value: '99.89%',
      label: 'Combustion Efficiency',
      description: 'Our generators achieve near-complete combustion vs 91% for typical flares.',
      color: 'accent-green'
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Regulatory Compliance',
      description: 'Documentation for EPA requirements and federal methane fee calculations.',
      color: 'accent-blue'
    },
    {
      icon: Clock,
      value: 'Weeks',
      label: 'To Revenue',
      description: 'Fast deployment gets you generating income, not waiting on pipeline permits.',
      color: 'accent-emerald'
    }
  ]

  return (
    <section id="impact" className="relative py-24 lg:py-32 bg-card/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-6 block">
            Why It Works
          </span>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            Better <span className="text-primary">Economics</span> Than Flaring
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            When Waha goes negative, you're paying to have gas taken or burning money at the wellhead. We give you a third option that actually generates revenue.
          </p>
        </div>

        {/* Benefits Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background clean-border rounded-2xl p-8 text-center hover:shadow-xl gentle-animation group"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-${benefit.color}/10 group-hover:bg-${benefit.color}/20 gentle-animation`}>
                <benefit.icon className={`w-8 h-8 text-${benefit.color}`} />
              </div>
              
              <div className={`text-5xl font-bold text-${benefit.color} mb-2`}>
                {benefit.value}
              </div>
              
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {benefit.label}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Regulatory Timeline Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-accent-green/10 via-primary/10 to-accent-blue/10 rounded-2xl p-8 lg:p-12 border border-accent-green/20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
                Get Ahead of the Regulatory Cliff
              </h3>
              <p className="text-muted-foreground text-lg max-w-2xl">
                EPA rules tighten in 2026. Methane fees hit $1,500/ton. The Texas permit party won't last forever. Solve your stranded gas problem now—before it becomes a compliance scramble.
              </p>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent-green text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent-green/90 gentle-animation whitespace-nowrap"
            >
              Talk to Us Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
