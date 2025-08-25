
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Clock, Euro, Calendar, Users, BookOpen } from 'lucide-react'

export function RegistrationInfo() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const processSteps = [
    {
      title: 'Candidature en Ligne',
      description: 'Remplissez le formulaire détaillé et soumettez votre motivation',
      duration: '15 minutes'
    },
    {
      title: 'Évaluation Technique',
      description: 'Test de logique et entretien technique avec notre équipe',
      duration: '2 heures'
    },
    {
      title: 'Entretien Motivation',
      description: 'Discussion sur vos objectifs et votre vision technologique',
      duration: '45 minutes'
    },
    {
      title: 'Admission',
      description: 'Réponse sous 48h et inscription à la promotion',
      duration: '48 heures'
    }
  ]

  const admissionFacts = [
    { label: 'Taux d\'Admission', value: '15%', icon: Users },
    { label: 'Places par Promotion', value: '24', icon: BookOpen },
    { label: 'Durée du Processus', value: '1 semaine', icon: Clock },
    { label: 'Bourses Disponibles', value: '30%', icon: Euro },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Admission Facts */}
      <div className="glass-premium rounded-3xl p-8">
        <h3 className="text-2xl font-bold mb-6 font-playfair text-gold-primary">
          Informations Clés
        </h3>
        <div className="grid grid-cols-2 gap-6">
          {admissionFacts.map((fact, index) => {
            const Icon = fact.icon
            return (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <Icon className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{fact.value}</div>
                <div className="text-sm text-gray-400">{fact.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Process Steps */}
      <div className="card-luxury rounded-3xl p-8">
        <h3 className="text-2xl font-bold mb-6 font-playfair">
          Processus d'Admission
        </h3>
        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="flex items-start"
            >
              <div className="w-8 h-8 bg-gold-primary rounded-full flex items-center justify-center text-charcoal font-bold text-sm mr-4 mt-1 flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-lg">{step.title}</h4>
                  <span className="text-sm text-gold-primary font-medium">
                    {step.duration}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Requirements */}
      <div className="card-luxury rounded-3xl p-8">
        <h3 className="text-2xl font-bold mb-6 font-playfair">
          Prérequis
        </h3>
        <div className="space-y-3">
          {[
            'Baccalauréat ou équivalent',
            'Motivation forte pour la technologie',
            'Capacité de travail en équipe',
            'Niveau d\'anglais fonctionnel',
            'Disponibilité à temps plein'
          ].map((requirement, index) => (
            <motion.div
              key={requirement}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="flex items-center"
            >
              <CheckCircle className="w-5 h-5 text-accent-green mr-3 flex-shrink-0" />
              <span className="text-gray-300">{requirement}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Important Dates */}
      <div className="glass-premium rounded-3xl p-8">
        <h3 className="text-2xl font-bold mb-6 font-playfair text-gold-primary">
          Dates Importantes
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-gold-primary mr-3" />
              <span>Fin des candidatures</span>
            </div>
            <span className="font-semibold">15 Décembre 2024</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-gold-primary mr-3" />
              <span>Résultats d'admission</span>
            </div>
            <span className="font-semibold">20 Décembre 2024</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-gold-primary mr-3" />
              <span>Début des cours</span>
            </div>
            <span className="font-semibold">8 Janvier 2025</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
