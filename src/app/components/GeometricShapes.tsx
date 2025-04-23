'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface FloatingShapeProps {
  index: number;
  scrollYProgress: any;
}

const shapes = [
  'rounded-full before:rounded-full', // circle
  'before:rounded-none', // square
  'clip-path-hexagon before:clip-path-hexagon', // hexagon
  'clip-path-triangle before:clip-path-triangle', // triangle
  'rounded-full before:rounded-full', // circle again
];

// Initial positions for each shape
const initialPositions = [
  { left: '15%', top: '20%' }, // Top left
  { left: '75%', top: '15%' }, // Top right
  { left: '65%', top: '70%' }, // Bottom right
  { left: '25%', top: '75%' }, // Bottom left
  { left: '50%', top: '40%' }, // Center
];

// Define movement patterns for each shape
const getAnimationValues = (index: number) => {
  const basePosition = initialPositions[index];
  const baseLeft = parseFloat(basePosition.left);
  const baseTop = parseFloat(basePosition.top);
  
  switch (index) {
    case 0: // Top left circle: Diagonal movement
      return {
        x: [-50, 50],
        y: [-30, 30],
        scale: [0.8, 1.2],
        rotate: [0, 180],
      };
    case 1: // Top right square: Horizontal movement
      return {
        x: [50, -50],
        y: [0, 40],
        scale: [1, 0.9],
        rotate: [0, -90],
      };
    case 2: // Bottom right hexagon: Vertical movement
      return {
        x: [-30, 30],
        y: [-40, 40],
        scale: [1.1, 0.9],
        rotate: [-45, 45],
      };
    case 3: // Bottom left triangle: Arc movement
      return {
        x: [40, -40],
        y: [-50, 0],
        scale: [0.9, 1.1],
        rotate: [0, 120],
      };
    default: // Center circle: Subtle orbital
      return {
        x: [-20, 20],
        y: [-20, 20],
        scale: [1, 1.2],
        rotate: [0, 360],
      };
  }
};

const FloatingShape = ({ index, scrollYProgress }: FloatingShapeProps) => {
  const values = getAnimationValues(index);
  const position = initialPositions[index];
  
  const x = useTransform(scrollYProgress, [0, 1], values.x);
  const y = useTransform(scrollYProgress, [0, 1], values.y);
  const scale = useTransform(scrollYProgress, [0, 1], values.scale);
  const rotate = useTransform(scrollYProgress, [0, 1], values.rotate);

  return (
    <motion.div
      className={`absolute ${shapes[index]} before:absolute before:inset-0 before:border-2 before:border-emerald-500/30 before:content-[''] before:z-[-1]`}
      style={{
        width: `${80 + index * 15}px`,
        height: `${80 + index * 15}px`,
        ...position,
        x,
        y,
        scale,
        rotate,
        background: 'rgba(16, 185, 129, 0.05)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(16, 185, 129, 0.2)',
        boxShadow: '0 0 20px rgba(16, 185, 129, 0.1)',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default function GeometricShapes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Subtle animation for central shape
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 20, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div
      ref={containerRef}
      className="relative h-[500px] w-full"
    >
      <style jsx global>{`
        .clip-path-hexagon {
          clip-path: polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%);
        }
        .clip-path-triangle {
          clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 before:absolute before:inset-0 before:border-2 before:border-emerald-500/30 before:content-[''] before:z-[-1] rounded-full before:rounded-full"
        style={{ 
          width: '140px',
          height: '140px',
          y, 
          scale,
          rotate,
          background: 'rgba(16, 185, 129, 0.05)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(16, 185, 129, 0.2)',
          boxShadow: '0 0 30px rgba(16, 185, 129, 0.15)',
        }}
      />
      {[...Array(5)].map((_, index) => (
        <FloatingShape
          key={index}
          index={index}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
} 