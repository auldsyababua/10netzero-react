'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  color: string
}

interface Node {
  x: number
  y: number
  radius: number
  pulsePhase: number
}

interface FlowParticle {
  progress: number
  speed: number
  fromNode: number
  toNode: number
  color: string
}

export function EnergyFlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Brand colors
    const primaryColor = '#ea580c' // Orange
    const accentColor = '#0284c7' // Blue
    const secondaryColor = '#22c55e' // Green

    let width = window.innerWidth
    let height = window.innerHeight

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    resize()
    window.addEventListener('resize', resize)

    // Create network nodes
    const nodeCount = Math.min(12, Math.floor(width / 150))
    const nodes: Node[] = []
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width * 0.8 + width * 0.1,
        y: Math.random() * height * 0.7 + height * 0.15,
        radius: Math.random() * 3 + 2,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    // Create connections between nearby nodes
    const connections: [number, number][] = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y)
        if (dist < 300) {
          connections.push([i, j])
        }
      }
    }

    // Background particles (floating ambiance)
    const particles: Particle[] = []
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        color: [primaryColor, accentColor, secondaryColor][Math.floor(Math.random() * 3)],
      })
    }

    // Flow particles (moving along connections)
    const flowParticles: FlowParticle[] = []
    const colors = [primaryColor, accentColor, secondaryColor]
    
    connections.forEach((_, idx) => {
      if (Math.random() > 0.3) {
        flowParticles.push({
          progress: Math.random(),
          speed: Math.random() * 0.003 + 0.001,
          fromNode: connections[idx][0],
          toNode: connections[idx][1],
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    })

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      time += 0.01

      // Draw connections with gradient
      connections.forEach(([i, j]) => {
        const n1 = nodes[i]
        const n2 = nodes[j]
        
        const gradient = ctx.createLinearGradient(n1.x, n1.y, n2.x, n2.y)
        gradient.addColorStop(0, `${primaryColor}15`)
        gradient.addColorStop(0.5, `${accentColor}20`)
        gradient.addColorStop(1, `${primaryColor}15`)
        
        ctx.beginPath()
        ctx.moveTo(n1.x, n1.y)
        ctx.lineTo(n2.x, n2.y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Draw and animate nodes
      nodes.forEach((node, idx) => {
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.5 + 0.5
        const glowRadius = node.radius + pulse * 8
        
        // Glow effect
        const glow = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius
        )
        glow.addColorStop(0, `${primaryColor}40`)
        glow.addColorStop(0.5, `${primaryColor}15`)
        glow.addColorStop(1, 'transparent')
        
        ctx.beginPath()
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = primaryColor
        ctx.fill()
      })

      // Animate flow particles along connections
      flowParticles.forEach((fp) => {
        fp.progress += fp.speed
        if (fp.progress > 1) {
          fp.progress = 0
          // Randomly change direction sometimes
          if (Math.random() > 0.7) {
            const temp = fp.fromNode
            fp.fromNode = fp.toNode
            fp.toNode = temp
          }
        }

        const n1 = nodes[fp.fromNode]
        const n2 = nodes[fp.toNode]
        const x = n1.x + (n2.x - n1.x) * fp.progress
        const y = n1.y + (n2.y - n1.y) * fp.progress

        // Glowing particle
        const particleGlow = ctx.createRadialGradient(x, y, 0, x, y, 8)
        particleGlow.addColorStop(0, `${fp.color}80`)
        particleGlow.addColorStop(0.5, `${fp.color}30`)
        particleGlow.addColorStop(1, 'transparent')

        ctx.beginPath()
        ctx.arc(x, y, 8, 0, Math.PI * 2)
        ctx.fillStyle = particleGlow
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x, y, 2, 0, Math.PI * 2)
        ctx.fillStyle = fp.color
        ctx.fill()
      })

      // Background ambient particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        // Wrap around
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color.replace(')', `, ${p.opacity})`).replace('rgb', 'rgba').replace('#', '')
        
        // Convert hex to rgba
        const r = parseInt(p.color.slice(1, 3), 16)
        const g = parseInt(p.color.slice(3, 5), 16)
        const b = parseInt(p.color.slice(5, 7), 16)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  )
}
