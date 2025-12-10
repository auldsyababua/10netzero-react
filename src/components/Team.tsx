'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Twitter } from 'lucide-react'

export function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const team = [
    {
      name: "Joel Fulford",
      role: "CEO",
      bio: "12 years in O&G with deep expertise in operations and business development. Joel brings strategic vision and industry connections to drive 10NetZero's growth.",
      credentials: ["Mechanical Engineering", "Rice University, MBA"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format",
      linkedin: "https://www.linkedin.com/in/joel-fulford-5838aa14b/"
    },
    {
      name: "Bryan Aulds",
      role: "COO/CFO",
      bio: "11 years in Bitcoin with extensive military and commercial operations experience. Bryan oversees operations and financial strategy.",
      credentials: ["U.S. Naval Academy", "Rice University, MBA"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format",
      linkedin: "https://www.linkedin.com/in/s-bryan-aulds-ii-32b955135/",
      twitter: "https://mobile.twitter.com/bryanaulds"
    },
    {
      name: "Colin Aulds",
      role: "CTO",
      bio: "11 years in Bitcoin with expertise in hardware and software integration. Colin leads our technology development and implementation.",
      credentials: ["Belmont University", "Hardware & Software Integration"],
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&auto=format",
      linkedin: "https://www.linkedin.com/in/colin-aulds-a7834b103/",
      twitter: "https://twitter.com/colin_aulds"
    }
  ]

  return (
    <section id="team" className="relative py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Our Leadership
            </span>
            <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            Meet the <span className="text-primary">Team</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Our leadership combines deep oil & gas expertise with cutting-edge technology experience to deliver innovative solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card clean-border rounded-2xl overflow-hidden hover:shadow-xl gentle-animation group"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 gentle-animation"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Social Links */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {member.linkedin && (
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 gentle-animation"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.twitter && (
                    <a 
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 gentle-animation"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Info */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2">
                  {member.credentials.map((credential, idx) => (
                    <span key={idx} className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                      {credential}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { title: 'Industry Expertise', description: '30+ combined years in oil & gas and energy technology' },
            { title: 'Proven Results', description: 'Track record of successful deployments across multiple basins' },
            { title: 'Partner Focus', description: 'Long-term relationships built on trust and shared success' }
          ].map((value, index) => (
            <div key={value.title} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full" />
              </div>
              <h4 className="font-display text-lg font-bold text-foreground mb-2">{value.title}</h4>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
