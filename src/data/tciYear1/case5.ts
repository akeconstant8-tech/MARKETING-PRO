import type { TciChapter } from '../tciTypes';

export const year1Case5: TciChapter = {
  id: "cas5",
  kind: "cas",
  level: 1,
  number: 12,
  title: "Cas Mardochée et Compagnie",
  intro:
    "Avec un capital de 20 000 000 F CFA, les établissements MARDOCHEE basé à Daoukro sont spécialisés dans la distribution de produit alimentaire dans la région d’IFFOU.",
  sections: [
      {
        paragraphs: [
          "En vue d’honorer les nombreuses commandes de leurs clients, ils passent une grande commande de lait avec un grand fournisseur hollandais basé à Amsterdam.",
        ],
      },
      {
        heading: "PREMIERE PARTIE",
        paragraphs: [
          "Les informations relatives à la commande sont consignées dans le tableau suivant :",
        ],
      },
      {
        table: {
          headers: ["DESIGNATION", "QUANTITE", "PU", "MONTANT TOTAL"],
          rows: [
            ["Bonnet rouge 200g", "2000 cartons", "15 €", "30 000 €"],
            ["Bonnet rouge 400g", "1000 cartons", "15 €", "15 000 €"],
            ["Montant total", "", "", "45 000 €"],
          ],
        },
      },
      {
        paragraphs: [
          "NB : le fournisseur applique 35% du prix départ usine comme marge commerciale.",
          "Frais administratifs et logistiques",
          "- Transport d’approche = 78 €",
          "- Transit import = 180 000 F CFA",
          "- Mise à FOB = 9 € la tonne",
          "- Douane export = 295 €",
          "- Taux d’assurance = 0,5%",
          "- Valeur assurée = CIF + 10%CIF",
          "- Fret de base = 35 USD l’UP ; BAF = 3% ; CAF = 2%",
          "- Acconage import = 95 000 FCFA",
          "- Location de conteneur = 80 €",
          "- Post acheminement = 120 000 F CFA",
          "- Droit et taxes de douane : DD = 10%, RSTA = 1% ; TVA = 18% ; PCS = 0,8% ; PUA=0,2%, PCC = 0,5% ; TSD = 20.000 FCFA.",
          "- Transit export = 95 €",
          "- Le poids brut d’un carton = 5 kg",
          "- Le volume total de la cargaison = 26,5 m3",
          "NB : -1€ = 656 F CFA/ 1 USD= 400 F CFA",
          "Les produits sont contrôlés par la DARRV et par la SGS par la route A.",
        ],
      },
      {
        heading: "TRAVAIL A FAIRE",
        paragraphs: [
          "- Vous être chargé d’élaborer la cotation complète en mettant en relief les prix : EXW, FAS, FOB ; CFR, CIF, DPU, DAP et DDP.",
          "- Déterminez le prix d’achat total et la marge commerciale de cette commande s’ils veulent appliquer un taux de 30%CR.",
          "- sous quel régime doit être placée cette marchandise qui a été inspectée par la SGS et qui sera vendue immédiatement. Argumenter votre réponse",
          "- 4-1- Identifiez les avantages et inconvénients des contrôles des produits par la SGS 4-2-Quel document les compagnies MARDOCHEE ont-ils levé pour importer le lait ? 4-3-Où l’ont-ils obtenu ?",
          "- identifiez les usagers économiques qui ont contribué à la réalisation de cette importation.",
          "- Citez les critères de choix d’un transitaire.",
          "- Pourquoi le transitaire commissionnaire a-t-il une obligation de résultat alors que le transitaire mandataire a une obligation de moyen ?",
        ],
      },
    ],
};
