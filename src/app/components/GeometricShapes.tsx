'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface FloatingCircleProps {
  index: number;
  scrollYProgress: any;
}

const FloatingCircle = ({ index, scrollYProgress }: FloatingCircleProps) => {
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, index % 2 === 0 ? 100 : -100]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, index % 2 === 0 ? 1.2 : 0.8]
  );

  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm"
      style={{
        width: `${100 + index * 20}px`,
        height: `${100 + index * 20}px`,
        y,
        scale,
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

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div
      ref={containerRef}
      className="relative h-[500px] w-full overflow-hidden"
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm"
        style={{ y, scale }}
      />
      {[...Array(5)].map((_, index) => (
        <FloatingCircle
          key={index}
          index={index}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
} 