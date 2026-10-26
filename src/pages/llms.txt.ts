import type { APIRoute } from 'astro';
import { SITE, SERVICES, HORAIRES, fmtHeure } from '../data/site';

const ouverts = HORAIRES.find((h) => h.plages.length)!;

export const GET: APIRoute = () => {
  const txt = `# ${SITE.nom} (Groslay)

> Garage indépendant toutes marques : réparation, mécanique, carrosserie, peinture. ${SITE.adresse.rue}, ${SITE.adresse.cp} ${SITE.adresse.ville} (${SITE.adresse.region}), ${SITE.repere}. Note Google ${SITE.note}/5 sur ${SITE.nbAvis} avis.

- Téléphone : ${SITE.telAffiche}
- Horaires : lundi au vendredi ${ouverts.plages.map((p) => `${fmtHeure(p[0])}–${fmtHeure(p[1])}`).join(' et ')} ; samedi et dimanche fermés
- Rendez-vous recommandés ; paiement par carte bancaire
- Principe : on ne change que ce qui doit l'être (diagnostic avant devis)
- Prestations : ${SERVICES.map((s) => s.nom.toLowerCase()).join(', ')}
- Travaille aussi avec des flottes d'entreprise
- Communes voisines : ${SITE.voisines.join(', ')}

## Pages
- [Accueil](${SITE.url}/) : services, principe, demande de devis, avis, horaires, accès
- [Demande de devis](${SITE.url}/#devis) : fiche d'intervention en ligne
- [Fiche idGarages](${SITE.idgarages})
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
