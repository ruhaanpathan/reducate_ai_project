'use client';

import { useState, useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const programData = {
  undergraduate: [
    { name: 'BBA - 3 years, 6 semesters', href: 'https://jguni.in/bba.html' },
    { name: 'BBA (Hons) - 4 years, 8 semesters', href: 'https://jguni.in/bba.html' },
    { name: 'iMBA - 5 years, 10 semesters', href: 'https://jguni.in/imba.html' },
    { name: 'iMBA - Aviation, Hospitality & Travel Management - 5 years, 10 semesters', href: 'https://jguni.in/ibbambaaht.html' },
    { name: 'iMBA - International Trade & Finance - 5 years, 10 semesters', href: 'https://jguni.in/ibbamba.html' },
    { name: 'BBA (Hons) - International Trade & Finance - 4 years, 8 semesters', href: 'https://jguni.in/bba-hons-itrade&finance.html' },
    { name: 'B.Com - 3 years, 6 semesters', href: 'https://jguni.in/bcom.html' },
    { name: 'B.Com (Hons) - 4 years, 8 semesters', href: 'https://jguni.in/bcom.html' },
    { name: 'B.Com (Hons) with ACCA - 4 years, 8 semesters', href: 'https://jguni.in/bcom-hons-acca.html' },
    { name: 'BCA - 3 years, 6 semesters', href: 'https://jguni.in/bca.html' },
    { name: 'BCA (Hons) - 4 years, 8 semesters', href: 'https://jguni.in/bca.html' },
    { name: 'iMCA - 5 years, 10 semesters', href: 'https://jguni.in/imca.html' },
    { name: 'iMSc (IT) - 5 years, 10 semesters', href: 'https://jguni.in/imsc-it.html' },
    { name: 'iMSc (IT-Specialization) - 5 years, 10 semesters', href: 'http://sst.jguni.in' },
    { name: 'B.Sc.(Hons)/iMSc - Forensic Science & Technology - 3-5 years', href: 'https://jguni.in/bsc-hons-imsc-forensic-science.html' },
    { name: 'B.Sc.(Hons)/iMSc - Cyber & Digital Forensic - 3-5 years', href: 'https://jguni.in/bsc-hons-imsc-cyber-digital-forensic.html' },
    { name: 'B.Sc.(Hons)/iMSc - Quantum Computing - 3-5 years', href: 'https://jguni.in/bsc-hons-imsc-quantum-computing.html' },
    { name: 'B.Sc.(Hons)/iMSc - Mathematics & Computing - 3-5 years', href: 'https://jguni.in/bsc-hons-imsc-mathematics-computing.html' },
    { name: 'B.Sc.(Hons)/iMSc - Clinical Embryology & Reproductive Biology - 3-5 years', href: 'https://jguni.in/bsc-hons-imsc-clinical-embryology.html' },
    { name: 'B.Sc.(Hons)/iMSc - Food, Nutrition & Lifestyle Science - 3-5 years', href: 'https://jguni.in/bsc-hons-imsc-food-nutrition-lifestyle.html' },
    { name: 'B.Tech - Computer Science & Engineering - 4 years, 8 semesters', href: 'https://jguni.in/b-tech.html' },
    { name: 'B.Tech - Information Technology - 4 years, 8 semesters', href: 'https://jguni.in/b-tech-it.html' },
    { name: 'B.Tech - Artificial Intelligence & Data Science - 4 years, 8 semesters', href: 'https://jguni.in/btech-data-science.html' },
    { name: 'B.Tech - Artificial Intelligence & Machine Learning - 4 years, 8 semesters', href: 'https://jguni.in/btech-artificial-Intelligence.html' },
    { name: 'B.Tech - Computer Engineering - 4 years, 8 semesters', href: 'https://jguni.in/B.Tech%20%20Computer%20Engineering.html' },
    { name: 'B.Tech - CSE (AI) - 4 years, 8 semesters', href: 'https://jguni.in/B.Tech%20-%20CSE%20%5BAI%5D.html' },
    { name: 'B.Tech - CSE (AI & ML) - 4 years, 8 semesters', href: 'https://jguni.in/B.Tech%20-%20CSE%20%5BAI%20and%20ML%5D.html' },
    { name: 'B.Tech - CSE (Big Data Analytics) - 4 years, 8 semesters', href: 'https://jguni.in/B.Tech%20-%20CSE%20%5BBig%20Data%20Analytics%5D.html' },
    { name: 'LL.B. - 3 years, 6 semesters', href: 'https://jguni.in/llb.html' },
  ],
  postgraduate: [
    { name: 'MBA - 2 years, 4 semesters', href: 'https://jguni.in/mba.html' },
    { name: 'Masters in International Trade & Finance - 2 years, 4 semesters', href: 'https://jguni.in/MBA-Internation-Trade%20&-Finance.html' },
    { name: 'Masters in Aviation, Hospitality & Travel Management - 2 years, 4 semesters', href: 'https://jguni.in/MAHTM-Aviation-Hospitality-&-Travel-Management.html' },
    { name: 'M.Com (Hons) - 2 years, 4 semesters', href: 'https://jguni.in/mcom.html' },
    { name: 'MCA - 2 years, 4 semesters', href: 'https://jguni.in/mca.html' },
    { name: 'MCA - AI & Full Stack Development - 2 years, 4 semesters', href: 'https://jguni.in/mca.html' },
    { name: 'MSc (IT-Specialization) - 2 years, 4 semesters', href: 'http://sst.jguni.in' },
    { name: 'M.Sc. - Cyber Security & Digital Forensics - 2 years, 4 semesters', href: 'https://jguni.in/msc-cyber.html' },
    { name: 'M.Sc. - Forensic Science & Technology - 2 years, 4 semesters', href: 'https://jguni.in/msc-forensic.html' },
    { name: 'M.Sc. - Clinical Embryology & ART - 2 years, 4 semesters', href: 'https://jguni.in/msc-clinic.html' },
    { name: 'LL.M. - 2 years, 4 semesters', href: 'https://jguni.in/index.html' }
  ],
  doctoral: [
    { name: 'Ph.D. in Commerce', href: 'https://jguni.in/doctoral-programmes.html' },
    { name: 'Ph.D. in Management', href: 'https://jguni.in/doctoral-programmes.html' },
    { name: 'Ph.D. in Computing', href: 'https://jguni.in/doctoral-programmes.html' },
    { name: 'Ph.D. in Interdisciplinary', href: 'https://jguni.in/doctoral-programmes.html' },
    { name: 'Ph.D. in Law', href: 'https://jguni.in/doctoral-programmes.html' }
  ],
  certificate: [
    { name: 'Metaverse Program', href: 'https://jguni.in/metaverse.html' },
    { name: 'Data Science & AI-ML', href: 'https://jguni.in/data-science-ai-ml-&-deep-learning.html' },
    { name: 'Mobile Applications', href: 'https://jguni.in/mobile-applications.html' },
    { name: 'Blockchain Technology', href: 'https://jguni.in/blockchain.html' },
    { name: 'Digital Marketing', href: 'https://jguni.in/digital-marketing.html' },
    { name: 'Cyber Security Operations', href: 'https://jguni.in/cyber-security.html' },
    { name: 'Robotic Process Automation', href: 'https://jguni.in/robotic-process-automation.html' },
    { name: 'Industrial IoT Systems', href: 'https://jguni.in/industrial-internet-of-things.html' },
    { name: 'Full Stack Architect Program', href: 'https://jguni.in/full-stack-architect.html' },
    { name: 'Azure DevOps Practices', href: 'https://jguni.in/azure-devops.html' }
  ],
};

const tabs = [
  { key: 'undergraduate', label: 'Undergraduate', count: programData.undergraduate.length },
  { key: 'postgraduate', label: 'Postgraduate', count: programData.postgraduate.length },
  { key: 'doctoral', label: 'Doctoral', count: programData.doctoral.length },
  { key: 'certificate', label: 'Certificate', count: programData.certificate.length },
];

export default function Programs() {
  const [activeTab, setActiveTab] = useState('undergraduate');
  const sectionRef = useRef(null);
  
  // 🚀 Scroll-triggered visibility tracking using custom IntersectionObserver hook
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.05 });
  const [animKey, setAnimKey] = useState(0);

  const handleTabChange = (key) => { 
    setActiveTab(key); 
    setAnimKey(prev => prev + 1); 
  };

  return (
    <section id="programs" ref={sectionRef} className="section-padding bg-slate-50 relative overflow-hidden">
      
      {/* 🚀 Master fade-up layout wrapper driven by custom IntersectionObserver hook states */}
      <div 
        className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-10 sm:mb-12">
          <span className="section-header-tag">Academic Programmes</span>
          <h2 className="section-title">Explore Our <span style={{ color: '#8a1538' }}>Programmes</span></h2>
          <p className="section-subtitle">Industry-relevant programmes designed to evolve with future demand.</p>
        </div>

        {/* Tab bar with premium indicator styling */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`relative px-5 py-3 rounded-full text-xs sm:text-sm font-bold border transition-all duration-300 ${
                  isActive ? 'text-white border-transparent shadow-md' : 'text-gray-500 border-gray-200 bg-white hover:border-gray-300'
                }`}
                style={isActive ? { background: '#8a1538' } : {}}
              >
                {tab.label}
                <span className={`ml-2 text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Course Row Lists displayed in a highly readable CSS Grid */}
        <div 
          key={animKey} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {programData[activeTab].map((program, i) => (
            <a
              key={`${activeTab}-${i}`}
              href={program.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4.5 bg-white border border-gray-100 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-jg-burgundy/20 hover:shadow-md hover:scale-101 hover:translate-x-1 hover:text-blue-600 transition-all duration-300 group"
              style={{
                animation: `slideUp 0.35s ease-out ${i * 20}ms both`,
              }}
            >
              <div className="flex items-center gap-3 min-w-0">
                {/* Accent bullets */}
                <span className="w-1.5 h-1.5 rounded-full bg-jg-gold flex-shrink-0" />
                <span className="font-heading font-extrabold text-xs sm:text-sm text-gray-800 group-hover:text-blue-600 transition-colors leading-snug truncate">
                  {program.name}
                </span>
              </div>
              <span className="text-gray-300 group-hover:text-blue-600 font-extrabold text-sm sm:text-base transition-colors flex-shrink-0 ml-3">
                &rarr;
              </span>
            </a>
          ))}
        </div>

        {/* Specializations list */}
        <div className="mt-14">
          <h3 className="text-center font-heading font-black text-base sm:text-lg text-gray-900 mb-5">Emerging Tech & Professional Core</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {['Metaverse','Data Science & AI-ML','Mobile Applications','Blockchain','Digital Marketing','Cyber Security','Robotic Process Automation','Industrial IoT','Full Stack Architect','Azure DevOps'].map((spec, i) => (
              <span key={i} className="px-4 py-2 rounded-full text-[11px] sm:text-xs font-bold text-gray-500 border border-gray-200 bg-white hover:text-white hover:bg-jg-burgundy hover:border-jg-burgundy transition-all duration-200 cursor-default">
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
