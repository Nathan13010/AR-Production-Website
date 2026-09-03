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
    seo: { title: 'Tarifs', description: 'Nos tarifs transparents 2026 — AR Production' },
    eyebrow: 'INVESTISSEMENT & RENTABILITÉ', title: 'Des tarifs clairs, adaptés à vos ambitions',
    promises: ['Prix hors taxes (HT)', 'Engagement initial de 12 mois', 'Hébergement CDN & maintenance inclus', 'Devis personnalisé sous 24h'],
    hosting: 'Abonnement Cloud & Infrastructure',
    commitment: 'Prix HT • Engagement initial 12 mois',
    choose: 'Choisir cette offre', popular: 'POPULAIRE', from: 'À partir de', perProduct: '/ produit', depending: '', monthly: 'Abonnement mensuel', custom: 'Sur devis',
    sections: [
      {
        title: '1. Viewer 3D', subtitle: 'Offrez une manipulation 360° fluide et photoréaliste directement sur votre boutique en ligne.',
        unit: '/ produit',
        cards: [
          {
            name: 'Standard', audience: 'Idéal pour les PME', price: '590 € HT',
            creation: "Vous possédez déjà un modèle 3D ? Son optimisation pour le web est incluse. La création d’un nouveau modèle 3D est facturée séparément, selon sa complexité.",
            monthlyPrice: '19 € HT /mois', button: 'Choisir Standard',
            features: [
              'Rendu WebGL HD photoréaliste en temps réel',
              'Rotation 360°, zoom interactif & mode plein écran',
              'Intégration universelle (Shopify, WooCommerce, Web)',
              'Statistiques de consultation de base (volume de chargements)',
              'Hébergement CDN ultra-rapide & certificat SSL inclus'
            ]
          },
          {
            name: 'Premium', audience: 'Performance & Conversion', price: '1 200 € HT',
            creation: "Vous possédez déjà un modèle 3D ? Son optimisation pour le web est incluse. La création d’un nouveau modèle 3D est facturée séparément, selon sa complexité.",
            monthlyPrice: '39 € HT /mois', button: 'Choisir Premium', popular: true,
            features: [
              'Réalité Augmentée fluide (iOS & Android sans application)',
              'Hotspots & annotations interactives sur le produit',
              'Analytics d’engagement avancés (temps d’interaction, variantes & AR)',
              'Hébergement CDN haute performance & sauvegardes régulières'
            ]
          },
          {
            name: 'Enterprise', audience: 'Grands Comptes', price: 'Sur devis',
            creation: 'Modélisation 3D avancée, scanning ou CAO sur mesure',
            monthlyPrice: 'À partir de 99 € HT /mois', button: 'Contacter notre équipe',
            features: [
              'Marque blanche totale (aucun logo ni mention tierce)',
              'Intégration API avancée & connecteurs sur mesure',
              'Support technique prioritaire & interlocuteur dédié',
              'Hébergement haute disponibilité & adapté aux volumes de trafic importants'
            ]
          },
        ],
      },
      {
        title: '2. Configurateur 3D', subtitle: 'Permettez à vos clients de concevoir et personnaliser leurs produits en temps réel.',
        unit: '/ projet',
        cards: [
          {
            name: 'Standard', audience: 'Boutiques & Marques D2C', price: '1 500 € HT',
            creation: "Vous possédez déjà un modèle 3D ? Son optimisation pour le web est incluse. La création d’un nouveau modèle 3D est facturée séparément, selon sa complexité.",
            monthlyPrice: '49 € HT /mois', button: 'Choisir Standard',
            features: [
              "Jusqu'à 10 variantes simples (matières, couleurs, finitions)",
              'Changement de textures instantané en haute définition',
              'Intégration fluide sur fiche produit e-commerce',
              'Hébergement cloud & CDN mondial optimisé'
            ]
          },
          {
            name: 'Premium', audience: 'E-commerce à forte conversion', price: '4 500 € HT',
            creation: "Vous possédez déjà un modèle 3D ? Son optimisation pour le web est incluse. La création d’un nouveau modèle 3D est facturée séparément, selon sa complexité.",
            monthlyPrice: '99 € HT /mois', button: 'Choisir Premium', popular: true,
            features: [
              'Logique conditionnelle & règles métier complexes',
              'Variantes et combinaisons étendues en temps réel',
              'Mise à jour dynamique du prix & ajout direct au panier',
              'Génération & export de récapitulatif PDF haute qualité',
              'Analytics détaillés des configurations les plus vendues'
            ]
          },
          {
            name: 'Custom', audience: 'Sur-mesure & Industrie', price: 'Sur devis',
            creation: 'Pour les projets de grande envergure avec besoins industriels spécifiques.',
            monthlyPrice: 'Sur devis', button: 'Demander un devis',
            features: [
              'Configurateurs industriels & dimensionnement 3D complexe',
              'Intégration ERP, CRM, PIM & gestion des stocks',
              'Règles de tarification avancées & devis automatique',
              'Architecture logicielle sur mesure & support dédié'
            ]
          },
        ],
      },
    ],
    coverage: {
      eyebrow: 'INFRASTRUCTURE CLOUD',
      title: 'Ce que couvre votre abonnement mensuel',
      subtitle: 'Un service managé clé en main pour assurer des performances optimales et une compatibilité maintenue avec les principaux navigateurs.',
      commitmentNotice: 'Prix hors taxes (HT). Tous nos forfaits incluent un engagement initial de 12 mois.',
      scopeTitle: 'Périmètre de la maintenance :',
      scopeNotice: 'La maintenance corrective et les mises à jour de compatibilité sont incluses. Les évolutions fonctionnelles et modifications des produits font l’objet d’un devis.',
      terminationTitle: 'Fin d’abonnement & Continuité :',
      terminationNotice: 'L’abonnement donne accès à l’hébergement, aux services cloud et à la maintenance. En cas de résiliation, une option de transfert ou d’hébergement autonome peut être proposée sur devis.',
      items: [
        { title: 'Hébergement CDN Mondial', description: 'Distribution rapide de vos modèles 3D partout dans le monde avec temps de chargement réduits.' },
        { title: 'Mises à Jour & Compatibilité', description: 'Compatibilité maintenue avec les principaux navigateurs (Chrome, Safari iOS, Android WebXR). Maintenance corrective incluse.' },
        { title: 'Sécurité & Sauvegardes', description: 'Certificats SSL inclus, sauvegardes régulières de vos assets 3D et infrastructure cloud sécurisée.' },
        { title: 'Analytics & Suivi de Trafic', description: 'Statistiques de consultation et, selon votre forfait, analyse approfondie de l’engagement et des variantes consultées.' },
        { title: 'Support Technique & Accompagnement', description: 'Assistance dédiée par notre équipe pour l’intégration, la maintenance et les optimisations sur votre CMS.' },
        { title: 'Bande Passante & Scalabilité', description: 'Prise en charge adaptée aux volumes de trafic importants avec maintien optimal des performances.' },
      ]
    },
    agency: { eyebrow: 'PROGRAMME REVENDEUR', title: 'Vous êtes une agence ?', description: 'Vous êtes une agence web ? Découvrez notre offre Partenariat Revendeur (15 % de marge) et offrez la 3D à vos clients.', button: 'Devenir Partenaire', margin: 'de marge partenaire', badges: [{ value: '24h', label: 'SUPPORT PRIORITAIRE' }, { value: 'White', label: 'LABEL SOLUTION' }] },
    cta: { title: 'Prêt à transformer votre expérience client ?', description: "Rejoignez les leaders de l'industrie qui utilisent déjà AR Production pour booster leurs conversions.", primary: 'Demander une démo gratuite', secondary: '' },
  },
  en: {
    seo: { title: 'Pricing', description: 'Our transparent 2026 pricing — AR Production' },
    eyebrow: 'INVESTMENT & ROI', title: 'Transparent pricing built to scale',
    promises: ['Prices exclude VAT (HT)', 'Initial 12-month commitment', 'CDN hosting & maintenance included', 'Custom quote within 24h'],
    hosting: 'Cloud Hosting & Infrastructure',
    commitment: 'Excl. VAT • 12-month initial commitment',
    choose: 'Choose this plan', popular: 'POPULAR', from: 'Starting from', perProduct: '/ product', depending: '', monthly: 'Monthly subscription', custom: 'Upon request',
    sections: [
      {
        title: '1. 3D Viewer', subtitle: 'Provide smooth, photorealistic 360° interaction directly on your online store.',
        unit: '/ product',
        cards: [
          {
            name: 'Standard', audience: 'Ideal for SMEs', price: '590 € HT',
            creation: 'Already have a 3D model? Web optimization is included. Creating a new 3D model is billed separately, depending on its complexity.',
            monthlyPrice: '19 € HT /month', button: 'Choose Standard',
            features: [
              'Real-time photorealistic WebGL HD rendering',
              '360° rotation, interactive zoom & fullscreen mode',
              'Universal integration (Shopify, WooCommerce, Web)',
              'Basic view metrics (load & view volume)',
              'Ultra-fast CDN hosting & SSL certificate included'
            ]
          },
          {
            name: 'Premium', audience: 'Performance & Conversion', price: '1 200 € HT',
            creation: 'Already have a 3D model? Web optimization is included. Creating a new 3D model is billed separately, depending on its complexity.',
            monthlyPrice: '39 € HT /month', button: 'Choose Premium', popular: true,
            features: [
              'Frictionless Augmented Reality (iOS & Android app-free)',
              'Interactive hotspots & product annotations',
              'Advanced engagement analytics (interaction time, variants & AR)',
              'High-performance CDN hosting & regular backups'
            ]
          },
          {
            name: 'Enterprise', audience: 'Key Accounts', price: 'Upon request',
            creation: 'Advanced 3D modeling, photogrammetry or custom CAD',
            monthlyPrice: 'Starting from 99 € HT /month', button: 'Contact our team',
            features: [
              'Total white label (no third-party branding)',
              'Advanced API integration & custom connectors',
              'Priority technical support & dedicated manager',
              'High availability hosting adapted to large traffic volumes'
            ]
          },
        ],
      },
      {
        title: '2. 3D Configurator', subtitle: 'Allow your customers to customize and design their products in real time.',
        unit: '/ project',
        cards: [
          {
            name: 'Standard', audience: 'Boutiques & D2C Brands', price: '1 500 € HT',
            creation: 'Already have a 3D model? Web optimization is included. Creating a new 3D model is billed separately, depending on its complexity.',
            monthlyPrice: '49 € HT /month', button: 'Choose Standard',
            features: [
              'Up to 10 simple variants (materials, colors, finishes)',
              'Real-time texture changes in high definition',
              'Seamless integration onto your product page',
              'Optimized global CDN & cloud hosting'
            ]
          },
          {
            name: 'Premium', audience: 'High-Conversion E-commerce', price: '4 500 € HT',
            creation: 'Already have a 3D model? Web optimization is included. Creating a new 3D model is billed separately, depending on its complexity.',
            monthlyPrice: '99 € HT /month', button: 'Choose Premium', popular: true,
            features: [
              'Complex conditional logic & custom rules',
              'Extended variant combinations in real time',
              'Dynamic pricing update & direct add-to-cart',
              'High-resolution PDF configuration export',
              'In-depth analytics on top-performing options'
            ]
          },
          {
            name: 'Custom', audience: 'Custom-Made & Industrial', price: 'Upon request',
            creation: 'For large-scale projects with specific industrial needs.',
            monthlyPrice: 'Upon request', button: 'Request a quote',
            features: [
              'Industrial configurators & complex 3D sizing',
              'ERP, CRM, PIM & inventory integration',
              'Advanced pricing rules & automatic quoting',
              'Tailored architecture & dedicated support'
            ]
          },
        ],
      },
    ],
    coverage: {
      eyebrow: 'CLOUD INFRASTRUCTURE',
      title: 'What does your monthly subscription cover?',
      subtitle: 'A fully managed turnkey cloud service ensuring optimal performance and compatibility maintained with major browsers.',
      commitmentNotice: 'Prices exclude VAT (HT). All plans require an initial 12-month commitment.',
      scopeTitle: 'Maintenance Scope:',
      scopeNotice: 'Bug fixes and compatibility updates are included. Feature evolutions and product modifications are quoted separately.',
      terminationTitle: 'Subscription End & Continuity:',
      terminationNotice: 'The subscription grants access to hosting, cloud services and maintenance. In the event of termination, a standalone hosting or asset transfer option can be provided on quote.',
      items: [
        { title: 'Global CDN Hosting', description: 'Fast 3D asset delivery worldwide with reduced loading times.' },
        { title: 'Updates & Compatibility', description: 'Compatibility maintained with major browsers (Chrome, Safari iOS, Android WebXR). Bug fixes included.' },
        { title: 'Security & Backups', description: 'SSL certificates included, regular 3D asset backups, and secure cloud infrastructure.' },
        { title: 'Analytics & Traffic Insights', description: 'View statistics and, depending on your plan, in-depth analysis of interaction duration and tested variants.' },
        { title: 'Technical Support & Guidance', description: 'Responsive team assistance for CMS integration (Shopify, WooCommerce, PrestaShop) and optimizations.' },
        { title: 'Bandwidth & Scalability', description: 'Infrastructure adapted to large traffic volumes with optimal performance maintenance.' },
      ]
    },
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
