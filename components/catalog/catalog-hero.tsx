
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Clock, Euro, Users } from 'lucide-react'

export function CatalogHero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const highlights = [
    { icon: BookOpen, text: '5 Programmes Spécialisés' },
    { icon: Clock, text: 'Formations 4 à 18 mois' },
    { icon: Users, text: 'Classes limitées à 24' },
    { icon: Euro, text: 'Paiements échelonnés' },
  ]

  return (
    <section className="section-luxury">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-gold-primary font-semibold mb-4 uppercase tracking-wider flex items-center justify-center">
            <BookOpen className="w-5 h-5 mr-2" />
            Catalogue des Programmes
          </div>
          <h1 className="heading-luxury mb-8 font-playfair">
            Formations d'Excellence 
            <span className="gold-gradient block">pour Leaders Tech</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Découvrez nos programmes de formation intensive conçus avec l'industrie. 
            Du développement full-stack à la cybersécurité, maîtrisez les technologies qui transforment l'Afrique.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={highlight.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center glass-premium rounded-full px-6 py-3"
                >
                  <Icon className="w-5 h-5 text-gold-primary mr-2" />
                  <span className="font-medium">{highlight.text}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
