
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Rocket, Calendar, Users } from 'lucide-react'

export function CtaSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const nextSteps = [
    {
      step: '01',
      title: 'Candidature',
      description: 'Remplissez le formulaire et montrez-nous votre motivation'
    },
    {
      step: '02',
      title: 'Évaluation',
      description: 'Tests techniques et entretien avec notre équipe'
    },
    {
      step: '03',
      title: 'Admission',
      description: 'Rejoignez la prochaine promotion d\'élite'
    }
  ]

  return (
    <section className="section-luxury relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold-primary rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-gold-primary rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-gold-primary rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-gold-primary font-semibold mb-4 uppercase tracking-wider flex items-center justify-center">
            <Rocket className="w-5 h-5 mr-2" />
            Prêt à Transformer Votre Carrière ?
          </div>
          <h2 className="heading-luxury mb-8 font-playfair">
            Rejoignez l'Élite 
            <span className="gold-gradient block">Technologique</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            La prochaine promotion débute bientôt. Les places sont limitées et la sélection est rigoureuse. 
            Montrez-nous que vous avez l'ambition de transformer l'Afrique par la technologie.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {nextSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold-primary to-gold-dark rounded-full flex items-center justify-center mx-auto mb-6 text-charcoal font-bold text-xl">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-4 font-playfair">
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
              
              {index < nextSteps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-gold-primary/50" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-premium rounded-3xl p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 font-playfair">
              La Transformation Commence Maintenant
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center md:justify-start">
                <Calendar className="w-6 h-6 text-gold-primary mr-3" />
                <div>
                  <div className="font-semibold">Prochaine Rentrée</div>
                  <div className="text-sm text-gray-400">Janvier 2025</div>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Users className="w-6 h-6 text-gold-primary mr-3" />
                <div>
                  <div className="font-semibold">Places Disponibles</div>
                  <div className="text-sm text-gray-400">24 étudiants max</div>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Rocket className="w-6 h-6 text-gold-primary mr-3" />
                <div>
                  <div className="font-semibold">Campus</div>
                  <div className="text-sm text-gray-400">Dakar & Montréal</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/inscription" className="btn-premium text-lg px-8 py-4 group">
                Candidater Maintenant
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Poser une Question
              </Link>
            </div>

            <p className="text-sm text-gray-400 mt-8">
              Candidatures ouvertes jusqu'au 15 décembre 2024 • Processus sélectif • Entretiens individuels
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
