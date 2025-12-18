'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Settings, BarChart3, Shield, CheckCircle, ArrowRight, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const processSteps = [
    {
      number: "01",
      title: "Site Assessment",
      description: "We evaluate gas volume, site access, and infrastructure needs. You get a clear picture of your revenue potential.",
      icon: BarChart3
    },
    {
      number: "02",
      title: "Custom Design",
      description: "We engineer the solution for your site—generators, Bitcoin miners, and AI compute hardware sized for your gas volume.",
      icon: Settings
    },
    {
      number: "03",
      title: "Deployment",
      description: "We bring equipment, install it, and get you operational. No pipeline wait, no capital outlay from you.",
      icon: Zap
    },
    {
      number: "04",
      title: "Operations",
      description: "We run the equipment, handle maintenance, and send you checks. You focus on drilling.",
      icon: Shield
    }
  ]

  const benefits = [
    "No upfront capital investment",
    "Flexible contract terms",
    "Revenue sharing from day one",
    "Avoid federal methane fees",
    "Get ahead of EPA rules",
    "Portable equipment moves with production"
  ]

  return (
    <section id="solution" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-6 block">
            Our Solution
          </span>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            We Bring the <span className="text-primary">Infrastructure</span> to Your Wellhead
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            You can't build a $10M/mile pipeline for a few wells. We bring generators and computing equipment to your wellhead—your gas powers Bitcoin miners and AI inference servers that generate real revenue. You provide the gas, we handle the rest.
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
                We Deploy the Capital. You Collect the Checks.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                At $10.7M per pipeline mile, you're not building infrastructure for a few wells. We bring generators and computing hardware to convert your gas into electricity that powers Bitcoin mining and AI workloads. You provide the gas and start generating revenue.
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

        {/* Learn More Link */}
        <div className="mt-12 text-center">
          <Link
            to="/blog/what-is-digital-midstream"
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <BookOpen className="w-5 h-5" />
            <span>Read our complete guide: <span className="text-primary font-medium">What Is Digital Midstream™?</span></span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
