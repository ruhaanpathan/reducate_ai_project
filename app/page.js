'use client';

import { useState, useCallback, useEffect } from 'react';
import SplashScreen from '@/components/SplashScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Features from '@/components/Features';
import Leaders from '@/components/Leaders';
import Faculty from '@/components/Faculty';
import Campus from '@/components/Campus';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = useCallback(() => {
    setShowSplash(false);
  }, []);

  // 🚀 Immersive UX: Disable browser scroll restoration on refresh and scroll to the top!
  // This guarantees that a page reload always loads fresh at scroll position 0,
  // ensuring the cinematic Splash Screen plays cleanly and the scroll-triggered 
  // counter animations execute in front of the user when they scroll down.
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="relative">
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      
      {/* Mount the landing page elements only AFTER the splash screen finishes!
          This prevents background timers, observers, and layouts from running prematurely. */}
      {!showSplash && (
        <div className="opacity-100 transition-opacity duration-700 animate-fadeIn">
          <Navbar />
          <Hero />
          <About />
          <Programs />
          <Features />
          <Leaders />
          <Faculty />
          <Campus />
          <Testimonials />
          <Partners />
          <CTA />
          <Footer />
          
          {/* Floating WhatsApp chat widget */}
          <WhatsAppButton />
        </div>
      )}
    </main>
  );
}
