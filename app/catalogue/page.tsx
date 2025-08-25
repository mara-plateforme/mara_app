
import { CatalogHero } from '@/components/catalog/catalog-hero'
import { ProgramsList } from '@/components/catalog/programs-list'
import { ProgramComparison } from '@/components/catalog/program-comparison'
import { AdmissionProcess } from '@/components/catalog/admission-process'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Catalogue des Programmes | MARA Digital School',
  description: 'Découvrez tous nos programmes de formation IT : Développement, DevOps, Cybersécurité, IA/ML, Réseaux & Télécom. Formations 18 mois avec projets clients réels.',
}

export default function CataloguePage() {
  return (
    <>
      <CatalogHero />
      <ProgramsList />
      <ProgramComparison />
      <AdmissionProcess />
      <Footer />
    </>
  )
}
