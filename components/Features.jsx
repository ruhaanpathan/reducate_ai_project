'use client';

import { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const features = [
  {
    title: 'Interdisciplinary Approach',
    desc: 'Empowering students to study across business, engineering, and law streams for a comprehensive view of modern problems.',
    iconPath: 'M12 2L2 12l10 10 10-10L12 2zm0 4l6 6-6 6-6-6 6-6z',
    color: 'bg-rose-50 text-rose-600 border-rose-100/50'
  },
  {
    title: 'Immersive & Experiential Learning',
    desc: 'Nurturing students through live industry use-cases, practical laboratory experiments, and direct hands-on simulations.',
    iconPath: 'M12 22V12M12 12L3 7m9 5l9-5M12 2L3 7v10l9 5 9-5V7L12 2z',
    color: 'bg-amber-50 text-amber-600 border-amber-100/50'
  },
  {
    title: 'Whole Brain Pedagogy',
    desc: 'Fostering balanced analytical and creative thinking competencies through our specialized neuroscience-aligned coursework.',
    iconPath: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-20v20',
    color: 'bg-blue-50 text-blue-600 border-blue-100/50'
  },
  {
    title: 'Industry + Academia Faculty',
    desc: 'Learn directly from our blended faculty comprising esteemed research doctorates and prominent C-suite enterprise leaders.',
    iconPath: 'M12 2L2 7h20L12 2zm-8 9v10h16V11H4zm6 3h4v4h-4v-4z',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100/50'
  }
];

export default function Features() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.05 });

  return (
    <section id="features" ref={sectionRef} className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Subtle radial light dot in background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(138,21,56,0.02)_0%,_transparent_60%)]" />

      {/* Master fade-up layout wrapper driven by custom IntersectionObserver hook states */}
      <div 
        className={`max-w-7xl mx-auto relative z-10 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] mb-3 inline-block" style={{ color: '#8a1538' }}>
            Why JG University?
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-tight mb-4">
            Our Core <span style={{ color: '#8a1538' }}>Strengths</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A state-of-the-art tech-driven environment nurturing practical success, innovative research, and global competitiveness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 bg-white p-6 group hover:shadow-md transition-shadow duration-300"
            >
              {/* Colored Circle on Top */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${feature.color}`}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d={feature.iconPath} 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>

              <h3 className="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-jg-burgundy transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
