'use client'

import { Navbar } from '@/components/Navbar'
import { Team } from '@/components/Team'
import { Footer } from '@/components/Footer'
import { Contact } from '@/components/Contact'

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24">
        <Team />
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  )
}
