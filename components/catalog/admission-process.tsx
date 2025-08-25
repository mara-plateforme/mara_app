
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, Users, Brain, CheckCircle, Calendar, ArrowRight } from 'lucide-react'

export function AdmissionProcess() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const steps = [
    {
      icon: FileText,
      title: 'Candidature en Ligne',
      description: 'Remplissez notre formulaire détaillé avec votre motivation et vos projets',
      duration: '15 min',
      requirements: ['CV à jour', 'Lettre de motivation', 'Projets personnels (optionnel)']
    },
    {
      icon: Brain,
      title: 'Test Technique',
      description: 'Évaluation de votre logique, créativité et aptitudes techniques de base',
      duration: '90 min',
      requirements: ['Test de logique', 'QCM culture tech', 'Exercice pratique simple']
    },
    {
      icon: Users,
      title: 'Entretien Individuel',
      description: 'Discussion approfondie sur vos objectifs et votre vision technologique',
      duration: '45 min',
      requirements: ['Présentation personnelle', 'Discussion projets', 'Questions motivation']
    },
    {
      icon: CheckCircle,
      title: 'Admission',
      description: 'Réponse définitive et inscription à la prochaine promotion d\'élite',
      duration: '48h',
      requirements: ['Notification par email', 'Inscription en ligne', 'Paiement acompte']
    }
  ]

  const selectionCriteria = [
    { criterion: 'Motivation et passion tech', weight: '30%' },
    { criterion: 'Aptitudes logiques et techniques', weight: '25%' },
    { criterion: 'Capacités de communication', weight: '20%' },
    { criterion: 'Vision et projets personnels', weight: '15%' },
    { criterion: 'Fit culturel MARA', weight: '10%' }
  ]

  return (
    <section className="section-luxury">
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
            Processus d'Admission
          </div>
          <h2 className="subheading-luxury mb-8 font-playfair">
            Comment Rejoindre 
            <span className="gold-gradient"> MARA Digital School</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Un processus sélectif en 4 étapes pour identifier les futurs leaders technologiques. 
            Nous cherchons la motivation et le potentiel, pas seulement les diplômes.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="card-luxury rounded-3xl p-8 relative"
              >
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-primary to-gold-dark rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <Icon className="w-8 h-8 text-charcoal" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold font-playfair">Étape {index + 1}: {step.title}</h3>
                      <span className="text-sm text-gold-primary font-semibold bg-gold-primary/10 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {step.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent-green rounded-full mr-3 flex-shrink-0" />
                      <span className="text-gray-400">{req}</span>
                    </div>
                  ))}
                </div>

                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 text-gold-primary/30" />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Selection Criteria */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          <div className="glass-premium rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 font-playfair text-gold-primary">
              Critères de Sélection
            </h3>
            <div className="space-y-4">
              {selectionCriteria.map((item, index) => (
                <div key={item.criterion} className="flex items-center justify-between">
                  <span className="text-gray-300">{item.criterion}</span>
                  <span className="text-gold-primary font-semibold">{item.weight}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gold-primary/10 rounded-xl">
              <div className="text-sm text-gold-primary">
                💡 Conseil: Montrez votre passion pour la technologie et votre vision de transformation de l'Afrique !
              </div>
            </div>
          </div>

          <div className="card-luxury rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 font-playfair">
              Statistiques d'Admission
            </h3>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-primary mb-1">15%</div>
                <div className="text-sm text-gray-400">Taux d'admission</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-primary mb-1">1 sem.</div>
                <div className="text-sm text-gray-400">Processus complet</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-primary mb-1">24</div>
                <div className="text-sm text-gray-400">Places/promotion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-primary mb-1">30%</div>
                <div className="text-sm text-gray-400">Bourses mérite</div>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-gold-primary mr-2" />
                <span>Candidatures: Ouvertes jusqu'au 15 déc 2024</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-gold-primary mr-2" />
                <span>Résultats: 20 décembre 2024</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-gold-primary mr-2" />
                <span>Rentrée: 8 janvier 2025</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center glass-premium rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold mb-6 font-playfair">
            Prêt à Transformer Votre Avenir ?
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Les candidatures pour la promotion de janvier 2025 sont ouvertes. 
            Ne manquez pas cette opportunité unique de rejoindre l'élite technologique africaine.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/inscription" className="btn-premium text-lg px-8 py-4">
              Candidater Maintenant
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Poser une Question
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Processus 100% gratuit • Réponse sous 48h • Support candidat personnalisé
          </p>
        </motion.div>
      </div>
    </section>
  )
}
