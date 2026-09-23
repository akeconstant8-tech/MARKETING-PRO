import type { TciChapter } from '../tciTypes';

export const mktChapter3: TciChapter = {
  id: 'mkt1ch3',
  kind: 'chapitre',
  level: 1,
  number: 3,
  title: "Chapitre 2, Leçon 1 : L'environnement de l'entreprise",
  intro: "Objectif pédagogique : A partir d'exemples, analyser l'environnement de l'entreprise.",
  sections: [
    { heading: 'I. Définitions' },
    {
      heading: '1. Le marché',
      paragraphs: [
        "Sur le plan économique, c'est le lieu de rencontre de l'offre et de la demande. Au plan marketing, c'est donc un lieu qui met en rapport des partenaires autour de produits destinés à faire l'objet d'un échange en vue de la satisfaction d'un besoin.",
        "Le marché fait de plus en plus référence à l'ensemble des vendeurs et des acheteurs concernés par l'échange d'un produit. Cette référence peut être faite soit à un type particulier de consommateurs (le marché des étudiants…), soit à une famille particulière de produit (le marché de l'automobile).",
        'Dans tous les cas, du point de vue marketing, un marché existe si les conditions suivantes sont réunies :',
      ],
      list: [
        'Un besoin clairement défini ;',
        'Une demande solvable liée à la satisfaction du besoin ;',
        "Une offre issue d'une entreprise, répondant au besoin exprimé ;",
        "Un prix correspondant à la valeur d'échange du produit offert.",
      ],
    },
    {
      heading: "2. L'environnement",
      paragraphs: [
        "C'est l'ensemble des personnes et des facteurs qui ont ou qui peuvent avoir une influence sur l'entreprise. Cette définition est d'ailleurs celle qu'on peut attribuer au marché dans son sens le plus large.",
      ],
    },
    {
      heading: "II. Analyse de l'environnement",
      paragraphs: ["L'environnement se compose du macro environnement et du micro environnement."],
    },
    {
      heading: '1. Le macro environnement',
      paragraphs: [
        "C'est l'ensemble des facteurs, institutions et forces principales externes qui ont une influence sur l'entreprise. Il se compose de :",
      ],
      list: [
        "L'environnement démographique : il concerne la population dont le responsable marketing étudiera : la taille et l'évolution (tendance) ; la structure et la taille des ménages ; la structure par âge et par sexe ; la mobilité géographique ; le niveau d'éducation.",
        "L'environnement économique : c'est un ensemble de paramètres qui intègrent : le pouvoir d'achat des consommateurs et son évolution (il est fonction des revenus, des prix, de l'épargne et de la disponibilité du crédit) ; la structure de dépenses des ménages.",
        "L'environnement technologique : l'accélération du progrès technique, la réglementation qui en résulte impose à l'entreprise une veille technologique car chaque découverte peut engendrer des opportunités infinies ou des menaces à saisir ou à éviter.",
        "L'environnement politico-légal : la nature des régimes en place, la législation nationale ou communautaire, l'appareil judiciaire et la fiscalité créent parfois de nouvelles opportunités et des contraintes ;",
        "L'environnement socio-culturel : c'est l'impact de la culture, des mass média, des mœurs sur les habitudes de consommation et sur le mode de vie des consommateurs.",
        "L'environnement naturel : il doit être pris en considération avec la détérioration du cadre de vie et le rôle de plus en plus important des groupes de défense de l'environnement. Il concerne : la pénurie de matières premières, que ces ressources soient limitées ou non ; le coût de l'énergie relativement aux ressources limitées ou renouvelables ; la pollution qui impose la recherche et l'utilisation de produits moins polluants et de matières recyclables.",
      ],
    },
    {
      paragraphs: [
        "NB : Le consumérisme : c'est le mouvement général de défense des consommateurs face à la puissance et parfois aux abus des producteurs et des distributeurs. La pression qu'il peut exercer sur l'Etat notamment est à prendre en considération.",
      ],
    },
    {
      heading: '2. Le micro environnement',
      paragraphs: [
        "C'est l'ensemble des partenaires immédiats de l'entreprise. Il s'agit notamment des acteurs que sont :",
      ],
      list: [
        "Les fournisseurs : ils approvisionnent l'entreprise qui doit choisir la meilleure offre qualité / prix et faire en sorte que les relations avec ces fournisseurs soient les plus flexibles possibles afin d'assurer la continuité de l'exploitation.",
        "Les concurrents : ils proposent des produits qui ont pour but de satisfaire les mêmes besoins que ceux de l'entreprise qui se doit de les recenser et d'analyser leur influence sur le marché ainsi que l'évolution de cette influence de manière permanente. Ces deux groupes forment avec l'entreprise les producteurs.",
        "Les distributeurs : ils influencent le choix des clients à travers les produits qu'ils proposent et la confection de l'assortiment de leur point de vente ce qui oblige l'entreprise à avoir de bonnes relations aussi flexibles que possibles pour assurer la distribution de ses produits.",
        "Les prescripteurs : ils influencent le comportement des clients et des consommateurs par les conseils qu'ils leur donnent à cause de leur profession (médecins, professeurs …) ou de leur position dans la société (vedettes, hommes politiques…).",
      ],
    },
    {
      paragraphs: [
        'Les clients ou consommateurs : ils achètent ou utilisent les produits de l\'entreprise. Ils sont constitués de plusieurs groupes :',
      ],
      list: [
        'La population totale (PT) : c\'est l\'ensemble des personnes ou des ménages de la zone objet de l\'étude.',
        "Le marché des non consommateurs (MNC) : ce sont ceux qui ne consomment pas le produit au moment de l'étude. Il se compose des non consommateurs absolus (NCA), qui ne consommeront jamais le produit pour diverses raisons, et des non consommateurs relatifs (NCR), qui pourraient consommer le produit dans l'avenir.",
        "Le marché actuel de la profession (MAP) : c'est l'ensemble de tous ceux qui consomment le produit au moment de l'étude ; il se scinde en le marché actuel de l'entreprise (MAE), ceux qui achètent ou utilisent les produits de l'entreprise étudiée, et le marché actuel de la concurrence (MAC), ceux qui achètent ou utilisent les produits fabriqués par les concurrents de l'entreprise étudiée.",
        "Le marché théorique de la profession (MTP) ou le marché potentiel de la profession (MPP) : c'est l'ensemble des personnes qui consomment actuellement et des personnes qui pourraient consommer le produit objet de l'étude. Le marché potentiel de l'entreprise (MPE) représente quant à lui l'ensemble des clients que peut espérer l'entreprise en additionnant son marché actuel, la part des NCR et celle du MAC qu'elle espère capter.",
      ],
    },
    {
      heading: 'Schéma structurel du marché',
      diagram: {
        width: 700,
        height: 260,
        boxes: [
          { label: 'Population totale', x: 20, y: 20, w: 660, h: 40, emphasis: true },
          { label: 'Marché théorique de la profession', x: 20, y: 90, w: 400, h: 40 },
          { label: 'Non-consommateurs\nabsolus', x: 440, y: 90, w: 240, h: 40 },
          { label: 'Marché actuel de la profession', x: 20, y: 150, w: 260, h: 40 },
          { label: 'Non consommateurs\nrelatifs', x: 300, y: 150, w: 200, h: 40 },
          { label: 'MAC', x: 20, y: 210, w: 130, h: 36 },
          { label: 'MAE', x: 170, y: 210, w: 130, h: 36 },
        ],
        labels: [
          { text: 'Marché potentiel de l\'entreprise', x: 30, y: 250, anchor: 'start' },
        ],
        caption:
          "Schéma structurel du marché : Population totale ⊃ Marché théorique de la profession (+ non-consommateurs absolus) ⊃ Marché actuel de la profession (+ non consommateurs relatifs) = MAC + MAE. Le marché potentiel de l'entreprise additionne MAE, une part du MAC et une part des NCR.",
      },
    },
    {
      heading: '3. Les formules de calcul des différents marchés',
      list: [
        "MAE = le Marché Actuel de l'Entreprise",
        'MAC = le Marché Actuel de la Concurrence',
        'NCR = les Non Consommateurs Relatifs',
        'NCA = Les Non Consommateurs Absolus',
        'MAP = le Marché Actuel de la Profession',
        'MTP = le Marché Théorique de la Profession ou MPP = Marché Potentiel de la Profession ou MTT = Marché Théorique Total',
        "MPE = le Marché potentiel de l'entreprise",
        'Marché des prospects = Non consommateurs relatifs + Clients actuels de la concurrence',
      ],
      formulas: ['MAP = MAE + MAC', 'MTP / MPP / MTT = MAP + NCR = MAE + MAC + NCR', 'MPE = MAE + % MAC + % NCR'],
    },
    {
      heading: "4. Exercice d'application",
      paragraphs: [
        "Après une étude de marché réalisée par une société de fabrication d'eau pure concernant ses activités commerciales nous avons les informations suivantes :",
      ],
      list: [
        'Le marché considéré : une population de 4.000.000 d\'habitants',
        "60% de cette population sont susceptibles de consommer l'eau pure mais 20% d'entre eux sont en situation d'attente.",
        'Le marché concurrentiel représente 15% des consommateurs actuels de l\'eau pure.',
        "L'entreprise, après des actions promotionnelles souhaite récupérer 5% du marché concurrentiel et 10% des non-consommateurs relatifs.",
      ],
    },
    {
      paragraphs: ["Calculez en nombre d'habitants :"],
      list: [
        'Les non-consommateurs absolus',
        'Le marché théorique de la profession',
        'Les non-consommateurs relatifs',
        'Le marché actuel de la profession',
        'Le marché actuel de la concurrence',
        "Le marché actuel de l'entreprise",
        "Le marché potentiel de l'entreprise",
      ],
    },
    {
      heading: "III) L'approche du marché par l'offre",
      paragraphs: [
        "L'offre se caractérise par un ensemble de produits que les producteurs mettent à la disposition des consommateurs sur un marché donné.",
      ],
    },
    {
      heading: "1) La structure de l'offre",
      paragraphs: ["Elle est fonction du nombre d'offreurs :"],
      table: {
        headers: ["Nombre d'offreurs", 'Structure', 'Exemples'],
        rows: [
          ['Un seul', 'Marché monopolistique', 'SODECI, CIE, SOTRA'],
          ['Un petit nombre', 'Marché Oligopolistique', 'Marché de la téléphonie cellulaire en CI'],
          [
            'Un grand nombre de petite taille',
            'Marché atomistique concurrentiel',
            'Le marché des cabines cellulaires, le marché des fruits',
          ],
        ],
      },
    },
    {
      heading: 'IV) Les différentes actions face à la situation du marché',
    },
    {
      heading: '1. Les différentes stratégies',
      list: [
        'La stratégie de culture intensive est l\'ensemble des actions consistant à faire consommer davantage les consommateurs actuels.',
        'La stratégie de lutte concurrentielle est l\'ensemble des actions destinées à aspirer tout ou une partie de la clientèle.',
        "La stratégie d'élargissement du marché est l'ensemble des actions visant à conquérir les non consommateurs actuels outre ceux de la concurrence.",
      ],
    },
    {
      heading: '2. Mise en œuvre',
      paragraphs: [
        "La mise en œuvre de ces différentes stratégies fait appel à un certain nombre d'actions concrètes auprès des personnes ciblées par l'entreprise.",
        "Pour une stratégie de culture intensive, il faut une meilleure implantation dans les différents points de vente. Une promotion auprès des distributeurs et des consommateurs par des jeux et concours avec des bons de réduction et des cadeaux.",
        "Pour une stratégie de lutte concurrentielle il faut des actions auprès des distributeurs par un bon positionnement du produit et des actions promotionnelles auprès des consommateurs.",
        "Pour une stratégie d'élargissement du marché il faut une publicité auprès de la demande primaire et mener des actions permettant de montrer les utilisations possibles du produit.",
      ],
    },
  ],
};
