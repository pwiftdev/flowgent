'use client';

import styles from './GradientBackground.module.css';

interface GradientBackgroundProps {
  children: React.ReactNode;
}

export default function GradientBackground({ children }: GradientBackgroundProps) {
  return (
    <div className={styles.gradientContainer}>
      <div className={styles.gradientBackground} />
      <div className="relative">
        {children}
      </div>
    </div>
  );
} 