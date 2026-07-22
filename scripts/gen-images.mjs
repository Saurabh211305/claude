import { writeFileSync, mkdirSync } from "fs";

mkdirSync("public/images", { recursive: true });

const SHADOW = "#3d3226";

function grain(id) {
  return `
    <filter id="${id}">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise"/>
      <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.015 0"/>
    </filter>
  `;
}

function villaSilhouette(accent) {
  return `
    <g opacity="0.92">
      <path d="M120,620 L280,540 L520,540 L620,590 L900,590 L980,540 L1180,540 L1320,620 L120,620 Z" fill="${SHADOW}"/>
      <line x1="140" y1="540" x2="140" y2="480" stroke="${accent}" stroke-width="1.5" opacity="0.7"/>
      <line x1="520" y1="540" x2="520" y2="430" stroke="${accent}" stroke-width="1.5" opacity="0.7"/>
      <line x1="900" y1="590" x2="900" y2="500" stroke="${accent}" stroke-width="1.5" opacity="0.7"/>
      <rect x="300" y="560" width="180" height="60" fill="none" stroke="${accent}" stroke-width="1" opacity="0.4"/>
      <rect x="640" y="560" width="220" height="30" fill="none" stroke="${accent}" stroke-width="1" opacity="0.4"/>
    </g>
    <line x1="0" y1="640" x2="1400" y2="640" stroke="${accent}" stroke-width="1" opacity="0.55"/>
    <line x1="0" y1="700" x2="1400" y2="700" stroke="${accent}" stroke-width="0.6" opacity="0.3"/>
  `;
}

function towerSilhouette(accent) {
  let windows = "";
  for (let row = 0; row < 14; row++) {
    for (let col = 0; col < 5; col++) {
      const y = 160 + row * 26;
      const x = 560 + col * 40;
      windows += `<rect x="${x}" y="${y}" width="18" height="14" fill="${accent}" opacity="${0.1 + (row % 3) * 0.05}"/>`;
    }
  }
  return `
    <rect x="540" y="140" width="240" height="520" fill="${SHADOW}" stroke="${accent}" stroke-width="1" opacity="0.7"/>
    ${windows}
    <line x1="0" y1="660" x2="1400" y2="660" stroke="${accent}" stroke-width="1" opacity="0.55"/>
  `;
}

function estateSilhouette(accent) {
  return `
    <g opacity="0.92">
      <path d="M200,600 L340,520 L480,600 Z" fill="${SHADOW}" stroke="${accent}" stroke-width="1" opacity="0.6"/>
      <path d="M460,600 L680,480 L900,600 Z" fill="${SHADOW}" stroke="${accent}" stroke-width="1" opacity="0.6"/>
      <path d="M880,600 L1000,540 L1120,600 Z" fill="${SHADOW}" stroke="${accent}" stroke-width="1" opacity="0.6"/>
      <rect x="200" y="600" width="920" height="40" fill="${SHADOW}"/>
    </g>
    <line x1="0" y1="645" x2="1400" y2="645" stroke="${accent}" stroke-width="1" opacity="0.55"/>
    <line x1="0" y1="700" x2="1400" y2="700" stroke="${accent}" stroke-width="0.6" opacity="0.3"/>
  `;
}

const SILHOUETTES = { villa: villaSilhouette, tower: towerSilhouette, estate: estateSilhouette };

function makeSvg({ w, h, accent, sky1, sky2, sky3, variant, sun = false }) {
  const sil = SILHOUETTES[variant](accent);
  return `<svg width="${w}" height="${h}" viewBox="0 0 1400 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${sky1}"/>
      <stop offset="55%" stop-color="${sky2}"/>
      <stop offset="100%" stop-color="${sky3}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    ${grain("g1")}
  </defs>
  <rect width="1400" height="900" fill="url(#bg)"/>
  <rect width="1400" height="900" fill="url(#glow)"/>
  ${sun ? `<circle cx="1080" cy="220" r="52" fill="${accent}" opacity="0.5"/><circle cx="1080" cy="220" r="100" fill="${accent}" opacity="0.12"/>` : ""}
  ${sil}
  <rect width="1400" height="900" filter="url(#g1)"/>
</svg>`;
}

const items = [
  { name: "hero-villa", w: 2000, h: 1250, accent: "#a9683f", sky1: "#f4ead9", sky2: "#eddcc0", sky3: "#e3c8a0", variant: "villa", sun: true },
  { name: "story-courtyard", w: 1200, h: 1500, accent: "#a9683f", sky1: "#f6f0e4", sky2: "#efe2cd", sky3: "#e6d2b3", variant: "estate", sun: false },
  { name: "contact-texture", w: 2000, h: 1200, accent: "#a9683f", sky1: "#f4ede0", sky2: "#ecdfc7", sky3: "#e2cba7", variant: "tower", sun: false },
  { name: "property-meridian", w: 1200, h: 1500, accent: "#a9683f", sky1: "#f6f0e4", sky2: "#efe2cd", sky3: "#e6d2b3", variant: "estate", sun: false },
  { name: "property-solstice", w: 1200, h: 1500, accent: "#7d8f5f", sky1: "#f3f1e2", sky2: "#e9e6c9", sky3: "#dcd8a9", variant: "villa", sun: true },
  { name: "property-azure", w: 1200, h: 1500, accent: "#5f84a0", sky1: "#eef2f2", sky2: "#dde8e8", sky3: "#c8dade", variant: "tower", sun: false },
  { name: "property-hearthstone", w: 1200, h: 1500, accent: "#b3704a", sky1: "#f6ebdf", sky2: "#efdcc7", sky3: "#e4c6a5", variant: "estate", sun: false },
  { name: "property-lumen", w: 1200, h: 1500, accent: "#c99a4a", sky1: "#f8efdf", sky2: "#f2e2b8", sky3: "#e8ce93", variant: "villa", sun: true },
  { name: "property-obsidian", w: 1200, h: 1500, accent: "#8a6f95", sky1: "#f1edef", sky2: "#e7dfe8", sky3: "#d9cbdd", variant: "tower", sun: true },
];

for (const item of items) {
  const svg = makeSvg(item);
  writeFileSync(`public/images/${item.name}.svg`, svg, "utf-8");
  console.log("wrote", item.name);
}
