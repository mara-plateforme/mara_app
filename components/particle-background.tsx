
'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const ParticleBackgroundClient = dynamic(
  () => import('./particle-background-client'),
  { ssr: false, loading: () => null }
)

export function ParticleBackground() {
  return <ParticleBackgroundClient />
}
