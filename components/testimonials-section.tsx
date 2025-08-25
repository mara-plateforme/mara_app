
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, MapPin, Briefcase } from 'lucide-react'
import Image from 'next/image'

export function TestimonialsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const testimonials = [
    {
      name: 'Aminata Diallo',
      role: 'Senior DevOps Engineer @ Google Cloud',
      location: 'Londres, UK',
      program: 'DevOps Expert 2022',
      content: 'MARA m\'a transformée d\'étudiante en ingénierie à leader tech. Les projets clients réels m\'ont préparée aux défis de Google Cloud. Aujourd\'hui, je manage une équipe de 12 ingénieurs.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Ibrahim Konaté',
      role: 'Founder & CTO @ FintechAfrica',
      location: 'Lagos, Nigeria',
      program: 'Full-Stack Dev 2021',
      content: 'Le réseau MARA est incomparable. J\'ai levé 2M$ pour ma startup fintech grâce aux contacts de l\'école. Les instructeurs sont des vétérans de Silicon Valley.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Sarah Chen',
      role: 'AI Research Scientist @ Microsoft',
      location: 'Montréal, Canada',
      program: 'IA/ML Engineer 2023',
      content: 'La spécialisation IA/ML de MARA est au niveau de Stanford. J\'ai publié 3 papers pendant ma formation et décroché mon poste chez Microsoft avant même de diplômer.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Omar Sidibé',
      role: 'Cybersecurity Lead @ Orange Cyberdefense',
      location: 'Paris, France',
      program: 'Cybersécurité 2022',
      content: 'MARA m\'a donné une expertise technique solide et une vision stratégique. Je gère maintenant la sécurité de 50M+ d\'utilisateurs en Afrique francophone.',
      rating: 5,
      image: '/api/placeholder/80/80'
    }
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
            <Quote className="w-5 h-5 mr-2" />
            Témoignages
          </div>
          <h2 className="subheading-luxury mb-8 font-playfair">
            Nos Alumni 
            <span className="gold-gradient">Témoignent</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Des carrières transformées, des entreprises créées, des innovations qui marquent l'industrie tech mondiale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="card-luxury rounded-3xl p-8 group hover:scale-105 transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-primary fill-current" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-8 h-8 text-gold-primary/30 mb-4" />
              <blockquote className="text-gray-300 leading-relaxed mb-8 text-lg italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-gold-primary to-gold-light">
                  <div className="absolute inset-2 rounded-full bg-charcoal flex items-center justify-center">
                    <span className="text-gold-primary font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-bold text-lg group-hover:text-gold-primary transition-colors">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center text-sm text-gray-400 mb-1">
                    <Briefcase className="w-4 h-4 mr-1" />
                    {testimonial.role}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {testimonial.location}
                    </div>
                    <div className="text-xs text-gold-primary font-semibold px-3 py-1 bg-gold-primary/10 rounded-full">
                      {testimonial.program}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 glass-premium rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 font-playfair">
            Transformations de Carrière
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="px-4">
              <div className="stat-premium text-5xl md:text-6xl mb-4 leading-none">300%</div>
              <div className="text-gray-300 text-sm md:text-base">Augmentation Salariale Moyenne</div>
            </div>
            <div className="px-4">
              <div className="stat-premium text-5xl md:text-6xl mb-4 leading-none">6</div>
              <div className="text-gray-300 text-sm md:text-base">Mois pour Décrocher un CDI</div>
            </div>
            <div className="px-4">
              <div className="stat-premium text-5xl md:text-6xl mb-4 leading-none">45+</div>
              <div className="text-gray-300 text-sm md:text-base">Startups Créées par nos Alumni</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
