
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Calendar, Users, Trophy, Lightbulb, Rocket } from 'lucide-react'

export function SchoolStory() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const milestones = [
    {
      year: '2019',
      title: 'Vision & Fondation',
      description: 'Création de MARA par une équipe d\'anciens de Google, Microsoft et Meta, avec la mission de démocratiser l\'accès à l\'excellence technologique en Afrique.',
      icon: Lightbulb
    },
    {
      year: '2020',
      title: 'Premier Campus Dakar',
      description: 'Ouverture du campus principal à Dakar avec 24 étudiants pionniers. Premiers partenariats avec les géants tech et projets clients d\'envergure.',
      icon: MapPin
    },
    {
      year: '2022',
      title: 'Expansion Internationale',
      description: 'Lancement du campus de Montréal et développement du programme de spécialisations avancées. 200+ diplômés déjà en poste.',
      icon: Rocket
    },
    {
      year: '2024',
      title: 'Leadership Reconnu',
      description: 'MARA devient la référence formation IT en Afrique francophone. 500+ alumni, 95% d\'employabilité, partenariats avec 15 pays.',
      icon: Trophy
    }
  ]

  const impact = [
    { metric: '500+', label: 'Alumni en Poste', description: 'Dans 50+ pays' },
    { metric: '15', label: 'Pays Partenaires', description: 'Afrique & Canada' },
    { metric: '100+', label: 'Projets Clients', description: 'Infrastructure critique' },
    { metric: '45', label: 'Startups Créées', description: 'Par nos diplômés' },
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
          <h2 className="subheading-luxury mb-8 font-playfair">
            Notre Histoire
            <span className="gold-gradient block">& Notre Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            De l'ambition de démocratiser l'excellence technologique à la réalité d'une école reconnue 
            internationalement, découvrez le parcours de MARA Digital School.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-primary via-gold-primary to-transparent"></div>
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card-luxury rounded-3xl p-8">
                      <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className={`w-12 h-12 bg-gradient-to-br from-gold-primary to-gold-dark rounded-full flex items-center justify-center ${index % 2 === 0 ? 'mr-4' : 'ml-4 order-2'}`}>
                          <Icon className="w-6 h-6 text-charcoal" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gold-primary">{milestone.year}</div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 font-playfair">{milestone.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gold-primary rounded-full border-4 border-charcoal"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Impact Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-premium rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12 font-playfair">
            Notre Impact Aujourd'hui
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {impact.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center px-2"
              >
                <div className="stat-premium text-3xl md:text-4xl mb-2 break-words">{item.metric}</div>
                <div className="font-bold text-base md:text-lg mb-1 break-words">{item.label}</div>
                <div className="text-xs md:text-sm text-gray-400 break-words">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 card-luxury rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-6 font-playfair text-gold-primary">Notre Mission</h3>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
            MARA Digital School forme les leaders technologiques qui transformeront l'Afrique en superpuissance digitale. 
            Nous croyons que l'excellence technique, combinée à une vision panafricaine et une éthique forte, 
            peut créer des innovations qui bénéficieront à l'humanité entière.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-bold text-gold-primary mb-2">Excellence</h4>
              <p className="text-sm text-gray-400">Standards internationaux adaptés au contexte africain</p>
            </div>
            <div>
              <h4 className="font-bold text-gold-primary mb-2">Innovation</h4>
              <p className="text-sm text-gray-400">Solutions créatives aux défis du continent</p>
            </div>
            <div>
              <h4 className="font-bold text-gold-primary mb-2">Impact</h4>
              <p className="text-sm text-gray-400">Transformation technologique durable</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
