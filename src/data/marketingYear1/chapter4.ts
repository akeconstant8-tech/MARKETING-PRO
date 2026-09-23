import type { TciChapter } from '../tciTypes';

export const mktChapter4: TciChapter = {
  id: 'mkt1ch4',
  kind: 'chapitre',
  level: 1,
  number: 4,
  title: "Chapitre 2, Leçon 2 : Les indicateurs de performance du marché",
  intro: "Objectif pédagogique : A partir d'exemples, calculer les indicateurs de performance d'un marché.",
  sections: [
    {
      heading: 'I. La part de marché (PM) (globale ou absolue)',
      paragraphs: [
        "Il s'agit de déterminer la part que détient l'entreprise étudiée dans le chiffre d'affaires global de la profession (PM en valeur) ou encore par rapport au marché actuel de la profession (PM en volume), à une date ou une période donnée.",
      ],
      formulas: [
        'PM (en valeur) = (CAE ÷ CAG) × 100',
        "PM (en volume) = (Vente de l'entreprise ÷ Vente totale du secteur) × 100",
        "PM (en volume) = (Marché actuel de l'entreprise ÷ Marché Actuel de la Profession) × 100",
      ],
    },
    {
      heading: 'II. La part de marché relative (PMR)',
      paragraphs: [
        "C'est la part du chiffre d'affaires (ou du marché actuel) de l'entreprise étudiée, relativement au chiffre d'affaires (ou au marché actuel) de son principal concurrent (leader ou challenger). Elle détermine donc le poids relatif de l'entreprise par rapport au leader ou à son challenger (si l'entreprise est leader).",
      ],
      formulas: ['PMR = CA entreprise ÷ CA principal concurrent', 'PMR = PDM entreprise ÷ PDM principal concurrent'],
    },
    {
      heading: 'Attention',
      list: [
        "Si la PMR > 1 alors l'entreprise détient un avantage compétitif ; elle est le leader de la profession ;",
        'Si la PMR = 1 alors la rivalité entre les deux entreprises est équitable ; la situation est celle de co-leadership.',
        "Si la PDMR < 1 alors l'entreprise subit un handicap concurrentiel.",
      ],
    },
    {
      heading: 'Application',
      paragraphs: [
        'Le tableau ci-dessous vous donne les ventes réalisées par les entreprises d\'un secteur d\'activité donné en millions de francs.',
      ],
      table: {
        headers: ['', '2011', '2012', '2013', '2014', '2015'],
        rows: [
          ['A', '250', '265', '285', '315', '350'],
          ['B', '85', '115', '125', '130', '180'],
          ['C', '475', '482', '435', '458', '495'],
        ],
      },
    },
    {
      paragraphs: ['Travail à faire :'],
      list: [
        "1) Calculer d'année en année la part de marché de chaque entreprise. Faites un commentaire.",
        "2) Calculer d'année en année la part de marché relative de chaque entreprise.",
      ],
    },
    {
      heading: "III. Le taux de pénétration de l'entreprise (TP)",
      paragraphs: [
        "Il s'agit du marché actuel occupé par l'entreprise rapporté au marché potentiel de la profession ; il permet de voir si l'entreprise dispose d'une marge de manœuvre.",
      ],
      formulas: [
        'TP = (MAE ÷ MTP) × 100',
        'Taux d\'équipement TE = (Nombre de produit en service ÷ Ensemble des consommateurs potentiels) × 100',
      ],
    },
    {
      heading: 'IV. Le taux de saturation du marché (TS)',
      paragraphs: [
        "C'est le rapport du marché actuel de la profession à son marché potentiel pour apprécier la marge de manœuvre globale pour toutes les entreprises de la profession relativement au marché.",
      ],
      formulas: ['TS = (MAP ÷ MTP) × 100'],
    },
    {
      heading: "V. Le taux de croissance ou taux d'évolution (TC/TE)",
      paragraphs: [
        "Ce ratio donne des indications sur le sens et l'ampleur de la croissance de l'entreprise d'une année à l'autre.",
      ],
      formulas: ['TC = [(CAn − CAn-1) ÷ CAn-1] × 100'],
    },
    {
      heading: 'Application',
      paragraphs: [
        "Une entreprise fabrique et commercialise du savon liquide, elle exerce dans le district d'Abidjan qui compte environ 6.500.000 habitants. 25% de cette population, pour des raisons d'éthique et autres n'utiliseront pas de savons liquides. Parmi ceux susceptibles de les consommer seulement 45% les utilisent. Cette entreprise détient 7,5% du marché de la profession.",
        'Travail à faire :',
      ],
      list: [
        'Déterminer le nombre de non consommateurs absolus et de non consommateurs relatifs.',
        "Calculer en nombre d'habitants le marché actuel de la profession, le marché actuel de l'entreprise et celui de la concurrence.",
        "Calculez le taux de pénétration de l'entreprise et le taux de saturation du marché.",
      ],
    },
    {
      heading: "VI. Le taux de croissance moyen ou taux moyen d'évolution (TCM)",
      paragraphs: [
        "C'est le taux qui représente, sur une hypothèse de croissance linéaire, l'évolution moyenne de l'entreprise sur une période donnée.",
      ],
    },
    {
      heading: 'Application',
      paragraphs: [
        'Le tableau ci-dessous vous donne les ventes réalisées par la FCGE sur les cinq dernières années :',
      ],
      table: {
        headers: ['Années', '2010', '2011', '2012', '2013', '2014'],
        rows: [['Ventes en millions de FCFA', '720', '743', '708', '680', '785']],
      },
    },
    {
      paragraphs: ['Travail à faire :'],
      list: [
        "1) Calculer le taux de croissance d'année en année.",
        "2) Calculer le taux d'évolution moyen.",
        "3) Quelle analyse faites-vous de l'évolution des ventes ?",
        "4) A partir du taux d'évolution moyen, faites une prévision des ventes de 2015 et 2019.",
      ],
    },
  ],
};
