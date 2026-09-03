import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { legalContent } from '../content/legalContent';
import { useLanguage } from '../context/LanguageContext';
import './LegalPage.css';

type LegalPageKind = 'legal' | 'privacy';

export default function LegalPage({ kind }: { kind: LegalPageKind }) {
  const { locale } = useLanguage();
  const page = legalContent[locale][kind];
  const [analyticsDisabled, setAnalyticsDisabled] = useState(() => {
    try { return localStorage.getItem('ar-analytics-opt-out') === 'true'; }
    catch { return false; }
  });

  const toggleAnalytics = () => {
    const nextValue = !analyticsDisabled;
    try {
      if (nextValue) localStorage.setItem('ar-analytics-opt-out', 'true');
      else localStorage.removeItem('ar-analytics-opt-out');
    } catch { /* The browser may block local storage. */ }
    setAnalyticsDisabled(nextValue);
    window.location.reload();
  };

  return (
    <>
      <Helmet>
        <title>{page.title} — AR Production</title>
        <meta name="description" content={page.intro} />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <section className="legal-page site-container">
        <header className="legal-page__header">
          <p className="eyebrow">AR PRODUCTION</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <small>{page.updated}</small>
        </header>

        <div className="legal-page__content">
          {page.sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {kind === 'privacy' && section.title === (locale === 'fr' ? 'Mesure d’audience et traceurs' : 'Audience measurement and trackers') && (
                <div className="legal-page__analytics">
                  <p>{analyticsDisabled ? legalContent[locale].privacy.analyticsOff : legalContent[locale].privacy.analyticsOn}</p>
                  <Button type="button" variant="outline" onClick={toggleAnalytics}>{analyticsDisabled ? legalContent[locale].privacy.enableAnalytics : legalContent[locale].privacy.disableAnalytics}</Button>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="legal-page__footer-links">
          {kind === 'legal' ? <Link to="/privacy">{legalContent[locale].privacy.title}</Link> : <Link to="/legal">{legalContent[locale].legal.title}</Link>}
          <Link to="/">{locale === 'fr' ? 'Retour à l’accueil' : 'Back to home'}</Link>
        </div>
      </section>
    </>
  );
}
