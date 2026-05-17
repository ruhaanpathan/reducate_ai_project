# JG University — Redesigned Landing Page

A modern, visually stunning redesign of the JG University landing page built with **Next.js 14** and **Tailwind CSS 3**.

## ✨ Features

- **Hero Section** — Animated gradient background with floating orbs, counter animations, and staggered text entrance
- **Navbar** — Glassmorphism sticky navbar with scroll detection and responsive mobile menu
- **About Section** — Split layout with leadership cards, quick facts grid, and scroll-reveal animations
- **Programs Section** — Tabbed interface (UG / Integrated / PG / Doctoral) with animated card grid and specialization tags
- **Features Section** — Bento grid layout showcasing university differentiators
- **Campus Section** — Gradient facility cards with decorative accents and stats bar
- **Testimonials** — Auto-scrolling carousel with scale transitions and dot navigation
- **CTA Section** — Bold gradient card with floating decorations and trust badges
- **Footer** — Multi-column layout with social icons, links, and contact info

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser hosted link https://reducateaiproject.vercel.app/.

## 🎨 Design System

- **Colors**: Deep navy background with amber/gold accents and indigo/violet highlights
- **Typography**: Outfit (headings) + Inter (body) from Google Fonts
- **Effects**: Glassmorphism, gradient text, floating orbs, scroll-reveal animations
- **Layout**: Fully responsive — mobile, tablet, and desktop

## 📁 Project Structure

```
Reducate.ai/
├── app/
│   ├── globals.css      # Tailwind layers + custom design system
│   ├── layout.js        # Root layout with SEO metadata
│   └── page.js          # Main page assembling all sections
├── components/
│   ├── Navbar.jsx       # Sticky glass navbar
│   ├── Hero.jsx         # Full-screen hero with counters
│   ├── About.jsx        # About + Leadership
│   ├── Programs.jsx     # Tabbed programs grid
│   ├── Features.jsx     # Bento feature grid
│   ├── Campus.jsx       # Campus facilities
│   ├── Testimonials.jsx # Alumni testimonial carousel
│   ├── CTA.jsx          # Call-to-action section
│   └── Footer.jsx       # Multi-column footer
├── tailwind.config.js   # Extended Tailwind configuration
├── postcss.config.mjs   # PostCSS + Tailwind plugin
├── next.config.mjs      # Next.js configuration
└── package.json         # Dependencies
```
