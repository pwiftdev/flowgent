'use client';

interface AnimatedBackgroundProps {
  variant?: 'default' | 'sparse' | 'dense';
  className?: string;
}

export default function AnimatedBackground({ variant = 'default', className = '' }: AnimatedBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
      {/* Grid pattern */}
      <div className="absolute inset-0 grid grid-cols-6 gap-4 opacity-10">
        {[...Array(variant === 'dense' ? 48 : 24)].map((_, i) => (
          <div key={i} className="h-8 bg-accent/10 rounded-sm" />
        ))}
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0">
        {/* Hexagons */}
        {variant !== 'sparse' && (
          <>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 animate-float-slow">
              <div className="w-full h-full border-2 border-accent/30 transform rotate-45 animate-spin-slow" />
              <div className="absolute inset-2 border-2 border-accent/20 transform rotate-[30deg] animate-spin-reverse" />
              <div className="absolute inset-4 border-2 border-accent/10 transform rotate-[60deg] animate-spin-slow" />
            </div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 animate-float">
              <div className="w-full h-full border-2 border-accent/20 transform rotate-45 animate-spin-slow" />
              <div className="absolute inset-2 border-2 border-accent/10 transform rotate-[60deg] animate-spin-reverse" />
            </div>
          </>
        )}

        {/* Floating circles */}
        {[...Array(variant === 'dense' ? 5 : 3)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              animationDelay: `${i * 0.5}s`,
              left: `${30 + i * 15}%`,
              top: `${20 + i * 20}%`
            }}
          >
            <div 
              className="rounded-full border-2 border-accent/20 absolute transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
              style={{
                width: `${100 + i * 40}px`,
                height: `${100 + i * 40}px`,
              }}
            />
          </div>
        ))}

        {/* Glowing orbs */}
        <div className="absolute top-1/3 right-1/3 animate-float-slow">
          <div className="w-16 h-16 rounded-full bg-accent/10 filter blur-lg" />
          <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-accent animate-pulse" />
        </div>

        {/* Additional decorative elements for dense variant */}
        {variant === 'dense' && (
          <>
            <div className="absolute bottom-1/4 left-1/3 w-48 h-48 opacity-30 animate-spin-slow">
              <div className="absolute inset-0 border-2 border-accent/20 transform rotate-45" />
              <div className="absolute inset-8 border-2 border-accent/10 transform rotate-[30deg]" />
            </div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 opacity-20 animate-spin-reverse">
              <div className="absolute inset-0 border-2 border-accent/20 transform rotate-[60deg]" />
            </div>
          </>
        )}
      </div>
    </div>
  );
} 