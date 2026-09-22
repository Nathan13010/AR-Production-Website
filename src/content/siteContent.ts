import type { Locale } from '../context/LanguageContext';

export const sharedContent = {
  fr: {
    nav: {
      solutions: 'Nos solutions', pricing: 'Tarifs', demo: 'DEMO', partnership: 'Partenariat Agences', contact: 'Contact', quote: 'Demander un devis', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', language: 'Langue',
    },
    footer: {
      description: "Expériences produit 3D interactives pour l'e-commerce, les fabricants et les marques.", navigation: 'NAVIGATION', home: 'Accueil', solutions: 'Solutions', pricing: 'Tarifs', demo: 'DEMO', company: 'ENTREPRISE', partnership: 'Partenariat Agences', contact: 'Contact', privacy: 'Politique de confidentialité', terms: 'Mentions légales', social: 'RÉSEAUX SOCIAUX', rights: 'Tous droits réservés.',
    },
  },
  en: {
    nav: {
      solutions: 'Our Solutions', pricing: 'Pricing', demo: 'DEMO', partnership: 'Agency Partnership', contact: 'Contact', quote: 'Request a quote', openMenu: 'Open menu', closeMenu: 'Close menu', language: 'Language',
    },
    footer: {
      description: 'Interactive 3D product experiences for e-commerce, manufacturers and brands.', navigation: 'NAVIGATION', home: 'Home', solutions: 'Solutions', pricing: 'Pricing', demo: 'DEMO', company: 'COMPANY', partnership: 'Agency Partnership', contact: 'Contact', privacy: 'Privacy policy', terms: 'Legal notice', social: 'SOCIAL MEDIA', rights: 'All rights reserved.',
    },
  },
} as const;

export const homeContent = {
  fr: {
    seo: { title: 'Agence de Visualisation Produit 3D', description: 'Agence 3D spécialisée dans la création de configurateurs sur mesure, viewers 3D interactifs et expériences WebAR pour l\'e-commerce, les fabricants et les marques.' },
    hero: { firstLine: 'Expériences Produit 3D Sur Mesure.', muted: 'Boostez la conversion', accent: 'de votre e-commerce.', description: 'Nous concevons des configurateurs produit 3D interactifs, des viewers 360° et des solutions WebAR conçus pour s\'intégrer de manière fluide à votre plateforme e-commerce.' },
    integrations: {
      eyebrow: 'COMPATIBLE AVEC VOTRE E-COMMERCE',
      title: 'Compatible avec votre e-commerce.',
      description: 'Nous intégrons l\'expérience 3D directement à votre environnement existant — catalogue, variantes, tarification et panier compris.',
      ariaLabel: 'Plateformes e-commerce prises en charge',
      items: [
        { name: 'Shopify', logo: '/assets/platform-shopify.svg', detail: 'Catalogue, variantes et panier connectés' },
        { name: 'PrestaShop', logo: '/assets/platform-prestashop.svg', detail: 'Intégration fluide aux fiches produit' },
        { name: 'WooCommerce', logo: '/assets/platform-woocommerce.svg', detail: 'Options et tarification synchronisées' },
        { name: 'WordPress', logo: '/assets/platform-wordpress.svg', detail: 'Expérience 3D intégrée à votre site' },
      ],
    },
    solutions: {
      eyebrow: 'CE QUE NOUS CONCEVONS', title: 'Nos solutions 3D interactives',
      items: [
        { title: 'Configurateur Produit 3D', description: 'Permettez à vos clients de personnaliser les couleurs, matières et options en temps réel avec mise à jour dynamique du prix.', action: 'Explorer les Configurateurs', image: '/assets/Configurator_1_PvMB6tzS7sOPTEdZVWNid.webp', to: '/configurator' },
        { title: 'Viewer 3D Interactif', description: 'Remplacez les images statiques. Laissez vos clients pivoter, zoomer et inspecter chaque détail de vos produits directement sur la fiche produit.', action: 'Explorer les Viewers 3D', image: '/assets/Viewer_2.webp', to: '/viewer' },
        { title: 'Réalité Augmentée (WebAR)', description: 'Projetez le mobilier et les produits physiques directement dans la pièce de vos clients à l\'échelle réelle depuis leur smartphone.', action: 'Explorer la Réalité Augmentée', image: '/assets/AR_2.webp', to: '/ar' },
      ],
    },
    trust: 'ILS NOUS FONT CONFIANCE',
    testimonials: {
      eyebrow: 'ILS PARLENT DE NOUS', title: 'Ce que nos clients disent',
      items: [
        { quote: "La solution 3D a révolutionné notre e-commerce. +250% d'engagement sur nos produits !", name: 'Marie Kassler', company: 'Jadium' },
        { quote: 'Interface intuitive et résultats bluffants. Nos clients adorent pouvoir personnaliser en 3D.', name: 'Thomas Martines', company: 'Watch-us' },
        { quote: "ROI exceptionnel dès le premier mois. L'équipe est très professionnelle et réactive.", name: 'Max Adam', company: 'Casero Möbel' },
      ],
    },
    cta: { title: 'Prêt à transformer votre expérience client ?', description: 'Rejoignez les marques qui redéfinissent le commerce en ligne avec la 3D.', primary: 'Demander une démo gratuite', secondary: 'Contacter un expert' },
    contact: {
      eyebrow: 'NOUS CONTACTER', title: 'Nous contacter', description: 'Prêt à transformer vos produits en expériences 3D ? Contactez-nous pour discuter de votre projet', panelTitle: 'Parlons de votre projet', panelDescription: "Nous sommes là pour vous accompagner dans la création d'expériences 3D exceptionnelles. Contactez-nous pour une consultation gratuite.",
      information: [
        { icon: 'mail', title: 'Email', value: 'arditti.production@gmail.com', note: 'Réponse sous 24h' }, { icon: 'phone', title: 'Téléphone', value: '+33 6 34 10 19 25', note: 'Du lundi au vendredi' }, { icon: 'map', title: 'Adresse', value: 'Marseille, France', note: 'Rendez-vous sur demande' }, { icon: 'clock', title: 'Horaires', value: '8h - 20h', note: 'Support 24/7 disponible' },
      ],
      fields: { selectedOffer: 'Offre sélectionnée', name: 'Nom', namePlaceholder: 'Votre nom', phone: 'Téléphone', phonePlaceholder: 'Téléphone', email: 'Email', emailPlaceholder: 'Email', productType: 'Type de produit', productTypePlaceholder: 'Ex. mobilier, bijoux, chaussures…', references: 'Nombre de références', timeline: 'Délai souhaité', timelinePlaceholder: 'Sélectionnez un délai', timelineOptions: ['Moins d’un mois', '1 à 3 mois', '3 à 6 mois', 'Plus de 6 mois', 'À définir'], message: 'Message', messagePlaceholder: 'Décrivez brièvement votre projet', submit: 'Envoyer le message', sending: 'Envoi en cours…', success: 'Merci, votre message a bien été envoyé. Nous vous répondrons rapidement.', error: "Le message n'a pas pu être envoyé. Réessayez ou contactez-nous directement par email.", privacyPrefix: 'Les informations transmises servent uniquement à traiter votre demande. Consultez notre', privacyLink: 'politique de confidentialité' },
    },
  },
  en: {
    seo: { title: '3D Product Visualization Agency', description: 'Specialized 3D agency building custom product configurators, interactive 3D viewers, and WebAR experiences for e-commerce, manufacturers, and brands.' },
    hero: { firstLine: 'Custom 3D Product Experiences.', muted: 'Boost e-commerce', accent: 'conversion rates.', description: 'We build interactive 3D product configurators, viewers, and WebAR solutions designed to integrate seamlessly into your e-commerce platform.' },
    integrations: {
      eyebrow: 'WORKS WITH YOUR E-COMMERCE STACK',
      title: 'Compatible with your e-commerce platform.',
      description: 'We embed the 3D experience into your existing environment — including catalog, variants, dynamic pricing, and cart.',
      ariaLabel: 'Supported e-commerce platforms',
      items: [
        { name: 'Shopify', logo: '/assets/platform-shopify.svg', detail: 'Catalog, variants, and cart connected' },
        { name: 'PrestaShop', logo: '/assets/platform-prestashop.svg', detail: 'Seamlessly embedded on product pages' },
        { name: 'WooCommerce', logo: '/assets/platform-woocommerce.svg', detail: 'Options and pricing kept in sync' },
        { name: 'WordPress', logo: '/assets/platform-wordpress.svg', detail: '3D experience built into your site' },
      ],
    },
    solutions: {
      eyebrow: 'WHAT WE BUILD', title: 'Our interactive 3D solutions',
      items: [
        { title: '3D Product Configurator', description: 'Allow customers to visually customize colors, materials, and options in real time with dynamic pricing integration.', action: 'Explore Configurators', image: '/assets/Configurator_1_PvMB6tzS7sOPTEdZVWNid.webp', to: '/configurator' },
        { title: 'Interactive 3D Viewer', description: 'Replace static images. Let your customers rotate, zoom, and inspect every detail of your product directly on the product page.', action: 'Explore 3D Viewers', image: '/assets/Viewer_2.webp', to: '/viewer' },
        { title: 'AR (Augmented Reality)', description: 'Instantly visualize your products in your customers’ real-world environment using their smartphone.', action: 'Explore WebAR', image: '/assets/AR_2.webp', to: '/ar' },
      ],
    },
    trust: 'THEY TRUST US',
    testimonials: {
      eyebrow: 'THEY TALK ABOUT US', title: 'What our clients say',
      items: [
        { quote: 'The 3D solution has revolutionized our e-commerce. +250% engagement on our products!', name: 'Marie Kassler', company: 'Jadium' }, { quote: 'Intuitive interface and stunning results. Our customers love being able to customize in 3D.', name: 'Thomas Martines', company: 'Watch-us' }, { quote: 'Exceptional ROI from the first month. The team is very professional and responsive.', name: 'Max Adam', company: 'Casero Möbel' },
      ],
    },
    cta: { title: 'Ready to transform your customer experience?', description: 'Join the brands redefining online commerce with 3D.', primary: 'Request a free demo', secondary: 'Contact an expert' },
    contact: {
      eyebrow: 'CONTACT US', title: 'Contact us', description: 'Ready to transform your products into 3D experiences? Contact us to discuss your project', panelTitle: "Let's talk about your project", panelDescription: 'We are here to help you create exceptional 3D experiences. Contact us for a free consultation.',
      information: [
        { icon: 'mail', title: 'Email', value: 'arditti.production@gmail.com', note: 'Reply within 24h' }, { icon: 'phone', title: 'Phone', value: '+33 6 34 10 19 25', note: 'Monday to Friday' }, { icon: 'map', title: 'Address', value: 'Marseille, France', note: 'By appointment' }, { icon: 'clock', title: 'Hours', value: '8am - 8pm', note: '24/7 support available' },
      ],
      fields: { selectedOffer: 'Selected offer', name: 'Name', namePlaceholder: 'Your name', phone: 'Phone', phonePlaceholder: 'Phone', email: 'Email', emailPlaceholder: 'Email', productType: 'Product type', productTypePlaceholder: 'E.g. furniture, jewelry, footwear…', references: 'Number of references', timeline: 'Desired timeline', timelinePlaceholder: 'Select a timeline', timelineOptions: ['Less than one month', '1 to 3 months', '3 to 6 months', 'More than 6 months', 'To be defined'], message: 'Message', messagePlaceholder: 'Briefly describe your project', submit: 'Send message', sending: 'Sending…', success: 'Thank you, your message has been sent. We will get back to you shortly.', error: 'Your message could not be sent. Please try again or contact us directly by email.', privacyPrefix: 'The information submitted is used solely to process your request. Read our', privacyLink: 'privacy policy' },
    },
  },
} as const;

export function localized<T>(content: Record<Locale, T>, locale: Locale): T {
  return content[locale];
}
