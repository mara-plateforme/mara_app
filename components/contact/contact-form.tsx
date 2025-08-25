
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, Loader, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'

export function ContactForm() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        toast.success('Message envoyé avec succès ! Nous vous répondrons sous 24h.')
      } else {
        toast.error(result.error || 'Erreur lors de l\'envoi')
      }
    } catch (error) {
      console.error('Erreur:', error)
      toast.error('Erreur réseau. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-premium rounded-3xl p-12 text-center"
      >
        <CheckCircle className="w-16 h-16 text-accent-green mx-auto mb-6" />
        <h3 className="text-3xl font-bold mb-4 font-playfair text-accent-green">
          Message Reçu !
        </h3>
        <p className="text-gray-300 mb-6">
          Merci pour votre message. Notre équipe vous contactera sous 24 heures.
        </p>
        <button 
          onClick={() => {
            setIsSubmitted(false)
            setFormData({ name: '', email: '', subject: '', message: '' })
          }}
          className="btn-secondary"
        >
          Envoyer un Autre Message
        </button>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="glass-premium rounded-3xl p-8">
        <h3 className="text-2xl font-bold mb-8 font-playfair text-gold-primary">
          Envoyez-nous un Message
        </h3>

        <form onSubmit={handleSubmit} className="form-luxury space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gold-primary font-semibold mb-3 uppercase tracking-wide text-sm">
                Nom Complet *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl"
                placeholder="Votre nom et prénom"
                required
              />
            </div>
            <div>
              <label className="block text-gold-primary font-semibold mb-3 uppercase tracking-wide text-sm">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl"
                placeholder="votre@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gold-primary font-semibold mb-3 uppercase tracking-wide text-sm">
              Sujet *
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-xl"
              required
            >
              <option value="">Choisissez un sujet</option>
              <option value="information-generale">Information générale</option>
              <option value="candidature-admission">Candidature et admission</option>
              <option value="programmes-formation">Programmes de formation</option>
              <option value="financement-bourses">Financement et bourses</option>
              <option value="vie-etudiante">Vie étudiante</option>
              <option value="partenariats">Partenariats</option>
              <option value="visite-campus">Visite de campus</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <div>
            <label className="block text-gold-primary font-semibold mb-3 uppercase tracking-wide text-sm">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={8}
              className="w-full rounded-xl"
              placeholder="Décrivez votre demande en détail. Plus vous serez précis, mieux nous pourrons vous aider."
              required
            />
          </div>

          <div className="flex items-center justify-between pt-6">
            <div className="text-sm text-gray-400">
              * Champs obligatoires<br />
              Réponse garantie sous 24h
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-premium text-lg py-3 px-8 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isSubmitting ? (
                <>
                  <Loader className="animate-spin w-5 h-5 mr-2" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le Message
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 p-6 bg-gold-primary/10 rounded-xl">
          <h4 className="font-bold text-gold-primary mb-3">💡 Conseils pour une réponse rapide :</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Précisez le campus qui vous intéresse (Dakar ou Montréal)</li>
            <li>• Mentionnez le programme de formation visé</li>
            <li>• Indiquez vos disponibilités pour un éventuel entretien</li>
            <li>• Joignez des questions spécifiques pour des réponses détaillées</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
