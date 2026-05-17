'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const sliderImages = [
  'https://jguni.in/images/Untitled-3.webp',
  'https://jguni.in/images/slider-thumbnail-1.jpg',
  'https://jguni.in/images/Untitled-12.webp',
  'https://jguni.in/images/Untitled-1.webp',
  'https://jguni.in/images/Untitled-4.webp',
  'https://jguni.in/images/Untitled-5.webp',
  'https://jguni.in/images/Untitled-8.webp'
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Stateful counters for the stats strip - initialized to 0
  const [colleges, setColleges] = useState(0);
  const [alumni, setAlumni] = useState(0);
  const [partners, setPartners] = useState(0);
  const [placement, setPlacement] = useState(0);

  // Refs for sliding and animation controls
  const statsRef = useRef(null);
  const observerRef = useRef(null);
  const hasAnimated = useRef(false);
  const slideTimerRef = useRef(null);

  // Auto-advance logic for the image slider (4 seconds)
  const startSliderTimer = () => {
    stopSliderTimer();
    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
  };

  const stopSliderTimer = () => {
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current);
    }
  };

  useEffect(() => { 
    setLoaded(true); 
    startSliderTimer();

    // 🚀 Explicitly force counters to 0 and unlock hasAnimated ref on fresh client mount
    setColleges(0);
    setAlumni(0);
    setPartners(0);
    setPlacement(0);
    hasAnimated.current = false;

    let collegesInterval;
    let alumniInterval;
    let partnersInterval;
    let placementInterval;

    // 🚀 High-Fidelity IntersectionObserver with custom setInterval counter increments
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true; // Lock animation so it only runs once!

          // Colleges counter (Target: 17, Step: 1 every 20ms)
          collegesInterval = setInterval(() => {
            setColleges((prev) => {
              if (prev >= 17) {
                clearInterval(collegesInterval);
                return 17;
              }
              return prev + 1;
            });
          }, 20);

          // Alumni counter (Target: 5000, Step: 100 every 20ms)
          alumniInterval = setInterval(() => {
            setAlumni((prev) => {
              if (prev >= 5000) {
                clearInterval(alumniInterval);
                return 5000;
              }
              return Math.min(prev + 100, 5000);
            });
          }, 20);

          // Partners counter (Target: 30, Step: 1 every 20ms)
          partnersInterval = setInterval(() => {
            setPartners((prev) => {
              if (prev >= 30) {
                clearInterval(partnersInterval);
                return 30;
              }
              return prev + 1;
            });
          }, 20);

          // Placement support counter (Target: 100, Step: 2 every 20ms)
          placementInterval = setInterval(() => {
            setPlacement((prev) => {
              if (prev >= 100) {
                clearInterval(placementInterval);
                return 100;
              }
              return Math.min(prev + 2, 100);
            });
          }, 20);
        }
      },
      { threshold: 0.05 }
    );

    if (statsRef.current) {
      observerRef.current.observe(statsRef.current);
    }

    return () => {
      // 🚀 Flawless memory leak prevention: disconnect observer & clear all running intervals on unmount
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearInterval(collegesInterval);
      clearInterval(alumniInterval);
      clearInterval(partnersInterval);
      clearInterval(placementInterval);
      stopSliderTimer();
    };
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    startSliderTimer(); // reset interval on user click
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    startSliderTimer(); // reset interval on user click
  };

  const handleDotClick = (idx) => {
    setCurrentSlide(idx);
    startSliderTimer(); // reset interval on user click
  };

  const stats = [
    { value: colleges, suffix: '+', label: 'Colleges & Schools' },
    { value: alumni, suffix: '+', label: 'Proud Alumni' },
    { value: partners, suffix: '+', label: 'Industry Partners' },
    { value: placement, suffix: '%', label: 'Placement Support' },
  ];

  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-white to-white">
      {/* 1. Gorgeous Warm Radial Gradient & Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-50/30 via-white to-white" />
      <div 
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(rgba(138,21,56,0.15) 1px, transparent 1px), linear-gradient(rgba(138,21,56,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(138,21,56,0.05) 1px, transparent 1px)',
          backgroundSize: '100px 100px, 20px 20px, 20px 20px'
        }}
      />

      {/* 2. Abstract Pastel Animated Blurred Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full blur-[100px] opacity-[0.08] animate-pulse"
          style={{
            background: 'radial-gradient(circle, #8a1538 0%, transparent 70%)',
            top: '15%',
            left: '10%',
            animationDuration: '8s'
          }}
        />
        <div 
          className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full blur-[90px] opacity-[0.06] animate-pulse"
          style={{
            background: 'radial-gradient(circle, #efa81d 0%, transparent 75%)',
            bottom: '20%',
            right: '15%',
            animationDuration: '12s',
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Hero Content Area: Luxurious Split Grid Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 flex-grow flex items-center w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Column: Vision, Text, and Primary CTAs */}
          <div className="lg:col-span-7 max-w-3xl space-y-6">
            {/* Eyebrow Label */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
              style={{ background: 'rgba(138,21,56,0.04)', border: '1px solid rgba(138,21,56,0.1)' }}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[#8a1538] text-[11px] sm:text-xs tracking-wider uppercase font-bold">UGC Approved &bull; NEP 2020 Compliant &bull; Est. 1965</span>
            </div>

            {/* Heading */}
            <h1 className={`font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.08] text-slate-900 transition-all duration-700 delay-150 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
              Shaping Tomorrow's
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a1538] via-[#a31a42] to-[#8a1538]">Leaders Today</span>
            </h1>

            {/* Subtitle */}
            <p className={`text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed transition-all duration-700 delay-300 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
              A New Age Tech-Driven University offering programs designed to evolve with future industry demands. Empowering global careers with knowledge beyond books since 1965.
            </p>

            {/* Action Buttons */}
            <div className={`flex flex-wrap gap-4 pt-2 transition-all duration-700 delay-[400ms] ${loaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
              <a href="#programs" className="px-8 py-3.5 rounded-md text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #8a1538, #6e1030)' }}>
                Explore Programmes
              </a>
              <a href="#about" className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-md text-sm font-bold text-[#8a1538] border border-[#8a1538]/20 hover:border-[#8a1538]/40 hover:bg-[#8a1538]/5 transition-all duration-200">
                Watch Our Story 
                <span className="text-xs">▶</span>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Framed React-Only Image Slider */}
          <div className={`lg:col-span-5 w-full transition-all duration-1000 delay-[200ms] ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <div className="relative h-[280px] sm:h-[380px] lg:h-[430px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-slate-50 group">
              
              {/* Slider Images with cross-fade transition */}
              {sliderImages.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <Image
                    src={imgUrl}
                    alt={`JG University Campus Life Slide ${idx + 1}`}
                    fill
                    sizes="(max-w-768px) 100vw, 40vw"
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>
              ))}

              {/* Prev / Next Arrow Buttons (Fade in on Hover) */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-gray-200/50 flex items-center justify-center text-slate-700 hover:bg-white hover:text-jg-burgundy transition-all duration-200 shadow-md group-hover:opacity-100 opacity-0"
                aria-label="Previous slide"
              >
                &larr;
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-gray-200/50 flex items-center justify-center text-slate-700 hover:bg-white hover:text-jg-burgundy transition-all duration-200 shadow-md group-hover:opacity-100 opacity-0"
                aria-label="Next slide"
              >
                &rarr;
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {sliderImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'w-6 bg-jg-gold' : 'w-2 bg-white/50 hover:bg-white'
                    }`}
                    aria-label={`Jump to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Top-Right Floating Accent Tag */}
              <div className="absolute top-4 right-4 z-20 bg-jg-burgundy/90 backdrop-blur-md text-white font-extrabold text-[10px] sm:text-xs px-3 py-1.5 rounded-full shadow-md">
                Campus Gallery
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Admissions Ticker Bar placed directly above the stats counters row */}
      <div className="relative overflow-hidden py-3 shadow-inner z-10 border-y border-yellow-200/50" style={{ background: '#efa81d' }}>
        <style>{`
          @keyframes scroll-announce {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-announce {
            animation: scroll-announce 25s linear infinite;
          }
          .announce-wrapper:hover .animate-announce {
            animation-play-state: paused;
          }
        `}</style>
        <div className="announce-wrapper flex w-[200%] overflow-hidden">
          <div className="animate-announce flex gap-12 whitespace-nowrap text-xs sm:text-sm font-semibold tracking-wider text-[#8a1538] uppercase">
            {[
              'Admissions Open Academic Year 2026–27',
              'UGC Approved & NEP 2020 Compliant Programs',
              'Apply for B.Tech · BBA (Hons) · BCA · MBA · MCA · B.Com',
              'ASIA Charitable Trust Legacy Since 1965',
              'Paid Industry Internships & Job Trainings Enabled',
              'Admissions Open Academic Year 2026–27',
              'UGC Approved & NEP 2020 Compliant Programs',
              'Apply for B.Tech · BBA (Hons) · BCA · MBA · MCA · B.Com',
              'ASIA Charitable Trust Legacy Since 1965',
              'Paid Industry Internships & Job Trainings Enabled'
            ].map((text, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="text-base">🎓</span>
                <span>{text}</span>
                <span className="mx-6 text-[#8a1538]/30">&bull;</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Counter Strip - Monitored by a single parent IntersectionObserver */}
      <div ref={statsRef} className="relative z-10 w-full bg-white/80 border-t border-gray-100 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-gray-100 md:divide-y-0 md:divide-x divide-gray-100">
            {stats.map((stat, i) => (
              <div key={i} className="py-6 sm:py-8 px-4 text-center">
                <div className="font-heading font-black text-2xl sm:text-3xl md:text-4xl mb-1.5 text-transparent bg-clip-text bg-gradient-to-r from-[#8a1538] to-[#efa81d]">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-slate-500 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling Indicator Arrow - Elevated to bottom-36 so it never overlaps the stats strip grid lines */}
      <div 
        className="absolute bottom-36 left-1/2 -translate-x-1/2 z-10 hidden lg:block pointer-events-none"
        style={{
          animation: 'indicator-bounce 2s infinite ease-in-out'
        }}
      >
        <svg className="w-5 h-5 text-slate-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      <style>{`
        @keyframes indicator-bounce {
          0%, 100% {
            transform: translate(-50%, 0);
          }
          50% {
            transform: translate(-50%, 10px);
          }
        }
      `}</style>
    </section>
  );
}
