'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const CallUsContent = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-purple-900/30 to-emerald-900/30 animate-gradient-x" />
      
      {/* Glowing orbs for extra effect */}
      <div className="absolute -left-20 top-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -right-20 bottom-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Text content */}
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
              Ready to Transform Your Customer Service?
            </h2>
            <p className="text-lg text-foreground/90">
              Our team is ready to help you implement the perfect AI chatbot solution for your business.
            </p>
          </div>
          
          {/* Call and Email buttons */}
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <motion.a 
              href="tel:+38669846626"
              className="flex items-center justify-center gap-3 px-8 py-4 w-full md:w-[280px] bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-xl">Call Us Now</span>
            </motion.a>

            <motion.a 
              href="mailto:info@flowgent.agency"
              className="flex items-center justify-center gap-3 px-8 py-4 w-full md:w-[280px] bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-500 hover:to-emerald-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xl">Email Us</span>
            </motion.a>
          </div>
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

// Export a client-side only version of the component
export default dynamic(() => Promise.resolve(CallUsContent), {
  ssr: false
}); 