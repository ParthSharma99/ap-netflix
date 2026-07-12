// ─────────────────────────────────────────────────────────────
//  AP-NETFLIX  –  Configuration File
//  Edit this file to control the entire app: credentials,
//  hero banner, and all content rows shown on the home page.
// ─────────────────────────────────────────────────────────────

// ── Authentication ───────────────────────────────────────────
// Single set of login credentials. No sign-up is allowed.
// ⚠️  IMPORTANT: Change both values before deploying publicly.
//     Use a strong password (uppercase + lowercase + numbers + symbols).
export const AUTH = {
  username: "parnoushka",
  password: "anoushkaParth2104",
};

// ── Site Branding ─────────────────────────────────────────────
export const SITE = {
  title: "Netflix", // Shown in the browser tab and navbar
  logoText: "N", // Big red logo letter(s) in the navbar
  // logoImage: "/images/logo.png",  // Uncomment to use an image logo instead
};

// ── Hero Banner ───────────────────────────────────────────────
// The large feature section at the top of the home page.
// Use a local path  (e.g. "/images/hero.jpg")  or a full URL.
export const HERO = {
  title: "Welcome to Netflix",
  description: "Watch your videos, beautifully presented.",
  backgroundImage: "", // e.g. "/images/hero.jpg"  — leave empty for gradient
  // backgroundVideo: "/videos/hero.mp4",  // Uncomment to use a looping video
};

// ── Content Rows ──────────────────────────────────────────────
// Each object in this array becomes a horizontal scroll row on the home page.
// Items can mix images and videos freely.
//
// Item fields:
//   id          – unique string
//   title       – card label
//   type        – "image" | "video"
//   src         – path to the file (relative to /public, or full URL)
//   thumbnail   – (optional) thumbnail image for video cards
//   description – (optional) shown when a card is clicked / hovered
export const ROWS = [
  {
    rowTitle: "Featured",
    items: [
      {
        id: "f1",
        title: "Sample Photo 1",
        type: "image",
        src: "https://picsum.photos/seed/ap1/400/225",
        description: "Replace with your own photo.",
      },
      {
        id: "f2",
        title: "Sample Photo 2",
        type: "image",
        src: "https://picsum.photos/seed/ap2/400/225",
        description: "Replace with your own photo.",
      },
      {
        id: "f3",
        title: "Sample Photo 3",
        type: "image",
        src: "https://picsum.photos/seed/ap3/400/225",
        description: "Replace with your own photo.",
      },
      {
        id: "f4",
        title: "Sample Photo 4",
        type: "image",
        src: "https://picsum.photos/seed/ap4/400/225",
        description: "Replace with your own photo.",
      },
      {
        id: "f5",
        title: "Sample Photo 5",
        type: "image",
        src: "https://picsum.photos/seed/ap5/400/225",
        description: "Replace with your own photo.",
      },
    ],
  },
  {
    rowTitle: "Videos",
    items: [
      {
        id: "v1",
        title: "Sample Video 1",
        type: "video",
        src: "", // e.g. "/videos/clip1.mp4"
        thumbnail: "https://picsum.photos/seed/vid1/400/225",
        description: "Replace with your own video.",
      },
      {
        id: "v2",
        title: "Sample Video 2",
        type: "video",
        src: "",
        thumbnail: "https://picsum.photos/seed/vid2/400/225",
        description: "Replace with your own video.",
      },
      {
        id: "v3",
        title: "Sample Video 3",
        type: "video",
        src: "",
        thumbnail: "https://picsum.photos/seed/vid3/400/225",
        description: "Replace with your own video.",
      },
    ],
  },
  {
    rowTitle: "Memories",
    items: [
      {
        id: "m1",
        title: "Memory 1",
        type: "image",
        src: "https://picsum.photos/seed/mem1/400/225",
        description: "A special memory.",
      },
      {
        id: "m2",
        title: "Memory 2",
        type: "image",
        src: "https://picsum.photos/seed/mem2/400/225",
        description: "A special memory.",
      },
      {
        id: "m3",
        title: "Memory 3",
        type: "image",
        src: "https://picsum.photos/seed/mem3/400/225",
        description: "A special memory.",
      },
      {
        id: "m4",
        title: "Memory 4",
        type: "image",
        src: "https://picsum.photos/seed/mem4/400/225",
        description: "A special memory.",
      },
    ],
  },
];
