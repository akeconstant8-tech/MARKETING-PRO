import type { TciChapter } from '../tciTypes';

export const fcme2Chapter7: TciChapter = {
  id: 'fcme2ch7',
  kind: 'chapitre',
  level: 2,
  number: 7,
  title: 'Chapitre 7 : Analyse et prévision de la demande',
  intro:
    "La demande d'un bien ou d'un service est la quantité de ce bien ou de ce service achetée au cours d'une période.",
  sections: [
    { heading: '1. Définitions' },
    {
      heading: '1.1. La demande',
      paragraphs: [
        "La demande d'un bien ou d'un service est la quantité de ce bien ou de ce service achetée au cours d'une période. Cette demande se calcule sur les conditions suivantes :",
      ],
      list: ['à un moment donné (période)', 'dans un lieu donné (marché)', 'dans un environnement'],
    },
    {
      paragraphs: ['Cette demande peut être relative :'],
      list: [
        'aux quantités achetées dans le passé (demande passée)',
        'aux quantités achetées actuellement (demande actuelle)',
        'aux quantités susceptibles d\'être achetées (demande future ou prévision)',
      ],
    },
    {
      heading: "1.2. L'analyse",
      paragraphs: [
        "Il s'agit de décomposer les ventes d'une entreprise ou d'un secteur en des parties significatives. On peut analyser les ventes :",
      ],
      list: ['par année ;', 'par taux de croissance ;', 'par produit ;', "par secteur d'activité etc. …"],
    },
    {
      heading: '1.3. La prévision',
      paragraphs: [
        "C'est l'établissement par avance des ventes en quantité et en valeur compte tenu des contraintes que subit l'entreprise et de son action sur ces contraintes. Elle peut être aussi définie comme le niveau espéré de la demande ou de la vente d'une entreprise. Plusieurs facteurs rendent la prévision difficile :",
      ],
      list: ['La multiplicité des produits ;', 'La concurrence ;', "L'environnement ;", "Le pouvoir d'achat."],
    },
    { heading: '2. L\'analyse de la demande' },
    {
      paragraphs: ['Application : Soient les ventes d\'une entreprise sur une période.'],
      table: {
        caption: 'Ventes de l\'entreprise',
        headers: ['Produit \\ Année', '2002', '2003', '2004', '2005', '2006'],
        rows: [
          ['Produit A', '35 000', '42 500', '47 000', '50 000', '52 000'],
          ['Produit B', '25 000', '37 000', '42 500', '45 500', '48 250'],
        ],
      },
    },
    {
      paragraphs: ["Travail à faire : Analyser les ventes de cette entreprise en termes de :"],
      list: [
        "1°) Parts de marché de chaque produit d'année en année.",
        "2°) Taux de croissance de chaque produit d'année en année.",
        "3°) Taux de croissance globale de l'entreprise d'année en année.",
      ],
    },
    { heading: '3. Les méthodes de prévision' },
    {
      paragraphs: [
        "Il existe de nombreuses méthodes de prévision ; leur intérêt est de réduire les incertitudes du futur. Pour cela, il est intéressant d'utiliser plusieurs méthodes simultanément. Nous avons successivement les méthodes suivantes :",
      ],
      list: ['les méthodes qualitatives', 'les méthodes quantitatives ou statistiques.'],
    },
    { heading: '3.1. Les méthodes qualitatives' },
    {
      heading: '3.1.1. Les méthodes de jugement',
      paragraphs: ['Nous en étudierons quelques-unes.'],
      list: [
        "Les prévisions des vendeurs : elles consistent à demander à chaque vendeur de faire des prévisions dans son secteur de vente. La somme de ces prévisions individuelles donne la prévision totale de l'entreprise.",
        "Les prévisions d'experts : elles sont faites par des personnes spécialisées dans un domaine bien précis. Elles font des prévisions qu'elles mettent à la disposition des entreprises à la demande de celles-ci.",
        "Les prévisions par analogie : ici, les prévisions s'appuient sur une situation passée que l'on peut comparer à celle présente ou à venir.",
        "Les prévisions basées sur les intentions d'achat : cette méthode consiste à demander aux acheteurs potentiels, dans le cadre d'une enquête, leur intention d'achat dans un horizon temporel déterminé. Une telle enquête peut être menée soit auprès de l'ensemble de la population à laquelle on s'intéresse soit auprès d'un échantillon représentatif de cette population.",
      ],
    },
    {
      heading: '3.1.2. Les méthodes expérimentales',
      paragraphs: [
        "C'est la mise en vente expérimentale d'un produit sur un marché test ou marché témoin. Il s'agit d'une zone géographique limitée dans laquelle le lancement du produit est effectué à titre d'essai. S'il s'agit d'un produit déjà existant dans l'entreprise, on le lance dans un nouveau secteur. Cette technique permet de savoir si le marché réagira favorablement ou non au produit.",
      ],
      list: [
        "Le test de produit : il consiste à faire essayer le produit par un échantillon de consommateurs et à recueillir ensuite leurs opinions pour déterminer le pourcentage de consommateurs qui jugera le produit bon. Ce pourcentage permet de faire une prévision par extrapolation à l'ensemble de la population cible.",
        "Le test de prix : on propose aux consommateurs différents prix pour découvrir leur réaction et déterminer le prix juste en fonction duquel l'on établira des prévisions.",
      ],
    },
    {
      heading: '3.1.3. La méthode DELPHI',
      paragraphs: [
        "Elle consiste à poser un sujet à un groupe d'experts maintenus à l'écart les uns des autres de telle sorte que leurs jugements ne soient pas influencés par la pression du groupe et à les interroger itérativement tout en conservant l'anonymat des réponses obtenues. Cette méthode comprend plusieurs étapes :",
      ],
    },
    {
      paragraphs: [
        "1ère étape : la sélection ou le recrutement des experts. Leur nombre est variable. Certains Delphes se font avec des échantillons de 10 à 12 experts, d'autres avec plusieurs centaines, la norme courante étant de 30 à 40 experts.",
        "2ème étape : l'élaboration du questionnaire initial présentant le sujet. Les questions sont précises, quantifiables et, de préférence, indépendantes les unes des autres. Lorsque les experts sont interrogés sur des domaines de compétence différents, pour chacun d'eux, on leur demande de s'auto-évaluer par un système de notation.",
        "3ème étape : l'envoi du premier questionnaire et le dépouillement. Le questionnaire est adressé par voie postale aux experts du groupe Delphi. Les questionnaires retournés sont dépouillés. Pour chaque question, un histogramme des réponses est tracé.",
        "4ème étape : l'envoi du deuxième questionnaire. Ce tour vise à réduire l'écart de réponse. On communique avec le deuxième questionnaire les résultats du premier questionnaire et on rappelle à chaque expert ses propres réponses. Il est demandé aux experts de répondre une seconde fois au questionnaire à la lumière de ces informations. Aux experts dont les réponses se situent en dehors des réponses de la majorité, une justification de leurs précédentes réponses est exigée.",
        "5ème étape : l'envoi du troisième questionnaire. Cette troisième vague ressemble à s'y méprendre à la précédente si ce n'est qu'elle a pour but de déstabiliser les experts « extrémistes ». On demande en effet aux experts majoritaires de critiquer les arguments avancés par les experts extrémistes. Il en découle donc un affrontement d'idées d'autant plus riche et constructif que l'anonymat des experts évite toute retenue.",
        "6ème étape : l'envoi du quatrième questionnaire. À celui-ci est jointe la distribution statistique des réponses ainsi que les critiques des experts majoritaires. On demande alors à tous les experts de répondre une nouvelle fois aux questions posées. Les experts minoritaires qui restent sur leurs positions doivent répondre aux critiques émises par les experts majoritaires. Quant à ceux qui ont changé d'avis et rejoint la majorité, ils doivent indiquer les critiques qui les ont le plus touchés.",
      ],
    },
    {
      heading: '3.2. Les méthodes quantitatives ou statistiques',
      paragraphs: [
        "Nous ne traiterons que deux aspects de l'analyse et prévision des ventes à travers les applications suivantes.",
        "Note : dans le support de cours d'origine, les formules des méthodes ci-dessous sont laissées en blanc. Elles sont ici complétées par les formules classiques correspondantes, et signalées comme telles.",
      ],
    },
    {
      heading: '3.2.1. La méthode des moindres carrés',
      paragraphs: [
        "On détermine l'équation de la droite de régression dont la forme est y = ax + b, avec (formules classiques, laissées en blanc dans le support) :",
      ],
      formulas: [
        'y = ax + b',
        'a = Σ(xi − x̄)(yi − ȳ) ÷ Σ(xi − x̄)²',
        'b = ȳ − a × x̄',
      ],
    },
    {
      paragraphs: [
        "avec n = nombre de couples (xi ; yi) observés ; x̄ = moyenne des xi ; ȳ = moyenne des yi.",
        "Application : On vous communique les ventes annuelles d'une entreprise pendant 6 ans (en millions F).",
      ],
      table: {
        headers: ['Années', '1', '2', '3', '4', '5', '6'],
        rows: [['Ventes', '7', '10', '10', '14', '14', '16']],
      },
    },
    {
      paragraphs: [
        "Travail à faire : 1.- Déterminez l'équation de la droite de tendance par la méthode des moindres carrés. 2.- Prévoir les ventes de la 7ème année.",
      ],
    },
    {
      heading: '3.2.2. La méthode des points extrêmes',
      paragraphs: [
        "Cette méthode consiste à déterminer l'équation de la droite de régression qui passe par les deux points extrêmes : le point A et le point B.",
        "Application : Même exercice que précédemment.",
      ],
      formulas: ['a = (yB − yA) ÷ (xB − xA)', 'b = yA − a × xA'],
    },
    {
      paragraphs: ["(Formules classiques, laissées en blanc dans le support.)"],
    },
    {
      heading: '3.2.3. La méthode de MAYER ou méthode des doubles moyennes',
      paragraphs: [
        "À partir des informations, on commence par diviser la série en deux groupes égaux (à un couple près, si le nombre de couples est impair), afin de déterminer les deux points moyens A et B par lesquels la droite de régression passera.",
        "Puis, on détermine l'équation de la droite de tendance : y = ax + b, avec a = (yB − yA) ÷ (xB − xA) (formule classique, laissée en blanc dans le support).",
        'Application : Même exercice que précédemment.',
      ],
      formulas: ['y = ax + b', 'a = (yB − yA) ÷ (xB − xA)', 'b = yA − a × xA'],
    },
    {
      heading: '3.2.4. La corrélation',
      paragraphs: [
        "Il y a corrélation entre deux phénomènes lorsqu'à toute modification de l'un correspond une modification de l'autre.",
        "Le coefficient de corrélation mesure le degré de corrélation entre 2 phénomènes ; il est noté r et se calcule de la façon suivante (formule classique, laissée en blanc dans le support) :",
      ],
      formulas: ['r = Σ(xi − x̄)(yi − ȳ) ÷ √[Σ(xi − x̄)² × Σ(yi − ȳ)²]'],
    },
    {
      list: [
        "si r = 0 : il n'y a pas de corrélation entre les 2 phénomènes. Ils sont indépendants l'un de l'autre",
        "si r est proche de 1 : il y a une très forte corrélation",
        'si r est proche de 0 : il y a une très faible corrélation',
        "si r = 1 : il y a une parfaite corrélation. C'est-à-dire que les deux phénomènes varient dans les mêmes proportions.",
      ],
    },
    {
      paragraphs: ["Application : Soient les ventes d'une entreprise en fonction du budget publicitaire (en millions de FCFA)."],
      table: {
        headers: ['Budget publicitaire (xi)', 'Ventes (yi)'],
        rows: [
          ['50', '800'],
          ['55', '890'],
          ['56', '910'],
          ['60', '1 000'],
        ],
      },
    },
    {
      paragraphs: ['Travail à faire :'],
      list: [
        '1) Y a-t-il une corrélation entre les ventes et le budget publicitaire ?',
        "2) Quelle devra être la prévision de la vente si l'entreprise envisage de consacrer 65 000 000 FCFA à la publicité ?",
        "3) Quel devra être le budget publicitaire à prévoir si l'entreprise veut réaliser un chiffre d'affaires de 1 200 000 000 FCFA ?",
      ],
    },
    {
      heading: '3.2.5. Les variations saisonnières',
      paragraphs: [
        "Il n'est pas toujours évident que les ventes d'un produit suivent une progression comme l'indique l'équation de la droite y = ax + b.",
        "Pour tout article vendu sur une période donnée, il y a des hauts et des bas ; c'est-à-dire des moments où les ventes atteignent leur niveau le plus élevé et des moments où elles descendent à leur plus bas niveau. Les variations saisonnières permettent donc de respecter cette disparité au cours des prévisions.",
        "Le calcul des coefficients saisonniers permet de prévoir les ventes des produits dont les quantités varient en fonction des saisons. Trois étapes permettent de calculer les coefficients saisonniers :",
      ],
      list: [
        'Calcul des moyennes par périodes considérées (mois, bimestre, trimestre…) (MP)',
        'Calcul de la moyenne générale (MG) qui est en fait la moyenne des moyennes.',
        'On obtient les coefficients saisonniers par le calcul suivant :',
      ],
      formulas: ['Coefficient saisonnier (CS) = MP ÷ MG'],
    },
    {
      paragraphs: [
        "(Formule classique, laissée en blanc dans le support.)",
        "Ces coefficients saisonniers permettront de corriger les ventes prévisionnelles globales à partir de l'équation de la droite de régression : y = ax + b. Les ventes corrigées ou ventes prévisionnelles se détermineront par la formule suivante :",
      ],
      formulas: ['VENTES CORRIGÉES = VENTES PRÉVISIONNELLES GLOBALES × CS'],
    },
    {
      paragraphs: [
        'Application 1 : (variations saisonnières avec périodes mensuelles) Les ventes d\'un article observées pendant deux années consécutives sont les suivantes :',
      ],
      table: {
        headers: ['Mois', 'J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        rows: [
          ['Année 1', '135', '132', '129', '139', '140', '140', '135', '106', '142', '139', '140', '145'],
          ['Année 2', '145', '140', '135', '149', '152', '150', '145', '108', '148', '145', '138', '149'],
          ['MP', '', '', '', '', '', '', '', '', '', '', '', ''],
          ['Coef. S', '', '', '', '', '', '', '', '', '', '', '', ''],
          ['Année 3', '', '', '', '', '', '', '', '', '', '', '', ''],
        ],
      },
    },
    {
      paragraphs: ["Travail à faire : Déterminez les prévisions de vente de la 3ème année à partir de la méthode de MAYER."],
    },
    {
      paragraphs: ["Application 2 : (variation saisonnière avec périodes trimestrielles) Soient les ventes d'un article observées sur une période de 3 ans."],
      table: {
        headers: ['Trimestres \\ Année', '1', '2', '3', 'MP', 'Coef. S', 'Ventes corrigées'],
        rows: [
          ['1er trimestre', '300', '330', '360', '', '', ''],
          ['2e trimestre', '2 500', '3 100', '3 400', '', '', ''],
          ['3e trimestre', '530', '570', '700', '', '', ''],
          ['4e trimestre', '2 800', '2 900', '3 300', '', '', ''],
        ],
      },
    },
    {
      paragraphs: [
        'Travail à faire : Déterminez les ventes prévisionnelles pour la 4ème année à partir de la méthode des moindres carrés.',
      ],
    },
    {
      heading: "3.2.6. Etude de l'élasticité de la demande",
      paragraphs: [
        "L'élasticité de la demande mesure la sensibilité de la demande à une modification d'une autre variable. Les principales élasticités sont :",
      ],
      list: ["l'élasticité de la demande par rapport au revenu", "l'élasticité de la demande par rapport au prix."],
    },
    {
      heading: "L'élasticité de la demande par rapport au revenu",
      paragraphs: [
        "Cette élasticité est généralement positive ; c'est-à-dire que lorsque le revenu augmente, la demande augmente.",
        "Formule (classique, laissée en blanc dans le support) :",
      ],
      formulas: ['e = (variation relative de la demande) ÷ (variation relative du revenu) = (ΔD ÷ D) ÷ (ΔR ÷ R)'],
    },
    {
      table: {
        headers: ['Année', 'R (revenu)', 'D (demande)'],
        rows: [
          ['1', '100', '80'],
          ['2', '120', '105'],
        ],
      },
      paragraphs: ["Application : Quelle sera la prévision de la demande en année 3 si le revenu augmente de 20 % ?"],
    },
    {
      heading: "L'élasticité de la demande par rapport au prix",
      paragraphs: [
        "Cette élasticité est généralement négative ; c'est-à-dire que lorsque le prix augmente, la demande baisse.",
        "Formule (classique, laissée en blanc dans le support) :",
      ],
      formulas: ['e = (variation relative de la demande) ÷ (variation relative du prix) = (ΔD ÷ D) ÷ (ΔP ÷ P)'],
    },
    {
      table: {
        headers: ['Année', 'P (prix)', 'D (demande)'],
        rows: [
          ['1', '150', '1000'],
          ['2', '200', '600'],
        ],
      },
      paragraphs: ['Application : Quelle sera la demande prévisionnelle si le prix passe de 200 F à 225 F en année 3 ?'],
    },
  ],
};
