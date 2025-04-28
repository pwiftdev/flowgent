'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#chat-demo', label: 'Demo' },
  { href: '#pricing', label: 'Pricing' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return; // Don't update active section when menu is open
      
      const sections = ['features', 'how-it-works', 'chat-demo', 'pricing', 'inquiry-form'];
      const scrollPosition = window.scrollY + 100;

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
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center relative z-50">
          <motion.div 
            className="relative w-36 sm:w-48 h-12 flex items-center justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl scale-0 group-hover:scale-110 transition-transform duration-300" />
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
        
        {/* Desktop Navigation - only show on large screens */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={`text-sm transition-colors ${
                activeSection === item.href.slice(1) 
                  ? 'text-emerald-400 font-medium' 
                  : 'hover:text-accent'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="#inquiry-form"
            className={`neon-border px-6 py-2 text-sm font-medium transition-all ${
              activeSection === 'inquiry-form' 
                ? 'bg-emerald-500/20 text-emerald-400' 
                : 'hover:bg-purple-900/90 hover:border-purple-800'
            }`}
          >
            Send an Inquiry
          </Link>
        </nav>

        {/* Mobile/Tablet Menu Button - show on screens smaller than lg */}
        <button
          className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-current block transition-colors duration-200"
            animate={isMenuOpen ? { rotate: 45, y: 6, backgroundColor: "#fff" } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-current block transition-colors duration-200"
            animate={isMenuOpen ? { opacity: 0, backgroundColor: "#fff" } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-current block transition-colors duration-200"
            animate={isMenuOpen ? { rotate: -45, y: -6, backgroundColor: "#fff" } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>

        {/* Mobile/Tablet Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 left-0 top-0 w-full min-h-screen z-40 lg:hidden"
            >
              {/* Blurred background */}
              <motion.div 
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Glowing orbs */}
                <div className="absolute -left-32 top-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -right-32 bottom-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
                
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1010100A_1px,transparent_1px),linear-gradient(to_bottom,#1010100A_1px,transparent_1px)] bg-[size:24px_24px]" />
              </div>

              {/* Menu Content */}
              <motion.div 
                className="relative h-screen flex flex-col items-center justify-center px-4 py-20 overflow-y-auto"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                <nav className="flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-4 sm:gap-6 w-full max-w-4xl mx-auto flex-wrap">
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.href}
                      className="w-full sm:w-auto sm:flex-1 min-w-[200px]"
                      variants={{
                        open: { y: 0, opacity: 1 },
                        closed: { y: 20, opacity: 0 }
                      }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <Link
                        href={item.href}
                        className={`block text-xl sm:text-2xl font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-center transition-colors ${
                          activeSection === item.href.slice(1)
                            ? 'text-emerald-400 bg-emerald-500/10'
                            : 'text-white/90 hover:text-emerald-400 hover:bg-emerald-500/5'
                        }`}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    className="w-full sm:w-auto sm:flex-1 min-w-[200px]"
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 }
                    }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <Link
                      href="#inquiry-form"
                      className="neon-border block text-xl sm:text-2xl font-medium py-3 sm:py-4 px-6 sm:px-8 text-center w-full"
                      onClick={closeMenu}
                    >
                      Send an Inquiry
                    </Link>
                  </motion.div>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 