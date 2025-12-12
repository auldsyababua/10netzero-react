'use client'

import { useEffect, useRef } from 'react'

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
  size: number
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
      initializeNetwork()
    }

    let nodes: Node[] = []
    let connections: [number, number][] = []
    let flowParticles: FlowParticle[] = []

    const initializeNetwork = () => {
      // Create network nodes - more nodes for better coverage
      const nodeCount = Math.max(15, Math.floor((width * height) / 50000))
      nodes = []
      
      // Create nodes in a more distributed pattern
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width * 0.9 + width * 0.05,
          y: Math.random() * height * 0.85 + height * 0.075,
          radius: Math.random() * 4 + 3,
          pulsePhase: Math.random() * Math.PI * 2,
        })
      }

      // Create connections between nodes - connect more liberally
      connections = []
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y)
          // Connect nodes within reasonable distance
          if (dist < Math.min(400, width / 3)) {
            connections.push([i, j])
          }
        }
      }

      // Create flow particles - multiple per connection for busy effect
      flowParticles = []
      const colors = [primaryColor, accentColor, secondaryColor]
      
      connections.forEach(([from, to]) => {
        // Add 2-4 particles per connection
        const particleCount = Math.floor(Math.random() * 3) + 2
        for (let p = 0; p < particleCount; p++) {
          flowParticles.push({
            progress: Math.random(),
            speed: Math.random() * 0.008 + 0.003,
            fromNode: from,
            toNode: to,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 3 + 2,
          })
        }
      })
    }

    resize()
    window.addEventListener('resize', resize)

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      time += 0.01

      // Draw connections with gradient - more visible
      connections.forEach(([i, j]) => {
        const n1 = nodes[i]
        const n2 = nodes[j]
        
        const gradient = ctx.createLinearGradient(n1.x, n1.y, n2.x, n2.y)
        gradient.addColorStop(0, `${primaryColor}30`)
        gradient.addColorStop(0.5, `${accentColor}40`)
        gradient.addColorStop(1, `${primaryColor}30`)
        
        ctx.beginPath()
        ctx.moveTo(n1.x, n1.y)
        ctx.lineTo(n2.x, n2.y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.stroke()
      })

      // Draw and animate nodes with glow
      nodes.forEach((node) => {
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.5 + 0.5
        const glowRadius = node.radius + pulse * 15
        
        // Outer glow
        const glow = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius
        )
        glow.addColorStop(0, `${primaryColor}60`)
        glow.addColorStop(0.4, `${primaryColor}30`)
        glow.addColorStop(1, 'transparent')
        
        ctx.beginPath()
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()

        // Core node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = primaryColor
        ctx.fill()
        
        // Bright center
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = '#ffffff'
        ctx.fill()
      })

      // Animate flow particles along connections - the main effect
      flowParticles.forEach((fp) => {
        fp.progress += fp.speed
        if (fp.progress > 1) {
          fp.progress = 0
          // Occasionally reverse direction
          if (Math.random() > 0.7) {
            const temp = fp.fromNode
            fp.fromNode = fp.toNode
            fp.toNode = temp
          }
        }

        const n1 = nodes[fp.fromNode]
        const n2 = nodes[fp.toNode]
        if (!n1 || !n2) return
        
        const x = n1.x + (n2.x - n1.x) * fp.progress
        const y = n1.y + (n2.y - n1.y) * fp.progress

        // Trail effect
        const trailLength = 5
        for (let t = 0; t < trailLength; t++) {
          const trailProgress = fp.progress - (t * 0.02)
          if (trailProgress < 0) continue
          
          const tx = n1.x + (n2.x - n1.x) * trailProgress
          const ty = n1.y + (n2.y - n1.y) * trailProgress
          const trailOpacity = 1 - (t / trailLength)
          
          ctx.beginPath()
          ctx.arc(tx, ty, fp.size * trailOpacity * 0.5, 0, Math.PI * 2)
          ctx.fillStyle = fp.color.replace(')', `, ${trailOpacity * 0.5})`).replace('rgb', 'rgba')
          
          // Convert hex to rgba for trail
          const r = parseInt(fp.color.slice(1, 3), 16)
          const g = parseInt(fp.color.slice(3, 5), 16)
          const b = parseInt(fp.color.slice(5, 7), 16)
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${trailOpacity * 0.4})`
          ctx.fill()
        }

        // Main particle with glow
        const particleGlow = ctx.createRadialGradient(x, y, 0, x, y, fp.size * 4)
        particleGlow.addColorStop(0, `${fp.color}90`)
        particleGlow.addColorStop(0.4, `${fp.color}40`)
        particleGlow.addColorStop(1, 'transparent')

        ctx.beginPath()
        ctx.arc(x, y, fp.size * 4, 0, Math.PI * 2)
        ctx.fillStyle = particleGlow
        ctx.fill()

        // Bright core
        ctx.beginPath()
        ctx.arc(x, y, fp.size, 0, Math.PI * 2)
        ctx.fillStyle = fp.color
        ctx.fill()
        
        // White center
        ctx.beginPath()
        ctx.arc(x, y, fp.size * 0.4, 0, Math.PI * 2)
        ctx.fillStyle = '#ffffff'
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
      style={{ opacity: 0.85 }}
    />
  )
}
