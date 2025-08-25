
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar, Users, Award } from 'lucide-react'

export function ContactInfo() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const contactDetails = [
    {
      campus: 'Campus Dakar',
      location: 'Sénégal',
      address: 'Almadies, Route des Almadies, Dakar 12500, Sénégal',
      phone: '+221 33 123 45 67',
      email: 'dakar@maradigitalschool.com',
      hours: 'Lun-Ven: 8h00-18h00, Sam: 9h00-13h00',
      coordinator: 'Aminata Touré - Directrice Campus'
    },
    {
      campus: 'Campus Montréal',
      location: 'Canada',
      address: '4567 Boulevard Saint-Laurent, Montréal, QC H2T 1R2, Canada',
      phone: '+1 (514) 123-4567',
      email: 'montreal@maradigitalschool.com',
      hours: 'Lun-Ven: 9h00-17h00, Sam: 10h00-14h00',
      coordinator: 'Omar Konaté - Directeur Campus'
    }
  ]

  const supportServices = [
    {
      icon: MessageCircle,
      title: 'Information Générale',
      description: 'Renseignements sur nos programmes, processus d\'admission, et vie étudiante',
      contact: 'info@maradigitalschool.com'
    },
    {
      icon: Users,
      title: 'Admission & Candidature',
      description: 'Support personnalisé pour votre dossier de candidature et processus de sélection',
      contact: 'admissions@maradigitalschool.com'
    },
    {
      icon: Award,
      title: 'Financement & Bourses',
      description: 'Conseils sur les options de financement, bourses, et paiements échelonnés',
      contact: 'financement@maradigitalschool.com'
    },
    {
      icon: Calendar,
      title: 'Événements & Visites',
      description: 'Planification de visites de campus, journées portes ouvertes, et événements',
      contact: 'events@maradigitalschool.com'
    }
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Campus Information */}
      <div className="space-y-6">
        {contactDetails.map((campus, index) => (
          <motion.div
            key={campus.campus}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="card-luxury rounded-3xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-primary to-gold-dark rounded-xl flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-charcoal" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-playfair">{campus.campus}</h3>
                <p className="text-gold-primary font-semibold">{campus.location}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  {campus.address}
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gold-primary mr-3 flex-shrink-0" />
                <a href={`tel:${campus.phone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-gold-primary transition-colors text-sm">
                  {campus.phone}
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gold-primary mr-3 flex-shrink-0" />
                <a href={`mailto:${campus.email}`} className="text-gray-300 hover:text-gold-primary transition-colors text-sm">
                  {campus.email}
                </a>
              </div>
              
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-gold-primary mr-3 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  {campus.hours}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-sm">
                  <span className="text-gold-primary font-semibold">Coordinateur: </span>
                  <span className="text-gray-300">{campus.coordinator}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Support Services */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="glass-premium rounded-3xl p-8"
      >
        <h3 className="text-2xl font-bold mb-6 font-playfair text-gold-primary">
          Services d'Assistance
        </h3>
        <div className="space-y-6">
          {supportServices.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-start"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gold-primary to-gold-dark rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {service.description}
                  </p>
                  <a 
                    href={`mailto:${service.contact}`} 
                    className="text-gold-primary text-sm font-semibold hover:underline"
                  >
                    {service.contact}
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Quick Contact Options */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="card-luxury rounded-3xl p-8"
      >
        <h3 className="text-2xl font-bold mb-6 font-playfair text-gold-primary">
          Contact Rapide
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-4 glass-premium rounded-xl">
            <div>
              <div className="font-semibold">Support Candidature</div>
              <div className="text-sm text-gray-400">Réponse sous 2h</div>
            </div>
            <button className="btn-secondary text-sm px-4 py-2">
              Appeler
            </button>
          </div>
          <div className="flex items-center justify-between p-4 glass-premium rounded-xl">
            <div>
              <div className="font-semibold">Visite Campus</div>
              <div className="text-sm text-gray-400">Sur rendez-vous</div>
            </div>
            <button className="btn-secondary text-sm px-4 py-2">
              Réserver
            </button>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gold-primary/10 rounded-xl">
          <div className="flex items-center text-gold-primary">
            <Clock className="w-5 h-5 mr-2" />
            <span className="font-semibold">Urgence :</span>
          </div>
          <div className="text-sm text-gray-300 mt-1">
            Pour les urgences administratives, contactez directement le campus concerné par téléphone.
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
