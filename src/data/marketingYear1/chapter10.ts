import type { TciChapter } from '../tciTypes';

export const mktChapter10: TciChapter = {
  id: 'mkt1ch10',
  kind: 'chapitre',
  level: 1,
  number: 10,
  title: 'Troisième partie, Chapitre 3 : La distribution',
  intro: 'Objectif : Identifier les différentes fonctions de la distribution.',
  sections: [
    {
      heading: 'I. Définition',
      paragraphs: [
        "Distribuer les produits c'est les amener au bon endroit, en quantité suffisante, avec le choix requis, au bon moment, et avec les services nécessaires à leur vente, à leur consommation, et le cas échéant, à leur entretien.",
        'D\'autres termes doivent être définis :',
      ],
      table: {
        headers: ['Terme', 'Définition', 'Exemples'],
        rows: [
          [
            'Canal',
            "C'est l'ensemble des intermédiaires ayant la même spécialisation. Un canal se caractérise par sa longueur (nombre de stades de distribution).",
            'Canal des GMS, Canal de la vente par correspondance, Canal des pharmacies…',
          ],
          [
            'Circuit',
            "C'est l'ensemble des canaux de distribution empruntés par le produit pour aller du producteur au consommateur.",
            'Le stylo BIC est vendu dans les GMS, dans les papeteries, tabac, en VPC, etc.…',
          ],
          [
            'Réseau',
            "C'est l'ensemble des personnes physiques ou morales qui concourent à la vente d'un bien ou d'un service entre le producteur et le consommateur.",
            'Le réseau RENAULT comprend plusieurs concessionnaires',
          ],
        ],
      },
    },
    {
      paragraphs: [
        'Il faut noter que le réseau de vente est composé de la force de vente (réseau interne ou direct) et des revendeurs (réseau de vente externe). Lorsqu\'on lui adjoint les prestations de service on a le réseau de distribution.',
      ],
    },
    { heading: 'II. Les types de circuits' },
    {
      heading: '1) Le circuit direct ou ultra court',
      paragraphs: [
        "Il n'y a aucun intermédiaire entre le producteur et le consommateur. Ce mode est pratiqué lorsqu'on cherche à contrôler complètement la distribution de ses produits :",
      ],
      diagram: {
        width: 600,
        height: 100,
        boxes: [
          { label: 'PRODUCTEUR', x: 40, y: 30, w: 200, h: 44 },
          { label: 'CONSOMMATEUR', x: 360, y: 30, w: 200, h: 44 },
        ],
        arrows: [{ points: [[240, 52], [360, 52]] }],
        caption: 'Circuit direct : Producteur → Consommateur (aucun intermédiaire).',
      },
    },
    {
      table: {
        headers: ['Avantages', 'Inconvénients'],
        rows: [
          [
            "Connaissance approfondie des besoins de la clientèle cible.\nService à la carte pour les clients\nGain de la marge des intermédiaires",
            'Organisation et gestion très lourde des vendeurs\nStockage très important\nNécessite une capacité financière importante\nNécessite de connaitre la distribution',
          ],
        ],
      },
    },
    {
      heading: '2) Le circuit court',
      paragraphs: [
        "Il est défini par la présence d'un seul intermédiaire entre le producteur et le consommateur.",
      ],
      diagram: {
        width: 700,
        height: 100,
        boxes: [
          { label: 'PRODUCTEUR', x: 20, y: 30, w: 180, h: 44 },
          { label: 'DETAILLANT', x: 260, y: 30, w: 180, h: 44 },
          { label: 'CONSOMMATEUR', x: 500, y: 30, w: 180, h: 44 },
        ],
        arrows: [
          { points: [[200, 52], [260, 52]] },
          { points: [[440, 52], [500, 52]] },
        ],
        caption: 'Circuit court : Producteur → Détaillant → Consommateur (un seul intermédiaire).',
      },
    },
    {
      table: {
        headers: ['Avantages', 'Inconvénients'],
        rows: [
          [
            "Economie de la marge du grossiste\nBons services après-vente et produits personnalisés\nCroissance de la notoriété et de l'implantation géographique en cas de franchise",
            'Rentabilité douteuse ou insolvabilité de certains détaillants\nNécessité d\'actions promotionnelles vers le consommateur\nStockage très important\nAide à la gestion et à l\'assistance en cas de franchise',
          ],
        ],
      },
    },
    {
      heading: '3) Le circuit long',
      paragraphs: [
        "Il est caractérisé par la présence d'au moins deux niveaux d'intermédiaires.",
      ],
      diagram: {
        width: 700,
        height: 100,
        boxes: [
          { label: 'PRODUCTEUR', x: 10, y: 30, w: 150, h: 44 },
          { label: 'GROSSISTE', x: 195, y: 30, w: 150, h: 44 },
          { label: 'DETAILLANT', x: 380, y: 30, w: 150, h: 44 },
          { label: 'CONSOMMATEUR', x: 555, y: 30, w: 140, h: 44 },
        ],
        arrows: [
          { points: [[160, 52], [195, 52]] },
          { points: [[345, 52], [380, 52]] },
          { points: [[530, 52], [555, 52]] },
        ],
        caption: 'Circuit long : Producteur → Grossiste → Détaillant → Consommateur (au moins deux niveaux d\'intermédiaires).',
      },
    },
    {
      table: {
        headers: ['Avantages', 'Inconvénients'],
        rows: [
          [
            'Réduction de la force de vente\nCouverture géographique plus dense\nRégulation des ventes grâce au stockage des intermédiaires\nDiminution des frais de facturation, de transport et de stockage',
            "Risque de constitution d'un écran avec le marché cible\nPerte des contacts avec les détaillants et dépendance vis-à-vis des grossistes\nContrôle plus difficile\nNécessite de promouvoir les produits auprès des intermédiaires.",
          ],
        ],
      },
    },
    {
      heading: '4. Circuit long associé',
      list: [
        'Producteur → Chaînes volontaires (Grossiste + détaillant) → Consommateur',
        "Producteur → Groupements d'achats de détaillants → Consommateur",
        'Producteur → Réseau franchisé → Consommateur',
      ],
    },
    {
      heading: '5. Circuit intégré',
      paragraphs: [
        'Producteur → Centrale d\'achats + réseau grandes distributions → Consommateur.',
        'Exemple : Grands magasins, grandes chaînes de distribution.',
      ],
    },
    {
      heading: 'III. Les fonctions de la distribution',
    },
    {
      heading: 'Les fonctions traditionnelles de distribution (fonction matérielle)',
      list: [
        "L'achat au producteur et à l'importateur ;",
        'Le transport et la manutention des marchandises des lieux de production aux lieux de consommation ;',
        'Le fractionnement des quantités importantes fabriquées par le producteur en ensembles plus petits adaptés au besoin du consommateur ;',
        'La mise à disposition des produits à la clientèle finale dans des points de vente ;',
        'Le stockage des produits ;',
        'Le financement des stocks et la prise en charge du risque sur stocks (le vol, le manque d\'aération) ;',
        'Les tâches administratives diverses (la facturation, le contrôle de livraison).',
      ],
    },
    {
      paragraphs: [
        "La distribution doit donc résoudre des problèmes de lieu (acheminement entre les lieux de production et de consommation), de temps (dates de production différentes des dates de consommation), d'assortiment (choix des produits présents dans les lieux de vente), de quantité (distorsion entre quantités produites et quantités consommées).",
      ],
    },
    {
      heading: 'La fonction de gros',
      paragraphs: [
        "Le commerce de gros regroupe toutes les entreprises dont l'activité principale est l'achat de marchandises en vue de leur revente à des détaillants, des industries, des commerçants, des institutions ou d'autres grossistes. Ainsi, il est possible de répartir des lots de produits achetés à bon prix, en plus petites quantités destinées à la vente.",
      ],
    },
    {
      heading: 'La fonction de détail',
      paragraphs: [
        "Le commerce de détail comprend toutes les activités reliées à la vente de produits ou de services directement aux consommateurs pour leur usage personnel, familial ou domestique, mais pas pour usage commercial ou revente.",
        'Les détaillants achètent en grandes quantités les articles destinés à répondre aux besoins des consommateurs, puis se chargent de les revendre à l\'unité avec un certain profit.',
      ],
    },
    {
      heading: 'Ces fonctions sont opérationnalisées par des tâches dont les principales sont',
      list: [
        'Transport : ensemble des opérations de transport et de manutention.',
        "Fractionnement : chez le producteur, les marchandises sont produites en grandes quantités ; il convient de les fractionner pour qu'elles correspondent aux besoins de chaque client, grossiste, détaillant.",
        "Assortiment : réunir dans un même point de vente plusieurs modèles de produits nombreux et variés de manière à présenter un choix satisfaisant et adapté aux consommateurs. La constitution d'un assortiment implique un savoir-faire, c'est elle qui différencie les formes de distribution.",
        "Conditionnement : des opérations de conditionnement entre la production et la consommation peuvent être effectuées par la distribution (thé, fruits et légumes, regroupement de produits différents etc.).",
        "Stockage : c'est une mission essentielle car elle permet d'ajuster dans le temps la production et la consommation.",
        'Financement : les intermédiaires assurent des risques financiers en achetant des produits et en les commercialisant.',
        "Services : certains produits sont directement liés à la vente (présentation des produits, promotion, PLV, conseil…) ; d'autres vont suivre la vente (livraison, installation, service après-vente).",
      ],
    },
    {
      heading: 'IV. Les stratégies de distribution',
      paragraphs: ['Il est d\'usage de distinguer trois stratégies de distribution.'],
    },
    {
      heading: '1) La distribution intensive',
      paragraphs: [
        "C'est la recherche du plus grand nombre de points de vente possible. Tous les commerçants qui le souhaitent peuvent vendre le produit. Ce mode de commercialisation convient aux biens banaux, aux produits de consommation courante que les consommateurs doivent trouver à tout moment dans le plus grand nombre possible de points de vente.",
      ],
      table: {
        headers: ['Avantages', 'Inconvénients'],
        rows: [
          [
            "Génère un chiffre d'affaire important\nPermet de faire connaître le produit",
            'Augmentation du coût de distribution\nPerte du contrôle de la politique commerciale',
          ],
        ],
      },
    },
    {
      heading: '2) La distribution sélective',
      paragraphs: [
        "Elle consiste à sélectionner les points de vente selon certains critères. En opérant une certaine sélectivité, le fabricant concentre ses efforts sur un nombre limité de points de vente et obtient ainsi, des distributeurs retenus, un effort de vente supérieur à la moyenne. Ce mode est adapté aux produits anomaux (que les clients choisissent avec soin) ou à des produits difficiles à vendre en raison de leur caractère technique ou encore des articles de mode.",
      ],
      table: {
        headers: ['Avantages', 'Inconvénients'],
        rows: [
          [
            'Coûts de distribution moins élevés pour le producteur\nContrôle qualitatif de la distribution',
            'Faible couverture du marché\nStratégie attaquée par la grande distribution',
          ],
        ],
      },
    },
    {
      heading: '3) La distribution exclusive',
      paragraphs: [
        "Le fabricant accorde, uniquement à un seul intermédiaire, la possibilité d'écouler ses produits. Le grand avantage est bien entendu une maîtrise complète du système du point de vue de l'image, des tarifs, des services annexes, etc…",
        'Les constructeurs automobiles et certaines marques de cosmétique utilisent souvent ce mode de commercialisation.',
      ],
      table: {
        headers: ['Avantages', 'Inconvénients'],
        rows: [
          [
            'Le producteur suit bien la vente de ses produits\nIl enregistre les commandes plus régulièrement',
            'Pour le producteur : ne trouve pas toujours le distributeur approprié\nPour le distributeur : est lié au producteur et soumis à ses caprices.',
          ],
        ],
      },
    },
  ],
};
