
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Shield, Cloud, Brain, Network, Wrench, Clock, Euro } from 'lucide-react'

export function ProgramsOverview() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const programs = [
    {
      category: 'Parcours Principal',
      duration: '18 mois - 3 semestres',
      price: '1 500 000',
      icon: Code,
      gradient: 'from-gold-primary to-gold-dark',
      description: 'Formation complète avec tronc commun puis spécialisation avancée',
      semesters: [
        'Semestre 1 : Tronc Commun (Algorithmes, Python/JS, Cloud)',
        'Semestre 2 : Spécialisation (Développement ou DevOps)',
        'Semestre 3 : Expertise avancée (IA/ML, Cybersécurité, Architecture)'
      ]
    },
    {
      category: 'Réseaux & Télécom',
      duration: '12-18 mois',
      price: '1 200 000',
      icon: Network,
      gradient: 'from-accent-green to-gold-primary',
      description: 'Technologies réseau avancées et certifications professionnelles',
      semesters: [
        'Technologies réseau avancées et protocoles',
        'Télécommunications et infrastructures 5G',
        'Certifications CCNA, CCNP et expertise terrain'
      ]
    },
    {
      category: 'Technicien Fibre Optique',
      duration: '4 mois intensif',
      price: '600 000',
      icon: Wrench,
      gradient: 'from-gold-primary to-accent-orange',
      description: 'Formation pratique intensive avec certification technique',
      semesters: [
        'Installation et déploiement de réseaux fibre',
        'Maintenance et dépannage des systèmes optiques',
        'Certification technique et formation terrain'
      ]
    }
  ]

  const specializations = [
    { icon: Cloud, name: 'DevOps Expert', tech: 'Docker • Kubernetes • CI/CD' },
    { icon: Code, name: 'Full-Stack Dev', tech: 'React • Node.js • TypeScript' },
    { icon: Shield, name: 'Cybersécurité', tech: 'SOC • Pentest • Compliance' },
    { icon: Brain, name: 'IA/ML Engineer', tech: 'Python • TensorFlow • PyTorch' },
    { icon: Cloud, name: 'Cloud Architect', tech: 'AWS • Azure • GCP' }
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
            <Code className="w-5 h-5 mr-2" />
            Nos Programmes
          </div>
          <h2 className="subheading-luxury mb-8 font-playfair">
            Parcours de Formation 
            <span className="gold-gradient">d'Exception</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Des programmes conçus avec l'industrie pour former les leaders technologiques de demain.
            Paiements échelonnés disponibles et bourses pour les top performers.
          </p>
        </motion.div>

        {/* Main Programs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <motion.div
                key={program.category}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="card-luxury rounded-3xl p-8 group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 font-playfair group-hover:text-gold-primary transition-colors">
                  {program.category}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {program.duration}
                  </div>
                  <div className="flex items-center text-gold-primary font-semibold">
                    <Euro className="w-4 h-4 mr-1" />
                    {program.price} FCFA
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {program.description}
                </p>
                
                <div className="space-y-2">
                  {program.semesters.map((semester, idx) => (
                    <div key={idx} className="text-sm text-gray-400">
                      • {semester}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-premium rounded-3xl p-8 text-center"
        >
          <h3 className="text-3xl font-bold mb-8 font-playfair">Spécialisations d'Excellence</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {specializations.map((spec, index) => {
              const Icon = spec.icon
              return (
                <motion.div
                  key={spec.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="card-luxury rounded-2xl p-6 text-center group hover:bg-gold-primary hover:text-charcoal transition-all duration-300"
                >
                  <Icon className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="font-bold mb-2">{spec.name}</div>
                  <div className="text-sm opacity-75">{spec.tech}</div>
                </motion.div>
              )
            })}
          </div>
          
          <div className="mt-12">
            <Link href="/catalogue" className="btn-premium">
              Voir le Catalogue Complet
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
