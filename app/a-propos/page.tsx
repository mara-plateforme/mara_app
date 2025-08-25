
import { AboutHero } from '@/components/about/about-hero'
import { SchoolStory } from '@/components/about/school-story'
import { TeamSection } from '@/components/about/team-section'
import { PartnersSection } from '@/components/about/partners-section'
import { CampusSection } from '@/components/about/campus-section'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'À Propos | MARA Digital School',
  description: 'Histoire de MARA Digital School, école de formation IT d\'excellence. Notre équipe pédagogique de classe mondiale et nos partenaires technologiques.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <SchoolStory />
      <TeamSection />
      <CampusSection />
      <PartnersSection />
      <Footer />
    </>
  )
}
