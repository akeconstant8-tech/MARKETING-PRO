import type { TciChapter } from '../tciTypes';

export const year2Chapter4: TciChapter = {
  id: 'y2ch4',
  kind: 'chapitre',
  level: 2,
  number: 16,
  title: 'Le transport aérien',
  intro:
    "Considéré comme un moyen de transport de luxe et inaccessible, le transport aérien a connu un grand essor grâce au développement des échanges internationaux et de la concurrence de plus en plus vive entre les nations.",
  sections: [
    {
      heading: 'I - Le contrat de transport aérien',
    },
    {
      heading: '1 - Définition',
      paragraphs: [
        "Le contrat de transport aérien est une convention qui constate l'accord entre le transporteur aérien (compagnie aérienne) et le chargeur (exportateur, importateur ou transitaire).",
        "Ce contrat est matérialisé par un document appelé la Lettre de Transport Aérien (LTA) ou (Air Way Bill).",
      ],
    },
    {
      heading: 'II - Les obligations des parties contractantes',
      paragraphs: ['Les principales parties contractantes sont : le chargeur et le transporteur aérien'],
      table: {
        headers: ['Chargeur', 'Transporteur'],
        rows: [
          [
            "1) Prévoir un emballage adapté\n2) Faire le marquage des colis\n3) Mettre la marchandise à la disposition du transporteur aux lieux et date prévue\n4) Emettre la LTA : responsabilité des renseignements fournis dans la lettre d'instruction fournie par la compagnie serveuse\n5) Prévoir le dédouanement des marchandises et satisfaire aux opérations de contrôle du commerce extérieur et des échanges\n6) Payer le fret aérien",
            "1) Charger la marchandise\n2) Acheminer la marchandise à destination en bon état dans les délais contractuels ou à défaut dans les délais « raisonnables »\n3) Décharger la marchandise\n4) Avis d'arrivée au destinataire ou l'intermédiaire indiqué sur la LTA",
          ],
        ],
      },
    },
    {
      heading: '1 - Responsabilité du transporteur',
      paragraphs: [
        "La convention de Varsovie présume la responsabilité du transporteur aérien en cas d'avarie ou de perte. Cette responsabilité s'étend depuis la prise en charge de la marchandise et est matérialisée par la signature de la LTA jusqu'à la remise au destinataire.",
      ],
    },
    {
      heading: "2 - Les réserves et clauses d'exonération",
    },
    {
      heading: 'a) Réserves faites par le transporteur',
      paragraphs: [
        "Le transporteur aérien peut émettre des réserves précises au moment de la prise en charge de la marchandise. Elles seront portées sur la LTA et ont pour effet de réserver la charge de la preuve. Néanmoins, les compagnies refusent de prendre en charge les colis douteux ou ceux dont les caractéristiques ne correspondent pas aux indications portées sur la LTA.",
      ],
    },
    {
      heading: "b) Les clauses d'exonération",
      paragraphs: ['Le transporteur est exonéré :'],
      list: [
        "S'il prouve qu'il a pris toutes les mesures nécessaires pour éviter le dommage ou qu'il lui était impossible de prendre ces mesures (en cas de force majeur)",
        "S'il prouve la faute de la partie lésée en relation directe avec le dommage.",
      ],
    },
    {
      paragraphs: [
        "Exemple : Le défaut d'emballage constaté au départ sur la LTA exonère le transporteur, puisque la cause du dommage est imputable à l'expéditeur.",
      ],
    },
    {
      heading: 'III - Organisation internationale',
    },
    {
      heading: '1 - La convention de Varsovie',
      paragraphs: [
        "La convention de Varsovie est le texte de base régissant le transport aérien international adoptée le 12 Octobre 1929 dont certaines dispositions ont été modifiées par le protocole de la Haye du 28 Septembre 1955. C'est elle qui définit le document de transport des marchandises par voie aérienne qu'est la LTA. Elle définit aussi la responsabilité du transporteur.",
      ],
    },
    {
      heading: '2 - La convention de Chicago',
      paragraphs: [
        "Cette convention relative à l'aviation internationale civile est connue sous le nom de la convention de Chicago. Elle a été signée le 07 Décembre 1944 et est entrée en vigueur le 04 Avril 1947.",
        "Elle établit les règles de l'air pour l'immatriculation des aéronefs, la sécurité et précise les droits et devoirs des pays signataires en matières de droit aérien relatif au transport international.",
        'A travers cette convention, nous avons 6 libertés aériennes qui sont:',
      ],
    },
    {
      heading: 'Liberté n°1',
      paragraphs: [
        "c'est le droit pour le transporteur aérien d'un pays A de survoler le territoire d'un Etat étranger (pays B) sans atterrir.",
        "Exemple : Air Côte d'Ivoire effectue un vol direct d'Abidjan à Lomé, a besoin de cette liberté pour survoler Accra.",
      ],
    },
    {
      heading: 'Liberté n°2',
      paragraphs: [
        "c'est avoir le droit d'escale c'est-à-dire escale technique.",
        "C'est le droit accordé au transporteur d'un pays A d'atterrir sur le territoire d'un pays B pour des raisons non commerciales.",
        "Pour se ravitailler en carburant ou pour tout autre raison technique ; en aucun cas, il ne peut être autorisé à débarquer ou à embarquer des passagers, du fret, ou de la poste.",
        "Exemple : le vol RK 320 quitte Dakar pour Paris et pour des raisons techniques, il est obligé d'atterrir à Alger pour une assistance technique.",
      ],
    },
    {
      heading: 'Liberté n°3',
      paragraphs: [
        "c'est avoir le droit pour un transporteur d'un pays A de débarquer dans un territoire d'un pays B du fret, des passagers et de la poste en provenance du pays d'immatriculation de l'avion (nationalité)",
        "Exemple : Ghana Airways débarque des passagers et du fret à Abidjan. Il décolle d'Abidjan sans embarquer aucun passager, ni de fret ou de la poste.",
      ],
    },
    {
      heading: 'Liberté n°4',
      paragraphs: [
        "c'est avoir le droit d'embarquer du fret, des passagers et de la poste à destination du pays d'immatriculation de l'avion (nationalité)",
        "Exemple: Air Burkina embarque des passagers à Abidjan à destination de Ouagadougou.",
      ],
    },
    {
      heading: 'Liberté n°5',
      paragraphs: [
        "c'est le droit pour un transporteur d'un pays A d'embarquer du fret, des passagers et de la poste provenant d'un pays B à destination d'un Etat tiers (pays C), c'est-à-dire autre que le pays d'immatriculation de l'avion pour débarquer dans un pays tiers.",
        'Exemple: RK transporte des passagers en provenance de Lagos à destination de Brazzaville.',
      ],
    },
    {
      heading: 'Liberté 6',
      paragraphs: [
        "elle résulte de la combinaison de la 3e et 5e liberté est née de l'initiative des compagnies aériennes qui l'utilise pour détourner du trafic à leur profit.",
        "Exemple: SABENA transporte des passagers d'Abidjan à Bruxelles pour ensuite les acheminer sur Paris alors qu'elle n'a pas le droit de trafic entre Abidjan et Paris.",
      ],
    },
    {
      heading: '3 - Les conventions IATA et ATAF',
      paragraphs: [
        "La convention IATA (International Air Transport Association) est conférence a été créée en 1945 qui regroupe la plupart des compagnies de transport aérien. Elle a joué un rôle important en matière de normes de sécurité et de qualité de service. Elle est aussi une conférence tarifaire c'est-à-dire qu'elle définit des tarifs communs appelés TACT (The Tarif Air Cargo Tarif) et inclut des accords de partage de trafic sur la plupart des grandes zones du monde. Il faut noter que dans certains cas, les compagnies n'ont jamais appliqué les tarifs de l'IATA.",
        "La convention ATAF (Association des Transporteurs Aériens de la zone Franc) concerne essentiellement les relations entre la France et les anciennes colonies d'Afrique.",
        "Les agents du fret aérien doivent être agréés par l'IATA et l'ATAF.",
      ],
    },
    {
      heading: 'IV - La lettre de transport aérienne',
    },
    {
      heading: '1 - Présentation',
      paragraphs: [
        "La Lettre de Transport Aérien (LTA) ou Air Way Bill (AWB) est le document normalisé de transport aérien dans le cadre de l'IATA et utilisé sous cette forme par toutes les compagnies",
        "Juridiquement, la LTA est établie par le chargeur mais dans la pratique. C'est l'agent aérien qui l'établira en 3 exemplaires et sont ventilées comme suit :",
      ],
      list: [
        'Une copie pour le transporteur ou la compagnie aérienne',
        "Une copie à l'expéditeur",
        "Une copie pour le chargeur-importateur",
      ],
    },
    {
      paragraphs: ['La LTA a pour fonction comme :'],
      list: ['La preuve du contrat de transport', 'La preuve de la prise en charge de la marchandise', 'Un titre représentatif de la marchandise.'],
    },
    {
      paragraphs: [
        "La LTA n'est pas négociable sauf dans le cas d'un CREDOC ; dans ce cas le transporteur remettra la marchandise au transporteur réel sous mandat express de la banque et n'est pas un titre de propriété.",
        "Le transporteur peut s'exonérer de sa responsabilité qu'en cas de force majeur ou en cas de faute de la personne lésée.",
      ],
    },
    {
      heading: '2 - Les différents types de LTA',
      list: [
        "La LTA compagnie : elle comporte les coordonnées pré-imprimées du transporteur émetteur",
        "La LTA mère et domestique : utilisé dans le cadre du groupage aérien, les organisateurs ou commissionnaires de transport proposent des groupages d'un coût moins élevé que le taux de fret ordinaires. Dans ce cas, le groupeur émet un LTA mère (Master Air Way Bill) et autant de LTA domestiques (House Air Way Bill) pour les expéditeurs distincts.",
        "La LTA neutre : elle ne comporte pas de coordonnées du transporteur. En cas d'expédition par groupage aérien, le groupeur délivre 2 types de LTA.",
      ],
    },
    {
      paragraphs: [
        'La LTA mère sur laquelle il décrit le nombre de colis et la LTA domestique sur laquelle il décrit chaque colis.',
      ],
    },
    {
      heading: 'V - Tarification du fret aérien',
      paragraphs: ['Nous avons trois méthodes :'],
      list: ['La méthode du poids-pivot ou ULD (Unit Load Device)', 'Le rapport poids-volume', 'La règle du payant-pour'],
    },
    {
      heading: "1 - La méthode du poids-pivot ou fret à l'unité de chargement ULD",
      paragraphs: [
        "Le poids-pivot est un poids qui donne lieu à l'application d'un forfait quel que soit le poids réel. Mais au-delà du poids-pivot une taxation au kilogramme est appliquée.",
      ],
    },
    {
      heading: "Exercice d'application",
      paragraphs: [
        'Le forfait pour toute expédition = 500 000 F CFA',
        'Le poids-pivot = 90 kg',
        'Taxation au-dessus du poids-pivot = 3 000 FCFA/kg',
        'Daniel veut voyager une marchandise de 105 kg',
        'TRAVAIL A FAIRE : Déterminez le fret aérien à payer par Daniel.',
        'Résolution :',
      ],
    },
    {
      heading: '2 - Le rapport poids-volume',
      paragraphs: ['Il faut procéder de la manière suivante :'],
      list: [
        "Déterminer le poids brut total de l'expédition en kg et le volume (celui de l'emballage) en m3.",
        "déterminer l'équivalent du volume (en m3), en tonne puis en kg. Tout en sachant qu'une tonne (1T) = 6m3",
        "Retenir comme poids taxable le poids le plus élevé entre le poids brut en kg et l'équivalent du volume en kg",
        "Situer le poids taxable dans l'intervalle du tarif général qui convient puis déterminer le fret à payer en multipliant le poids taxale par le tarif au kg correspondant.",
      ],
    },
    {
      heading: "Exercice d'application",
      paragraphs: [
        'Philippe expédie une marchandise dont le poids brut et le volume sont respectivement de 220 kg et 2 m3.',
        'Le tarif général est le suivant :',
        '- 45kg = 2 725 F CFA le kg',
        '45kg = 2 600 F CFA le kg',
        '100kg à 300kg = 1 950 F CFA le kg',
        '300kg à 500kg = 1 755 F CFA le kg',
        'TRAVAIL A FAIRE : déterminer le fret aérien à payer par Philippe.',
        'Résolution :',
      ],
    },
    {
      heading: '3 - La règle du payant-pour',
      paragraphs: [
        "Appliquée en faveur du chargeur, la règle du payant-pour consiste à facturer la tranche de taxation immédiatement supérieure à celle normalement applicable.",
        'Procédure à suivre :',
      ],
      list: [
        "Situer le poids taxable dans l'intervalle du tarif général correspondant",
        "Retenir pour le calcul du fret, la borne supérieure de l'intervalle dans lequel est situé le poids taxable ; cette borne supérieure devient la borne inférieure de l'intervalle suivant dont le prix au kg est à retenir.",
      ],
    },
    {
      paragraphs: ["NB : le poids taxable est toujours proche de la borne supérieure de l'intervalle correspondant."],
    },
    {
      heading: "Exercice d'application",
      paragraphs: [
        'Jonas expédie un colis qui pèse 280kg et de 1,4m3',
        'Tarif général : - 45 kg = 2 700 F CFA le kg',
        '45 kg = 2 500 F CFA le kg',
        '100 kg à 300 kg = 1 850 F CFA le kg',
        '300 kg à 500 kg = 1 450 F CFA le kg',
        'TRAVAIL A FAIRE : Déterminer le fret aérien à payer par Jonas.',
      ],
    },
    {
      heading: 'Autres informations',
      paragraphs: ['Informations retrouvées sur la LTA'],
      list: [
        'M = minimum de perception : fret minimal',
        'N = tarif normal (moins de 45kg)',
        "Q = tarif quantitatif à partir d'un certain kg jusqu'à 1000kg en général.",
      ],
    },
    {
      heading: "Exercice d'application",
      paragraphs: [
        '1) Poids minimal',
        'M = 400 F CFA',
        'N = 75 F CFA le kg',
        '+45kg = 55 F CFA le kg',
        '100kg = 40 F CFA le kg',
        '500kg = 30 F CFA le kg',
        'Poids taxables 5kg, 60kg, 90kg pour 3 expéditions.',
        'TRAVAIL A FAIRE : Calculez le fret aérien de chaque expédition.',
        'Résolution :',
        "2) les caractéristiques d'une expédition",
        'Poids brut = 200 kg, volume = 1,65m3',
        'Tarif général',
        'M ⇒ 743€',
        'N ⇒ 4,60€ le kg',
        '+45 kg ⇒ 3,70€ le kg',
        '100 kg à 300 kg ⇒ 2,70€ le kg',
        '300 kg à 500 kg ⇒ 2,20€ le kg',
        '500 kg à 600 kg ⇒ 2,00€ le kg',
        "TAF : Calculez le fret aérien de cette expédition en précisant la méthode utilisée.",
      ],
    },
  ],
};
