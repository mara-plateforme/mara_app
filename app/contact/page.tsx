
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactInfo } from '@/components/contact/contact-info'
import { ContactForm } from '@/components/contact/contact-form'
import { CampusLocations } from '@/components/contact/campus-locations'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Contact | MARA Digital School',
  description: 'Contactez MARA Digital School. Campus à Dakar (Sénégal) et Montréal (Canada). Informations et assistance pour votre formation IT.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="section-luxury-short">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
      <CampusLocations />
      <Footer />
    </>
  )
}
