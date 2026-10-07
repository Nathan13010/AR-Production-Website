import { ArrowRight, BadgeEuro, Code2, MonitorSmartphone, Move3D, Palette, ShoppingCart, Smartphone } from 'lucide-react';
import Seo from '../components/Seo';
import Button from '../components/Button';
import { solutionContent } from '../content/pageContent';
import type { SolutionKind } from '../content/pageContent';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import './SolutionPage.css';

const featureIcons = {
  move: Move3D,
  phone: Smartphone,
  monitor: MonitorSmartphone,
  palette: Palette,
  price: BadgeEuro,
  cart: ShoppingCart,
} as const;

const processIcons = [Smartphone, Palette, Code2];

export default function SolutionPage({ kind }: { kind: SolutionKind }) {
  const { locale } = useLanguage();
  const localized = solutionContent[locale];
  const content = localized[kind];
  const arTitleParts = kind === 'ar' ? [content.title.slice(0, content.title.indexOf(':') + 1), content.title.slice(content.title.indexOf(':') + 1).trim()] : null;
  const ctaTitleParts = locale === 'fr' ? ['Prêt à transformer', 'votre expérience client ?'] : ['Ready to transform', 'your customer experience?'];
  const localizePath = (path: string) => locale === 'en' ? (path === '/' ? '/en' : `/en${path}`) : path;

  const getPoster = () => {
    switch (kind) {
      case 'viewer': return '/assets/Viewer_2.webp';
      case 'configurator': return '/assets/Configurator_1_PvMB6tzS7sOPTEdZVWNid.webp';
      case 'ar': return '/assets/AR_2.webp';
      default: return undefined;
    }
  };

  return (
    <>
      <Seo
        title={content.seoTitle}
        description={content.description}
        type="Service"
      />

      <section className="solution-hero site-container">
        <div className="solution-hero__content">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{arTitleParts ? <>{arTitleParts[0]}<br />{arTitleParts[1]}</> : content.title}</h1>
          <p>{content.description}</p>
          <Button to={localizePath('/demo')} variant="dark" analyticsEvent="demo_click" analyticsLabel={`${kind}_hero`}>{content.example}<ArrowRight size={17} /></Button>
        </div>
        <div className="solution-hero__media">
          <video src={content.video} poster={getPoster()} autoPlay muted loop playsInline preload="none" aria-label={`${content.seoTitle} 3D`} />
        </div>
      </section>

      <section className="solution-features" id="features">
        <div className="site-container">
          <div className="solution-section-heading">
            <h2>{content.sectionTitle}</h2>
            <p>{content.sectionSubtitle}</p>
          </div>
          <div className="solution-features__grid">
            {content.features.map((feature) => {
              const Icon = featureIcons[feature.icon];
              return (
                <article className="solution-feature" key={feature.title}>
                  <span><Icon size={25} strokeWidth={1.6} aria-hidden="true" /></span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="solution-process site-container">
        <div className="solution-section-heading">
          <h2>{localized.process.title}</h2>
          <p>{'processSubtitle' in content ? content.processSubtitle : localized.process.subtitle}</p>
        </div>
        <div className="solution-process__steps">
          {localized.process.steps.map((step, index) => {
            const Icon = processIcons[index];
            const description = index === 1 ? content.middleStep : ('description' in step ? step.description : '');
            return (
              <article className="solution-step" key={step.title}>
                <div className="solution-step__top"><span aria-hidden="true" data-step={`0${index + 1}`} /><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></div>
                <h3>{step.title}</h3>
                <p>{description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="solution-cta site-container">
        <h2><span>{ctaTitleParts[0]}</span><span>{ctaTitleParts[1]}</span></h2>
        {localized.cta.description && <p>{localized.cta.description}</p>}
        <div><Button href={`${localizePath('/')}#contact`} variant="dark" analyticsEvent="contact_click" analyticsLabel={`${kind}_cta_demo`}>{localized.cta.primary}<ArrowRight size={17} /></Button><Button to={localizePath('/pricing')} variant="outline">{localized.cta.secondary}</Button></div>

        <div className="solution-internal-links" style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          {locale === 'en' ? (
            <>
              {kind === 'configurator' && (
                <p>Not sure if you need full customization? Explore our <Link to="/en/viewer" style={{ textDecoration: 'underline' }}>3D Viewers</Link> or view our <Link to="/en/pricing" style={{ textDecoration: 'underline' }}>Pricing</Link>.</p>
              )}
              {kind === 'viewer' && (
                <p>Need users to customize the product? Check our <Link to="/en/configurator" style={{ textDecoration: 'underline' }}>3D Configurators</Link> or explore <Link to="/en/ar" style={{ textDecoration: 'underline' }}>AR features</Link>.</p>
              )}
              {kind === 'ar' && (
                <p>Want to see how this integrates? View our <Link to="/en/viewer" style={{ textDecoration: 'underline' }}>3D Viewers</Link> or browse the <Link to="/en/demo" style={{ textDecoration: 'underline' }}>Demo Gallery</Link>.</p>
              )}
            </>
          ) : (
            <>
              {kind === 'configurator' && (
                <p>Vous n'avez pas besoin d'une personnalisation complète ? Découvrez nos <Link to="/viewer" style={{ textDecoration: 'underline' }}>Viewers 3D</Link> ou consultez nos <Link to="/pricing" style={{ textDecoration: 'underline' }}>Tarifs</Link>.</p>
              )}
              {kind === 'viewer' && (
                <p>Vous souhaitez permettre à vos clients de personnaliser le produit ? Découvrez nos <Link to="/configurator" style={{ textDecoration: 'underline' }}>Configurateurs 3D</Link> ou explorez nos fonctionnalités de <Link to="/ar" style={{ textDecoration: 'underline' }}>Réalité Augmentée</Link>.</p>
              )}
              {kind === 'ar' && (
                <p>Vous souhaitez voir comment nos solutions s'intègrent ? Consultez nos <Link to="/viewer" style={{ textDecoration: 'underline' }}>Viewers 3D</Link> ou explorez notre <Link to="/demo" style={{ textDecoration: 'underline' }}>Galerie de Démos</Link>.</p>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
