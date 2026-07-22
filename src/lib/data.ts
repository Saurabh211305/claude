export type Property = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  developerSlug: string;
  developerName: string;
  location: string;
  status: "Off Plan" | "Ready to Move";
  handoverYear: string;
  handover: string;
  price: string;
  roi: string;
  paymentPlan: string;
  image: string;
  heroImage: string;
  about: string[];
  amenities: string[];
};

export const PROPERTIES: Property[] = [
  {
    id: "canopies",
    slug: "the-canopies-at-yas-point",
    name: "The Canopies at Yas Point by Aldar",
    tagline: "Waterfront Apartments on Yas Island",
    developerSlug: "aldar-properties",
    developerName: "Aldar Properties",
    location: "Yas Point",
    status: "Off Plan",
    handoverYear: "2030",
    handover: "Q3 2030",
    price: "AED 1.65M",
    roi: "7% - 9%",
    paymentPlan: "55/45",
    image: "/images/property-canopies.svg",
    heroImage: "/images/hero-canopies.svg",
    about: [
      "Experience an elevated waterfront lifestyle at The Canopies at Yas Point by Aldar, a premium residential community on Yas Island, Abu Dhabi, where contemporary architecture meets nature, wellness, and resort-inspired living. Offering elegantly designed studios, 1, 2 & 3-bedroom apartments, every residence is thoughtfully crafted with spacious interiors, modern finishes, and seamless access to lush green landscapes and the vibrant waterfront.",
      "Located within the prestigious Yas Point destination, residents enjoy direct access to Yas Point Public Beach, the Marina & Yacht Club, waterfront promenades, cycling tracks, premium retail, cafés, and world-class leisure attractions. Developed by Aldar Properties, The Canopies combines exceptional connectivity, wellness-focused amenities, and a flexible 55/45 payment plan, making it an outstanding choice for both homeowners and investors seeking long-term value in one of Abu Dhabi's most desirable waterfront communities.",
      "Whether you're looking for a luxury residence, a holiday home, or a high-potential investment, The Canopies at Yas Point offers a lifestyle where every day is inspired by nature, comfort, and waterfront elegance.",
    ],
    amenities: [
      "Yas Point Public Beach",
      "Marina & Yacht Club",
      "Waterfront Promenade",
      "Cycling Tracks",
      "Premium Retail & Cafés",
    ],
  },
  {
    id: "golf-trails",
    slug: "golf-trails-at-emaar-south",
    name: "Golf Trails at Emaar South",
    tagline: "Golf-Front Living in Dubai South",
    developerSlug: "emaar-properties",
    developerName: "Emaar Properties",
    location: "Dubai South",
    status: "Off Plan",
    handoverYear: "2030",
    handover: "Q4 2030",
    price: "AED 1.26M",
    roi: "6% - 7%",
    paymentPlan: "80/20",
    image: "/images/property-golf-trails.svg",
    heroImage: "/images/hero-golf-trails.svg",
    about: [
      "Golf Trails at Emaar South places you at the heart of one of Dubai's most established master-planned communities, framed by an 18-hole championship golf course and landscaped fairways.",
      "Residents enjoy proximity to Al Maktoum International Airport, Expo City Dubai, and the wider Dubai South district, with a flexible 80/20 payment plan structured to support long-term investment planning.",
    ],
    amenities: ["Championship Golf Course", "Landscaped Fairways", "Community Retail", "Parks & Cycling Trails"],
  },
  {
    id: "golf-fields",
    slug: "golf-fields-at-emaar-south",
    name: "Golf Fields at Emaar South",
    tagline: "Golf-Front Residences in Dubai South",
    developerSlug: "emaar-properties",
    developerName: "Emaar Properties",
    location: "Dubai South",
    status: "Off Plan",
    handoverYear: "2030",
    handover: "Q3 2030",
    price: "AED 1.26M",
    roi: "6% - 7%",
    paymentPlan: "80/20",
    image: "/images/property-golf-fields.svg",
    heroImage: "/images/hero-golf-fields.svg",
    about: [
      "Golf Fields at Emaar South offers contemporary residences overlooking manicured fairways within the Emaar South master community in Dubai South.",
      "With a flexible 80/20 payment plan and proximity to Al Maktoum International Airport and Expo City Dubai, Golf Fields is positioned for residents and investors seeking long-term community value.",
    ],
    amenities: ["Golf Course Views", "Community Parks", "Retail Promenade", "Cycling & Jogging Trails"],
  },
  {
    id: "al-ghadeer-gardens",
    slug: "al-ghadeer-gardens",
    name: "Al Ghadeer Gardens",
    tagline: "Garden Villas in Al Ghadeer",
    developerSlug: "aldar-properties",
    developerName: "Aldar Properties",
    location: "Al Ghadeer",
    status: "Off Plan",
    handoverYear: "2030",
    handover: "2030",
    price: "AED 1.70M",
    roi: "aprox. 20% - 30%",
    paymentPlan: "55/45",
    image: "/images/property-al-ghadeer.svg",
    heroImage: "/images/hero-al-ghadeer.svg",
    about: [
      "Al Ghadeer Gardens by Aldar brings low-rise, family-oriented villa living to the Al Ghadeer community on the Abu Dhabi–Dubai border, framed by landscaped gardens and community parks.",
      "With a 55/45 payment plan and Aldar's track record for integrated master-planned communities, Al Ghadeer Gardens is positioned as a long-term value opportunity for families and investors alike.",
    ],
    amenities: ["Landscaped Community Parks", "Retail Boulevard", "Schools Nearby", "Family Recreation Areas"],
  },
];

export type Developer = {
  slug: string;
  name: string;
  blurb: string;
  founded: string;
  projectsLabel: string;
  image: string;
  about?: string[];
  keyFacts?: { label: string; value: string }[];
};

export const DEVELOPERS: Developer[] = [
  {
    slug: "aldar-properties",
    name: "Aldar Properties",
    blurb:
      "Aldar Properties PJSC is one of the UAE's leading real estate developers and Abu Dhabi's largest publicly listed master developer.",
    founded: "2004",
    projectsLabel: "+31,000 projects",
    image: "/images/developer-aldar.svg",
    about: [
      "Aldar Properties PJSC is one of the UAE's leading real estate developers and Abu Dhabi's largest publicly listed master developer. Established in 2004 and listed on the Abu Dhabi Securities Exchange (ADX), Aldar has delivered more than 31,000 residential, commercial, retail, hospitality, and mixed-use units across the UAE. The developer is renowned for creating integrated communities that combine premium homes, world-class infrastructure, education, healthcare, retail, and leisure facilities.",
      "From iconic destinations such as Yas Island and Saadiyat Island to emerging master-planned communities, Aldar continues to shape the UAE's real estate landscape while expanding its presence in Dubai, Ras Al Khaimah, Egypt, and the United Kingdom. Its focus on innovation, sustainability, and long-term value has made Aldar a preferred choice for homeowners and property investors.",
    ],
    keyFacts: [
      { label: "Headquarters", value: "Abu Dhabi, UAE" },
      { label: "Founded", value: "2004" },
      { label: "Stock Listing", value: "Publicly listed, Abu Dhabi Securities Exchange" },
      { label: "Market", value: "Abu Dhabi, Dubai, Ras Al Khaimah, Egypt, UK" },
      { label: "Key Portfolio Fact", value: "31,000+ projects delivered" },
    ],
  },
  {
    slug: "beyond-developments",
    name: "Beyond Developments",
    blurb:
      "Beyond Developments is a luxury real estate developer launched by the OMNIYAT Group in 2024.",
    founded: "2024",
    projectsLabel: "+3,150 projects",
    image: "/images/developer-beyond.svg",
  },
  {
    slug: "binghatti-properties",
    name: "Binghatti Properties",
    blurb:
      "Binghatti Properties is a privately held Emirati real estate developer founded in 2008 by Hussain Binghatti.",
    founded: "2008",
    projectsLabel: "+38,000 projects",
    image: "/images/developer-binghatti.svg",
  },
  {
    slug: "damac-properties",
    name: "Damac Properties",
    blurb:
      "DAMAC Properties is one of Dubai's leading luxury real estate developers, founded in 2002.",
    founded: "2002",
    projectsLabel: "+50,000 projects",
    image: "/images/developer-damac.svg",
  },
  {
    slug: "emaar-properties",
    name: "Emaar Properties",
    blurb:
      "Emaar Properties is one of Dubai's most established master developers, behind Downtown Dubai, Dubai Marina, and Emaar South.",
    founded: "1997",
    projectsLabel: "Downtown Dubai & Dubai Marina",
    image: "/images/developer-emaar.svg",
  },
];

export type Community = {
  slug: string;
  name: string;
  description?: string;
  image: string;
};

export const COMMUNITIES: Community[] = [
  {
    slug: "damac-hills",
    name: "Damac Hills",
    description:
      "A premium golf community offering luxury villas, apartments, and world-class lifestyle amenities.",
    image: "/images/community-damac-hills.svg",
  },
  { slug: "jumeirah-islands", name: "Jumeirah Islands", image: "/images/community-jumeirah-islands.svg" },
  { slug: "the-meadows", name: "The Meadows", image: "/images/community-meadows.svg" },
  { slug: "the-springs", name: "The Springs", image: "/images/community-springs.svg" },
  { slug: "town-square", name: "Town Square", image: "/images/community-town-square.svg" },
];

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  sublabel: string;
  isBadge?: boolean;
};

export const HOME_STATS: Stat[] = [
  { value: 398, prefix: "AED ", suffix: "M+", label: "AED 398M+", sublabel: "In Transactions" },
  { value: 199, suffix: "+", label: "199+", sublabel: "Happy Clients" },
  { value: 348, suffix: "+", label: "348+", sublabel: "Properties Sold" },
  { value: 8, decimals: 1, suffix: "+ yrs", label: "8.0+ yrs", sublabel: "Of Experience" },
  { value: 4.5, decimals: 1, suffix: "★", label: "4.5★", sublabel: "Average Rating" },
  { value: 0, label: "RERA", sublabel: "Dubai Land Department", isBadge: true },
];

export const INSIGHT_ARTICLES = [
  {
    slug: "off-plan-vs-ready",
    title: "Off-Plan vs Ready Properties: Which Fits Your Strategy?",
    category: "Investment Strategy",
    readTime: "6 min read",
    excerpt:
      "A practical breakdown of when off-plan pricing and payment plans outweigh the certainty of a ready-to-move home.",
    image: "/images/hero-canopies.svg",
  },
  {
    slug: "understanding-payment-plans",
    title: "Understanding Payment Plans: 55/45, 80/20, and Post-Handover",
    category: "Buyer Education",
    readTime: "5 min read",
    excerpt:
      "What each payment structure actually means for your cash flow, and the questions to ask before you reserve.",
    image: "/images/hero-golf-trails.svg",
  },
  {
    slug: "golden-visa-real-estate-guide",
    title: "Golden Visa Through Real Estate: An Investor's Guide",
    category: "Regulation",
    readTime: "7 min read",
    excerpt:
      "Eligibility thresholds, qualifying property types, and the steps to apply once your purchase completes.",
    image: "/images/hero-al-ghadeer.svg",
  },
];

export const WHY_TRIXIS = [
  {
    title: "RERA Certified Experts",
    description:
      "Every consultant is licensed, experienced and accountable to Dubai's Real Estate Regulatory Authority, so your transaction stays compliant at every stage.",
  },
  {
    title: "Data Driven Advice",
    description:
      "We underwrite every recommendation against rentals, service charges and forward supply, never marketing decks, giving you a realistic view of long term returns.",
  },
  {
    title: "End to End Support",
    description:
      "From shortlisting to handover and beyond, one point of contact through the entire transaction, including contracts, translations and after sale management.",
  },
  {
    title: "Global Investor Network",
    description:
      "Clients across 40+ countries trust us to source, structure and manage Dubai property portfolios remotely and on the ground.",
  },
  {
    title: "Fast, Transparent Process",
    description:
      "Clear timelines at every step, from reservation to Dubai Land Department transfer, with no hidden fees or last minute surprises.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "منافسة اكثر الاشياء من شرح الصور واسعاد تجربة جميلة فهمن جدايلاً حدا لتكرا",
    name: "Mohammad",
    role: "Saudi Arabia",
  },
];

export const FOOTER_LINKS = {
  Areas: ["Jumeirah Village Circle (JVC)", "Dubai Harbour", "Palm Jebel Ali", "Dubai South"],
  Islands: ["Palm Jumeirah", "Dubai Harbour", "Palm Jebel Ali", "Dubai Islands"],
  Communities: ["Damac Hills", "Jumeirah Islands", "The Meadows"],
  Developers: ["Danube Properties in Dubai", "Majid Al Futtaim Properties in Dubai"],
  "Property Types": ["Villas", "Townhouses", "Apartments"],
  Services: ["Off-Plan Properties", "Ready to Move", "Sell Your Property"],
  "About Us": ["Who We Are", "Our Team", "Careers"],
};
