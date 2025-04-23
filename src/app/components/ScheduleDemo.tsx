'use client';

import { motion } from 'framer-motion';

export default function ScheduleDemo() {
  return (
    <section className="relative w-full py-24 bg-black">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001106] via-black to-black" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600">
            Schedule A Demo
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Book a personalized demo to see how our AI chatbot can transform your business.
          </p>
        </motion.div>

        {/* Calendar Container */}
        <motion.div 
          className="max-w-4xl mx-auto bg-black/50 rounded-xl border border-emerald-500/20 p-4 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Placeholder for Google Calendar Embed */}
          <div className="w-full aspect-[4/3] bg-black/40 rounded-lg border border-emerald-500/10">
            {/* Google Calendar will be embedded here */}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 