'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // 1. Scroll listener for sticky backdrop transition
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 2. High-performance scroll spy using IntersectionObserver
    // Avoids layout-thrashing offsetTop calls on scroll
    const sections = ['home', 'about', 'programs', 'features', 'leaders', 'faculty', 'campus', 'alumni'];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          // Trigger when the section occupies 45% of the viewport height
          rootMargin: '-25% 0px -45% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push({ observer, el });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach(({ observer, el }) => observer.unobserve(el));
    };
  }, []);

  const links = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Programmes', href: '#programs', id: 'programs' },
    { label: 'Why JGU', href: '#features', id: 'features' },
    { label: 'Leadership', href: '#leaders', id: 'leaders' },
    { label: 'Faculty', href: '#faculty', id: 'faculty' },
    { label: 'Campus', href: '#campus', id: 'campus' },
    { label: 'Alumni', href: '#alumni', id: 'alumni' },
  ];

  return (
    <>
      {/* Main Sticky Navbar with high-fidelity glassmorphic backdrop */}
      <nav id="main-navbar" className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${scrolled ? 'bg-white shadow-md py-1' : 'bg-white/90 shadow-sm py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            
            {/* Logo area */}
            <a href="#home" className="flex items-center gap-2.5 group flex-shrink-0">
              <img src="/jg-logo-animation.svg" alt="JG Logo Animation" className="h-11 sm:h-12 w-auto object-contain group-hover:scale-102 transition-transform duration-300" />
              <img src="/jg-logo.svg" alt="JG University" className="h-11 sm:h-12 w-auto object-contain group-hover:scale-102 transition-transform duration-300" />
            </a>

            {/* Desktop Links - Hidden below md breakpoint, visible on md and up */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
              {links.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative py-2 text-xs lg:text-sm font-bold transition-colors duration-250 ${isActive ? 'text-jg-burgundy' : 'text-gray-600 hover:text-jg-burgundy'}`}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-300"
                        style={{ backgroundColor: '#efa81d' }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA + Mobile Menu Button */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <a href="#cta" className="hidden sm:inline-flex items-center gap-2 px-4.5 py-2.5 rounded-md text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow"
                style={{ background: 'linear-gradient(135deg, #efa81d, #d4941a)' }}>
                Apply Now 2026–27
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              {/* Hamburger Icon using div elements - Visible below md breakpoint, hidden above */}
              <button 
                onClick={() => setMobileOpen(!mobileOpen)} 
                className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 rounded-lg border border-gray-100 bg-white hover:bg-gray-50 transition-all duration-200"
                aria-label="Toggle mobile navigation menu"
              >
                <div className={`w-5.5 h-0.5 rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: '#8a1538' }} />
                <div className={`w-5.5 h-0.5 rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: '#8a1538' }} />
                <div className={`w-5.5 h-0.5 rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: '#8a1538' }} />
              </button>
            </div>

          </div>
        </div>

        {/* 🚀 Mobile Slide-Down Dropdown Menu Panel - Visible below md breakpoint */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white border-t border-gray-100 px-6 py-5 space-y-1.5 shadow-inner">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)} // Close on any link click
                  className={`block py-3 px-4 rounded-xl transition-all duration-200 font-bold text-sm ${
                    isActive 
                      ? 'bg-jg-burgundy/5 text-jg-burgundy border-l-3 border-jg-burgundy pl-3' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-jg-burgundy'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a 
              href="#cta" 
              onClick={() => setMobileOpen(false)} // Close on CTA link click
              className="block mt-5 text-center py-3 px-5 rounded-xl text-sm font-semibold text-white shadow-sm hover:shadow transition-all"
              style={{ background: 'linear-gradient(135deg, #efa81d, #d4941a)' }}
            >
              Apply Now 2026–27
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
