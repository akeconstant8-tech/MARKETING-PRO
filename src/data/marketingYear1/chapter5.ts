import type { TciChapter } from '../tciTypes';

export const mktChapter5: TciChapter = {
  id: 'mkt1ch5',
  kind: 'chapitre',
  level: 1,
  number: 5,
  title: 'Deuxième partie, Chapitre 1, Leçon 1 : Les informations dans les études de marché',
  intro: 'Objectif : Analyser les informations dans les études de marché.',
  sections: [
    {
      heading: "I. Définition de l'étude de marché",
      paragraphs: [
        "C'est la mise en œuvre d'un ensemble de techniques de préparation, de collecte et de traitement d'informations relatives à un marché. Ces informations auront pour but de servir de base à la prise de décisions marketing afin d'en réduire les risques.",
      ],
    },
    {
      heading: "II. Domaines d'application",
      paragraphs: [
        "La nature des informations à collecter dans une étude commerciale est fonction du problème à traiter. Ces informations concernent tous les acteurs et les facteurs qui constituent l'environnement de l'entreprise. Les études et recherches commerciales les plus fréquentes portent sur :",
      ],
      list: [
        "Le macro environnement : la connaissance des environnements technique, économique, sociodémographique, institutionnel et naturel permet de déceler les opportunités et les menaces qui pèsent sur l'entreprise ;",
        "La demande : elle est diversifiée et multiple, ce qui induit de la part de l'entreprise l'étude des comportements des consommateurs et leur évolution afin d'y adapter ses produits ;",
        "Les concepts sur le lancement d'un produit : il s'agit d'un ensemble de tests de conception, de produit, de prix et de marché pour mesurer l'accueil réservé au futur produit ;",
        "La concurrence : l'entreprise doit pouvoir identifier et dénombrer les fabricants de produits semblables ou substituables, analyser leur évolution en termes de volume de vente, part de marché ainsi que leur stratégie commerciale ;",
        "L'implantation : cette étude permettra de reconnaître les zones de chalandise, leur demande potentielle, leurs habitudes d'achat… ;",
        "La distribution : l'attitude, le poids des intermédiaires et leurs critères de choix sont des éléments que l'entreprise doit étudier et chercher à comprendre ;",
        "La publicité : il s'agira pour l'entreprise de rechercher les axes et mesurer l'efficacité de la publicité.",
      ],
    },
    {
      heading: 'III. Typologie des informations',
      paragraphs: ['Les informations seront classées par rapport à :'],
      list: ['Leur existence ;', "Leur provenance par rapport à l'entreprise ;", 'Leur nature.'],
    },
    {
      heading: '1. Selon leur existence',
      paragraphs: ['On distingue les informations primaires et les informations secondaires.'],
    },
    {
      heading: '1.1. Les informations primaires',
      paragraphs: [
        "Il s'agit d'informations non encore existantes, donc à recueillir. Ces informations relèvent de trois sources principales :",
      ],
      list: [
        "L'observation : repérage d'informations ne nécessitant pas la coopération explicite des sujets observés ;",
        "L'expérimentation : repérage d'informations après manipulation ou participation de l'un des paramètres ou sujets de l'étude ;",
        'Les enquêtes.',
      ],
    },
    {
      heading: '1.2. Les informations secondaires',
      paragraphs: [
        "Ce sont des données déjà disponibles. Elles sont issues, soit de l'entreprise elle-même, soit de l'extérieur.",
      ],
    },
    {
      heading: '2. Selon leur provenance',
      paragraphs: ['Nous avons les informations internes et les informations externes.'],
    },
    {
      heading: '2.1. Les informations internes',
      paragraphs: [
        "Il s'agit des données qui proviennent de l'entreprise ; elles sont généralement consignées dans :",
      ],
      list: [
        'Les tableaux de bord : ils récapitulent les indicateurs de performance de l\'entreprise dans divers domaines ;',
        "Les revues d'entreprise : elles informent sur l'actualité et les produits de l'entreprise ;",
        "Les fichiers commerciaux : ils comportent notamment les statistiques des ventes (montants et évolutions des chiffres d'affaires par périodes, produits, canaux de distribution…), les fichiers clients et fournisseurs (situation, évolution et répartition par rapport aux achats/ventes) ;",
        'Les rapports de la force de vente : ils donnent des informations sur les comportements, attentes, critiques et suggestions des distributeurs et des consommateurs ; ils informent également sur les pratiques des concurrents.',
      ],
    },
    {
      heading: '2.2. Les informations externes',
      paragraphs: [
        "Elles proviennent de sources externes à l'entreprise ; elles sont disponibles au sein de structures telles que :",
      ],
      list: [
        'Les bibliothèques, les ministères et autres institutions nationales ;',
        'Les organismes professionnels : les chambres de commerce, les syndicats et associations ;',
        "Les sociétés d'études privées ;",
        'Les panels de consommateurs et de distributeurs.',
      ],
    },
    {
      heading: '3. Selon leur nature',
      paragraphs: ['Nous distinguons les informations qualitatives et les informations quantitatives.'],
    },
    {
      heading: '3.1. Les informations qualitatives',
      paragraphs: [
        "Elles s'intéressent aux facteurs qui se trouvent à la source du comportement enregistré. Elles permettent d'expliquer des faits. Ces informations sont de nature subjective et s'intéressent au « pourquoi » et au « comment » de l'acte d'achat. Elles permettent donc de mettre en évidence :",
      ],
      list: ['Les motivations ;', 'Les perceptions ;', 'Les intérêts, opinions et attitudes ;', 'Les préférences…'],
    },
    {
      heading: '3.2. Les informations quantitatives',
      paragraphs: [
        "Elles se rapportent à l'observation du comportement des intervenants sur le marché. Elles peuvent être considérées comme objectives et contrôlables. Elles permettent de répondre aux questions : Combien ? Qui ? Quand ? Font partie de cette catégorie, les informations qui portent sur :",
      ],
      list: [
        'La possession ou non des produits ;',
        'Les quantités achetées et les fréquences d\'achats ;',
        "Les types d'acheteurs et les lieux d'achats.",
      ],
    },
  ],
};
