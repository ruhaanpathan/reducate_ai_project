'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const partnerLogos = [
  { name: 'IBM', src: 'https://jguni.in/images/ibm.png' },
  { name: 'ISRO', src: 'https://jguni.in/images/isro.png' },
  { name: 'SAC', src: 'https://jguni.in/images/sac.png' },
  { name: 'Yudiz Solutions', src: 'https://jguni.in/images/yudiz.png' },
  { name: 'Dev IT', src: 'https://jguni.in/images/dev.png' },
  { name: 'Aventure Technology', src: 'https://jguni.in/images/aventure.png' },
  { name: 'Asian African Chamber', src: 'https://jguni.in/images/asian-african.png' },
  { name: 'Virtual Height', src: 'https://jguni.in/images/virtual-height.png' },
];

export default function Partners() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="partners" ref={sectionRef} className="py-16 md:py-20 bg-white overflow-hidden relative">
      {/* 🚀 Hover control stylesheet to pause the marquee dynamically */}
      <style>{`
        .marquee-wrapper:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <div className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-header-tag">Industry Collaborations</span>
          <h2 className="section-title">Our Partners & <span style={{ color: '#8a1538' }}>Collaborators</span></h2>
          <p className="section-subtitle">Bridging academic theory with enterprise success through world-class global alliances.</p>
        </div>
      </div>

      {/* 🚀 Seamless Infinite Horizontally Scrolling Partner Logo Marquee */}
      <div className={`marquee-wrapper relative flex w-full overflow-hidden py-4 transition-all duration-700 delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Soft fading edges for premium depth */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-content animate-scroll flex gap-6 pr-6 whitespace-nowrap">
          {/* Triple the logo array to guarantee a perfectly seamless infinite horizontal scroll loop */}
          {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center w-40 sm:w-48 h-20 sm:h-24 bg-white border border-gray-100 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_24px_rgba(138,21,56,0.06)] hover:border-jg-burgundy/10 hover:scale-103 transition-all duration-300 flex-shrink-0 px-4 group"
            >
              <div className="relative w-full h-10 sm:h-12">
                <Image
                  src={partner.src}
                  alt={`${partner.name} Corporate Logo`}
                  fill
                  sizes="(max-w-768px) 150px, 200px"
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
