import type { TciChapter } from '../tciTypes';

export const fcme2Chapter1: TciChapter = {
  id: 'fcme2ch1',
  kind: 'chapitre',
  level: 2,
  number: 1,
  title: 'Chapitre 1 : Introduction aux études de marché',
  intro:
    "Les études de marché consistent à fournir des éléments d'informations dont la finalité est de réduire le risque de l'entreprise face à un avenir incertain.",
  sections: [
    {
      heading: '1. Objectif',
      paragraphs: [
        "L'obtention d'informations sur les marchés et sur leurs différentes composantes est un préalable indispensable aux choix rationnels et à la mise en œuvre efficace de la stratégie de l'entreprise.",
        "Les études de marché permettent aussi a posteriori de porter un diagnostic sur le bien-fondé des politiques commerciales retenues.",
      ],
    },
    {
      heading: '2. Les domaines d\'application des études de marché',
      paragraphs: ["Les études de marché portent sur divers domaines mais nous allons ici nous intéresser aux domaines les plus fréquents."],
    },
    {
      heading: "2.1. Etudes de l'environnement",
      list: [
        "L'étude de la situation économique : elle permet à l'entreprise d'orienter ses choix.",
        "L'étude de l'évolution démographique : elle permet à l'entreprise d'adapter sa stratégie à la tendance d'évolution de cette démographie.",
      ],
    },
    {
      heading: '2.2. Etudes sur la conception et le lancement du produit',
      list: [
        "Le test de conception : l'idée de création d'un produit étant retenue, on fait un test de conception qui consiste à demander l'avis d'un échantillon représentatif de la population sur l'opportunité de ce produit.",
        "Le test de produit : il consiste à faire apprécier le produit par un échantillon de consommateurs qui donne son avis sur la qualité, le conditionnement, la distribution etc. …",
      ],
    },
    {
      heading: "2.3. Etudes du marché de l'entreprise",
      paragraphs: [
        "Elles consistent à connaître le comportement du consommateur et son évolution afin d'adapter les produits de l'entreprise. Elles visent aussi à mieux comprendre l'attitude des différents intermédiaires de la distribution.",
      ],
    },
    {
      heading: "2.4. Etudes d'implantation",
      paragraphs: [
        "Elles permettent de connaître la zone de chalandise : le nombre de personnes susceptibles d'acheter dans cette zone, leur pouvoir d'achat, leurs besoins, leurs habitudes d'achat, de consommation etc. …",
      ],
    },
    {
      heading: "2.5. Etudes d'image de l'entreprise",
      list: [
        "Etude de notoriété : elle porte sur le degré de connaissance de l'entreprise et ses produits.",
        "Etude de l'image : elle porte sur la perception que les gens ont de l'entreprise. Image interne : c'est ce que les travailleurs pensent de leur entreprise. Image externe : c'est la perception de l'entreprise à travers le consommateur, le marché en général.",
      ],
    },
    {
      heading: '2.6. Etudes publicitaires',
      list: [
        "La recherche de concepts ou d'axes (idées) publicitaires.",
        'Le pré-test de la campagne publicitaire.',
        "La mesure de l'efficacité de la publicité : l'étude post-test publicitaire, la mesure d'audience des médias et supports publicitaires.",
      ],
    },
    {
      heading: "3. Typologie d'informations",
      paragraphs: [
        "On caractérise les informations en fonction de leurs sources. L'on distingue généralement deux grands types de sources d'informations : les sources internes ; les sources externes.",
      ],
    },
    {
      heading: "3.1 Les sources d'informations internes",
      paragraphs: [
        "Ce sont des informations disponibles au sein de l'entreprise. De ce fait elles sont pratiques et peu coûteuses. L'on distingue plusieurs types de sources d'informations internes.",
      ],
    },
    {
      heading: '3.1.1 Les statistiques de vente',
      paragraphs: [
        "Montants et évolution du chiffre d'affaires par période (mois, trimestre, année etc...), par région, par type de clientèle, par produit etc. …",
      ],
    },
    {
      heading: '3.1.2 Le fichier client',
      list: [
        "Dans une entreprise de production, le fichier distributeurs permet de connaître la répartition du chiffre d'affaires par circuit de distribution (grandes surfaces, magasins spécialisés etc. …)",
        "Dans une entreprise de distribution, le fichier consommateurs permet de répartir les clients finaux en fonction des caractéristiques sociodémographiques (lieu de résidence, profession etc. …)",
      ],
    },
    {
      heading: '3.1.3 Les rapports de la force de vente',
      paragraphs: [
        "La force de vente constitue pour l'entreprise l'œil et l'oreille les plus sûrs. Ses rapports peuvent comporter des informations sûres :",
      ],
      list: [
        "Les attitudes des distributeurs et des consommateurs à l'égard du produit ;",
        'Les pratiques de la concurrence (campagnes de promotion, prix…)',
      ],
    },
    {
      heading: '3.1.4 Les réclamations et suggestions des clients auprès des services commerciaux',
      paragraphs: ['Elles permettent d\'apprécier :'],
      list: ["l'intérêt pour le produit, la marque ;", 'le degré de satisfaction', "le degré d'implication dans l'achat."],
    },
    {
      heading: '3.1.5 La bibliothèque des études antérieures',
      paragraphs: [
        "Les entreprises conservent généralement les résultats des études de marché et audits marketing qu'elles ont réalisés dans le passé. Il est bon de s'y référer pour comparer les résultats.",
      ],
    },
    {
      heading: "3.2. Les sources d'informations externes",
      paragraphs: ["Il existe des sources d'informations externes secondaires et des sources d'informations externes primaires."],
    },
    {
      heading: "3.2.1. Les sources d'informations externes secondaires",
      paragraphs: [
        "Elles sont également appelées sources d'informations documentaires. Elles ne sont pas secondaires parce qu'elles auraient un intérêt moindre, mais parce qu'il s'agit d'informations regroupées par d'autres organismes pour d'autres motifs.",
        'Exemple :',
      ],
      list: [
        'Organismes publics et parapublics (les bibliothèques, les ministères, les universités, les Grandes écoles…)',
        'Les organismes professionnels (la chambre de commerce, les syndicats professionnels, les associations, les banques…)',
        "Les sociétés d'études privées",
        'Les panels de consommateurs et de distributeurs.',
      ],
    },
    {
      heading: "3.2.2. Les sources d'information externes primaires",
      paragraphs: [
        "Dans la mesure où l'information nécessaire n'aura pu être recueillie complètement à partir des sources internes ou documentaires, l'entreprise doit envisager de commander une étude particulière sur les points à préciser.",
        'Exemple :',
      ],
      list: [
        "L'observation : avec le repérage du comportement des consommateurs ne nécessitant pas la coopération explicite de ceux-ci.",
        "L'expérimentation ou observation du comportement après manipulation d'un des paramètres d'actions commerciales.",
        'Les enquêtes qualitatives et quantitatives.',
      ],
    },
  ],
};
