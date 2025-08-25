
import { HeroSection } from '@/components/hero-section'
import { VisionSection } from '@/components/vision-section'
import { ProgramsOverview } from '@/components/programs-overview'
import { ProjectsSection } from '@/components/projects-section'
import { StatsSection } from '@/components/stats-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { OpenHouseSection } from '@/components/open-house-section' // 🎯 JOURNÉES PORTES OUVERTES - Décommentez pour activer
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <ProgramsOverview />
      <ProjectsSection />
      <StatsSection />
      <TestimonialsSection />
      <OpenHouseSection /> {/* 🎯 JOURNÉES PORTES OUVERTES - Décommentez pour activer */}
      <CtaSection />
      <Footer />
    </>
  )
}
