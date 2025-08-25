'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Clock, Users, ArrowRight, Phone, Mail } from 'lucide-react'

export function OpenHouseSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const events = [
    {
      date: '15 Mars 2025',
      time: '14h00 - 18h00',
      location: 'Campus Dakar',
      address: 'Plateau, Dakar, Sénégal',
      activities: [
        'Visite des laboratoires tech',
        'Rencontre avec les instructeurs',
        'Présentation des programmes',
        'Session Q&A avec les alumni'
      ],
      contact: {
        phone: '+221 77 123 45 67',
        email: 'dakar@mara-digital.com'
      }
    },
    {
      date: '22 Mars 2025', 
      time: '10h00 - 16h00',
      location: 'Campus Montréal',
      address: 'Plateau Mont-Royal, QC, Canada',
      activities: [
        'Démonstrations projets étudiants',
        'Ateliers pratiques coding',
        'Présentation des partenariats',
        'Informations immigration'
      ],
      contact: {
        phone: '+1 514 123 4567',
        email: 'montreal@mara-digital.com'
      }
    }
  ]

  return (
    <section id="journees-portes-ouvertes" className="section-luxury relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold-primary rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-gold-primary rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-gold-primary font-semibold mb-4 uppercase tracking-wider flex items-center justify-center">
            <Calendar className="w-5 h-5 mr-2" />
            Événement Spécial
          </div>
          <h2 className="heading-luxury mb-8 font-playfair">
            Journées Portes 
            <span className="gold-gradient block">Ouvertes MARA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Découvrez nos campus d'exception, rencontrez nos équipes et plongez dans l'univers 
            de la formation tech de demain. Une occasion unique de vivre l'expérience MARA.
          </p>
          
          <div className="inline-flex items-center bg-gold-primary/10 border border-gold-primary/20 rounded-full px-6 py-3">
            <Users className="w-5 h-5 text-gold-primary mr-2" />
            <span className="text-gold-primary font-semibold">Inscription gratuite - Places limitées</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {events.map((event, index) => (
            <motion.div
              key={event.location}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="card-luxury rounded-3xl p-8 group hover:scale-105 transition-all duration-300"
            >
              {/* Header */}
              <div className="relative h-32 bg-gradient-to-br from-gold-primary to-gold-dark rounded-2xl mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 p-6 h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold font-playfair text-white mb-1">
                      {event.location}
                    </h3>
                    <div className="flex items-center justify-center text-white/90 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {event.address}
                    </div>
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="flex items-center justify-between mb-6 p-4 bg-gold-primary/5 rounded-xl">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gold-primary mr-3" />
                  <div>
                    <div className="font-bold text-lg">{event.date}</div>
                    <div className="text-gray-400 text-sm">Date de l'événement</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gold-primary mr-3" />
                  <div className="text-right">
                    <div className="font-bold text-lg">{event.time}</div>
                    <div className="text-gray-400 text-sm">Horaires</div>
                  </div>
                </div>
              </div>

              {/* Activities */}
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-4 text-gold-primary">Au Programme :</h4>
                <ul className="space-y-2">
                  {event.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-center text-gray-300">
                      <ArrowRight className="w-4 h-4 text-gold-primary mr-3 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="border-t border-gray-700 pt-6">
                <h4 className="font-bold mb-3">Contact & Réservation :</h4>
                <div className="space-y-2">
                  <a 
                    href={`tel:${event.contact.phone}`}
                    className="flex items-center text-gray-300 hover:text-gold-primary transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-3" />
                    {event.contact.phone}
                  </a>
                  <a 
                    href={`mailto:${event.contact.email}?subject=Inscription Journée Portes Ouvertes - ${event.location}`}
                    className="flex items-center text-gray-300 hover:text-gold-primary transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-3" />
                    {event.contact.email}
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <a 
                href="/inscription"
                className="w-full mt-6 bg-gradient-to-r from-gold-primary to-gold-light text-charcoal font-bold py-3 px-6 rounded-xl hover:from-gold-light hover:to-gold-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gold-primary/25 inline-block text-center"
              >
                Réserver ma place
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="card-luxury rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-playfair">
              Vous ne pouvez pas venir ?
            </h3>
            <p className="text-gray-300 mb-6">
              Programmez un entretien individuel ou une visite privée de nos campus. 
              Nos conseillers sont disponibles pour répondre à toutes vos questions.
            </p>
            <a 
              href="/contact"
              className="bg-charcoal-light text-gold-primary font-semibold py-3 px-8 rounded-xl hover:bg-charcoal transition-colors inline-block"
            >
              Programmer un entretien
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
