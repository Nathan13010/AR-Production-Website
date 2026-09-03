import { ArrowRight, BadgeEuro, Code2, MonitorSmartphone, Move3D, Palette, ShoppingCart, Smartphone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import { solutionContent } from '../content/pageContent';
import type { SolutionKind } from '../content/pageContent';
import { useLanguage } from '../context/LanguageContext';
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

  return (
    <>
      <Helmet>
        <title>{content.seoTitle}</title>
        <meta name="description" content={content.description} />
        <meta property="og:title" content={content.seoTitle} />
        <meta property="og:description" content={content.description} />
        <meta property="og:url" content={`https://ardittiproduction.com/${kind}`} />
        <meta property="og:image" content="https://ardittiproduction.com/og.png" />
      </Helmet>

      <section className="solution-hero site-container">
        <div className="solution-hero__content">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{arTitleParts ? <>{arTitleParts[0]}<br />{arTitleParts[1]}</> : content.title}</h1>
          <p>{content.description}</p>
          <Button to="/demo" variant="dark" analyticsEvent="demo_click" analyticsLabel={`${kind}_hero`}>{content.example}<ArrowRight size={17} /></Button>
        </div>
        <div className="solution-hero__media">
          <video src={content.video} autoPlay muted loop playsInline preload="auto" aria-label={`${content.seoTitle} 3D`} />
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
        <div><Button href="/#contact" variant="dark" analyticsEvent="contact_click" analyticsLabel={`${kind}_cta_demo`}>{localized.cta.primary}<ArrowRight size={17} /></Button><Button href="/#contact" variant="outline" analyticsEvent="contact_click" analyticsLabel={`${kind}_cta_expert`}>{localized.cta.secondary}</Button></div>
      </section>
    </>
  );
}
