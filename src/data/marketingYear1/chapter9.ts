import type { TciChapter } from '../tciTypes';

export const mktChapter9: TciChapter = {
  id: 'mkt1ch9',
  kind: 'chapitre',
  level: 1,
  number: 9,
  title: 'Troisième partie, Chapitre 2 : Le prix',
  intro: 'Objectif : Déterminer le prix d\'un produit selon les deux principales méthodes.',
  sections: [
    {
      heading: 'I. Définition',
      paragraphs: [
        "C'est la valeur d'échange d'un produit. Le prix est un élément important d'action sur le marché, il doit être en cohérence avec les autres variables marketing. Il a une incidence forte pour l'entreprise : il procure des revenus, il influe aussi sur la demande et sur la concurrence. De nombreuses méthodes de fixation de prix existent : les coûts, la demande et la concurrence.",
      ],
    },
    { heading: 'II) Objectifs et contraintes de la politique de prix' },
    {
      heading: '1) Objectifs',
      paragraphs: [
        "Dans la fixation (ou révision) du prix d'un produit, une entreprise vise en général simultanément trois types d'objectifs qui sont :",
      ],
      list: ['Objectif de vente ou part de marché', 'Objectif de rentabilité', "Objectif de l'image de marque"],
    },
    {
      heading: '1.1) Objectif de vente ou part de marché',
      paragraphs: [
        "Il s'agit pour l'entreprise, à travers sa politique de prix, d'obtenir la part de marché la plus importante possible en volume ou en valeur.",
      ],
    },
    {
      heading: '1.2) Objectif de rentabilité',
      paragraphs: ['Il s\'agit d\'optimiser la rentabilité des capitaux investis.'],
    },
    {
      heading: "1.3) Objectif d'image",
      paragraphs: [
        "La politique de prix doit aider à définir et à préserver le positionnement de l'entreprise et de ses produits.",
      ],
    },
    { heading: '2) Les contraintes' },
    {
      heading: '2.1) Les contraintes légales',
      paragraphs: [
        "Une entreprise n'est pas toujours libre de fixer ses prix dans la mesure où l'Etat intervient de différentes manières dans le mécanisme de fixation de prix.",
        "L'Etat est amené parfois à fixer les prix dans un souci de :",
      ],
      list: [
        'Défendre les intérêts économiques et généraux du pays',
        'Protection des consommateurs',
        'Protection des entreprises',
      ],
    },
    {
      paragraphs: ["Le prix des biens et services relève le plus souvent de l'un des régimes suivants :"],
      list: [
        'Le régime de taxation : c\'est lorsque l\'Etat fixe un prix maximum au produit.',
        "La liberté surveillée : c'est lorsque les producteurs doivent communiquer à l'administration (qui peut réagir sans délai) leurs tarifs.",
        "Le régime de blocage : c'est lorsque l'Etat impose unilatéralement le prix d'un produit.",
        "La liberté contrôlée : c'est lorsque les producteurs établissent eux-mêmes un barème des prix qu'ils déposent auprès de l'administration qui a un délai pour réagir.",
      ],
    },
    {
      heading: '2.2) Les contraintes réglementaires',
      list: [
        "Les pratiques discriminatoires : c'est lorsque le commerçant fixe un prix à la tête du client.",
        "Les ventes à pertes ou le dumping : c'est le procédé qui consiste pour un distributeur à vendre un produit à un prix inférieur à son prix d'achat. Cette pratique est interdite sauf dans les cas suivants : produits périssables menacés, produits hors saison ou démodés, produits rendus obsolètes par l'évolution technologique, vente liée à un changement d'activité.",
        "Les ententes : ce sont les accords passés entre plusieurs entreprises (producteurs et distributeurs) et visant à restreindre ou à fausser le libre jeu de la concurrence : tarifs communs, répartition des marchés, actions conjointes visant à éliminer un concurrent.",
      ],
    },
    {
      heading: '2.3) Les contraintes de coûts',
      paragraphs: [
        "Le coût d'un bien est constitué de la somme de tout ce que l'entreprise a supporté comme dépenses et charges pour son acquisition. Par conséquent, le prix de cession sera fixé au-dessus de son coût d'acquisition de manière à permettre à l'entreprise de réaliser des bénéfices.",
      ],
    },
    { heading: 'III) Les stratégies de prix' },
    {
      paragraphs: [
        "Pour la fixation du prix de vente de son produit, une entreprise a le choix entre trois (3) stratégies : Ecrémage, pénétration ou alignement.",
      ],
    },
    {
      heading: "1) Stratégie d'écrémage",
      paragraphs: [
        'Les prix retenus pour le produit sont délibérément élevés ; ce qui limite la clientèle à un nombre restreint d\'individus à fort pouvoir d\'achat.',
      ],
      table: {
        headers: ['Avantages', 'Inconvénients'],
        rows: [
          [
            'Marge unitaire élevée\nBonne image de marque',
            'Faiblesse de la demande\nAttire la concurrence du fait des marges élevées\nNécessite un avantage concurrentiel majeur',
          ],
        ],
      },
    },
    {
      heading: '2) Stratégie de pénétration',
      paragraphs: [
        'Les prix retenus pour le produit sont délibérément faibles pour toucher la grande masse des consommateurs potentiels.',
      ],
      table: {
        headers: ['Avantages', 'Inconvénients'],
        rows: [
          [
            "Economie d'échelle\nImportants volumes de vente\nRetarde l'arrivée de la concurrence",
            'Faible marge unitaire\nInvestissements initiaux élevés\nDisponibilité de stocks importants',
          ],
        ],
      },
    },
    {
      heading: "3) Stratégie d'alignement",
      paragraphs: [
        "Entre ces deux extrêmes, une entreprise peut également choisir de fixer son prix dans la fourchette de ceux pratiqués habituellement pour un produit similaire. L'objectif est d'éviter une guerre des prix, ou bien de renforcer sa position concurrentielle en valorisant d'autres caractéristiques, comme la qualité ou les services associés.",
      ],
    },
    {
      heading: 'IV) Les méthodes de fixation de prix',
      paragraphs: ['Pour fixer ses prix, l\'entreprise dispose de plusieurs méthodes qui sont :'],
      list: [
        'La fixation du prix à partir de la demande',
        'La fixation des prix à partir des coûts',
        'La fixation des prix à partir de la concurrence',
      ],
    },
    { heading: '1) Fixation des prix à partir de la demande', paragraphs: ['Deux principales techniques permettent de fixer le prix selon la demande :'] },
    {
      heading: "1.1) L'élasticité de la demande par rapport au prix — 1.1.1) Définition",
      paragraphs: [
        "L'élasticité mesure la variation de la demande par rapport à la variation du prix. Elle permet de comparer les élasticités de produits concurrents ou de savoir comment il faut agir pour stimuler la demande. Mais on ne peut pas utiliser cette méthode pour déterminer le prix d'un nouveau produit.",
        "On calcule l'élasticité de la demande d'un bien par rapport à son prix (appelée également élasticité-prix de la demande) afin de mesurer la sensibilité de la demande aux variations du prix. Il s'agit donc de mesurer quelle est l'ampleur d'une variation de la demande consécutive à une variation du prix.",
      ],
    },
    {
      heading: '1.1.2) Formules',
      formulas: ['e = [(D1 − D0) ÷ D0] ÷ [(P1 − P0) ÷ P0] = (ΔD ÷ D0) ÷ (ΔP ÷ P0)'],
      paragraphs: [
        'D = Demande ; P = Prix ; e = Coefficient d\'élasticité ; D0 = Demande à la période 0 ; D1 = Demande à la période 1 ; P0 = Prix à la période 0 ; P1 = Prix à la période 1.',
        "En général, le coefficient d'élasticité (e) est négatif, car une augmentation des prix entraine en principe une baisse de la demande (il existe des exceptions comme pour les produits de luxe).",
      ],
    },
    {
      heading: 'Remarque',
      table: {
        headers: ["Valeur de l'élasticité", 'Signification', 'La demande est dite …', 'Exemples'],
        rows: [
          [
            'e > 0',
            "La demande augmente avec le prix (exception à la loi de l'offre et de la demande)",
            '…atypique',
            'Produit de luxe (consommation ostentatoire… effet VEBLEN)',
          ],
          [
            'e = 0',
            'Le changement de prix ne provoque aucune variation de la demande',
            '…parfaitement inélastique',
            'Biens ou services particulièrement nécessaires ou dont on est dépendant : Médicament, sel, tabac (pour certains consommateurs)…',
          ],
          [
            '-1 < e < 0',
            'Une variation de prix entraîne une faible variation de la demande (la demande varie moins que le prix)',
            '…inélastique (ou rigide)',
            'Essence, dépenses alimentaires',
          ],
          [
            '-∞ < e < -1',
            'Une variation du prix entraîne une forte variation de la demande (la demande varie plus que le prix)',
            '…élastique (ou sensible)',
            'Consommations de loisirs, biens ou services superflus',
          ],
        ],
      },
    },
    {
      heading: '1.1.3) Application',
      paragraphs: [
        'Exercice 1 (Cas BENJAMIN) : L\'entreprise BENJAMIN vend 600 unités de savons au prix de 100 fcfa (période 0). Si le prix du savon passe à 120 fcfa, elle ne vend que 500 unités (période 1).',
        'TAF : Déterminez le coefficient d\'élasticité et commentez le résultat.',
        "Exercice 2 : L'analyse des ventes d'un produit a donné la première année 1000 unités pour 100 fcfa/unité et la seconde année 850 unités pour 110 fcfa/unité. Calculez l'élasticité de la demande par rapport au prix. Interprétez vos résultats.",
        "Exercice 3 : Au prix de 1000 fcfa, un produit a donné une vente mensuelle de 50 000 unités. A 1300 fcfa, les ventes atteignent 37 350 unités. Calculez l'élasticité de la demande entre 1000 fcfa et 1300 fcfa.",
      ],
    },
    {
      heading: "1.2) La méthode du prix psychologique ou prix d'acceptabilité",
      paragraphs: [
        "On a pu observer que le consommateur détermine pour chaque produit une zone de prix acceptable, à partir des informations dont il dispose (notamment sur la qualité, son utilité, la concurrence). Une méthode utilisant cette idée a été développée par des chercheurs (Adams, Gabor et Granger).",
        "Prix acceptable : Pour un produit donné, c'est le prix qu'est disposé à payer le plus grand nombre d'acheteurs pour l'acquérir. Il est parfois appelé prix psychologique. Ce n'est pas forcément le prix le plus bas car pour la plupart des consommateurs le prix est l'origine :",
      ],
      list: [
        "D'un effet de revenu : L'acheteur n'est pas disposé à payer un prix qui est trop élevé par rapport à ses revenus.",
        "D'un effet de qualité : En règle générale le consommateur associe à un prix élevé une qualité élevée et inversement.",
      ],
    },
    {
      heading: '1.2.1) Principe de la méthode',
      paragraphs: [
        'Une enquête est effectuée auprès d\'un échantillon représentatif de consommateurs potentiels auxquels on pose deux questions :',
      ],
      list: [
        "Au-dessus de quel prix n'achèteriez-vous pas le produit ? (Produit trop cher).",
        "En dessous de quel prix n'achèteriez-vous pas le produit ? (L'estimant de mauvaise qualité).",
      ],
    },
    {
      paragraphs: [
        'Pour chaque prix, on peut ainsi calculer le pourcentage de réponses obtenues aux deux questions et déterminer le prix psychologique.',
      ],
    },
    {
      heading: '1.2.2) Application',
      paragraphs: [
        'Exercice 1 (Cas DAVID) : L\'entreprise DAVID devant commercialiser un paquet de chocolat de 300 grs, a obtenu les réponses suivantes après enquête auprès de 1000 consommateurs.',
      ],
      table: {
        headers: ['Prix', 'Nombre ayant répondu « trop cher »', 'Nombre ayant répondu « mauvaise qualité »'],
        rows: [
          ['100', '0', '430'],
          ['200', '0', '280'],
          ['300', '70', '200'],
          ['400', '110', '70'],
          ['500', '170', '20'],
          ['600', '240', '0'],
          ['700', '330', '0'],
          ['800', '80', '0'],
          ['TOTAL', '1000', '1000'],
        ],
      },
    },
    {
      paragraphs: [
        'TAF : 1) Déterminez le prix psychologique par calcul. 2) Déterminez le prix psychologique par le graphique.',
        "Exercice 2 : Pour la fixation du prix d'un cahier, on a interrogé un échantillon de 500 personnes et on a obtenu les résultats suivants :",
      ],
      table: {
        headers: ['Prix', 'Personnes trouvant le prix excessif', 'Personnes trouvant la qualité insuffisante'],
        rows: [
          ['200', '0', '315'],
          ['300', '45', '95'],
          ['400', '50', '55'],
          ['500', '80', '35'],
          ['600', '325', '0'],
        ],
      },
    },
    {
      paragraphs: ['Travail à faire : déterminez le prix psychologique par le calcul et par le graphique.'],
    },
    {
      heading: '1.2.3) Les limites et dangers de la méthode',
      list: [
        "Cette méthode ne convient qu'aux produits pour lesquels le prix est un facteur déterminant de décision d'achat : c'est le cas des produits de consommation courante.",
        "Elle n'est pas utilisable pour les produits que le consommateur est incapable d'apprécier faute de compétence ou d'information : c'est le cas des produits nouveaux.",
        "Le prix psychologique n'est pas forcément le prix qui assure le profit maximum.",
      ],
    },
    {
      paragraphs: ['Dangers de la méthode : la méthode du prix psychologique est à employer avec prudence.'],
      list: [
        "Au cours de l'enquête, les personnes interrogées ne sont pas vraiment mises en position d'achat ; lorsqu'il s'agit de payer réellement les consommateurs risquent de se comporter différemment.",
        "Le temps peut faire varier le prix psychologique : la méthode n'a qu'une durée de validité limitée.",
        "Le coût de revient du produit n'est pas pris en compte : en effet, le prix psychologique n'assure pas forcément la rentabilité du produit.",
      ],
    },
    {
      heading: '2) La fixation du prix en fonction du coût',
      paragraphs: [
        "Aucune entreprise ne peut se permettre de vendre durablement un produit en dessous de son coût de revient. La méthode de fixation des prix en fonction des coûts peut se faire de deux manières :",
      ],
    },
    {
      heading: '2.1) La méthode du coût de revient',
      paragraphs: ["Elle consiste à ajouter une marge au coût de revient du produit pour obtenir le prix de vente."],
    },
    {
      heading: '2.2) Définitions',
      list: [
        "La marge commerciale : c'est le résultat de l'activité productive et commerciale de l'entreprise. On distingue la marge commerciale ou marge brute, qui est la marge sur le coût d'achat du produit, et la marge nette, qui est la marge sur le coût de revient.",
        "Le taux de marque : c'est la part de la marge dans le prix de vente.",
        "Le taux de marge : c'est la marge ramenée au coût d'achat. Dans la pratique, il est souvent calculé sur le prix d'achat.",
        "Le coefficient multiplicateur : c'est le chiffre par lequel il faut multiplier le prix d'achat HT (effectivement payé par le distributeur) pour obtenir le prix de vente TTC à mettre sur les étiquettes de prix.",
      ],
    },
    {
      heading: '2.3) Formules',
      formulas: [
        'Prix de vente TTC = Prix de vente HT × (1 + taux de TVA)',
        'Montant TVA = Prix de vente HT × Taux de TVA',
        "Marge commerciale = Prix de vente HT − Prix d'achat HT",
        'Taux de marge = (Marge commerciale ÷ PAHT) × 100',
        'Taux de marque = (Marge commerciale ÷ PVHT) × 100',
        'Coefficient multiplicateur = PVTTC ÷ PAHT',
      ],
    },
    {
      heading: '2.4) Applications',
      paragraphs: [
        'Cas BERENICE : Un distributeur applique un taux de marque de 35% sur un paquet de biscuits acheté à 15 fcfa hors taxe à la société BERENICE. La TVA est à 18%.',
        'Calculez : le prix de vente du distributeur, la marge commerciale, le taux de marge, le coefficient multiplicateur.',
        "Cas JONAS : L'entreprise JONAS applique un taux de marque de 25% sur un produit acheté à 650 fcfa hors taxe (taux de TVA de 18%).",
        'TAF : Calculez le prix de vente du distributeur, la marge commerciale, le taux de marge, le coefficient multiplicateur.',
      ],
    },
    {
      heading: '2.5) Le seuil de rentabilité',
      paragraphs: [
        "Le seuil de rentabilité est le seuil pour lequel une entreprise ne fait ni bénéfice, ni perte, c'est-à-dire que la marge sur coût variable couvre les charges fixes.",
      ],
    },
    {
      heading: '2.5.1) Définitions',
      list: [
        "Charges variables (CV) : charges qui varient en fonction de l'activité. Pour simplifier, on considère souvent qu'elles sont proportionnelles à l'activité.",
        "Charges fixes (CF) : les charges de structure ne varient pas en fonction de l'activité.",
        "Marge sur coût variable (MSCV) : c'est la différence entre le chiffre d'affaire et les charges variables (CA − CV). Cette marge permet de payer les charges fixes.",
        'Marge sur coût variable unitaire (MSCVU) = MSCV ÷ Nombre d\'unités vendues',
        'Taux de marge sur coût variable (Taux de MSCV) = MSCV ÷ CA',
        "Seuil de rentabilité (SR) : c'est l'activité pour laquelle l'entreprise couvre ses charges fixes avec la marge sur coût variable et commencera à faire du bénéfice. Au seuil de rentabilité, appelé point mort ou point critique, l'entreprise ne réalise ni perte, ni bénéfice.",
      ],
    },
    {
      heading: '2.5.2) Formules de calcul',
      formulas: [
        'Calcul du SR en valeur : SRV = CF ÷ Taux MSCV, ou SRV = (CF × CA) ÷ MSCV',
        'Calcul du SR en quantité : SRQ = CF ÷ MSCVU',
      ],
    },
    {
      heading: 'Calcul de la date du Seuil de rentabilité',
      paragraphs: [
        "Cette date est calculée en supposant que l'activité est régulièrement étalée sur l'année et en tenant compte des dates de fermeture (on comptera des mois de 30 jours).",
      ],
      formulas: ['Point Mort = [SR (en valeur) × Temps de travail dans l\'année] ÷ CA'],
    },
    {
      paragraphs: ['NB : 360 jours l\'année.'],
    },
    {
      heading: '2.5.3) Application',
      paragraphs: [
        "CAS HOULDA : L'entreprise HOULDA fabrique et vend au cours de l'année 2005, 100 000 articles, le prix de vente est de 50 fcfa. Les charges sont les suivantes : CF = 1 200 000 fcfa ; CV = 3 000 000 fcfa.",
        '1) Déterminer par calcul le seuil de rentabilité. 2) Déterminer le jour où ce seuil sera atteint.',
        "Application (Cas ZABULON) : L'entreprise ZABULON, fabricant de chocolat, veut lancer sur le marché un nouveau produit chocolaté. Une étude lui a permis de savoir qu'elle pourrait vendre 100 000 boîtes la première année. Vous disposez des informations suivantes : Prix de vente : 41 fcfa ; Charges variables : 1 600 000 fcfa ; Charges fixes : 1 500 000 fcfa ; L'entreprise ferme le mois d'Août.",
        "TAF : 1) Calculez le Chiffre d'Affaires (CA) potentiel. 2) Calculez le SR en Chiffre d'Affaires (CA) et en quantité. 3) Indiquez la date d'obtention du seuil de rentabilité.",
      ],
    },
    {
      heading: '3) La fixation des prix en fonction de la concurrence',
      paragraphs: [
        "La fixation du prix d'un produit ne peut se faire indépendamment du prix pratiqué par la concurrence.",
      ],
    },
    {
      heading: '3.1) Les contraintes',
      list: [
        'La structure du marché : Selon que le marché sera monopolistique (Ex : Electricité, Télécommunication), oligopolistique (quelques grandes entreprises s\'affrontent, Ex : Marché de l\'automobile) ou proche de la concurrence pure et parfaite, l\'entreprise disposera d\'une marge de manœuvre plus ou moins grande pour fixer ses prix. Il faut y ajouter l\'étendue de la concurrence, l\'ouverture des frontières de certains pays.',
        "La place de l'entreprise par rapport à la concurrence : Si une entreprise leader sur son marché peut facilement imposer ses prix, il n'en est pas de même pour une entreprise détentrice d'une faible part de marché, qui devra s'aligner sur son principal concurrent.",
        'La nature du marché : Certains marchés sont très sensibles au prix (Ex : Electroménager).',
      ],
    },
    {
      heading: '3.2) La fixation des prix',
      paragraphs: ["Plusieurs possibilités s'offrent à l'entreprise :"],
      list: [
        'L\'alignement sur le prix moyen du marché. Si les produits sont peu différenciés (Ex : Produits d\'entretien, lessives…), ou lorsque l\'entreprise ne souhaite pas entrer dans une guerre de prix.',
        "La fixation d'un prix en dessous du prix du marché afin de conquérir des parts de marché importantes et rapidement.",
        'La pratique d\'un prix supérieur à celui du marché pour des produits innovants ou de prestige.',
      ],
    },
  ],
};
