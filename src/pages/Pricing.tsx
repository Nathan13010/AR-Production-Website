import { ArrowRight, Check, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import { pricingContent } from '../content/pageContent';
import { useLanguage } from '../context/LanguageContext';
import './Pricing.css';

export default function Pricing() {
  const { locale } = useLanguage();
  const content = pricingContent[locale];

  return (
    <>
      <Helmet>
        <title>{content.seo.title}</title><meta name="description" content={content.seo.description} />
        <meta property="og:title" content={content.seo.title} /><meta property="og:description" content={content.seo.description} />
        <meta property="og:url" content="https://ardittiproduction.com/pricing" /><meta property="og:image" content="https://ardittiproduction.com/og.png" />
      </Helmet>

      <section className="pricing-hero site-container">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <div className="pricing-promises">
          {content.promises.map((promise) => <span key={promise}><CheckCircle2 size={17} />{promise}</span>)}
        </div>
      </section>

      {content.sections.map((section) => (
        <section className="pricing-section site-container" key={section.title}>
          <div className="pricing-section__heading"><h2>{section.title}</h2><p>{section.subtitle}</p></div>
          <div className="pricing-grid">
            {section.cards.map((card) => (
              <article className={`price-card ${'popular' in card && card.popular ? 'is-popular' : ''}`} key={card.name}>
                {'popular' in card && card.popular && <div className="price-card__popular">{content.popular}</div>}
                <header><h3>{card.name}</h3>{card.audience && <p>{card.audience}</p>}</header>
                <div className="price-card__price">
                  <div>{!card.price.toLowerCase().includes('devis') && !card.price.toLowerCase().includes('quote') && !card.price.toLowerCase().includes('request') && <span>{content.from} </span>}<strong>{card.price}</strong>{!card.price.toLowerCase().includes('devis') && !card.price.toLowerCase().includes('quote') && !card.price.toLowerCase().includes('request') && <small> {content.perProduct}</small>}</div>
                  {!card.price.toLowerCase().includes('devis') && !card.price.toLowerCase().includes('quote') && !card.price.toLowerCase().includes('request') && <em>{content.depending}</em>}
                </div>
                {card.creation && <p className="price-card__creation">{card.creation}</p>}
                {'monthlyPrice' in card && card.monthlyPrice && (
                  <><strong className="price-card__hosting">{content.hosting}</strong><div className="price-card__monthly"><span>{content.monthly}</span><strong>{card.monthlyPrice}</strong></div></>
                )}
                <ul>{card.features.map((feature) => <li key={feature}><span><Check size={13} /></span>{feature}</li>)}</ul>
                <Button href={`/?offer=${encodeURIComponent(`${section.title.replace(/^\d+\.\s*/, '')} — ${card.name}`)}#contact`} variant={'popular' in card && card.popular ? 'dark' : 'outline'} analyticsEvent="contact_click" analyticsLabel={`pricing_${section.title}_${card.name}`}>{card.button}<ArrowRight size={16} /></Button>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="pricing-cta">
        <div className="site-container"><h2>{content.cta.title}</h2><p>{content.cta.description}</p><div><Button href="/#contact" variant="secondary" analyticsEvent="contact_click" analyticsLabel="pricing_cta">{content.cta.primary}<ArrowRight size={16} /></Button>{content.cta.secondary && <Button to="/demo" variant="outline" className="pricing-cta__outline" analyticsEvent="demo_click" analyticsLabel="pricing_cta">{content.cta.secondary}</Button>}</div></div>
      </section>
    </>
  );
}
