# Portfolio (Next.js, no backend)

Simple black & white portfolio site. All content comes from JSON files in `/data` — no database, no API.

## Setup

```
npm install
npm run dev
```

Open http://localhost:3000

## Edit your content

- `data/profile.json` — your name, tagline, about text, photo path, social links
- `data/projects.json` — your projects list
- `data/articles.json` — your articles (title, date, category, link). Category powers the filter buttons (databases, postgresql, microservices, backend, etc.) automatically — just use whatever category string you want.
- `data/videos.json` — YouTube video IDs (the part after `v=` in a YouTube URL). Only the first 4 are shown, plus a button linking to your full channel.

## Photo

Put your photo in `public/profile.jpg` (or change the path in `data/profile.json`).

## Build for production

```
npm run build
npm run start
```
