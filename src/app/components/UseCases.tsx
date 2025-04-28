"use client";

import { MessageCircle, Users, Zap, Home, FileText, ShoppingCart, Stethoscope, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

const useCases = [
  {
    icon: <MessageCircle className="w-8 h-8 text-emerald-400" />, 
    title: "Web-Based Customer Support ChatBots",
    desc: "Instantly resolve customer queries, reduce support costs, and boost satisfaction with 24/7 AI-powered ChatBot on your website."
  },
  {
    icon: <Users className="w-8 h-8 text-purple-400" />, 
    title: "Staff Training ChatBots",
    desc: "Onboard and train employees with interactive, always-available ChatBots that deliver knowledge and answer questions."
  },
  {
    icon: <Zap className="w-8 h-8 text-teal-400" />, 
    title: "Lead Generation ChatBots",
    desc: "Capture, qualify, and nurture leads automatically—turning website visitors into customers with engaging conversations powered by ChatBots."
  },
  {
    icon: <Home className="w-8 h-8 text-emerald-300" />, 
    title: "Airbnb & Booking ChatBots for WhatsApp",
    desc: "Automate bookings, answer guest questions, and manage reservations directly through WhatsApp for hospitality businesses using ChatBots."
  },
  {
    icon: <FileText className="w-8 h-8 text-purple-300" />, 
    title: "Content Generation ChatBots",
    desc: "Generate blog posts, product descriptions, emails, and more—on demand, tailored to your brand voice with AI ChatBots."
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-emerald-400" />, 
    title: "E-commerce Product Recommendation ChatBots",
    desc: "Guide shoppers, suggest products, and increase sales with personalized, AI-driven ChatBots for recommendations."
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-teal-300" />, 
    title: "Healthcare Appointment & FAQ ChatBots",
    desc: "Let patients book appointments, get answers, and access information securely, any time, with Healthcare ChatBots."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-purple-400" />, 
    title: "Internal Knowledge Base ChatBots",
    desc: "Empower your team to find company info, policies, and best practices instantly with a smart internal ChatBot."
  },
];

export default function UseCases() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: true,
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    
    // Ensure progress is properly bounded between 0 and 1
    const progress = Math.max(0, Math.min(1, scrollProgress));
    setScrollProgress(progress * 100);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    onScroll();
    emblaApi.on('select', onSelect);
    emblaApi.on('scroll', () => {
      requestAnimationFrame(onScroll);
    });
    emblaApi.on('reInit', () => {
      onSelect();
      onScroll();
    });

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('scroll', onScroll);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect, onScroll]);

  return (
    <section className="relative py-24 bg-[#0a0f1a] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 via-purple-900/10 to-emerald-900/10 animate-gradient-x" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">AI ChatBot Use Cases</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover how our ChatBots can transform your business across industries.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden -mx-4" ref={emblaRef}>
            <div className="flex">
              {useCases.map((uc, i) => (
                <motion.div
                  key={uc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] px-4"
                >
                  <div className="rounded-2xl bg-black/30 border border-emerald-500/10 shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-md hover:scale-105 transition-transform duration-300 group h-full">
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      {uc.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{uc.title}</h3>
                    <p className="text-gray-300 text-sm">{uc.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full border border-emerald-500/20 hover:bg-black/70 transition-all duration-200 ${
              !prevBtnEnabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="w-6 h-6 text-emerald-400" />
          </button>
          <button
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full border border-emerald-500/20 hover:bg-black/70 transition-all duration-200 ${
              !nextBtnEnabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="w-6 h-6 text-emerald-400" />
          </button>

          {/* Progress Bar */}
          <div className="mt-6 mx-4 bg-gray-800/50 h-1 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-transform duration-200"
              style={{ transform: `translateX(${scrollProgress - 100}%)` }}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
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