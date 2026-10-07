# Audit technique d’indexation — 7 octobre 2026

Corrections locales vérifiées, sans déploiement ni validation Search Console. Les anomalies reproduites ne peuvent pas être attribuées aux huit URL exclues du relevé du 4 octobre : leurs adresses ne sont pas disponibles.

## Données et méthode

- Relevé fourni : 2 URL indexées, 8 non indexées (2 noindex, 2 erreurs 404, 2 redirections, 1 doublon sans canonical choisie par l’utilisateur, 1 autre page avec canonical correcte). Aucun cas actif de canonical différente choisie par Google ou d’URL explorée actuellement non indexée.
- Aucun outil Search Console connecté trouvé ; aucun CSV détaillé trouvé dans ce projet, les projets voisins consultés ou le worktree SEO. Aucun identifiant d’authentification recherché. Les données Search Console fournies restent un contexte historique, pas un diagnostic URL par URL.
- Inspection du routage React, registre FR/EN, Helmet 3 avec React 19, rendu serveur, hydratation, génération du sitemap, liens et paramètres, historique des fichiers HTML, configuration Vercel et robots.txt. Aucune consigne AGENTS.md applicable trouvée dans le projet ou ses parents inspectés. Audit.md existant lu comme contexte, sans modification.
- 134 cas HTTP publics testés, avec réponses intermédiaires et finales conservées. HTML brut enregistré, puis contrôles Chromium de l’hydratation et de la navigation publique.
- Build local comparé au HTML public : H1 et langue initiale identiques pour les 16 entrées du sitemap. Les pages sont pré-rendues avec du contenu distinct ; aucun ensemble de pages commerciales recevant le même HTML principal générique n’a été reproduit. Le CSS produit conserve le même fichier `index-CrQlj0M0.css` que le site public.

## Causes confirmées et corrections

| URL / comportement | Preuve avant correction | Correction |
| --- | --- | --- |
| `/en/` et `/en` | Vercel renvoie 308 de `/en/` vers `/en`. Le HTML servi à `/en` est anglais avec canonical `/en/`, mais le registre ne reconnaît que `/en/`. Dans Chromium, `/en` devient français, produit React #418, deux canonical (`/en/` et `/en`) et des hreflang contradictoires. | Accueil canonique `/en`, cohérent avec Vercel. Reconnaissance de `/en` et `/en/`. Canonical issue du registre ; sitemap, liens et hreflang utilisent `/en`. La version anglaise conserve sa propre canonical. |
| `/?offer=…#contact` et équivalent anglais | L’offre existe dès le premier rendu client mais pas dans le HTML statique. Reproduit publiquement sur `/?offer=Viewer%203D#contact` : React #418 et duplication des métadonnées. En navigation vers `/pricing`, une canonical de l’accueil reste dans le document. | Lecture de l’offre dans le contenu après hydratation avec `useSyncExternalStore`. Présélection et champ caché conservés ; canonical de l’accueil sans paramètres. |
| `/privacy`, `/en/privacy`, lorsque `ar-analytics-opt-out=true` | Reproduit publiquement sur `/privacy` : différence de texte entre SSR et navigateur, React #418, canonical dupliquée. | État du navigateur affiché après hydratation. Le stockage du choix et son contrôle restent fonctionnels. |
| `/en/pricing` | Boutons d’offre et contact vers l’accueil français, lien démo vers `/demo`. | Offres/contact vers `/en`, démo vers `/en/demo`. |
| `/en/legal`, `/en/privacy` | Liens croisés vers les documents français. | Liens croisés vers les documents anglais. |
| `/en/partnership`, CTA des services anglais | Contact vers `/` sur Partnership ; accueil avec slash `/en/` dans les CTA de services. | Contact localisé et liens directs vers `/en`. Le noindex Partnership est conservé. |
| Sélecteur de langue | Les liens utilisent le chemin seul : perte de `?offer` et `#contact`. | Conservation de la query et de l’ancre, avec chemin canonique de la page équivalente. |
| URL inexistante | Le fichier partagé 404 annonce une canonical `/404` et un alternate français sans équivalent. Sous `/en/…`, le fichier français provoque aussi une différence d’hydratation lors de la traduction de l’erreur. | Pas de canonical/hreflang sur une route inconnue ; noindex conservé. Hydratation du fichier 404 partagé avant traduction de l’erreur. HTTP 404 conservé. |

Le déplacement des métadonnées React 19 dans le `<head>` fonctionne lors d’une hydratation réussie : une navigation publique directe `/viewer` → `/pricing` ne laisse pas de canonical obsolète. Le défaut reproduit vient ici de la récupération après une hydratation échouée. Aucun remplacement global du mécanisme Helmet/SSG n’est nécessaire.

## Constats publics reconfirmés

Le sitemap public contient 16 URL : `/`, `/viewer`, `/configurator`, `/ar`, `/pricing`, `/demo`, `/legal`, `/privacy` et leurs équivalents anglais, dont l’accueil `/en/`.

- 15 URL répondent directement en HTTP 200 ; `/en/` répond **308 vers `/en`, puis 200**. L’affirmation antérieure « les 16 URL répondent en 200 » doit donc distinguer réponse initiale et réponse finale.
- Dans le HTML initial, chacune de ces entrées a une seule canonical correspondant à l’URL annoncée et une directive `index,follow`. Les hreflang FR/EN/x-default sont réciproques, mais l’accueil anglais référencé `/en/` redirige. Les défauts après JavaScript sont ceux décrits ci-dessus.
- Aucun `X-Robots-Tag` trouvé dans les réponses testées, y compris les redirections.
- HTTP → HTTPS, www → domaine sans www, slash final → chemin sans slash et les anciennes entrées `index.html` retrouvées dans l’historique redirigent en 308. Les paramètres testés sont conservés. `/viewer.html` redirige également vers `/viewer`. Aucune nouvelle ancienne route supprimée ne justifie une redirection ajoutée.
- `/partnership` et `/en/partnership` répondent 200 avec `noindex,nofollow`, conformément au registre volontaire ; absentes du sitemap construit. Elles pourraient correspondre aux deux exclusions noindex du relevé, mais cette correspondance n’est pas prouvée.
- `/seo-audit-missing-20261007` et `/en/seo-audit-missing-20261007` répondent réellement 404, sans redirection vers l’accueil. Ces URL sont des sondes créées pour l’audit, **pas** les deux URL 404 de Search Console.

La configuration Vercel n’a pas été modifiée : ses redirections fonctionnent déjà. Le sitemap livré est `dist/sitemap.xml`, généré depuis le registre après le build ; l’ancien `public/sitemap.xml` n’est pas le sitemap final livré et est écrasé dans dist par le prerender.

## Vérifications après correction

Commandes exécutées :

```sh
npm run build
npm run check:seo
npm run lint
node scripts/audit-public.mjs
```

- Build TypeScript/client/serveur/prerender réussi.
- `check:seo` vérifie les 18 pages pré-rendues, un H1 et un title, les langues, une canonical absolue, une directive robots, trois alternates réciproques par page connue, l’absence de HTML principal identique, les liens internes canoniques et localisés, les 16 URL du sitemap, les exclusions Partnership et le HTML 404.
- Lint sans erreur ; deux avertissements préexistants subsistent : export de useLanguage pour Fast Refresh et setState dans un effet de Demo.
- Chromium : 54 instantanés de contrôle, chargement direct des 18 pages, changement de langue sur chaque page, offres FR/EN avec caractères encodés, conservation query/ancre, passage offre → tarifs → offre, refus des statistiques sur les deux politiques, filtres/sélection de démo, intégration iframe et plein écran. Une seule canonical et une seule directive robots après les navigations contrôlées ; aucune erreur d’hydratation dans ces contrôles.
- Les fichiers dist ont été servis par un petit serveur statique local de test qui sélectionne le fichier de chaque route et le vrai fichier 404. **Ce serveur ne simule pas Vercel**. Vite preview seul répond avec un fallback SPA sur certains chemins sans slash ; cela ne représente pas le routage public Vercel et ne doit pas être interprété comme une soft-404 de production.
- L’HTML 404 partagé reste français avant JavaScript ; les erreurs sous `/en/…` deviennent anglaises après hydratation. Cela concerne uniquement les URL inexistantes, pas les pages anglaises publiées.
- Aucun CSS, média ou contenu commercial modifié. La modification préalable de `src/content/mediaData.ts` et le fichier préalable `Audit.md` sont préservés. Aucun CSV modifié. Aucun formulaire envoyé.

Les requêtes tierces ont été bloquées dans les tests Chromium pour ne pas envoyer d’analytics ni charger les moteurs externes. Le bon choix des URLs d’iframe et leurs paramètres est vérifié ; le fonctionnement complet des moteurs 3D, de la caméra/AR et de leurs serveurs n’est pas certifié par ces tests.

Preuves locales complémentaires, non suivies par Git : `.audit/public/results.json`, les réponses HTML dans `.audit/public/`, `.audit/public/browser.json` pour les reproductions publiques, `.audit/local-full.json` pour la recette corrigée. Le script d’audit public est conservé dans scripts et peut être relancé après déploiement.

## Informations encore nécessaires

Pour chacun des huit cas Search Console : URL exacte, motif, dernière exploration et état actuel. Pour le doublon : canonical déclarée et canonical sélectionnée par Google, si Google fournit ce champ. Pour les 404 : URL et éventuel remplacement pertinent ; pour les redirections et l’autre page canonique : URL source et destination/canonical. Ces informations permettent de décider quelles exclusions doivent rester et lesquelles exigent une action supplémentaire. Le relevé de 10 URL connues ne permet pas de déduire la situation des 16 URL actuelles du sitemap.

Les corrections sont locales. Leur effet HTTP sur la nouvelle version Vercel reste à confirmer après un déploiement autorisé ; la production auditée reste inchangée. Des contrôles techniques réussis ne prouvent ni une nouvelle exploration par Google ni une indexation.

## Étapes exactes Search Console après déploiement

1. Relancer l’audit public et vérifier surtout `/en` : 200, HTML et rendu anglais, canonical unique `https://ardittiproduction.com/en`. `/en/` doit rester une redirection permanente vers `/en`, paramètres conservés. Contrôler sitemap, autres pages, noindex volontaires et sondes 404.
2. Dans la propriété `ardittiproduction.com`, ouvrir **Indexation → Pages**, puis chacun des cinq motifs présents. Exporter les tables d’URL détaillées ; conserver le relevé historique séparément.
3. Ouvrir **Inspection de l’URL** pour le doublon réel et relever les informations de la version indexée : dernière exploration, canonical déclarée par l’utilisateur, canonical sélectionnée par Google si disponible. Faire de même pour les autres URL concernées. Ces champs concernent la connaissance de Google et ne sont pas remplacés par un test en direct. [Référence des champs d’inspection](https://developers.google.com/webmaster-tools/v1/urlInspection.index/UrlInspectionResult).
4. Dans **Sitemaps**, soumettre ou soumettre à nouveau `https://ardittiproduction.com/sitemap.xml`. Vérifier qu’il contient 16 URL principales, dont `/en`, et aucune page Partnership ni 404.
5. Inspecter `/`, `/en`, `/en/pricing`, `/privacy`, `/en/privacy` et les URL réellement signalées. Cliquer **Tester l’URL publiée**, consulter HTML/capture après rendu, puis **Demander une indexation** pour les pages principales corrigées qui doivent être indexées. Pour une variante paramétrée, vérifier la canonical de l’accueil ; ne pas demander son indexation séparément.
6. Dans les rapports d’exclusion, utiliser **Valider la correction** uniquement pour un défaut réellement identifié et corrigé. Ne pas valider les noindex volontaires, les redirections attendues, les variantes à canonical correcte ou les 404 légitimes comme s’il s’agissait d’erreurs.
7. Attendre les nouvelles explorations puis vérifier dates, canonicals et statuts. [Une demande d’exploration ne garantit pas l’indexation](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).
