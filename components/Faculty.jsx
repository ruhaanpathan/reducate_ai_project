'use client';

import { useRef } from 'react';
import Image from 'next/image';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const facultyData = [
  { name: "Dr. Namika Patel", school: "School of Management", image: "https://jguni.in/images/namika.jpg" },
  { name: "Dr. Hitesh Harwani", school: "School of Management", image: "https://jguni.in/images/hitesh.jpg" },
  { name: "CA CPA Harshil Trivedi", school: "School of Commerce", image: "https://jguni.in/images/harshil-trivedi.jpg" },
  { name: "Dr. Megha Bhatt", school: "School of Commerce", image: "https://jguni.in/images/megha-bhatt.jpg" },
  { name: "Dr. S Pushpalatha", school: "School of Computing", image: "https://jguni.in/images/s-pushpalatha.jpg" },
  { name: "Dr. Mona Shah", school: "School of Computing", image: "https://jguni.in/images/mona-shah.jpg" },
  { name: "Prof. Niku Brahmbhatt", school: "School of Computing", image: "https://jguni.in/images/niku-brahmbhatt.jpg" },
  { name: "Dr. Vaibhav Shah", school: "Registrar, School of Management", image: "https://jguni.in/images/vaibhav-shah.jpg" },
  { name: "CA Parag Soni", school: "School of Commerce", image: "https://jguni.in/images/parag-soni.jpg" },
  { name: "Dr. Sanjay Christian", school: "School of Management", image: "https://jguni.in/images/sanjay-christian.jpg" },
  { name: "Prof. Dinesh Patel", school: "School of Commerce", image: "https://jguni.in/images/dinesh-patel.jpg" },
  { name: "Prof. Nirali Kansara", school: "School of Computing", image: "https://jguni.in/images/nirali-kansara.jpg" }
];

export default function Faculty() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.05 });

  return (
    <section id="faculty" ref={sectionRef} className="section-padding bg-slate-50 relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(138,21,56,0.01)_0%,_transparent_70%)]" />
      
      <div 
        className={`max-w-7xl mx-auto relative z-10 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] mb-3 inline-block" style={{ color: '#8a1538' }}>
            Academic Excellence
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-tight mb-4">
            Distinguished <span style={{ color: '#8a1538' }}>Faculty</span>
          </h2>
          <p className="text-slate-500 text-base max-w-2xl leading-relaxed">
            Learn from inspiring mentors and esteemed scholars who bring deep research perspectives and high-caliber corporate wisdom directly to you.
          </p>
        </div>

        {/* Responsive Grid: Horizontally scrollable row on mobile, 4-column grid on desktop */}
        <div 
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {facultyData.map((faculty, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 md:w-auto snap-start flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-[100px] h-[100px] mb-4">
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-heading font-medium text-slate-900 text-base mb-1 leading-snug">
                {faculty.name}
              </h3>
              <p className="text-slate-400 text-xs font-semibold">
                {faculty.school}
              </p>
            </div>
          ))}
        </div>

        {/* View All Faculty Link bottom-right */}
        <div className="flex justify-end mt-8">
          <a
            href="https://jguni.in/faculty.html"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-xs sm:text-sm font-bold inline-flex items-center gap-2 group"
            style={{ color: '#8a1538' }}
          >
            View All Faculty
            <span className="group-hover:translate-x-1 transition-transform duration-250">&rarr;</span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-jg-gold scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300" />
          </a>
        </div>
      </div>
      
      <style>{`
        /* Hide scrollbars dynamically */
        #faculty ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
