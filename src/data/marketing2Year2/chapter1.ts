import type { TciChapter } from '../tciTypes';

export const mkt2Chapter1: TciChapter = {
  id: 'mkt2ch1',
  kind: 'chapitre',
  level: 2,
  number: 1,
  title: "Première partie, Chapitre I : L'environnement international",
  intro:
    "On ne peut concevoir l'entreprise comme une entité isolée du milieu dans lequel elle agit. L'entreprise doit surveiller en permanence son environnement car d'une part, elle s'intègre dans cet environnement et, d'autre part, elle agit sur ce même environnement.",
  sections: [
    {
      paragraphs: [
        "L'entreprise peut être influencée par son environnement de manière positive (opportunités environnementales) ou de manière négative (contraintes environnementales).",
        "Elle doit surveiller de manière permanente l'évolution des marchés, l'évolution de la concurrence et des technologies. Il s'agit également d'identifier les risques de « cassures » technologiques (apparition d'innovations majeures) ou structurelles (nouveaux lobbies, nouvelle réglementation, influence grandissante des organisations de consommateurs, etc.).",
      ],
    },
    { heading: '1- Définitions' },
    {
      paragraphs: [
        "1-1. Le commerce international : c'est l'ensemble des échanges de biens et services entre agents qui résident sur des territoires économiques différents.",
        "1-2. L'environnement : il peut être présenté comme étant « l'ensemble des conditions naturelles et culturelles susceptibles d'agir sur les organismes vivants et les activités humaines ».",
      ],
    },
    {
      heading: "2- Les caractéristiques de l'environnement des échanges",
      paragraphs: ["L'analyse de l'environnement par l'entreprise répond à un double objectif :"],
      list: [
        "l'évolution des différents éléments susceptibles d'affecter son activité.",
        "l'identification des opportunités ou des menaces environnementales.",
      ],
      diagram: {
        width: 720,
        height: 300,
        boxes: [
          { label: 'Environnement\nEconomique Politique', x: 10, y: 20, w: 200, h: 60 },
          { label: 'Environnement\nSocial', x: 10, y: 120, w: 200, h: 60 },
          { label: 'Environnement\nInstitutionnel et politique', x: 10, y: 220, w: 200, h: 60 },
          { label: 'ENTREPRISE', x: 290, y: 120, w: 140, h: 60, emphasis: true },
          { label: 'Environnement\nTechnologique', x: 510, y: 20, w: 200, h: 60 },
          { label: 'Environnement\nDémographique', x: 510, y: 120, w: 200, h: 60 },
          { label: 'Environnement\nSocio-culturel', x: 510, y: 220, w: 200, h: 60 },
        ],
        arrows: [
          { points: [[210, 50], [290, 140]] },
          { points: [[210, 150], [290, 150]] },
          { points: [[210, 250], [290, 165]] },
          { points: [[510, 50], [430, 140]] },
          { points: [[510, 150], [430, 150]] },
          { points: [[510, 250], [430, 165]] },
        ],
        caption: "Les composantes de l'environnement agissent sur l'entreprise.",
      },
    },
    {
      paragraphs: [
        "Les composantes de l'environnement sont donc aussi bien économiques que politiques, socioculturelles, géographiques, démographiques et technologiques.",
      ],
      list: [
        "L'environnement économique fait apparaître une évolution du capitalisme moderne et fournit des informations quant au revenu, au pouvoir d'achat des consommateurs, à la structure et à l'évolution de la consommation. De même, il renseigne sur la politique de l'Etat et des banques en matière de crédit, la fiscalité, les minima salariaux, les coûts des approvisionnements… il faut observer comment l'état règlemente l'activité économique en encadrant l'emploi, la concurrence, en adoptant une politique plus ou moins restrictive au niveau du crédit… Car pour beaucoup d'entreprises, cet interventionnisme étatique est pesant par les contraintes qu'il impose.",
        "L'environnement politique : Il est bien évident que les entreprises sont étroitement dépendantes des contraintes politiques soit qu'elles résultent du changement de couleur politique du gouvernement, soit qu'elles résultent de modifications liées aux nationalisations, privatisations, etc. Il s'agit d'identifier les textes législatifs, réglementaires ou administratifs, les normes sanitaires, de sécurité, anti-pollution… qui sont susceptibles de constituer une contrainte ou au contraire une opportunité pour l'entreprise.",
        "L'environnement socioculturel : Il s'agit ici de l'évolution du style de vie des consommateurs ainsi que des valeurs sociales, des goûts et des besoins des consommateurs étrangers qu'il faut identifier.",
        "L'environnement technologique fait l'objet d'une surveillance permanente. L'innovation est devenue une composante essentielle de la compétitivité de l'entreprise et on peut même dire, dans une certaine mesure, que l'innovation est la forme la plus « cruelle » de concurrence dans la mesure où elle peut aboutir à la disparition de certaines entreprises. Elle doit donc identifier les innovations technologiques concernant les produits, les processus de production, de commercialisation, de distribution, de conservation… qui, dans son métier, sont susceptibles de constituer des sources de développement (innovations produits, amélioration de la qualité, réduction des coûts…) ou au contraire des menaces (produits obsolètes…). Les investissements en « veille technologique » et recherche-développement doivent être aussi importants dans le cadre de la mise en œuvre de stratégies à moyen et long terme destinées à assurer la pérennité de l'entreprise.",
        "L'environnement géographique se caractérise par la nécessité d'appréhender un certain nombre d'éléments pour permettre à l'entreprise de procéder à des choix de localisation. Quelles sont les sources d'énergie disponibles ? Quels sont les moyens de communication ? Quelle peut être l'influence du climat ? Etc.…",
        "L'environnement démographique correspond aux caractéristiques de la population (localisation, moyenne d'âge, mouvements migratoires, taille, distribution géographique, densité, mobilité, répartition par âge ou par sexe, taux de natalité, de nuptialité, de décès…).",
      ],
    },
    {
      paragraphs: [
        "En bref, les entreprises s'insèrent dans leur milieu et le façonnent. Pour minimiser les contraintes environnementales, les entreprises entretiennent entre elles des relations variées – d'une part, des relations de complémentarité, faites d'associations ou de dominations peuvent s'instaurer entre elles.",
      ],
    },
  ],
};
