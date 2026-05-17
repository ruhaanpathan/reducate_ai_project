'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-700 border-t border-slate-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          
          {/* Column 1: Logo & Address */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 bg-slate-50 p-2 rounded-xl border border-slate-100 inline-flex">
              <img src="/jg-logo-animation.svg" alt="JG Logo Animation" className="h-12 w-auto object-contain" />
              <img src="/jg-logo.svg" alt="JG University" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm">
              A New Age Tech-Driven University designed to match everyday global challenges while nurturing academic brilliance. UGC approved & sponsored by ASIA Charitable Trust since 1965.
            </p>
            <div className="text-slate-600 text-xs sm:text-sm pt-2">
              <span className="font-bold text-slate-800 block mb-1">Campus Address:</span>
              📍 Near Nirma University, S.G. Highway, Chharodi, Ahmedabad - 382481
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-black text-slate-900 text-xs sm:text-sm mb-4 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Programmes', href: '#programs' },
                { label: 'Leadership', href: '#leaders' },
                { label: 'Campus Life', href: '#campus' },
                { label: 'Alumni Stories', href: '#testimonials' },
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-slate-500 text-xs sm:text-sm hover:text-jg-burgundy transition-colors duration-250 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programmes */}
          <div>
            <h4 className="font-heading font-black text-slate-900 text-xs sm:text-sm mb-4 uppercase tracking-widest">
              Programmes
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'MBA (Postgraduate)', href: '#programs' },
                { label: 'BBA / BBA (Hons)', href: '#programs' },
                { label: 'BCA / BCA (Hons)', href: '#programs' },
                { label: 'B.Tech CSE', href: '#programs' },
                { label: 'MCA (Tech Specialist)', href: '#programs' },
                { label: 'B.Com (Professional)', href: '#programs' },
                { label: 'LL.B. (Law Sector)', href: '#programs' },
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-slate-500 text-xs sm:text-sm hover:text-jg-burgundy transition-colors duration-250 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="space-y-5">
            <div>
              <h4 className="font-heading font-black text-slate-900 text-xs sm:text-sm mb-4 uppercase tracking-widest">
                Contact Info
              </h4>
              <ul className="space-y-2.5 text-slate-500 text-xs sm:text-sm">
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <span>+91-79-2630 XXXX</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✉</span>
                  <a href="mailto:info@jguni.in" className="hover:text-jg-burgundy transition-colors">
                    info@jguni.in
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="space-y-2">
              <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Follow Us</h5>
              <div className="flex items-center gap-3">
                {[
                  {
                    name: 'LinkedIn',
                    renderIcon: () => (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    )
                  },
                  {
                    name: 'Instagram',
                    renderIcon: () => (
                      <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    )
                  },
                  {
                    name: 'Facebook',
                    renderIcon: () => (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )
                  },
                  {
                    name: 'YouTube',
                    renderIcon: () => (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.163c-.272-1.022-1.074-1.824-2.096-2.096C19.558 3.5 12 3.5 12 3.5s-7.558 0-9.402.567C1.776 4.339.974 5.141.702 6.163 0 8.008 0 12 0 12s0 3.992.702 5.837c.272 1.022 1.074 1.824 2.096 2.096C4.442 20.5 12 20.5 12 20.5s7.558 0 9.402-.567c1.022-.272 1.824-1.074 2.096-2.096C24 15.992 24 12 24 12s0-3.984-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    )
                  }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href="#" 
                    className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 hover:border-jg-burgundy/30 hover:bg-[#8a1538]/5 flex items-center justify-center text-slate-500 hover:text-jg-burgundy transition-all duration-300"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.renderIcon()}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-100 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-400 text-[11px] sm:text-xs">
            &copy; {currentYear} JG University &bull; All Rights Reserved &bull; Designed with ♥ in Ahmedabad
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-slate-400">
            <a href="#" className="hover:text-jg-burgundy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-jg-burgundy transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-jg-burgundy transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
