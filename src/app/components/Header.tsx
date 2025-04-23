import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-glow">
          FLOWGENT
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm hover:text-accent transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm hover:text-accent transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm hover:text-accent transition-colors">
            Pricing
          </Link>
        </nav>

        <Link 
          href="#contact"
          className="neon-border px-6 py-2 text-sm font-medium hover:bg-accent/10 transition-colors"
        >
          Schedule a Demo
        </Link>
      </div>
    </header>
  );
} 