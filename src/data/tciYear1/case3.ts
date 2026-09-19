import type { TciChapter } from '../tciTypes';

export const year1Case3: TciChapter = {
  id: "cas3",
  kind: "cas",
  level: 1,
  number: 10,
  title: "Cas Gloire Informatique",
  intro:
    "Esther importe du matériel en provenance du port de Ningbo Zhoushan, en Chine, destiné à l’équipement de sa structure dénommée « GLOIRE INFORMATIQUE » située à Yopougon Nouveau Bureau. La procédure douanière est confiée à SDV-SAGA son transitaire qui fournit les informations suivantes en annexes 1 et 2:",
  sections: [
      {
        paragraphs: ["Annexe 1 : Facture commerciale"],
      },
      {
        table: {
          headers: [
            "Matériel",
            "Prix d’achat unitaire",
            "Quantité",
            "Poids unitaire",
            "Dimensions unitaires en mm",
          ],
          rows: [
            ["Ordinateurs", "200 €", "30", "20 Kg", "400 x 250 x 180"],
            ["Imprimantes", "100 €", "05", "11 Kg", "600 x 500 x 200"],
            ["Bureaux", "40 €", "20", "33 Kg", "800 x 650 x 400"],
            ["Photocopieuses", "700 €", "02", "80 Kg", "900 x 500 x 600"],
            ["Climatiseurs", "200 €", "15", "30 Kg", "500 x 300 x 200"],
            ["Télévisions", "165 €", "02", "25 Kg", "700 x 600 x 500"],
            ["Réfrigérateurs", "240 €", "02", "120 Kg", "2800 x 700 x 400"],
          ],
        },
      },
      {
        paragraphs: [
          "Annexe 2 : Operations administratives, portuaires et douanières",
          "- Taux de marge 10% du prix d’achat",
          "- Location et empotage du conteneur : 95 €",
          "- Chargement du camion : 75 €",
          "- Pré acheminement : 60 €",
          "- Transit export : 155 €",
          "- Douane export : 175 €",
          "- Magasinage export : 80 €",
          "- Acconage export : 20 € la tonne",
          "- Fret : 30 € l’UP, BAF 2 % ; CAF 3% ; Ristourne 3%",
          "- Valeur d’assurance = 20.000.000 F",
          "- Taux d’assurance = 1 %",
          "- Acconage import: 65.000 FCFA",
          "- Entreposage import: 70.000 FCFA",
          "- Post acheminement : 25.000 FCFA",
          "- Transit import: 100.000 FCFA",
          "- Douane import: DD 10% ; RSTA 1% ; TVA 18% ; PCS=0,8% ; PUA=0,2%, PCC= 0,5% ; TSD 20.000FCFA",
          "- Déchargement du camion : 5.500F/ la Tonne",
          "- Les produits ont été contrôlés par la DARRV et la BIVAC par la route A",
          "- Frais bancaires : 977.000 FCFA",
          "NB : 1€ = 655 FCFA",
        ],
      },
      {
        heading: "Travail à faire",
        paragraphs: [
          "- Chiffrez les prix EXW, FAS, FOB, CFR, CIF, DPU, DAP et DDP de cette commande en précisant les villes",
          "- Déterminez le cout de revient des marchandises importées pour GLOIRE Informatique.",
          "- Quelle est l’importance du commerce international pour une nation ?",
          "- Quelle est l’importance des incoterms dans le commerce international ?",
          "- GLOIRE informatique confie toute l’opération d’importation de bout en bout à SDV-SAGA. Quelle est la qualité juridique de SDV-SAGA ? Justifiez votre réponse.",
        ],
      },
    ],
};
