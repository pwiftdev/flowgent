'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Mail, Phone } from 'lucide-react';

const CallUsContent = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950 via-purple-800 to-purple-950 animate-gradient-x opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
      
      {/* Glowing orbs for extra effect */}
      <div className="absolute -left-20 top-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -right-20 bottom-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-lg text-purple-100">
              Let&apos;s discuss how our AI solutions can help you achieve your goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center space-y-4"
          >
            <a
              href="mailto:info@flowgent.agency"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors w-full max-w-xs shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-purple-100 border-2 border-purple-400 rounded-lg hover:bg-purple-900/50 transition-colors w-full max-w-xs"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
          </motion.div>
        </div>
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
          animation: gradient-x 8s ease infinite;
        }
      `}</style>
    </section>
  );
}

// Export a client-side only version of the component
export default dynamic(() => Promise.resolve(CallUsContent), {
  ssr: false
}); 