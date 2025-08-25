
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { UserCheck, Award, Clock, Users } from 'lucide-react'

export function RegistrationHero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const highlights = [
    { icon: Users, text: 'Sélection Rigoureuse' },
    { icon: Award, text: 'Formation d\'Elite' },
    { icon: Clock, text: 'Processus Rapide' },
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
            <UserCheck className="w-5 h-5 mr-2" />
            Processus d'Admission
          </div>
          <h1 className="heading-luxury mb-8 font-playfair">
            Rejoignez l'Élite 
            <span className="gold-gradient">Technologique</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            MARA Digital School sélectionne les futurs leaders technologiques sur la motivation, 
            la vision et le potentiel. Montrez-nous votre ambition de transformer l'Afrique par la technologie.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
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
