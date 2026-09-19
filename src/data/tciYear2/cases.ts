import type { TciChapter } from '../tciTypes';

export const year2Cases: TciChapter[] = [
  // ─────────────────────────────────────────── Cas Israël et Fils (p. 69)
  {
    id: 'y2cas1',
    kind: 'cas',
    level: 2,
    number: 20,
    title: 'Cas Israël et Fils',
    intro:
      "Après leurs brillantes études en commerce international, trois jeunes ivoiriens Daniel, Jean et Paul ont décidé de se lancer dans le négoce. Après plusieurs navigations sur l'Internet, ils décrochent chacun une commande auprès d'un industriel Hollandais. Le résumé de leur commande est consigné dans le tableau ci-dessous.",
    sections: [
      {
        table: {
          headers: ['Exportateur', 'Produit', 'Quantité', 'Volume', "Prix d'achat en kg"],
          rows: [
            ['DANIEL', 'Noix de cajou', '4000 kg', '8000 dm3', '200 F CFA'],
            ['JEAN', 'café', '6 tonnes', '10 m3', '350 F CFA'],
            ['PAUL', 'Cacao', '8000 kg', '14 000 dm3', '450 F CFA'],
          ],
        },
      },
      {
        paragraphs: ["NB : pour déterminer les prix de vente, chaque exportateur a appliqué :"],
        list: ['DANIEL: Coefficient multiplicateur = 1,5', 'JEAN : 35% de taux de marge', 'PAUL : 30% de taux de marque', "Contrat de vente : CIF Abidjan"],
      },
      {
        heading: 'Première partie',
        paragraphs: [
          "Dans la réalisation de leurs premières opérations, ils sollicitent les services d'ELOHIM TRANSIT pour les opérations de bout en bout.",
          'TRAVAIL A FAIRE',
        ],
        list: [
          'déterminer les prix EXW de chaque exportateur',
          "quel est le statut d'ELOHIM TRANSIT vis-à-vis des exportateurs de la douane ? Quels peuvent être les critères qui ont milité en sa faveur ?",
          "Déterminer le fret net de chaque exportateur sachant que le fret de base = 25 USD L'UP, avec BAF = 2,5%, CAF = - 2%",
          "Ces trois produits peuvent-ils être empotés dans le même TC ? Motivez votre réponse. Proposez en le type d'expédition convenable",
          "Décrivez la procédure de dédouanement des marchandises à l'export.",
        ],
      },
      {
        heading: 'Deuxième partie',
        paragraphs: [
          "Les informations logistiques et administratives relatives à l'expédition de DANIEL sont les suivantes :",
          '-transport jusqu\'au bout = 20 000 F CFA',
          '-DUS (douane export) = 110 000 F CFA',
          '-transit export = 250 000 F CFA',
          '-acconage export = 95 000 F CFA',
          '-fret net (voir 1ere partie)',
          "-taux d'assurance = 0,5%",
          '-valeur assurée = CIF + 10% CIF',
          '-acconage import = 100 USD',
          '-post acheminement = 120 USD',
          '-taux cumulé des droits et taxes de douane supportés en Hollande = 20%',
          'TRAVAIL A FAIRE',
        ],
        list: [
          "Elaborer la cotation complète de l'expédition de DANIEL (met en relief les différents incoterms)",
          'identifiez les charges essentielles (frais) supportés et document fournis par DANIEL en cas de livraison DDP',
          "pour le paiement de sa créance, DANIEL a opté pour la lettre de crédit stand-by : 3-1) qu'est-ce que la lettre de crédit stand-by ? 3-2) A quel moment est-elle utilisée ? 3-3) Comparez la lettre de crédit stand-by au CREDOC irrévocable et confirmé",
        ],
      },
      {
        heading: 'Questions de cours',
        list: [
          "définissez les termes suivants : Police tiers-chargeur ; Appel d'offre ; Adjudicateur",
          'Comparez la facture pro forma à la facture définitive',
          'Quels sont les risques qui ne sont jamais couverts quelle que la garantie souscrite ?',
          "Citez trois dates butoirs dans le mécanisme du Credoc irrévocable et conformé.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────── Cas Ets Yeshua (p. 70)
  {
    id: 'y2cas2',
    kind: 'cas',
    level: 2,
    number: 21,
    title: 'Cas Ets Yeshua',
    intro:
      "Installés dans le département de Nassian, les Ets YESHUA ont pour objet la distribution de produits alimentaires. Pour faire face à la forte demande de riz, ils passent une commande chez le fournisseur thaïlandais à Bangkok.",
    sections: [
      {
        heading: 'Travail à faire',
        list: [
          'Calculez les prix EXW, FCFA les locaux du vendeur, CPT, CIP, DPU, DAP, DDP et le cout de revient.',
          "Quels documents ont fourni les Ets YESHUA pour l'obtention du code importateur/exportateur",
          "Précisez le régime auquel appartient le riz selon la réglementation du commerce extérieur en Côte d'Ivoire et le document que doivent lever les Ets YESHUA pour son importation.",
          "Précisez le type d'emballage et de conteneur appropriés à l'expédition du riz.",
        ],
      },
      {
        heading: 'Annexe : opérations logistiques et administratives',
        paragraphs: [
          'Quantité = 800 sacs de riz',
          'Poids brut unitaire = 15 kg',
          "Dimensions d'un sac = 400mm X 300mm X 200mm",
          "Prix EXW d'un sac = 20 USD",
          'Marge commerciale = 30 % du prix de revient',
          'Location du conteneur = 215 USD',
          'Préacheminement = 130 USD',
          'Douane export = 390 USD',
          'Transit export = 725 USD',
          'Acconage export = 140 USD',
          "Fret de Base = 24 USD L'UP, BAF = 3% et CAF = -4%",
          "Taux d'assurance = 0,5%",
          "Valeur d'assurance = CIF majoré de 10% CIF",
          'Acconage import = 150 000 FCFA',
          'Post acheminement = 280 000 FCFA',
          'Transit import = 670 000 FCFA',
          'Taux des droits et taxes de douane = DD =10% ; RSTA =1% ; TVA = 18% ; PCS = 0,8% ; PUA= 0,2% ; PCC = 0,5% ; TSD = 20 000 FCFA. Le riz a été contrôlé par la DARRV et par la SGS par la route A.',
          'NB : 1 USD = 500 FCFA',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────── Cas Yegossoum (p. 71) — Session 2010
  {
    id: 'y2cas3',
    kind: 'cas',
    level: 2,
    number: 22,
    title: 'Cas Yegossoum',
    intro:
      "Créée par de planteurs de Boudouyo, la coopérative YEGOSOUM a un capital de 30 000 000 FCFA. Depuis 2007, elle s'est spécialisée dans l'exportation des noix de cajou vers l'inde. Elle vient de décrocher une grande commande d'un client indien basé à New Delhi. Pour la couverture de cette commande, la coopérative YEGOSSOUM a opté pour la garantie FAP Sauf.",
    sections: [
      {
        paragraphs: ['SESSION 2010 — BTS GESTION COMMERCIALE — Durée de l\'épreuve : 3 h — Coefficient : 3', 'TECHNIQUE DU COMMERCE INTERNATIONAL'],
      },
      {
        heading: 'Dossier 1',
        paragraphs: [
          "Stagiaire au service export de la coopérative YEGOSSOUM, vous êtes chargé(e) d'élaborer la cotation export de cette commande en fonction des informations ci-dessous.",
          'Masse brute totale = 15 tonnes de noix de cajou',
          'Prix de vente bord champs = 285 FCFA',
          'Volume total = 22 000 dm3',
          'Préacheminement = 100 000 FCFA',
          'Frais de route = 14000 FCFA',
          'Transit export = 170 000 FCFA',
          'Douane export = 75 FCFA le kg',
          'Magasinage au départ = 80 000 FCFA',
          'Mise à Sous-Palan départ = 50 000 FCFA',
          'Mise à bord au départ = 45 000 FCFA',
          "Fret de base = 40 USD L'UP ; BAF= 2% ; CAF= 3%",
          'Assurance = 0,5 % CIF X 110%',
          "Evacuation sur quai à l'arrivée = 50 USD",
          'Acconage export = 85 USD',
          'Post- acheminement = 90 USD',
          'Transit import = 130USD',
          'Douane import = 25 % de CIF',
          'NB : 1 USD = 500 FCFA',
          'TRAVAIL A FAIRE',
        ],
        list: [
          'Calculez le fret total selon le liner term SP/B. NB : Prenez ce fret pour calculer CFR.',
          'Chiffrez les prix EXW, FAS, CFR, CIF, DAP et DDP.',
          "Pourquoi les droits et taxes de douane sont-ils allégés à l'exportation ?",
          "Citez trois raisons positives des exportations pour la Cote d'Ivoire.",
          'Citez les documents à fournir par YEGOSSOUM en cas de vente CIF New Delhi.',
          "Pourquoi l'Etat a-t-il confié la déclaration en détail des marchandises aux transitaires ?",
          "Qu'est-ce que la garantie FAP Sauf ?",
        ],
      },
      {
        heading: 'Dossier 2',
        paragraphs: ['Au cours de la négociation commerciale, la lettre de crédit Stand-by a été retenue pour paiement.', 'TRAVAIL A FAIRE'],
        list: [
          'Définissez la lettre de crédit Stand-by',
          'Quels sont les avantages de la lettre de crédit Stand-by pour la coopérative YEGOSSOUM ?',
          'Comparez c la lettre de crédit Stand-by au Crédit Documentaire irrévocable et confirmé',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────── Cas La Cave de Yop (p. 72) — Session 2020
  {
    id: 'y2cas4',
    kind: 'cas',
    level: 2,
    number: 23,
    title: 'Cas La Cave de Yop',
    intro:
      "Sise à Yopougon la plus grande commune d'Abidjan. LA CAVE DE YOP importe régulièrement des vins de l'Europe. Dans sa politique de diversification des fournisseurs, elle prend attache avec DJOMO, grand fournisseur de vins Sud-africains basé à Durban. Après analyse de la facture pro-forma du fournisseur DJOMO, elle passe une commande de 580 cartons de vins en CFR Abidjan. Elle confie les opérations logistiques et administratives de bout en bout à BURO Transit.",
    sections: [
      {
        paragraphs: ["SESSION 2020 — BTS GESTION COMMERCIALE — Durée de l'épreuve : 3 h — Coefficient : 3"],
      },
      {
        heading: 'Première partie',
        paragraphs: [
          "Stagiaire aux Ets REBECCA, vous êtes chargé d'établir la cotation de la première importation de cafetières depuis Hambourg en vous référant aux informations en annexes.",
          'TRAVAIL A FAIRE',
        ],
        list: [
          'Calculez les prix EXW, FAS, FOB, CFR, CIF, DAP, DPU et DDP.',
          "identifiez les obligations de la CAVE DE YOP et du fournisseur DJOMO en termes de risques, de couts et de documents en cas de vente CFR Abidjan.",
          'quel est le statut de BURO Transit vis-à-vis de la CAVE DE YOP ?',
          'quelle police d\'assurance a été souscrite pour la couverture de cette commande ? Justifiez votre réponse.',
        ],
      },
      {
        heading: 'Annexe 1',
        paragraphs: [
          'Quantité = 580 carton de vins',
          "Poids brut d'un carton = 20 kg",
          "Volume d'un carton = 0,0372 m3",
          "Prix EXW d'un carton = 750 rands",
          '-Frais de chargement sur camion = 5300 rands',
          "-Transport d'approche = 3750 rands",
          '-Transit export = 15250 rands',
          '-Douane export = 20 450 rands',
          '-Acconage export = 2800 rands',
          "- Fret de maritime = 40 USD L'UP ; BAF= 4% ; CAF= -3%",
          '-Valeur assurance = CIF +10% CIF',
          "-Taux d'assurance = 0,4%",
          '-Acconage import = 152 000 FCFA',
          '-Post- acheminement = 150 000 FCFA',
          '-Transit import = 480 000 FCFA',
          '-Taux des droits et taxes de douane : DD = 15%, RSTA = 1%, TVA = 18%, PCaS = 0,8%, PUA : 0,2%, PCC = 0,5% ; TSD = 20 000 F CFA.',
          'NB : 1 USD = 500 FCFA — 1 RAND = 33 FCFA',
        ],
      },
      {
        heading: 'Deuxième partie',
        paragraphs: ["Au cours de l'acheminement, un incident endommage complètement 15 cartons.", 'TRAVAIL A FAIRE'],
        list: [
          "Quel montant la CAVE DE YOP va-t-elle payer au fournisseur DJOMO sachant que le contrat est libellé CFR Abidjan ? Argumentez votre réponse.",
          "Citez les obligations de l'assuré et de l'assureur dans un contrat d'assurance.",
          "Calculez l'indemnité totale sachant que les honoraires du commissaire d'avarie et les frais annexes sont respectivement de 460 000 FCFA et de 220 000 FCFA et qu'une franchise relative ou atteinte de 570 000 FCFA a été retenue.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────── Cas Victoire SA (p. 73)
  {
    id: 'y2cas5',
    kind: 'cas',
    level: 2,
    number: 24,
    title: 'Cas Victoire SA',
    intro:
      "Sise dans le département de Bangolo, avec un capital de 10 000 000 F CFA, VICTOIRE S.A a pour fonction la distribution de produits alimentaires. Il décide d'approvisionner son magasin en farine de blé. Ainsi, il demande une facture pro-forma à un fournisseur français basé au Havre dont les détails sont en annexe. Ayant eu une bonne formation en commerce international, le Directeur commercial décide de confier seulement les opérations de dédouanement import à son transitaire.",
    sections: [
      {
        heading: 'Charges administratives et logistiques',
        paragraphs: [
          'Quantité = 3 tonnes de farine de blé',
          'Prix du kg = 1,2 €',
          'Nombre de sac =120',
          "Prix d'un sac = 3 €",
          "Poids vide d'un sac = 2 kg",
          "Dimension d'un sac = 600 mm x 400 mm x 300 mm",
          'Marge commerciale = 40% du prix EXW',
          'Location de TC = 30 €',
          "Transport d'approche = 30 €",
          'Déchargement au port = 10 €',
          'Transit export =86 €',
          'Douane export =120 €',
          "Fret maritime = 45 USD L'UP, BAF = 3%; CAF = 2%",
          "Taux d'assurance =0,4%,",
          'Valeur assurée = CIF majoré de 10%',
          'Acconage import = 60 000 F CFA',
          'Post acheminement = 77 000 F CFA',
          'Transit import =100 000 FCFA',
          'Taux des droits et taxes de douane : DD =10% ; RSTA =1% ; TVA =18% ; PCS =0,8% ; PUA : 0,2% ; PCC =0,5% ; TSD =20 000 F CFA',
          'NB : 1USD = 450 F CFA — 1€ = 656 F CFA — Monnaie de facturation le F CFA',
          'TRAVAIL A FAIRE',
        ],
        list: [
          'Déterminez les prix EXW, FAS, FOB, CFR, CIF, DPU, DAP et DDP de la commande en précisant les villes.',
          "Selon le règlement du commerce extérieur en Côte d'Ivoire, quel est le statut de la farine de blé ? Quel document doit lever VICTOIRE S.A pour l'importation de sa marchandise ? Argumentez votre réponse.",
          "Quel est le statut de son transitaire ? Identifiez ses obligations vis-à-vis de son client.",
          "Le fournisseur français refuse de livrer en DDP Bangolo la commande de VICTOIRE S.A. Pourquoi ? Quelles",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────── Cas Gloire (p. 74)
  {
    id: 'y2cas6',
    kind: 'cas',
    level: 2,
    number: 25,
    title: 'Cas Gloire',
    intro:
      "La coopérative GLOIRE de TIEME est spécialisée dans le négoce international. Après une bonne campagne de noix de cajou, elle importe une grande quantité de lait à la demande de ses membres, avec son fournisseur Lefèvre basé à ROUEN en France.",
    sections: [
      {
        heading: 'Première partie',
        paragraphs: [
          "Le responsable du service import-export vous demande de remettre à jour le tarif import en tenant compte des informations fournies en annexe en tant que stagiaire en fin de votre de stage comme thème de votre rapport de stage.",
        ],
      },
      {
        heading: 'Annexe',
        table: {
          headers: ['Désignation', 'Quantité', 'Poids unitaire', 'Dimensions unitaires en cm', 'Prix unitaire en euro'],
          rows: [
            ['Boite de bonnet rouge', '10 000', '600 g', '0,24', '0,5'],
            ['Cartons', '500', '2 kg', '60 x 40 x 20', '0,1'],
          ],
        },
      },
      {
        paragraphs: [
          'NB : le fournisseur veut réaliser une marge commerciale de 35% sur le prix de vente.',
          'Charges diverses',
          "-Transport d'approche =12 €",
          '-Déchargement du camion =7 €',
          '-Transit export =40 €',
          '-Douane export =67 €',
          '-Taxes B/L =1 €',
          '-Embarquement de la marchandise sur le navire =25 €',
          "-Fret = 12 USD L'UP avec BAF= -3% et CAF=1,5%; CSP=2,5%",
          "-Taux d'assurance = 0,5%",
          'Valeur assurée = CIF majoré de 10%',
          '-Acconage import = 75 000 F CFA',
          '-Post acheminement = 90 000 F CFA',
          'TRAVAIL A FAIRE',
        ],
        list: [
          'Chiffrez les prix EXW, FAS, FOB, CFR, CIF, DPU et DAP de cette commande tout en précisant les villes — 45% de la commande sera transformée — le reste sera mis sur le marché local',
          'Identifiez le régime douanier affecté à chaque situation de la commande citée ci-haut.',
        ],
      },
      {
        heading: 'Deuxième partie',
        paragraphs: [
          "Pendant le voyage maritime, un incident endommage les marchandises à hauteur de 10% selon le rapport du commissaire d'avaries. Les honoraires du commissaire d'avaries et les frais annexes sont estimés respectivement à 150 000 F CFA et 68 000 F CFA.",
          'TRAVAIL A FAIRE',
        ],
        list: [
          'Déterminez le prix DDP sachant que DD =10% ; TDP =10% ; RSTA =1% ; TVA = 18% ; PCS = 0,8% ;PUA :0,2% ; PCC = 0,5%',
          "A combien s'élève le montant de l'indemnité sachant qu'une franchise de 5% a été accordée.",
          "De quel type d'avarie s'agit-il ? Quelles sont les garanties appropriées à sa couverture ?",
        ],
      },
      {
        paragraphs: ['NB : 1 USD = 450 F CFA — 1€ = 656 F CFA'],
      },
    ],
  },

  // ─────────────────────────────────────────── Cas Mage S.A (p. 75-76) — Session 2011
  {
    id: 'y2cas7',
    kind: 'cas',
    level: 2,
    number: 26,
    title: 'Cas Mage S.A',
    intro:
      "Installés dans la zone industrielle de Yopougon, MAGE S.A est une société de droit ivoirien. Disposant d'un code d'importateur-exportateur, elle a pour objet la distribution de produits chimiques. Pour honorer une commande, elle prend attache avec un laboratoire français. Vu l'urgence de la commande, elle confie toutes les opérations à SAGA Transit qui lui propose le transport aérien.",
    sections: [
      {
        paragraphs: ["SESSION 2011 — BTS GESTION COMMERCIALE — Durée de l'épreuve : 3 h — Coefficient : 3", 'TECHNIQUE DU COMMERCE INTERNATIONAL'],
      },
      {
        heading: 'Première partie',
        paragraphs: ['Les détails de la cotation sont en annexe.', 'TRAVAIL A FAIRE'],
        list: [
          'Calculez le fret par la méthode du « Payant Pour ».',
          "Calculez les prix EXW, FCA, CPT, CIP, DPU, DAP, DDP et le cout de revient de cette importation.",
          "Quels documents doit lever MAGE S.A pour l'importation de sa commande ? Motivez votre réponse.",
          'Quel est le statut de SAGA Transit vis-à-vis de MAGE S.A et de la douane ?',
          'Sous quel régime douanier doit être placée la marchandise si elle doit être vendue immédiatement ?',
          'Identifiez 2 avantages et 2 inconvénients du transport aérien pour MGE S.A.',
          "En tenant compte du volume et du poids brut de la commande, quel type de LTA doit émettre l'agent de fret aérien pour MAGE S.A en cas de groupage.",
        ],
      },
      {
        heading: 'Annexe',
        paragraphs: [
          'Valeur total EXW le Havre = 5710 €',
          'Volume de la commande = 4,9 m3',
          'Poids brut de la commande = 880 kg',
          'Enlèvement à domicile = 45 €',
          'Emission LTA = 2,5 €',
          'Enregistrement = 70 €',
          'Douane export = 150 €',
          'Transit export = 68 €',
          'Frais de groupage = 50 €',
          "Taux d'assurance = 0,4%",
          'Valeur assurée = CIP + 10% CIP',
          "Débarquement à l'arrivée = 70 000 FCFA",
          'Post acheminement = 60 000 FCFA',
          'Transit import = 120 000 FCFA',
          'Douane import: DD = 10%, RSTA = 1%, TVA = 18%, PCS = 0,8%, PUA : 0,2%, PCC = 0,5% ; TSD = 20 000 FCFA.',
          'Déchargement chez MAGE S.A = 30 000 FCFA',
          'Tarif général sur Abidjan',
        ],
        table: {
          headers: ['Tranche de poids', 'Tarif'],
          rows: [
            ['M', ''],
            ['N', ''],
            ['100kg, 200 kg', '1, 35 USD / kg'],
            ['200 kg, 500 kg', '1, 30 USD / kg'],
            ['500 kg, 700 kg', '1, 25 USD / kg'],
            ['700 kg, 900 kg', '1, 20 USD / kg'],
            ['900 kg, 1000 kg', '1, 15 USD / kg'],
          ],
        },
      },
      {
        paragraphs: ['NB : 1 USD = 500 FCFA'],
      },
      {
        heading: 'Deuxième partie',
        paragraphs: ["Pour le règlement de sa facture, le fournisseur a exigé le virement bancaire international.", 'TRAVAIL A FAIRE'],
        list: [
          'Justifiez le choix de cet instrument de paiement par le fournisseur français.',
          'Comparez le virement international à la remise documentaire.',
          'Présentez le schéma du virement bancaire international. — Banque de MAGE S.A = BICICI — Banque du fournisseur = Crédit Agricole.',
        ],
      },
      {
        heading: 'Questions de cours',
        paragraphs: ['Définissez les termes suivants :', 'Produit contingenté, coassurance, connaissement net de réserves.'],
      },
    ],
  },

  // ─────────────────────────────────────────── Cas Lagoon Bleu (p. 77-78) — Session 2024
  {
    id: 'y2cas8',
    kind: 'cas',
    level: 2,
    number: 27,
    title: 'Cas Lagoon Bleu',
    intro:
      "Titulaire d'un BTS en Gestion Commerciale, vous venez d'obtenir un stage de perfectionnement à LAGOON BLEU située à Abidjan, entreprise spécialisée dans la vente de piscines en kit. Le responsable du service import-export vous demande d'organiser l'importation d'une commande portant sur trois piscines passées avec la Société BLEU CIEL en EXW le Havre en France. Ces trois piscines seront immédiatement livrées à trois prestigieux clients basés à Bouaké.",
    sections: [
      {
        paragraphs: ["SESSION 2024 — BTS GESTION COMMERCIALE — Durée de l'épreuve : 3 h — Coefficient : 3", 'TECHNIQUE DU COMMERCE INTERNATIONAL'],
      },
      {
        heading: 'Partie I',
        paragraphs: ['TRAVAIL A FAIRE'],
        list: [
          "Calculez les prix EXW, FCA, CFR, CIP, DPU, DAP, DDP et le cout de revient de l'importateur.",
          'Sous quel régime douanier doit être placée cette commande qui sera immédiatement vendue ?',
          "Après avoir précisé le statut du transitaire SDV, vous listerez trois opérations qu'il doit effectuer concernant l'importation de cette commande.",
          'Citez deux obligations du client et deux obligations du vendeur en termes de risques et de couts en cas de vente CPT Abidjan.',
        ],
      },
      {
        heading: 'Annexe 1 : Informations générales',
        paragraphs: [
          'Commande = 3 piscines',
          'Poids brut total = 4 tonnes',
          "Prix EXW d'une piscine = 1320 €",
          'Conditions de paiement = crédit documentaire irrévocable',
          'Délai de livraison = 40 jours',
        ],
      },
      {
        heading: 'Annexe 2',
        paragraphs: [
          "Opérations logistiques et administratives fournies par le transitaire SDV depuis le port de Havre jusqu'au local de LAGOON BLEU à Abidjan.",
          'Pré-transport = 250 €',
          'Transit export = 300 €',
          'Douane export = 400 €',
          'Acconage export = 180 €',
          'Fret de base = 20 0 € la tonne brut; BAF = 3%; CAF = 2%',
          'Assurance transport = (0,4% CIP majoré de 10%) + 2500 FCFA',
          'Acconage import = 180 000 FCFA',
          'Post-transport = 210 000 FCFA',
          'Transit import = 600 000 FCFA',
          'Taux des droits et taxes de douane : DD = 10%, RSTA = 1%, TVA = 18%, PCS = 0,8%, PUA : 0,2%, PCC = 0,5% ; TSD = 20 000 F CFA.',
          'La commande a été soumise au contrôle de la DARRV et de la SGS par la route A.',
          'NB : 1 € = 656 F CFA',
        ],
      },
      {
        heading: 'Partie II',
        paragraphs: ["Annexe : extrait de l'ouverture du crédit documentaire"],
        table: {
          headers: ['Rubrique', 'Mention'],
          rows: [
            ["Donneur d'ordre", 'LAGOON BLEU'],
            ['Adressée à', 'SGCI Abidjan'],
            ['Veuillez ouvrir par', '☐ Télex   ☒ SWIFT'],
            ['Forme du crédit documentaire', '☒ irrévocable   ☐ irrévocable et confirmé   ☐ Transférable'],
            ['Bénéficiaire', 'BLEU CIEL'],
            ['Montant', 'XXX'],
            [
              'Réalisable par',
              '☐ aux caisses de votre correspondant\n☐ Paiement à vue\n☒ Paiement différé à 90 jours après expédition\n☐ Acceptation de traite à……….Jours après\n☐ Négociation ………. Jours après',
            ],
            [
              'Contre remise des documents suivants',
              "☒ Facture commerciale    ☐ police d'assurance\n☐ Jeu complet de connaissements maritimes    ☒ note de poids\n☐ Document de transport multimodal    ☒ liste de colisage\n☐ Document de transport aérien    ☐ certificat d'origine",
            ],
          ],
        },
      },
      {
        heading: 'Travail à faire',
        list: [
          "A l'aide de l'annexe, répondez aux questions suivantes : Qui est le donneur d'ordre ? quelle est la banque émettrice ? Qui est le bénéficiaire ? — Quelle est la forme du crédit documentaire ? Quel est le mode de réalisation ? — Quels sont les documents fournis par le vendeur ?",
          'Citez deux avantages de cette forme de crédit documentaire pour LAGOON BLEU.',
          'Reproduisez le tableau sur votre copie puis complétez-le.',
        ],
        table: {
          headers: ['Documents', 'Qui rédige le document ?', 'A qui est-il destiné ?', 'A quoi sert-il'],
          rows: [
            ['Facture commerciale', '', '', ''],
            ["Fiche de déclaration à l'importation", '', '', ''],
            ["Licence d'importation", '', '', ''],
            ['Déclaration en détail', '', '', ''],
            ['Crédit documentaire', '', '', ''],
          ],
        },
      },
    ],
  },

  // ─────────────────────────────────────────── Cas Ets Adjé (p. 79-80) — Session 2021
  {
    id: 'y2cas9',
    kind: 'cas',
    level: 2,
    number: 28,
    title: 'Cas Ets Adjé',
    intro:
      "Installés dans le département de BONOUA, les ETS ADJE sont spécialisés dans l'exportation d'ananas. Après une bonne campagne de prospection aux USA en Avril 2020, ils décrochent une commande le 10 mai 2020 livrable dans un délai de 15 jours. Les ETS ADJE consultent SAGA TRANSIT, qui leur propose deux cotations : l'une en maritime et l'autre en aérien. En plus, il accepte d'assurer les opérations administratives et logistiques de bout en bout. Le paiement de leur facture se fera par crédit documentaire irrévocable non confirmé pat la SGCI.",
    sections: [
      {
        paragraphs: ["SESSION 2021 — BTS GESTION COMMERCIALE — Durée de l'épreuve : 3 h — Coefficient : 3", 'TECHNIQUE DU COMMERCE INTERNATIONAL'],
      },
      {
        heading: 'Travail à faire',
        list: [
          "Déterminez dans un tableau comparatif la cotation maritime et la cotation aérienne de EXW à CIF et CIP en mettant en relief les autre incoterms pour chaque mode de transport. Quelle cotation conseillez-vous aux ETS ADJE ? Motivez votre réponse.",
          'Comparez le transport maritime au transport aérien en quatre points.',
          "Quelle police d'assurance a été choisie chez SARAH ASSURANCE pour couvrir la commande des ETS ADJE ? Motivez votre réponse.",
          "A quels risque s'exposent les ETS ADJE pour le paiement de leur facture par crédit documentaire irrévocable.",
        ],
      },
      {
        heading: 'Annexe 1 : informations générales',
        paragraphs: ['Quantité = 150 cartons d\'ananas', 'Monnaie de facturation = USD', 'Prix EXW / par carton = 250 USD'],
      },
      {
        heading: 'Annexe 2 : Proposition pour la cotation maritime',
        paragraphs: [
          'Volume total des cartons = 3, 5 m3',
          "Poids brut d'un carton = 5 kg",
          'Préacheminement = 125 USD',
          'Transit export = 520 USD',
          'Douane export = 840 USD',
          'Acconage export = 85 USD',
          "Fret de Base = 85 USD L'UP, BAF = 2,5% et CAF = 3%",
          "Taux d'assurance = 0,5%",
          "Valeur d'assurance = CIF X 110%",
        ],
      },
      {
        heading: 'Annexe 3 : Proposition pour la cotation aérienne',
        paragraphs: ['Tarif général', 'Fret minimum = 800 USD'],
        table: {
          headers: ['Tranche de poids', 'Tarif'],
          rows: [
            ['-45 kg', '55 USD / kg'],
            ['+45 kg', '1, 40 USD / kg'],
            ['100kg, 200 kg', '1, 35 USD / kg'],
            ['200 kg, 400 kg', '1, 30 USD / kg'],
            ['400 kg, 600 kg', '1, 25 USD / kg'],
            ['600 kg, 800 kg', '1, 20 USD / kg'],
            ['800 kg, 1000 kg', '1, 15 USD / kg'],
            ['+ de 1000 kg', '1,10 USD / kg'],
          ],
        },
      },
      {
        paragraphs: [
          'Volume total des cartons = 2, 6 m3',
          'Poids brut total = 585 kg',
          'Enlèvement à domicile = 115 USD',
          'Transit export = 475 USD',
          'Douane export = 775 USD',
          'Embarquement = 77 USD',
          "Taux d'assurance = 0,4%",
          "Valeur d'assurance = CIP X 110 %",
          'NB : 1 USD = 500 FCFA',
        ],
      },
    ],
  },
];
