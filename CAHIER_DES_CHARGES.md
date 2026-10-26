# Prompt Claude Code : site « Garage Sport Auto » (mécanique et carrosserie, Groslay)

Tu es un développeur front-end et directeur artistique senior. Crée le site vitrine complet du **Garage Sport Auto**, garage indépendant toutes marques à Groslay. Objectif business : générer des **demandes de devis** et des rendez-vous, en jouant sur ce que les clients apprécient le plus : **l'honnêteté** (on ne change que ce qui doit l'être).

## Fiche d'identité (informations vérifiées)
- **Nom** : Garage Sport Auto
- **Type** : réparation, mécanique, carrosserie, peinture, **toutes marques** (fiche mairie de Groslay) ; travaille aussi avec des **flottes d'entreprise** (selon un avis) ; **point relais colis** (Mondial Relay, selon des avis)
- **Adresse** : 24 rue de la Station, 95410 Groslay
- **Téléphone** : 09 83 98 32 98
- **Horaires** : lundi au vendredi 08h30–12h00 et 13h30–17h00 · samedi et dimanche fermés
- **Note Google** : 4,3/5 sur 43 avis
- **Patron** : **David** (cité par un client) `[À CONFIRMER]`
- **Présence en ligne actuelle** : uniquement une fiche idGarages (idgarages.com/fr-fr/garage/groslay/GA6361_sport-auto) → à garder en lien secondaire
- ⚠️ **Société** : l'ancienne SARL « Société Garage Sport Auto » (SIREN 790 311 062) est **radiée depuis le 12/03/2021** selon Pappers, alors que le garage est toujours actif. La société exploitante actuelle (nom, SIREN) est donc `[À CONFIRMER]` : ne mets **aucun** SIREN dans les mentions légales sans confirmation.
- **Paiements** : CB
- **Rendez-vous** : recommandés
- **Schema.org** : `AutoRepair`

## Ce que disent les clients
Honnêtes, rapides, efficaces, délais respectés, travail impeccable, patron sympathique « de notre rencontre jusqu'au devis », prennent toutes sortes de véhicules. Un client raconte qu'un autre garage voulait lui changer tout l'échappement et que Sport Auto lui a confirmé que ce n'était pas nécessaire. Point faible ancien : la gestion des colis du point relais (avis d'il y a 5–7 ans).

Extraits d'avis utilisables (« Avis Google ») :
- « Honnêtes, rapides et efficaces. J'allais me faire escroquer par un autre garage et finalement ils m'ont confirmé que l'intervention ne nécessitait pas de changer tout mon pot d'échappement. »
- « Très bon garage, délai respecté. Très bon travail, je recommande. »
- « David le patron a été très sympa, de notre rencontre jusqu'au devis. Le travail fini impeccable. »
- « On cherche souvent un garagiste en qui on peut avoir confiance et avec lequel le travail sera bien fait. Ici c'est bien le cas. »

## Direction artistique (angle : « le devis transparent »)
- Inspiration : **fiche d'intervention d'atelier, vue éclatée de pièces façon plan technique, bon de commande carbone**. Sérieux, net, rassurant. Le mot-clé : **transparence**.
- Palette : anthracite, blanc, **orange atelier** en accent, bleu plan technique très discret pour les dessins.
- Typo : une technique à caractère (ex. Chakra Petch) pour les titres + IBM Plex Sans pour le texte.
- Idée signature : une section **« On ne change que ce qui doit l'être »** illustrée par un **dessin technique SVG** (pot d'échappement en vue éclatée, original) et un formulaire de devis présenté comme une **fiche d'intervention**.

## Structure
1. **Accueil** : « Votre garage de quartier à Groslay : mécanique, carrosserie, peinture, toutes marques », note 4,3/5, boutons « Demander un devis » + « Appeler », statut ouvert/fermé.
2. **Services** : entretien et révision, mécanique, freinage, échappement, embrayage, carrosserie, peinture, diagnostic `[À CONFIRMER liste exacte]`.
3. **On ne change que ce qui doit l'être** : la promesse d'honnêteté + l'histoire du pot d'échappement (avis).
4. **Professionnels & flottes** : entretien de véhicules d'entreprise `[À CONFIRMER]`.
5. **Demande de devis** : formulaire (immatriculation, marque, modèle, kilométrage, problème constaté, téléphone, créneau souhaité, consentement RGPD).
6. **Point relais colis** : horaires de retrait `[À CONFIRMER si toujours actif]`.
7. **Avis** : 4 extraits + 4,3/5.
8. **Infos pratiques** : horaires (fermé le week-end), adresse rue de la Station (près de la gare), carte.

---

## Règles communes (à respecter strictement)

### 1. Avant de coder
- Liste les skills et plugins disponibles dans ta session et **utilise toutes celles qui s'appliquent** : design frontend (ex. `frontend-design`), tests navigateur / captures (Playwright, `webapp-testing`), images, déploiement, etc. Dis-moi lesquelles tu utilises.
- Propose-moi en 10 lignes max la direction artistique (palette en hex, 2 polices, ambiance, 1 idée de mise en page signature) **puis enchaîne sans attendre ma validation**.

### 2. Stack technique
- **Astro + Tailwind CSS**, site statique, zéro framework JS lourd côté client (îlots JS seulement si nécessaire).
- Polices auto-hébergées (`@fontsource`), pas d'appel Google Fonts.
- Images en AVIF/WebP via `astro:assets`, `loading="lazy"` sauf la première image.
- Déploiement prévu sur **Vercel** (ajoute la config si besoin). Si un accès Vercel est connecté dans ta session, fais un déploiement **preview** et donne-moi l'URL.
- Objectif Lighthouse : ≥ 95 sur les 4 scores, mobile.

### 3. Design qui NE FAIT PAS « site généré par IA » (priorité n°1)
Interdit :
- dégradés violet/bleu, « glassmorphism », blobs flous en fond, néons, ombres molles partout ;
- la grille « 3 cartes avec une icône + titre + 2 lignes » ;
- les emojis comme icônes, les icônes génériques type Heroicons/Lucide posées partout ;
- Inter/Poppins/Montserrat seules, tout centré, tout arrondi en `rounded-2xl` ;
- les phrases creuses : « Bienvenue chez… », « Découvrez… », « Plongez dans… », « Votre partenaire de confiance », « Une expérience unique », « Notre passion, votre satisfaction » ;
- les fausses stats (« +500 clients satisfaits »), les faux témoignages, les photos de banque d'images clichés (poignée de main, personnes en costume qui sourient).

À faire :
- une **identité propre au lieu** (voir la direction artistique plus haut), avec un ou deux partis pris forts : typographie éditoriale, mise en page asymétrique, détails réels (ardoise, ticket, plaque, carte routière, numéro de rue en très grand…) ;
- des textes **courts, concrets, à la voix du commerçant**, avec de vrais détails (horaires, plats, adresses, noms de rues, parkings) ;
- du rythme : alterner sections pleines et aérées, une grande typo, des espaces généreux ;
- des micro-interactions sobres (hover, apparition légère au scroll), rien de plus ;
- `prefers-reduced-motion` respecté.

### 4. Contenu : zéro invention
- Utilise **uniquement** les informations fournies dans ce prompt.
- Tout ce qui manque (prix, plats exacts, photos, nom du gérant, SIRET…) = un marqueur visible **`[À CONFIRMER]`** et une entrée dans le fichier `A_COMPLETER.md` à la racine.
- Avis clients : n'utilise **que** les extraits fournis, attribués « Avis Google ». Jamais d'avis inventé, jamais de nom inventé.

### 5. Photos
- **Ne télécharge pas et n'intègre pas** de photos Google Maps / Facebook / Instagram (droits d'auteur des clients et du commerce).
- Mets des emplacements propres (bloc couleur + légende du cliché attendu, pas de gris « placeholder ») et crée `PHOTOS_A_PRENDRE.md` : la liste précise des photos à faire (cadrage, lumière, format), pour que je les prenne moi-même chez le commerçant.

### 6. SEO local (indispensable)
- `<html lang="fr">`, title + meta description uniques, Open Graph, favicon.
- **JSON-LD schema.org** adapté (type indiqué plus haut) avec nom, adresse, téléphone, horaires `openingHoursSpecification`, géolocalisation, `sameAs` (réseaux sociaux).
- Nom / adresse / téléphone identiques partout (NAP), pied de page compris.
- Carte : iframe Google Maps chargée **au clic** (façade légère) pour ne pas plomber la perf.
- `sitemap.xml`, `robots.txt`, URLs propres, H1 unique, balises `alt` descriptives.
- Mots-clés locaux naturels : la ville + les communes voisines (Groslay, Montmorency, Saint-Brice-sous-Forêt, Sarcelles, Deuil-la-Barre, Montmagny, Domont, Ézanville).

### 7. Conversion et mobile
- Mobile d'abord. **Bouton d'appel fixe en bas d'écran sur mobile** (`tel:`), + bouton itinéraire (lien Google Maps).
- Horaires lisibles, avec indication « Ouvert maintenant / Fermé » calculée en JS léger (fuseau Europe/Paris).
- Accessibilité AA : contrastes, focus visibles, navigation clavier, tailles de cibles ≥ 44 px.

### 8. Légal
- Page **Mentions légales** (éditeur, hébergeur Vercel, SIRET `[À CONFIRMER]`) et **Politique de confidentialité**.
- Pas de traceur, donc pas de bandeau cookies. Si un formulaire existe : consentement RGPD + envoi via un service sans backend (ex. Formspree / Web3Forms, clé `[À CONFIRMER]`).

### 9. Livraison
1. `npm run build` sans erreur ni warning.
2. Captures Playwright **mobile (390 px) et desktop (1440 px)** de chaque page ; regarde-les toi-même et corrige ce qui fait « template » ou « IA » avant de me rendre la main.
3. Un `README.md` court : lancer en local, déployer, où changer textes / photos / horaires.
4. Les fichiers `A_COMPLETER.md` et `PHOTOS_A_PRENDRE.md`.
5. Un résumé final de 10 lignes max : ce qui est fait, ce qui manque.
