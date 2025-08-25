
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Users, Heart, Target } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export function VisionSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const values = [
    {
      icon: CheckCircle,
      title: 'Excellence Académique',
      description: 'Curriculum conçu avec les plus grandes entreprises tech mondiales. Standards internationaux adaptés aux défis africains et canadiens.',
      highlight: 'Certification Mondiale',
      gradient: 'from-gold-primary to-gold-light'
    },
    {
      icon: Target,
      title: 'Projets d\'Impact',
      description: 'Formation sur projets clients réels : infrastructures nationales, plateformes bancaires, systèmes gouvernementaux.',
      highlight: 'Impact Continental',
      gradient: 'from-gold-primary to-gold-dark'
    },
    {
      icon: Heart,
      title: 'Réseau d\'Excellence',
      description: 'Communauté exclusive d\'alumni occupant des positions clés dans les plus grandes organisations tech mondiales.',
      highlight: 'Réseau Mondial',
      gradient: 'from-accent-green to-gold-primary'
    }
  ]

  return (
    <section id="vision" className="section-luxury">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-gold-primary font-semibold mb-4 uppercase tracking-wider flex items-center justify-center">
            <Users className="w-5 h-5 mr-2" />
            Notre Mission
          </div>
          <h2 className="subheading-luxury mb-8 font-playfair">
            Transformer l'Afrique en 
            <span className="gold-gradient block">Superpuissance Digitale</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            MARA Digital School n'est pas une école traditionnelle. C'est un laboratoire d'excellence où se forgent 
            les leaders technologiques qui transformeront l'écosystème digital africain et mondial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="card-luxury rounded-3xl p-8 group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-playfair group-hover:text-gold-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {value.description}
                </p>
                <div className="text-gold-primary font-semibold">
                  {value.highlight}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
