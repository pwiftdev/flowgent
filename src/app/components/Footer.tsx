'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative w-full py-16 bg-black border-t border-emerald-500/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Logo Text */}
          <motion.div 
            className="text-3xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              textShadow: '0 0 20px rgba(16, 185, 129, 0.5), 0 0 40px rgba(16, 185, 129, 0.3)'
            }}
          >
            FLOWGENT
          </motion.div>

          {/* Powered By Text */}
          <motion.div
            className="text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Powered by FLOWGENT
          </motion.div>

          {/* Contact Info with Icons */}
          <motion.div 
            className="flex flex-col items-center gap-3 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Location */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Based in Slovenia</span>
            </div>

            {/* Phone */}
            <a 
              href="tel:+38669846626" 
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
            >
              <svg className="w-5 h-5 text-emerald-500 group-hover:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+386 69 846 626</span>
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 