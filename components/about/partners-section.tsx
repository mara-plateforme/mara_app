
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building, Handshake, Globe, Award } from 'lucide-react'

export function PartnersSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const techPartners = [
    { name: 'Google Cloud', type: 'Cloud Partner', description: 'Formation certifiante et crédits cloud' },
    { name: 'Microsoft Azure', type: 'Education Partner', description: 'Certifications Azure et ressources dev' },
    { name: 'Amazon Web Services', type: 'Training Partner', description: 'AWS Academy et certifications' },
    { name: 'Cisco', type: 'Network Partner', description: 'CCNA/CCNP et équipements réseau' },
    { name: 'Meta', type: 'Innovation Partner', description: 'Programmes React et développement mobile' },
    { name: 'Shopify', type: 'E-commerce Partner', description: 'Formation développement e-commerce' },
  ]

  const corporatePartners = [
    { name: 'Orange', region: 'Afrique de l\'Ouest', type: 'Recrutement & Projets' },
    { name: 'Sonatel', region: 'Sénégal', type: 'Infrastructure & Stages' },
    { name: 'Desjardins', region: 'Canada', type: 'FinTech & Innovation' },
    { name: 'CGI', region: 'International', type: 'Consulting & Emploi' },
    { name: 'Capgemini', region: 'Global', type: 'Projets Clients' },
    { name: 'IBM', region: 'Afrique', type: 'IA/ML & Cloud' },
  ]

  const governmentPartners = [
    { name: 'Ministère de l\'Enseignement Supérieur', country: 'Sénégal', focus: 'Reconnaissance officielle' },
    { name: 'DER/FJ', country: 'Sénégal', focus: 'Financement jeunesse' },
    { name: 'Gouvernement du Québec', country: 'Canada', focus: 'Immigration & Formation' },
    { name: 'Union Africaine', country: 'Continental', focus: 'Initiative numérique' },
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
          <div className="text-gold-primary font-semibold mb-4 uppercase tracking-wider flex items-center justify-center">
            <Handshake className="w-5 h-5 mr-2" />
            Nos Partenaires
          </div>
          <h2 className="subheading-luxury mb-8 font-playfair">
            Un Écosystème 
            <span className="gold-gradient"> d'Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            MARA Digital School collabore avec les leaders technologiques mondiaux, 
            les entreprises innovantes et les institutions publiques pour offrir une formation d'exception.
          </p>
        </motion.div>

        {/* Tech Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12 font-playfair text-gold-primary">
            Partenaires Technologiques
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="card-luxury rounded-2xl p-6 group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gold-primary to-gold-dark rounded-xl flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2 group-hover:text-gold-primary transition-colors">
                  {partner.name}
                </h4>
                <div className="text-gold-primary font-semibold text-sm mb-2">
                  {partner.type}
                </div>
                <p className="text-gray-300 text-sm">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Corporate Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12 font-playfair">
            Partenaires Entreprises
          </h3>
          <div className="glass-premium rounded-3xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {corporatePartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-primary to-gold-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-charcoal font-bold text-xl">
                      {partner.name.split(' ')[0].slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <h4 className="font-bold text-lg mb-1">{partner.name}</h4>
                  <div className="text-sm text-gray-400 mb-2">{partner.region}</div>
                  <div className="text-xs text-gold-primary font-semibold bg-gold-primary/10 px-3 py-1 rounded-full inline-block">
                    {partner.type}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Government Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12 font-playfair">
            Partenaires Institutionnels
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {governmentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="card-luxury rounded-2xl p-6 flex items-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent-green to-gold-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-1">{partner.name}</h4>
                  <div className="text-sm text-gray-400 mb-1">{partner.country}</div>
                  <div className="text-sm text-gold-primary">{partner.focus}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="glass-premium rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-8 font-playfair text-gold-primary">
            Avantages de nos Partenariats
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Award className="w-12 h-12 text-gold-primary mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Certifications Officielles</h4>
              <p className="text-sm text-gray-300">Reconnus par l'industrie mondiale</p>
            </div>
            <div>
              <Building className="w-12 h-12 text-gold-primary mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Projets Clients Réels</h4>
              <p className="text-sm text-gray-300">Expérience concrète en entreprise</p>
            </div>
            <div>
              <Handshake className="w-12 h-12 text-gold-primary mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Recrutement Direct</h4>
              <p className="text-sm text-gray-300">Accès privilégié aux opportunités</p>
            </div>
            <div>
              <Globe className="w-12 h-12 text-gold-primary mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Réseau International</h4>
              <p className="text-sm text-gray-300">Connexions mondiales</p>
            </div>
          </div>

          <p className="text-gray-300 max-w-3xl mx-auto">
            Ces partenariats stratégiques garantissent que nos étudiants reçoivent une formation alignée 
            sur les besoins réels du marché et accèdent aux meilleures opportunités de carrière.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
