
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Shield, Cloud, Brain, Network, Wrench, Clock, Euro, Users, CheckCircle } from 'lucide-react'

export function ProgramsList() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const programs = [
    {
      id: 'parcours-principal',
      title: 'Parcours Principal - Développeur/DevOps Expert',
      duration: '18 mois (3 semestres)',
      price: '1 500 000',
      icon: Code,
      gradient: 'from-gold-primary to-gold-dark',
      description: 'Formation complète du tronc commun aux spécialisations avancées',
      highlights: ['Tronc commun intensif', 'Spécialisation développement ou DevOps', 'Expertise avancée (IA/ML, Cybersécurité, Architecture)'],
      curriculum: {
        semester1: {
          title: 'Semestre 1 - Tronc Commun (6 mois)',
          topics: ['Logique et algorithmes', 'Panorama TI et culture tech', 'Systèmes & Réseaux (Linux, Windows)', 'Développement de base (Git, Python/JavaScript, SQL)', 'Initiation cloud (Azure, AWS)']
        },
        semester2: {
          title: 'Semestre 2 - Spécialisation (6 mois)',
          topics: ['Parcours A: Développeur de produit/plateformes (TypeScript, Next.js, React, API REST)', 'Parcours B: DevOps Expert (Docker, Kubernetes, CI/CD, Terraform, Monitoring)']
        },
        semester3: {
          title: 'Semestre 3 - Spécialisations avancées (6 mois)',
          topics: ['DevSecOps', 'Intelligence Artificielle (IA)', 'Machine Learning (ML)', 'Cybersécurité', 'Architecture Cloud']
        }
      },
      outcomes: ['95% de taux d\'employabilité', 'Salaire moyen: 50k€', 'Positions dans les GAFAM', 'Leadership technique']
    },
    {
      id: 'reseaux-telecom',
      title: 'Réseaux et Télécommunications',
      duration: '12-18 mois',
      price: '1 200 000',
      icon: Network,
      gradient: 'from-accent-green to-gold-primary',
      description: 'Expertise réseau et télécommunications pour infrastructures critiques',
      highlights: ['Technologies réseau avancées', 'Certifications CCNA/CCNP', 'Infrastructure télécom 5G'],
      curriculum: {
        semester1: {
          title: 'Technologies Réseau Fondamentales',
          topics: ['Protocoles TCP/IP avancés', 'Routage et commutation', 'Sécurité réseau', 'Quality of Service (QoS)', 'MPLS et VPN']
        },
        semester2: {
          title: 'Télécommunications et 5G',
          topics: ['Réseaux mobiles 4G/5G', 'SDN et NFV', 'Infrastructure fibre optique', 'Cloud networking', 'IoT et Edge computing']
        },
        semester3: {
          title: 'Certifications et Projet',
          topics: ['Préparation CCNA/CCNP', 'Projet infrastructure réseau', 'Monitoring et troubleshooting', 'Automation réseau']
        }
      },
      outcomes: ['Certifications Cisco officielles', 'Expertise infrastructure 5G', 'Rôles d\'architecte réseau', 'Projets gouvernementaux']
    },
    {
      id: 'fibre-optique',
      title: 'Technicien Fibre Optique',
      duration: '4 mois intensif',
      price: '600 000',
      icon: Wrench,
      gradient: 'from-gold-primary to-accent-orange',
      description: 'Formation pratique intensive pour déploiement fibre optique',
      highlights: ['Formation terrain intensive', 'Certification technique', 'Employabilité immédiate'],
      curriculum: {
        month1: {
          title: 'Mois 1-2 - Fondamentaux Fibre Optique',
          topics: ['Théorie de la fibre optique', 'Types de câbles et connecteurs', 'Outils de mesure', 'Sécurité sur site', 'Lecture de plans']
        },
        month2: {
          title: 'Mois 3-4 - Installation et Maintenance',
          topics: ['Techniques d\'installation', 'Soudure et raccordement', 'Tests et validation', 'Maintenance préventive', 'Dépannage terrain']
        }
      },
      outcomes: ['Certification technique officielle', 'Emploi immédiat', 'Salaire attractif', 'Évolution vers superviseur']
    }
  ]

  return (
    <section className="section-luxury-short">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="subheading-luxury mb-8 font-playfair">
            Nos Programmes 
            <span className="gold-gradient">de Formation</span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="card-luxury rounded-3xl overflow-hidden"
              >
                <div className="p-12">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center mr-6`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold font-playfair mb-2">{program.title}</h3>
                          <div className="flex items-center space-x-6 text-gray-400">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {program.duration}
                            </div>
                            <div className="flex items-center text-gold-primary font-semibold">
                              <Euro className="w-4 h-4 mr-1" />
                              {program.price} FCFA
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-xl text-gray-300 leading-relaxed mb-6">
                        {program.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center glass-premium rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-accent-green mr-3 flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Curriculum */}
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-bold mb-6 text-gold-primary">Programme Détaillé</h4>
                      <div className="space-y-6">
                        {Object.entries(program.curriculum).map(([key, semester]: [string, any]) => (
                          <div key={key}>
                            <h5 className="font-bold mb-3">{semester.title}</h5>
                            <ul className="space-y-2">
                              {semester.topics.map((topic: string, topicIdx: number) => (
                                <li key={topicIdx} className="flex items-start text-sm text-gray-300">
                                  <div className="w-2 h-2 bg-gold-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-6 text-gold-primary">Débouchés</h4>
                      <div className="space-y-3">
                        {program.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-accent-green mr-3" />
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 p-6 glass-premium rounded-2xl">
                        <h5 className="font-bold mb-4">Financement</h5>
                        <div className="space-y-2 text-sm">
                          <div>✓ Paiement en 3 fois sans frais</div>
                          <div>✓ Bourses mérite (30% des places)</div>
                          <div>✓ Financement employeur possible</div>
                          <div>✓ Paiement différé post-emploi</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="text-sm text-gray-400">
                      Prochaine rentrée: <span className="text-gold-primary font-semibold">Janvier 2025</span>
                    </div>
                    <Link href="/inscription" className="btn-premium">
                      Candidater pour ce Programme
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
