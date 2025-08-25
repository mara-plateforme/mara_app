
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Navigation } from '@/components/navigation'
import { ParticleBackground } from '@/components/particle-background'
import { LoadingScreen } from '@/components/loading-screen'
import { OpenHouseBanner } from '@/components/open-house-banner' // 🎯 BANNIÈRE PORTES OUVERTES - Décommentez pour activer
import { Toaster } from 'sonner'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'MARA Digital School | Formation IT d\'Excellence en Afrique',
  description: 'École de formation IT haut de gamme avec instructeurs de classe mondiale. Programmes en développement, DevOps, cybersécurité, IA/ML. Campus à Dakar et Montréal.',
  keywords: 'formation IT, école informatique, Sénégal, Canada, Dakar, Montréal, développement, DevOps, cybersécurité, intelligence artificielle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter bg-gradient-to-br from-charcoal to-charcoal-light text-white overflow-x-hidden">
        <LoadingScreen />
        <ParticleBackground />
        <OpenHouseBanner /> {/* 🎯 BANNIÈRE PORTES OUVERTES - Décommentez pour activer */}
        <Navigation />
        <main>{children}</main>
        <Toaster 
          position="top-right" 
          toastOptions={{
            style: {
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              color: 'white'
            }
          }}
        />
      </body>
    </html>
  )
}
