"use client";

import { motion } from "framer-motion";

const ROUTES = [
  { path: "M 60,220 C 120,200 180,180 240,170 C 300,160 360,140 420,120", color: "#10b981", dur: "8s", delay: "0s" },
  { path: "M 80,80 C 140,90 200,110 260,130 C 320,150 380,170 440,190", color: "#10b981", dur: "10s", delay: "1.5s" },
  { path: "M 400,250 C 340,230 280,210 220,200 C 160,190 100,180 50,170", color: "#f59e0b", dur: "12s", delay: "0.8s" },
  { path: "M 240,40 C 250,100 260,160 270,220 C 280,260 290,290 300,300", color: "#10b981", dur: "9s", delay: "2s" },
  { path: "M 30,140 L 120,145 L 210,150 L 300,155 L 390,160 L 460,165", color: "#10b981", dur: "7s", delay: "3s" },
];

const BLOCKS: [number, number, number, number][] = [
  [20, 160, 55, 45], [85, 155, 40, 50], [135, 165, 50, 40],
  [195, 150, 45, 55], [250, 160, 35, 45], [295, 155, 50, 50],
  [355, 165, 45, 40], [410, 150, 55, 55], [20, 220, 60, 50],
  [90, 230, 45, 45], [145, 225, 50, 50], [210, 235, 40, 40],
  [260, 220, 55, 55], [325, 230, 45, 45], [380, 225, 50, 50],
  [20, 50, 50, 40], [80, 45, 45, 50], [135, 55, 50, 40],
  [200, 50, 40, 45], [380, 50, 60, 50], [420, 220, 50, 45],
];

export function FleetMapVisual() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-card-border shadow-lg">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 480 320"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="480" height="320" className="fill-[#e8edf2] dark:fill-[#1a1f2e]" />

        {/* River */}
        <path
          d="M0,100 Q80,120 160,90 T320,110 T480,95 L480,130 Q320,150 160,120 T0,140Z"
          className="fill-[#b8d4e8] dark:fill-[#1e3a5f]/60"
        />
        <path
          d="M300,0 L340,0 L360,320 L310,320Z"
          className="fill-[#b8d4e8]/60 dark:fill-[#1e3a5f]/40"
        />

        {/* Buildings */}
        {BLOCKS.map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx="2" className="fill-[#d1d9e0] dark:fill-[#252b3b]" />
        ))}

        {/* Parks */}
        <ellipse cx="170" cy="100" rx="30" ry="22" className="fill-[#a8d5a2]/70 dark:fill-[#1a3d1a]/50" />
        <ellipse cx="400" cy="80" rx="25" ry="18" className="fill-[#a8d5a2]/70 dark:fill-[#1a3d1a]/50" />

        {/* Highways */}
        <line x1="0" y1="170" x2="480" y2="165" className="stroke-white dark:stroke-[#3a4258]" strokeWidth="6" />
        <line x1="0" y1="170" x2="480" y2="165" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="12 8" opacity="0.8" />
        <line x1="240" y1="0" x2="240" y2="320" className="stroke-white dark:stroke-[#3a4258]" strokeWidth="5" />
        <line x1="120" y1="0" x2="120" y2="320" className="stroke-white/70 dark:stroke-[#3a4258]" strokeWidth="3" />
        <line x1="360" y1="0" x2="360" y2="320" className="stroke-white/70 dark:stroke-[#3a4258]" strokeWidth="3" />

        {/* Streets */}
        {[50, 90, 130, 200, 280].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="480" y2={y} className="stroke-[#c8d0d8] dark:stroke-[#2a3040]" strokeWidth="1.5" />
        ))}
        {[60, 180, 300, 420].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="320" className="stroke-[#c8d0d8] dark:stroke-[#2a3040]" strokeWidth="1.5" />
        ))}

        <text x="200" y="162" fontSize="7" fill="#d97706" fontWeight="bold" opacity="0.8">I-95</text>

        {/* Depots */}
        {[
          { cx: 240, cy: 170 },
          { cx: 120, cy: 90 },
          { cx: 400, cy: 200 },
        ].map((d, i) => (
          <g key={i}>
            <circle cx={d.cx} cy={d.cy} r="8" fill="#dc2626" opacity="0.25">
              <animate attributeName="r" values="8;15;8" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.05;0.3" dur="3s" repeatCount="indefinite" />
            </circle>
            <rect x={d.cx - 5} y={d.cy - 5} width="10" height="10" rx="2" fill="#dc2626" stroke="white" strokeWidth="1.5" />
          </g>
        ))}

        {/* Route trails + moving vehicles */}
        {ROUTES.map((route, i) => (
          <g key={i}>
            <motion.path
              d={route.path}
              fill="none"
              stroke={route.color}
              strokeWidth="2"
              strokeOpacity="0.3"
              strokeDasharray="4 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.2 }}
            />
            <circle r="5" fill={route.color} stroke="white" strokeWidth="2">
              <animateMotion dur={route.dur} begin={route.delay} repeatCount="indefinite" path={route.path} />
            </circle>
            <circle r="9" fill={route.color} opacity="0.15">
              <animateMotion dur={route.dur} begin={route.delay} repeatCount="indefinite" path={route.path} />
              <animate attributeName="r" values="5;12;5" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>

      <div className="absolute left-3 top-3 rounded-lg border border-card-border/60 bg-card/90 px-2.5 py-1.5 shadow-sm backdrop-blur-sm">
        <p className="text-[10px] font-medium text-muted">LIVE FLEET</p>
        <p className="text-sm font-bold text-emerald-500">847 Active</p>
      </div>
      <div className="absolute right-3 top-3 rounded-lg border border-card-border/60 bg-card/90 px-2.5 py-1.5 shadow-sm backdrop-blur-sm">
        <p className="text-[10px] font-medium text-muted">ALERTS</p>
        <p className="text-sm font-bold text-amber-500">3 Flagged</p>
      </div>
      <div className="absolute bottom-2 left-3 rounded bg-card/70 px-1.5 py-0.5 text-[9px] text-muted backdrop-blur-sm">
        Fleet Map · Live
      </div>

      <motion.div
        className="pointer-events-none absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-red-500/10 to-transparent"
        animate={{ left: ["-10%", "110%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
