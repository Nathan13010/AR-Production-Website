import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getRouteInfo } from '../content/routeManifest';

interface SeoProps {
  title: string;
  description: string;
  type?: 'WebSite' | 'Service' | 'Organization' | 'Article';
  robots?: string;
}

export default function Seo({ title, description, type = 'WebSite', robots: customRobots }: SeoProps) {
  const { locale } = useLanguage();
  const location = useLocation();
  const routeInfo = getRouteInfo(location.pathname);

  const siteName = 'AR Production';
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;

  // Canonical URL
  const domain = 'https://ardittiproduction.com';
  let path = location.pathname;
  if (path.endsWith('/') && path !== '/' && path !== '/en/') {
    path = path.slice(0, -1);
  }
  const canonicalUrl = `${domain}${path}`;

  // Hreflang setup
  const hasAlternate = routeInfo && routeInfo.alternatePath;
  const alternateUrl = hasAlternate ? `${domain}${routeInfo.alternatePath}` : null;
  const frUrl = locale === 'fr' ? canonicalUrl : alternateUrl;
  const enUrl = locale === 'en' ? canonicalUrl : alternateUrl;

  const robots = customRobots || (routeInfo?.isIndexable === false ? 'noindex,nofollow' : 'index,follow');

  // Base Schema.org Organization (can be embedded everywhere or just on Home, we embed it on all pages as Publisher)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AR Production',
    url: domain,
    logo: `${domain}/assets/logo_SGoqp0mV5VxnBBR6XnRNB.svg`,
  };

  // Page specific Schema
  let pageSchema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': type,
    name: fullTitle,
    description: description,
    url: canonicalUrl,
    publisher: { '@id': `${domain}/#organization` },
  };

  if (type === 'Service') {
    pageSchema = {
      ...pageSchema,
      provider: { '@id': `${domain}/#organization` },
    };
  } else if (type === 'WebSite') {
    pageSchema = {
      ...pageSchema,
      publisher: organizationSchema,
    };
  }

  return (
    <Helmet>
      <html lang={locale} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      <link rel="canonical" href={canonicalUrl} />
      {frUrl && <link rel="alternate" hrefLang="fr" href={frUrl} />}
      {enUrl && <link rel="alternate" hrefLang="en" href={enUrl} />}
      {/* x-default points to FR version as it's the root */}
      {frUrl && <link rel="alternate" hrefLang="x-default" href={frUrl} />}

      <meta property="og:type" content={type === 'Article' ? 'article' : 'website'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${domain}/assets/banner.webp`} />

      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </script>
      {type !== 'WebSite' && (
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      )}
    </Helmet>
  );
}
