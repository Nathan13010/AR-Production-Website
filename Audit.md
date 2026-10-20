# Stratégie SEO pour AR Production

**Ma recommandation : consolider les trois pages services existantes, rendre l’anglais indexable à des URL dédiées, puis ajouter une première étude de cas et une seule page sectorielle consacrée au mobilier.**

Le site dispose déjà d’une base réutilisable. Son principal problème n’est pas le nombre de pages : c’est la combinaison d’un contenu dépendant de JavaScript, d’un anglais sans URL propre et de pages commerciales encore peu différenciées.

**Aucun fichier du site n’a été modifié.**

## Périmètre et limites de l’audit

J’ai examiné les neuf pages du projet, les contenus FR/EN, le routing, les composants, les métadonnées HTML, les médias locaux et les réponses HTTP du site public, puis effectué une recherche des intentions commerciales et consulté les documentations officielles pertinentes.

Trois limites à distinguer des constats établis :

- **Indexation réelle et trafic :** sans Google Search Console, impossible de confirmer quelles pages Google indexe ou quelles requêtes génèrent déjà des prospects.
- **Core Web Vitals :** la tentative PageSpeed Insights a retourné une erreur de quota. Aucun score de performance ni résultat terrain n’est donc affirmé.
- **Expériences 3D externes :** leur intégration a été auditée, mais pas le poids total de chaque modèle, texture et moteur distant. L’accessibilité a été examinée dans le code, sans validation exhaustive au clavier et au lecteur d’écran.

---

# 1. Audit technique

## Architecture actuelle : à conserver, avec un meilleur rendu initial

Le projet utilise :

- React 19, TypeScript et Vite ;
- React Router avec des routes classiques, sans routing par fragments ;
- `react-helmet-async` pour modifier les métadonnées ;
- neuf entrées HTML dans la configuration Vite ;
- Vercel pour l’hébergement public.

**Point essentiel : neuf fichiers HTML ne signifient pas neuf pages pré-rendues.** Le corps de chaque fichier contient essentiellement `<div id="root"></div>`. Les textes, titres visibles, liens et formulaire apparaissent après exécution de JavaScript.

Google peut traiter JavaScript ; le site n’est donc pas automatiquement « invisible ». Mais le rendu et l’interprétation deviennent plus complexes, et certains autres robots récupèrent moins bien ce contenu. [Documentation Google sur le SEO JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

**Recommandation P0 :** produire le contenu HTML des pages publiques à la construction du site, puis activer les interactions React. Pour ce petit site, une génération statique convient. Une migration complète vers Next.js n’est pas nécessaire par principe.

## Diagnostic détaillé

| ÉlémentConstatAction |                                                                                              |                                                                                          |
| -------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Routing              | Routes courtes et compréhensibles : `/viewer`, `/configurator`, `/ar`, etc.                  | Conserver les URL existantes.                                                            |
| Rendu                | Contenu principal entièrement rendu côté client.                                             | Pré-rendre les pages commerciales.                                                       |
| Titles               | `Home`, `Viewer`, `Configurator`, `AR`, `Pricing`, `Demo` dans les contenus React.           | Titres descriptifs, propres à chaque intention, avec la marque.                          |
| Descriptions         | Présentes, mais souvent générales ; celles de Pricing et Demo expliquent peu la valeur.      | Réécrire selon le service, le public et le périmètre.                                    |
| H1/H2/H3             | Un H1 par page dans les composants ; hiérarchie globalement cohérente.                       | Conserver la structure, préciser les intitulés.                                          |
| Canonical            | Présente dans chaque entrée HTML ; absente des composants Helmet.                            | Centraliser et actualiser aussi pendant la navigation React.                             |
| Multilingue          | Langue choisie par navigateur ou stockage local, à la même URL. Aucun `hreflang`.            | Créer des URL anglaises distinctes.                                                      |
| Robots               | Accessible, autorise l’exploration et indique le sitemap.                                    | Conserver cette simplicité.                                                              |
| Sitemap              | Accessible, mais contient `/partnership`, pourtant en `noindex,nofollow`.                    | Exclure cette page tant que son statut reste identique.                                  |
| Open Graph           | Déjà présent. L’accueil utilise `banner.webp` dans le HTML et `og.png` après rendu.          | Harmoniser les données et l’image retenue.                                               |
| Twitter/X            | `summary_large_image` déjà présent.                                                          | Conserver ; priorité faible.                                                             |
| Schema.org           | `WebSite` sur l’accueil seulement.                                                           | Ajouter une identité `Organization` et des descriptions de services.                     |
| Images               | Nombreux WebP ; image principale chargée en priorité ; plusieurs images différées.           | Préserver, compléter les variantes responsives si utiles.                                |
| Textes alternatifs   | Plusieurs sont pertinents ; certains restent français en anglais.                            | Localiser les descriptions utiles. Garder `alt=""` pour le décoratif.                    |
| Liens internes       | Services accessibles par navigation et accueil ; pages légales par footer.                   | Ajouter des liens contextuels entre services, preuves et tarifs.                         |
| Page orpheline       | Aucun lien rendu vers Partnership trouvé ; des libellés existent seulement dans les données. | Garder hors stratégie initiale, ou la rendre publique ultérieurement avec un vrai accès. |
| Paramètres           | `?offer=...#contact` sert à présélectionner une offre.                                       | Conserver la fonction ; canonical vers l’accueil de la bonne langue, sans paramètre.     |
| 404                  | Une URL inexistante testée renvoie bien HTTP 404. Composant React 404 également présent.     | Préserver le vrai statut lors des changements de routing.                                |

### Canonical : un défaut concret à corriger

Lors d’un chargement direct de `/viewer`, sa canonical est correcte. En revanche, lors d’une navigation React depuis l’accueil vers Viewer, le code ne remplace pas la canonical présente dans le document initial.

Même risque pour certaines métadonnées statiques, notamment les directives robots après une navigation depuis Partnership.

Il faut **une source unique de métadonnées**, utilisée à la fois pour le HTML initial et pour les changements de page, sans balises contradictoires.

### Redirections : normaliser les variantes

Les vérifications publiques montrent :

- HTTP redirige bien vers HTTPS ;
- `https://www.ardittiproduction.com/` répond directement en 200 ;
- `/viewer`, `/viewer/` et `/viewer/index.html` répondent chacun en 200 ;
- l’URL inexistante testée répond en 404.

Conserver le domaine sans `www` et les chemins sans slash final, sauf la racine. Rediriger définitivement les variantes vers cette convention, en préservant les paramètres utiles.

Les canonicals existantes aident déjà : il s’agit de rendre les signaux cohérents, pas de qualifier toutes ces variantes de problème majeur.

## Performance : les médias passent avant une refonte

Poids des fichiers locaux, arrondis en Mo décimaux :

| RessourcePoids               |                       |
| ---------------------------- | --------------------- |
| Vidéo Configurator           | 4,43 Mo               |
| Vidéo Viewer                 | 3,84 Mo               |
| Vidéo AR                     | 3,32 Mo               |
| Police Inter TTF             | 0,87 Mo               |
| Police Manrope TTF           | 0,17 Mo               |
| Image principale WebP        | 0,10 Mo               |
| JavaScript du build existant | 0,33 Mo non compressé |

Ces valeurs ne représentent pas le transfert réellement compressé ni le chargement complet d’une page.

### Priorités

1. **Vidéos des services :** elles utilisent `autoPlay` et `preload="auto"`, sans poster. Prévoir une image d’aperçu, réduire leur poids et maîtriser le déclenchement sur mobile. Modifier seulement `preload` ne suffit pas si l’autoplay déclenche le téléchargement.
2. **Page Demo :** elle charge immédiatement une iframe externe. Proposer un aperçu puis « Launch interactive demo », avec contexte textuel accessible avant lancement.
3. **Polices :** passer à WOFF2, préserver les caractères français, limiter les téléchargements nécessaires. `font-display: swap` existe déjà.
4. **Images :** conserver la priorité haute de l’image principale ; vérifier dimensions et espace réservé. Des ratios CSS existent déjà, donc l’absence de dimensions HTML ne prouve pas à elle seule un problème de stabilité.
5. **JavaScript :** toutes les pages sont importées directement. Le découpage par page peut suivre, après les gains sur les médias.

Pour les modèles externes, mesurer ensuite chaque expérience sur mobile : transfert initial, textures, mémoire, temps avant interaction et lancement AR. Compression des textures et géométries à décider selon ces mesures et la qualité visuelle requise.

Les objectifs terrain sont **LCP ≤ 2,5 s, INP ≤ 200 ms et CLS ≤ 0,1**, au 75e percentile. Ce sont des critères de validation, pas des résultats actuels. [Web Vitals](https://web.dev/articles/vitals).

### Accessibilité utile à la conversion

À conserver : labels du formulaire, messages de succès/erreur accessibles, noms des logos et prise en compte des mouvements réduits pour certaines animations.

À vérifier ou améliorer :

- traduction des libellés accessibles ;
- navigation clavier des filtres de démo ;
- focus et fermeture des menus ;
- contrastes des petits textes gris ;
- possibilité de suspendre les vidéos animées ;
- lien d’évitement vers le contenu ;
- contenu explicatif disponible sans interaction 3D.

---

# 2. Analyse de toutes les pages

Les appréciations portent sur le contenu et la structure, **pas sur des positions Google mesurées**.

| PageObjectif et intention potentielleQualité actuelle / problème principalDécision |                                                                                |                                                                                                                  |                                                       |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Accueil                                                                            | Présenter une agence de visualisation produit 3D et orienter vers ses services | Base commerciale utile, mais title `Home`, promesses chiffrées non documentées et positionnement peu expliqué    | **Retravailler**                                      |
| Viewer                                                                             | Trouver une solution pour explorer un produit en 3D sur un site                | Intention identifiable ; contenu trop général, proche de la page AR                                              | **Conserver et approfondir**                          |
| Configurator                                                                       | Faire développer un configurateur produit                                      | Bonne correspondance commerciale ; prix dynamique et panier évoqués, mais contraintes et livrables peu détaillés | **Priorité éditoriale la plus forte**                 |
| AR                                                                                 | Permettre au client de visualiser un produit dans son environnement            | Intention distincte, mais fonctionnalités largement reprises du Viewer ; confusion avec le virtual try-on        | **Différencier fortement**                            |
| Pricing                                                                            | Comprendre le budget avant de contacter                                        | Bonne base : coûts initiaux, abonnements, modélisation séparée, engagement et maintenance explicités             | **Conserver et clarifier**                            |
| Demo                                                                               | Évaluer la qualité des réalisations                                            | Excellente matière visuelle ; peu de contexte, H1 générique, projets accessibles par boutons                     | **Transformer en galerie de preuves contextualisées** |
| Partnership                                                                        | Recruter des agences partenaires                                               | Offre distincte, mais non indexable et sans lien rendu identifié                                                 | **Conserver hors phase initiale**                     |
| Legal                                                                              | Identifier l’entreprise                                                        | Page structurée, liée dans le footer                                                                             | **Conserver**                                         |
| Privacy                                                                            | Expliquer la gestion des données                                               | Page structurée avec contrôle analytics                                                                          | **Conserver**                                         |
| About                                                                              | Aucune page dédiée                                                             | L’identité existe dans les mentions légales, mais l’approche de production est peu visible                       | **Ajouter d’abord une section sur l’accueil**         |
| Contact                                                                            | Section de l’accueil                                                           | Formulaire déjà qualifiant : produit, références, délai, message                                                 | **Conserver**, pas besoin d’une page indépendante     |
| Work / Portfolio                                                                   | Pas de page distincte                                                          | Le rôle est actuellement rempli par Demo                                                                         | **Enrichir Demo**, éviter un second hub redondant     |

## Le contenu commercial à fiabiliser en premier

Le code contient notamment :

- « European leader » ;
- « up to +40% » de ventes ;
- `+35%`, `+22%`, `-40%` présentés comme résultats ;
- un témoignage mentionnant `+250%` d’engagement ;
- intégration en 48 heures ;
- « sans ralentir votre site » ;
- personnalisation « sans limite ».

**Le dépôt ne fournit pas les justificatifs de ces affirmations. Cela ne signifie pas qu’elles sont fausses.**

Pour chacune, associer une preuve et son périmètre, ou reformuler :

- « intégration en 48 heures » : à partir de quelle étape et pour quelles intégrations ?
- résultat chiffré : quel projet, quelle période, quelle comparaison ?
- « sans limite » : incompatible avec la présentation d’un forfait limité à dix variantes simples ;
- « sans ralentir » : remplacer par un engagement d’optimisation mesurable.

Distinguer également **mission client, sous-traitance et démonstration indépendante**. Une démo représentant un produit Hermès ou Omega ne prouve pas une relation commerciale avec la marque.

Cette précision renforcera davantage le positionnement premium qu’une accumulation de superlatifs.

---

# 3. Architecture SEO recommandée

## International : français existant, anglais sous `/en/`

Je recommande :

- conserver les URL actuelles en français ;
- créer leurs équivalents anglais sous `/en/` ;
- faire dépendre la langue de l’URL ;
- remplacer les boutons de langue par des liens vers les pages équivalentes ;
- ajouter `hreflang="fr"` et `hreflang="en"` réciproques ;
- utiliser une canonical propre à chaque version.

**L’anglais peut être prioritaire commercialement sans occuper la racine du domaine.** Cette solution limite les changements sur les URL existantes.

La préférence du navigateur peut suggérer une langue, mais ne doit plus changer le contenu d’une URL donnée. Google recommande des URL distinctes pour les versions linguistiques. [Sites multilingues](https://developers.google.com/search/docs/advanced/crawling/managing-multi-regional-sites).

## A. Services : trois pages fortes

### 3D Product Viewer

**Intention :** afficher un produit interactif sur un site marchand ou B2B.

Contenu propre :

- rotation, zoom, détails et annotations ;
- différence avec une séquence photographique à 360° ;
- modèles existants ou création des assets ;
- intégration, chargement mobile et périmètre de maintenance ;
- exemples et budget correspondant.

### 3D Product Configurator

**Intention :** acheter une prestation de configuration visuelle adaptée à son catalogue.

Contenu propre :

- couleurs, matières, dimensions et composants ;
- règles de compatibilité ;
- lien entre choix visuels, prix, panier ou devis ;
- livrables réellement proposés ;
- maintenance du catalogue et limites du périmètre.

### AR Product Visualization

**Intention :** permettre la visualisation du produit dans un espace réel.

Contenu propre :

- placement à l’échelle et préparation des modèles ;
- parcours mobile et passage depuis un ordinateur ;
- compatibilité et solution de repli ;
- différences entre visualisation dans une pièce et essayage sur le corps ;
- démonstration concrète et intégration.

**Ne pas créer trois variantes de chaque service selon Shopify, WooCommerce et “custom”.** Commencer par des sections d’intégration précises dans les services.

## B. Industries : mobilier en premier

| SecteurIntérêt pour AR ProductionDécision |                                                                                                                            |                                                   |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| **Mobilier**                              | Plusieurs exemples dans le dépôt ; matières, finitions, dimensions et placement AR forment un problème commercial cohérent | **Premier candidat**                              |
| Bijouterie / horlogerie                   | Potentiel premium et exemples visuels ; exigences propres aux métaux, pierres et détails                                   | P2, après preuve de mission et périmètre confirmé |
| Luxe                                      | Positionnement transversal trop large pour définir seul une intention                                                      | Pas de page générique initiale                    |
| Mode / chaussures                         | Exemples présents, mais recherches pouvant attendre un vrai essayage ou une aide à la taille                               | Reporter ; clarifier les capacités                |
| Industrie                                 | Potentiel commercial élevé, mais attentes possibles en CAO, règles métier et systèmes de vente                             | P3, après cas documenté                           |

### Première page sectorielle proposée

`/en/industries/furniture`

- **Intention :** trouver un prestataire de configurateur et de visualisation 3D pour une marque ou un fabricant de mobilier.
- **Pourquoi une page indépendante :** parler des tissus, finitions, variantes, dimensions et contraintes du mobilier, avec de vrais exemples.
- **Rôle commercial :** aider le prospect à reconnaître son propre catalogue et à préparer un brief.
- **Liens entrants :** Configurator, AR, Demo, étude de cas mobilier et footer.
- **Liens sortants :** Configurator, AR, étude de cas, tarifs et contact.
- **Condition :** disposer de matière propre suffisante. Deux captures accompagnées d’un texte générique ne suffisent pas.

## C. Use cases : aucune nouvelle page au lancement

| BesoinDestination initialeQuand séparer             |                                                                     |                                                                          |
| --------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Personnaliser un produit                            | Configurator                                                        | L’intention est déjà couverte                                            |
| Montrer des variantes sans toutes les photographier | Configurator, avec distinction entre interactif et images exportées | Si une offre autonome de production d’images est documentée              |
| Voir le produit chez soi                            | AR                                                                  | L’intention est déjà couverte                                            |
| Comprendre un produit complexe                      | Viewer                                                              | Si un cas démontre annotations, éclatés ou séquences propres à ce besoin |
| Réduire l’incertitude d’achat                       | Bénéfice transversal                                                | Trop général pour une page seule                                         |

Une future page sur les **rendus de variantes produit** pourrait répondre à une intention distincte. Elle demanderait une offre claire : livrables, résolution, cohérence des prises de vue, exemples et méthode de validation. Elle ne doit pas être une copie de Configurator.

## D. Case studies : une première preuve approfondie

Premier candidat : **un projet mobilier présent dans la galerie**, par exemple Calisson ou Firenze, selon la réalité de la mission et les éléments disponibles.

Structure :

1. client ou contexte clairement identifié ;
2. problème commercial initial ;
3. produit, catalogue et contraintes ;
4. rôle exact d’AR Production ;
5. solution et raisons des choix ;
6. captures et démonstration ;
7. intégration et livrables ;
8. résultats documentés ;
9. limites et enseignements ;
10. appel à discuter d’un projet similaire.

Sans mesure de conversion, présenter les résultats observables : variantes couvertes, parcours livré, intégration réalisée, retour client autorisé. **Ne pas inventer un ROI pour compléter le modèle.**

URL proposée : `/en/case-studies/<projet-verifie>`.

Liens entrants : Demo, service concerné, page Furniture lorsqu’elle existe. Liens sortants : service, secteur, démo pertinente et contact.

---

# 4. Navigation et maillage interne

## Navigation principale

**Solutions ▾ · Work & Demos · Pricing · Request a quote · EN/FR**

- Logo → accueil.
- Solutions → les trois services.
- Work & Demos → `/demo` ou `/en/demo`.
- Pricing → tarifs.
- Request a quote → contact dans l’accueil de la bonne langue.

Le lien Contact séparé peut être retiré de la navbar s’il fait doublon avec le bouton.

## Hors navbar, mais accessibles

- **Furniture :** footer et sections contextuelles des services.
- **Case studies :** galerie Demo et services associés.
- **Partnership :** plus tard dans le footer si elle devient une offre publique.
- **Legal et Privacy :** footer.
- **About :** section d’accueil au départ.

Pas besoin de créer immédiatement des hubs `/industries`, `/use-cases` et `/case-studies` vides ou presque. Demo peut accueillir les premières études de cas.

### Règle de maillage

Chaque page commerciale doit recevoir :

1. un lien depuis un point d’entrée permanent ;
2. un lien contextuel depuis une page pertinente ;
3. des liens vers la solution, la preuve ou la prochaine étape commerciale utile.

Un sitemap aide à découvrir une URL, mais ne remplace pas ce parcours.

---

# 5. Recherche de mots-clés et intentions

## Ce que montre la recherche

Les résultats consultés font apparaître trois environnements concurrentiels :

- les plateformes de visualisation, comme [VNTANA](https://www.vntana.com/solutions/3d-product-viewer/) ou [Zakeke](https://www.zakeke.com/solutions/3d-and-ar-viewer/) ;
- les prestataires de configurateurs personnalisés, comme [Cocoon](https://cocoon.agency/product-configurators) ;
- les applications Shopify, comme [Angle 3D Configurator](https://apps.shopify.com/angle-3d-configurator).

**Conséquence :** AR Production doit expliquer clairement ce que le prospect achète auprès d’une agence : préparation des assets, qualité visuelle, adaptation au produit, intégration et accompagnement.

La concurrence ci-dessous est **qualitative**, estimée à partir des offres et résultats observés. Ce n’est ni un score de difficulté d’un outil SEO, ni une étude de volume, ni un relevé Google géolocalisé exhaustif.

## Groupes prioritaires

| Groupe de requêtes ENIntention commercialePertinenceConcurrence estiméeIntérêt / destination |                                                 |                                |                                 |                                       |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------ | ------------------------------- | ------------------------------------- |
| **custom 3D product configurator / 3D configurator development**                             | Très forte : recherche de réalisation           | Très forte                     | Forte, prestataires spécialisés | **P1 — Configurator**                 |
| **3D product configurator**                                                                  | Forte, mais comparaison logiciel/prestation     | Très forte                     | Très forte                      | **P1 — même page**                    |
| **3D product viewer for ecommerce / 3D product viewer integration**                          | Forte, surtout avec “integration”               | Très forte                     | Forte, plateformes établies     | **P1 — Viewer**                       |
| **AR product visualization services / augmented reality for ecommerce**                      | Forte avec “services”, plus mixte sinon         | Forte                          | Forte                           | **P1 — AR**                           |
| **3D configurator pricing / custom product configurator cost**                               | Forte : budget et sélection                     | Très forte                     | Moyenne à forte                 | **P1 — Pricing**                      |
| **furniture configurator for manufacturers / 3D furniture configurator**                     | Forte avec précision B2B ; mixte sans elle      | Très forte                     | Forte                           | **P1 conditionnelle — Furniture**     |
| **Shopify 3D configurator development / custom Shopify product configurator**                | Forte, mais concurrence des apps                | Forte si intégration maîtrisée | Très forte                      | Section Configurator ; page dédiée P2 |
| **interactive product visualization / 3D product visualization services**                    | Mixte : interactif, images et animation         | Forte après qualification      | Forte                           | Accueil et Viewer                     |
| **WebAR product viewer / web-based AR product visualization**                                | Commerciale et technique mélangée               | Forte                          | Moyenne à forte                 | AR, pas de doublon                    |
| **WooCommerce 3D configurator**                                                              | Recherche d’intégration ou plugin               | Forte sous réserve de preuves  | Moyenne à forte, à approfondir  | Section d’intégration                 |
| **3D product rendering services / CGI product photography**                                  | Forte, mais pour des images                     | Service adjacent               | Forte                           | P2/P3 : offre dédiée à documenter     |
| **product configurator**                                                                     | Très large : 2D, 3D, logiciel, devis industriel | Moyenne sans précision         | Très forte                      | Terme secondaire de Configurator      |

Les recherches de rendu produit font effectivement ressortir des offres d’images et de production visuelle, distinctes d’un configurateur interactif. [Exemple d’offre de rendu produit](https://www.digitalshelf3d.com/).

### Vocabulaire plus proche du prospect

Intégrer naturellement les formulations :

- product customization / product customizer ;
- choose materials and finishes ;
- visualize product options ;
- add a configured product to cart ;
- request a quote from a configuration ;
- view furniture in your room.

Ce sont des formulations de besoins à employer dans les textes et les entretiens commerciaux. Leur présence dans une offre concurrente ne prouve pas, seule, un volume de recherche.

### Français

Adapter les mêmes groupes aux pages existantes :

- configurateur 3D produit sur mesure ;
- création de configurateur produit ;
- viewer 3D pour site e-commerce ;
- visualisation produit en réalité augmentée ;
- prix configurateur 3D ;
- configurateur mobilier pour fabricant.

L’effort de recherche et de rédaction initial doit rester majoritairement consacré à l’anglais.

### Shopify : une distinction commerciale indispensable

Shopify sait déjà afficher des modèles 3D avec des thèmes compatibles. La valeur d’AR Production doit donc dépasser « ajouter de la 3D » : produire les modèles, personnaliser le parcours, gérer les choix et intégrer le tout au fonctionnement réel de la boutique. [Documentation Shopify](https://help.shopify.com/en/manual/products/product-media).

---

# 6. Phase initiale minimale

## P0 — avant l’expansion éditoriale

1. Stabiliser les langues par URL.
2. Pré-rendre le contenu public.
3. Corriger la gestion des métadonnées et canonicals.
4. Retirer Partnership du sitemap tant qu’elle reste non indexable.
5. Normaliser les variantes d’URL, préserver les 404.
6. Vérifier les preuves et promesses commerciales.
7. Établir la référence Search Console et le suivi des demandes qualifiées.

## P1 — six pages prioritaires

Créer ou reprendre les six pages anglaises suivantes :

| PagePourquoi elle mérite l’investissement |                                                                                       |
| ----------------------------------------- | ------------------------------------------------------------------------------------- |
| `/en/`                                    | Présenter l’agence, qualifier le besoin et distribuer vers les services               |
| `/en/configurator`                        | Répondre à l’intention commerciale la plus précise                                    |
| `/en/viewer`                              | Couvrir l’exploration produit sans configuration complexe                             |
| `/en/ar`                                  | Couvrir le placement du produit dans l’environnement réel                             |
| `/en/pricing`                             | Aider le prospect à vérifier l’adéquation budgétaire                                  |
| `/en/demo`                                | Fournir les preuves visuelles et accueillir les premiers liens vers les études de cas |

Ces pages reprennent les contenus et composants existants ; ce ne sont pas six concepts supplémentaires.

## P1 conditionnelle — deux pages supplémentaires

7. Une étude de cas anglaise documentée.  
8. `/en/industries/furniture`, alimentée par des exemples et contraintes propres au mobilier.

**Budget initial : huit pages anglaises créées ou fortement retravaillées.** Les pages françaises existantes reçoivent les corrections techniques et factuelles nécessaires ; leur réécriture éditoriale complète peut suivre pour ne pas doubler immédiatement la charge.

Si les preuves manquent, lancer six pages solides et différer les deux dernières.

## P2

- amélioration éditoriale complète des équivalents français ;
- seconde étude de cas ;
- page Shopify si les demandes et une intégration réelle la justifient ;
- éventuelle offre bijouterie/horlogerie ;
- approfondissement des performances mesurées.

## P3

- use case autonome ;
- offre de rendu photoréaliste dédiée ;
- industrie ;
- programme partenaires indexable ;
- contenus pédagogiques répondant à des objections récurrentes.

---

# 7. Template éditorial pour travailler avec l’IA

## Brief obligatoire avant rédaction

Pour chaque page, fournir :

| ChampContenu attendu |                                                     |
| -------------------- | --------------------------------------------------- |
| Acheteur             | Fonction, type d’entreprise, situation d’achat      |
| Intention            | Décision que la page doit aider à prendre           |
| Différence           | Ce qu’elle apporte par rapport aux pages existantes |
| Offre                | Prestations, livrables, exclusions et limites       |
| Preuves              | Projets, captures, témoignages ou données vérifiés  |
| Contraintes          | Catalogue, plateforme, fichiers, maintenance        |
| Conversion           | Prochaine étape souhaitée                           |
| Maillage             | Pages entrantes et sortantes                        |
| Langue               | Version rédigée et équivalent éventuel              |

## Structure commune, contenu variable

1. Réponse directe au besoin.
2. Situation dans laquelle la solution est pertinente.
3. Exemple concret.
4. Fonctionnement et décisions à prévoir.
5. Livrables et intégration.
6. Contraintes, budget et délais.
7. Preuves.
8. Questions réellement posées par les prospects.
9. Appel à l’action adapté.

### Modules propres aux catégories

- **Industry :** catalogue, matériaux, variantes, distribution et contraintes du secteur.
- **Use case :** problème, méthodes possibles, arbitrages et critères de choix.
- **Case study :** faits du projet, rôle exact, réalisation et résultats.

### Règles de validation

- Ne jamais inventer de client, résultat, capacité ou délai.
- Signaler les informations manquantes au rédacteur.
- Éviter les longueurs imposées et densités de mots-clés.
- Ne pas publier une page qui fonctionne tout aussi bien en remplaçant simplement le nom du secteur.
- Faire relire les faits par la personne ayant réalisé la prestation.
- Ne publier que lorsque la page aide une décision commerciale précise.

Google distingue l’assistance rédactionnelle de la production massive de pages sans valeur ajoutée. [Conseils sur le contenu généré avec l’IA](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content).

---

# 8. SEO et moteurs IA

## Le même socle

Contenu HTML accessible, identité claire, pages distinctes et preuves originales servent les deux objectifs. Google indique qu’aucun fichier ni balisage spécial n’est nécessaire pour ses fonctionnalités IA. [Google : AI Features and Your Website](https://developers.google.com/search/docs/appearance/ai-features).

Pour AR Production, les compléments utiles sont :

- expliquer brièvement chaque prestation et ses limites ;
- nommer clairement l’entreprise et son responsable ;
- décrire les projets en texte, en plus des démonstrations ;
- publier des comparaisons utiles : viewer/configurator, rendu fixe/interactif, AR dans une pièce/essayage ;
- dater les résultats et identifier leurs sources ;
- rechercher des mentions pertinentes chez les clients et partenaires, avec leur accord.

Une étude de cas originale et citée par un client est un meilleur investissement initial qu’un fichier destiné à « optimiser pour les LLM ».

## Robots des moteurs IA

- **ChatGPT Search :** `OAI-SearchBot` concerne la recherche ; `GPTBot` concerne l’entraînement. Les réglages sont indépendants. [OpenAI Docs](https://developers.openai.com/api/docs/bots).
- **Perplexity :** vérifier l’accès de `PerplexityBot`, y compris au niveau du pare-feu si nécessaire. [Documentation Perplexity](https://docs.perplexity.ai/docs/resources/perplexity-crawlers).

Le `robots.txt` actuel autorise déjà globalement l’exploration. **Aucune multiplication de règles n’est nécessaire sans blocage identifié.** Une autorisation d’exploration ne garantit pas une citation.

## Mesurer la qualité commerciale

Conserver les événements existants `demo_click`, `contact_click` et `contact_submit`.

Ajouter ou vérifier :

- page d’entrée et langue ;
- service demandé ;
- origine de la visite lorsqu’elle est disponible ;
- statut commercial : pertinent, rendez-vous, devis, gagné ;
- suivi correct des changements de page React.

Le clic sur une démo est un indicateur intermédiaire. **La mesure principale est le nombre de demandes qualifiées et leur progression commerciale.**

Revue mensuelle :

- impressions et clics hors marque par page, pays et langue ;
- requêtes correspondant réellement aux services ;
- canonicals choisies et exclusions dans Search Console ;
- demandes qualifiées et devis issus de l’organique.

Après environ 8 à 12 semaines de données, ajuster selon les signaux disponibles, sans considérer ce délai comme une promesse de classement. Une nouvelle page exige une intention distincte, une offre pertinente et des preuves ; quelques impressions ne suffisent pas.

---

# CODEX IMPLEMENTATION PLAN

**Statut : plan à exécuter après validation de la stratégie.**

## 1. Préserver la base existante

Réutiliser :

- `Layout`, `Footer`, `Button`, `PartnerLogos` ;
- `SolutionPage` pour les trois services ;
- les contenus FR/EN existants ;
- le formulaire et les événements analytics ;
- les images WebP et l’identité visuelle.

Ne pas réécrire le moteur des démos externes dans ce chantier.

## 2. Routing et langues

**Fichiers concernés :**

- [App.tsx]\(C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/src/App.tsx)
- [LanguageContext.tsx]\(C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/src/context/LanguageContext.tsx)
- [Layout.tsx]\(C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/src/components/Layout.tsx)
- [Footer.tsx]\(C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/src/components/Footer.tsx)

Créer un registre partagé proposé :

`C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/src/content/routeManifest.ts`

Il contiendra : identifiant, langue, URL, équivalent linguistique, statut d’indexation et métadonnées.

**Travail :**

- conserver les routes françaises ;
- ajouter les six routes anglaises prioritaires ;
- rendre la langue déterministe par URL ;
- localiser les liens, y compris contact et offre présélectionnée ;
- ne générer des alternates que pour les versions réellement publiées.

**Validation :** une URL conserve sa langue après rechargement et dans un navigateur d’une autre langue ; le sélecteur mène à l’équivalent correct.

## 3. Génération HTML statique

**Fichiers concernés :**

- [vite.config.ts]\(C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/vite.config.ts)
- [package.json]\(C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/package.json)
- [main.tsx]\(C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/src/main.tsx)
- les neuf entrées HTML actuelles.

**Fichiers proposés :**

- `C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/src/entry-server.tsx`
- `C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/scripts/prerender.ts`

**Travail :**

- rendre chaque route publiée à la construction ;
- utiliser un contexte de routing et de langue compatible avec ce rendu ;
- hydrater les interactions côté client ;
- protéger les accès à `window`, `localStorage` et aux API du navigateur ;
- rendre les chiffres validés directement dans le HTML si les compteurs sont conservés, puis animer progressivement.

**Validation :** le HTML reçu contient H1, texte principal, liens et métadonnées ; pas de contenu initial vide ni d’erreur d’hydratation.

## 4. Métadonnées, canonical et Schema.org

**Fichier proposé :**

`C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/src/components/Seo.tsx`

**Travail :**

- une seule source pour title, description, canonical, robots, Open Graph et alternates ;
- même résultat au chargement direct et après navigation ;
- suppression des doublons entre HTML et Helmet ;
- `Organization` avec identité et profils officiels vérifiés ;
- conservation de `WebSite` ;
- `Service` sur les services ;
- `BreadcrumbList` seulement avec un fil d’Ariane cohérent ;
- `Article` ou `CreativeWork` pour les études de cas selon leur présentation ;
- aucune note agrégée ou offre structurée inventée.

Titres anglais proposés :

| PageTitle    |                                                         |
| ------------ | ------------------------------------------------------- |
| Home         | 3D Product Visualization Agency \| AR Production        |
| Viewer       | 3D Product Viewer for Ecommerce \| AR Production        |
| Configurator | Custom 3D Product Configurators \| AR Production        |
| AR           | AR Product Visualization for Ecommerce \| AR Production |
| Pricing      | 3D Viewer & Configurator Pricing \| AR Production       |
| Demo         | 3D Product Demos & Selected Work \| AR Production       |

**Validation :** une seule canonical, title et description par page ; canonical sans paramètres ; alternates réciproques ; données structurées conformes au contenu visible. Le type `Service` ne promet pas de résultat enrichi Google.

## 5. Sitemap, robots et hébergement

**Fichiers concernés :**

- [robots.txt]\(C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/public/robots.txt)
- [sitemap.xml]\(C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/public/sitemap.xml)

Générer le sitemap depuis le registre des routes. Inclure uniquement les URL publiées, canoniques et indexables. Ne pas inventer de dates de modification.

Inspecter la configuration Vercel effective avant de créer, si nécessaire :

`C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/vercel.json`

**Travail :**

- redirections permanentes de `www`, slash final et `index.html` vers la convention retenue ;
- conservation des paramètres utiles ;
- maintien des vraies réponses 404 ;
- absence de réécriture globale transformant toutes les URL inconnues en accueil 200.

**Validation :** tests HTTP sur chaque route, variante et URL inexistante ; sitemap sans page `noindex`, redirection ou erreur.

## 6. Contenu et maillage

**Fichiers concernés :**

- [siteContent.ts]\(C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/src/content/siteContent.ts)
- [pageContent.ts]\(C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/src/content/pageContent.ts)
- [mediaData.ts]\(C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/src/content/mediaData.ts)
- les composants de pages existants.

**Travail :**

- réécrire les six pages anglaises ;
- corriger les affirmations non justifiées dans les deux langues ;
- différencier Viewer et AR ;
- contextualiser chaque démo ;
- ajouter les liens services ↔ preuves ↔ tarifs ↔ contact ;
- conserver les conditions tarifaires déjà explicites.

**Pages conditionnelles à créer :**

- `C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/src/pages/CaseStudyPage.tsx`
- `C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/src/content/caseStudies.ts`
- `C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/src/pages/IndustryPage.tsx`
- `C:/Users/natha/OneDrive/Bureau/My Apps/AR-Production-Website/src/content/industryContent.ts`

**Validation :** aucune page importante orpheline ; aucune étude de cas fictive ; aucune page sectorielle publiée sans contenu propre.

## 7. Performance et accessibilité

Modifier les pages Home, SolutionPage et Demo ainsi que leurs styles et les polices.

**Travail :**

- posters et déclenchement maîtrisé des vidéos ;
- aperçu avant iframe 3D ;
- WOFF2 ;
- espace réservé aux médias ;
- traduction des libellés accessibles ;
- clavier, focus, contrastes et mouvements réduits.

**Validation :** comparaison mobile avant/après, inspection des téléchargements avant lancement d’une démo, absence de régression visuelle et test du formulaire en environnement de test.

## 8. Recette et suivi

- Exécuter lint et build.
- Tester les chargements directs et les navigations React dans les deux langues.
- Contrôler les métadonnées, liens, statuts HTTP et contenu sans JavaScript.
- Faire une recette responsive et clavier.
- Vérifier les événements analytics sans envois commerciaux réels.
- Après publication autorisée, soumettre le sitemap et inspecter les pages prioritaires dans Search Console.
- Suivre les demandes qualifiées avant d’étendre l’architecture.

**Ordre recommandé : socle technique → six pages anglaises → première étude de cas → Furniture → décisions fondées sur les données.**