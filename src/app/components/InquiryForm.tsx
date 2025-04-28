'use client';

import { motion } from 'framer-motion';

export default function CalendarScheduler() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with reduced opacity */}
      <div className="absolute inset-0 bg-[#001106]/80">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 via-purple-900/10 to-emerald-900/10 animate-gradient-x" />
      </div>

      {/* Glowing orbs with reduced intensity */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Schedule a Meeting
          </h2>
          <p className="text-lg text-center text-gray-200 mb-12 max-w-2xl mx-auto">
            Book a time that works best for you. We&apos;ll discuss your project needs and how we can help you achieve your goals.
          </p>

          <motion.div 
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Google Calendar Appointment Scheduling */}
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ07OkzRKN7Oklsdkah192Ie-Uz300O-o36-tKtQOhvQR1GJoOZeHM2YE-8eYef8_9RUkC6W_Ue9?gv=true" 
              className="w-full h-[600px] border-0"
              frameBorder="0"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 