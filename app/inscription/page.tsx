
import { RegistrationHero } from '@/components/registration/registration-hero'
import { RegistrationForm } from '@/components/registration/registration-form'
import { RegistrationInfo } from '@/components/registration/registration-info'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Inscription | MARA Digital School',
  description: 'Candidatez à MARA Digital School. Rejoignez l\'élite technologique africaine. Processus d\'admission sélectif basé sur la motivation et le potentiel.',
}

export default function InscriptionPage() {
  return (
    <>
      <RegistrationHero />
      <div className="section-luxury-short">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <RegistrationInfo />
            <RegistrationForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
