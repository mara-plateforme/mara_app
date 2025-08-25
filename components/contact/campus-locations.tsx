
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Navigation, Clock, Car, Plane, Train } from 'lucide-react'

export function CampusLocations() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const campusInfo = [
    {
      name: 'Campus Dakar',
      address: 'Almadies, Route des Almadies, Dakar 12500, Sénégal',
      coordinates: { lat: 14.7379, lng: -17.5099 },
      transportation: [
        { method: 'Taxi', description: 'Depuis l\'aéroport LSS (45 min)', icon: Car },
        { method: 'Bus Rapide', description: 'Ligne Almadies (20 min du centre)', icon: Navigation },
        { method: 'Voiture', description: 'Parking gratuit sur place', icon: Car },
      ],
      landmarks: [
        'À 5 min du centre commercial Sea Plaza',
        'À 10 min de la plage des Almadies', 
        'À 15 min du centre-ville de Dakar',
        'À 20 min de l\'Université Cheikh Anta Diop'
      ],
      schedule: 'Lun-Ven: 8h00-18h00, Sam: 9h00-13h00'
    },
    {
      name: 'Campus Montréal',
      address: '4567 Boulevard Saint-Laurent, Montréal, QC H2T 1R2, Canada',
      coordinates: { lat: 45.5226, lng: -73.5906 },
      transportation: [
        { method: 'Métro', description: 'Station Mont-Royal (5 min à pied)', icon: Train },
        { method: 'Bus STM', description: 'Plusieurs lignes desservent le secteur', icon: Navigation },
        { method: 'Aéroport', description: 'Depuis YUL (45 min en transport)', icon: Plane },
        { method: 'Vélo', description: 'Stations BIXI à proximité', icon: Navigation },
      ],
      landmarks: [
        'Dans le Plateau Mont-Royal dynamique',
        'À 2 stations de métro du centre-ville',
        'À 5 min à pied du Parc du Mont-Royal',
        'Quartier tech et startup florissant'
      ],
      schedule: 'Lun-Ven: 9h00-17h00, Sam: 10h00-14h00'
    }
  ]

  return (
    <section className="section-luxury-short">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-gold-primary font-semibold mb-4 uppercase tracking-wider flex items-center justify-center">
            <MapPin className="w-5 h-5 mr-2" />
            Localisation
          </div>
          <h2 className="subheading-luxury mb-8 font-playfair">
            Nos Campus 
            <span className="gold-gradient">Facilement Accessibles</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Situés au cœur des écosystèmes tech de Dakar et Montréal, nos campus sont conçus 
            pour être facilement accessibles et intégrés dans la vie urbaine dynamique.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {campusInfo.map((campus, index) => (
            <motion.div
              key={campus.name}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="card-luxury rounded-3xl overflow-hidden"
            >
              {/* Map Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-gold-primary to-gold-dark">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 p-6 h-full flex items-end">
                  <div>
                    <h3 className="text-2xl font-bold font-playfair text-white mb-2">
                      {campus.name}
                    </h3>
                    <div className="flex items-center text-white/90">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{campus.address}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-white hover:bg-white/30 transition-colors">
                    <Navigation className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-8">
                {/* Transportation */}
                <div className="mb-8">
                  <h4 className="font-bold text-lg mb-4 text-gold-primary">Comment s'y rendre</h4>
                  <div className="space-y-3">
                    {campus.transportation.map((transport, idx) => {
                      const Icon = transport.icon
                      return (
                        <div key={idx} className="flex items-center">
                          <Icon className="w-5 h-5 text-gold-primary mr-3 flex-shrink-0" />
                          <div>
                            <span className="font-semibold mr-2">{transport.method}:</span>
                            <span className="text-gray-300 text-sm">{transport.description}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Landmarks */}
                <div className="mb-8">
                  <h4 className="font-bold text-lg mb-4 text-gold-primary">Points de repère</h4>
                  <div className="space-y-2">
                    {campus.landmarks.map((landmark, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent-green rounded-full mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{landmark}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Schedule */}
                <div className="glass-premium rounded-xl p-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-gold-primary mr-3" />
                    <div>
                      <div className="font-semibold">Horaires d'ouverture</div>
                      <div className="text-sm text-gray-300">{campus.schedule}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visit Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass-premium rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-8 font-playfair text-gold-primary">
            Planifiez Votre Visite
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card-luxury rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-4">Visite Guidée</h4>
              <ul className="text-sm text-gray-300 space-y-2 text-left">
                <li>• Tour complet des installations</li>
                <li>• Rencontre avec l'équipe pédagogique</li>
                <li>• Session d'information sur les programmes</li>
                <li>• Q&A avec des étudiants actuels</li>
              </ul>
              <div className="mt-4 text-gold-primary font-semibold">
                Durée: 1h30 • Gratuit • Sur rendez-vous
              </div>
            </div>
            
            <div className="card-luxury rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-4">Journée Portes Ouvertes</h4>
              <ul className="text-sm text-gray-300 space-y-2 text-left">
                <li>• Présentation des programmes</li>
                <li>• Démonstrations techniques</li>
                <li>• Témoignages d'alumni</li>
                <li>• Ateliers pratiques</li>
              </ul>
              <div className="mt-4 text-gold-primary font-semibold">
                Prochaine date: 15 décembre 2024
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-premium text-lg px-8 py-4">
              Réserver une Visite
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              S'inscrire aux Portes Ouvertes
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            Visites possibles en semaine et weekend • Accompagnement personnalisé • Transport depuis l'aéroport possible
          </p>
        </motion.div>
      </div>
    </section>
  )
}
