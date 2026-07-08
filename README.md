# SilverCircle

Care. Connect. Community — for every golden year.

SilverCircle is an MVP web app for senior citizens: find nearby hospitals/clinics by ailment, raise an emergency SOS alert to family, and connect with volunteers and peers for walks and shared-interest activities.

This is a hackathon MVP. There is no real backend, database, or SMS/notification service — all data lives in `lib/mock-data.ts` and browser `localStorage`, so the app is fully clickable and demoable with zero setup.

## Run locally

```
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel (no config needed)

**Option A — GitHub import (easiest):**
1. Create a new empty repository on GitHub.
2. Upload this entire folder's contents to the repo (drag-and-drop the files on the "Add file → Upload files" page, or use GitHub Desktop / `git push`).
3. Go to vercel.com → "Add New Project" → import that GitHub repo.
4. Vercel auto-detects Next.js — click **Deploy**. No environment variables needed.
5. Copy the live `.vercel.app` URL it gives you — that's your submission link.

**Option B — Vercel CLI:**
```
npm install -g vercel
vercel --prod
```
Follow the prompts (link/create a project) and it will give you a live URL directly.

## Demo script

1. Login screen → tap "Continue as Kamala Rao".
2. Home → "Find Care" → pick "Diabetes" → see CarePlus Diabetes & Wellness Clinic on top → try Call/Directions.
3. Home → red SOS button → confirm (or wait for the countdown) → see contacts marked "Notified" → check Emergency History.
4. Home → "Community" → "People Nearby" tab → Ramesh Gowda shows "3 shared interests" → switch to "Activities" tab → tap Join on "Morning Walk".
5. Profile tab → edit interests/contacts to show the data isn't hardcoded to the view.
