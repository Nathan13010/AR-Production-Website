import { Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sharedContent } from '../content/siteContent';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { locale } = useLanguage();
  const content = sharedContent[locale].footer;

  return (
    <footer className="footer">
      <div className="footer__inner site-container">
        <div className="footer__brand">
          <img src="/assets/logo_SGoqp0mV5VxnBBR6XnRNB.svg" alt="AR Production" />
          <strong>AR Production</strong>
          <p>{content.description}</p>
        </div>
        <div className="footer__column">
          <h2>{content.navigation}</h2>
          <Link to="/">{content.home}</Link><a href="/#solutions">{content.solutions}</a><Link to="/pricing">{content.pricing}</Link><Link to="/demo" data-analytics-event="demo_click" data-analytics-label="footer">{content.demo}</Link>
        </div>
        <div className="footer__column">
          <h2>{content.company}</h2>
          <a href="/#contact" data-analytics-event="contact_click" data-analytics-label="footer">{content.contact}</a><Link to="/privacy">{content.privacy}</Link><Link to="/legal">{content.terms}</Link>
        </div>
        <div className="footer__column footer__socials">
          <h2>{content.social}</h2>
          <div>
            <a href="mailto:arditti.production@gmail.com?subject=Demande%20AR%20Production" aria-label="Envoyer un email à AR Production"><Mail size={19} /></a>
            <a href="https://www.instagram.com/ar_production_3d?igsh=MXZtdXM0M2g5dGxseg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram"><span className="instagram-mark" aria-hidden="true" /></a>
            <a href="https://wa.me/33634101925" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={19} /></a>
            <a href="https://www.linkedin.com/company/ar-production-3d" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span className="linkedin-mark" aria-hidden="true" /></a>
          </div>
        </div>
      </div>
      <div className="footer__bottom site-container">© 2026 AR Production. {content.rights}</div>
    </footer>
  );
}
