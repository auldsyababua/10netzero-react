'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Leaf, Droplets, Wind, Factory } from 'lucide-react'

export function Awards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: Leaf,
      value: '98%',
      label: 'Reduced Methane',
      description: 'Near-complete elimination of methane emissions from flaring operations',
      color: 'accent-green'
    },
    {
      icon: Factory,
      value: '63%',
      label: 'Reduced CO2e',
      description: 'Significant reduction in carbon dioxide equivalent emissions',
      color: 'primary'
    },
    {
      icon: Wind,
      value: '93%',
      label: 'Reduced VOCs',
      description: 'Dramatic decrease in volatile organic compound releases',
      color: 'accent-blue'
    },
    {
      icon: Droplets,
      value: '100%',
      label: 'Gas Utilization',
      description: 'Convert all stranded gas into valuable electricity',
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
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Environmental Impact
            </span>
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            <span className="text-accent-green">Reducing</span> CO2e Emissions
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Natural gas has already provided immense savings in GHG emissions. We make it even more environmentally friendly by utilizing otherwise wasted natural gas.
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

        {/* ESG Alignment Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-accent-green/10 via-primary/10 to-accent-blue/10 rounded-2xl p-8 lg:p-12 border border-accent-green/20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
                Align with Your ESG Goals
              </h3>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Our solutions help you meet environmental commitments while creating economic value from stranded assets.
              </p>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent-green text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent-green/90 gentle-animation whitespace-nowrap"
            >
              Start Your ESG Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
