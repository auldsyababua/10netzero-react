'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Server, Compass, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Zap,
      title: "Digital Midstream™",
      description: "Our flagship solution converts stranded natural gas into power and digital assets at the wellsite—no pipelines needed. Zero capital required.",
      features: ["On-site power generation", "Bitcoin mining integration", "98% methane reduction vs flaring"],
      href: "/services/digital-midstream"
    },
    {
      icon: Server,
      title: "Data Center Operations",
      description: "Turn flare gas into Bitcoin. We deploy, manage, and maintain containerized data centers at your wellhead. You provide gas, we handle everything else.",
      features: ["Proven at major operators", "24/7 remote management", "Revenue from day one"],
      href: "/services/data-center-ops"
    },
    {
      icon: Compass,
      title: "Consulting & Design",
      description: "Not sure where to start? We assess your wells, analyze gas composition, and design the optimal monetization strategy for your specific situation.",
      features: ["Site assessments", "Feasibility studies", "Custom engineering design"],
      href: "/services/consulting-design"
    }
  ]

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-6 block">
            Our Services
          </span>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            Three Ways to <span className="text-primary">Monetize</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Different wells need different solutions. We match the right approach to your gas volume and location—then handle everything from there.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background clean-border rounded-2xl p-8 hover:shadow-xl gentle-animation group flex flex-col"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 gentle-animation">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-6 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={service.href}
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
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
