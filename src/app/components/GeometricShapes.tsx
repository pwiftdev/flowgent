'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function GeometricShapes() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [45, -315]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <div ref={ref} className="relative w-full h-full">
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-6 gap-4 opacity-20">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="h-8 bg-accent/10 rounded-sm" />
        ))}
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0">
        {/* Large hexagon */}
        <motion.div
          style={{ y: y1, rotate: rotate1, scale }}
          className="absolute top-1/4 left-1/4 w-32 h-32"
        >
          <div className="w-full h-full border-2 border-accent/50 transform rotate-45" />
          <div className="absolute inset-2 border-2 border-accent/30 transform rotate-[30deg]" />
          <div className="absolute inset-4 border-2 border-accent/20 transform rotate-[60deg]" />
        </motion.div>

        {/* Floating cubes */}
        <motion.div
          style={{ y: y2, rotate: rotate2 }}
          className="absolute top-1/3 right-1/4 perspective-1000"
        >
          <div className="relative w-24 h-24 transform-style-3d rotate-x-45 rotate-y-45">
            <div className="absolute inset-0 border-2 border-accent/40 transform-gpu" />
            <div className="absolute inset-0 border-2 border-accent/40 transform-gpu rotate-y-90" />
            <div className="absolute inset-0 border-2 border-accent/40 transform-gpu rotate-x-90" />
          </div>
        </motion.div>

        {/* Floating circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, (i + 1) * 50]),
              scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1])
            }}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: i * 0.2 }}
          >
            <div 
              className={`w-${12 + i * 4} h-${12 + i * 4} rounded-full border-2 border-accent/20
                         absolute transform -translate-x-1/2 -translate-y-1/2`}
              style={{
                left: `${50 + i * 10}%`,
                top: `${30 + i * 15}%`
              }}
            />
          </motion.div>
        ))}

        {/* Glowing orb */}
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1])
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-16 h-16 rounded-full bg-accent/10 filter blur-lg" />
          <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-accent animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
} 