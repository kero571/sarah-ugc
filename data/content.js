export const NAV = [
  { href: "#about", label: "About" },
  { href: "#offer", label: "Offer" },
  { href: "#videos", label: "Videos" },
  { href: "#day", label: "My Day" },
  { href: "#brands", label: "Feedback" },
];

export const TAGS = ["Skincare", "Haircare", "Beauty", "Fashion", "Treats"];

export const BRANDS = [
  "LUMEN BOTANICS",
  "MAISON VÉLO",
  "ATELIER N°4",
  "GLOW SKINCARE",
  "NOIR & ROSE",
  "PISTACHE CO.",
];

export const STATS = [
  { value: "185K+", label: "Followers" },
  { value: "90+", label: "Collabs" },
  { value: "320+", label: "Reviews" },
];

export const OFFERS = [
  {
    icon: "video",
    chip: "High Converting",
    title: "UGC Video Creation",
    text: "Organic TikTok & Reels concepting, scripting, filming, and editing built around genuine hooks and native voice.",
  },
  {
    icon: "review",
    chip: "In-Depth",
    title: "Dedicated Product Reviews",
    text: "Thorough wear-tests and texture shots with an honest, balanced verdict that builds audience trust.",
  },
  {
    icon: "story",
    chip: "Seamless",
    title: "Story-Time Integration",
    text: "Natural day-in-the-life product placement woven into relatable city strolls, unboxings, and evening routines.",
  },
  {
    icon: "crown",
    chip: "Ambassador",
    title: "Brand Collaborations & Events",
    text: "Long-term ambassadorships, VIP launch party dispatches, boutique activations, and live social coverage.",
  },
];

export const FILTERS = [
  { id: "all", label: "All" },
  { id: "beauty", label: "Beauty" },
  { id: "event", label: "Event" },
  { id: "fashion", label: "Fashion" },
  { id: "food", label: "Food" },
];
// Put files in /public/videos and update `src`
const COUNTS = { beauty: 12, event: 1, fashion: 7, food: 4 };

export const VIDEOS = Object.entries(COUNTS).flatMap(([cat, count]) =>
  Array.from({ length: count }, (_, i) => ({
    id: `${cat}-${i + 1}`,
    cat,
    src: `/videos/${cat}/${i + 1}.mp4`,
    cover: `/videos/${cat}/${i + 1}.jpg`,
  })),
);

export const DAY = [
  {
    id: 1,
    time: "08:30",
    color: "bg-brand",
    title: "A Day With Me",
    sub: "PR relies & coffee",
    src: "/videos/day-1.mp4",
  },
  {
    id: 2,
    time: "21:15",
    color: "bg-mint",
    title: "Night Walk & Coffee",
    sub: "City chat",
    src: "/videos/day-2.mp4",
  },
  {
    id: 3,
    time: "15:40",
    color: "bg-gold",
    title: "Unboxing Chaos",
    sub: "Raw reactions",
    src: "/videos/day-3.mp4",
  },
  {
    id: 4,
    time: "11:20",
    color: "bg-brand",
    title: "Get Ready With Me",
    sub: "Real routine",
    src: "/videos/day-4.mp4",
  },
];

export const REVIEWS = [
  {
    quote:
      "Sarah's review brought us 4x conversions because her audience truly trusts her taste. Real authenticity is rare.",
    role: "Marketing Director",
    company: "Atelier Brand",
  },
  {
    quote:
      "She doesn't just hold the product; she tells a genuine story that resonates with everyday customers.",
    role: "Founder",
    company: "Glow Skincare",
  },
];

export const DELIVERABLES = [
  "UGC Reel Video",
  "Dedicated Review",
  "Story Feature",
  "Event / Launch",
];

export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "TikTok", href: "https://tiktok.com/" },
  { label: "YouTube", href: "https://youtube.com/" },
  { label: "Pinterest", href: "https://pinterest.com/" },
];
