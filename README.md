# AR Production Website

Version autonome du site AR Production, reconstruite en React et Vite à partir de l’ancien site Webstudio.

## Développement local

```bash
npm install
npm run dev
```

Le serveur Vite indique l’URL locale à ouvrir. Les modifications React et CSS sont actualisées automatiquement.

## Vérifications et production

```bash
npm run lint
npm run build
npm run preview
```

La commande `npm run build` génère le site statique dans `dist/`. Chaque URL possède sa propre entrée HTML et ses métadonnées :

- `/`
- `/viewer`
- `/configurator`
- `/ar`
- `/pricing`
- `/partnership`
- `/demo`
- `/legal`
- `/privacy`

## Où modifier le site

- `src/content/siteContent.ts` : textes communs et accueil, en français et en anglais.
- `src/content/pageContent.ts` : contenus des solutions, tarifs, partenariat et démos.
- `src/pages/` : structure et comportement de chaque page.
- `src/components/` : navigation, pied de page, boutons et logos partenaires.
- `src/styles/` et les fichiers CSS associés aux composants/pages : apparence responsive.
- `public/assets/` : images, vidéos, polices et brochures PDF.

Le formulaire de contact est archivé dans Formspree (`mjkedoyv`) via le service AR Analytics, qui peut également envoyer une notification Discord. Les démonstrations 3D restent hébergées sur leurs URLs externes d’origine.
