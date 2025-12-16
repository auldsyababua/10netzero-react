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
      description: "Convert stranded gas into electricity. Power your operations, reduce diesel costs, or sell to the grid during peak pricing.",
      features: ["Mobile & permanent solutions", "Scalable capacity", "Grid integration ready"]
    },
    {
      icon: Server,
      title: "Bitcoin Mining",
      description: "Turn flare gas into Bitcoin. Containerized data centers deploy at your wellhead and generate revenue from day one.",
      features: ["Proven at ExxonMobil, Marathon", "Remote management", "Better returns than negative Waha"]
    },
    {
      icon: Droplets,
      title: "Gas Processing",
      description: "85%+ of Permian gas has H2S issues. We handle sour gas treatment, NGL recovery, and get your gas to spec.",
      features: ["H2S removal", "NGL extraction", "Pipeline-quality gas"]
    },
    {
      icon: LineChart,
      title: "Compliance Documentation",
      description: "Federal rules require proof of capture efforts. We document everything and generate the reports you need.",
      features: ["Real-time monitoring", "Regulatory reports", "Audit-ready records"]
    },
    {
      icon: Wrench,
      title: "Full-Service Operations",
      description: "We run the equipment, maintain it, and handle problems. You get revenue without the headaches.",
      features: ["24/7 monitoring", "Predictive maintenance", "Rapid response"]
    },
    {
      icon: Cloud,
      title: "Portable Solutions",
      description: "Wells decline. Our equipment moves with production. No stranded assets when volumes drop.",
      features: ["Relocatable equipment", "Flexible contracts", "Matches well lifecycle"]
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
            Multiple Ways to <span className="text-primary">Monetize</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Different wells need different solutions. We match the right approach to your gas volume, composition, and location—then handle everything from there.
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
            Stop Burning Money. Start Making It.
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free site assessment. We'll tell you exactly what your stranded gas is worth and how fast we can get you operational.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-white/90 gentle-animation"
          >
            Get Your Free Assessment
          </button>
        </motion.div>
      </div>
    </section>
  )
}
