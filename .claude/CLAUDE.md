# 10NetZero React Website

## Project Overview
Corporate website for 10NetZero - a Digital Midstream company helping oil & gas operators monetize stranded natural gas. Built with React 18 + TypeScript, Vite 5, Tailwind CSS, shadcn/ui, and Framer Motion.

## Tech Stack
- **Framework:** React 18 + TypeScript
- **Build:** Vite 5
- **Styling:** Tailwind CSS + shadcn/ui components
- **Animation:** Framer Motion
- **Routing:** React Router DOM
- **SEO:** react-helmet-async + JSON-LD schemas

## Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:5173)
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # ESLint check
```

## Project Structure
```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── seo/             # SEOHead, JsonLd schemas
│   └── *.tsx            # Feature components
├── pages/               # Route pages
├── config/
│   └── seo.ts           # SEO configuration
├── App.tsx              # Router configuration
├── main.tsx             # Entry point
└── index.css            # Global styles + Tailwind

public/
├── ai-facts.json        # Structured data for AI crawlers
├── sitemap.xml          # XML sitemap
└── robots.txt           # Crawler directives
```

## Key Messaging Guidelines
Based on validated operator research, follow these messaging priorities:

| Priority | Frame | Message |
|----------|-------|---------|
| Primary | Economics | "Turn a cost center into revenue" |
| Secondary | Regulatory | "Avoid the regulatory cliff" ($1,500/ton methane fees by 2026) |
| Tertiary | Infrastructure | "Solve the infrastructure problem" ($10.7M/mile pipeline costs) |

**AVOID:** Climate change, ESG, sustainability, "green" language. Texas operators are skeptical of environmental framing.

See `docs/research/oil-well-operator-needs/FINAL-VALIDATED-REPORT.md` for complete messaging strategy.

## SEO Configuration
- Central config in `src/config/seo.ts`
- Use `buildUrl()` helper for all canonical URLs
- Site URL: `https://10netzero.com`
- All pages have SEOHead + JSON-LD schemas

## Development Notes

### Design System
- **Fonts:** Inter (body) + Space Grotesk (display)
- **Primary Color:** Orange (`hsl(24 90% 49%)`)
- **Theme:** Dark (Gray-900 backgrounds)
- CSS custom properties in `src/index.css`

### Known Issues
- `src/pages/Index.tsx` - Dead code, not used in routes
- Contact form - Simulates submission only, needs backend
- Video background requires `/public/videos/hero-background.mp4`

### AI/AEO Optimization
- `ai-facts.json` provides structured Q&A for AI crawlers
- FAQ sections use JSON-LD FAQSchema
- robots.txt allows GPTBot, ClaudeBot, PerplexityBot

## Git Workflow
- **Main branch:** `main`
- **Feature branches:** `feature/<description>`
- **Remotes:**
  - origin: GitHub (primary)
  - gitlab: GitLab mirror

## Documentation
Research and strategy docs in `/docs`:
- `DEVLOG.md` - Development session log
- `vision-presentation.md` - AI/Off-Grid Energy OS strategy
- `competitor-analysis.md` - Digital Midstream competitive analysis
- `research/oil-well-operator-needs/` - Validated operator research
