'use client'

import { motion } from 'framer-motion'
import { Lightbulb, FileText, Ruler, Users, ArrowRight, CheckCircle } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Contact } from '@/components/Contact'
import { SEOHead } from '@/components/seo/SEOHead'
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/JsonLd'
import { pagesSEO, buildUrl } from '@/config/seo'

const services = [
  {
    icon: Lightbulb,
    title: 'Site Assessment',
    description: 'Comprehensive evaluation of your wellsite conditions, gas composition, and infrastructure requirements.',
  },
  {
    icon: FileText,
    title: 'Feasibility Studies',
    description: 'Detailed analysis of project viability, ROI projections, and environmental impact assessments.',
  },
  {
    icon: Ruler,
    title: 'Custom Engineering',
    description: 'Tailored solutions designed specifically for your unique operational requirements and constraints.',
  },
  {
    icon: Users,
    title: 'Regulatory Navigation',
    description: 'Expert guidance through permitting, compliance, and ESG reporting requirements.',
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We learn about your operations, challenges, and goals.',
  },
  {
    step: '02',
    title: 'Site Analysis',
    description: 'Our engineers assess your wellsite conditions and gas characteristics.',
  },
  {
    step: '03',
    title: 'Solution Design',
    description: 'We develop a customized plan tailored to your specific needs.',
  },
  {
    step: '04',
    title: 'Implementation Roadmap',
    description: 'Detailed timeline and milestones for project execution.',
  },
]

export default function ConsultingDesign() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={pagesSEO.consultingDesign.title}
        description={pagesSEO.consultingDesign.description}
        keywords={pagesSEO.consultingDesign.keywords}
        path={pagesSEO.consultingDesign.path}
      />
      <ServiceSchema
        name="Consulting & Engineering Design"
        description="Expert consulting for flare gas monetization projects. Feasibility studies, regulatory compliance, and engineering design."
        url={buildUrl(pagesSEO.consultingDesign.path)}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: buildUrl('/') },
          { name: 'Consulting & Design', url: buildUrl(pagesSEO.consultingDesign.path) },
        ]}
      />
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
              <span className="text-primary font-medium text-sm">Expert Guidance</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Consulting & Design
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-10">
              From initial concept to detailed engineering—our team of experts guides you through every step of implementing stranded gas solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 text-lg flex items-center gap-2"
              >
                Schedule Consultation <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Consulting Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise to help you make informed decisions about your stranded gas assets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers results efficiently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-primary/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
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
