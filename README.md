# AP Netflix

A personal Netflix-style showcase for your photos and videos.
Protected by a single default login — no sign-ups allowed.

---

## Features

| Feature | Details |
|---|---|
| 🎬 Loading screen | Animated logo + progress bar on first load |
| 🔐 Login gate | Single set of credentials, no registration |
| 🎞 Hero banner | Full-width feature area (image or video) |
| 📜 Content rows | Horizontally scrollable card rows |
| 🖼 Media modal | Click any card to view full image or play video |
| ⚙️ Config-driven | Everything controlled from one file: `src/config.js` |

---

## Quick Start

```bash
npm install
npm run dev        # development server  →  http://localhost:5173
npm run build      # production build    →  dist/
npm run preview    # preview production build
```

---

## Customisation — `src/config.js`

All personalisation lives in **`src/config.js`**. You never need to touch any other file.

### 1. Change login credentials

```js
export const AUTH = {
  username: "admin",
  password: "netflix2025",   // ← change to whatever you want
};
```

### 2. Change the site name / logo

```js
export const SITE = {
  title:    "AP Netflix",
  logoText: "AP",              // large red letters shown in the navbar
  // logoImage: "/images/logo.png",  // uncomment to use a custom image logo
};
```

### 3. Hero banner

```js
export const HERO = {
  title:           "Welcome to AP Netflix",
  description:     "Your personal collection …",
  backgroundImage: "/images/hero.jpg",   // local file in /public/images/
  // backgroundVideo: "/videos/hero.mp4",  // or a looping background video
};
```

### 4. Add your own content

Each object in `ROWS` is one horizontal scroll row.  
Each `items` entry is one card.

```js
export const ROWS = [
  {
    rowTitle: "My Photos",
    items: [
      {
        id:          "p1",           // must be unique
        title:       "Holiday 2024",
        type:        "image",        // "image" | "video"
        src:         "/images/holiday2024.jpg",
        description: "Summer in Greece",
      },
    ],
  },
  {
    rowTitle: "My Videos",
    items: [
      {
        id:        "v1",
        title:     "Birthday party",
        type:      "video",
        src:       "/videos/birthday.mp4",
        thumbnail: "/images/birthday-thumb.jpg",  // optional
      },
    ],
  },
];
```

### Adding files

Drop your files into the `public/` folder:

```
public/
  images/
    hero.jpg
    holiday2024.jpg
  videos/
    birthday.mp4
```

Then reference them with a leading `/`:  `src: "/images/hero.jpg"`.

---

## Deployment

Any static host works (Netlify, Vercel, GitHub Pages, etc.).  
Run `npm run build` and deploy the `dist/` folder.

> **Security note:** The credentials are stored client-side in the JavaScript bundle.
> This is suitable for light access-control on a personal site, not for sensitive data.
