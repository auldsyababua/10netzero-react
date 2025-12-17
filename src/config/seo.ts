// SEO Configuration for 10NetZero
// Based on Ahrefs keyword research (Dec 2025)

export const siteConfig = {
  siteName: '10NetZero',
  siteUrl: 'https://10netzero.com',
  defaultTitle: '10NetZero | Turn Stranded Gas Into Revenue',
  defaultDescription: 'Monetizing stranded natural gas through digital infrastructure. Zero capital required. Flare gas recovery and wellhead power generation for Texas oil operators.',
  canonicalDescription: 'Monetizing stranded natural gas through digital infrastructure',
  twitterHandle: '@10netzero',
  locale: 'en_US',
};

// Target keywords from Ahrefs research
export const targetKeywords = {
  primary: ['flare gas recovery', 'flare gas monetization', 'stranded gas solutions'],
  secondary: ['wellhead power generation', 'oilfield services Texas', 'digital midstream'],
  longTail: ['bitcoin mining flare gas', 'digital flare mitigation', 'natural gas flaring solutions'],
};

// Per-page SEO configurations
export const pagesSEO = {
  home: {
    title: '10NetZero | Turn Stranded Gas Into Revenue',
    description: 'Monetize your stranded natural gas with zero capital required. Flare gas recovery, wellhead power generation, and digital infrastructure for Texas oil operators.',
    keywords: ['stranded gas monetization', 'flare gas recovery', 'wellhead power', 'oilfield services Texas'],
    path: '/',
  },
  digitalMidstream: {
    title: 'Digital Midstream Solutions | Flare Gas Recovery | 10NetZero',
    description: 'Convert flared gas into revenue with our Digital Midstream platform. On-site power generation, Bitcoin mining, and H2S treatment. Zero capital, same-day deployment.',
    keywords: ['digital midstream', 'flare gas recovery system', 'digital flare mitigation', 'wellhead bitcoin mining'],
    path: '/digital-midstream',
  },
  consultingDesign: {
    title: 'Consulting & Engineering Design | 10NetZero',
    description: 'Expert consulting for flare gas monetization projects. Feasibility studies, regulatory compliance, and engineering design for stranded gas solutions.',
    keywords: ['flare gas consulting', 'oilfield engineering', 'gas monetization design'],
    path: '/consulting-design',
  },
  dataCenterOps: {
    title: 'Data Center Operations | Wellhead Computing | 10NetZero',
    description: 'Mobile data center operations powered by stranded natural gas. High-performance computing at the wellhead with 99.9% uptime.',
    keywords: ['wellhead data center', 'mobile computing', 'flare gas bitcoin mining'],
    path: '/data-center-operations',
  },
  blog: {
    title: 'Insights & Updates | 10NetZero',
    description: 'Industry insights on flare gas monetization, stranded gas solutions, and the future of digital midstream infrastructure.',
    keywords: ['flare gas news', 'stranded gas industry', 'digital midstream updates'],
    path: '/blog',
  },
  team: {
    title: 'Leadership Team | 10NetZero',
    description: 'Meet the team behind 10NetZero. Experienced oil & gas professionals and technologists building the future of stranded gas monetization.',
    keywords: ['10netzero team', 'oil gas leadership'],
    path: '/team',
  },
};

// Organization schema data
export const organizationData = {
  '@type': 'Organization',
  name: '10NetZero',
  url: 'https://10netzero.com',
  logo: 'https://10netzero.com/logo.png',
  description: siteConfig.canonicalDescription,
  foundingDate: '2023',
  founders: [
    {
      '@type': 'Person',
      name: 'Chris Aulds',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Houston',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Texas Permian Basin',
  },
  sameAs: [
    'https://www.linkedin.com/company/10netzero',
  ],
};

// Service schema template
export const serviceSchemaTemplate = {
  '@type': 'Service',
  provider: {
    '@type': 'Organization',
    name: '10NetZero',
  },
  areaServed: {
    '@type': 'State',
    name: 'Texas',
  },
};

// Helper to build full URLs from paths
export const buildUrl = (path: string): string => {
  const base = siteConfig.siteUrl.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
};
