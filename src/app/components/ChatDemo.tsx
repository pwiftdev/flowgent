'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const messages = [
  {
    role: 'assistant',
    content: 'Welcome to Grand Plaza Hotel! How may I assist you today?',
  },
  {
    role: 'user',
    content: 'Hi! Do you have gluten-free options for breakfast tomorrow?',
  },
  {
    role: 'assistant',
    content: 'Yes, we have several gluten-free breakfast options including fresh fruit, yogurt parfaits with gluten-free granola, and made-to-order omelets. All items are prepared in a dedicated gluten-free area.',
  },
  {
    role: 'user',
    content: 'That\'s perfect, thank you! What time is breakfast served?',
  },
  {
    role: 'assistant',
    content: 'Breakfast is served from 6:30 AM to 10:30 AM in our main dining room. Would you like me to note your dietary requirement for the breakfast team?',
  }
];

// Create a separate component for the message
function ChatMessage({ message, index, scrollYProgress }: { 
  message: { role: string; content: string }; 
  index: number; 
  scrollYProgress: any;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1 + index * 0.1, 0.2 + index * 0.1, 0.4 + index * 0.1, 0.8],
    [0, 0, 1, 1, 0]
  );
  
  const x = useTransform(
    scrollYProgress,
    [0, 0.1 + index * 0.1, 0.2 + index * 0.1, 0.4 + index * 0.1, 0.8],
    [message.role === 'user' ? 50 : -50, message.role === 'user' ? 0 : 0, message.role === 'user' ? 0 : 0, message.role === 'user' ? 0 : 0, message.role === 'user' ? 0 : 0]
  );

  return (
    <motion.div
      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
      style={{ opacity, x }}
    >
      <div 
        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
          message.role === 'user' 
            ? 'bg-accent text-background ml-4'
            : 'bg-foreground/10 backdrop-blur-sm mr-4'
        }`}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
    </motion.div>
  );
}

export default function ChatDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section className="relative py-32 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
            Experience AI-Powered Conversations
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            See how our AI receptionist handles inquiries naturally and efficiently.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-background/40 backdrop-blur-lg rounded-2xl border border-accent/20 p-4 md:p-6">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <ChatMessage 
                  key={index} 
                  message={message} 
                  index={index} 
                  scrollYProgress={scrollYProgress} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
} 