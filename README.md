# Wanderly

**Discover places worth remembering.**

Wanderly is a premium travel discovery front end — a fictional product built to portfolio quality. It's a pure frontend project: no backend, no database, no AI. Wishlists and trip plans persist to `localStorage` in the browser.

## Live demo

> Add your deployed Render URL here once live, e.g. `https://wanderly.onrender.com`

## Features

- **Home** — full-bleed hero with search, trending destinations, popular experiences, featured stays, an editorial "Travel Inspiration" section, testimonials, and a closing CTA.
- **Explore** — live search, category filter, price/rating range filters, and sort, all driven by React state (no page reloads).
- **Destination detail** — image gallery, at-a-glance budget & best-time sidebar, things to do, related experiences and stays, and travel tips.
- **Trip Planner** — pick a destination and trip length, add/remove experiences per day, see a running budget estimate. Saves automatically to `localStorage`.
- **About** — brand story, mission values, stats, and team.
- **Contact** — validated form with a real success state, plus an FAQ accordion.
- **Wishlist** — anything you heart anywhere in the app collects here, persisted locally.
- Dark / light mode (persisted), mobile hamburger navigation, toast notifications, scroll-reveal and page-transition animation throughout.

## Tech stack

| | |
|---|---|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | lucide-react |
| Routing | React Router v7 |
| Persistence | `localStorage` (wishlist, trip planner, theme) |
| Photography | [Unsplash](https://unsplash.com) (Unsplash License — free to use) |

No backend, database, authentication, or AI features are included by design.

## Design

The visual language borrows from boarding passes and travel documents: destination cards render as ticket stubs with perforated notches, a dashed divider, and a monospaced "flight code" for each place. Typefaces are Fraunces (display serif), Inter (body/UI), and IBM Plex Mono (data — prices, coordinates, ratings). The palette is a deep pine ink, warm paper, sea teal, and compass-brass gold — chosen to avoid the generic "AI travel site" look of cream backgrounds and terracotta accents.

## Screenshots

> Add screenshots of the Home, Explore, Destination Detail, and Trip Planner pages here before publishing.

## Installation

```bash
git clone <this-repo-url>
cd wanderly
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

### Build for production

```bash
npm run build   # outputs to /dist
npm run preview # serve the production build locally
```

## Project structure

```
src/
  components/     Reusable UI: Navbar, Footer, cards, form controls
  pages/          One file per route (Home, Explore, DestinationDetail, TripPlanner, About, Contact, Wishlist, NotFound)
  data/           Static content: destinations, experiences, stays, testimonials, image URLs
  context/        Theme, Toast, and Wishlist providers (all localStorage-backed)
  hooks/          useLocalStorage, scroll-reveal animation variants
  layouts/        MainLayout (navbar + animated route transitions + footer)
```

## Deploying to Render

This repo includes a `render.yaml` for one-click deployment as a **Static Site**:

1. Push this repo to GitHub/GitLab.
2. In the Render dashboard, choose **New → Blueprint** and point it at the repo (Render will read `render.yaml` automatically), **or** choose **New → Static Site** manually with:
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
3. Render will build and deploy automatically on every push. The included rewrite rule (`/* → /index.html`) is required for React Router's client-side routes to work on refresh/direct link.

## Future improvements

- Real booking/payment flow (currently simulated via toast notifications)
- Server-backed accounts so wishlists and trip plans sync across devices
- CMS-driven destination content instead of static data files
- Automated image optimization/CDN pipeline
- Unit and end-to-end test coverage

## Photography credit

All photography is sourced from individual photographers on [Unsplash](https://unsplash.com), used under the [Unsplash License](https://unsplash.com/license) (free to use, no attribution required — credited here as good practice). `source.unsplash.com` (the old random-image endpoint) has been permanently shut down, so images are linked directly from `images.unsplash.com` instead.
