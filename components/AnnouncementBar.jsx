'use client';

export default function AnnouncementBar() {
  const announcements = [
    'Admissions Open Academic Year 2026–27',
    'UGC Approved & NEP 2020 Compliant Programs',
    'Apply for B.Tech · BBA (Hons) · BCA · MBA · MCA · B.Com',
    'ASIA Charitable Trust Legacy Since 1965',
    'Paid Industry Internships & Job Trainings Enabled',
  ];

  return (
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
        <div className="animate-announce flex gap-12 whitespace-nowrap text-xs sm:text-sm font-semibold tracking-wider text-jg-burgundy-dark uppercase">
          {[...announcements, ...announcements].map((text, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="text-base">🎓</span>
              <span>{text}</span>
              <span className="mx-6 text-jg-burgundy-dark/30">&bull;</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
