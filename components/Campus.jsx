'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

// 💎 IIoT Lab: Stately networked telemetry dome with gold signal rings
function IIoTLabIcon() {
  return (
    <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="iiot-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#efa81d" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="9" stroke="url(#iiot-grad)" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M12 8V12L15 14" stroke="#efa81d" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" fill="#ffffff" />
      <circle cx="12" cy="4" r="1.5" fill="#efa81d" />
      <circle cx="4" cy="12" r="1.5" fill="#efa81d" />
      <circle cx="20" cy="12" r="1.5" fill="#efa81d" />
    </svg>
  );
}

// 💎 R&D Incubation: Smart lightbulb rising from a precise micro gear
function IncubationIcon() {
  return (
    <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="inc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#efa81d" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <path d="M9 18h6M10 21h4M12 3a7 7 0 00-7 7c0 2.77 1.62 5.17 4 6.3V18h6v-1.7c2.38-1.13 4-3.53 4-6.3a7 7 0 00-7-7z" stroke="url(#inc-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 7v4M9.5 9.5h5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 💎 Tech Library: Open book casting soft gold digital waves
function LibraryIcon() {
  return (
    <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lib-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#efa81d" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="url(#lib-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 2v15H20V2H6z" fill="url(#lib-grad)" fillOpacity="0.1" stroke="url(#lib-grad)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 6h6M9 10h6" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 💎 Wi-Fi Campus: Propagating spherical antenna signals
function WifiIcon() {
  return (
    <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wifi-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#efa81d" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <path d="M12 18h.01M8.5 14.5a5 5 0 017 0M5 11a10 10 0 0114 0M1.5 7.5a15 15 0 0121 0" stroke="url(#wifi-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const facilities = [
  { title: 'IIoT Lab', desc: 'Industrial Internet of Things laboratory with cutting-edge equipment.', renderIcon: () => <IIoTLabIcon /> },
  { title: 'R&D + Incubation', desc: 'Research center with startup incubation support for entrepreneurs.', renderIcon: () => <IncubationIcon /> },
  { title: 'Tech-enabled Library', desc: 'Digital library with e-resources, journals, and collaborative spaces.', renderIcon: () => <LibraryIcon /> },
  { title: 'Wi-Fi Campus', desc: 'Full campus Wi-Fi with high-speed connectivity for seamless learning.', renderIcon: () => <WifiIcon /> },
];

const galleryImages = [
  'https://jguni.in/images/campus/3.jpg',
  'https://jguni.in/images/campus/4.jpg',
  'https://jguni.in/images/campus/5.jpg',
  'https://jguni.in/images/campus/6.jpg',
  'https://jguni.in/images/campus/7.jpg',
  'https://jguni.in/images/campus/8.jpg',
  'https://jguni.in/images/campus/9.jpg',
  'https://jguni.in/images/campus/10.jpg',
  'https://jguni.in/images/campus/11.jpg',
  'https://jguni.in/images/campus/12.jpg',
  'https://jguni.in/images/campus/13.jpg',
  'https://jguni.in/images/CRM08261-fin.webp',
  'https://jguni.in/images/CRM0SCENE.webp',
  'https://jguni.in/images/CRM08304-fin.webp',
  'https://jguni.in/images/CRM08212-fin.webp',
  'https://jguni.in/images/CRM08255-fin.webp'
];

export default function Campus() {
  const sectionRef = useRef(null);
  // 🚀 Scroll-triggered visibility tracking using custom IntersectionObserver hook
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.05 });
  const [selectedImage, setSelectedImage] = useState(null); // Active image for the lightbox view

  return (
    <section id="campus" ref={sectionRef} className="section-padding bg-gray-50 relative overflow-hidden">
      
      {/* Background visual accents */}
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] rounded-full blur-[120px] opacity-[0.03] pointer-events-none" style={{ background: '#efa81d' }} />

      {/* 🚀 Master fade-up layout wrapper driven by custom IntersectionObserver hook states */}
      <div 
        className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-10 sm:mb-14">
          <span className="section-header-tag">Our Campus</span>
          <h2 className="section-title">World-Class <span style={{ color: '#8a1538' }}>Infrastructure</span></h2>
          <p className="section-subtitle">State-of-the-art facilities designed for innovation, creativity, and academic excellence.</p>
        </div>

        {/* 🚀 Grid of Facilities Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((f, i) => (
            <div key={i} className="rounded-2xl overflow-hidden group transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="p-7 h-full flex flex-col justify-between text-white min-h-[220px] sm:min-h-[240px] shadow-sm"
                style={{ background: 'linear-gradient(135deg, #8a1538 0%, #6e1030 100%)' }}>
                
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-5 group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                  {f.renderIcon()}
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg mb-1.5">{f.title}</h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🚀 Facts Banner container */}
        <div className="mt-12 bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[{ label: 'Smart Campus Acres', value: '10+' }, { label: 'Smart Classrooms', value: '50+' }, { label: 'Advanced Computer Labs', value: '8' }, { label: 'Auditorium Capacity', value: '500+' }].map((item, i) => (
              <div key={i} className="text-center">
                <div className="font-heading font-extrabold text-2xl sm:text-3xl mb-1" style={{ color: '#8a1538' }}>{item.value}</div>
                <div className="text-gray-400 text-[10px] sm:text-xs font-semibold tracking-wide uppercase">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 🚀 Real Campus Photo Gallery Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="section-header-tag">Media Gallery</span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900 mb-2">Campus <span style={{ color: '#8a1538' }}>Gallery</span></h3>
            <p className="text-gray-500 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
              Explore actual photographs of our modern laboratories, architectural landmarks, study hubs, and dynamic student spaces.
            </p>
          </div>

          {/* Interactive Responsive Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((imgUrl, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(imgUrl)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group shadow-sm border border-gray-100 bg-white hover:shadow-md hover:border-jg-burgundy/10 transition-all duration-300"
              >
                <Image
                  src={imgUrl}
                  alt={`JG University Campus View ${index + 1}`}
                  fill
                  sizes="(max-w-768px) 50vw, (max-w-1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Custom hover magnification glassmorphic overlay */}
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🚀 Fully Responsive Full-Screen Image Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-zoom-out animate-fadeIn"
        >
          {/* Close Trigger Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold border border-white/10 shadow-lg transition-all duration-200 cursor-pointer"
            aria-label="Close gallery lightbox"
          >
            &times;
          </button>

          {/* Large image display box */}
          <div 
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking directly on the image
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center cursor-default animate-scaleUp"
          >
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Enlarged Campus Photograph View"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
