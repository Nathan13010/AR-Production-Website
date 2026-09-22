import Seo from '../components/Seo';
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
      <Seo title={`404 — ${content.title}`} description={content.description} robots="noindex,nofollow" />
      <span>404</span><h1>{content.title}</h1><p>{content.description}</p><Button to={locale === 'fr' ? '/' : '/en/'} variant="dark">{content.button}</Button>
    </section>
  );
}
