
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MessageCircle, Phone, MapPin } from 'lucide-react'

export function ContactHero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const contactMethods = [
    { icon: MessageCircle, text: 'Chat en Direct' },
    { icon: Mail, text: 'Email Support' },
    { icon: Phone, text: 'Appel Téléphonique' },
    { icon: MapPin, text: 'Visite Campus' },
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
            <Mail className="w-5 h-5 mr-2" />
            Contactez-Nous
          </div>
          <h1 className="heading-luxury mb-8 font-playfair">
            Nous Sommes Là 
            <span className="gold-gradient block">Pour Vous Accompagner</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Une question sur nos programmes ? Besoin d'aide pour votre candidature ? 
            Notre équipe d'experts est disponible pour vous guider dans votre parcours vers l'excellence technologique.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center glass-premium rounded-full px-6 py-3 hover:bg-gold-primary hover:text-charcoal transition-colors cursor-pointer"
                >
                  <Icon className="w-5 h-5 mr-2" />
                  <span className="font-medium">{method.text}</span>
                </motion.div>
              )
            })}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center text-gray-400"
          >
            Réponse garantie sous 24 heures • Support multilingue • Conseils personnalisés
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
