# 10NetZero Website

Corporate website for 10NetZero - a Digital Midstream company helping oil & gas operators monetize stranded natural gas.

## About 10NetZero

10NetZero offers flexible, no-cost solutions to excess natural gas problems. We deploy capital and equipment at well sites to convert stranded gas into revenue through:

- **Gas-to-Power Generation** - On-site electricity generation
- **Bitcoin Mining Solutions** - Containerized data centers powered by flare gas
- **Gas Processing** - H2S removal and NGL recovery
- **Compliance Documentation** - Emissions tracking and regulatory reporting

**Value Proposition:** Turn a cost center into revenue. When Waha Hub prices go negative (42-47% of 2024 trading days), flaring becomes the least-bad option. We give operators a better option that generates actual income.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite 5
- **Styling:** Tailwind CSS + shadcn/ui components
- **Animation:** Framer Motion
- **Routing:** React Router DOM

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Hero.tsx         # Landing hero with video background
│   ├── Portfolio.tsx    # "The Problem" section
│   ├── Awards.tsx       # Environmental impact metrics
│   ├── About.tsx        # "Our Solution" section
│   ├── Services.tsx     # Service offerings grid
│   ├── Team.tsx         # Team member cards
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Site footer
│   └── Navbar.tsx       # Navigation with mobile menu
├── pages/
│   ├── Home.tsx         # Main landing page
│   ├── DigitalMidstream.tsx
│   ├── ConsultingDesign.tsx
│   ├── DataCenterOps.tsx
│   ├── Blog.tsx
│   └── TeamPage.tsx
├── App.tsx              # Router configuration
├── main.tsx             # Entry point
└── index.css            # Global styles + Tailwind config
```

## Documentation

Research and strategy documents are in `/docs`:

```
docs/
├── DEVLOG.md                    # Development session log
├── vision-presentation.md       # AI/Off-Grid Energy OS strategy
├── competitor-analysis.md       # Digital Midstream competitive analysis
└── research/
    └── oil-well-operator-needs/
        ├── FINAL-VALIDATED-REPORT.md  # Fact-checked operator research
        ├── CONSENSUS-REPORT.md        # Analysis of 4 research reports
        ├── chatgpt-research.md
        ├── claude-research.md
        ├── gemini-research.md
        └── perplexity-research.md
```

## Key Messaging (from Research)

Based on validated research, the website should frame messaging around practical operator concerns:

| Frame | Message |
|-------|---------|
| Primary | "Turn a cost center into revenue" |
| Secondary | "Avoid the regulatory cliff" ($1,500/ton methane fees by 2026) |
| Tertiary | "Solve the infrastructure problem" ($10.7M/mile pipeline costs) |

**Avoid:** Climate change, ESG, sustainability, "green" language. Texas operators are skeptical of environmental framing.

See `docs/research/oil-well-operator-needs/FINAL-VALIDATED-REPORT.md` for complete messaging strategy.

## Development Notes

### Known Issues

- `src/pages/Index.tsx` contains dead code (Russian text, different design system) - not used in routes
- Contact form simulates submission only - needs backend integration
- Video background requires `/public/videos/hero-background.mp4`

### Design System

Current implementation uses:
- **Fonts:** Inter (body) + Space Grotesk (display)
- **Primary Color:** Orange (`hsl(24 90% 49%)`)
- **Dark Theme:** Gray-900 backgrounds with white/gray text

CSS custom properties are defined in `src/index.css` for theming.

## Deployment

Build the production bundle:

```bash
npm run build
```

Output is in `/dist`. Deploy to any static hosting (Vercel, Netlify, S3, etc.).

## License

Proprietary - 10NetZero, Inc.
