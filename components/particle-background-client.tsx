
'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    THREE: any;
  }
}

export default function ParticleBackgroundClient() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let scene: any, camera: any, renderer: any, particles: any, clock: any
    let animationId: number

    const initPremiumParticles = () => {
      if (!mountRef.current || typeof window === 'undefined') return

      // Load Three.js dynamically
      const script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
      script.onload = () => {
        const THREE = window.THREE

        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        
        if (mountRef.current) {
          mountRef.current.appendChild(renderer.domElement)
        }

        clock = new THREE.Clock()

        // Création des particules
        const geometry = new THREE.BufferGeometry()
        const particlesCount = window.innerWidth < 768 ? 400 : 800
        const positions = new Float32Array(particlesCount * 3)
        const colors = new Float32Array(particlesCount * 3)
        const scales = new Float32Array(particlesCount)

        for (let i = 0; i < particlesCount; i++) {
          const i3 = i * 3
          
          positions[i3] = (Math.random() - 0.5) * 200
          positions[i3 + 1] = (Math.random() - 0.5) * 200
          positions[i3 + 2] = (Math.random() - 0.5) * 200

          // Couleurs or et blanc
          const goldIntensity = Math.random()
          colors[i3] = 0.8 + goldIntensity * 0.2     // R
          colors[i3 + 1] = 0.6 + goldIntensity * 0.4 // G  
          colors[i3 + 2] = 0.2 + goldIntensity * 0.2 // B

          scales[i] = Math.random() * 0.5 + 0.5
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
        geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1))

        // Matériel personnalisé avec shaders
        const material = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            size: { value: 30.0 }
          },
          vertexShader: `
            attribute float scale;
            uniform float time;
            uniform float size;
            varying vec3 vColor;
            
            void main() {
              vColor = color;
              vec3 pos = position;
              pos.y += sin(time + position.x * 0.01) * 10.0;
              pos.x += cos(time + position.z * 0.01) * 5.0;
              
              vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
              gl_PointSize = size * scale * (300.0 / -mvPosition.z);
              gl_Position = projectionMatrix * mvPosition;
            }
          `,
          fragmentShader: `
            varying vec3 vColor;
            
            void main() {
              float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
              float strength = 0.05 / distanceToCenter - 0.1;
              
              gl_FragColor = vec4(vColor, strength);
            }
          `,
          transparent: true,
          vertexColors: true,
          blending: THREE.AdditiveBlending
        })

        particles = new THREE.Points(geometry, material)
        scene.add(particles)

        camera.position.z = 100
        
        animate()

        // Gère le redimensionnement
        const handleResize = () => {
          if (camera && renderer) {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
          }
        }
        
        window.addEventListener('resize', handleResize)

        return () => {
          window.removeEventListener('resize', handleResize)
        }
      }
      
      document.head.appendChild(script)
    }

    // Boucle d'animation
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      
      if (clock && particles && particles.material && particles.material.uniforms) {
        const elapsedTime = clock.getElapsedTime()
        particles.material.uniforms.time.value = elapsedTime
        particles.rotation.y += 0.0005
        particles.rotation.x += 0.0002
      }

      if (renderer && scene && camera) {
        renderer.render(scene, camera)
      }
    }

    // Initialise les particules après un délai
    const timeoutId = setTimeout(initPremiumParticles, 1000)

    return () => {
      clearTimeout(timeoutId)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (renderer && mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      id="particles-luxury"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
      style={{ opacity: 0.6 }}
    />
  )
}
