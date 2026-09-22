export type RouteId = 'home' | 'viewer' | 'configurator' | 'ar' | 'pricing' | 'demo' | 'partnership' | 'legal' | 'privacy';
export type Locale = 'fr' | 'en';

export interface RouteInfo {
  id: RouteId;
  locale: Locale;
  path: string;
  alternatePath: string;
  isIndexable: boolean;
}

export const routes: Record<Locale, Record<RouteId, RouteInfo>> = {
  fr: {
    home: { id: 'home', locale: 'fr', path: '/', alternatePath: '/en/', isIndexable: true },
    viewer: { id: 'viewer', locale: 'fr', path: '/viewer', alternatePath: '/en/viewer', isIndexable: true },
    configurator: { id: 'configurator', locale: 'fr', path: '/configurator', alternatePath: '/en/configurator', isIndexable: true },
    ar: { id: 'ar', locale: 'fr', path: '/ar', alternatePath: '/en/ar', isIndexable: true },
    pricing: { id: 'pricing', locale: 'fr', path: '/pricing', alternatePath: '/en/pricing', isIndexable: true },
    demo: { id: 'demo', locale: 'fr', path: '/demo', alternatePath: '/en/demo', isIndexable: true },
    partnership: { id: 'partnership', locale: 'fr', path: '/partnership', alternatePath: '/en/partnership', isIndexable: false },
    legal: { id: 'legal', locale: 'fr', path: '/legal', alternatePath: '/en/legal', isIndexable: true },
    privacy: { id: 'privacy', locale: 'fr', path: '/privacy', alternatePath: '/en/privacy', isIndexable: true },
  },
  en: {
    home: { id: 'home', locale: 'en', path: '/en/', alternatePath: '/', isIndexable: true },
    viewer: { id: 'viewer', locale: 'en', path: '/en/viewer', alternatePath: '/viewer', isIndexable: true },
    configurator: { id: 'configurator', locale: 'en', path: '/en/configurator', alternatePath: '/configurator', isIndexable: true },
    ar: { id: 'ar', locale: 'en', path: '/en/ar', alternatePath: '/ar', isIndexable: true },
    pricing: { id: 'pricing', locale: 'en', path: '/en/pricing', alternatePath: '/pricing', isIndexable: true },
    demo: { id: 'demo', locale: 'en', path: '/en/demo', alternatePath: '/demo', isIndexable: true },
    partnership: { id: 'partnership', locale: 'en', path: '/en/partnership', alternatePath: '/partnership', isIndexable: false },
    legal: { id: 'legal', locale: 'en', path: '/en/legal', alternatePath: '/legal', isIndexable: true },
    privacy: { id: 'privacy', locale: 'en', path: '/en/privacy', alternatePath: '/privacy', isIndexable: true },
  },
};

export function getRouteInfo(pathname: string): RouteInfo | undefined {
  let normalizedPath = pathname;
  // Handle trailing slashes gracefully but keep /en/ intact
  if (normalizedPath.endsWith('/') && normalizedPath !== '/' && normalizedPath !== '/en/') {
    normalizedPath = normalizedPath.slice(0, -1);
  }
  // In dev server, paths might start with /index.html. We usually strip it,
  // but react router might handle it. Let's just strictly match the path.

  for (const locale of Object.values(routes)) {
    for (const route of Object.values(locale)) {
      if (route.path === normalizedPath) {
        return route;
      }
    }
  }
  return undefined;
}
