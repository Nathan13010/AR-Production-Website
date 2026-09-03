import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter';
import Button from '../components/Button';
import PartnerLogos from '../components/PartnerLogos';
import { homeContent } from '../content/siteContent';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const contactIcons = {
  mail: '/assets/mail-svgrepo-com_psO0R6Mllzz3eDiBkTrO3.svg',
  phone: '/assets/phone-svgrepo-com__vqrSsdcpP2QNAZxxCPGw.svg',
  map: '/assets/map-tag-svgrepo-com_XYogS06cXOwgFjPZoItoe.svg',
  clock: '/assets/time-svgrepo-com_Z600RGgJzO1N5ZX5bd4ZH.svg',
} as const;

const contactApiUrl = 'https://ar-analytics-self.vercel.app/api/contact';

export default function Home() {
  const { locale } = useLanguage();
  const content = homeContent[locale];
  const [searchParams] = useSearchParams();
  const selectedOffer = searchParams.get('offer');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const submitContactForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setFormStatus('submitting');

    try {
      const formData = new FormData(form);
      const payload = Object.fromEntries(
        [...formData.entries()].map(([key, value]) => [key, typeof value === 'string' ? value : value.name]),
      );
      const response = await fetch(contactApiUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Form submission failed');
      form.reset();
      setFormStatus('success');
      window.dispatchEvent(new CustomEvent('ar-analytics:track', { detail: { event: 'contact_submit', label: 'formspree_success' } }));
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>{content.seo.title}</title>
        <meta name="description" content={content.seo.description} />
        <meta property="og:title" content={content.seo.title} />
        <meta property="og:description" content={content.seo.description} />
        <meta property="og:url" content="https://ardittiproduction.com/" />
        <meta property="og:image" content="https://ardittiproduction.com/og.png" />
      </Helmet>

      <section className="home-hero site-container">
        <div className="home-hero__content">
          <h1>
            <span>{content.hero.firstLine}</span>{' '}
            <span className="home-hero__muted">{content.hero.muted}</span>{' '}
            <span>{content.hero.accent}</span>
          </h1>
          <p>{content.hero.description}</p>
        </div>
        <div className="home-hero__image-wrap">
          <img src="/assets/Hero_image.webp" alt="Fauteuil configuré en 3D dans un intérieur contemporain" fetchPriority="high" />
        </div>
      </section>

      <section className="home-stats" aria-label="Résultats clients">
        <div className="home-stats__inner site-container">
          {content.stats.map((stat) => (
            <div className="home-stat" key={stat.label}>
              <strong><AnimatedCounter value={stat.value} /></strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-solutions site-container" id="solutions">
        <div className="home-solutions__heading">
          <p className="eyebrow">{content.solutions.eyebrow}</p>
          <h2 className="section-title">{content.solutions.title}</h2>
        </div>
        <div className="home-solutions__grid">
          {content.solutions.items.map((solution) => (
            <Link className="solution-card" to={solution.to} key={solution.to}>
              <div className="solution-card__image"><img src={solution.image} alt="" loading="lazy" /></div>
              <div className="solution-card__content">
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <span className="solution-card__action">{solution.action}<ArrowRight size={18} aria-hidden="true" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-trust site-container">
        <p className="eyebrow">{content.trust}</p>
        <PartnerLogos />
      </section>

      <section className="home-testimonials">
        <div className="site-container">
          <div className="home-testimonials__grid">
            {content.testimonials.items.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="testimonial-card__stars" aria-label="5 étoiles">★★★★★</div>
                <p className="testimonial-card__quote">&quot;{testimonial.quote}&quot;</p>
                <footer><strong>{testimonial.name}</strong><span>{testimonial.company}</span></footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta site-container">
        <h2>{content.cta.title}</h2>
        <p>{content.cta.description}</p>
        <div className="home-cta__actions">
          <Button href="#contact" variant="dark" analyticsEvent="contact_click" analyticsLabel="home_cta_demo">{content.cta.primary}<ArrowRight size={17} /></Button>
          <Button href="#contact" variant="outline" analyticsEvent="contact_click" analyticsLabel="home_cta_expert">{content.cta.secondary}</Button>
        </div>
      </section>

      <section className="home-contact" id="contact">
        <div className="site-container">
          <div className="home-contact__heading">
            <h2 className="section-title">{content.contact.title}</h2>
            <p>{content.contact.description}</p>
          </div>
          <div className="home-contact__layout">
            <div className="contact-information">
              <h3>{content.contact.panelTitle}</h3>
              <p>{content.contact.panelDescription}</p>
              <div className="contact-information__grid">
                {content.contact.information.map((item) => {
                  const icon = contactIcons[item.icon];
                  return (
                    <div className="contact-information__item" key={item.title}>
                      <span><img src={icon} alt="" /></span>
                      <div>
                        <strong>{item.title}</strong>
                        {item.icon === 'mail' || item.icon === 'phone'
                          ? <a className="contact-information__link" href={item.icon === 'mail' ? `mailto:${item.value}?subject=Demande%20AR%20Production` : 'tel:+33634101925'}>{item.value}</a>
                          : <p>{item.value}</p>}
                        <small>{item.note}</small>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <form className="contact-form" action="https://formspree.io/f/mjkedoyv" method="POST" onSubmit={submitContactForm}>
              <input type="hidden" name="subject" value="Nouvelle demande depuis AR Production" />
              <label className="contact-form__trap" aria-hidden="true">Website<input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
              {selectedOffer && <div className="contact-form__selection"><span>{content.contact.fields.selectedOffer}</span><strong>{selectedOffer}</strong><input type="hidden" name="offer" value={selectedOffer} /></div>}
              <label>{content.contact.fields.name}<input type="text" name="name" placeholder={content.contact.fields.namePlaceholder} autoComplete="name" required /></label>
              <label>{content.contact.fields.phone}<input type="tel" name="phone" placeholder={content.contact.fields.phonePlaceholder} autoComplete="tel" /></label>
              <label>{content.contact.fields.email}<input type="email" name="email" placeholder={content.contact.fields.emailPlaceholder} autoComplete="email" required /></label>
              <div className="contact-form__row">
                <label>{content.contact.fields.productType}<input type="text" name="product_type" placeholder={content.contact.fields.productTypePlaceholder} required /></label>
                <label>{content.contact.fields.references}<input type="number" name="reference_count" placeholder="10" min="1" inputMode="numeric" required /></label>
              </div>
              <label>{content.contact.fields.timeline}
                <select name="timeline" defaultValue="" required>
                  <option value="" disabled>{content.contact.fields.timelinePlaceholder}</option>
                  {content.contact.fields.timelineOptions.map((option) => <option value={option} key={option}>{option}</option>)}
                </select>
              </label>
              <label>{content.contact.fields.message}<textarea name="message" placeholder={content.contact.fields.messagePlaceholder} rows={6} required /></label>
              <Button type="submit" variant="dark" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? content.contact.fields.sending : content.contact.fields.submit}<ArrowRight size={17} />
              </Button>
              {formStatus === 'success' && <p className="contact-form__status is-success" role="status"><CheckCircle2 size={18} />{content.contact.fields.success}</p>}
              {formStatus === 'error' && <p className="contact-form__status is-error" role="alert">{content.contact.fields.error}</p>}
              <p className="contact-form__privacy">{content.contact.fields.privacyPrefix} <Link to="/privacy">{content.contact.fields.privacyLink}</Link>.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
