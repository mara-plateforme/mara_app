
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Wifi, Coffee, Users, Clock, Car } from 'lucide-react'

export function CampusSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const campuses = [
    {
      city: 'Dakar',
      country: 'Sénégal',
      address: 'Almadies, Dakar',
      description: 'Notre campus principal au cœur de l\'écosystème tech sénégalais',
      features: [
        'Laboratoires techniques dernière génération',
        'Espaces de coworking et collaboration',
        'Auditorium pour conférences tech',
        'Résidence étudiante partenaire',
        'Incubateur de startups intégré',
        'Connexion fibre dédiée 1Gb/s'
      ],
      amenities: [
        { icon: Wifi, label: 'WiFi Haute Vitesse' },
        { icon: Coffee, label: 'Café Tech 24/7' },
        { icon: Users, label: 'Salles de Projet' },
        { icon: Car, label: 'Parking Sécurisé' },
      ],
      stats: {
        size: '2,500 m²',
        capacity: '200 étudiants',
        labs: '8 laboratoires',
        founded: '2020'
      }
    },
    {
      city: 'Montréal',
      country: 'Canada',
      address: 'Plateau Mont-Royal, Montréal QC',
      description: 'Notre campus international dans l\'écosystème tech nord-américain',
      features: [
        'Studios de développement équipés',
        'Salles de classe interactives',
        'Espace détente et networking',
        'Accès facilité au quartier tech',
        'Partenariats universités locales',
        'Programme d\'immigration étudiant'
      ],
      amenities: [
        { icon: Wifi, label: 'Infrastructure Cloud' },
        { icon: Coffee, label: 'Kitchen Collaborative' },
        { icon: Users, label: 'Espaces Modulaires' },
        { icon: Clock, label: 'Accès 24/7' },
      ],
      stats: {
        size: '1,800 m²',
        capacity: '120 étudiants',
        labs: '6 laboratoires',
        founded: '2022'
      }
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
          className="text-center mb-20"
        >
          <div className="text-gold-primary font-semibold mb-4 uppercase tracking-wider flex items-center justify-center">
            <MapPin className="w-5 h-5 mr-2" />
            Nos Campus
          </div>
          <h2 className="subheading-luxury mb-8 font-playfair">
            Des Environnements 
            <span className="gold-gradient"> d'Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Deux campus d'exception conçus pour l'apprentissage collaboratif et l'innovation technologique. 
            Des espaces modernes qui favorisent la créativité et l'épanouissement professionnel.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {campuses.map((campus, index) => (
            <motion.div
              key={campus.city}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="card-luxury rounded-3xl overflow-hidden"
            >
              {/* Header */}
              <div className="relative h-48 bg-gradient-to-br from-gold-primary to-gold-dark">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 p-8 h-full flex items-end">
                  <div>
                    <h3 className="text-3xl font-bold font-playfair text-white mb-2">
                      Campus {campus.city}
                    </h3>
                    <div className="flex items-center text-white/90">
                      <MapPin className="w-5 h-5 mr-2" />
                      {campus.address}, {campus.country}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  {campus.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(campus.stats).map(([key, value]) => (
                    <div key={key} className="text-center p-3 glass-premium rounded-xl">
                      <div className="text-gold-primary font-bold">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-4 text-gold-primary">Équipements</h4>
                  <div className="space-y-2">
                    {campus.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent-green rounded-full mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h4 className="font-bold text-lg mb-4 text-gold-primary">Services</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {campus.amenities.map((amenity, idx) => {
                      const Icon = amenity.icon
                      return (
                        <div key={idx} className="flex items-center text-sm">
                          <Icon className="w-4 h-4 text-gold-primary mr-2" />
                          <span className="text-gray-300">{amenity.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Campus Life */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass-premium rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-8 font-playfair text-gold-primary">
            Vie de Campus Dynamique
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Événements Tech</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Conférences mensuelles</li>
                <li>• Hackathons inter-campus</li>
                <li>• Meetups industrie</li>
                <li>• Démos projets étudiants</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Communauté</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Clubs spécialisés</li>
                <li>• Mentorat alumni</li>
                <li>• Projets collaboratifs</li>
                <li>• Réseau international</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Accompagnement visa</li>
                <li>• Aide au logement</li>
                <li>• Services de santé</li>
                <li>• Support psychologique</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-400">
            Nos campus sont conçus comme des écosystèmes complets où l'apprentissage, 
            l'innovation et l'épanouissement personnel se conjuguent pour former les leaders de demain.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
