import type { TciChapter } from '../tciTypes';

export const year1Case1: TciChapter = {
  id: "cas1",
  kind: "cas",
  level: 1,
  number: 8,
  title: "Cas CIPA",
  intro:
    "Créée depuis 2008 par des jeunes ivoiriens, la Compagnie Ivoirienne de Produits Alimentaires (CIPA) est une société de droit ivoirien disposant d’un code importateur-exportateur. Elle est spécialisée dans l’importation de conserves en provenance du Maroc. Ce mois, elle reçoit une commande expédiée par son fournisseur basé à Casablanca dont les informations vous sont fournies en annexe.",
  sections: [
      {
        paragraphs: [
          "Annexe :",
          "- Quantité 240 cartons de conserves",
          "- Prix d’achat unitaire : 36 USD",
          "- Poids brut unitaire : 15 Kg",
          "- Dimension d’un carton 400 mm x 300 mm x 300 mm",
          "- Marge commerciale 35% du prix d’achat",
          "- Chargement sur camion 78 USD",
          "- Pré acheminement : 270 USD",
          "- Transit export : 436 USD",
          "- Magasinage au départ : 115 USD",
          "- Douane export : 15 USD le carton",
          "- Manutention export : 75 USD",
          "- Acconage export : 69 USD",
          "- Fret de base : 35 USD l’UP, BAF = 4%, CAF= 2%",
          "- Assurance : 220 USD",
          "- Acconage import : 147.000 FCFA",
          "- Magasinage à l’arrivée : 35.000 FCFA",
          "- Post acheminement : 120.000 FCFA",
          "- Transit import : 235.000 FCFA",
          "- Taux des droits et taxes de douane : DD 10% ; RSTA 1% ; PCC 0 ,5% ; PUA 0,2% ; PCS 0,8% ; TVA 18% ; TSD 20.000 FCFA.",
          "NB : 1 USD = 600 FCFA.",
        ],
      },
      {
        heading: "TAF :",
        paragraphs: [
          "- Chiffrez les prix EXW, FAS, FOB, CFR, CIF, DPU, DAP et DDP de cette commande en précisant les villes.",
          "- Expliquez les notions de « pays d’origine » et « pays de provenance ».",
          "- Si la vente est effectuée en FOB, quel est le lieu de transfert des risques et des frais ? Qui est ce qui supporte le fret et l’assurance ainsi que les risques liés au transport principal ?",
        ],
      },
    ],
};
