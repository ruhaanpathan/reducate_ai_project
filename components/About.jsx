'use client';

import { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

// 💎 UGC Approved: Luxury certificate shield with gold star details
function UGCIcon() {
  return (
    <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ugc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8a1538" />
          <stop offset="100%" stopColor="#efa81d" />
        </linearGradient>
      </defs>
      <path d="M12 2L4 5V11C4 16.52 7.42 21.64 12 23C16.58 21.64 20 16.52 20 11V5L12 2Z" stroke="url(#ugc-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 11L11 13L15 9" stroke="#efa81d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="7" stroke="rgba(138, 21, 56, 0.15)" strokeWidth="1" />
    </svg>
  );
}

// 💎 NEP 2020: High-fidelity three-dimensional mortarboard graduation cap
function NEPIcon() {
  return (
    <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="nep-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#efa81d" />
          <stop offset="100%" stopColor="#8a1538" />
        </linearGradient>
      </defs>
      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#nep-grad)" fillOpacity="0.1" stroke="url(#nep-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10.25V16C6 18.2 8.7 20 12 20C15.3 20 18 18.2 18 16V10.25" stroke="#8a1538" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 7V13.5M22 13.5C22 14.3 21 15 20 15C19 15 18 14.3 18 13.5M22 13.5C22 12.7 21 12 20 12C19 12 18 12.7 18 13.5" stroke="#efa81d" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 💎 Since 1965: Legacy clock with golden pointers
function LegacyIcon() {
  return (
    <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="legacy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8a1538" />
          <stop offset="100%" stopColor="#efa81d" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="9" stroke="url(#legacy-grad)" strokeWidth="2" />
      <path d="M12 6V12L15.5 14" stroke="#efa81d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 2V4M12 20V22M4 12H2M22 12H20" stroke="rgba(138, 21, 56, 0.3)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 💎 17+ Colleges: Stately columns temple facade
function CollegesIcon() {
  return (
    <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="college-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#efa81d" />
          <stop offset="100%" stopColor="#8a1538" />
        </linearGradient>
      </defs>
      <path d="M12 2L2 7H22L12 2Z" fill="url(#college-grad)" fillOpacity="0.1" stroke="url(#college-grad)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M4 11V18M9 11V18M15 11V18M20 11V18" stroke="#8a1538" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 18H22M1 21H23" stroke="url(#college-grad)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  // 🚀 Scroll-triggered visibility tracking using custom IntersectionObserver hook
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.05 });

  const pills = [
    { title: 'UGC Approved', desc: 'Recognized under UGC Act', renderIcon: () => <UGCIcon /> },
    { title: 'NEP 2020', desc: 'Compliant pedagogy system', renderIcon: () => <NEPIcon /> },
    { title: 'Since 1965', desc: 'Decades of trusted heritage', renderIcon: () => <LegacyIcon /> },
    { title: '17+ Colleges', desc: 'Part of vast academic trust', renderIcon: () => <CollegesIcon /> },
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      
      {/* 🚀 Master fade-up layout wrapper driven by custom IntersectionObserver hook states */}
      <div 
        className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div>
            <span className="section-header-tag">About JG University</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-gray-900 leading-tight mb-4">
              A New Age <span style={{ color: '#8a1538' }}>Tech-Driven</span> University
            </h2>
            <p className="text-gray-500 text-base sm:text-[0.98rem] leading-relaxed max-w-2xl mb-4">
              JG University offers programmes that evolve with future industry demands — enabling seamless entry into high-growth employment or self-employment. Sponsored by the prestigious ASIA Charitable Trust, which has been operating with academic excellence since 1965, the trust manages 17 colleges and 3 schools.
            </p>
            <div className="pt-2">
              <a href="#about" className="relative text-xs sm:text-sm font-bold inline-flex items-center gap-2 group" style={{ color: '#8a1538' }}>
                Learn More
                <span className="group-hover:translate-x-1 transition-transform duration-250">&rarr;</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-jg-gold scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300" />
              </a>
            </div>
          </div>

          {/* Improved Premium Feature Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {pills.map((pill, i) => (
              <div key={i} className="flex items-center gap-4 p-4.5 bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 hover:border-jg-gold rounded-xl shadow-[0_3px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(138,21,56,0.06)] group hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50 group-hover:scale-105 group-hover:border-jg-gold/30 transition-all duration-300">
                  {pill.renderIcon()}
                </div>
                <div>
                  <div className="text-gray-900 font-extrabold text-xs sm:text-sm group-hover:text-jg-burgundy transition-colors">{pill.title}</div>
                  <div className="text-gray-400 text-[10px] sm:text-xs font-semibold">{pill.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
