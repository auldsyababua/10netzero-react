'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Server, Droplets, LineChart, Wrench, Cloud } from 'lucide-react'

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Zap,
      title: "Gas-to-Power Generation",
      description: "Convert stranded natural gas into electricity using our efficient generator sets. Power your operations or sell back to the grid.",
      features: ["Mobile & permanent solutions", "Scalable capacity", "Grid integration ready"]
    },
    {
      icon: Server,
      title: "Bitcoin Mining Solutions",
      description: "Monetize excess gas through cryptocurrency mining. Our containerized data centers convert gas to digital assets.",
      features: ["Turnkey deployment", "Remote management", "Flexible revenue models"]
    },
    {
      icon: Droplets,
      title: "Gas Processing",
      description: "Clean and condition your gas for various end uses. We handle everything from H2S removal to NGL recovery.",
      features: ["Custom gas treatment", "NGLs extraction", "Quality specifications"]
    },
    {
      icon: LineChart,
      title: "ESG Reporting",
      description: "Track and document your emissions reductions for regulatory compliance and stakeholder reporting.",
      features: ["Real-time monitoring", "Compliance reports", "Carbon credit tracking"]
    },
    {
      icon: Wrench,
      title: "Operations & Maintenance",
      description: "24/7 remote monitoring and on-site maintenance to ensure maximum uptime and optimal performance.",
      features: ["Predictive maintenance", "Rapid response", "Performance optimization"]
    },
    {
      icon: Cloud,
      title: "Emissions Reduction",
      description: "Comprehensive solutions to reduce flaring, venting, and fugitive emissions across your operations.",
      features: ["Methane mitigation", "Flare elimination", "Leak detection"]
    }
  ]

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              What We Offer
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            Comprehensive <span className="text-primary">Solutions</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            From gas processing to power generation, we offer end-to-end solutions tailored to your specific operational needs.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background clean-border rounded-2xl p-8 hover:shadow-xl gentle-animation group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 gentle-animation">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-white text-center"
        >
          <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
            Ready to Monetize Your Stranded Gas?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free site assessment and discover how much value you could unlock from your stranded gas assets.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-white/90 gentle-animation"
          >
            Request Free Assessment
          </button>
        </motion.div>
      </div>
    </section>
  )
}
