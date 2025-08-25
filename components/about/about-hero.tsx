
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Globe, Users, Target } from 'lucide-react'

export function AboutHero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const values = [
    { icon: Award, text: 'Excellence' },
    { icon: Globe, text: 'Innovation' },
    { icon: Users, text: 'Transformation' },
    { icon: Target, text: 'Impact' },
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
            <Award className="w-5 h-5 mr-2" />
            À Propos de MARA
          </div>
          <h1 className="heading-luxury mb-8 font-playfair">
            L'École qui Forge 
            <span className="gold-gradient block">Les Leaders Tech de Demain</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Fondée par des vétérans de Silicon Valley et de l'écosystème tech africain, 
            MARA Digital School transforme les talents en leaders technologiques capables de révolutionner l'Afrique.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center glass-premium rounded-full px-6 py-3"
                >
                  <Icon className="w-5 h-5 text-gold-primary mr-2" />
                  <span className="font-medium">{value.text}</span>
                </motion.div>
              )
            })}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center text-gray-400 italic"
          >
            "Transformer l'Afrique en superpuissance digitale, un étudiant à la fois."
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
