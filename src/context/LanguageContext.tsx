import { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import { getRouteInfo } from '../content/routeManifest';
import { useHydrated } from '../hooks/useHydrated';

export type Locale = 'fr' | 'en';

interface LanguageContextValue {
  locale: Locale;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const routeInfo = getRouteInfo(location.pathname);
  const hydrated = useHydrated();

  // Unknown URLs receive the shared French 404.html from the static host.
  // Match it during hydration before localizing the error page in the browser.
  const locale: Locale = routeInfo ? routeInfo.locale : (hydrated && location.pathname.startsWith('/en/') ? 'en' : 'fr');

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => ({ locale }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
