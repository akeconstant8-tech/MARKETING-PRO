import type { TciChapter } from '../tciTypes';

export const mktChapter2: TciChapter = {
  id: 'mkt1ch2',
  kind: 'chapitre',
  level: 1,
  number: 2,
  title: "Chapitre 1, Leçon 2 : L'importance du marketing",
  intro:
    "Objectif : Expliquer l'importance du marketing selon sa place en entreprise et ses domaines d'application.",
  sections: [
    {
      heading: 'I. La place du marketing',
      paragraphs: [
        "Le marketing a évolué au sein de l'entreprise au niveau de sa position fonctionnelle :",
      ],
      list: [
        "le marketing est au départ l'une des fonctions principales au même titre que les finances, les ressources humaines ou la production ;",
        "le marketing devient par la suite la fonction la plus importante de l'entreprise ;",
        "le marketing est enfin la fonction centrale de l'entreprise.",
      ],
    },
    {
      paragraphs: [
        "Dans cette dernière configuration, le marketing devient primordial pour l'entreprise. Le client y est au centre des réflexions et le marketing, la fonction intégrative. Le marketing est directement rattaché au centre de décisions dans les grandes entreprises. C'est une fonction noble qui devient un moteur pour entraîner les autres fonctions vers la réussite ou l'échec.",
        "Les résultats financiers des entreprises dépendent souvent de leurs capacités en marketing ; ainsi, toutes les autres fonctions ont peu d'utilité si la demande pour les produits et services de l'entreprise est insuffisante.",
      ],
    },
    {
      heading: "II. Les domaines d'application du marketing",
      paragraphs: [
        "Le Marketing est resté longtemps associé aux problèmes de commercialisation des produits de grande consommation. Mais sa démarche et ses techniques peuvent s'appliquer à de nombreux autres domaines relevant aussi bien des secteurs marchands que non marchands.",
        "En effet le Marketing est avant tout axé sur la notion d'échange. Toute organisation amenée à avoir des échanges avec des publics et désirant les gérer, est concernée par la démarche Marketing moyennant les adaptations nécessaires.",
        'Le marketing est une discipline très étendue qui porte sur des domaines bien connus :',
      ],
    },
    {
      heading: '1) Le marketing de base ou marketing des biens de grande consommation',
      paragraphs: [
        "Ce type de marketing s'applique aux produits de consommation courante tels que les biens alimentaires et les produits d'entretien. L'objectif principal est de se démarquer de la concurrence et de viser un positionnement particulier.",
      ],
    },
    {
      heading: '2) Le marketing des services',
      paragraphs: [
        "Le domaine du marketing des services est particulier car les services sont immatériels et périssables. On ne peut les stocker ni les toucher. Ce type de marketing est caractérisé par des relations humaines directes qui s'établissent entre le personnel de l'entreprise et les clients.",
      ],
    },
    {
      heading: '3) Le marketing industriel ou marketing B to B (Business to Business)',
      paragraphs: [
        "Ce type de marketing est relatif aux biens industriels commercialisés par certaines entreprises à d'autres entreprises. Il s'agit le plus souvent de produits complexes nécessitant un processus d'achat plus long et réfléchi. Le domaine du marketing des biens industriels est particulier car plusieurs individus interviennent dans le processus d'achat, de plus les clients sont moins nombreux donc faciles à suivre.",
      ],
    },
    {
      heading: '4) Le marketing politique',
      paragraphs: [
        "Il s'applique le plus souvent dans le domaine des élections. Le recours à ce type de marketing se manifeste le plus durant les campagnes électorales où l'on met en œuvre les techniques de sondage et les stratégies de communication. Les techniques du marketing politique sont relatives aux prévisions électorales, à la segmentation de l'électorat et à des stratégies de communication.",
      ],
    },
    {
      heading: '5) Le marketing social',
      paragraphs: [
        "Il a pour objet de connaître et de comprendre les comportements sociaux de la population, de prévoir l'évolution de ses comportements afin de prendre des décisions cohérentes.",
      ],
    },
    {
      heading: '6) Le marketing international',
      paragraphs: [
        "Il peut être défini comme l'action commerciale à distance. Le concept de distance est pris au sens large car il s'agit de la distance géographique, institutionnelle, culturelle, ainsi ce marketing consiste à développer sur des marchés extérieurs ou étrangers. Ce marketing joue un rôle de plus en plus important car l'un des défis économiques est la modification de la structure des échanges commerciaux.",
      ],
    },
    {
      heading: 'III. La démarche marketing',
      paragraphs: [
        "L'entreprise doit nécessairement connaitre et analyser les attentes des consommateurs avant de mettre au point ses produits et déterminer les conditions de leur commercialisation. La démarche marketing est sous-entendue par deux préoccupations principales : connaitre et agir.",
        'Le schéma suivant reproduit ses principales étapes :',
      ],
      diagram: {
        width: 700,
        height: 460,
        boxes: [
          { label: 'Etude du marché', x: 190, y: 20, w: 320, h: 46 },
          { label: 'Détermination des besoins', x: 190, y: 100, w: 320, h: 46 },
          { label: "Sélection d'une cible", x: 190, y: 180, w: 320, h: 46 },
          { label: 'Détermination du marketing mix', x: 190, y: 260, w: 320, h: 46 },
          { label: 'Produit', x: 20, y: 350, w: 130, h: 44 },
          { label: 'Prix', x: 190, y: 350, w: 130, h: 44 },
          { label: 'Distribution', x: 360, y: 350, w: 130, h: 44 },
          { label: 'Communication', x: 530, y: 350, w: 150, h: 44 },
          { label: 'Evaluation des résultats', x: 190, y: 420, w: 320, h: 44, emphasis: true },
        ],
        arrows: [
          { points: [[350, 66], [350, 100]] },
          { points: [[350, 146], [350, 180]] },
          { points: [[350, 226], [350, 260]] },
          { points: [[280, 306], [85, 350]] },
          { points: [[350, 306], [255, 350]] },
          { points: [[380, 306], [425, 350]] },
          { points: [[420, 306], [605, 350]] },
          { points: [[350, 394], [350, 420]] },
          { points: [[680, 372], [690, 372], [690, 43], [510, 43]], dashed: true, noHead: false },
          { points: [[10, 372], [0, 372], [0, 123], [190, 123]], dashed: true, noHead: false },
          { points: [[680, 440], [700, 440], [700, 202], [510, 202]], dashed: true, noHead: false },
        ],
        caption:
          "La démarche marketing : Etude du marché → Détermination des besoins → Sélection d'une cible → Détermination du marketing mix (Produit, Prix, Distribution, Communication) → Evaluation des résultats, avec des boucles de correction (lignes pointillées) vers les étapes précédentes.",
      },
    },
    {
      heading: 'Commentaire',
      paragraphs: [
        "Le point de départ de cette démarche est l'étude des besoins et des attentes des consommateurs potentiels.",
        "Ensuite, parce qu'elle ne peut satisfaire la totalité des désirs des individus, l'entreprise est amenée à diviser ou segmenter le marché, afin de sélectionner des cibles plus précises.",
        "Pour chaque cible retenue, l'entreprise définit alors quatre paramètres dont elle a la maîtrise et qui constituent le marketing-mix : le produit, le prix, la distribution et la communication. L'évaluation des résultats obtenus permet par la suite de corriger les erreurs observées aux différents niveaux de la démarche.",
      ],
    },
  ],
};
