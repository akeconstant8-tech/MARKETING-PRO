import type { TciChapter } from '../tciTypes';

export const fcme2Chapter8: TciChapter = {
  id: 'fcme2ch8',
  kind: 'chapitre',
  level: 2,
  number: 8,
  title: 'Applications : travaux dirigés et sujets de BTS',
  intro:
    "Travaux dirigés (Société KOF) et sujets d'examen BTS Gestion Commerciale : Fondements, Concepts Marketing et Etude de Marché — durée de l'épreuve : 2 h, coefficient : 2.",
  sections: [
    { heading: 'Travaux dirigés — Cas : Société KOF' },
    {
      heading: 'Dossier I',
      paragraphs: [
        "Créée en 1980, la Société KOF basée aux Pays-Bas est spécialisée dans la production et la commercialisation de lait en poudre pour nouveau-nés. Dans sa politique d'extension, elle désire s'implanter en Côte d'Ivoire. Pour faciliter son implantation, elle vous prie de bien vouloir réaliser une étude de marché sur les différents acteurs du marché.",
        'Travail à faire :',
      ],
      list: [
        "1. Quelle est la nature des sources d'informations à consulter pour cette étude ?",
        '2. Quels sont les différents instruments des différentes études ?',
        "3. Rédigez le projet d'étude.",
      ],
    },
    {
      heading: 'Dossier II',
      paragraphs: [
        "Pour la phase pratique de cette étude, vous décidez de tirer systématiquement un échantillon à partir du fichier de maternités qui ont enregistré pour une certaine période un total de 5876 accouchements. D'après ce tirage, la 97ème et la 178ème personnes tirées portent respectivement les numéros 2517 et 4623.",
        'Travail à faire :',
      ],
      list: ["1. Quelle est la taille de l'échantillon constitué ?", '2. Déterminez le numéro de la dernière personne tirée.'],
    },
    {
      heading: 'Dossier III',
      paragraphs: [
        "Cinq (5) ans après son implantation, le Directeur Commercial vous donne les informations suivantes (en millions de francs CFA).",
      ],
      table: {
        headers: ['Mois', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
        rows: [['Ventes', '450', '400', '475', '512', '480']],
      },
    },
    {
      paragraphs: ['Travail à faire :'],
      list: [
        '1. Calculez le taux de croissance moyen mensuel.',
        '2. Prévoir les ventes du mois de Juin avec : la méthode de MAYER ; la méthode des points extrêmes ; la méthode des moindres carrés.',
      ],
    },

    { heading: 'BTS Gestion Commerciale — Session 2022' },
    {
      heading: 'Dossier 1',
      paragraphs: [
        "ADEDY est une entreprise commerciale. Elle est spécialisée dans la vente des produits cosmétiques. M. KOFFI Didier, le responsable commercial, vous donne les informations concernant les ventes de ses différents produits au cours des 5 dernières années.",
      ],
      table: {
        headers: ['Produit', '2017', '2018', '2019', '2020', '2021'],
        rows: [
          ['Lotion', '475', '450', '500', '525', '400'],
          ['Crème', '400', '475', '450', '500', '625'],
          ['Lait', '800', '950', '1200', '1500', '2000'],
          ['Parfum', '775', '700', '800', '850', '950'],
        ],
      },
    },
    {
      paragraphs: ['Travail à faire :'],
      list: [
        "1. Calculez la part de marché de chaque produit pour l'année 2021.",
        "2. Calculez la part de marché relative de chaque produit pour l'année 2021 et tirez-en une conclusion.",
        '3. Déterminez le taux de croissance moyen (TCM) du produit Lotion de 2017 à 2021.',
        '4. Prévoir les ventes du produit Lotion en 2022 avec le TCM.',
      ],
    },
    {
      heading: 'Dossier 2',
      paragraphs: [
        "M. KOFFI Didier s'intéresse particulièrement à l'évolution des ventes de la Lotion. Il confie une étude de marché au Cabinet d'Etude ANVOININ, dont vous faites partie. Les caractéristiques de cette étude sont :",
      ],
      list: [
        'Rémunération des enquêteurs : 500 FCFA par questionnaire administré',
        'Rémunération des encadreurs : 10 000 FCFA la journée de travail',
        'Déplacement : 300 000 FCFA',
        'Autres frais : 850 000 FCFA.',
      ],
    },
    {
      paragraphs: [
        "Le dernier chapitre (autres frais) représente 40 % du budget global de l'étude ; les 5 encadreurs travaillent pendant 5 jours ; chaque enquêteur doit administrer 10 questionnaires par jour. L'étude doit tenir dans un délai de 6 jours.",
        'Travail à faire :',
      ],
      list: [
        "1. Déterminez la taille de l'échantillon à sonder.",
        "2. Déterminez le nombre d'enquêteurs devant réaliser l'étude.",
        "3. Enumérez les étapes du projet d'étude.",
      ],
    },

    { heading: 'BTS Gestion Commerciale — Session 2024 — Cas : OILCI' },
    {
      paragraphs: [
        "Créée en 2018, OILCI fabrique et vend en Côte d'Ivoire des produits oléagineux dont la qualité est irréprochable. Les prix sont très compétitifs face aux redoutables concurrents de la place que sont BASSAM, HOLYOIL et BEST OIL.",
        "OILCI commercialise essentiellement ses produits dans la région d'Abidjan où vivent 250 000 ménages. En considérant ce marché théorique, on note en 2021 qu'il est saturé à 80 % et que le taux de pénétration est de 10 %. Le leader du marché est BESTOIL qui réalise annuellement un chiffre d'affaires de 10 220 000 000 FCFA.",
      ],
    },
    {
      heading: 'Dossier 1',
      paragraphs: ['Travail à faire :'],
      list: [
        '1. Calculez en FCFA le marché de OILCI en 2021.',
        '2. Calculez en FCFA le marché de la concurrence en 2021.',
        '3. Calculez la Part de Marché Relative de OILCI en 2021.',
        "NB : Une année = 365 jours. Chaque consommateur dépense en moyenne 400 FCFA/jour dans les produits oléagineux.",
      ],
    },
    {
      heading: 'Dossier 2',
      paragraphs: [
        "En 2021, OILCI réalise un chiffre d'affaires de 3 640 000 000 FCFA sur cinq (5) produits. Les volumes de ventes pour l'année 2021 sont les suivants :",
      ],
      table: {
        headers: ['Produits', 'Nombre de cartons', "Contenu d'un carton", 'Prix de vente unitaire', 'Part de Marché Relative'],
        rows: [
          ['Fine', '20 000', '50', '546', '0,3'],
          ['Mayo', '40 000', '25', '1274', '0,5'],
        ],
      },
    },
    {
      paragraphs: ["Travail à faire : Calculez pour chaque produit, le chiffre d'affaires du principal concurrent."],
    },
    {
      heading: 'Dossier 3',
      paragraphs: [
        "La Direction de OILCI décide de couvrir le reste du territoire national. Pour ce faire, elle envisage de réaliser une étude de marché. Vous êtes donc désigné pour effectuer cette étude. Vous disposez d'un budget de 14 000 000 FCFA. Les frais de réalisation de cette étude sont les suivants :",
      ],
      list: [
        'Conception du questionnaire : 150 000 FCFA',
        'Rémunération des enquêteurs : 800 FCFA par questionnaire',
        'Frais de traitement (fixe) : 250 000 FCFA',
      ],
    },
    {
      paragraphs: ['Travail à faire :'],
      list: [
        "1. Déterminez la taille de l'échantillon.",
        "2. Proposez un projet d'étude.",
        "3. Nommez l'outil de collecte d'information dans une étude quantitative.",
      ],
    },

    { heading: 'BTS Gestion Commerciale — Session 2011 — Cas : Délice au lait' },
    {
      paragraphs: [
        "« Délice au lait » est une entreprise spécialisée dans la production de desserts à base de lait. Sa gamme de produits est constituée des trois produits suivants : Yaourt de délice ; Crème de délice ; Fromage de délice.",
        "Vous êtes nouvellement embauché au poste de responsable marketing chez « Délice au lait » et on vous demande d'analyser les situations suivantes : le tableau des statistiques de ventes de « Délice au lait » ces trois dernières années (ventes en millions de francs).",
      ],
      table: {
        headers: ['Années', '2008', '2009', '2010'],
        rows: [['Ventes', '350', '470', '500']],
      },
    },
    {
      heading: 'Travail à faire 1',
      list: [
        "1. Calculez le taux d'évolution des ventes de l'entreprise.",
        "2. Calculez le taux moyen d'évolution des ventes.",
        "3. Prévoir les ventes de l'entreprise en 2011 et 2012.",
      ],
    },
    {
      paragraphs: [
        "« Délice au lait » veut élargir sa gamme de produits. Elle compte proposer pour commencer du yaourt à l'ananas (en morceaux de fruits). Elle sollicite une étude pour évaluer la probabilité d'achat de son nouveau yaourt.",
      ],
    },
    {
      heading: 'Travail à faire 2',
      list: [
        "1. Au seuil de confiance de 95 %, combien de personnes faut-il interroger pour que l'erreur maximum soit de 4 % et de 2 % ?",
        "2. Après l'enquête auprès de 600 personnes, elle constate les fréquences suivantes : 70 % connaissent déjà la marque « Délice au lait » ; 57 % considèrent que les produits de la marque sont de bonne qualité ; 35 % achèteraient certainement ou probablement le produit proposé. Au seuil de confiance de 95 %, que peut-elle dire de ces trois fréquences sur la population mère (extrapolation à la population mère) ?",
        "3. Décrire les différentes étapes de l'étude de marché.",
      ],
    },

    { heading: 'BTS Gestion Commerciale — Session 2012' },
    {
      paragraphs: [
        "Une entreprise indienne de fabrication et de commercialisation de consoles de jeux vidéo désire s'implanter en Côte d'Ivoire. Elle vous contacte pour l'aider à réaliser l'étude susceptible de faciliter cette implantation.",
      ],
    },
    {
      heading: 'Dossier 1',
      list: ["1°) Rédigez le projet de cette étude."],
      paragraphs: [
        "Les consoles de cette entreprise devraient être vendues à 200 000 CFA l'unité. À ce prix les prévisions de ventes annuelles étaient de 40 000 consoles (le support porte « 40.0000 »). Mais compte tenu de la situation socio-économique actuelle du pays, une réduction de 25 % est prévue. La sensibilité de la demande par rapport au prix dans ce secteur est de −1,2.",
      ],
    },
    {
      list: ['2°) Prévoyez la demande en volume et en valeur suite à cette baisse.'],
    },
    {
      heading: 'Dossier 2',
      paragraphs: [
        "L'étude de marché a montré que les consommateurs de consoles de jeux sont issus de familles aisées et peu nombreuses. Mais les jeunes des zones défavorisées sont aussi intéressés par les consoles pourvu que les prix soient abordables. Cette société décide donc de produire des consoles différentes adaptées au pouvoir d'achat de chacune des deux catégories identifiées.",
      ],
      list: [
        "1°) Comment s'appelle l'opération consistant à catégoriser les différents clients de consoles de jeux ?",
        "2°) Sur quel critère fut basée la classification de l'entreprise indienne ?",
        "3°) Nommez et définissez la stratégie de couverture du marché adoptée par cette entreprise.",
      ],
    },
    {
      heading: 'Dossier 3',
      paragraphs: [
        "En mission à Abidjan pour finaliser le projet, le directeur de cette société désire choisir un hôtel. Après avoir visité plusieurs réceptifs hôteliers de la capitale, il vous soumet le document suivant :",
      ],
      table: {
        headers: ['Critère', 'Hôtel 1', 'Hôtel 2', 'Hôtel 3', 'Hôtel 4', 'Importance des critères'],
        rows: [
          ['Situation géographique', '2', '1', '3', '4', '2'],
          ['Confort', '1', '2', '3', '4', '3'],
          ['Prix', '4', '3', '2', '1', '4'],
          ['Menus du restaurant', '3', '2', '1', '4', '1'],
        ],
      },
    },
    {
      list: [
        "1°) Quelles sont les étapes du processus d'achat du consommateur ?",
        "2°) Calculez les scores obtenus par chaque hôtel en tenant compte de l'importance des critères.",
        "3°) Quel sera l'hôtel à choisir par le Directeur ?",
      ],
    },
  ],
};
