
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Award, Globe, TrendingUp } from 'lucide-react'
import { AnimatedCounter } from './animated-counter'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { icon: Users, value: 95, suffix: '%', label: 'Employabilité' },
    { icon: TrendingUp, value: 50, suffix: 'k€', label: 'Salaire Moyen' },
    { icon: Award, value: 100, suffix: '+', label: 'Projets Clients' },
    { icon: Globe, value: 15, suffix: '', label: 'Pays Partenaires' },
  ]

  return (
    <section id="hero" className="section-luxury relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gold-primary font-semibold mb-6 uppercase tracking-wider flex items-center"
            >
              <Award className="w-5 h-5 mr-2" />
              Formation d'Excellence
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="heading-luxury mb-8"
            >
              L'Élite Technologique 
              <span className="gold-gradient block">Africaine</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl"
            >
              MARA forge les architectes du futur digital africain. Une formation d'exception 
              basée sur des projets clients réels de transformation technologique à l'échelle continentale.
              Campus d'excellence à Dakar et Montréal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-6"
            >
              <Link href="/inscription" className="btn-premium group">
                Rejoindre l'Élite
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/catalogue" className="btn-secondary">
                Découvrir nos Programmes
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="floating-luxury"
          >
            <div className="glass-premium rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent" />
              
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                      className="text-center"
                    >
                      <Icon className="w-8 h-8 text-gold-primary mx-auto mb-3" />
                      <div className="stat-premium mb-2">
                        <AnimatedCounter 
                          value={stat.value} 
                          suffix={stat.suffix}
                          duration={2000}
                          delay={1500 + index * 100}
                        />
                      </div>
                      <div className="text-gray-400 font-medium text-sm">
                        {stat.label}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
