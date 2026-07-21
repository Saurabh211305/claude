import { writeFileSync, mkdirSync } from "fs";

mkdirSync("public/images", { recursive: true });

function grain(id) {
  return `
    <filter id="${id}">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise"/>
      <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.02 0"/>
    </filter>
  `;
}

function villaSilhouette(accent) {
  return `
    <g opacity="0.9">
      <path d="M120,620 L280,540 L520,540 L620,590 L900,590 L980,540 L1180,540 L1320,620 L120,620 Z" fill="#040405"/>
      <line x1="140" y1="540" x2="140" y2="480" stroke="${accent}" stroke-width="1.5" opacity="0.6"/>
      <line x1="520" y1="540" x2="520" y2="430" stroke="${accent}" stroke-width="1.5" opacity="0.6"/>
      <line x1="900" y1="590" x2="900" y2="500" stroke="${accent}" stroke-width="1.5" opacity="0.6"/>
      <rect x="300" y="560" width="180" height="60" fill="none" stroke="${accent}" stroke-width="1" opacity="0.35"/>
      <rect x="640" y="560" width="220" height="30" fill="none" stroke="${accent}" stroke-width="1" opacity="0.35"/>
    </g>
    <line x1="0" y1="640" x2="1400" y2="640" stroke="${accent}" stroke-width="1" opacity="0.5"/>
    <line x1="0" y1="700" x2="1400" y2="700" stroke="${accent}" stroke-width="0.6" opacity="0.25"/>
  `;
}

function towerSilhouette(accent) {
  let windows = "";
  for (let row = 0; row < 14; row++) {
    for (let col = 0; col < 5; col++) {
      const y = 160 + row * 26;
      const x = 560 + col * 40;
      windows += `<rect x="${x}" y="${y}" width="18" height="14" fill="${accent}" opacity="${0.06 + (row % 3) * 0.04}"/>`;
    }
  }
  return `
    <rect x="540" y="140" width="240" height="520" fill="#050506" stroke="${accent}" stroke-width="1" opacity="0.5"/>
    ${windows}
    <line x1="0" y1="660" x2="1400" y2="660" stroke="${accent}" stroke-width="1" opacity="0.5"/>
  `;
}

function estateSilhouette(accent) {
  return `
    <g opacity="0.9">
      <path d="M200,600 L340,520 L480,600 Z" fill="#040405" stroke="${accent}" stroke-width="1" opacity="0.5"/>
      <path d="M460,600 L680,480 L900,600 Z" fill="#040405" stroke="${accent}" stroke-width="1" opacity="0.5"/>
      <path d="M880,600 L1000,540 L1120,600 Z" fill="#040405" stroke="${accent}" stroke-width="1" opacity="0.5"/>
      <rect x="200" y="600" width="920" height="40" fill="#040405"/>
    </g>
    <line x1="0" y1="645" x2="1400" y2="645" stroke="${accent}" stroke-width="1" opacity="0.5"/>
    <line x1="0" y1="700" x2="1400" y2="700" stroke="${accent}" stroke-width="0.6" opacity="0.25"/>
  `;
}

const SILHOUETTES = { villa: villaSilhouette, tower: towerSilhouette, estate: estateSilhouette };

function makeSvg({ w, h, accent, variant, moon = false }) {
  const sil = SILHOUETTES[variant](accent);
  return `<svg width="${w}" height="${h}" viewBox="0 0 1400 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a0a0c"/>
      <stop offset="55%" stop-color="#111014"/>
      <stop offset="100%" stop-color="#060607"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="35%" r="65%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    ${grain("g1")}
  </defs>
  <rect width="1400" height="900" fill="url(#bg)"/>
  <rect width="1400" height="900" fill="url(#glow)"/>
  ${moon ? `<circle cx="1080" cy="200" r="46" fill="${accent}" opacity="0.85"/><circle cx="1080" cy="200" r="90" fill="${accent}" opacity="0.08"/>` : ""}
  ${sil}
  <rect width="1400" height="900" filter="url(#g1)"/>
</svg>`;
}

const items = [
  { name: "hero-villa", w: 2000, h: 1250, accent: "#c9a25c", variant: "villa", moon: true },
  { name: "story-courtyard", w: 1200, h: 1500, accent: "#c9a25c", variant: "estate", moon: false },
  { name: "contact-texture", w: 2000, h: 1200, accent: "#c9a25c", variant: "tower", moon: false },
  { name: "property-meridian", w: 1200, h: 1500, accent: "#c9a25c", variant: "estate", moon: false },
  { name: "property-solstice", w: 1200, h: 1500, accent: "#9db38a", variant: "villa", moon: true },
  { name: "property-azure", w: 1200, h: 1500, accent: "#8aa9c9", variant: "tower", moon: false },
  { name: "property-hearthstone", w: 1200, h: 1500, accent: "#c9915c", variant: "estate", moon: false },
  { name: "property-lumen", w: 1200, h: 1500, accent: "#d4b483", variant: "villa", moon: true },
  { name: "property-obsidian", w: 1200, h: 1500, accent: "#b8a1c9", variant: "tower", moon: true },
];

for (const item of items) {
  const svg = makeSvg(item);
  writeFileSync(`public/images/${item.name}.svg`, svg, "utf-8");
  console.log("wrote", item.name);
}
