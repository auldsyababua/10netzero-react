'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'
import { pagesSEO, buildUrl } from '@/config/seo'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Stranded Gas Monetization',
    excerpt: 'Exploring how emerging technologies are transforming the way oil and gas companies handle stranded natural gas assets.',
    date: '2024-12-10',
    readTime: '5 min read',
    category: 'Industry Insights',
  },
  {
    id: 2,
    title: 'Understanding ESG Compliance in the Energy Sector',
    excerpt: 'A comprehensive guide to environmental, social, and governance requirements for modern energy operations.',
    date: '2024-12-05',
    readTime: '8 min read',
    category: 'Compliance',
  },
  {
    id: 3,
    title: 'Bitcoin Mining: A Sustainable Solution for Flare Gas',
    excerpt: 'How cryptocurrency mining is providing an unexpected solution to the environmental challenge of gas flaring.',
    date: '2024-11-28',
    readTime: '6 min read',
    category: 'Technology',
  },
  {
    id: 4,
    title: 'Case Study: 98% Methane Reduction at Permian Basin Site',
    excerpt: 'Real-world results from our Digital Midstream deployment at a major Permian Basin operation.',
    date: '2024-11-20',
    readTime: '4 min read',
    category: 'Case Study',
  },
  {
    id: 5,
    title: 'The Economics of Gas-to-Power Generation',
    excerpt: 'Breaking down the financial benefits of converting stranded gas to electricity at the wellsite.',
    date: '2024-11-15',
    readTime: '7 min read',
    category: 'Industry Insights',
  },
  {
    id: 6,
    title: 'Regulatory Landscape: 2025 Methane Emission Standards',
    excerpt: 'What operators need to know about upcoming regulatory changes and how to prepare.',
    date: '2024-11-10',
    readTime: '5 min read',
    category: 'Compliance',
  },
]

const categories = ['All', 'Industry Insights', 'Technology', 'Compliance', 'Case Study']

export default function Blog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={pagesSEO.blog.title}
        description={pagesSEO.blog.description}
        keywords={pagesSEO.blog.keywords}
        path={pagesSEO.blog.path}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: buildUrl('/') },
          { name: 'Blog', url: buildUrl('/blog') },
        ]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-gray-900 via-gray-900 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Insights & Updates
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Stay informed about the latest developments in stranded gas monetization, ESG compliance, and sustainable energy solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-6 sm:px-8 lg:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5" />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
