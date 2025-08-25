'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Users, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export function OpenHouseBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 100) // Cache après 100px de scroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible || isScrolled) return null

  const events = [
    {
      date: '15 Mars 2025',
      time: '14h00 - 18h00',
      location: 'Campus Dakar',
      address: 'Plateau, Dakar, Sénégal'
    },
    {
      date: '22 Mars 2025', 
      time: '10h00 - 16h00',
      location: 'Campus Montréal',
      address: 'Plateau Mont-Royal, QC'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-gold-primary via-gold-light to-gold-primary shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 text-gold-primary" />
            </div>
            <div>
              <h3 className="font-bold text-charcoal text-lg">🎉 Journées Portes Ouvertes MARA</h3>
              <p className="text-charcoal/80 text-sm">Découvrez nos campus et rencontrez nos équipes</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {events.map((event, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center text-charcoal font-semibold mb-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  {event.location}
                </div>
                <div className="text-charcoal/80 text-sm">{event.date}</div>
                <div className="flex items-center text-charcoal/80 text-sm">
                  <Clock className="w-3 h-3 mr-1" />
                  {event.time}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="#journees-portes-ouvertes"
              className="bg-charcoal text-gold-primary px-6 py-2 rounded-full font-semibold hover:bg-charcoal-light transition-colors inline-block"
              onClick={() => {
                document.getElementById('journees-portes-ouvertes')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              En savoir plus
            </a>
            <button 
              onClick={() => setIsVisible(false)}
              className="w-8 h-8 bg-charcoal/20 rounded-full flex items-center justify-center hover:bg-charcoal/30 transition-colors"
            >
              <X className="w-4 h-4 text-charcoal" />
            </button>
          </div>
        </div>

        {/* Mobile version */}
        <div className="md:hidden mt-4 space-y-2">
          {events.map((event, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center text-charcoal">
                <MapPin className="w-3 h-3 mr-1" />
                {event.location} - {event.date}
              </div>
              <div className="flex items-center text-charcoal/80">
                <Clock className="w-3 h-3 mr-1" />
                {event.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
