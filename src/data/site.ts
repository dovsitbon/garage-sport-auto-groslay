// Données de l'entreprise : NAP, horaires, liens, avis. Modifier ici, tout le site suit
// (pages, pied de page, statut Ouvert/Fermé, JSON-LD, llms.txt).
import { URL_SITE } from './url.mjs';

export const AC = '[À CONFIRMER]';

export const SITE = {
  url: URL_SITE,
  nom: 'Garage Sport Auto',
  adresse: { rue: '24 rue de la Station', cp: '95410', ville: 'Groslay', region: "Val-d'Oise", pays: 'FR' },
  repere: 'près de la gare de Groslay',
  telAffiche: '09 83 98 32 98',
  telLien: '+33983983298',
  note: '4,3',
  noteNum: 4.3,
  nbAvis: 43,
  patron: 'David', // prénom cité dans un avis client : [À CONFIRMER]
  paiement: 'Carte bancaire',
  idgarages: 'https://www.idgarages.com/fr-fr/garage/groslay/GA6361_sport-auto',
  itineraire: 'https://www.google.com/maps/dir/?api=1&destination=24%20rue%20de%20la%20Station%2C%2095410%20Groslay',
  carte: 'https://www.google.com/maps?q=Garage%20Sport%20Auto%2C%2024%20rue%20de%20la%20Station%2C%2095410%20Groslay&output=embed',
  voisines: ['Montmorency', 'Saint-Brice-sous-Forêt', 'Sarcelles', 'Deuil-la-Barre', 'Montmagny', 'Domont', 'Ézanville'],
  // Clé d'accès Web3Forms (gratuite sur web3forms.com, liée à l'e-mail du garage). Tant qu'elle
  // n'est pas renseignée, le formulaire affiche un message invitant à appeler.
  web3formsKey: '[À CONFIRMER]',
};

// Horaires. jour : 0 = dimanche … 6 = samedi. Plusieurs plages par jour (coupure de midi).
// plages vide = fermé.
export const HORAIRES: { jour: number; nom: string; plages: [string, string][] }[] = [
  { jour: 1, nom: 'Lundi', plages: [['08:30', '12:00'], ['13:30', '17:00']] },
  { jour: 2, nom: 'Mardi', plages: [['08:30', '12:00'], ['13:30', '17:00']] },
  { jour: 3, nom: 'Mercredi', plages: [['08:30', '12:00'], ['13:30', '17:00']] },
  { jour: 4, nom: 'Jeudi', plages: [['08:30', '12:00'], ['13:30', '17:00']] },
  { jour: 5, nom: 'Vendredi', plages: [['08:30', '12:00'], ['13:30', '17:00']] },
  { jour: 6, nom: 'Samedi', plages: [] },
  { jour: 0, nom: 'Dimanche', plages: [] },
];

export const fmtHeure = (h: string) => h.replace(/^0/, '').replace(':', 'h');

// Les 4 extraits d'avis fournis (Avis Google). Ne pas en ajouter d'inventés.
export const AVIS = {
  echappement:
    "Honnêtes, rapides et efficaces. J'allais me faire escroquer par un autre garage et finalement ils m'ont confirmé que l'intervention ne nécessitait pas de changer tout mon pot d'échappement.",
  delai: 'Très bon garage, délai respecté. Très bon travail, je recommande.',
  david: "David le patron a été très sympa, de notre rencontre jusqu'au devis. Le travail fini impeccable.",
  confiance:
    "On cherche souvent un garagiste en qui on peut avoir confiance et avec lequel le travail sera bien fait. Ici c'est bien le cas.",
};

// Services (liste exacte [À CONFIRMER] avec le garage). code = code d'opération affiché sur la fiche.
export const SERVICES = [
  { code: 'ENT', nom: 'Entretien et révision', detail: 'Vidange, filtres, niveaux : la voiture repart prête pour la route.' },
  { code: 'MEC', nom: 'Mécanique', detail: 'Panne, bruit, voyant allumé : on cherche la cause avant de remplacer quoi que ce soit.' },
  { code: 'FRN', nom: 'Freinage', detail: 'Plaquettes, disques, liquide de frein.' },
  { code: 'ECH', nom: 'Échappement', detail: 'Ligne complète ou pièce seule : on ne change que la partie abîmée.' },
  { code: 'EMB', nom: 'Embrayage', detail: 'Patinage, pédale dure, bruit au débrayage.' },
  { code: 'CAR', nom: 'Carrosserie', detail: 'Chocs, rayures, éléments abîmés.' },
  { code: 'PEI', nom: 'Peinture', detail: 'Retouche ou élément complet.' },
  { code: 'DIA', nom: 'Diagnostic', detail: 'Lecture des défauts et contrôle, avant de vous faire un devis.' },
];
