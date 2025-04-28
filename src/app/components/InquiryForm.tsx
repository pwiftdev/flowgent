'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  companySize: string;
  email: string;
  phone: string;
  message: string;
}

const companySizes = [
  '1-5 employees',
  '5-20 employees',
  '20+ employees'
];

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    companySize: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        companySize: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="relative py-24 bg-[#001106] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-purple-900/20 to-emerald-900/20 animate-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent_50%)]" />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-glow">
            Send an Inquiry
          </h2>
          <p className="text-lg text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll get back to you within 24 hours with a tailored solution. Our team will also offer you a free consultation call.
          </p>

          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6 backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-emerald-500/20 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* First Name field */}
              <div className="relative">
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full bg-black/40 border border-emerald-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all duration-300 hover:border-emerald-500/40"
                  placeholder="First Name"
                />
                {!formData.firstName && (
                  <p className="text-red-500 text-sm mt-1">Please enter your first name</p>
                )}
              </div>

              {/* Last Name field */}
              <div className="relative">
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full bg-black/40 border border-emerald-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all duration-300 hover:border-emerald-500/40"
                  placeholder="Last Name"
                />
                {!formData.lastName && (
                  <p className="text-red-500 text-sm mt-1">Please enter your last name</p>
                )}
              </div>

              {/* Company field */}
              <div className="relative">
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-black/40 border border-emerald-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all duration-300 hover:border-emerald-500/40"
                  placeholder="Company"
                />
              </div>

              {/* Company Size field */}
              <div className="relative">
                <select
                  required
                  value={formData.companySize}
                  onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                  className="w-full bg-black/40 border border-emerald-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all duration-300 hover:border-emerald-500/40 appearance-none"
                >
                  <option value="" className="bg-black">Select Company Size</option>
                  {companySizes.map((size) => (
                    <option key={size} value={size} className="bg-black">{size}</option>
                  ))}
                </select>
                {!formData.companySize && (
                  <p className="text-red-500 text-sm mt-1">Please select your company size</p>
                )}
              </div>

              {/* Email field */}
              <div className="relative">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/40 border border-emerald-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all duration-300 hover:border-emerald-500/40"
                  placeholder="Email"
                />
                {!formData.email && (
                  <p className="text-red-500 text-sm mt-1">Please enter your email address</p>
                )}
              </div>

              {/* Phone field */}
              <div className="relative">
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-black/40 border border-emerald-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all duration-300 hover:border-emerald-500/40"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            {/* Message field */}
            <div className="relative">
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black/40 border border-emerald-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all duration-300 min-h-[150px] resize-y hover:border-emerald-500/40"
                placeholder="Write your message..."
              />
              {!formData.message && (
                <p className="text-red-500 text-sm mt-1">Please enter your message</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-emerald-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-emerald-500 text-center"
              >
                Message sent successfully! We&apos;ll get back to you soon.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-center"
              >
                Failed to send message. Please try again.
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
} 