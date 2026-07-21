export type Property = {
  id: string;
  name: string;
  location: string;
  category: "Villa" | "Penthouse" | "Estate";
  price: string;
  beds: number;
  area: string;
  image: string;
};

export const PROPERTIES: Property[] = [
  {
    id: "meridian",
    name: "The Meridian Residence",
    location: "Alibaug, Maharashtra",
    category: "Estate",
    price: "₹18.5 Cr onwards",
    beds: 5,
    area: "8,200 sq.ft",
    image:
      "/images/property-meridian.svg",
  },
  {
    id: "solstice",
    name: "Solstice Villa",
    location: "Whitefield, Bengaluru",
    category: "Villa",
    price: "₹9.2 Cr onwards",
    beds: 4,
    area: "5,600 sq.ft",
    image:
      "/images/property-solstice.svg",
  },
  {
    id: "azure-sky",
    name: "Azure Sky Penthouse",
    location: "Worli, Mumbai",
    category: "Penthouse",
    price: "₹32 Cr onwards",
    beds: 4,
    area: "6,100 sq.ft",
    image:
      "/images/property-azure.svg",
  },
  {
    id: "hearthstone",
    name: "Hearthstone Estate",
    location: "Coonoor, Tamil Nadu",
    category: "Estate",
    price: "₹14.8 Cr onwards",
    beds: 6,
    area: "9,400 sq.ft",
    image:
      "/images/property-hearthstone.svg",
  },
  {
    id: "lumen",
    name: "Lumen Villa",
    location: "Goa",
    category: "Villa",
    price: "₹11.4 Cr onwards",
    beds: 4,
    area: "5,900 sq.ft",
    image:
      "/images/property-lumen.svg",
  },
  {
    id: "obsidian",
    name: "Obsidian Sky Residences",
    location: "Golf Course Road, Gurugram",
    category: "Penthouse",
    price: "₹22.6 Cr onwards",
    beds: 5,
    area: "7,300 sq.ft",
    image:
      "/images/property-obsidian.svg",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Trixis didn't sell us a house. They translated the way we wanted to live into a set of rooms, materials, and light. Eighteen months later, it still feels like the first day.",
    name: "Rohan & Meera Kapoor",
    role: "Owners, The Meridian Residence",
  },
  {
    quote:
      "The level of discretion and craftsmanship is on par with the private estates I've seen in Europe. Every finish was considered twice over.",
    name: "Arjun Mehta",
    role: "Owner, Azure Sky Penthouse",
  },
  {
    quote:
      "From the first walkthrough to handover, the process felt more like working with an atelier than a developer. Transparent, unhurried, exact.",
    name: "Priya Ramanathan",
    role: "Owner, Lumen Villa",
  },
];

export const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Private Consultation",
    description:
      "A dedicated advisor takes time to understand your lifestyle, priorities, and vision before a single option is presented.",
  },
  {
    step: "02",
    title: "Curated Shortlist",
    description:
      "Access to unlisted and pre-launch residences matched precisely to your brief — no generic listings, no wasted visits.",
  },
  {
    step: "03",
    title: "Design & Customisation",
    description:
      "Work directly with our architecture and interiors team to tailor finishes, layouts, and materials to your taste.",
  },
  {
    step: "04",
    title: "Legal & Financial Clarity",
    description:
      "End-to-end support across documentation, RERA compliance, and financing — transparent at every step.",
  },
  {
    step: "05",
    title: "Handover & Beyond",
    description:
      "White-glove handover followed by dedicated concierge support for maintenance, resale, and future acquisitions.",
  },
];

export const PARTNERS = [
  "Architectural Digest",
  "Forbes India",
  "CNBC Awaaz",
  "Elle Decor",
  "The Economic Times",
  "Condé Nast Traveller",
];
