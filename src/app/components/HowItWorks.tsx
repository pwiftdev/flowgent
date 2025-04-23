'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

// Enhanced glowing circles and shapes component
function GlowingElements() {
  const circles = [
    { size: 300, x: 10, y: 15, delay: 0, intensity: 0.25 },
    { size: 200, x: 85, y: 25, delay: 2, intensity: 0.2 },
    { size: 250, x: 75, y: 65, delay: 1, intensity: 0.3 },
    { size: 180, x: 15, y: 75, delay: 3, intensity: 0.2 },
    { size: 220, x: 45, y: 45, delay: 2, intensity: 0.25 },
  ];

  const shapes = [
    { type: 'square', size: 120, x: 80, y: 20, rotation: 45 },
    { type: 'triangle', size: 100, x: 20, y: 70, rotation: 30 },
    { type: 'square', size: 80, x: 70, y: 80, rotation: 60 },
    { type: 'triangle', size: 90, x: 30, y: 30, rotation: 15 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Intense glowing orbs */}
      {circles.map((circle, index) => (
        <motion.div
          key={`circle-${index}`}
          className="absolute rounded-full"
          style={{
            width: circle.size,
            height: circle.size,
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            background: `radial-gradient(circle, 
              rgba(16,185,129,${circle.intensity}) 0%, 
              rgba(16,185,129,${circle.intensity * 0.7}) 30%, 
              rgba(16,185,129,${circle.intensity * 0.3}) 60%, 
              transparent 70%)`,
            filter: 'blur(8px) brightness(1.2)',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 40px rgba(16,185,129,0.3)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: circle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated geometric shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={`shape-${index}`}
          className="absolute"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ rotate: shape.rotation }}
          animate={{
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div
            className={`w-full h-full opacity-20`}
            style={{
              background: `linear-gradient(135deg, rgba(16,185,129,0.4), rgba(16,185,129,0.1))`,
              clipPath: shape.type === 'triangle' 
                ? 'polygon(50% 0%, 100% 100%, 0% 100%)'
                : undefined,
              transform: shape.type === 'square' ? 'rotate(45deg)' : undefined,
              border: '1px solid rgba(16,185,129,0.3)',
              boxShadow: '0 0 20px rgba(16,185,129,0.2)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

const steps = [
  {
    title: "Initial Consultation",
    description: "We start by understanding your business needs and goals through a detailed consultation. Our team analyzes your requirements to create a tailored AI solution.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M6.16797 18.849C6.41548 16.0917 8.70371 14 11.4389 14H12.5611C15.2963 14 17.5845 16.0917 17.832 18.849" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: "from-emerald-600/30 to-transparent"
  },
  {
    title: "Custom AI Development",
    description: "Our experts develop a personalized AI chatbot using advanced language models and machine learning, specifically trained on your business data and industry knowledge.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V4M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18M12 18V20M20 12H22M2 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    color: "from-teal-600/30 to-transparent"
  },
  {
    title: "Integration & Testing",
    description: "We seamlessly integrate the chatbot into your existing systems and thoroughly test it with real-world scenarios to ensure optimal performance.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12H20M4 12L8 8M4 12L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: "from-green-600/30 to-transparent"
  },
  {
    title: "Training & Deployment",
    description: "Your team receives comprehensive training on managing the chatbot. We then deploy the solution and monitor its performance to ensure everything runs smoothly.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 20H21M16 4L8 12L12 16L20 8L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 20L8 12L12 16L8 20H4V16L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "from-emerald-600/30 to-transparent"
  }
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section className="relative w-full" ref={containerRef}>
      {/* Main content with gradient overlays */}
      <div className="relative w-full bg-black">
        {/* Top gradient that extends down */}
        <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-[#001106] via-[#001106]/50 to-transparent pointer-events-none z-10" />
        
        {/* Bottom gradient that extends up */}
        <div className="absolute inset-x-0 bottom-0 h-[600px] bg-gradient-to-t from-[#001106] via-[#001106]/50 to-transparent pointer-events-none z-10" />
        
        <GlowingElements />
        
        {/* Title Section */}
        <div className="relative h-screen flex items-center justify-center">
          <motion.div 
            className="text-center z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0])
            }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600"
            >
              How We Build Your ChatBot
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto px-4"
            >
              We handle the entire development process, from initial concept to deployment and beyond.
            </motion.p>
          </motion.div>
        </div>

        {/* Steps container */}
        <div className="relative" style={{ height: `${(steps.length + 1) * 100}vh` }}>
          {steps.map((step, index) => (
            <StepSection
              key={index}
              step={step}
              index={index}
              progress={scrollYProgress}
              total={steps.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StepProps {
  step: {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
  };
  index: number;
  progress: any;
  total: number;
}

function StepSection({ step, index, progress, total }: StepProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.5 });

  // Calculate the progress range for this step
  const stepStart = (index + 1) * (1 / (total + 1));
  const stepEnd = (index + 2) * (1 / (total + 1));

  // Opacity animation
  const opacity = useTransform(
    progress,
    [
      stepStart - 0.1,      // Start fade in
      stepStart,           // Fully visible
      stepEnd - 0.1,      // Start fade out
      stepEnd             // Fully faded out
    ],
    [0, 1, 1, 0]
  );

  // Y position animation for smooth transitions
  const y = useTransform(
    progress,
    [
      stepStart - 0.1,
      stepStart,
      stepEnd - 0.1,
      stepEnd
    ],
    ["20vh", "0vh", "0vh", "-20vh"]
  );

  return (
    <motion.div
      ref={sectionRef}
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center"
      style={{ 
        opacity,
        y,
        pointerEvents: "none"
      }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-radial ${step.color} opacity-30`} />
      
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        <motion.div
          className="mb-8 text-emerald-400"
        >
          {step.icon}
        </motion.div>

        <motion.h3
          className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600"
        >
          {step.title}
        </motion.h3>

        <motion.p
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          {step.description}
        </motion.p>

        <motion.div
          className="mt-8 text-sm text-emerald-500"
        >
          Step {index + 1} of {total}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}