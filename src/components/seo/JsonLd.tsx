import { Helmet } from 'react-helmet-async';

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  const jsonLd = Array.isArray(data)
    ? {
        '@context': 'https://schema.org',
        '@graph': data,
      }
    : {
        '@context': 'https://schema.org',
        ...data,
      };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

// Pre-built schema generators

export function OrganizationSchema() {
  const data = {
    '@type': 'Organization',
    name: '10NetZero',
    url: 'https://10netzero.com',
    logo: 'https://10netzero.com/logo.png',
    description: 'Monetizing stranded natural gas through digital infrastructure',
    foundingDate: '2023',
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
    sameAs: ['https://www.linkedin.com/company/10netzero'],
  };

  return <JsonLd data={data} />;
}

export function WebSiteSchema() {
  const data = {
    '@type': 'WebSite',
    name: '10NetZero',
    url: 'https://10netzero.com',
    description: 'Monetizing stranded natural gas through digital infrastructure',
    publisher: {
      '@type': 'Organization',
      name: '10NetZero',
    },
  };

  return <JsonLd data={data} />;
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const data = {
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: '10NetZero',
      url: 'https://10netzero.com',
    },
    areaServed: {
      '@type': 'State',
      name: 'Texas',
    },
    serviceType: 'Flare Gas Monetization',
  };

  return <JsonLd data={data} />;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export function FAQSchema({ items }: FAQSchemaProps) {
  const data = {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}

interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  url?: string;
}

export function PersonSchema({ name, jobTitle, description, image, url }: PersonSchemaProps) {
  const data: Record<string, unknown> = {
    '@type': 'Person',
    name,
    jobTitle,
    worksFor: {
      '@type': 'Organization',
      name: '10NetZero',
    },
  };

  if (description) data.description = description;
  if (image) data.image = image;
  if (url) data.url = url;

  return <JsonLd data={data} />;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const data = {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={data} />;
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  author: string;
  url: string;
  image?: string;
}

export function ArticleSchema({ title, description, datePublished, author, url, image }: ArticleSchemaProps) {
  const data: Record<string, unknown> = {
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: '10NetZero',
      url: 'https://10netzero.com',
    },
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  if (image) data.image = image;

  return <JsonLd data={data} />;
}

export default JsonLd;
