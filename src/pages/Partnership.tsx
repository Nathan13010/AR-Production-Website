import { ArrowRight, Code2, Download, Gauge, Headphones, PanelsTopLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import { partnershipContent } from '../content/pageContent';
import { useLanguage } from '../context/LanguageContext';
import './Partnership.css';

const proofIcons = [Code2, Gauge, Headphones];
const benefitIcons = { dark: PanelsTopLeft, light: Headphones } as const;

export default function Partnership() {
  const { locale } = useLanguage();
  const content = partnershipContent[locale];
  const brochure = locale === 'fr' ? '/assets/Programme_Partenaires_AR_Production.pdf' : '/assets/Partner_Program_AR_Production.pdf';

  return (
    <>
      <Helmet>
        <title>{content.seo.title}</title><meta name="description" content={content.seo.description} />
        <meta property="og:title" content={content.seo.title} /><meta property="og:description" content={content.seo.description} />
        <meta property="og:url" content="https://ardittiproduction.com/partnership" /><meta property="og:image" content="https://ardittiproduction.com/og.png" />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <section className="partnership-hero">
        <img className="partnership-hero__background" src="/assets/Office_Shot_Foe7DU3zNDvgMJ3Pd8s3w.webp" alt="" />
        <div className="partnership-hero__shade" />
        <div className="partnership-hero__content site-container">
          <div className="partnership-hero__copy">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p>{content.description} <em>{content.promise}</em></p>
            <div className="partnership-hero__actions">
              <Button href={brochure} target="_blank" rel="noreferrer" variant="secondary">{content.download}<Download size={16} /></Button>
              <Button href="/#contact" variant="outline" className="partnership-hero__contact" analyticsEvent="contact_click" analyticsLabel="partnership_hero">{content.contact}</Button>
            </div>
          </div>
          <div className="partnership-visual">
            <strong className="partnership-visual__margin">{content.margin} {content.marginLabel}</strong>
            <div className="partnership-visual__list">
              {content.proof.map((proof, index) => {
                const Icon = proofIcons[index];
                return <article key={proof.title}><span><Icon size={25} strokeWidth={1.5} /></span><div><h2>{proof.title}</h2><p>{proof.description}</p></div></article>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="partnership-benefits site-container">
        <div className="partnership-benefits__heading">{content.whyEyebrow && <p className="eyebrow">{content.whyEyebrow}</p>}<h2>{content.whyTitle}</h2></div>
        <div className="partnership-benefits__grid">
          {content.benefits.map((benefit) => {
            const BenefitIcon = benefit.kind === 'dark' || benefit.kind === 'light' ? benefitIcons[benefit.kind] : null;
            return (
              <article className={`benefit-card benefit-card--${benefit.kind}`} key={benefit.title}>
                {benefit.kind === 'image' && <img src="/assets/sofa_configurator_jvktVsOoc8yb6iclDP3FQ.png" alt="Configurateur de canapé 3D" loading="lazy" />}
                {benefit.kind === 'number' && <strong>15%</strong>}
                {BenefitIcon && <span className="benefit-card__icon"><BenefitIcon size={29} strokeWidth={1.45} aria-hidden="true" /></span>}
                <div className="benefit-card__body"><h3>{benefit.title}</h3><p>{benefit.description}</p></div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="partnership-cta">
        <div className="site-container"><h2>{content.cta.title}</h2><p>{content.cta.description}</p><div><Button href="/#contact" variant="dark" analyticsEvent="contact_click" analyticsLabel="partnership_cta">{content.cta.primary}<ArrowRight size={16} /></Button>{content.cta.secondary && <Button href={brochure} target="_blank" rel="noreferrer" variant="outline">{content.cta.secondary}<Download size={16} /></Button>}</div></div>
      </section>
    </>
  );
}
