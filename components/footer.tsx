
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-charcoal-light border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo-mara.png"
                  alt="MARA Digital School"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div className="text-xl font-bold font-playfair gold-gradient">
                MARA Digital School
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              L'école de formation IT d'excellence qui forge les leaders technologiques de demain. 
              Programmes intensifs avec instructeurs de classe mondiale sur nos campus de Dakar et Montréal.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/mara-digital-school" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass-premium rounded-full flex items-center justify-center hover:bg-gold-primary hover:text-charcoal transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/maradigitalschool" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass-premium rounded-full flex items-center justify-center hover:bg-gold-primary hover:text-charcoal transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://mara-digital.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass-premium rounded-full flex items-center justify-center hover:bg-gold-primary hover:text-charcoal transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold-primary">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="text-gray-300 hover:text-gold-primary transition-colors">
                  Catalogue des Programmes
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-gold-primary transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold-primary">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Campus Dakar</div>
                  <div className="text-gray-300 text-sm">
                    Almadies, Dakar<br />
                    Sénégal
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Campus Montréal</div>
                  <div className="text-gray-300 text-sm">
                    Plateau Mont-Royal<br />
                    Montréal, QC, Canada
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gold-primary mr-3 flex-shrink-0" />
                <a href="mailto:contact@maradigitalschool.com" className="text-gray-300 hover:text-gold-primary transition-colors text-sm">
                  contact@maradigitalschool.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gold-primary mr-3 flex-shrink-0" />
                <a href="tel:+221123456789" className="text-gray-300 hover:text-gold-primary transition-colors text-sm">
                  +221 12 345 67 89
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 MARA Digital School. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link href="/inscription" className="btn-secondary text-sm px-6 py-2">
                Candidater
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
