# Garage Sport Auto (Groslay) : site vitrine

Astro 7 + Tailwind CSS 4, site statique. Polices auto-hébergées (Chakra Petch, Red Hat Text).

## Lancer en local
```
npm install
npm run dev        # http://localhost:4416
npm run build      # génère dist/
npm run preview    # sert dist/ sur http://localhost:4416
npm run captures   # captures Playwright 390 px et 1440 px dans captures/ (après build)
npm run og         # régénère public/og.png et public/apple-touch-icon.png
```

## Déployer
Projet Vercel importé depuis le dépôt Git : chaque push sur `main` redéploie (Astro statique détecté automatiquement).
Après le déploiement définitif, changer l'URL à un seul endroit : `src/data/url.mjs` (sitemap, canonical, JSON-LD, robots.txt et llms.txt suivent).

## Où modifier
- **Nom, adresse, téléphone, horaires, avis, liste des services, lien idGarages, clé Web3Forms** : `src/data/site.ts`. Le statut Ouvert / Pause / Fermé, le tableau des horaires, le pied de page et le JSON-LD suivent.
- **Formulaire de devis** : créer une clé gratuite sur web3forms.com avec l'e-mail du garage et la coller dans `web3formsKey` (`src/data/site.ts`).
- **Textes de l'accueil** (principe, pros, point relais, FAQ) : `src/pages/index.astro`.
- **Vue éclatée de l'échappement** (pièces, états Conservé / À remplacer / À surveiller) : tableau `PIECES` en haut de `src/components/VueEclatee.astro`.
- **Photos** : déposer les fichiers dans `src/assets/` puis remplacer les blocs `photo-vide` de `src/pages/index.astro` par `<Image src={...} alt="..." />` (`import { Image } from 'astro:assets'`) : conversion AVIF/WebP automatique, `loading="lazy"` par défaut. Liste des clichés : `PHOTOS_A_PRENDRE.md`.
- **Pages légales** : `src/pages/mentions-legales.astro`, `src/pages/confidentialite.astro`.
- **Couleurs / polices** : `src/styles/global.css` (bloc `@theme`).
