'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const leaders = [
  {
    name: 'M.P Chandran',
    role: 'President, JG University & ASIA Charitable Trust',
    initials: 'MPC',
    bg: '#8a1538',
    image: 'https://jguni.in/images/m-p-chandran.jpg',
    bio: 'A visionary educationist with over 30 years of experience in senior and board-level positions across India and abroad. He chairs the ASIA Charitable Trust which runs 17 colleges, 3 schools, and JG University.',
    fullMessage: `Dear Students and Partners,
 
Our vision at JG University is to deliver education that remains relevant to tomorrow's global challenges. The rapidly changing technological landscape requires a complete re-engineering of the standard curriculum. We do not just teach academic content; we cultivate leadership, ethical responsibility, and the capacity to innovate on choice.

Having served the educational sector since 1965, the ASIA Charitable Trust remains committed to building standard-setting institutions that offer world-class experiential learning. I invite you to join us on this exciting journey of discovery, growth, and excellence.

Warm regards,
M.P Chandran
President, JG University`
  },
  {
    name: 'Dr. CA Achyut Dani',
    role: 'Director-General & Provost, JG University',
    initials: 'AD',
    bg: '#efa81d',
    image: 'https://jguni.in/images/achyut-dani.jpg',
    bio: 'An eminent academician and researcher with 21 years of expertise in institutional development, commerce, and management. He leads academic and strategic initiatives ensuring our programmes stay connected to global research and industry.',
    fullMessage: `Dear Aspiring Learners,
 
Modern industry demands adaptive minds. At JG University, our core pedagogy aligns directly with whole-brain development, experiential and immersive teaching methods, and extensive practical exposure. We bridge the gap between academic theory and actual corporate application.

By collaborating with global alliances, corporate incubation laboratories, and paid industrial internships, we prepare our graduates to hit the ground running from day one. I welcome you to explore our highly specialized curriculum and experience our world-class smart campus first-hand.

Best wishes,
Dr. CA Achyut Dani
Director-General & Provost`
  },
];

export default function Leaders() {
  const sectionRef = useRef(null);
  // 🚀 Scroll-triggered visibility tracking using custom IntersectionObserver hook
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.05 });
  const [activeLeader, setActiveLeader] = useState(null); // Active leader for the modal message popup

  return (
    <section id="leaders" ref={sectionRef} className="section-padding bg-gray-50 relative z-25 overflow-hidden">
      
      {/* 🚀 Master fade-up layout wrapper driven by custom IntersectionObserver hook states */}
      <div 
        className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-header-tag">University Leadership</span>
          <h2 className="section-title">Guiding Our <span style={{ color: '#8a1538' }}>Vision</span></h2>
          <p className="section-subtitle">Dedicated leaders driving academic excellence, strategic growth, and student-focused innovations.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 shadow-sm group hover:shadow-md hover:-translate-y-1 transition-all duration-550"
            >
              {/* Profile Image - Using Next.js Image with requested dimensions and rounded styling */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="relative w-[120px] h-[120px] group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={leader.image}
                    alt={`${leader.name} Headshot`}
                    width={120}
                    height={120}
                    className="rounded-full object-cover shadow-md border border-gray-100"
                  />
                </div>
              </div>

              {/* Bio & Details */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-gray-900 mb-1 group-hover:text-jg-burgundy transition-colors duration-250">
                    {leader.name}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#efa81d' }}>
                    {leader.role}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {leader.bio}
                  </p>
                </div>

                <div>
                  <button 
                    onClick={() => setActiveLeader(leader)}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold hover:underline transition-all duration-200" 
                    style={{ color: '#8a1538' }}
                  >
                    View Full Message →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 💎 Luxurious Glassmorphic Modal Slide-Up Message Dialog */}
      {activeLeader && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-2xl border border-slate-100 max-w-xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden animate-slideUp">
            
            {/* Header branding accents */}
            <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: `linear-gradient(90deg, #8a1538, #efa81d)` }} />
            
            {/* Close Button */}
            <button 
              onClick={() => setActiveLeader(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-lg font-bold"
              aria-label="Close message"
            >
              &times;
            </button>

            {/* Profile Detail */}
            <div className="flex items-center gap-4 mb-6 pt-2">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src={activeLeader.image}
                  alt={`${activeLeader.name} Headshot`}
                  width={48}
                  height={48}
                  className="rounded-full object-cover shadow-sm border border-gray-100"
                />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-base text-gray-900">{activeLeader.name}</h4>
                <p className="text-xs font-semibold text-slate-500">{activeLeader.role}</p>
              </div>
            </div>

            {/* Scrollable Message Box */}
            <div className="max-h-[300px] overflow-y-auto pr-2 mb-6">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line italic">
                {activeLeader.fullMessage}
              </p>
            </div>

            {/* Action close footer */}
            <div className="flex justify-end pt-4 border-t border-gray-100">
              <button 
                onClick={() => setActiveLeader(null)}
                className="px-6 py-2.5 rounded-md text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                style={{ background: 'linear-gradient(135deg, #8a1538, #6e1030)' }}
              >
                Close Message
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
