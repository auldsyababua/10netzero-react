'use client'

import { motion } from 'framer-motion'
import { Zap, TrendingUp, Shield, BarChart3, CheckCircle, ArrowRight, ChevronDown, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Contact } from '@/components/Contact'
import { SEOHead } from '@/components/seo/SEOHead'
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from '@/components/seo/JsonLd'
import { pagesSEO, buildUrl } from '@/config/seo'

const faqItems = [
  {
    question: "What is Digital Midstream™?",
    answer: "Digital Midstream™ is 10NetZero's flagship solution that converts stranded natural gas into electricity and digital assets (like Bitcoin) directly at the wellsite. Unlike traditional midstream infrastructure (pipelines), it's modular, mobile, and requires zero capital investment from operators."
  },
  {
    question: "How much does it cost to get started with 10NetZero?",
    answer: "$0 upfront. 10NetZero handles all infrastructure, equipment, installation, and ongoing operations. Operators simply provide access to their stranded gas and receive a share of the generated revenue."
  },
  {
    question: "What types of wells can use Digital Midstream™?",
    answer: "Our solutions work with most stranded gas wells in the Permian Basin. We assess each site individually to determine the optimal approach based on gas volume, location, and infrastructure availability."
  },
  {
    question: "How quickly can equipment be deployed?",
    answer: "Modular infrastructure can be deployed and operational within 2-4 weeks. This compares to years for traditional pipeline construction projects."
  },
  {
    question: "What happens when gas production declines?",
    answer: "Because the infrastructure is modular and mobile, equipment can be redeployed to other sites as production declines. This eliminates stranded asset risk that comes with fixed pipeline infrastructure."
  }
]

// FAQ Accordion Item Component
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentId = `faq-content-${index}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-border rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full px-6 py-5 flex items-center justify-between text-left bg-card hover:bg-muted/50 transition-colors"
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div
          id={contentId}
          aria-hidden={!isOpen}
          className="px-6 py-5 bg-muted/30 border-t border-border"
        >
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </motion.div>
  )
}

const features = [
  {
    icon: Zap,
    title: 'On-Site Power Generation',
    description: 'Convert stranded natural gas into electricity directly at the wellsite, eliminating the need for costly pipeline infrastructure.',
  },
  {
    icon: TrendingUp,
    title: 'Bitcoin Mining Integration',
    description: 'Monetize excess power through integrated Bitcoin mining operations, creating a new revenue stream from previously wasted gas.',
  },
  {
    icon: Shield,
    title: 'Emissions Reduction',
    description: 'Achieve up to 98% methane reduction and 63% CO2e reduction compared to traditional flaring methods.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Monitoring',
    description: 'Advanced IoT sensors and cloud-based analytics provide 24/7 visibility into operations and emissions.',
  },
]

const benefits = [
  'Zero capital investment required',
  'Turn stranded gas into revenue',
  'Meet ESG compliance requirements',
  'Reduce flaring penalties',
  'Generate verifiable carbon credits',
  'Scalable modular infrastructure',
]

export default function DigitalMidstream() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={pagesSEO.digitalMidstream.title}
        description={pagesSEO.digitalMidstream.description}
        keywords={pagesSEO.digitalMidstream.keywords}
        path={pagesSEO.digitalMidstream.path}
      />
      <ServiceSchema
        name="Digital Midstream™"
        description="Convert stranded natural gas into revenue with on-site power generation and Bitcoin mining. Zero capital investment required."
        url={buildUrl(pagesSEO.digitalMidstream.path)}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: buildUrl('/') },
          { name: 'Digital Midstream™', url: buildUrl(pagesSEO.digitalMidstream.path) },
        ]}
      />
      <FAQSchema items={faqItems} />
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
              <span className="text-primary font-medium text-sm">Our Flagship Solution</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Digital Midstream™
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-10">
              Transform stranded natural gas into a profitable asset. Our modular, mobile infrastructure converts waste gas into power and digital assets—no pipelines required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 text-lg flex items-center gap-2"
              >
                Request Assessment <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Answer Block / TL;DR - Optimized for AI extraction */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-primary/5 border-y border-primary/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border shadow-lg"
          >
            <h2 className="text-lg font-semibold text-primary mb-4">Key Takeaways</h2>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Digital Midstream™</strong> converts stranded natural gas into power and Bitcoin at the wellsite—no pipelines needed.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>$0 upfront cost</strong>—10NetZero handles all infrastructure and operations. Operators share in revenue.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Deploy in weeks</strong>, not years. Modular equipment redeploys as wells decline.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>98% methane reduction</strong> compared to flaring. Meet regulatory requirements before 2026 fee escalation.</span>
              </li>
            </ul>
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
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our end-to-end solution handles everything from site assessment to ongoing operations.
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

      {/* Benefits Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Zero Capital Investment Required
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We handle the infrastructure, installation, and operations. You simply provide access to your stranded gas and share in the revenue.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
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
              <h3 className="text-2xl font-bold text-foreground mb-6">Proven Results</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Methane Reduction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">63%</div>
                  <div className="text-muted-foreground">CO2e Reduction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">93%</div>
                  <div className="text-muted-foreground">VOC Reduction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">$0</div>
                  <div className="text-muted-foreground">Upfront Cost</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Digital Midstream™
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Learn More
            </h2>
            <p className="text-lg text-muted-foreground">
              Deep dive into the economics and technology behind Digital Midstream™
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <BookOpen className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">What Is Digital Midstream™?</h3>
              <p className="text-muted-foreground text-sm mb-4">A comprehensive visual explainer of how Digital Midstream™ transforms stranded gas into revenue.</p>
              <Link to="/blog/what-is-digital-midstream" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Read article <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <BookOpen className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">The Economics of Gas-to-Power</h3>
              <p className="text-muted-foreground text-sm mb-4">Breaking down the financial benefits of converting stranded gas to electricity at the wellsite.</p>
              <Link to="/blog/economics-gas-to-power-generation" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Read article <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <BookOpen className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">2025 Methane Emission Standards</h3>
              <p className="text-muted-foreground text-sm mb-4">What Texas operators need to know about upcoming regulatory changes and $1,500/ton methane fees.</p>
              <Link to="/blog/methane-emission-standards-2025" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Read article <ArrowRight className="w-4 h-4" />
              </Link>
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
