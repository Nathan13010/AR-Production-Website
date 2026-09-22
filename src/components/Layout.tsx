import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { sharedContent } from '../content/siteContent';
import { useLanguage } from '../context/LanguageContext';
import { getRouteInfo } from '../content/routeManifest';
import Button from './Button';
import Footer from './Footer';
import './Layout.css';

export default function Layout() {
  const { locale } = useLanguage();
  const content = sharedContent[locale].nav;
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const solutionLabels = locale === 'fr'
    ? { viewer: 'Viewer 3D', configurator: 'Configurateur 3D', ar: 'Réalité Augmentée' }
    : { viewer: '3D Viewer', configurator: '3D Configurator', ar: 'Augmented Reality' };

  // Helper for localized links
  const getLocalizedPath = (path: string) => {
    if (locale === 'fr') return path;
    if (path === '/') return '/en/';
    return `/en${path}`;
  };

  const routeInfo = getRouteInfo(location.pathname);
  const frUrl = locale === 'fr' ? location.pathname : (routeInfo?.alternatePath || '/');
  const enUrl = locale === 'en' ? location.pathname : (routeInfo?.alternatePath || '/en/');

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const targetId = decodeURIComponent(location.hash.slice(1));
    const scrollToTarget = () => {
      const element = document.getElementById(targetId) || (targetId === 'solutions' ? document.querySelector('.home-solutions') : null);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const frame = window.requestAnimationFrame(scrollToTarget);
    const timeout = window.setTimeout(scrollToTarget, 100);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [location.hash, location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleSolutionsClick = () => {
    const homePath = getLocalizedPath('/');
    if (location.pathname === homePath) {
      const target = document.getElementById('solutions') || document.querySelector('.home-solutions');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (location.hash !== '#solutions') {
        navigate(homePath + '#solutions', { replace: true });
      }
    } else {
      navigate(homePath + '#solutions');
    }
  };

  const solutionsActive = ['/viewer', '/configurator', '/ar', '/en/viewer', '/en/configurator', '/en/ar'].includes(location.pathname);
  const navLinks = (
    <>
      <div className="site-header__solutions">
        <button
          className={`site-header__nav-link ${solutionsActive ? 'is-active' : ''}`}
          type="button"
          onClick={handleSolutionsClick}
        >
          {content.solutions}<ChevronDown size={14} aria-hidden="true" />
        </button>
        <div className="site-header__solutions-menu">
          <NavLink to={getLocalizedPath('/viewer')}>{solutionLabels.viewer}</NavLink>
          <NavLink to={getLocalizedPath('/configurator')}>{solutionLabels.configurator}</NavLink>
          <NavLink to={getLocalizedPath('/ar')}>{solutionLabels.ar}</NavLink>
        </div>
      </div>
      <NavLink className="site-header__nav-link" to={getLocalizedPath('/pricing')}>{content.pricing}</NavLink>
      <NavLink className="site-header__nav-link" to={getLocalizedPath('/demo')} data-analytics-event="demo_click" data-analytics-label="header">{content.demo}</NavLink>
      <a className="site-header__nav-link" href={getLocalizedPath('/') + '#contact'} data-analytics-event="contact_click" data-analytics-label="header">{content.contact}</a>
    </>
  );

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="site-header__logo" to={getLocalizedPath('/')} aria-label={`AR Production — ${locale === 'fr' ? 'Accueil' : 'Home'}`}>
            <img src="/assets/logo_SGoqp0mV5VxnBBR6XnRNB.svg" alt="AR Production" />
          </Link>

          <div className="site-header__center">
            <nav className="site-header__desktop-nav" aria-label="Navigation principale">{navLinks}</nav>
            <div className="language-picker">
              <button className="language-picker__trigger" type="button" aria-label={locale === 'fr' ? 'Français' : 'English'} aria-haspopup="menu" aria-expanded={languageOpen} onClick={() => setLanguageOpen((open) => !open)}>
                <img src={locale === 'fr' ? '/assets/fr_L-873D0frddRC6iXjQrVR.svg' : '/assets/gb_JUA2CEXUsjTUSdAaQfN0P.svg'} alt="" />
                <ChevronDown size={13} aria-hidden="true" />
              </button>
              {languageOpen && (
                <div className="language-picker__menu" role="menu" aria-label={content.language}>
                  <Link id="lang-fr" role="menuitem" to={frUrl} onClick={() => setLanguageOpen(false)}><img src="/assets/fr_L-873D0frddRC6iXjQrVR.svg" alt="" /> Français</Link>
                  <Link id="lang-en" role="menuitem" to={enUrl} onClick={() => setLanguageOpen(false)}><img src="/assets/gb_JUA2CEXUsjTUSdAaQfN0P.svg" alt="" /> English</Link>
                </div>
              )}
            </div>
          </div>

          <div className="site-header__actions">
            <Button href={getLocalizedPath('/') + '#contact'} variant="dark" className="site-header__quote" analyticsEvent="contact_click" analyticsLabel="header_quote">{content.quote}</Button>
            <button className="site-header__menu-button" type="button" aria-label={menuOpen ? content.closeMenu : content.openMenu} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
          <nav className="mobile-menu__nav" aria-label="Navigation mobile">
            <Link to={getLocalizedPath('/viewer')} onClick={() => setMenuOpen(false)}>{solutionLabels.viewer}</Link>
            <Link to={getLocalizedPath('/configurator')} onClick={() => setMenuOpen(false)}>{solutionLabels.configurator}</Link>
            <Link to={getLocalizedPath('/ar')} onClick={() => setMenuOpen(false)}>{solutionLabels.ar}</Link>
            <Link to={getLocalizedPath('/pricing')} onClick={() => setMenuOpen(false)}>{content.pricing}</Link>
            <Link to={getLocalizedPath('/demo')} onClick={() => setMenuOpen(false)} data-analytics-event="demo_click" data-analytics-label="mobile_menu">{content.demo}</Link>
            <a href={getLocalizedPath('/') + '#contact'} onClick={() => setMenuOpen(false)} data-analytics-event="contact_click" data-analytics-label="mobile_menu">{content.contact}</a>
            <Button href={getLocalizedPath('/') + '#contact'} variant="dark" analyticsEvent="contact_click" analyticsLabel="mobile_quote">{content.quote}</Button>
          </nav>
        </div>
      </header>
      <main><Outlet /></main>
      <Footer />
    </div>
  );
}
