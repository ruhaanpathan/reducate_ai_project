'use client';

import { useState, useEffect } from 'react';

export default function SplashScreen({ onFinish }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // 1. Splash screen animation sequence timers
    const timers = [
      setTimeout(() => setPhase(1), 2000),   // Text appears
      setTimeout(() => setPhase(2), 5000),   // Tagline appears  
      setTimeout(() => setPhase(3), 8000),   // Start fade out (after animation completes)
      setTimeout(() => onFinish(), 8800),    // Remove splash
    ];
    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${
        phase >= 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ background: '#ffffff' }}
    >
      <div className="flex flex-col items-center">
        {/* Animated JG Logo - plays its full draw animation */}
        <div className={`transition-all duration-1000 ${phase >= 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <img
            src="/jg-logo-animation.svg"
            alt="JG University Logo Animation"
            className="w-36 h-40 sm:w-48 sm:h-52 object-contain"
          />
        </div>

        {/* University Text */}
        <div className={`mt-3 text-center transition-all duration-700 ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="font-heading font-black text-3xl sm:text-4xl tracking-tight" style={{ color: '#c21400' }}>
            UNIVERSITY
          </div>
        </div>

        {/* Tagline */}
        <div className={`mt-2 transition-all duration-500 ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase" style={{ color: '#d1ad3e' }}>
            Excellence by Choice
          </span>
        </div>

        {/* Loading bar - synced to animation duration */}
        <div className="mt-8 w-48 h-0.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all ease-linear"
            style={{
              background: 'linear-gradient(90deg, #c21400, #d1ad3e)',
              width: phase >= 3 ? '100%' : phase >= 2 ? '75%' : phase >= 1 ? '35%' : '10%',
              transitionDuration: phase >= 2 ? '3000ms' : '2000ms',
            }}
          />
        </div>
      </div>
    </div>
  );
}
