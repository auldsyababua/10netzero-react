import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export function SEOHead({
  title = siteConfig.defaultTitle,
  description = siteConfig.defaultDescription,
  keywords = [],
  path = '/',
  image = '/og-image.png',
  type = 'website',
  noindex = false,
}: SEOHeadProps) {
  const canonicalUrl = `${siteConfig.siteUrl}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${siteConfig.siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:locale" content={siteConfig.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {siteConfig.twitterHandle && (
        <meta name="twitter:site" content={siteConfig.twitterHandle} />
      )}
    </Helmet>
  );
}

export default SEOHead;
