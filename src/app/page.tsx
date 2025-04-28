'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import ChatDemo from './components/ChatDemo';
import AnimatedBackground from './components/AnimatedBackground';
import GradientBackground from './components/GradientBackground';
import PurpleGlow from './components/PurpleGlow';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import CallUs from './components/CallUs';
import { motion } from 'framer-motion';
import GeometricShapes from './components/GeometricShapes';
import UseCases from './components/UseCases';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Main background with dense animations */}
      <AnimatedBackground variant="dense" className="fixed inset-0" />
      
      {/* Hero Section with high-density purple glow */}
      <div className="relative">
        <PurpleGlow density="high" className="z-0" />
        <Header />
        <Hero />
      </div>

      {/* Glowing neon purple line divider */}
      <div className="relative w-full h-[1px] overflow-visible">
        {/* Core line - more vibrant purple */}
        <div className="absolute inset-0 bg-[#9333EA]" />
        
        {/* Inner glow - intense purple */}
        <div className="absolute inset-0 bg-[#A855F7] blur-[1px]" />
        
        {/* Middle dispersing glow */}
        <div className="absolute inset-x-0 -top-1 bottom-0 bg-[#7C3AED] blur-[4px] opacity-70" />
        <div className="absolute inset-x-0 top-0 -bottom-1 bg-[#7C3AED] blur-[4px] opacity-70" />
        
        {/* Outer dispersing glow */}
        <div className="absolute -inset-2 bg-[#6D28D9] blur-[8px] opacity-50 animate-pulse" />
        
        {/* Random dispersion effects */}
        <div className="absolute -left-8 -top-1 w-16 h-2 bg-[#7C3AED] blur-[6px] opacity-40 rotate-45" />
        <div className="absolute -right-8 -bottom-1 w-16 h-2 bg-[#7C3AED] blur-[6px] opacity-40 -rotate-45" />
        <div className="absolute left-1/4 -top-2 w-8 h-2 bg-[#6D28D9] blur-[8px] opacity-30" />
        <div className="absolute right-1/4 -bottom-2 w-8 h-2 bg-[#6D28D9] blur-[8px] opacity-30" />
        
        {/* Extra wide dispersion */}
        <div className="absolute inset-x-0 -top-4 bottom-0 bg-[#6D28D9] blur-[16px] opacity-20" />
        <div className="absolute inset-x-0 top-0 -bottom-4 bg-[#6D28D9] blur-[16px] opacity-20" />
      </div>

      {/* Features Section - Animated gradient background with medium-density glow */}
      <UseCases />
      <GradientBackground>
        <div id="features">
          <PurpleGlow density="medium" className="opacity-50" />
          <Features />
        </div>
      </GradientBackground>

      {/* Call Us Section */}
      <CallUs />

      {/* How It Works Section - Regular background with low-density glow */}
      <div id="how-it-works" className="relative">
        <PurpleGlow density="low" className="opacity-70" />
        <HowItWorks />
      </div>

      {/* Chat Demo Section - Dark background with medium-density glow */}
      <div id="chat-demo" className="relative bg-[#001106]">
        <PurpleGlow density="medium" className="opacity-60" />
        <ChatDemo />
      </div>

      {/* Glowing neon purple line divider */}
      <div className="relative w-full h-[1px] overflow-visible">
        {/* Core line - more vibrant purple */}
        <div className="absolute inset-0 bg-[#9333EA]" />
        
        {/* Inner glow - intense purple */}
        <div className="absolute inset-0 bg-[#A855F7] blur-[1px]" />
        
        {/* Middle dispersing glow */}
        <div className="absolute inset-x-0 -top-1 bottom-0 bg-[#7C3AED] blur-[4px] opacity-70" />
        <div className="absolute inset-x-0 top-0 -bottom-1 bg-[#7C3AED] blur-[4px] opacity-70" />
        
        {/* Outer dispersing glow */}
        <div className="absolute -inset-2 bg-[#6D28D9] blur-[8px] opacity-50 animate-pulse" />
        
        {/* Random dispersion effects */}
        <div className="absolute -left-8 -top-1 w-16 h-2 bg-[#7C3AED] blur-[6px] opacity-40 rotate-45" />
        <div className="absolute -right-8 -bottom-1 w-16 h-2 bg-[#7C3AED] blur-[6px] opacity-40 -rotate-45" />
        <div className="absolute left-1/4 -top-2 w-8 h-2 bg-[#6D28D9] blur-[8px] opacity-30" />
        <div className="absolute right-1/4 -bottom-2 w-8 h-2 bg-[#6D28D9] blur-[8px] opacity-30" />
        
        {/* Extra wide dispersion */}
        <div className="absolute inset-x-0 -top-4 bottom-0 bg-[#6D28D9] blur-[16px] opacity-20" />
        <div className="absolute inset-x-0 top-0 -bottom-4 bg-[#6D28D9] blur-[16px] opacity-20" />
      </div>

      {/* Pricing Section - Animated gradient background with high-density glow */}
      <GradientBackground>
        <div id="pricing">
          <PurpleGlow density="high" className="opacity-50" />
          <Pricing />
        </div>
      </GradientBackground>

      {/* Inquiry Form Section */}
      <div id="inquiry-form">
        <InquiryForm />
      </div>

      {/* Footer */}
      <Footer />

      <style jsx global>{`
        @keyframes gradient {
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
      `}</style>
    </main>
  );
}
