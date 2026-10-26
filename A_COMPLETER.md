# À compléter avant la mise en ligne définitive

Chaque point correspond à un marqueur `[À CONFIRMER]` visible sur le site (ou à une donnée volontairement omise).

## Société et mentions légales (priorité)
- [ ] **Société exploitante actuelle** : dénomination, forme juridique, capital. L'ancienne SARL « Société Garage Sport Auto » (SIREN 790 311 062) est radiée depuis le 12/03/2021 selon Pappers, alors que le garage est actif : **ne pas réutiliser ce SIREN**.
- [ ] SIREN / SIRET, RCS, numéro de TVA intracommunautaire.
- [ ] Directeur de la publication.
- [ ] Adresse e-mail de contact (mentions légales).
- [ ] Durée de conservation des demandes de devis (politique de confidentialité).

## Contenu
- [ ] **Prénom du patron « David »** : cité dans un avis client, à confirmer avant de le mettre ailleurs que dans la citation.
- [ ] **Liste exacte des prestations** (entretien, mécanique, freinage, échappement, embrayage, carrosserie, peinture, diagnostic) et leurs descriptions courtes : `SERVICES` dans `src/data/site.ts`.
- [ ] **Professionnels et flottes** : conditions (facturation, délais, prise en charge des véhicules).
- [ ] **Point relais colis Mondial Relay** : service toujours actif ? Horaires de retrait ? (Si arrêté : supprimer la section `#colis` de `src/pages/index.astro`.)
- [ ] **Photos du client** : adresse e-mail ou numéro mobile pour recevoir les photos (le 09 83 98 32 98 est un fixe, il ne reçoit pas de SMS ; la version gratuite de Web3Forms ne gère pas les pièces jointes).

## Technique
- [ ] **Clé Web3Forms** (`web3formsKey` dans `src/data/site.ts`). Tant qu'elle manque, le formulaire affiche « L'envoi en ligne n'est pas encore activé. Appelez le garage… ».
- [ ] **Coordonnées GPS** (`geo`) : non renseignées dans le JSON-LD faute de source sûre. Ajouter `geo: { '@type': 'GeoCoordinates', latitude, longitude }` dans `src/layouts/Base.astro`.
- [ ] **Réseaux sociaux** (`sameAs`) : seule la fiche idGarages est connue. Ajouter la fiche Google / Facebook si elles existent.
- [ ] Note Google (4,3/5, 43 avis) à mettre à jour de temps en temps (`note`, `noteNum`, `nbAvis`).
- [ ] URL définitive à mettre dans `src/data/url.mjs` si un nom de domaine est acheté.
