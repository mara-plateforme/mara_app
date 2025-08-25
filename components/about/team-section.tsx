
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Award, MapPin, Users } from 'lucide-react'

export function TeamSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const leadership = [
    {
      name: 'Dr. Aminata Touré',
      role: 'Directrice Générale & Co-fondatrice',
      location: 'Dakar, Sénégal',
      background: 'Ex-VP Engineering chez Google Cloud, 15 ans Silicon Valley. PhD Stanford.',
      expertise: ['Cloud Architecture', 'Team Leadership', 'EdTech Innovation'],
      quote: 'L\'Afrique a le potentiel de devenir le leader mondial de l\'innovation tech.'
    },
    {
      name: 'Omar Konaté',
      role: 'Directeur Technique & Co-fondateur',
      location: 'Montréal, Canada',
      background: 'Ex-Principal Engineer Meta, architect de systèmes à grande échelle.',
      expertise: ['Distributed Systems', 'AI/ML', 'Infrastructure'],
      quote: 'Nous formons les architectes du futur digital africain.'
    },
    {
      name: 'Sarah Chen',
      role: 'Directrice Académique',
      location: 'Dakar & Montréal',
      background: 'Ex-Staff Eng. Microsoft, experte en formation tech et curriculum design.',
      expertise: ['Curriculum Design', 'Pedagogical Innovation', 'Tech Education'],
      quote: 'L\'excellence s\'enseigne par la pratique et l\'inspiration.'
    },
    {
      name: 'Ibrahim Sall',
      role: 'Directeur des Partenariats',
      location: 'Dakar, Sénégal',
      background: 'Ex-Country Manager AWS Afrique de l\'Ouest, expert écosystème tech africain.',
      expertise: ['Business Development', 'Ecosystem Building', 'Corporate Partnerships'],
      quote: 'Connecter l\'excellence académique aux besoins réels de l\'industrie.'
    }
  ]

  const instructors = [
    { name: 'Marie Diop', speciality: 'Full-Stack Development', company: 'Ex-Shopify' },
    { name: 'Jean-Baptiste Koffi', speciality: 'DevOps & Cloud', company: 'Ex-Amazon' },
    { name: 'Aisha Mahmoud', speciality: 'Cybersécurité', company: 'Ex-IBM Security' },
    { name: 'Thomas Blanc', speciality: 'IA/ML Engineering', company: 'Ex-DeepMind' },
    { name: 'Fatou Kane', speciality: 'Product Management', company: 'Ex-Meta' },
    { name: 'David Okoye', speciality: 'Réseaux & Télécom', company: 'Ex-Cisco' },
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
            <Users className="w-5 h-5 mr-2" />
            Notre Équipe
          </div>
          <h2 className="subheading-luxury mb-8 font-playfair">
            Une Équipe de 
            <span className="gold-gradient"> Classe Mondiale</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Des vétérans de Silicon Valley, des experts reconnus et des leaders passionnés 
            par la transformation technologique de l'Afrique.
          </p>
        </motion.div>

        {/* Leadership Team */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {leadership.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="card-luxury rounded-3xl p-8"
            >
              <div className="flex items-start mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden mr-6 bg-gradient-to-br from-gold-primary to-gold-light flex-shrink-0">
                  <div className="absolute inset-2 rounded-full bg-charcoal flex items-center justify-center">
                    <span className="text-gold-primary font-bold text-xl">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-playfair mb-1">{leader.name}</h3>
                  <div className="text-gold-primary font-semibold mb-2">{leader.role}</div>
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {leader.location}
                  </div>
                  <p className="text-sm text-gray-300 mb-4">{leader.background}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {leader.expertise.map((skill) => (
                    <span key={skill} className="tag-premium rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <blockquote className="text-gray-300 italic border-l-2 border-gold-primary pl-4">
                "{leader.quote}"
              </blockquote>

              <div className="mt-4 flex justify-end">
                <button className="w-8 h-8 glass-premium rounded-full flex items-center justify-center hover:bg-gold-primary hover:text-charcoal transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-premium rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12 font-playfair text-gold-primary">
            Corps Professoral d'Excellence
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="card-luxury rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-primary to-gold-dark mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {instructor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-bold text-lg mb-1 group-hover:text-gold-primary transition-colors">
                  {instructor.name}
                </h4>
                <div className="text-gold-primary font-semibold text-sm mb-2">
                  {instructor.speciality}
                </div>
                <div className="text-xs text-gray-400">
                  {instructor.company}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              Plus de 50+ instructeurs experts interviennent selon les spécialisations et projets
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 px-4 py-2 rounded-full flex items-center">
                <Award className="w-4 h-4 mr-2" />
                15+ années d'expérience moyenne
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full">
                100% issus de l'industrie tech
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full">
                Mentorship personnalisé
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
