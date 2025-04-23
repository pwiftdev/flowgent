'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
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

// Typing text effect component with smoother animation
const TypingText = ({ 
  text, 
  delay = 0, 
  className = "", 
  speed = 50,
  style = {}
}: { 
  text: string; 
  delay?: number; 
  className?: string; 
  speed?: number;
  style?: React.CSSProperties;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay before starting to type
    const visibilityTimeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(visibilityTimeout);
  }, [delay]);

  useEffect(() => {
    if (isVisible && currentIndex < text.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length) {
      // Keep isTyping true to maintain the cursor
      setIsTyping(true);
    }
  }, [currentIndex, isTyping, text, isVisible, speed]);

  if (!isVisible) return null;

  return (
    <motion.div 
      className={`relative ${className}`} 
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-glow">{displayText}</span>
      <span className="text-glow ml-1 animate-pulse">_</span>
    </motion.div>
  );
};

// Floating text component with fade in/out
const FloatingText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: isVisible ? 0.3 : 0,
        y: isVisible ? 0 : 10
      }}
      transition={{ 
        duration: 1.5,
        ease: "easeOut"
      }}
    >
      {text}
    </motion.div>
  );
};

// Dimmed text component
const DimmedText = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <div className={`text-foreground/20 ${className}`}>
      {text}
    </div>
  );
};

export default function Hero() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);

  const typingText = useMemo(() => ['WE AUTOMATE,', 'YOU ACCELERATE.'], []);
  const finalText = useMemo(() => [
    'TRANSFORMING',
    'CUSTOMER SERVICE',
    'WITH AI CHATBOTS'
  ], []);

  // New text options
  const textOptions = useMemo(() => [
    'Conversational',
    'Automated',
    'Intelligent',
    'Adaptive',
    'Responsive',
    'Scalable',
    'Seamless',
    'Instant'
  ], []);

  // Predefined positions to avoid overlap
  const textPositions = useMemo(() => [
    { left: '10%', top: '15%', fontSize: '1rem' },
    { left: '25%', top: '35%', fontSize: '1.2rem' },
    { left: '60%', top: '20%', fontSize: '0.9rem' },
    { left: '75%', top: '45%', fontSize: '1.1rem' },
    { left: '15%', top: '65%', fontSize: '1.3rem' },
    { left: '45%', top: '70%', fontSize: '0.8rem' },
    { left: '80%', top: '25%', fontSize: '1rem' },
    { left: '30%', top: '80%', fontSize: '1.2rem' }
  ], []);

  // Track scroll position for animations
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [typingText]);

  useEffect(() => {
    if (currentLine === 0) {
      if (text1.length < typingText[0].length) {
        const timeout = setTimeout(() => {
          setText1(typingText[0].slice(0, text1.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setCurrentLine(1);
      }
    } else if (currentLine === 1) {
      if (text2.length < typingText[1].length) {
        const timeout = setTimeout(() => {
          setText2(typingText[1].slice(0, text2.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTypingComplete(true);
        setTimeout(() => {
          setIsOverlayVisible(false);
        }, 1000);
      }
    }
  }, [text1, text2, currentLine]);

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
          <div className="space-y-4">
            <div className="h-[1.2em] flex items-center justify-center">
              <span className="text-glow">{text1}</span>
              {currentLine === 0 && showCursor && (
                <span className="text-glow ml-1 animate-pulse">_</span>
              )}
            </div>
            <div className="h-[1.2em] flex items-center justify-center">
              <span className="text-glow">{text2}</span>
              {currentLine === 1 && !isTypingComplete && showCursor && (
                <span className="text-glow ml-1 animate-pulse">_</span>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <section className="min-h-screen pt-32 pb-16 flex items-center overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative">
            <motion.div 
              className="space-y-8 relative z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: !isOverlayVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
                {finalText.map((line: string, index: number) => (
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
                  href="#how-it-works" 
                  className="neon-border px-8 py-4 text-center font-medium hover:bg-accent/10 transition-colors"
                >
                  Get Started
                </a>
                <a 
                  href="#chat-demo" 
                  className="px-8 py-4 text-center border border-foreground/20 hover:border-accent transition-colors"
                >
                  View Demo
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative h-[300px] md:h-[400px] lg:h-[500px] order-first lg:order-last lg:relative inset-0 lg:inset-auto z-10 lg:z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: !isOverlayVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <GeometricShapes />
              
              {/* Scattered text with typing animation - only visible after overlay disappears */}
              <motion.div 
                className="absolute inset-0 pointer-events-none overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: !isOverlayVisible ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                {textOptions.map((text, index) => {
                  // Calculate scroll-based animations
                  const scrollProgress = Math.min(Math.max(scrollY / 500, 0), 1);
                  const isEven = index % 2 === 0;
                  
                  // Alternate between left and right movement
                  const xOffset = isEven 
                    ? -scrollProgress * 100 // Move left
                    : scrollProgress * 100; // Move right
                  
                  // Fade out as user scrolls
                  const opacity = 1 - scrollProgress * 0.8;
                  
                  // Scale down slightly as user scrolls
                  const scale = 1 - scrollProgress * 0.2;
                  
                  return (
                    <motion.div
                      key={index}
                      style={{
                        position: 'absolute',
                        left: textPositions[index].left,
                        top: textPositions[index].top,
                        fontSize: textPositions[index].fontSize,
                        opacity,
                        x: xOffset,
                        scale,
                        transformOrigin: isEven ? 'left center' : 'right center'
                      }}
                    >
                      <TypingText
                        text={text}
                        delay={index * 1000 + 2000} // Start after overlay disappears (2s) + staggered delay
                        speed={80} // Slower typing speed
                        className="text-emerald-500/70 font-medium"
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 