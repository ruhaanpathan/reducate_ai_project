'use client';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] group">
      
      {/* 💎 Tooltip Container (Fades in from right-to-left on group hover) */}
      <div className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-md border border-slate-800">
        Chat with us
        {/* Subtle tooltip arrow pointing right */}
        <span className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[5px] border-l-slate-900" />
      </div>

      {/* 🚀 Circular Pulsing Green Button */}
      <a
        href="https://wa.me/917926300000?text=Hi%20I%20want%20to%20know%20more%20about%20JG%20University%20admissions."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-green-500 hover:text-green-600 shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Chat with JG University on WhatsApp"
      >
        
        {/* Subtle Ripple/Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25 -z-10" />

        {/* High-Fidelity Official WhatsApp SVG Icon (Solid White Speech Bubble + Green Phone Receiver) */}
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Solid White Speech Bubble (incorporates standard brand bubble tail) */}
          <path 
            d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.87.514 3.62 1.408 5.126L2 22l5.042-1.32C8.5 21.5 10.21 22 12.004 22c5.52 0 10-4.48 10-10.004C22.004 6.48 17.524 2 12.004 2z" 
            fill="white" 
          />
          {/* Phone receiver filled with currentColor (dynamically matches green background on hover) */}
          <path 
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.569-.347z" 
            fill="currentColor" 
          />
        </svg>
      </a>
    </div>
  );
}
