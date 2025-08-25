'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Sprout, Shield, MapPin } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const projects = [
    {
      icon: Building2,
      title: 'FinTech Panafricaine',
      subtitle: 'Infrastructure Bancaire • 50M+ Utilisateurs',
      description: 'Architecture cloud sécurisée pour une néobanque servant plus de 50 millions d\'utilisateurs à travers 15 pays africains. Système de paiements, KYC automatisé, et intelligence artificielle pour la détection de fraudes.',
      technologies: ['AWS', 'Microservices', 'AI/ML', 'Blockchain'],
      gradient: 'from-green-400 to-green-600',
      emoji: '🏦'
    },
    {
      icon: Sprout,
      title: 'AgriTech Intelligence',
      subtitle: 'IoT • Analytics • 200,000 Hectares',
      description: 'Réseau de capteurs IoT intelligent couvrant 200,000 hectares agricoles. Optimisation des rendements par IA, prédiction météorologique, et gestion automatisée des ressources hydriques.',
      technologies: ['IoT', '5G', 'Big Data', 'Edge Computing'],
      gradient: 'from-emerald-400 to-emerald-600',
      emoji: '🌾'
    },
    {
      icon: MapPin,
      title: 'Smart City Infrastructure',
      subtitle: 'Gouvernement • 5M+ Citoyens',
      description: 'Transformation digitale complète d\'une capitale africaine. Infrastructure fibre, services e-gouvernement, systèmes de transport intelligents, et plateforme citoyenne unifiée.',
      technologies: ['Fibre Optique', 'SDN', 'E-Government', 'Smart Grid'],
      gradient: 'from-blue-400 to-blue-600',
      emoji: '🏙️'
    },
    {
      icon: Shield,
      title: 'Cybersécurité Nationale',
      subtitle: 'SOC • CERT • Infrastructure Critique',
      description: 'Centre opérationnel de cybersécurité national. Protection des infrastructures critiques, détection d\'intrusions avancée, et réponse aux incidents de sécurité à l\'échelle continentale.',
      technologies: ['SOC', 'SIEM', 'Threat Intelligence', 'Zero Trust'],
      gradient: 'from-purple-400 to-purple-600',
      emoji: '🛡️'
    }
  ]

  const partners = [
    { name: 'AWS', subtitle: 'Cloud Partner' },
    { name: 'Microsoft', subtitle: 'Azure Partner' },
    { name: 'Google', subtitle: 'Cloud Partner' },
    { name: 'Cisco', subtitle: 'Network Partner' }
  ]

  return (
    <section id="projets" className="section-luxury">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-gold-primary font-semibold mb-4 uppercase tracking-wider flex items-center justify-center">
            <Building2 className="w-5 h-5 mr-2" />
            Projets d'Exception
          </div>
          <h2 className="subheading-luxury mb-8 font-playfair">
            Transformer l'Afrique 
            <span className="gold-gradient block">Par la Technologie</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Nos étudiants travaillent sur les projets les plus ambitieux du continent, 
            aux côtés des plus grandes organisations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="card-luxury rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300`}>
                      <span className="text-2xl">{project.emoji}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-playfair group-hover:text-gold-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gold-primary font-semibold text-sm">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="tag-premium rounded-full px-3 py-1 text-xs font-medium bg-white/5 border border-gold-primary/20 text-gold-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Partenaires prestigieux */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-premium rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-playfair mb-4">Partenaires d'Excellence</h3>
            <p className="text-gray-300">Collaborations avec les leaders technologiques mondiaux</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 0.6, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center hover:opacity-100 transition-opacity duration-300"
              >
                <div className="text-3xl font-bold text-white mb-1">{partner.name}</div>
                <div className="text-sm text-gray-500">{partner.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
