import type { Locale } from '../context/LanguageContext';

export const sharedContent = {
  fr: {
    nav: {
      solutions: 'Nos solutions', pricing: 'Tarifs', demo: 'DEMO', partnership: 'Partenariat Agences', contact: 'Contact', quote: 'Demander un devis', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', language: 'Langue',
    },
    footer: {
      description: "Leader européen de la visualisation produit 3D pour l'e-commerce et l'industrie.", navigation: 'NAVIGATION', home: 'Accueil', solutions: 'Solutions', pricing: 'Tarifs', demo: 'DEMO', company: 'ENTREPRISE', partnership: 'Partenariat Agences', contact: 'Contact', privacy: 'Politique de confidentialité', terms: 'Mentions légales', social: 'RÉSEAUX SOCIAUX', rights: 'Tous droits réservés.',
    },
  },
  en: {
    nav: {
      solutions: 'Our Solutions', pricing: 'Pricing', demo: 'DEMO', partnership: 'Agency Partnership', contact: 'Contact', quote: 'Request a quote', openMenu: 'Open menu', closeMenu: 'Close menu', language: 'Language',
    },
    footer: {
      description: 'European leader in 3D product visualization for e-commerce and industry.', navigation: 'NAVIGATION', home: 'Home', solutions: 'Solutions', pricing: 'Pricing', demo: 'DEMO', company: 'COMPANY', partnership: 'Agency Partnership', contact: 'Contact', privacy: 'Privacy policy', terms: 'Legal notice', social: 'SOCIAL MEDIA', rights: 'All rights reserved.',
    },
  },
} as const;

export const homeContent = {
  fr: {
    seo: { title: 'Home', description: "Visualisez, personnalisez et vendez vos produits en 3D. Intégration Shopify, PrestaShop et WooCommerce en 48h." },
    hero: { firstLine: 'Configurateur & Viewer 3D :', muted: 'Boostez vos ventes', accent: "jusqu'à +40%", description: 'Visualisez, personnalisez et vendez vos produits en 3D en quelques clics. Intégration Shopify, PrestaShop, WooCommerce en 48h.' },
    stats: [
      { value: '+35%', label: 'TEMPS PASSÉ SUR PAGE' }, { value: '+22%', label: 'PANIER MOYEN' }, { value: '-40%', label: 'DE RETOURS PRODUITS' },
    ],
    solutions: {
      eyebrow: 'LE DIGITAL QUI SÉDUIT', title: 'Nos Solutions interactives',
      items: [
        { title: 'Viewer 3D', description: 'Proposez une expérience de visualisation immersive et interactive sous tous les angles.', action: 'Découvrir le viewer', image: '/assets/Viewer_2.webp', to: '/viewer' },
        { title: 'Configurateur 3D', description: 'Offrez la possibilité de personnaliser entièrement vos produits en temps réel.', action: 'Découvrir le configurateur', image: '/assets/Configurator_1_PvMB6tzS7sOPTEdZVWNid.webp', to: '/configurator' },
        { title: 'AR', description: "Projetez instantanément vos produits dans l'environnement réel de vos clients.", action: 'Découvrir la AR', image: '/assets/AR_2.webp', to: '/ar' },
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
    seo: { title: 'Home', description: 'Visualize, customize and sell your products in 3D. Shopify, PrestaShop and WooCommerce integration in 48 hours.' },
    hero: { firstLine: '3D Configurator & Viewer:', muted: 'Boost your sales by', accent: 'up to +40%', description: 'View, customize, and sell your products in 3D with just a few clicks. Shopify, PrestaShop, and WooCommerce integration within 48 hours.' },
    stats: [
      { value: '+35%', label: 'TIME SPENT ON PAGE' }, { value: '+22%', label: 'AVERAGE CART VALUE' }, { value: '-40%', label: 'PRODUCT RETURNS' },
    ],
    solutions: {
      eyebrow: 'DIGITAL that captivates', title: 'Our interactive solutions',
      items: [
        { title: 'Viewer 3D', description: 'Offer an immersive and interactive viewing experience from every angle.', action: 'Discover the viewer', image: '/assets/Viewer_2.webp', to: '/viewer' },
        { title: '3D Configurator', description: 'Offer the ability to fully customize your products in real time.', action: 'Discover the configurator', image: '/assets/Configurator_1_PvMB6tzS7sOPTEdZVWNid.webp', to: '/configurator' },
        { title: 'AR', description: "Instantly project your products into your customers' real environment.", action: 'Discover AR', image: '/assets/AR_2.webp', to: '/ar' },
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
