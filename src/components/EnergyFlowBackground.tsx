'use client'

import { motion } from 'framer-motion'

// Generate curved pipe paths
const generatePipePaths = () => {
  const paths = [
    // Main flowing pipes - curved paths across the screen
    "M-100,150 Q200,100 400,200 T800,150 T1200,250 T1600,180 T2000,220",
    "M-50,350 Q150,280 350,380 T750,320 T1150,400 T1550,340 T1950,380",
    "M-100,550 Q250,480 450,580 T850,520 T1250,600 T1650,540 T2050,580",
    "M-80,750 Q200,680 400,780 T800,720 T1200,800 T1600,740 T2000,780",
    // Cross-connecting pipes
    "M200,0 Q250,200 180,400 T280,600 T200,900",
    "M600,0 Q650,180 580,360 T680,540 T600,900",
    "M1000,0 Q1050,200 980,400 T1080,600 T1000,900",
    "M1400,0 Q1450,180 1380,360 T1480,540 T1400,900",
  ]
  return paths
}

const pipes = generatePipePaths()

// Colors matching brand
const pipeColors = [
  '#ea580c', // Orange (primary)
  '#0284c7', // Blue (accent)
  '#22c55e', // Green (secondary)
  '#ea580c',
  '#0284c7',
  '#22c55e',
  '#ea580c',
  '#0284c7',
]

// Data packet component that flows along a path
const DataPacket = ({ 
  pathId, 
  delay, 
  duration, 
  color,
  size = 8 
}: { 
  pathId: string
  delay: number
  duration: number
  color: string
  size?: number
}) => {
  return (
    <motion.circle
      r={size}
      fill={color}
      filter="url(#glow)"
      initial={{ offsetDistance: '0%' }}
      animate={{ offsetDistance: '100%' }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        offsetPath: `path("${pathId}")`,
      }}
    />
  )
}

export function EnergyFlowBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.85 }}
      >
        <defs>
          {/* Glow filter for packets */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Stronger glow for larger packets */}
          <filter id="glowStrong" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient for pipe lines */}
          <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#0284c7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Draw the pipe paths */}
        {pipes.map((path, index) => (
          <g key={index}>
            {/* Pipe background glow */}
            <motion.path
              d={path}
              fill="none"
              stroke={pipeColors[index]}
              strokeWidth="3"
              strokeOpacity="0.15"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: index * 0.2 }}
            />
            
            {/* Main pipe line */}
            <motion.path
              d={path}
              fill="none"
              stroke={pipeColors[index]}
              strokeWidth="1.5"
              strokeOpacity="0.4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: index * 0.2 }}
            />
          </g>
        ))}

        {/* Data packets flowing along pipes */}
        {pipes.map((path, pipeIndex) => (
          <g key={`packets-${pipeIndex}`}>
            {/* Multiple packets per pipe with different timings */}
            {[0, 1, 2, 3].map((packetIndex) => (
              <DataPacket
                key={`${pipeIndex}-${packetIndex}`}
                pathId={path}
                delay={packetIndex * 2.5 + pipeIndex * 0.3}
                duration={8 + Math.random() * 4}
                color={pipeColors[pipeIndex]}
                size={6 + Math.random() * 4}
              />
            ))}
          </g>
        ))}

        {/* Junction nodes where pipes intersect */}
        {[
          { x: 200, y: 200 },
          { x: 600, y: 350 },
          { x: 1000, y: 250 },
          { x: 1400, y: 400 },
          { x: 400, y: 550 },
          { x: 800, y: 480 },
          { x: 1200, y: 580 },
          { x: 1600, y: 520 },
        ].map((node, index) => (
          <g key={`node-${index}`}>
            {/* Node glow */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="20"
              fill={pipeColors[index % pipeColors.length]}
              opacity="0.2"
              animate={{
                r: [18, 25, 18],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 2,
                delay: index * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            {/* Node core */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill={pipeColors[index % pipeColors.length]}
              filter="url(#glow)"
              animate={{
                r: [5, 7, 5],
              }}
              transition={{
                duration: 1.5,
                delay: index * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            {/* Node bright center */}
            <circle
              cx={node.x}
              cy={node.y}
              r="2"
              fill="white"
              opacity="0.8"
            />
          </g>
        ))}
      </svg>
    </div>
  )
}
