import { Hero } from '@/components/Hero'
import { Portfolio } from '@/components/Portfolio'
import { Awards } from '@/components/Awards'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Team } from '@/components/Team'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative" role="main">
        <section id="hero" aria-label="Hero section">
          <Hero />
        </section>
        <section id="problem-section" aria-label="The Problem section">
          <Portfolio />
        </section>
        <section id="impact-section" aria-label="Environmental Impact section">
          <Awards />
        </section>
        <section id="solution-section" aria-label="Solution section">
          <About />
        </section>
        <section id="services-section" aria-label="Services section">
          <Services />
        </section>
        <section id="team-section" aria-label="Team section">
          <Team />
        </section>
        <section id="contact-section" aria-label="Contact section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
