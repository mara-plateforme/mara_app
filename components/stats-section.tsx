
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Award, MapPin, TrendingUp, Clock, Star } from 'lucide-react'
import { AnimatedCounter } from './animated-counter'

export function StatsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const stats = [
    {
      icon: TrendingUp,
      value: 95,
      suffix: '%',
      label: 'Taux d\'Employabilité',
      description: 'Nos diplômés trouvent un emploi dans les 3 mois',
      color: 'text-accent-green'
    },
    {
      icon: Award,
      value: 50000,
      suffix: '€',
      label: 'Salaire Moyen',
      description: 'Rémunération moyenne de nos alumni',
      color: 'text-gold-primary'
    },
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Alumni Actifs',
      description: 'Réseau professionnel international',
      color: 'text-gold-primary'
    },
    {
      icon: MapPin,
      value: 15,
      suffix: '',
      label: 'Pays Partenaires',
      description: 'Présence sur 3 continents',
      color: 'text-accent-purple'
    },
    {
      icon: Clock,
      value: 80,
      suffix: '%',
      label: 'Projets Clients',
      description: 'Formation basée sur des cas réels',
      color: 'text-accent-orange'
    },
    {
      icon: Star,
      value: 98,
      suffix: '%',
      label: 'Satisfaction',
      description: 'Taux de satisfaction étudiants',
      color: 'text-accent-green'
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
            <TrendingUp className="w-5 h-5 mr-2" />
            Nos Résultats
          </div>
          <h2 className="subheading-luxury mb-8 font-playfair">
            L'Excellence
            <span className="gold-gradient"> en Chiffres</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Des indicateurs qui témoignent de notre engagement envers l'excellence et la réussite de nos étudiants.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="glass-premium rounded-3xl p-8 text-center group hover:scale-105 transition-all duration-300"
              >
                <Icon className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                
                <div className="stat-premium mb-2">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                    duration={2500}
                    delay={500 + index * 100}
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-gold-primary transition-colors">
                  {stat.label}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Additional highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 card-luxury rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-6 font-playfair">
            Rejoignez une Communauté d'Excellence
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Nos diplômés travaillent chez Google, Microsoft, Amazon, et dirigent des startups innovantes 
            à travers l'Afrique et le monde. Votre prochain défi vous attend.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="bg-white/10 px-4 py-2 rounded-full">Google</div>
            <div className="bg-white/10 px-4 py-2 rounded-full">Microsoft</div>
            <div className="bg-white/10 px-4 py-2 rounded-full">Amazon</div>
            <div className="bg-white/10 px-4 py-2 rounded-full">Meta</div>
            <div className="bg-white/10 px-4 py-2 rounded-full">Shopify</div>
            <div className="bg-white/10 px-4 py-2 rounded-full">IBM</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
