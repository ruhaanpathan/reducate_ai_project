'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const testimonials = [
  {
    name: 'Jigardan Gadhvi',
    role: 'Celebrity Singer & Artist',
    image: 'https://jguni.in/images/jigar-dan.jpg',
    text: 'As an artist and celebrity singer today, I owe a great deal to JG for shaping me into the person I am. The faculty members were more than just teachers; they served as mentors who supported and guided us at every step. The focus on arts and commerce gave me the perfect foundation.'
  },
  {
    name: 'Parth Rupareliya',
    role: 'Art Director',
    image: 'https://jguni.in/images/parth-ruparelia.jpg',
    text: 'JG offers an exceptional academic curriculum that balances both theoretical study and modern experiential labs. The faculty are highly experienced and dedicated to providing the personal support we needed to launch our creative careers.'
  },
  {
    name: 'Parth Raval',
    role: 'Creative Producer, Colors Gujarati',
    image: 'https://jguni.in/images/parth-raval.jpg',
    text: 'Creative production requires an adaptive mindset and multi-disciplinary knowledge. JG University’s academic environment supported my passions and goals, offering extensive platforms to build professional confidence.'
  },
  {
    name: 'Yatendra Sinh Joddha',
    role: 'Technical Lead, TCS',
    image: 'https://jguni.in/images/yatendra.jpg',
    text: 'My education at JG has played a pivotal role in shaping my career. The computing programme provided me with a strong foundation in software engineering, and the focus on hands-on practical training gave me real-world problem-solving competency.'
  },
  {
    name: 'Disha Thaker',
    role: 'Project Associate, Cognizant',
    image: 'https://jguni.in/images/disha-thaker.jpg',
    text: 'The tech training and placement preparedness sessions at JG prepared me to clear complex corporate interviews and enter Cognizant with confidence. The mock interview preparation was a absolute game-changer.'
  },
  {
    name: 'Krishna Soni',
    role: 'Assistant Manager, ICICI Bank',
    image: 'https://jguni.in/images/krishna-soni.jpg',
    text: 'The Management programme offers cutting-edge course design, top-notch industry teachers, and hands-on projects. I was consistently encouraged to push my boundaries and uncover business capabilities.'
  },
  {
    name: 'Aayushi Gor',
    role: 'HR Trainer, Godrej',
    image: 'https://jguni.in/images/aayushi-gor.jpg',
    text: 'The academic rigour and top-notch industry workshops enabled me to establish a strong corporate foundation. The emphasis on soft skills and public speaking made transitioning into corporate training perfectly seamless.'
  },
  {
    name: 'Shrushti Raval',
    role: 'Recruitment Consultant',
    image: 'https://jguni.in/images/shrusti-raval.jpg',
    text: 'JG provided excellent platforms to improve recruitment competency. The university’s active campus placement cell opened vast professional doors and paved the way for my recruiting career.'
  },
  {
    name: 'Parth Prajapati',
    role: 'Sr. BDM, KGL India',
    image: 'https://jguni.in/images/parth-praajapati.jpg',
    text: 'Developing a strategic perspective is highly essential in business development. JG University’s case-based training and intensive corporate interactions gave me a solid edge in actual field negotiations.'
  },
  {
    name: 'Chintan Vyas',
    role: 'Manager, Nexa',
    image: 'https://jguni.in/images/cintan-vyas.jpg',
    text: 'The university’s practical industry labs, regular corporate interactions, and internship program built the foundation for my sales and managerial career. Highly grateful to my mentors.'
  },
  {
    name: 'Stavan Doshi',
    role: 'Owner, The Golden Time',
    image: 'https://jguni.in/images/stavan-doshi.jpg',
    text: 'Succeeding in entrepreneurship demands practical understanding and a resilient network. JG provided all elements to transition to actual business management and launch my enterprise successfully.'
  },
  {
    name: 'Shayon Chakraborty',
    role: 'VP Regional Manager, Future Generali',
    image: 'https://jguni.in/images/shayon-chakraborthy.jpg',
    text: 'The advanced curriculum, leadership bootcamps, and executive grooming sessions prepared me to step into regional leadership. JG University empowers you to manage real enterprise risks.'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const sectionRef = useRef(null);
  
  // 🚀 Scroll-triggered visibility tracking using custom IntersectionObserver hook
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.05 });

  // Update visible items based on media query screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return testimonials.length - itemsPerSlide;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= testimonials.length - itemsPerSlide) {
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <section id="alumni" ref={sectionRef} className="py-16 md:py-20 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute left-10 top-1/4 w-[250px] h-[250px] rounded-full blur-[100px] opacity-[0.03] pointer-events-none" style={{ background: '#8a1538' }} />

      {/* 🚀 Master fade-up layout wrapper driven by custom IntersectionObserver hook states */}
      <div 
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        
        {/* Section Header with Carousel Nav Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            <span className="section-header-tag">Alumni Testimonials</span>
            <h2 className="section-title mb-2">What Our <span style={{ color: '#8a1538' }}>Alumni</span> Say</h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl leading-relaxed">
              Hear from our distinguished graduates leading change and driving innovations across global corporate sectors.
            </p>
          </div>

          {/* Carousel Buttons */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center text-jg-burgundy hover:border-jg-burgundy hover:bg-jg-burgundy/5 hover:scale-103 shadow-sm transition-all duration-200"
              aria-label="Previous Testimonial"
            >
              &larr;
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center text-jg-burgundy hover:border-jg-burgundy hover:bg-jg-burgundy/5 hover:scale-103 shadow-sm transition-all duration-200"
              aria-label="Next Testimonial"
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* 🚀 Sliding Testimonial Tray Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out -mx-3"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
          >
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="w-full md:w-1/2 lg:w-1/3 px-3 flex-shrink-0"
              >
                <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-[0_3px_10px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(138,21,56,0.06)] hover:border-jg-burgundy/15 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full min-h-[300px] group">
                  
                  {/* Testimonial Quote */}
                  <div>
                    {/* Double Quote Mark icon in JGU gold */}
                    <span className="text-[#efa81d] text-4xl font-serif leading-none select-none block mb-2">&ldquo;</span>
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-6 italic">
                      {t.text}
                    </p>
                  </div>
                  
                  {/* Alumni Profile Detail */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100 mt-auto">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-100 flex-shrink-0 shadow-sm">
                      <Image
                        src={t.image}
                        alt={`${t.name} Portrait`}
                        fill
                        sizes="48px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-heading font-extrabold text-sm text-gray-900 truncate group-hover:text-jg-burgundy transition-colors">{t.name}</h4>
                      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider truncate" style={{ color: '#efa81d' }}>
                        {t.role}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dot Indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: testimonials.length - itemsPerSlide + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              style={idx === currentIndex ? { backgroundColor: '#8a1538' } : {}}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
