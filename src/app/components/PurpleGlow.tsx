'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PurpleGlowProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
}

export default function PurpleGlow({ className = '', density = 'medium' }: PurpleGlowProps) {
  const [orbs, setOrbs] = useState<{ x: number; y: number; size: number; delay: number; variant: number }[]>([]);

  useEffect(() => {
    const positions = [
      { x: 15, y: 20 },  // Top left
      { x: 85, y: 30 },  // Top right
      { x: 50, y: 70 },  // Bottom center
      { x: 20, y: 80 },  // Bottom left
    ];

    const orbCount = {
      low: 2,
      medium: 3,
      high: 4
    }[density];

    const newOrbs = Array.from({ length: orbCount }).map((_, index) => {
      const basePosition = positions[index % positions.length];
      return {
        x: basePosition.x + (Math.random() - 0.5) * 10,
        y: basePosition.y + (Math.random() - 0.5) * 10,
        size: Math.random() * 300 + 200,
        delay: Math.random() * 2,
        variant: index // Use index to determine animation variant
      };
    });

    setOrbs(newOrbs);
  }, [density]);

  // Different animation patterns for each orb
  const animations = [
    {
      // Horizontal stretch
      scaleX: [1, 1.4, 0.8, 1.3, 1],
      scaleY: [1, 0.9, 1.1, 0.9, 1],
      opacity: [0.5, 0.7, 0.4, 0.6, 0.5],
    },
    {
      // Vertical stretch
      scaleX: [1, 0.9, 1.1, 0.9, 1],
      scaleY: [1, 1.4, 0.8, 1.3, 1],
      opacity: [0.5, 0.8, 0.6, 0.7, 0.5],
    },
    {
      // Diagonal stretch
      scaleX: [1, 1.3, 0.9, 1.2, 1],
      scaleY: [1, 1.3, 0.9, 1.2, 1],
      opacity: [0.5, 0.6, 0.7, 0.5, 0.5],
    },
    {
      // Pulsing
      scaleX: [1, 1.2, 0.9, 1.1, 1],
      scaleY: [1, 1.2, 0.9, 1.1, 1],
      opacity: [0.5, 0.8, 0.4, 0.7, 0.5],
    }
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(168,85,247,0.3) 30%, rgba(147,51,234,0) 70%)',
            filter: 'blur(4px)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={animations[orb.variant % animations.length]}
          transition={{
            duration: 12 + orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
} 