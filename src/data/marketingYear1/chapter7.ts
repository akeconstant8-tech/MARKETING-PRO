import type { TciChapter } from '../tciTypes';

export const mktChapter7: TciChapter = {
  id: 'mkt1ch7',
  kind: 'chapitre',
  level: 1,
  number: 7,
  title: "Deuxième partie, Chapitre 2 : Les différents types d'études de marché",
  intro: "Objectif : Distinguer les différents types d'études de marché.",
  sections: [
    { heading: "I. L'étude documentaire" },
    {
      heading: '1. Définition',
      paragraphs: [
        "C'est la recherche, la collecte et l'analyse d'informations secondaires. Elle peut être ponctuelle (lorsqu'elle est utilisée pour résoudre un problème spécifique), ou permanente (lorsqu'elle s'identifie à une activité de veille). Elle consiste à recueillir des informations existantes concernant le problème posé.",
      ],
    },
    {
      heading: "2. Les sources d'informations",
      paragraphs: [
        "Elles sont soit internes soit externes. Lorsqu'elles proviennent de l'entreprise elles sont généralement consignées dans :",
      ],
      list: [
        'Les tableaux de bord : ils récapitulent les indicateurs de performance de l\'entreprise dans divers domaines ;',
        "Les revues d'entreprise : elles informent sur l'actualité et les produits de l'entreprise ;",
        "Les fichiers commerciaux : ils comportent notamment les statistiques des ventes (montants et évolutions des chiffres d'affaires par périodes, produits, canaux de distribution…), les fichiers clients et fournisseurs (situation, évolution et répartition par rapport aux achats/ventes) ;",
        'Les rapports de la force de vente : ils donnent des informations sur les comportements, attentes, critiques et suggestions des distributeurs et des consommateurs ; ils informent également sur les pratiques des concurrents.',
      ],
    },
    {
      paragraphs: ["A l'extérieur de l'entreprise, les informations sont disponibles au sein de structures telles que :"],
      list: [
        'Les bibliothèques, les ministères et autres institutions nationales ;',
        'Les organismes professionnels : les chambres de commerce, les syndicats et associations ;',
        'les ministères ;',
        'les institutions publiques ou privées,',
        "Les sociétés d'études privées ;",
        'Les panels de consommateurs et de distributeurs.',
      ],
    },
    { heading: '3. Avantages et limites' },
    {
      heading: '3.1. Avantages',
      list: ['Le recueil des informations est généralement rapide,', 'Les informations sont peu coûteuses,'],
    },
    {
      heading: '3.2. Limites',
      list: [
        'Les informations peuvent être inadaptées,',
        'Leur fiabilité peut être mise en doute,',
        'Elles peuvent être dépassées,',
        'Elles peuvent être incomplètes.',
      ],
    },
    { heading: 'II. Les études qualitatives' },
    {
      heading: '1. Définition',
      paragraphs: [
        "Ce sont des enquêtes dans lesquelles les informations collectées permettent d'expliquer des faits. Ces informations sont de nature subjective et s'intéressent au « pourquoi » et au « comment » de l'acte d'achat. Elles permettent donc de mettre en évidence :",
      ],
      list: ['Les motivations ;', 'Les perceptions ;', 'Les intérêts, opinions et attitudes ;', 'Les préférences…'],
    },
    {
      paragraphs: [
        "Il existe différents types d'études qualitatives :",
      ],
      list: [
        "L'étude d'image ou de notoriété : pour savoir comment est perçu, connu et apprécié, auprès du public, un produit (ou une marque ou encore une entreprise).",
        "L'étude de comportement : pour expliquer les comportements des clients par leurs attitudes et leurs réactions.",
        "L'étude de motivation : pour rechercher la source des comportements en faisant apparaître les motivations.",
      ],
    },
    {
      heading: "2. Techniques d'études",
      paragraphs: ["On distingue les techniques d'entretien et les approches indirectes."],
    },
    {
      heading: "2.1. Les techniques d'entretien",
      paragraphs: [
        "L'entretien peut être individuel ou de groupe lorsqu'il est réalisé auprès d'un individu ou auprès d'un groupe de personnes. L'entretien est réalisé par le biais d'un guide d'entretien.",
        "Selon le degré de liberté d'expression ou d'orientation on distingue également : les réunions de groupe. Le groupe de réflexion, ou FOCUS GROUP, est la méthode de groupe qui est la plus pratiquée. Il consiste à rassembler plusieurs personnes (6 à 12) autour d'un animateur psychologue et à les amener à réfléchir et à s'exprimer spontanément et librement sur un thème donné. Il permet de rassembler différents points de vue en créant des interactions avec les membres du groupe.",
      ],
    },
    {
      heading: 'Le focus group : avantages et inconvénients',
      table: {
        headers: ['Avantages', 'Inconvénients'],
        rows: [
          [
            "Expression libre des participants\nDécouverte d'idées, d'attitudes qui n'auraient pas été mises en valeur sans l'interactivité entre les participants.\nPossibilité de conserver l'intégralité de la réunion sur un support vidéo ou radio\nApproche qui permet d'exploiter à fond un problème commercial.",
            "Coût élevé\nNécessité de recourir à des personnes qualifiées en psychologie\nRecrutement des participants quelquefois difficile\nAnalyse des résultats complexe",
          ],
        ],
      },
    },
    {
      list: [
        "L'entretien directif : il comporte un nombre déterminé de thèmes dans un ordre prédéfini ;",
        "L'entretien semi-directif : ici les thèmes sont plus ou moins déterminés mais il n'y a pas d'ordre ;",
        "L'entretien libre : ici le thème est plus général, il y a donc une liberté quasi-totale laissée à l'enquêté.",
      ],
    },
    {
      heading: '2.2. Les techniques d\'approches',
      paragraphs: [
        "L'approche peut être directe (l'enquêteur présente franchement le sujet de discussion à l'enquêté en tant que personne directement concernée) ou indirecte. Ce dernier cas reflète un ensemble de méthodes psychologiques d'exploration qui consistent, par pudeur, méfiance, auto censure ou simplement parce que l'interviewé n'est pas conscient, à lui présenter sous une forme indirecte des thèmes sensibles ou délicats pour obtenir de façon libre des réponses nettes et précises. On distingue (comme techniques d'approches indirectes) : les tests de projection, d'association, d'expression ou de complément.",
      ],
      list: [
        "Les tests de projection : on attribue à un autre des propriétés qui sont en réalité celles de l'interviewé.",
        "Les tests d'association : on demande à l'enquêté d'associer des images ou des mots à des produits ou à des marques. Lorsque cette association se fait par le biais d'animaux ou de fruits, on parle de portrait chinois.",
        "Les tests d'expression ou de complément : l'enquêté est conduit à réagir à une situation définie ou à compléter une phrase ou une histoire.",
      ],
    },
    { heading: '3. Avantages et limites' },
    {
      heading: '3.1. Avantages',
      list: [
        'Les études qualitatives sont fondamentales dans la compréhension du comportement du consommateur.',
        "Elles peuvent s'adapter à l'individu interviewé.",
      ],
    },
    {
      heading: '3.2. Limites',
      list: ['Elles sont difficiles à recueillir.', "Leur interprétation s'avère plus complexe."],
    },
    { heading: 'III. Les études quantitatives' },
    {
      heading: '1. Définition',
      paragraphs: [
        "Ce sont des enquêtes dont les informations collectées et traitées se rapportent à l'observation du comportement des intervenants sur le marché. Elles peuvent être considérées comme objectives et contrôlables. Elles permettent de répondre aux questions : Combien ? Qui ? Quand ? Font partie de cette catégorie, les informations qui portent sur :",
      ],
      list: [
        'La possession ou non des produits ;',
        "Les quantités achetées et les fréquences d'achats ;",
        "Les types d'acheteurs et les lieux d'achats...",
      ],
    },
    {
      heading: "2. Techniques d'études",
      paragraphs: [
        'Nous distinguons des techniques ponctuelles et des techniques répétitives. Elles procèdent toutes par un questionnaire.',
      ],
    },
    {
      heading: '2.1. Les techniques ponctuelles ou spontanées',
      paragraphs: ['Elles sont réalisées pour répondre à un problème ponctuel. On peut citer :'],
      list: [
        "Le recensement : c'est une enquête exhaustive qui consiste à interroger tous les individus d'une population lorsque celle-ci est peu nombreuse.",
        "Le sondage : c'est une étude menée auprès d'un échantillon représentatif lorsque la population mère est trop importante et / ou les budgets et délai de réalisation sont limités.",
      ],
    },
    {
      heading: '2.2. Les techniques répétitives',
      paragraphs: [
        "Il s'agit de méthodes qui permettent d'interroger à intervalles réguliers un échantillon avec un même instrument, pour suivre les comportements des individus dans le temps. Ce sont :",
      ],
      list: [
        "Le panel : c'est une enquête qui consiste à interroger de façon répétitive, un même échantillon sur un même thème.",
        "Le baromètre : c'est une enquête répétitive pour laquelle l'échantillon est renouvelé.",
      ],
    },
    { heading: '3. Avantages et limites' },
    {
      heading: '3.1. Avantages',
      list: ['Les études quantitatives sont relativement objectives.', "Elles sont d'un recueil plutôt aisé."],
    },
    {
      heading: '3.2. Limites',
      list: ['La procédure de collecte est assez longue.', 'Le traitement est relativement complexe.'],
    },
  ],
};
