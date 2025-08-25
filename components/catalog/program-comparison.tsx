
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, X, Clock, Euro, Users, Award } from 'lucide-react'

export function ProgramComparison() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const programs = [
    {
      name: 'Parcours Principal',
      duration: '18 mois',
      price: '1 500 000',
      students: '24',
      features: {
        'Tronc commun': true,
        'Spécialisation Dev': true,
        'Spécialisation DevOps': true,
        'IA/ML avancé': true,
        'Cybersécurité': true,
        'Architecture Cloud': true,
        'Projets clients': true,
        'Stage en entreprise': true,
        'Certification officielle': true,
        'Réseau alumni': true,
        'Support carrière 2 ans': true,
        'Accès campus 24/7': true
      },
      recommended: true
    },
    {
      name: 'Réseaux & Télécom',
      duration: '12-18 mois',
      price: '1 200 000',
      students: '20',
      features: {
        'Tronc commun': true,
        'Spécialisation Dev': false,
        'Spécialisation DevOps': false,
        'IA/ML avancé': false,
        'Cybersécurité': true,
        'Architecture Cloud': true,
        'Projets clients': true,
        'Stage en entreprise': true,
        'Certification officielle': true,
        'Réseau alumni': true,
        'Support carrière 2 ans': true,
        'Accès campus 24/7': true
      },
      recommended: false
    },
    {
      name: 'Fibre Optique',
      duration: '4 mois',
      price: '600 000',
      students: '16',
      features: {
        'Tronc commun': false,
        'Spécialisation Dev': false,
        'Spécialisation DevOps': false,
        'IA/ML avancé': false,
        'Cybersécurité': false,
        'Architecture Cloud': false,
        'Projets clients': true,
        'Stage en entreprise': true,
        'Certification officielle': true,
        'Réseau alumni': true,
        'Support carrière 2 ans': false,
        'Accès campus 24/7': false
      },
      recommended: false
    }
  ]

  const allFeatures = Object.keys(programs[0].features)

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
          <h2 className="subheading-luxury mb-8 font-playfair">
            Comparaison des 
            <span className="gold-gradient"> Programmes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Choisissez le programme qui correspond à vos objectifs professionnels et à votre parcours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-premium rounded-3xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-6 font-bold text-lg">Caractéristiques</th>
                  {programs.map((program) => (
                    <th key={program.name} className="text-center p-6 min-w-[200px]">
                      <div className="relative">
                        {program.recommended && (
                          <div className="absolute -top-2 -right-2 bg-gold-primary text-charcoal text-xs font-bold px-2 py-1 rounded-full">
                            POPULAIRE
                          </div>
                        )}
                        <div className="text-lg font-bold font-playfair mb-2">{program.name}</div>
                        <div className="text-sm text-gray-400 space-y-1">
                          <div className="flex items-center justify-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {program.duration}
                          </div>
                          <div className="flex items-center justify-center text-gold-primary font-semibold">
                            <Euro className="w-4 h-4 mr-1" />
                            {program.price} FCFA
                          </div>
                          <div className="flex items-center justify-center">
                            <Users className="w-4 h-4 mr-1" />
                            {program.students} étudiants max
                          </div>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feature, index) => (
                  <motion.tr
                    key={feature}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="p-4 font-medium">{feature}</td>
                    {programs.map((program) => (
                      <td key={`${program.name}-${feature}`} className="text-center p-4">
                        {program.features[feature as keyof typeof program.features] ? (
                          <CheckCircle className="w-6 h-6 text-accent-green mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-gray-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-white/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-400">
                * Tous les programmes incluent l'accès à notre plateforme d'apprentissage et le suivi personnalisé
              </div>
              <div className="flex gap-4">
                <button className="btn-secondary px-6 py-2 text-sm">
                  Télécharger la Brochure
                </button>
                <button className="btn-premium px-6 py-2 text-sm">
                  Demander un Conseil
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
