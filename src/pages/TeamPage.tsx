'use client'

import { Navbar } from '@/components/Navbar'
import { Team } from '@/components/Team'
import { Footer } from '@/components/Footer'
import { Contact } from '@/components/Contact'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'
import { pagesSEO, buildUrl } from '@/config/seo'

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={pagesSEO.team.title}
        description={pagesSEO.team.description}
        keywords={pagesSEO.team.keywords}
        path={pagesSEO.team.path}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: buildUrl('/') },
          { name: 'Team', url: buildUrl('/team') },
        ]}
      />
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
