'use client';

import { motion, useInView } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import { useEffect, useRef, useState } from 'react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
  isMobile: boolean;
}

const features: Feature[] = [
  {
    title: 'Natural Language Processing',
    description: 'Advanced NLP capabilities for human-like conversations and understanding context.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path d="M9 12h6m-6 4h6m-6-8h6" />
      </svg>
    )
  },
  {
    title: 'Multi-Channel Integration',
    description: 'Seamlessly deploy your chatbot across websites, messaging apps, and social media.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: 'Custom AI Training',
    description: 'Train your chatbot with industry-specific knowledge and company data.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Analytics Dashboard',
    description: 'Comprehensive insights into chatbot performance and user interactions.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Automated Workflows',
    description: 'Create complex conversation flows and automate repetitive tasks.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: '24/7 Availability',
    description: 'Provide instant support to your customers around the clock.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

// Generate random entry animations for desktop
const getRandomEntry = () => {
  const entries = [
    { x: -50, y: -50 },
    { x: 50, y: -50 },
    { x: -50, y: 50 },
    { x: 50, y: 50 },
    { x: 0, y: -50 },
    { x: 0, y: 50 },
    { x: -50, y: 0 },
    { x: 50, y: 0 },
  ];
  return entries[Math.floor(Math.random() * entries.length)];
};

// Mobile entry animations from different angles
const mobileEntries = [
  { x: -100, y: 0 },    // from left
  { x: 100, y: 0 },     // from right
  { x: 0, y: 100 },     // from bottom
  { x: -100, y: 100 },  // from bottom-left
  { x: 100, y: 100 },   // from bottom-right
  { x: 0, y: -100 },    // from top
];

// Create a FeatureCard component to handle individual animations
function FeatureCard({ feature, index, isMobile }: FeatureCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { 
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px" // Starts animation slightly before the element comes into view
  });

  // For mobile, use predefined angles
  const mobileEntry = mobileEntries[index % mobileEntries.length];
  // For desktop, use random entry points
  const desktopEntry = getRandomEntry();
  
  const entryAnimation = isMobile ? mobileEntry : desktopEntry;

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      initial={{ 
        opacity: 0,
        x: entryAnimation.x,
        y: entryAnimation.y,
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        y: 0,
      } : {}}
      transition={{ 
        duration: 0.8,
        delay: isMobile ? 0.2 : Math.random() * 0.3,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      <div className="p-8 rounded-lg border border-foreground/10 hover:border-accent/50 transition-all duration-300 bg-background/50 backdrop-blur-sm hover:bg-accent/5">
        <motion.div 
          className="text-accent mb-6"
          initial={{ scale: 0.5, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ 
            duration: 0.5,
            delay: isMobile ? 0.2 : Math.random() * 0.3
          }}
        >
          {feature.icon}
        </motion.div>
        <motion.h3 
          className="text-xl font-semibold mb-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ 
            duration: 0.5,
            delay: 0.3
          }}
        >
          {feature.title}
        </motion.h3>
        <motion.p 
          className="text-foreground/70 text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ 
            duration: 0.5,
            delay: 0.4
          }}
        >
          {feature.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const [isMobile, setIsMobile] = useState(false);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <AnimatedBackground variant="sparse" />
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
            Powerful Features
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Our AI chatbots come packed with advanced features to transform your customer service experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 