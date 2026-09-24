import type { TciChapter } from '../tciTypes';

export const mkt2Chapter6: TciChapter = {
  id: 'mkt2ch6',
  kind: 'chapitre',
  level: 2,
  number: 6,
  title: 'Deuxième partie, Chapitre I : La fonction commerciale',
  intro:
    "L'élaboration d'un produit, la fixation d'un bon et juste prix, le choix du meilleur circuit de distribution, le choix de la meilleure politique de communication, n'assurent pas à eux seuls un bon succès commercial.",
  sections: [
    {
      paragraphs: [
        "Il est également nécessaire d'attirer l'attention des consommateurs potentiels sur l'existence et les caractéristiques du produit. Pour cela, l'entreprise dispose de différents moyens dont le plus important est la force de vente ou équipe de vente.",
        "L'efficacité de la force de vente joue presque toujours un rôle essentiel dans le succès ou l'échec de l'entreprise. La meilleure stratégie marketing conçue par l'entreprise risque fort d'échouer si elle n'est pas soutenue sur le terrain par des vendeurs motivés, performants, dynamiques et compétents. Il en résulte que le management constitue pour les entreprises un enjeu majeur dans leur organisation et leur succès.",
      ],
    },
    { heading: '1- Définitions' },
    {
      list: [
        "La Force de Vente : de façon liminaire, définissons la force de vente comme étant l'ensemble des personnes qui vendent ou font vendre les produits de l'entreprise au moyen des contacts directs avec les clients potentiels (ou réels), avec les distributeurs ou avec les prescripteurs.",
        "Le management : le management est l'art de gérer, d'administrer, de diriger un groupe d'individus.",
        "Le management de la force de vente : le management de la force de vente est pour ainsi dire la gestion, c'est-à-dire la planification, l'organisation, la direction, l'administration, l'animation, la stimulation et le contrôle de l'équipe commerciale.",
      ],
    },
    {
      heading: "2- L'organigramme de l'entreprise",
      paragraphs: [
        "Un organigramme est une représentation schématique de la structure de l'entreprise dans laquelle apparaissent les grandes lignes de la répartition des responsabilités et le nombre de niveaux hiérarchiques.",
      ],
    },
    {
      heading: "a) Quelques fonctions de l'entreprise",
      list: [
        "Fonction de Direction : la Direction est l'organe créé pour diriger l'entreprise. Les tâches de direction sont : prévoir, fixer les objectifs, conduire les moyens, contrôler l'extension. Tout ou une partie de ces tâches peut être déléguée. La société est dirigée en général par un PDG ou DG.",
        "Fonction Financière : cette fonction a pour rôle la mise en œuvre des capitaux. Elle s'assure de collecter les fonds, de les affecter à des emplois et de les gérer. Elle étudie avec la Direction Générale les projets d'investissement et les différentes ressources permettant de les couvrir. Elle a en outre en charge : la gestion de la trésorerie, l'établissement des budgets de trésorerie, le choix des fonds de financement à court terme, la relation financière avec les clients.",
      ],
    },
    {
      paragraphs: [
        "Dans les petites entreprises, les comptables se limitent à l'enregistrement des opérations et des documents de synthèse (bilan, compte de résultat). Le chef d'entreprise conserve quant à lui l'intégralité de la fonction financière. Dès que l'entreprise atteint une certaine dimension, le chef comptable devient responsable des documents financiers.",
        "Dans les grandes entreprises, il existe généralement une direction appelée DAF qui regroupe les services financiers, les services comptables et le service informatique.",
      ],
      list: [
        "Fonction Personnelle : elle a pour tâche : l'embauche, la formation et le perfectionnement, la rémunération et les avantages sociaux, la promotion, les relations humaines de travail : communication, discipline.",
        "Fonction approvisionnement : elle a pour mission de gérer les décisions, passer les commandes, tenir le dossier statistique, gérer les stocks et les magasins, mettre les articles à la disposition des utilisateurs.",
        "Fonction Technique ou de Production : elle a pour mission : le choix des techniques de production, la gestion de la production, le contrôle de la production.",
        "Fonction commerciale : cette fonction a deux principaux objectifs : la connaissance de l'environnement de l'entreprise par l'étude de marché (connaissance des consommateurs, la législation, la concurrence….), l'écoulement effectif des produits. Il s'agit d'effectuer toutes les opérations de communication (publicité, promotion des ventes, …) assurer toutes les opérations de vente (prospection, négociation, suivi, recueil des informations) tout en assurant l'animation, la stimulation, le contrôle de la force de vente. Etc.",
      ],
    },
    {
      paragraphs: [
        "NB : Toutes les fonctions sont imbriquées les unes dans les autres. Il n'y a pas de fonction primordiale par rapport aux autres. Elles sont complémentaires. Cependant, la fonction commerciale de par son rôle qu'elle joue (vente des produits) conditionne la vie de l'entreprise.",
      ],
    },
    {
      heading: 'b) Place de la fonction commerciale',
      paragraphs: [
        "La fonction commerciale est au sein de l'entreprise le seul pourvoyeur de ressources. De par les rapports qu'elle entretient avec les autres fonctions, elle occupe une place prépondérante au sein de l'entreprise. Cette place a beaucoup évolué en fonction du niveau d'évolution de l'entreprise, selon les étapes suivantes :",
      ],
      list: [
        "1ère phase : l'entreprise à orientation production. La demande étant supérieure à l'offre, la fonction commerciale va se limiter à l'administration des ventes et à l'écoulement de la production. On a dans ce cas un simple service commercial rattaché à la fonction administrative et financière.",
        "2ème phase : l'entreprise à orientation vente. La demande étant égale à l'offre, la vente devient une priorité : une direction des ventes rattachée à la direction générale va gérer le réseau des ventes, assurer la distribution, faire la publicité et les études de marché qui font leur apparition.",
        "3ème phase : l'entreprise à orientation marketing. La concurrence devenant de plus en plus acerbe, l'entreprise va prendre en compte les besoins des consommateurs dans son processus de production. Dès lors une direction marketing verra le jour et sera rattachée à la direction générale.",
      ],
    },
    {
      paragraphs: ["Dans l'organigramme d'une entreprise, deux positions sont possibles pour la fonction commerciale."],
    },
    {
      heading: 'La fonction commerciale en position opérationnelle',
      paragraphs: ['Dans une fonction opérationnelle, toute la fonction commerciale dépend de la même autorité.'],
      diagram: {
        width: 640,
        height: 190,
        boxes: [
          { label: 'Direction Générale', x: 220, y: 10, w: 200, h: 44, emphasis: true },
          { label: 'Direction production', x: 10, y: 120, w: 190, h: 50 },
          { label: 'Direction commerciale', x: 225, y: 120, w: 190, h: 50 },
          { label: 'Direction personnel', x: 440, y: 120, w: 190, h: 50 },
        ],
        arrows: [
          { points: [[320, 54], [105, 120]], noHead: true },
          { points: [[320, 54], [320, 120]], noHead: true },
          { points: [[320, 54], [535, 120]], noHead: true },
        ],
        caption: 'Fonction commerciale en position opérationnelle',
      },
      list: [
        "La direction commerciale contrôle l'ensemble de la fonction commerciale dans l'entreprise.",
        'Avantages : les rôles et les responsabilités sont clairement définis ; les décisions commerciales peuvent être prises rapidement.',
        "Inconvénients : la direction commerciale ne peut influencer les autres fonctions.",
      ],
    },
    {
      heading: 'La fonction commerciale en position fonctionnelle',
      paragraphs: [
        "Dans une structure fonctionnelle, le marketing peut influencer toutes les fonctions de l'entreprise.",
        "Lorsque le marketing est en position staff, il est appelé service marketing ou encore service étude qui a alors un rôle de conseil mais pas d'autorité hiérarchique.",
      ],
      diagram: {
        width: 640,
        height: 220,
        boxes: [
          { label: 'Direction Générale', x: 200, y: 10, w: 200, h: 44, emphasis: true },
          { label: 'Direction Marketing', x: 440, y: 60, w: 190, h: 40 },
          { label: 'Direction production', x: 10, y: 150, w: 190, h: 50 },
          { label: 'Direction commerciale', x: 225, y: 150, w: 190, h: 50 },
          { label: 'Direction personnel', x: 440, y: 150, w: 190, h: 50 },
        ],
        arrows: [
          { points: [[300, 54], [105, 150]], noHead: true },
          { points: [[300, 54], [320, 150]], noHead: true },
          { points: [[300, 54], [535, 150]], noHead: true },
          { points: [[300, 80], [440, 80]], noHead: true },
        ],
        caption: 'Fonction commerciale en position fonctionnelle (marketing en position staff)',
      },
      list: ["Avantages : le marketing peut influencer les autres fonctions de l'entreprise.", 'Inconvénients : les décisions sont plus longues à prendre.'],
    },
    {
      paragraphs: [
        "Cerner les contours du management de la force de vente revient successivement à circonscrire le cadre de l'activité commerciale au sein de l'organisation qu'est l'entreprise. A mettre en place une organisation et une gestion de la force de vente et enfin à pouvoir gérer l'activité des vendeurs.",
      ],
    },
  ],
};
