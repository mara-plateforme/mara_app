
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, Loader, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'

export function RegistrationForm() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    educationLevel: '',
    currentField: '',
    desiredProgram: '',
    campus: '',
    motivation: '',
    experience: '',
    projets: '',
    availability: '',
    financialSituation: '',
    hasLaptop: false,
    foundAboutUs: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        toast.success('Candidature soumise avec succès ! Nous vous contacterons sous 48h.')
      } else {
        toast.error(result.error || 'Erreur lors de la soumission')
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
          Candidature Reçue !
        </h3>
        <p className="text-gray-300 mb-6">
          Merci pour votre candidature. Notre équipe l'examine attentivement et vous contactera 
          sous 48 heures pour la suite du processus d'admission.
        </p>
        <div className="text-sm text-gray-400">
          Vérifiez vos emails (y compris le dossier spam) pour nos communications.
        </div>
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
          Formulaire de Candidature
        </h3>

        <form onSubmit={handleSubmit} className="form-luxury space-y-6">
          {/* Informations personnelles */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gold-primary font-semibold mb-3 uppercase tracking-wide text-sm">
                Nom Complet *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-xl"
                placeholder="Votre nom complet"
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

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gold-primary font-semibold mb-3 uppercase tracking-wide text-sm">
                Téléphone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl"
                placeholder="+XXX XX XXX XXXX"
                required
              />
            </div>
            <div>
              <label className="block text-gold-primary font-semibold mb-3 uppercase tracking-wide text-sm">
                Pays de Résidence *
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full rounded-xl"
                required
              >
                <option value="">Sélectionnez votre pays</option>
                <option value="senegal">Sénégal</option>
                <option value="morocco">Maroc</option>
                <option value="ivory-coast">Côte d'Ivoire</option>
                <option value="ghana">Ghana</option>
                <option value="nigeria">Nigeria</option>
                <option value="kenya">Kenya</option>
                <option value="south-africa">Afrique du Sud</option>
                <option value="canada">Canada</option>
                <option value="france">France</option>
                <option value="other">Autre</option>
              </select>
            </div>
          </div>

          {/* Formation */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gold-primary font-semibold mb-3 uppercase tracking-wide text-sm">
                Niveau d'Études *
              </label>
              <select
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleChange}
                className="w-full rounded-xl"
                required
              >
                <option value="">Sélectionnez votre niveau</option>
                <option value="bac">Baccalauréat</option>
                <option value="bac+2">Bac +2 (BTS, DUT)</option>
                <option value="bac+3">Licence / Bachelor</option>
                <option value="bac+5">Master / Ingénieur</option>
                <option value="other">Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-gold-primary font-semibold mb-3 uppercase tracking-wide text-sm">
                Domaine Actuel
              </label>
              <input
                type="text"
                name="currentField"
                value={formData.currentField}
                onChange={handleChange}
                className="w-full rounded-xl"
                placeholder="Ex: Informatique, Commerce, Sciences..."
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gold-primary font-semibold mb-3 uppercase tracking-wide text-sm">
                Programme Souhaité *
              </label>
              <select
                name="desiredProgram"
                value={formData.desiredProgram}
                onChange={handleChange}
                className="w-full rounded-xl"
                required
              >
                <option value="">Choisissez un programme</option>
                <option value="parcours-principal">Parcours Principal (18 mois)</option>
                <option value="reseaux-telecom">Réseaux & Télécom (12-18 mois)</option>
                <option value="fibre-optique">Technicien Fibre Optique (4 mois)</option>
              </select>
            </div>
            <div>
              <label className="block text-gold-primary font-semibold mb-3 uppercase tracking-wide text-sm">
                Campus Préféré *
              </label>
              <select
                name="campus"
                value={formData.campus}
                onChange={handleChange}
                className="w-full rounded-xl"
                required
              >
                <option value="">Choisissez un campus</option>
                <option value="dakar">Dakar, Sénégal</option>
                <option value="montreal">Montréal, Canada</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          {/* Motivation */}
          <div>
            <label className="block text-gold-primary font-semibold mb-3 uppercase tracking-wide text-sm">
              Motivation *
            </label>
            <textarea
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              rows={6}
              className="w-full rounded-xl"
              placeholder="Pourquoi voulez-vous rejoindre MARA Digital School ? Quels sont vos objectifs professionnels ? Comment comptez-vous contribuer à la transformation technologique de l'Afrique ?"
              required
            />
          </div>

          {/* Expérience */}
          <div>
            <label className="block text-gold-primary font-semibold mb-3 uppercase tracking-wide text-sm">
              Expérience Technique
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-xl"
              placeholder="Décrivez votre expérience en programmation, administration système, ou tout autre domaine technique..."
            />
          </div>

          {/* Projets */}
          <div>
            <label className="block text-gold-primary font-semibold mb-3 uppercase tracking-wide text-sm">
              Projets Personnels
            </label>
            <textarea
              name="projets"
              value={formData.projets}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-xl"
              placeholder="Parlez-nous de vos projets personnels, contributions open source, sites web, applications..."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gold-primary font-semibold mb-3 uppercase tracking-wide text-sm">
                Disponibilité *
              </label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                className="w-full rounded-xl"
                required
              >
                <option value="">Votre situation</option>
                <option value="full-time">Temps plein disponible</option>
                <option value="student">Étudiant actuellement</option>
                <option value="employed">En emploi (reconversion)</option>
                <option value="unemployed">En recherche d'emploi</option>
              </select>
            </div>
            <div>
              <label className="block text-gold-primary font-semibold mb-3 uppercase tracking-wide text-sm">
                Financement *
              </label>
              <select
                name="financialSituation"
                value={formData.financialSituation}
                onChange={handleChange}
                className="w-full rounded-xl"
                required
              >
                <option value="">Comment comptez-vous financer ?</option>
                <option value="self-funded">Autofinancement</option>
                <option value="family-support">Soutien familial</option>
                <option value="scholarship">Candidat à une bourse</option>
                <option value="employer">Financement employeur</option>
                <option value="payment-plan">Paiement échelonné</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="hasLaptop"
                  checked={formData.hasLaptop}
                  onChange={handleChange}
                  className="w-5 h-5 text-gold-primary rounded border-gray-300 focus:ring-gold-primary"
                />
                <span className="text-gold-primary font-semibold text-sm uppercase tracking-wide">
                  Je possède un ordinateur portable
                </span>
              </label>
            </div>
            <div>
              <label className="block text-gold-primary font-semibold mb-3 uppercase tracking-wide text-sm">
                Comment nous avez-vous connus ? *
              </label>
              <select
                name="foundAboutUs"
                value={formData.foundAboutUs}
                onChange={handleChange}
                className="w-full rounded-xl"
                required
              >
                <option value="">Sélectionnez une option</option>
                <option value="social-media">Réseaux sociaux</option>
                <option value="search-engine">Moteur de recherche</option>
                <option value="referral">Recommandation</option>
                <option value="alumni">Alumni MARA</option>
                <option value="partner">Partenaire</option>
                <option value="event">Événement tech</option>
                <option value="other">Autre</option>
              </select>
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-premium w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader className="animate-spin w-5 h-5 mr-2" />
                  Soumission en cours...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Soumettre ma Candidature
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-gray-400 text-center">
            En soumettant ce formulaire, vous acceptez que vos données soient traitées pour l'évaluation de votre candidature. 
            Réponse sous 48 heures maximum.
          </p>
        </form>
      </div>
    </motion.div>
  )
}
