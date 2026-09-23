import type { TciChapter } from '../tciTypes';

export const miChapter5: TciChapter = {
  id: 'mi2ch5',
  kind: 'chapitre',
  level: 2,
  number: 5,
  title: 'Le choix des marchés étrangers',
  intro: 'Les raisons qui poussent une entreprise à exporter sont diverses.',
  sections: [
    {
      heading: '1. Problématique',
      paragraphs: ['Les raisons qui poussent une entreprise à exporter sont diverses. Ce sont entre autres :'],
      list: [
        'Le vieillissement du produit',
        'La saturation du marché local',
        'Les exacerbations de la concurrence',
        'La spécificité du produit',
      ],
    },
    {
      paragraphs: ["L'entreprise qui désire exporter vise les objectifs suivants :"],
      list: ['L\'accroissement du marché', 'La pérennisation du marché', "Le repositionnement de l'entreprise"],
    },
    {
      paragraphs: [
        "La sélection des marchés étrangers fait apparaître des groupes de pays classés par priorité et se fait sur la base de critères observables et pertinents afin d'identifier les marchés les plus porteurs.",
      ],
    },
    { heading: '2- Les critères de sélection' },
    {
      heading: "1-1 Les critères d'accessibilité",
      paragraphs: [
        "Il s'agit de déterminer les obstacles de toutes natures contribuant à rendre difficile ou coûteuse la diffusion des produits à l'étranger.",
        'Les critères sont multiples :',
      ],
      list: [
        "Les facteurs physiques : le climat, le relief, la distance, les conditions d'acheminement des produits, la possibilité de stockage des marchandises. Ces facteurs ont une incidence directe sur les coûts et la compétitivité des produits.",
        'Les obstacles tarifaires : il s\'agit des droits des douanes et de la fiscalité.',
        'Les obstacles non tarifaires : il s\'agit du contingentement, des licences d\'importation, des normes, visas …',
        'Les facteurs socioculturels : ils sont d\'ordre historique, linguistiques, religieux …',
      ],
    },
    {
      heading: '2-2 Les critères de potentialité',
      paragraphs: [
        "Il s'agit d'évaluer la situation économique globale du pays, son niveau de développement et ses perspectives de croissances, mais aussi d'évaluer la situation de la demande locale du produit que l'entreprise souhaite exporter. Il s'agit donc :",
      ],
      list: [
        'Des données de bases : ce sont la population, le PNB (valeur marchande de tous les biens et services finaux), le taux de chômage, la situation monétaire, la situation de la balance commerciale …',
        'De la situation économique : elle se définit par la croissance de la production et de la consommation, les principales productions, la dette publique …',
        "De la situation du marché de notre produit : elle est évaluée par la consommation intérieure et son évolution, la production locale, les importations …",
      ],
    },
    {
      heading: '2-3 Les critères de sécurité',
      paragraphs: [
        "Il s'agit des risques liés à la situation politique d'un pays : la stabilité gouvernementale, la situation sociale, les problèmes ethniques et religieux …",
      ],
    },
    { heading: '3 La démarche de sélection' },
    {
      heading: '3.1 La collecte d\'information',
      paragraphs: [
        'Le recueil des informations peut s\'avérer difficile ; en effet les données évoluent rapidement, la fiabilité des informations n\'est pas toujours certaine.',
        "En Cote d'ivoire, les sources d'informations sont multiples : l'INS, la CCI.",
      ],
    },
    {
      heading: "3.2 L'élaboration de la matrice",
      paragraphs: [
        "Il s'agit à travers un tableau récapitulatif de comparer la situation des différents pays étudiés à l'égard des critères retenus. Il n'existe pas de modèle standard de matrice de sélection.",
        'Celle-ci doit être établie spécifiquement pour chaque entreprise.',
      ],
    },
    {
      heading: '3.3 Exemple de matrice de sélection',
      table: {
        caption: 'Matrice de sélection des marchés étrangers (pondération des critères × note par pays)',
        headers: ['Pondération — Critères', 'TOGO', 'GHANA', 'TUNISIE', 'BF', 'AF. SUD'],
        rows: [
          ['5 — SECURITE', '14', '16', '10', '13', '09'],
          ['3 — POTENTIALITE', '11', '12', '15', '10', '18'],
          ['2 — ACCESSIBILITE', '14', '13', '10', '16', '10'],
          ['TOTAL', '131', '142', '115', '127', '119'],
        ],
      },
    },
    {
      paragraphs: [
        "Après avoir sélectionné un des marchés pour son implantation, l'entreprise doit ensuite procéder à une étude de marché afin de maitriser de manière précise toutes les facultés de son nouveau marché en vue de prendre des décisions objectives.",
      ],
    },
    {
      heading: "4- L'étude de marché international",
      paragraphs: [
        "Avant de prospecter sur un marché à l'étranger, il convient de recueillir un ensemble d'informations utiles sur ce marché. L'étude de marché international répond aux mêmes objectifs et utilise les mêmes techniques que le marché national.",
      ],
    },
    {
      heading: "4.1 L'objet de l'étude",
      paragraphs: [
        "L'étude de marché international a pour objet de récolter les informations sur le pays d'exportation. Elle doit permettre de comprendre comment fonctionne ce marché. Elle a également pour particularité d'identifier les différences de comportement entre les acteurs du marché domestique et ceux des marchés étrangers ciblés afin d'optimiser l'action commerciale.",
      ],
    },
    {
      heading: "4.2 Le contenu de l'étude",
      paragraphs: [
        "L'étude de marché à l'export doit permettre d'approfondir la connaissance du marché par l'identification et l'étude des éléments suivants.",
      ],
    },
    {
      heading: "a- L'offre",
      paragraphs: [
        "C'est l'ensemble des produits offerts sur un marché en vue de la satisfaction d'un besoin. De ce point de vue l'offre englobe le produit principal, les produits substituables et les produits complémentaires. L'étude de l'offre permettra de répondre aux interrogations suivantes :",
      ],
      list: [
        'Quel est le niveau de production nationale ?',
        'Quel est le montant et le pourcentage des importations ?',
        'Quels sont les produits locaux substituables ?',
        "Quelle est l'image de marque des entreprises concurrentes ?",
        'Quelles sont les stratégies de prix et de communication pratiquées par les concurrents ?',
      ],
    },
    {
      heading: 'b- La demande',
      paragraphs: [
        "C'est l'ensemble des besoins exprimés sur un marché par rapport à un produit. Il convient d'évaluer quantitativement et qualitativement la demande actuelle et future sur le marché visé. Pour cela, il faut connaitre les principales caractéristiques des futurs consommateurs en répondant aux interrogations suivantes :",
      ],
      list: [
        'Qui achète ?',
        'Où achète-t-on ?',
        "Quand achète-t-on ? Avec quelle fréquence ? Quelle est l'évolution de la consommation ? Quels sont les stocks à prévoir ?",
        'Quelles sont les attentes spécifiques en termes de qualité ?',
        "Quelles sont les habitudes de consommation ? Quelles sont les motivations d'achat ?",
        'Qui sont les prescripteurs ? …etc.',
      ],
    },
    {
      heading: "c- L'environnement",
      paragraphs: [
        "Cette étude concerne les éléments de l'environnement qui influencent sur la demande : la réglementation, la législation, douanière et fiscale, les mesures politiques, la culture du pays.",
      ],
    },
    {
      heading: 'd- La distribution',
      paragraphs: [
        "C'est l'ensemble des moyens utilisés pour mettre le produit à la disposition du consommateur au bon moment, à l'endroit indiqué, au prix souhaité et en quantité suffisante.",
        'Les informations à recueillir au niveau de la distribution sont :',
      ],
      list: [
        'les types de circuits de distribution sur le marché du produit concerné.',
        'les habitudes dans les différents circuits (les marges, les prix, capacité de stockage, service rendu au client)',
      ],
    },
    {
      paragraphs: [
        "En somme, le choix des marchés repose en priorité sur la mise en place d'une procédure d'évaluation des différents marchés envisagés comportant des étapes :",
      ],
      list: [
        "l'estimation du potentiel actuel des marchés (apprécier le potentiel de chacun des marchés existants)",
        'la prévision du potentiel futur des marchés (anticiper sur l\'évolution des conditions économiques, politiques, culturelles et commerciales)',
        'la prévision de la part du marché',
        'la prévision des coûts et bénéfices (pendant la pénétration du marché)',
        "l'estimation de la rentabilité des investisseurs (bénéfices par rapport aux investissements prévus)",
        'l\'élaboration de la matrice de sélection.',
      ],
    },
    { heading: '5- Etude documentaire' },
    {
      heading: '5.1- Objectif',
      paragraphs: [
        "L'objectif de cette étude est de recueillir à moindre coût des informations qui ont été déjà publiées sur le marché cible. On peut consulter deux (2) sources :",
      ],
    },
    {
      heading: 'a-Sources internes',
      paragraphs: ["Ce sont les dossiers qui existent au sein de l'entreprise :"],
      list: [
        "le service export : rapport d'activité",
        "les filiales à l'étranger : documents commerciaux et comptables",
        'les projets antérieurs',
        'les études antérieures',
      ],
    },
    {
      heading: 'b- Les sources externes',
      list: [
        "Sources nationales : Elles concernent le ministère du commerce, la CCI, le BNETD, l'APEXCI, CEPICI, les rapports du ministre des affaires étrangères.",
        'Sources internationales : Il s\'agit des organismes supra nationaux qui publient des annuaires et disposent des banques de données (FMI, BANQUE MONDIALE, BAD, l\'UE, l\'UA, la CEDEAO) et les sources gouvernementales étrangères (perspectives de développement).',
      ],
    },
    { heading: '6- Etude primaire' },
    {
      heading: '6.1-Objectif',
      paragraphs: [
        "Recueillir directement sur le marché des informations qui s'adaptent mieux aux contextes du temps et toute autre nature concernant l'étude en cours.",
      ],
    },
    { heading: '6.2-La réalisation' },
    {
      heading: "a- Le choix de l'opérateur",
      paragraphs: [
        "L'entreprise a le choix entre réaliser elle-même l'étude ou la confier à une société spécialisée (sous-traitance).",
        'Les critères de choix de l\'entreprise seront multiples, elle analysera pour ce faire :',
      ],
      list: [
        "le temps dont dispose la société pour réaliser l'étude",
        "ses compétences techniques, linguistiques et culturelles nécessaires pour le déroulement de l'étude et une analyse permanente.",
        "les coûts de réalisation de l'étude.",
      ],
    },
    {
      heading: "b- Les outils de l'étude",
      paragraphs: ['L\'observation sur place :'],
      list: [
        'Des caractéristiques de la consommation (fréquence, volume)',
        'Le niveau des prix de type du produit et par type de distribution',
        'Les services associés au produit',
        "L'image de marque des concurrents.",
      ],
    },
    {
      paragraphs: [
        "Enquête par questionnaire : Il faut veiller à ce que les questions soient exprimées dans la langue du pays (en respectant les nuances).",
        "Les tests de marché et/ou de produit : Ils mesurent l'adéquation du produit aux attentes des consommateurs. Ils sont réalisés avant le lancement des opérations afin d'éviter les échecs.",
      ],
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        "En élaborant son marketing international, l'Entreprise doit définir ses objectifs et sa politique. Le choix des marchés est fondé sur la problématique des opportunités extérieures décelées à partir d'une étude rationnelle des marchés extérieurs. Dans tous les cas, l'internationalisation n'interviendra que lorsque le maximum d'indicateurs s'avérera porteur.",
      ],
    },
  ],
};
