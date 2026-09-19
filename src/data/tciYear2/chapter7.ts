import type { TciChapter, TciDiagram, TciDiagramArrow } from '../tciTypes';

const note = (x: number, y: number, lines: string[]) =>
  lines.map((text, i) => ({ text, x, y: y + i * 16, anchor: 'start' as const }));

const appelOffreArrows: TciDiagramArrow[] = [
  { points: [[220, 50], [220, 80]] },
  { points: [[220, 120], [220, 150]] },
  { points: [[220, 190], [220, 220]] },
  { points: [[220, 270], [220, 300]] },
  { points: [[220, 350], [220, 380]] },
  { points: [[170, 420], [170, 440], [100, 440], [100, 460]] },
  { points: [[250, 420], [250, 460]] },
  { points: [[250, 496], [250, 530]] },
  { points: [[250, 570], [250, 600]] },
  { points: [[250, 640], [250, 695], [200, 695]] },
  { points: [[100, 496], [100, 670]] },
];

const diagramAppelOffre: TciDiagram = {
  width: 780,
  height: 740,
  boxes: [
    { label: 'Acheteur', x: 150, y: 10, w: 140, h: 40 },
    { label: "Un appel d'offre", x: 150, y: 80, w: 140, h: 40 },
    { label: 'Cahier des charges', x: 150, y: 150, w: 140, h: 40 },
    { label: 'Entreprises intéressées\nou sélectionnées', x: 130, y: 220, w: 180, h: 50 },
    { label: 'Étude du cahier de\ncharge', x: 150, y: 300, w: 140, h: 50 },
    { label: 'Offre retenue', x: 150, y: 380, w: 140, h: 40 },
    { label: 'Non', x: 60, y: 460, w: 80, h: 36 },
    { label: 'Oui', x: 210, y: 460, w: 80, h: 36 },
    { label: 'Adjudication', x: 180, y: 530, w: 140, h: 40 },
    { label: 'Contrat', x: 180, y: 600, w: 140, h: 40 },
    { label: 'Fin de la\nprocédure', x: 60, y: 670, w: 140, h: 50 },
  ],
  arrows: appelOffreArrows,
  labels: [
    ...note(320, 22, ["L'acheteur recherche les fournisseurs potentiels", "en faisant un appel d'offre ouvert ou restreint"]),
    { text: 'Émet', x: 232, y: 70, anchor: 'start' },
    ...note(320, 110, ['Le cahier des charges décrit la totalité', 'du projet ses contraintes']),
    ...note(320, 170, ['Contre le paiement des sommes forfaitaires, les', 'entreprises peuvent se procurer le cahier des charges']),
    ...note(330, 240, ["Après étude du projet, l'entreprise peut faire une", "offre qu'elle remettra avant la date limite à", "l'acheteur."]),
    ...note(320, 320, ["L'acheteur étudie l'offre reçue et sélectionne celle", "qui sera acceptée, c'est l'adjudication"]),
    ...note(340, 400, ["Après l'adjudication, toutes les intentions des", 'parties seront formalisées dans un contrat']),
  ],
  caption: "Schéma : commentaire de la procédure d'appel d'offre",
};

export const year2Chapter7: TciChapter = {
  id: 'y2ch7',
  kind: 'chapitre',
  level: 2,
  number: 19,
  title: "La gestion des commandes à l'export et à l'import",
  intro:
    "La réussite sur le marché étranger nécessite une grande rigueur dans le suivi administratif et commercial des opérations depuis la conception de l'offre jusqu'à l'encaissement du prix. Le service export doit bâtir un travail efficace qui se résume en trois étapes :",
  sections: [
    {
      heading: "I - A l'exportation",
    },
    {
      heading: '1 - La prospection',
      paragraphs: ["C'est la recherche d'un acheteur potentiel à l'étranger."],
    },
    {
      heading: '2 - La préparation de la commande',
      paragraphs: [
        "Lorsqu'un acheteur accepte les conditions de vente par le biais d'une facture pro forma que l'acheteur a demandé. L'exportateur procède à l'emballage de la marchandise et la met soit à la disposition de son transitaire pour les formalités de douane export, soit au représentant du client (transitaire mandataire ou commissionnaire de transport) selon le contrat de vente (incoterm choisi).",
      ],
    },
    {
      heading: '2-1 - La facture pro forma',
      paragraphs: [
        "La facture pro forma est un document qui donne des informations sur le prix de vente, sur le prix, produit, sur les conditions de vente et de paiement…",
        "Contrairement a la facture commerciale appelé aussi facture fournisseur constate l'existence d'un contrat de vente donc qui oblige l'acheteur à payer le prix.",
      ],
    },
    {
      heading: '2-2 - Exemple de facture pro forma',
      paragraphs: [
        'Fournisseur: ICC — 26 BP 8720 Abidjan 26',
        'Importateur: CACAO BARRI — 16 rue Sucden, Paris Cedex 16',
        'Objet: Offre portant sur 10 000 sacs de cacao fève',
      ],
      table: {
        headers: ['DESIGNATION', 'QUANTITE', 'PRIX UNITAIRE', 'MONTANT'],
        rows: [
          ['Prix de vente:', '60 tonnes', '1 000 F CFA/Kg', '60 000 000'],
          ["Frais d'emballage:", '10 000 sacs', '500 F CFA/sac', '5 000 000'],
          ['EXW Abidjan:', '', '', '65 000 000'],
          ['Mise à FOB Abidjan', '', '2,5% EXW', '1 625 000'],
          ['FOB Abidjan', '', '', '66 625 000'],
          ['Fret maritime', '', '', '3 000 000'],
          ['CFR Marseille', '', '', '69 625 000'],
        ],
      },
    },
    {
      paragraphs: [
        "-Arrêté la présente facture pro forma à la somme de 69 625 000 F CFA (soixante-neuf millions six cent vingt-cinq mille franc CFA)",
        '-Condition de paiement: Credoc irrévocable et confirmé',
        '-Condition de transport: Conteneur par MAERSK-LINE',
      ],
    },
    {
      heading: "3 - Formalité d'expédition de l'offre",
    },
    {
      heading: '3-1 - Procédures administrative',
    },
    {
      heading: '3-1-1 - Formalités à remplir par le service commercial',
      paragraphs: ["Il s'agit de la vérification du contenu des mentions du bon de commande (incoterm, conditionnement)."],
    },
    {
      heading: '3-1-2 - Formalités à remplir par les autres services',
      list: [
        "Au service magasinage: on vérifie si la quantité en stock est suffisante pour répondre à la commande.",
        "Au service de production: on vérifie si éventuellement un besoin en production peut rapidement satisfait.",
        "Au service transport: on met en place les moyens logistiques (affrètement du moyen de transport, positionnement des conteneurs, du matériel de manutention…)",
      ],
    },
    {
      heading: '3-1-3 - Procédure douanière',
      paragraphs: [
        "Il s'agit de déclarer la marchandise en douane a l'export et payer les droits et taxes par le vendeur (selon l'incoterm). En côte d'Ivoire le seul droit à payer à l'export est le DUS calculé sur la valeur FOB.",
      ],
    },
    {
      heading: "II - A l'importation",
      paragraphs: [
        "La fonction achat est l'une des les plus importantes des entreprises industrielle et commerciale.",
        "En effet, afin d'obtenir les conditions les avantageuses, l'entreprise importatrice doit diversifier ses sources d'approvisionnement dans la recherche de fournisseurs à l'étranger.",
      ],
    },
    {
      heading: '1 - Recherche et sélection des fournisseurs étrangers',
      paragraphs: [
        'La recherche et sélection des fournisseurs adéquats posent le problème de la définition des critères de choix. Il faut pour cela :',
      ],
    },
    {
      heading: '1-1 - Les critères commerciaux',
      list: [
        'Connaître la notoriété du fournisseur,',
        'Les prix et les conditions de paiement',
        'La qualité des services (emballage et conditionnement)',
        "Analyser la rapidité d'exécution de la commande",
        'La possibilité de vendre dans tous les incoterms',
      ],
    },
    {
      heading: '1-2 - Les critères techniques',
      list: ['Qualité des techniques et processus de fabrication', 'Certification aux normes internationales (ISO)'],
    },
    {
      heading: '1-3 - Les critères de gestion',
      list: ['Efficacité du service administratif', 'Structure organisationnelle claire et précise'],
    },
    {
      heading: "III - L'appel d'offre",
    },
    {
      heading: '1 - Définition',
      paragraphs: [
        "L'appel d'offre est une consultation adressé par une entreprise qui manifeste le besoin, à l'aide d'un document appelé le cahier des charges à plusieurs fournisseurs susceptibles de répondre au besoin de cette entreprise afin d'opérer un choix pour l'obtention de l'offre la plus intéressante.",
      ],
    },
    {
      heading: '2 - Cahier des charges',
      paragraphs: [
        "Un cahier de charges est un document qui contient les plans, les réglementations, les normes, les spécifications de l'appel d'offre. Il décrit la totalité du projet et ses contraintes",
      ],
    },
    {
      heading: "3 - Différentes formes d'appels d'offres",
      paragraphs: ['On distingue deux principales formes :'],
    },
    {
      heading: "3-1 - Appel d'offre ouvert",
      paragraphs: ["Cet appel d'offre est lancé à l'endroit de toutes les entreprises intéressées."],
    },
    {
      heading: "3-2 - Appel d'offre restreint",
      paragraphs: ["Cet appel d'offre concerne les entreprises jugées compétentes."],
    },
    {
      heading: "3-3 - Appel d'offre de fonctionnement",
      paragraphs: [
        "Cet appel d'offre se fait par la désignation nominative du fournisseur. Il correspond dans ce cas à une simple commande.",
      ],
    },
    {
      heading: '4 - Les différents intervenants',
      paragraphs: ['Les principaux opérateurs sont :'],
    },
    {
      heading: "4-1 - L'adjudicateur",
      paragraphs: [
        "C'est un organisme public ou privé qui définit le projet, rédige le cahier des charges, recherche les financements et choisit le fournisseur ;",
      ],
    },
    {
      heading: "4-2 - L'adjudicataire",
      paragraphs: ["C'est entreprise retenue pour exécuter le marché ;"],
    },
    {
      heading: '4-3 - Les soumissionnaires',
      paragraphs: ["Ce sont les entreprises intéressées, désireuses de répondre à tout ou partie de l'appel d'offre"],
    },
    {
      heading: 'Schéma : commentaire de la procédure',
      diagram: diagramAppelOffre,
    },
    {
      heading: "III - Consigne pour rédiger un appel d'offre",
      paragraphs: [
        "Les appels d'offre doivent être présenté par un écrit sous enveloppe scellée et parvenir dans les délais fixés par l'appel d'offre en un lieu déterminé.",
        "L'ouverture des offres se fait à la date prévue, en général en public (quelque fois à huis clos) avec procès-verbal pour offrir une garantie de régularité.",
        "Le contenu d'un appel d'offre comprend :",
      ],
      list: [
        'Le descriptif exhaustif du produit',
        'Les quantités désirées (et le cadencement)',
        "La configuration du prix éventuel : incoterm ; devise",
        "L'emballage souhaité",
        'Le mode de transport souhaité',
        "L'adresse de livraison, plus les délais exigés",
        'Un canevas de réponse souhaité',
        'La date limite de réponse (délai de rigueur)',
      ],
    },
    {
      paragraphs: [
        "Tout en étant précis, l'appel d'offre ne doit pas être trop contraignant pour le fournisseur : l'acheteur a intérêt à éviter trop de rigidité, il court le risque de ne pas recevoir de réponse.",
        "Le cahier des charges contient les plans, les réglementations, normes, spécifications précise.",
        "Le choix des fournisseurs consultés est fonction de la demande (valeur potentielle d'achat, cahier des charges, facture et de l'offre (structure concurrentielle du marché, le savoir-faire des fournisseurs, la localisation)",
      ],
    },
    {
      heading: '1 - Paramètres de comparaison des offres',
      list: [
        'Le prix : trop souvent c\'est le « moins-disant » qui remporte la consultation',
        "Les délais : le retard de livraison peut engendrer d'autres coûts",
        "La qualité : il faut évaluer la qualité intrinsèque du produit et son coût d'utilisation",
        "La sécurité : la constance de qualité requise et la régularité des livraisons sont deux critères impératifs.",
      ],
    },
    {
      heading: '2 - Les différentes étapes',
      paragraphs: [
        "Après la sélection des fournisseurs, l'entreprise lance sa commande et organise le déplacement de la marchandise jusqu'à destination.",
        'Nous retenons 4 étapes qui sont :',
      ],
      list: ['La passation de la commande,', 'Le suivi de la commande,', 'La mise à jour des fichiers', 'La réception de la commande'],
    },
    {
      heading: '2-1 - La passation de la commande',
      paragraphs: ["C'est un acte juridique qui engage l'importateur. Elle peut se faire par :"],
      list: [
        "L'émission d'un bon de commande en spécifiant ses exigences documentaires qui faciliteront le dédouanement de la marchandise ;",
        "La signature d'un contrat dans le cas d'un achat d'équipement nécessitant un montage, une maintenance et/ou une formation ;",
      ],
    },
    {
      heading: "2-2 - La rédaction d'un bon de commande",
      paragraphs: ['Pour rédiger un bon de commande, il faut préciser:'],
      list: [
        "La dénomination commerciale et adresse du fournisseur",
        "La dénomination commerciale et adresse de l'importateur",
        'La nature de la marchandise et la quantité',
        "Le conditionnement et l'emballage",
        "Les conditions d'achat (incoterm)",
        'Les conditions de transport (FCL ; LCL)',
        "Date d'établissement du bon de commande",
      ],
    },
    {
      heading: 'Cas pratique',
      paragraphs: [
        "La société CACAO BARRI (16 rue Sucden Paris Cedex 16) veut passer une commande portant sur 10 000 sacs de cacao fève dont le fournisseur est ICC (26 BP 8720 Abidjan 26)",
        'Autres informations:',
      ],
      list: [
        'conditionnement: Sacs en jute de marque FILTISAC sous certification ISO',
        'condition de paiement: Credoc irrévocable et confirmé',
        'condition de transport: conteneur par MAERSK-LINE',
        "condition d'achat: CFR Marseille",
        "date d'établissement du bon de commande: 20/10/2014",
      ],
    },
    {
      paragraphs: ['TRAVAIL A FAIRE: Rédiger le bon de commande', 'Résolution'],
    },
    {
      heading: '2-3 - Le suivi de la commande',
      list: [
        "Vérifier que le fournisseur a bien expédié un accusé de réception de commande,",
        "Communiquer tout chargement de la commande en cours et en demander la confirmation,",
        "Relancer le fournisseur afin d'éviter tout retard d'expédition,",
        "Payer le transport et l'assurance dans le cas où ceux-ci ne sont pas à la charge du vendeur",
        "Organiser l'arrivée de la marchandise pour port, aéroport, à la gare routière et à la réception de celle-ci au sein de l'entreprise",
        'Réception et contrôler la marchandise puis éventuellement, mettre des réserves',
        'Choisir un régime douanier à la marchandise.',
      ],
    },
    {
      heading: '2-4 - La mise à jour des fichiers',
      paragraphs: [
        "Au fur à mesure du suivi des opérations, des fichiers « fournisseurs » et « articles » sont mis à jour. Parallèlement, un dossier complet est constitué pour chaque achat. Il comprend :",
      ],
      list: [
        'Le bon de commande, le contrat',
        "Une copie de l'ouverture du Credoc (le cas échéant)",
        'La ou les factures du fournisseur',
        'Les factures et la correspondance avec les différents opérateurs logistiques (transporteurs, transitaires, douaniers,…)',
        'Les documents douaniers',
        "Les bons de réception et les bordereaux d'analyse (le cas échéant)",
      ],
    },
    {
      heading: '2-5 - La réception de la commande',
      list: [
        "L'importateur doit organiser l'arrivée de la marchandise au port, à l'aéroport ou à la gare routière et à la réception de celle-ci au sein de l'entreprise",
        'Recevoir et contrôler la marchandise puis éventuellement émettre des réserves',
        'Choisir un régime douanier pour le dédouanement',
      ],
    },
  ],
};
