'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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
          <div className="relative w-32 h-6">
            <Image
              src="/logo.png"
              alt="FLOWGENT Logo"
              width={128}
              height={24}
              className="object-contain"
              priority
            />
          </div>
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
              : 'hover:bg-accent/10'
          }`}
        >
          Schedule a Demo
        </Link>
      </div>
    </header>
  );
} 