'use client';

import { motion } from 'framer-motion';

export default function CallUs() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-purple-900/30 to-emerald-900/30 animate-gradient-x" />
      
      {/* Glowing orbs for extra effect */}
      <div className="absolute -left-20 top-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -right-20 bottom-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Neon border effect */}
      <div className="absolute inset-0 border border-emerald-500/20 rounded-lg mx-4 my-2" />
      <div className="absolute inset-0 border border-purple-500/20 rounded-lg mx-4 my-2" style={{ transform: 'translate(2px, 2px)' }} />
      
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Text content */}
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              Ready to Transform Your Customer Service?
            </h2>
            <p className="text-xl text-foreground/90">
              Our team is ready to help you implement the perfect AI chatbot solution for your business.
            </p>
          </div>
          
          {/* Call button */}
          <motion.a 
            href="tel:+38669846626"
            className="flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 neon-border"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-2xl">Call Us Now</span>
          </motion.a>
        </motion.div>
      </div>
      
      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </section>
  );
} 