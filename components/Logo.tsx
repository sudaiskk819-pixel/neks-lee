export default function Logo({ size = 46 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 1200 1200" style={{ borderRadius: "12px", flexShrink: 0, display: "block" }}>
      <defs>
        <linearGradient id="orbit" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#00eaff" /><stop offset=".48" stopColor="#0878ff" /><stop offset="1" stopColor="#d000ff" /></linearGradient>
        <linearGradient id="metal" x1="0" y1="0" x2="0.9" y2="1"><stop offset="0" stopColor="#fff" /><stop offset=".45" stopColor="#b9c6e8" /><stop offset="1" stopColor="#eef4ff" /></linearGradient>
        <linearGradient id="blue" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#00efff" /><stop offset=".55" stopColor="#087dff" /><stop offset="1" stopColor="#3525df" /></linearGradient>
        <linearGradient id="purple" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#612cff" /><stop offset="1" stopColor="#f000df" /></linearGradient>
      </defs>
      <rect width="1200" height="1200" rx="80" fill="#030513" />
      <circle cx="600" cy="585" r="525" fill="none" stroke="url(#orbit)" strokeWidth="12" />
      <g transform="translate(0,-5)" stroke="#dceaff" strokeWidth="8" strokeLinejoin="round"><path d="M285 235 L325 145 L420 205 L485 65 L560 205 L650 135 L680 250 Q490 315 315 260 Z" fill="url(#metal)" /><path d="M315 260 Q495 325 680 250 L674 276 Q492 350 320 286 Z" fill="#8196c4" /></g>
      <g strokeLinejoin="round"><path d="M285 700 L325 315 Q332 270 375 300 L760 625 L760 315 L915 315 L915 770 L760 770 L450 510 L430 770 L285 770 Z" fill="url(#blue)" stroke="#00dfff" strokeWidth="8" /><path d="M360 315 L470 315 L790 600 L790 315 L900 315 L900 470 L790 470 L470 770 L330 770 L345 610 L650 610 Z" fill="url(#purple)" opacity=".88" /><path d="M380 310 L480 310 L785 575 L785 310 L890 310 L890 440 L785 440 L455 740 L350 740 L365 610 L665 610 Z" fill="url(#metal)" stroke="#eaf4ff" strokeWidth="7" /></g>
    </svg>
  );
}