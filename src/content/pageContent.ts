export type SolutionKind = 'viewer' | 'configurator' | 'ar';

export const solutionContent = {
  fr: {
    viewer: {
      seoTitle: 'Viewer', eyebrow: 'INNOVATION AUGMENTÉE', title: "Viewer 3D : L'expérience immersive qui lève tous les doutes.", description: 'Offrez à vos clients la possibilité de manipuler vos produits sous tous les angles, directement dans leur navigateur. Réduisez les retours et augmentez la confiance.', video: '/assets/viewers_02_bHlXNOcl0H6DQ-hCVC.webm', example: 'Voir un exemple',
      sectionTitle: 'Au-Delà Du Simple Visuel.', sectionSubtitle: 'La précision au service de la conversion e-commerce',
      features: [
        { title: 'Engagement Émotionnel', description: "Un produit qu'on peut toucher (numériquement) est un produit qu'on achète. Créez un lien tactile avec vos utilisateurs.", icon: 'move' },
        { title: 'Réalité Augmentée', description: 'Projetez le produit dans votre salon en un clic pour valider les dimensions et le style. Plus besoin de sortir le mètre ruban.', icon: 'phone' },
        { title: 'Multi-support', description: 'Une expérience universelle optimisée pour Mobile, Tablette et Desktop, sans installation requise.', icon: 'monitor' },
      ],
      middleStep: 'Nous créons votre viewer sur mesure, avec textures et variantes, pour une expérience fluide.',
    },
    configurator: {
      seoTitle: 'Configurator', eyebrow: 'EXPÉRIENCE IMMERSIVE', title: 'Configurateur 3D : Transformez vos visiteurs en créateurs.', description: 'Laissez vos clients concevoir le produit de leurs rêves en temps réel. Une personnalisation sans limite pour une conversion maximale.', video: '/assets/configurator_dszbzzcJGDLRNb3yi8BSw.webm', example: 'Voir un exemple',
      sectionTitle: 'Au-Delà Du Simple Visuel.', sectionSubtitle: 'La précision au service de la conversion e-commerce',
      features: [
        { title: 'Personnalisation en Temps Réel', description: 'Changez les couleurs, les matières et les options instantanément avec un rendu photoréaliste de haute précision.', icon: 'palette' },
        { title: 'Mise à jour Dynamique du Prix', description: 'Affichez le coût exact en fonction des choix pour une transparence totale et une prise de décision accélérée.', icon: 'price' },
        { title: 'Intégration Panier Directe', description: 'Une fois configuré, le produit est ajouté au panier avec toutes ses spécifications techniques intégrées sans friction.', icon: 'cart' },
      ],
      middleStep: 'Nous créons votre configurateur sur mesure, avec textures et variantes, pour une expérience fluide.',
    },
    ar: {
      seoTitle: 'AR', eyebrow: 'INNOVATION AUGMENTÉE', title: 'Réalité Augmentée (AR) : Projetez vos produits chez vous, instantanément.', description: 'La Réalité Augmentée permet à vos clients de projeter instantanément vos produits en 3D directement dans leur propre environnement depuis leur téléphone ou tablette. L’essai virtuel qui déclenche la décision !', video: '/assets/Ar_wkchJ8ptd73bza5TPWxd8.webm', example: 'Voir un exemple',
      sectionTitle: 'Au-Delà Du Simple Visuel.', sectionSubtitle: 'La précision au service de la conversion e-commerce',
      features: [
        { title: 'Engagement Émotionnel', description: "Un produit qu'on peut toucher (numériquement) est un produit qu'on achète. Créez un lien tactile avec vos utilisateurs.", icon: 'move' },
        { title: 'Réalité Augmentée', description: 'Projetez le produit dans votre salon en un clic pour valider les dimensions et le style. Plus besoin de sortir le mètre ruban.', icon: 'phone' },
        { title: 'Multi-support', description: 'Une expérience universelle optimisée pour Mobile, Tablette et Desktop, sans installation requise.', icon: 'monitor' },
      ],
      middleStep: 'Nous créons votre viewer sur mesure, avec textures et variantes, pour une expérience fluide.',
    },
    process: {
      title: 'Comment ça marche ?', subtitle: 'Une intégration fluide, une expérience client sans friction.',
      steps: [
        { title: 'Envoi de vos fichiers', description: 'Envoyez-nous vos photos, plans ou fichiers CAO : nous créons vos jumeaux numériques ultra-réalistes.' },
        { title: 'Conception & Personnalisation' },
        { title: 'Intégration "Copier-Coller"', description: "Recevez votre lien ou code d'intégration (Shopify, Woo...) : prêt en 48h, sans ralentir votre site." },
      ],
    },
    cta: { title: 'Prêt à transformer votre expérience client ?', description: '', primary: 'Demander une démo gratuite', secondary: 'PARLER AVEC UN EXPERT' },
  },
  en: {
    viewer: {
      seoTitle: 'Viewer', eyebrow: 'AUGMENTED INNOVATION', title: '3D Viewer: The immersive experience that removes all doubts.', description: 'Offer your customers the ability to interact with your products from all angles, directly in their browser. Reduce returns and increase trust.', video: '/assets/viewers_02_bHlXNOcl0H6DQ-hCVC.webm', example: 'See an example',
      sectionTitle: 'Beyond a simple visual.', sectionSubtitle: 'Precision driving e-commerce conversion', processSubtitle: 'A seamless integration, a frictionless customer experience.',
      features: [
        { title: 'Emotional Engagement', description: 'A product you can (digitally) touch is a product you buy. Create a tactile connection with your users.', icon: 'move' },
        { title: 'Augmented Reality', description: 'Project the product into your living room in one click to validate dimensions and style. No need to bring out the tape measure.', icon: 'phone' },
        { title: 'Multi-device', description: 'A universal experience optimized for Mobile, Tablet, and Desktop, with no installation required.', icon: 'monitor' },
      ],
      middleStep: 'We create your custom viewer, with textures and variants, for a seamless experience.',
    },
    configurator: {
      seoTitle: 'Configurator', eyebrow: 'IMMERSIVE EXPERIENCE', title: '3D Configurator: Turn your visitors into creators.', description: 'Let your customers design their dream product in real time. Limitless customization for maximum conversion.', video: '/assets/configurator_dszbzzcJGDLRNb3yi8BSw.webm', example: 'See an example',
      sectionTitle: 'Beyond a simple visual.', sectionSubtitle: 'Precision driving e-commerce conversion', processSubtitle: 'A smooth integration, a frictionless customer experience.',
      features: [
        { title: 'Real-Time Customization', description: 'Change colors, materials, and options instantly with high-precision photorealistic rendering.', icon: 'palette' },
        { title: 'Dynamic Price Updating', description: 'Display the exact cost based on choices for total transparency and faster decision-making.', icon: 'price' },
        { title: 'Direct Cart Integration', description: 'Once configured, the product is added to the cart with all its technical specifications seamlessly integrated.', icon: 'cart' },
      ],
      middleStep: 'We create your custom configurator, with textures and variants, for a seamless experience.',
    },
    ar: {
      seoTitle: 'AR', eyebrow: 'AUGMENTED INNOVATION', title: 'Augmented Reality (AR): Project your products into your home, instantly.', description: 'Augmented Reality allows your customers to instantly project your products in 3D directly into their own environment from their phone or tablet. The virtual try-on that triggers the decision!', video: '/assets/Ar_wkchJ8ptd73bza5TPWxd8.webm', example: 'See an example',
      sectionTitle: 'Beyond a simple visual.', sectionSubtitle: 'Precision driving e-commerce conversion', processSubtitle: 'A seamless integration, a frictionless customer experience.',
      features: [
        { title: 'Emotional Engagement', description: 'A product you can (digitally) touch is a product you buy. Create a tactile connection with your users.', icon: 'move' },
        { title: 'Augmented Reality', description: 'Project the product into your living room in one click to validate dimensions and style. No need to bring out the tape measure.', icon: 'phone' },
        { title: 'Multi-device', description: 'A universal experience optimized for Mobile, Tablet, and Desktop, with no installation required.', icon: 'monitor' },
      ],
      middleStep: 'We create your custom viewer, with textures and variants, for a seamless experience.',
    },
    process: {
      title: 'How does it work?', subtitle: 'A seamless integration, a frictionless customer experience.',
      steps: [
        { title: 'Send your files', description: 'Send us your photos, plans, or CAD files: we create your ultra-realistic digital twins.' },
        { title: 'Design & Customization' },
        { title: '"Copy-Paste" Integration', description: 'Receive your integration link or code (Shopify, Woo...): ready in 48h, without slowing down your site.' },
      ],
    },
    cta: { title: 'Ready to transform your customer experience?', description: '', primary: 'Request a free demo', secondary: 'Talk to an expert' },
  },
} as const;

export const pricingContent = {
  fr: {
    seo: { title: 'Pricing', description: 'Nos tarifs transparents 2026' },
    eyebrow: 'INVESTISSEMENT SPATIAL', title: 'Nos tarifs transparents 2026', promises: ['Prix par produit + réduction volume', 'Intégration unique', 'Devis gratuit en 24h'], hosting: 'Hébergement & Maintenance',
    choose: 'Choisir cette offre', popular: 'POPULAIRE', from: 'À partir de', perProduct: '/produit', depending: '(selon la complexité)', monthly: 'Abonnement mensuel', custom: 'Sur devis',
    sections: [
      {
        title: '1. Viewer 3D', subtitle: 'Visualisez vos produits sous tous les angles avec une fidélité photoréaliste.',
        cards: [
          { name: 'Standard', audience: 'Idéal pour le PME', price: '100€', creation: "Création d'un modèle HD personnalisé", monthlyPrice: '5€ /mois', button: 'Choisir Standard', features: ['Rendu HD temps réel', 'Rotation 360° & Zoom', 'Intégration iFrame simple'] },
          { name: 'Premium', audience: 'Performance & Analytics', price: '150€', creation: "Création d'un modèle HD personnalisé", monthlyPrice: '9€ /mois', button: 'Choisir Premium', popular: true, features: ['Réalité Augmentée (IOS/Android)', 'Hotspots interactifs', 'Statistiques de consultation'] },
          { name: 'Enterprise', audience: 'Grands Comptes', price: 'Sur devis', creation: '', button: 'Contacter Sales', features: ['Marque blanche totale', 'Support dédié 24/7', 'Intégration API avancée'] },
        ],
      },
      {
        title: '2. Configurateur 3D', subtitle: 'Laissez vos clients personnaliser leurs produits en temps réel.',
        cards: [
          { name: 'Standard', audience: '', price: '450€', creation: 'Création interface & logique de configuration', monthlyPrice: '19€ /mois', button: 'Choisir Standard', features: ["Jusqu'à 10 options de personnalisation simples.", 'Changement de matériaux', 'Variantes de couleurs'] },
          { name: 'Premium', audience: '', price: '2 500€', creation: 'Développement complet de la plateforme', monthlyPrice: '50€ /mois', button: 'Choisir Premium', popular: true, features: ['Logique de configuration complexe et export de données.', 'Logique conditionnelle', 'Lien direct vers panier', 'Export PDF de config'] },
          { name: 'Custom', audience: 'Sur-mesure', price: 'Sur devis', creation: 'Pour les projets de grande envergure avec besoins spécifiques.', button: 'Démarrer', features: ['Configurateurs industriels', 'Intégration ERP / CRM'] },
        ],
      },
    ],
    agency: { eyebrow: 'PROGRAMME REVENDEUR', title: 'Vous êtes une agence ?', description: 'Vous êtes une agence web ? Découvrez notre offre Partenariat Revendeur (15 % de marge) et offrez la 3D à vos clients.', button: 'Devenir Partenaire', margin: 'de marge partenaire', badges: [{ value: '24h', label: 'SUPPORT PRIORITAIRE' }, { value: 'White', label: 'LABEL SOLUTION' }] },
    cta: { title: 'Prêt à transformer votre expérience client ?', description: "Rejoignez les leaders de l'industrie qui utilisent déjà AR Production pour booster leurs conversions.", primary: 'Demander une démo gratuite', secondary: '' },
  },
  en: {
    seo: { title: 'Pricing', description: 'Our transparent pricing 2026' },
    eyebrow: 'SPATIAL INVESTMENT', title: 'Our transparent pricing 2026', promises: ['Price per product + volume discount', 'One-time integration', 'Free quote in 24h'], hosting: 'Hosting & Maintenance',
    choose: 'Choose this plan', popular: 'POPULAR', from: 'Starting from', perProduct: '/product', depending: '(depending on complexity)', monthly: 'Monthly subscription', custom: 'Upon request',
    sections: [
      {
        title: '1. 3D Viewer', subtitle: 'Visualize your products from all angles with photorealistic fidelity.',
        cards: [
          { name: 'Standard', audience: 'Ideal for SMEs', price: '100€', creation: 'Creating a Custom HD Model', monthlyPrice: '5€ /month', button: 'Choose Standard', features: ['Real-time HD rendering', '360° Rotation & Zoom', 'Simple iFrame integration'] },
          { name: 'Premium', audience: 'Performance & Analytics', price: '150€', creation: 'Creating a Custom HD Model', monthlyPrice: '9€ /month', button: 'Choose Premium', popular: true, features: ['Augmented Reality (iOS/Android)', 'Interactive hotspots', 'Consultation statistics'] },
          { name: 'Enterprise', audience: 'Key Accounts', price: 'Upon request', creation: '', button: 'Contact Sales', features: ['Total white label', '24/7 dedicated support', 'Advanced API integration'] },
        ],
      },
      {
        title: '2. 3D Configurator', subtitle: 'Let your customers personalize their products in real time.',
        cards: [
          { name: 'Standard', audience: '', price: '450€', creation: 'Interface creation & configuration logic', monthlyPrice: '19€ /month', button: 'Choose Standard', features: ['Up to 10 simple customization options.', 'Material changes', 'Color variants'] },
          { name: 'Premium', audience: '', price: '2 500€', creation: 'Full platform development', monthlyPrice: '50€ /month', button: 'Choose Premium', popular: true, features: ['Complex configuration logic and data export.', 'Conditional logic', 'Direct link to cart', 'Config PDF export'] },
          { name: 'Custom', audience: 'Custom-made', price: 'Upon request', creation: 'For large-scale projects with specific needs.', button: 'Get started', features: ['Industrial configurators', 'ERP / CRM integration'] },
        ],
      },
    ],
    agency: { eyebrow: 'RESELLER PROGRAM', title: 'Are you an agency?', description: 'Are you a web agency? Discover our Reseller Partnership offer (15% margin) and offer 3D to your clients.', button: 'Become a Partner', margin: 'partner margin', badges: [{ value: '24h', label: 'PRIORITY SUPPORT' }, { value: 'White', label: 'LABEL SOLUTION' }] },
    cta: { title: 'Ready to transform your customer experience?', description: 'Join the industry leaders who already use AR Production to boost their conversions.', primary: 'Request a free demo', secondary: '' },
  },
} as const;

export const partnershipContent = {
  fr: {
    seo: { title: 'Partnership', description: 'Devenez partenaire revendeur – Gagnez 15 % sans rien développer' },
    eyebrow: 'PROGRAMME PARTENAIRES REVENDEURS', title: 'Devenez partenaire revendeur – Gagnez 15 % sans rien développer', description: 'Vous êtes une agence web ou digitale ? Proposez à vos clients des configurateurs et viewers 3D sans compétence technique ni coût de développement.', promise: 'Nous faisons tout. Vous prenez la marge.', download: 'TÉLÉCHARGER LE PDF PARTENARIAT', contact: 'CONTACTEZ NOTRE ÉQUIPE', margin: '+15%', marginLabel: 'MARGE',
    proof: [
      { title: 'EXPERTISE', description: 'Technologie WebGL Propriétaire' },
      { title: 'VITESSE', description: 'Déploiement en moins de 15 jours' },
      { title: 'FIABILITÉ', description: 'Support technique dédié 24/7' },
    ],
    whyEyebrow: '', whyTitle: 'Pourquoi rejoindre le réseau AR Production ?',
    benefits: [
      { title: 'White label possible', description: 'Intégrez nos solutions sous votre propre marque. Vos clients ne voient que vous, nous assurons la puissance technique en arrière-plan.', kind: 'dark' },
      { title: '15 % de commission sur toutes les ventes', description: "L'un des taux les plus compétitifs du marché. Une source de revenus récurrents et immédiats pour votre agence dès la première vente.", kind: 'number' },
      { title: 'Aucune compétence technique requise', description: "Concentrez-vous sur la stratégie client. Notre interface intuitive et notre équipe d'ingénieurs s'occupent de toute la complexité 3D pour vous.", kind: 'image' },
      { title: 'Assistance prioritaire', description: "Accès direct à notre slack interne et à un chef de projet dédié pour répondre à vos appels d'offres en un temps record.", kind: 'light' },
    ],
    cta: { title: 'Prêt à booster votre offre digitale ?', description: 'Rejoignez les marques qui redéfinissent le commerce en ligne.', primary: 'Demander une démo gratuite', secondary: '' },
  },
  en: {
    seo: { title: 'Partnership', description: 'Become a reseller partner – Earn 15% without developing anything' },
    eyebrow: 'RESELLER PARTNER PROGRAM', title: 'Become a reseller partner – Earn 15% without developing anything', description: 'Are you a web or digital agency? Offer your clients 3D configurators and viewers with no technical skills or development costs.', promise: 'We do everything. You take the margin.', download: 'DOWNLOAD THE PARTNERSHIP PDF', contact: 'CONTACT OUR TEAM', margin: '+15%', marginLabel: 'MARGIN',
    proof: [
      { title: 'EXPERTISE', description: 'Proprietary WebGL Technology' }, { title: 'SPEED', description: 'Deployment in under 15 days' }, { title: 'RELIABILITY', description: '24/7 dedicated technical support' },
    ],
    whyEyebrow: '', whyTitle: 'Why join the AR Production network?',
    benefits: [
      { title: 'White label available', description: 'Integrate our solutions under your own brand. Your clients only see you, we provide the technical power in the background.', kind: 'dark' }, { title: '15% commission on all sales', description: 'One of the most competitive rates on the market. A source of immediate and recurring revenue for your agency from the very first sale.', kind: 'number' }, { title: 'No technical skills required', description: 'Focus on customer strategy. Our intuitive interface and engineering team handle all the 3D complexity for you.', kind: 'image' }, { title: 'Priority support', description: 'Direct access to our internal Slack and a dedicated project manager to respond to your calls for tender in record time.', kind: 'light' },
    ],
    cta: { title: 'Ready to boost your digital offering?', description: 'Join the brands redefining e-commerce.', primary: 'Request a free demo', secondary: '' },
  },
} as const;

export const demoContent = {
  fr: { seo: { title: 'Démo', description: 'Découvrez quelques-unes de nos réalisations' }, eyebrow: 'EXPÉRIENCES INTERACTIVES', title: 'DÉMO', subtitle: 'Découvrez quelques-unes de nos réalisations', fullscreen: 'Plein écran', exitFullscreen: 'Quitter le plein écran', previous: 'Voir les démonstrations précédentes', next: 'Voir les démonstrations suivantes', swipeHint: 'Faites glisser pour découvrir les autres expériences' },
  en: { seo: { title: 'Demo', description: 'Discover some of our work' }, eyebrow: 'INTERACTIVE EXPERIENCES', title: 'DEMO', subtitle: 'Discover some of our work', fullscreen: 'Full screen', exitFullscreen: 'Exit full screen', previous: 'View previous demos', next: 'View next demos', swipeHint: 'Swipe to discover more experiences' },
} as const;
