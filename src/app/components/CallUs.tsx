'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Mail, Phone } from 'lucide-react';

const CallUsContent = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-transparent">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-purple-900/20 to-emerald-900/20 animate-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.10),transparent_60%)]" />
      </div>
      {/* Glowing orbs */}
      <div className="absolute -left-32 top-10 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -right-32 bottom-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-foreground/80">
              Let&apos;s discuss how we can help your business grow with AI
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <a
              href="mailto:info@flowgent.agency"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg shadow-lg shadow-emerald-500/20 hover:from-emerald-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 w-full md:w-auto"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-emerald-200 border-2 border-emerald-400/60 rounded-lg backdrop-blur-md bg-black/20 hover:bg-emerald-900/30 hover:border-emerald-400/90 transition-all duration-300 w-full md:w-auto"
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
        .text-glow {
          text-shadow: 0 0 8px #10b981, 0 0 16px #10b98144;
        }
      `}</style>
    </section>
  );
}

// Export a client-side only version of the component
export default dynamic(() => Promise.resolve(CallUsContent), {
  ssr: false
}); 