'use client'

import { motion } from 'framer-motion'
import { Server, Shield, Gauge, Clock, ArrowRight, CheckCircle } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Contact } from '@/components/Contact'

const features = [
  {
    icon: Server,
    title: 'Turnkey Data Centers',
    description: 'Fully operational modular data centers deployed directly at your wellsite for Bitcoin mining and edge computing.',
  },
  {
    icon: Shield,
    title: 'Secure Operations',
    description: 'Enterprise-grade security with 24/7 monitoring, redundant systems, and robust physical protection.',
  },
  {
    icon: Gauge,
    title: 'Optimized Performance',
    description: 'Advanced cooling systems and power management ensure maximum efficiency in any environment.',
  },
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: 'Real-time operations center with remote management capabilities and instant alert systems.',
  },
]

const specs = [
  { label: 'Power Capacity', value: 'Up to 10MW per site' },
  { label: 'Uptime', value: '99.9% SLA' },
  { label: 'Response Time', value: '<15 min critical alerts' },
  { label: 'Cooling Efficiency', value: 'PUE < 1.1' },
]

export default function DataCenterOps() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-gray-900 via-gray-900 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-medium text-sm">Operational Excellence</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Data Center Operations
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-10">
              Fully managed, field-deployed data centers that convert your stranded gas into computational power and digital assets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 text-lg flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Enterprise-Grade Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Purpose-built for remote operations with industrial reliability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Built for Performance
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our modular data centers are engineered to operate in the most demanding field conditions while maintaining peak performance.
              </p>
              <ul className="space-y-4">
                {[
                  'Ruggedized for oilfield environments',
                  'Rapid deployment in weeks, not months',
                  'Scalable from kW to MW',
                  'Full remote management capabilities',
                  'Integrated power conditioning',
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-10 border border-primary/30"
            >
              <h3 className="text-2xl font-bold text-foreground mb-8">Technical Specifications</h3>
              <div className="space-y-6">
                {specs.map((spec, index) => (
                  <div key={spec.label} className="flex justify-between items-center border-b border-border/50 pb-4">
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="text-xl font-semibold text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  )
}
