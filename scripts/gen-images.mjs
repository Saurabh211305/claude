import { writeFileSync, mkdirSync } from "fs";

mkdirSync("public/images", { recursive: true });

function grain(id) {
  return `
    <filter id="${id}">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise"/>
      <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.02 0"/>
    </filter>
  `;
}

// --- Night skyline: navy sky, glowing tower silhouettes, warm window lights ---
function skylineNight({ accent = "#dd8a3b" }) {
  let towers = "";
  const specs = [
    { x: 120, w: 90, h: 420 },
    { x: 230, w: 60, h: 320 },
    { x: 310, w: 110, h: 520 },
    { x: 440, w: 50, h: 260 },
    { x: 700, w: 40, h: 620, spire: true },
    { x: 760, w: 70, h: 380 },
    { x: 850, w: 90, h: 460 },
    { x: 960, w: 55, h: 300 },
    { x: 1040, w: 100, h: 500 },
    { x: 1160, w: 65, h: 360 },
    { x: 1250, w: 90, h: 440 },
  ];
  for (const s of specs) {
    const top = 900 - s.h;
    towers += `<rect x="${s.x}" y="${top}" width="${s.w}" height="${s.h}" fill="#040611"/>`;
    if (s.spire) {
      towers += `<polygon points="${s.x + s.w / 2 - 3},${top - 90} ${s.x + s.w / 2 + 3},${top - 90} ${s.x + s.w / 2 + 8},${top} ${s.x + s.w / 2 - 8},${top}" fill="#040611"/>`;
    }
    let windows = "";
    const rows = Math.floor(s.h / 22);
    const cols = Math.max(2, Math.floor(s.w / 16));
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (Math.random() > 0.45) continue;
        const wx = s.x + 5 + c * (s.w / cols);
        const wy = top + 10 + r * 22;
        windows += `<rect x="${wx.toFixed(1)}" y="${wy}" width="4" height="6" fill="${accent}" opacity="${(0.35 + Math.random() * 0.5).toFixed(2)}"/>`;
      }
    }
    towers += windows;
  }
  return towers;
}

function makeSkylineNight({ w, h, accent = "#dd8a3b" }) {
  return `<svg width="${w}" height="${h}" viewBox="0 0 1400 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#040611"/>
      <stop offset="55%" stop-color="#0a0f22"/>
      <stop offset="100%" stop-color="#141b34"/>
    </linearGradient>
    <radialGradient id="haze" cx="50%" cy="75%" r="60%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    ${grain("gn")}
  </defs>
  <rect width="1400" height="900" fill="url(#sky)"/>
  <circle cx="1150" cy="160" r="70" fill="${accent}" opacity="0.9"/>
  <circle cx="1150" cy="160" r="130" fill="${accent}" opacity="0.1"/>
  <rect width="1400" height="900" fill="url(#haze)"/>
  ${skylineNight({ accent })}
  <rect x="0" y="860" width="1400" height="40" fill="#040611"/>
  <rect width="1400" height="900" filter="url(#gn)"/>
</svg>`;
}

// --- Coastal / resort daylight scene (low-rise waterfront) ---
function makeCoastalDay({ w, h, accent }) {
  return `<svg width="${w}" height="${h}" viewBox="0 0 1400 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyd" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#eaf3f5"/>
      <stop offset="45%" stop-color="#dcebe9"/>
      <stop offset="100%" stop-color="#bcdad3"/>
    </linearGradient>
    <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#7fb8c4"/>
      <stop offset="100%" stop-color="#3e7f93"/>
    </linearGradient>
    ${grain("gc")}
  </defs>
  <rect width="1400" height="900" fill="url(#skyd)"/>
  <circle cx="1180" cy="180" r="60" fill="#fbe8b8" opacity="0.9"/>
  <rect x="0" y="560" width="1400" height="340" fill="url(#water)"/>
  <g opacity="0.95">
    <rect x="140" y="420" width="120" height="150" fill="#f4ede0" stroke="${accent}" stroke-width="1.5"/>
    <rect x="290" y="380" width="90" height="190" fill="#efe4d0" stroke="${accent}" stroke-width="1.5"/>
    <rect x="410" y="440" width="150" height="130" fill="#f4ede0" stroke="${accent}" stroke-width="1.5"/>
    <rect x="600" y="400" width="100" height="170" fill="#efe4d0" stroke="${accent}" stroke-width="1.5"/>
    <rect x="740" y="430" width="130" height="140" fill="#f4ede0" stroke="${accent}" stroke-width="1.5"/>
    <rect x="920" y="390" width="110" height="180" fill="#efe4d0" stroke="${accent}" stroke-width="1.5"/>
    <rect x="1080" y="430" width="140" height="140" fill="#f4ede0" stroke="${accent}" stroke-width="1.5"/>
  </g>
  <g opacity="0.8">
    <path d="M60,900 C120,760 160,760 200,900 Z" fill="#5a7a4a"/>
    <path d="M1260,900 C1300,780 1340,780 1380,900 Z" fill="#5a7a4a"/>
    <path d="M1180,900 C1220,800 1250,800 1280,900 Z" fill="#5a7a4a"/>
  </g>
  <path d="M0,560 Q700,600 1400,560 L1400,590 Q700,630 0,590 Z" fill="#e8f6f2" opacity="0.6"/>
  <rect width="1400" height="900" filter="url(#gc)"/>
</svg>`;
}

// --- Golf community daylight scene ---
function makeGolfDay({ w, h, accent }) {
  return `<svg width="${w}" height="${h}" viewBox="0 0 1400 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#eef3e3"/>
      <stop offset="50%" stop-color="#e2ecd4"/>
      <stop offset="100%" stop-color="#c7dba3"/>
    </linearGradient>
    ${grain("gg")}
  </defs>
  <rect width="1400" height="900" fill="url(#skyg)"/>
  <circle cx="200" cy="170" r="55" fill="#fdf1c8" opacity="0.9"/>
  <path d="M0,560 C300,500 500,620 750,560 C950,510 1150,600 1400,540 L1400,900 L0,900 Z" fill="#8fae6a"/>
  <path d="M0,650 C300,600 550,700 850,650 C1050,610 1250,680 1400,630 L1400,900 L0,900 Z" fill="#79995a"/>
  <circle cx="980" cy="560" r="90" fill="#a9c9c9" opacity="0.7"/>
  <g opacity="0.95">
    <rect x="150" y="470" width="130" height="110" fill="#f6f1e2" stroke="${accent}" stroke-width="1.5"/>
    <rect x="320" y="440" width="110" height="140" fill="#f0e9d6" stroke="${accent}" stroke-width="1.5"/>
    <rect x="470" y="480" width="150" height="100" fill="#f6f1e2" stroke="${accent}" stroke-width="1.5"/>
    <rect x="660" y="450" width="120" height="130" fill="#f0e9d6" stroke="${accent}" stroke-width="1.5"/>
  </g>
  <rect width="1400" height="900" filter="url(#gg)"/>
</svg>`;
}

// --- Developer hero: dark abstract skyline with big empty middle for wordmark overlay ---
function makeDeveloperHero({ w, h, accent }) {
  return `<svg width="${w}" height="${h}" viewBox="0 0 1400 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="dsky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a0f22"/>
      <stop offset="100%" stop-color="#141b34"/>
    </linearGradient>
    <radialGradient id="dglow" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    ${grain("gd")}
  </defs>
  <rect width="1400" height="900" fill="url(#dsky)"/>
  <rect width="1400" height="900" fill="url(#dglow)"/>
  ${skylineNight({ accent })}
  <rect width="1400" height="900" filter="url(#gd)"/>
</svg>`;
}

function makeContactTexture({ w, h, accent }) {
  return `<svg width="${w}" height="${h}" viewBox="0 0 1400 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="csky" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0f22"/>
      <stop offset="100%" stop-color="#1a2140"/>
    </linearGradient>
    <radialGradient id="cglow" cx="70%" cy="30%" r="60%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1400" height="900" fill="url(#csky)"/>
  <rect width="1400" height="900" fill="url(#cglow)"/>
  ${skylineNight({ accent })}
</svg>`;
}

const GOLD = "#dd8a3b";

const items = [
  { name: "hero-dubai", w: 2200, h: 1300, fn: () => makeSkylineNight({ w: 2200, h: 1300, accent: GOLD }) },
  { name: "contact-texture", w: 2000, h: 1200, fn: () => makeContactTexture({ w: 2000, h: 1200, accent: GOLD }) },

  { name: "property-canopies", w: 1200, h: 1500, fn: () => makeCoastalDay({ w: 1200, h: 1500, accent: "#c9a25c" }) },
  { name: "hero-canopies", w: 2000, h: 1250, fn: () => makeCoastalDay({ w: 2000, h: 1250, accent: "#c9a25c" }) },

  { name: "property-golf-trails", w: 1200, h: 1500, fn: () => makeGolfDay({ w: 1200, h: 1500, accent: "#7d8f5f" }) },
  { name: "hero-golf-trails", w: 2000, h: 1250, fn: () => makeGolfDay({ w: 2000, h: 1250, accent: "#7d8f5f" }) },

  { name: "property-golf-fields", w: 1200, h: 1500, fn: () => makeGolfDay({ w: 1200, h: 1500, accent: "#6f8f7d" }) },
  { name: "hero-golf-fields", w: 2000, h: 1250, fn: () => makeGolfDay({ w: 2000, h: 1250, accent: "#6f8f7d" }) },

  { name: "property-al-ghadeer", w: 1200, h: 1500, fn: () => makeGolfDay({ w: 1200, h: 1500, accent: "#b3704a" }) },
  { name: "hero-al-ghadeer", w: 2000, h: 1250, fn: () => makeGolfDay({ w: 2000, h: 1250, accent: "#b3704a" }) },

  { name: "developer-aldar", w: 1600, h: 900, fn: () => makeDeveloperHero({ w: 1600, h: 900, accent: GOLD }) },
  { name: "developer-emaar", w: 1600, h: 900, fn: () => makeDeveloperHero({ w: 1600, h: 900, accent: "#8aa9c9" }) },
  { name: "developer-damac", w: 1600, h: 900, fn: () => makeDeveloperHero({ w: 1600, h: 900, accent: "#b8a1c9" }) },
  { name: "developer-binghatti", w: 1600, h: 900, fn: () => makeDeveloperHero({ w: 1600, h: 900, accent: "#c9915c" }) },
  { name: "developer-beyond", w: 1600, h: 900, fn: () => makeDeveloperHero({ w: 1600, h: 900, accent: "#9db38a" }) },

  { name: "community-damac-hills", w: 1200, h: 900, fn: () => makeGolfDay({ w: 1200, h: 900, accent: "#7d8f5f" }) },
  { name: "community-jumeirah-islands", w: 1200, h: 900, fn: () => makeCoastalDay({ w: 1200, h: 900, accent: "#5f84a0" }) },
  { name: "community-meadows", w: 1200, h: 900, fn: () => makeGolfDay({ w: 1200, h: 900, accent: "#6f9f6f" }) },
  { name: "community-springs", w: 1200, h: 900, fn: () => makeCoastalDay({ w: 1200, h: 900, accent: "#4f9fa0" }) },
  { name: "community-town-square", w: 1200, h: 900, fn: () => makeGolfDay({ w: 1200, h: 900, accent: "#c9a25c" }) },
];

for (const item of items) {
  const svg = item.fn();
  writeFileSync(`public/images/${item.name}.svg`, svg, "utf-8");
  console.log("wrote", item.name);
}
