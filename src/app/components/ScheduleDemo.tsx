'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function ScheduleDemo() {
  return (
    <section className="relative py-20 bg-[#001106]">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-purple-900/30 to-emerald-900/30 animate-gradient-x" />
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-glow">
          Schedule a Demo
        </h2>
        <p className="text-lg text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          Book a free 30 minutes consultation call with our team, to see how we can help your business streamline repetitive tasks.
        </p>
        
        {/* Calendly inline widget */}
        <div 
          className="calendly-inline-widget rounded-lg overflow-hidden mx-auto"
          data-url="https://calendly.com/mickovicbalsa-work/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=001e0b&text_color=ffffff"
          style={{ minWidth: '320px', height: '700px' }}
        />
        
        {/* Calendly script */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </div>
    </section>
  );
} 