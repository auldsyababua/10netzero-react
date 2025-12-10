'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Settings, BarChart3, Shield, CheckCircle } from 'lucide-react'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const processSteps = [
    {
      number: "01",
      title: "Site Assessment",
      description: "We evaluate your gas volume, composition, and site requirements to design the optimal solution.",
      icon: BarChart3
    },
    {
      number: "02", 
      title: "Custom Design",
      description: "Our engineers design a plug-and-play gas-to-power system tailored to your specific needs.",
      icon: Settings
    },
    {
      number: "03",
      title: "Installation",
      description: "Quick deployment with minimal disruption to your operations. Most systems are operational within weeks.",
      icon: Zap
    },
    {
      number: "04",
      title: "Ongoing Monitoring",
      description: "24/7 remote monitoring and maintenance ensures optimal performance and maximum uptime.",
      icon: Shield
    }
  ]

  const benefits = [
    "No upfront capital investment required",
    "Flexible contract terms",
    "Revenue sharing from power generation",
    "Meet ESG and regulatory requirements",
    "Reduce flaring and venting",
    "Turn waste into profit"
  ]

  return (
    <section id="solution" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Our Solution
            </span>
            <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            Our Company <span className="text-primary">Eliminates</span> the Need to Flare
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            10NetZero offers flexible, no-cost solutions to excess natural gas problems. Our customized plug-n-play products and services create economic value while meeting ESG initiatives.
          </p>
        </div>

        {/* Process Steps */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-card clean-border rounded-2xl p-8 hover:shadow-lg gentle-animation group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                {step.number}
              </div>
              
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mt-2 group-hover:bg-primary/20 gentle-animation">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              
              {/* Connector Line (except last) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-border" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                Zero Capital Investment Required
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We handle everything—from equipment and installation to maintenance and monitoring. You simply provide the gas, and we create value together.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                    <span className="text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual */}
            <div className="relative">
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-primary mb-2">$0</div>
                  <div className="text-gray-400 text-lg">Upfront Investment</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-t border-gray-700">
                    <span className="text-gray-400">Equipment</span>
                    <span className="text-accent-green font-semibold">Provided</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-t border-gray-700">
                    <span className="text-gray-400">Installation</span>
                    <span className="text-accent-green font-semibold">Included</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-t border-gray-700">
                    <span className="text-gray-400">Maintenance</span>
                    <span className="text-accent-green font-semibold">Covered</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-t border-gray-700">
                    <span className="text-gray-400">Monitoring</span>
                    <span className="text-accent-green font-semibold">24/7</span>
                  </div>
                </div>
                
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full mt-8 bg-primary text-white font-semibold py-4 rounded-lg hover:bg-primary/90 gentle-animation"
                >
                  Get a Free Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
