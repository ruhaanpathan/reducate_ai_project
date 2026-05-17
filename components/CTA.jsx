'use client';

import { useEffect, useRef, useState } from 'react';

function ChasingCursorCanvas({ active }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set high-DPI canvas dimensions
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Google Antigravity Auth-Success Vibrant Colors
    const colors = [
      '#4285F4', // Google Blue
      '#EA4335', // Google Red
      '#FBBC05', // Google Yellow
      '#34A853', // Google Green
      '#673AB7', // Elegant Purple
      '#E91E63'  // Vibrant Pink
    ];

    const particles = [];
    const particleCount = 180; // High density for the spiral arms

    // Initialize particles in concentric orbital shells around an offset center (right side)
    const initParticles = () => {
      particles.length = 0;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const centerX = w * 0.82; // Offset to the right exactly like Antigravity page
      const centerY = h * 0.5;

      for (let i = 0; i < particleCount; i++) {
        // Base orbit parameters
        const angle = Math.random() * Math.PI * 2;
        // Distribute radii so it creates a sweeping galaxy vortex effect across the page
        const r = Math.pow(Math.random(), 1.5) * (w * 0.85) + 30; 
        
        particles.push({
          x: centerX + Math.cos(angle) * r,
          y: centerY + Math.sin(angle) * r,
          px: centerX + Math.cos(angle) * r, // Previous X
          py: centerY + Math.sin(angle) * r, // Previous Y
          angle: angle,
          r: r,
          baseRadius: r,
          // Orbital angular speed: inner shells spin faster
          angularSpeed: (0.0012 + Math.random() * 0.0018) * (1 - Math.min(r / w, 0.85)),
          radialDrift: (Math.random() - 0.5) * 0.08,
          size: Math.random() * 2.8 + 1.2,
          color: colors[i % colors.length],
        });
      }
    };

    initParticles();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const centerX = w * 0.82;
      const centerY = h * 0.5;

      particles.forEach((p) => {
        // Store previous coordinates for the flying dash/comet tail rendering
        p.px = p.x;
        p.py = p.y;

        // 1. Vortex physics: Increment angle & drift radius
        p.angle += p.angularSpeed;
        p.r += p.radialDrift;

        // Keep radial boundaries
        if (p.r > w * 0.95) p.r = 30;
        if (p.r < 10) p.r = w * 0.95;

        // Target vortex coordinate
        let targetX = centerX + Math.cos(p.angle) * p.r;
        let targetY = centerY + Math.sin(p.angle) * p.r;

        // 2. Cursor repulsion / lens deflection effect
        if (mouseRef.current.active && mouseRef.current.x !== null) {
          const dx = targetX - mouseRef.current.x;
          const dy = targetY - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 220) {
            // Apply a strong magnetic push that warps the orbit around the cursor
            const pushForce = (220 - dist) / 220;
            const pushAngle = Math.atan2(dy, dx);
            targetX += Math.cos(pushAngle) * pushForce * 75;
            targetY += Math.sin(pushAngle) * pushForce * 75;
          }
        }

        // Interpolate current position to target for organic inertia easing
        p.x += (targetX - p.x) * 0.08;
        p.y += (targetY - p.y) * 0.08;

        // 3. Render high-fidelity comets / flying dashes
        ctx.beginPath();
        // Draw line from previous position to current to make it a beautiful dynamic dash
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size;
        ctx.lineCap = 'round';
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Re-initialize particles if window is resized to keep coordinates centered
    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

export default function CTA() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta" ref={sectionRef} className="py-20 lg:py-24 bg-white relative overflow-hidden text-center text-slate-800 border-t border-gray-100">
      {/* 🚀 Google Antigravity Auth-Success Full Background Vortex Replica */}
      <ChasingCursorCanvas active={visible} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`space-y-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'}`}>
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2"
            style={{ background: 'rgba(138,21,56,0.04)', border: '1px solid rgba(138,21,56,0.12)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[#8a1538] font-black">Admissions Open 2026–27</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
            Ready to Shape Your Future?
          </h2>

          {/* Subtext */}
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Admissions open for 2026–27 academic term. Join 5000+ alumni who chose excellence by choice at Gujarat's premier tech-driven campus.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 relative z-20">
            <a 
              href="#" 
              className="w-full sm:w-auto px-8 py-4 rounded-md text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #efa81d, #d4941a)' }}
            >
              Apply Now 2026–27
            </a>
            <a 
              href="#" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md text-sm font-bold text-[#8a1538] border border-[#8a1538]/20 hover:border-[#8a1538]/40 hover:bg-[#8a1538]/5 transition-all duration-200"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
