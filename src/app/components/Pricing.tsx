'use client';

import AnimatedBackground from './AnimatedBackground';

const features = [
  'Custom AI Training',
  'Multi-Channel Integration',
  'Analytics Dashboard',
  'Conversation Flow Design',
  'Brand Voice Integration',
  'Regular Updates & Maintenance',
  '24/7 Monitoring',
  'Team Training & Support'
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
      <AnimatedBackground variant="sparse" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
            Transparent Pricing
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Custom solutions tailored to your business needs with clear, predictable pricing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 rounded-lg border-2 border-accent bg-background/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-accent/5 rounded-lg" />
            
            <div className="relative space-y-6">
              <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between pb-6 border-b border-accent/20">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Custom ChatBot Solution</h3>
                  <p className="text-foreground/70">Fully customized to your business needs</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">
                    Starting at <span className="text-accent">€1,000</span>
                  </div>
                  <div className="text-foreground/70">
                    + <span className="text-accent font-semibold">€150</span>/month
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">What&apos;s Included:</h4>
                <ul className="grid md:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-accent/20">
                <p className="text-foreground/70 text-sm">
                  * Final pricing may vary based on specific requirements, complexity, and integration needs. 
                  Contact us for a detailed quote tailored to your project.
                </p>
              </div>

              <div className="text-center pt-4">
                <a 
                  href="#contact"
                  className="inline-block neon-border px-8 py-4 text-center font-medium hover:bg-accent/10 transition-colors"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 