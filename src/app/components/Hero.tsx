'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import GeometricShapes from './GeometricShapes';

const SpinningShapes = () => (
  <>
    {/* Center shapes */}
    <motion.div
      className="absolute w-32 h-32 border-2 border-emerald-500/30 rounded-full"
      style={{ filter: 'blur(1px)' }}
      animate={{
        rotate: 360,
        scale: [1, 1.2, 1],
      }}
      transition={{
        rotate: { duration: 8, repeat: Infinity, ease: "linear" },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
    />
    
    <motion.div
      className="absolute w-40 h-40 border-2 border-emerald-500/20"
      style={{ filter: 'blur(1px)' }}
      animate={{
        rotate: -360,
        scale: [1.2, 1, 1.2],
      }}
      transition={{
        rotate: { duration: 12, repeat: Infinity, ease: "linear" },
        scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }}
    />

    {/* Top left cluster */}
    <motion.div
      className="absolute w-24 h-24 -left-20 -top-20 border-2 border-emerald-500/20 rounded-full"
      style={{ filter: 'blur(1px)' }}
      animate={{
        rotate: 360,
        scale: [0.8, 1, 0.8],
      }}
      transition={{
        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
        scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
      }}
    />
    
    <motion.div
      className="absolute w-16 h-16 -left-10 -top-32 border border-emerald-500/30"
      style={{ 
        filter: 'blur(1px)',
        transform: 'rotate(45deg)'
      }}
      animate={{
        rotate: [45, 405],
        scale: [1, 1.2, 1],
      }}
      transition={{
        rotate: { duration: 15, repeat: Infinity, ease: "linear" },
        scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
      }}
    />

    {/* Top right cluster */}
    <motion.div
      className="absolute w-20 h-20 right-0 -top-10"
      style={{
        filter: 'blur(1px)',
        clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
        border: '2px solid rgba(16, 185, 129, 0.15)'
      }}
      animate={{
        rotate: -360,
        scale: [1, 1.3, 1],
      }}
      transition={{
        rotate: { duration: 13, repeat: Infinity, ease: "linear" },
        scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }}
    />

    {/* Bottom left cluster */}
    <motion.div
      className="absolute w-28 h-28 -left-16 bottom-0"
      style={{
        filter: 'blur(1px)',
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        border: '2px solid rgba(16, 185, 129, 0.2)'
      }}
      animate={{
        rotate: 360,
        scale: [0.9, 1.1, 0.9],
      }}
      transition={{
        rotate: { duration: 11, repeat: Infinity, ease: "linear" },
        scale: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
      }}
    />

    {/* Bottom right cluster */}
    <motion.div
      className="absolute w-24 h-24 right-10 bottom-5 border-2 border-emerald-500/25 rounded-full"
      style={{ filter: 'blur(1px)' }}
      animate={{
        rotate: -360,
        scale: [1.1, 0.9, 1.1],
      }}
      transition={{
        rotate: { duration: 9, repeat: Infinity, ease: "linear" },
        scale: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
      }}
    />

    {/* Additional floating shapes */}
    <motion.div
      className="absolute w-12 h-12 left-1/4 top-0 border border-emerald-500/20 rounded-full"
      style={{ filter: 'blur(1px)' }}
      animate={{
        y: [0, -20, 0],
        rotate: 360,
        scale: [1, 1.2, 1],
      }}
      transition={{
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 7, repeat: Infinity, ease: "linear" },
        scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
      }}
    />

    <motion.div
      className="absolute w-16 h-16 right-1/4 bottom-10"
      style={{
        filter: 'blur(1px)',
        clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
        border: '1px solid rgba(16, 185, 129, 0.15)'
      }}
      animate={{
        y: [0, 20, 0],
        rotate: -360,
        scale: [1, 0.8, 1],
      }}
      transition={{
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 14, repeat: Infinity, ease: "linear" },
        scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
      }}
    />

    {/* Small decorative shapes */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-3 h-3 border border-emerald-500/30"
        style={{
          filter: 'blur(0.5px)',
          left: `${20 + Math.random() * 60}%`,
          top: `${20 + Math.random() * 60}%`,
          transform: `rotate(${45 + (i * 30)}deg)`
        }}
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          scale: { 
            duration: 3 + Math.random() * 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          },
          opacity: { 
            duration: 4 + Math.random() * 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }
        }}
      />
    ))}
  </>
);

export default function Hero() {
  const [text, setText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const typingText = ['WE AUTOMATE,', 'YOU ACCELERATE.'];
  const finalText = [
    'TRANSFORMING',
    'CUSTOMER SERVICE',
    'WITH AI CHATBOTS'
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 400);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLine >= typingText.length) {
      setIsTypingComplete(true);
      setTimeout(() => {
        setIsOverlayVisible(false);
      }, 1000);
      return;
    }

    const currentTextLine = typingText[currentLine];
    if (text.length < currentTextLine.length) {
      const timeout = setTimeout(() => {
        setText(prev => currentTextLine.slice(0, prev.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setCurrentLine(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [text, currentLine]);

  return (
    <>
      {/* Full viewport overlay */}
      <motion.div
        className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: isOverlayVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        onAnimationComplete={() => {
          if (!isOverlayVisible) {
            const overlay = document.querySelector('.fixed.inset-0.z-50');
            if (overlay) {
              overlay.classList.add('hidden');
            }
          }
        }}
      >
        {/* Spinning shapes behind text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <SpinningShapes />
        </div>

        {/* Centered typing animation */}
        <div className="relative text-4xl md:text-7xl font-bold tracking-tighter text-center z-10">
          {typingText.map((line, index) => (
            <div key={line} className="h-[1.2em] flex items-center justify-center">
              <span className="text-glow">
                {index < currentLine ? line : index === currentLine ? text : ''}
              </span>
              {index === currentLine && !isTypingComplete && showCursor && (
                <span className="text-glow ml-1 animate-pulse">_</span>
              )}
            </div>
          ))}

          {/* Accelerating circle animation */}
          <motion.div 
            className="relative h-32 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentLine >= typingText.length ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute left-1/2 top-1/2 w-16 h-16 border-2 border-emerald-500/50 rounded-full"
              style={{ 
                filter: 'blur(1px)',
                transformOrigin: 'center',
                x: '-50%',
                y: '-50%'
              }}
              animate={{
                rotate: [0, 1080],
                scale: [1, 0.8, 1],
              }}
              transition={{
                rotate: {
                  duration: 3,
                  ease: [0.4, 0, 0.2, 1], // Custom easing for acceleration
                  repeat: Infinity,
                  repeatType: "loop",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }
              }}
            />
            
            {/* Trail effect */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 w-16 h-16 border border-emerald-500/30 rounded-full"
                style={{ 
                  filter: 'blur(1px)',
                  transformOrigin: 'center',
                  x: '-50%',
                  y: '-50%'
                }}
                animate={{
                  rotate: [0, 1080],
                  scale: [1, 0.8, 1],
                  opacity: [0.3, 0, 0.3]
                }}
                transition={{
                  rotate: {
                    duration: 3,
                    ease: [0.4, 0, 0.2, 1],
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: i * 0.2
                  },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.2
                  },
                  opacity: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.2
                  }
                }}
              />
            ))}

            {/* Particle effects */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute left-1/2 top-1/2 w-2 h-2 bg-emerald-500/30 rounded-full"
                style={{ 
                  filter: 'blur(0.5px)',
                }}
                animate={{
                  x: [
                    '-50%',
                    `${Math.cos(i * Math.PI / 3) * 100}%`,
                    '-50%'
                  ],
                  y: [
                    '-50%',
                    `${Math.sin(i * Math.PI / 3) * 100}%`,
                    '-50%'
                  ],
                  scale: [0, 1, 0],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Main content */}
      <section className="min-h-screen pt-32 pb-16 flex items-center overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: !isOverlayVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
                {finalText.map((line, index) => (
                  <div key={line} className="h-[1.2em] flex items-center">
                    <span className="text-glow">{line}</span>
                  </div>
                ))}
              </div>
              
              <motion.p 
                className="text-lg text-foreground/80 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: !isOverlayVisible ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                We specialize in creating sophisticated AI chatbots that elevate your customer experience, automate support, and drive business growth.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: !isOverlayVisible ? 1 : 0, y: !isOverlayVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <a 
                  href="#contact" 
                  className="neon-border px-8 py-4 text-center font-medium hover:bg-accent/10 transition-colors"
                >
                  Get Started
                </a>
                <a 
                  href="#demo" 
                  className="px-8 py-4 text-center border border-foreground/20 hover:border-accent transition-colors"
                >
                  View Demo
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative h-[500px] hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: !isOverlayVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <GeometricShapes />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 