'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['features', 'how-it-works', 'chat-demo', 'pricing', 'schedule-demo'];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.div 
            className="relative w-48 h-12 flex items-center justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl scale-0 group-hover:scale-110 transition-transform duration-300" />
            
            {/* Logo */}
            <div className="relative w-full h-full">
              <Image
                src="/logo.png"
                alt="FLOWGENT Logo"
                width={192}
                height={48}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </motion.div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="#features" 
            className={`text-sm transition-colors ${
              activeSection === 'features' 
                ? 'text-emerald-400 font-medium' 
                : 'hover:text-accent'
            }`}
          >
            Features
          </Link>
          <Link 
            href="#how-it-works" 
            className={`text-sm transition-colors ${
              activeSection === 'how-it-works' 
                ? 'text-emerald-400 font-medium' 
                : 'hover:text-accent'
            }`}
          >
            How It Works
          </Link>
          <Link 
            href="#chat-demo" 
            className={`text-sm transition-colors ${
              activeSection === 'chat-demo' 
                ? 'text-emerald-400 font-medium' 
                : 'hover:text-accent'
            }`}
          >
            Demo
          </Link>
          <Link 
            href="#pricing" 
            className={`text-sm transition-colors ${
              activeSection === 'pricing' 
                ? 'text-emerald-400 font-medium' 
                : 'hover:text-accent'
            }`}
          >
            Pricing
          </Link>
        </nav>

        <Link 
          href="#schedule-demo"
          className={`neon-border px-6 py-2 text-sm font-medium transition-all ${
            activeSection === 'schedule-demo' 
              ? 'bg-emerald-500/20 text-emerald-400' 
              : 'hover:bg-purple-900/90 hover:border-purple-800'
          }`}
        >
          Schedule a Demo
        </Link>
      </div>
    </header>
  );
} 