export type SolutionKind = 'viewer' | 'configurator' | 'ar';

export const solutionContent = {
  fr: {
    viewer: {
      seoTitle: 'Viewer Produit 3D pour E-commerce', eyebrow: 'VIEWER PRODUIT 3D', title: 'Viewer produit 3D interactif pour l\'e-commerce.', description: 'Remplacez les images statiques par une exploration 3D en temps réel. Permettez à vos clients de pivoter, zoomer et examiner chaque détail de vos produits avant d\'acheter.', video: '/assets/viewers.webm', example: 'Voir la galerie démo',
      sectionTitle: 'Visualisation produit haute fidélité.', sectionSubtitle: 'Optimisée pour les performances web et les appareils mobiles', processSubtitle: 'Intégrez facilement le viewer 3D sur n\'importe quelle fiche produit.',
      features: [
        { title: 'Exploration 360° Complète', description: 'Laissez les utilisateurs faire pivoter et zoomer pour inspecter les matières et les détails complexes. Bien plus engageant qu\'une séquence d\'images statiques.', icon: 'move' },
        { title: 'Annotations & Animations', description: 'Mettez en valeur les caractéristiques clés avec des hotspots interactifs ou observez le fonctionnement du produit en temps réel.', icon: 'palette' },
        { title: 'Intégration Universelle', description: 'Le rendu WebGL optimisé garantit un temps de chargement ultra-rapide sur tous les appareils, directement intégré à votre plateforme e-commerce.', icon: 'monitor' },
      ],
      middleStep: 'Nous préparons vos modèles 3D pour une performance web optimale sans sacrifier la qualité visuelle.',
    },
    configurator: {
      seoTitle: 'Configurateurs Produit 3D Sur Mesure', eyebrow: 'CONFIGURATEUR PRODUIT 3D SUR MESURE', title: 'Laissez vos clients concevoir leur produit idéal.', description: 'Un configurateur produit 3D conçu sur mesure pour l\'e-commerce. Permettez la personnalisation en temps réel des couleurs, matières et options complexes directement dans le navigateur.', video: '/assets/configurator_dszbzzcJGDLRNb3yi8BSw.webm', example: 'Voir la galerie démo',
      sectionTitle: 'Conçu pour les catalogues produits complexes.', sectionSubtitle: 'Logique métier & intégration e-commerce', processSubtitle: 'De vos fichiers CAO jusqu\'à l\'intégration en ligne sur Shopify ou WooCommerce.',
      features: [
        { title: 'Personnalisation Infinie', description: 'Changez visuellement les couleurs, matières, finitions et composants en temps réel. Idéal pour les produits sur mesure et configurables.', icon: 'palette' },
        { title: 'Logique Métier Avancée', description: 'Nous intégrons vos contraintes spécifiques : options conditionnelles, calcul dynamique du prix et correspondance exacte des SKU ou variantes.', icon: 'price' },
        { title: 'Intégration E-commerce Directe', description: 'Connexion fluide avec Shopify, WooCommerce ou un backend sur mesure. Les produits configurés sont transmis directement au panier.', icon: 'cart' },
      ],
      middleStep: 'Nous optimisons vos assets 3D et développons la logique de configuration sur mesure.',
    },
    ar: {
      seoTitle: 'Visualisation Produit en Réalité Augmentée (AR)', eyebrow: 'RÉALITÉ AUGMENTÉE (WEBAR)', title: 'Projetez vos produits dans le monde réel avec la WebAR.', description: 'La Réalité Augmentée permet à vos clients de projeter le mobilier et les produits physiques directement dans leur pièce à l\'échelle réelle, depuis leur smartphone.', video: '/assets/Ar_wkchJ8ptd73bza5TPWxd8.webm', example: 'Voir la galerie démo',
      sectionTitle: 'Validation contextuelle à l\'échelle réelle.', sectionSubtitle: 'Faire le pont entre le digital et le monde physique', processSubtitle: 'Prêt pour iOS et Android sans aucune application à installer.',
      features: [
        { title: 'Échelle Réelle Garantie', description: 'Crucial pour le mobilier et la maison : les clients vérifient si le produit s\'intègre physiquement dans leur espace avant d\'acheter.', icon: 'move' },
        { title: 'WebAR Sans Application', description: 'Expérience sans friction. Les utilisateurs cliquent sur un bouton depuis votre site mobile pour lancer instantanément la projection AR.', icon: 'phone' },
        { title: 'Visualisation En Situation', description: 'Visualiser le produit dans leur propre intérieur lève la dernière hésitation et réduit drastiquement le taux de retour.', icon: 'monitor' },
      ],
      middleStep: 'Nous calibrons l\'échelle, les ombres et les matières pour garantir la projection AR la plus réaliste possible.',
    },
    process: {
      title: 'Comment ça marche ?', subtitle: 'Une méthodologie claire de la modélisation 3D au déploiement.',
      steps: [
        { title: 'Préparation des Assets 3D', description: 'Transmettez-nous vos fichiers CAO, plans techniques ou photos. Nous créons ou optimisons vos modèles 3D pour le web.' },
        { title: 'Développement de l\'Expérience' },
        { title: 'Intégration & Livraison', description: 'Recevez un code d\'intégration optimisé (Shopify, WooCommerce, sur mesure) qui s\'intègre de façon transparente sur votre site.' },
      ],
    },
    cta: { title: 'Discutons de votre projet 3D', description: 'Parlez-nous de vos produits et de votre plateforme e-commerce. Nous vous apporterons une réponse technique adaptée.', primary: 'Demander une consultation', secondary: 'Découvrir nos tarifs' },
  },
  en: {
    viewer: {
      seoTitle: '3D Product Viewer for Ecommerce', eyebrow: '3D PRODUCT VIEWER', title: 'Interactive 3D product viewer for e-commerce.', description: 'Replace static images with real-time 3D exploration. Allow customers to rotate, zoom, and inspect every detail of your products before buying.', video: '/assets/viewers.webm', example: 'View Demo Gallery',
      sectionTitle: 'High-fidelity product visualization.', sectionSubtitle: 'Optimized for web performance and mobile devices', processSubtitle: 'Easily embed the 3D viewer on any product page.',
      features: [
        { title: 'Full 360° Exploration', description: 'Let users rotate and zoom to inspect materials and intricate details. More engaging than static images or pre-rendered video sequences.', icon: 'move' },
        { title: 'Annotations & Animations', description: 'Highlight key features with interactive hotspots or demonstrate how a product moves and functions in real time.', icon: 'palette' },
        { title: 'Universal Integration', description: 'Optimized WebGL delivery ensures lightning-fast loading times on all devices, seamlessly embedded into your e-commerce platform.', icon: 'monitor' },
      ],
      middleStep: 'We prepare your 3D models for optimal web performance without sacrificing visual quality.',
    },
    configurator: {
      seoTitle: 'Custom 3D Product Configurators', eyebrow: 'CUSTOM 3D PRODUCT CONFIGURATOR', title: 'Let your customers design their perfect product.', description: 'A bespoke 3D product configurator tailored for e-commerce. Enable real-time customization of colors, materials, and complex options directly in the browser.', video: '/assets/configurator_dszbzzcJGDLRNb3yi8BSw.webm', example: 'View Demo Gallery',
      sectionTitle: 'Built for complex product catalogs.', sectionSubtitle: 'Business logic & e-commerce integration', processSubtitle: 'From your CAD files to a live Shopify or WooCommerce integration.',
      features: [
        { title: 'Infinite Customization', description: 'Visually swap colors, materials, finishes, and components in real time. Perfect for made-to-order and highly customizable products.', icon: 'palette' },
        { title: 'Advanced Business Logic', description: 'We integrate your specific constraints: conditional options, dynamic pricing based on selections, and exact SKU or variant mapping.', icon: 'price' },
        { title: 'Direct E-commerce Integration', description: 'Seamless connection to Shopify, WooCommerce, or custom backends. Configured products are passed directly to the cart.', icon: 'cart' },
      ],
      middleStep: 'We optimize your 3D assets and build the custom configuration logic for a seamless experience.',
    },
    ar: {
      seoTitle: 'AR Product Visualization for Ecommerce', eyebrow: 'AR PRODUCT VISUALIZATION', title: 'Bring your products into the real world with WebAR.', description: 'Augmented Reality allows customers to project furniture and large items directly into their room at true scale, using their smartphone.', video: '/assets/Ar_wkchJ8ptd73bza5TPWxd8.webm', example: 'View Demo Gallery',
      sectionTitle: 'True-to-scale contextual validation.', sectionSubtitle: 'Bridging the gap between digital and physical', processSubtitle: 'Ready for iOS and Android without any app installation.',
      features: [
        { title: 'Real-World Scale', description: 'Crucial for furniture and home goods: customers can verify if a product physically fits in their space before purchasing.', icon: 'move' },
        { title: 'App-Free WebAR', description: 'Frictionless experience. Users simply tap a button on your mobile website to instantly launch the Augmented Reality view.', icon: 'phone' },
        { title: 'Contextual Visualization', description: 'Seeing a product in their own lighting and environment removes the final hesitation, drastically reducing return rates.', icon: 'monitor' },
      ],
      middleStep: 'We calibrate scales, shadows, and materials to ensure the most realistic AR projection possible.',
    },
    process: {
      title: 'How does it work?', subtitle: 'A clear methodology from 3D modeling to deployment.',
      steps: [
        { title: '3D Asset Preparation', description: 'Send us your CAD files, technical drawings, or reference photos. We create or optimize your 3D models for the web.' },
        { title: 'Experience Development' },
        { title: 'Integration & Handoff', description: 'Receive an optimized integration code (Shopify, WooCommerce, custom) that embeds seamlessly into your existing site.' },
      ],
    },
    cta: { title: 'Discuss your 3D project', description: 'Tell us about your products and e-commerce platform. We will provide a tailored technical approach.', primary: 'Request a consultation', secondary: 'View our pricing' },
  },
} as const;

export const pricingContent = {
  fr: {
    seo: { title: 'Des tarifs clairs, adaptés à vos besoins', description: 'Tarifs transparents pour nos configurateurs 3D sur mesure, viewers 3D interactifs et solutions WebAR. Découvrez nos coûts d\'intégration, hébergement cloud et création 3D.' },
    eyebrow: 'INVESTISSEMENT & ROI', title: 'Des tarifs clairs, adaptés à vos besoins',
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
    seo: { title: 'Pricing', description: 'Clear pricing for custom 3D configurators, interactive 3D viewers, and WebAR solutions. Understand our setup fees, cloud infrastructure, and 3D asset costs.' },
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
  fr: {
    seo: { title: 'Démos Produits 3D & Réalisations', description: 'Explorez notre galerie de démos d\'expériences 3D interactives, configurateurs sur mesure et exemples de Réalité Augmentée Web pour l\'e-commerce.' },
    eyebrow: 'GALERIE DE RÉALISATIONS',
    title: 'DÉMO',
    subtitle: 'Découvrez quelques-unes de nos réalisations.',
    filters: { all: 'Tout', viewer: 'Viewer 3D', configurator: 'Configurateur', ar: 'Réalité Augmentée' },
    fullscreen: 'Plein écran',
    exitFullscreen: 'Quitter le plein écran',
    previous: 'Voir les démonstrations précédentes',
    next: 'Voir les démonstrations suivantes',
    swipeHint: 'Faites glisser pour découvrir les autres expériences',
    descriptions: {
      'calisson': 'Configurateur 3D de chaise sur mesure avec changement de finitions en temps réel pour l\'e-commerce de mobilier. (Projet Client)',
      'omega-speedmaster': 'Viewer 3D interactif de montre avec rendu photoréaliste des métaux et du verre. (Concept Indépendant)',
      'diamond-ring': 'Configurateur 3D de joaillerie permettant de personnaliser la pierre et l\'alliage en temps réel. (Concept Indépendant)',
      'birkin': 'Configurateur 3D de maroquinerie de luxe avec variantes de cuir et zoom haute définition. (Concept Indépendant)',
      'firenze': 'Configurateur de canapé modulable intégrant la Réalité Augmentée (AR) pour la projection dans la pièce. (Concept Indépendant)',
      'cloudflyer': 'Viewer 3D de chaussure de sport mettant en valeur les détails techniques des matériaux. (Concept Indépendant)',
      'carter-fly-protect-w': 'Viewer 3D interactif pour chaussure de sécurité avec inspection complète à 360°. (Concept Indépendant)'
    }
  },
  en: {
    seo: { title: '3D Product Demos & Selected Work', description: 'Explore our gallery of interactive 3D product viewers, custom configurators, and WebAR examples designed for e-commerce and manufacturing.' },
    eyebrow: 'INTERACTIVE EXPERIENCES',
    title: 'DEMO GALLERY',
    subtitle: 'Discover some of our work.',
    filters: { all: 'All', viewer: 'Viewer', configurator: 'Configurator', ar: 'AR' },
    fullscreen: 'Full screen',
    exitFullscreen: 'Exit full screen',
    previous: 'View previous demos',
    next: 'View next demos',
    swipeHint: 'Swipe to discover more experiences',
    descriptions: {
      'calisson': 'Custom 3D chair configurator showcasing material swapping and real-time interaction for furniture e-commerce. (Client Project)',
      'omega-speedmaster': 'Interactive 3D product viewer demonstrating high-fidelity metal reflections and glass rendering for luxury watches. (Independent Concept)',
      'diamond-ring': 'Jewelry 3D configurator allowing users to customize gemstone colors and metal finishes in real time. (Independent Concept)',
      'birkin': 'Luxury bag 3D configurator with leather texture swapping and detailed zoom capabilities. (Independent Concept)',
      'firenze': 'Modular sofa configurator with Augmented Reality (AR) integration for true-to-scale room visualization. (Independent Concept)',
      'cloudflyer': 'Performance running shoe 3D viewer highlighting material details and product exploration. (Independent Concept)',
      'carter-fly-protect-w': 'Detailed 3D product viewer for safety footwear, emphasizing technical materials. (Independent Concept)'
    }
  },
} as const;
