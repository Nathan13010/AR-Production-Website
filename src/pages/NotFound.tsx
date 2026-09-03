import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import './NotFound.css';

export default function NotFound() {
  const { locale } = useLanguage();
  const content = locale === 'fr'
    ? { title: 'Page non trouvée', description: "La page que vous recherchez n'existe pas.", button: "Retour à l'accueil" }
    : { title: 'Page not found', description: 'The page you are looking for does not exist.', button: 'Back to home' };

  return (
    <section className="not-found site-container">
      <Helmet><title>404 — {content.title}</title><meta name="robots" content="noindex" /></Helmet>
      <span>404</span><h1>{content.title}</h1><p>{content.description}</p><Button to="/" variant="dark">{content.button}</Button>
    </section>
  );
}
