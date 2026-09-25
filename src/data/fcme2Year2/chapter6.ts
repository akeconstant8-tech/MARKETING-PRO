import type { TciChapter } from '../tciTypes';

export const fcme2Chapter6: TciChapter = {
  id: 'fcme2ch6',
  kind: 'chapitre',
  level: 2,
  number: 6,
  title: "Chapitre 6 : La réalisation de l'enquête",
  intro:
    "La réalisation de l'enquête correspond à la collecte effective de l'information recherchée auprès de l'échantillon retenu et son interprétation. Elle peut être décomposée en plusieurs étapes successives.",
  sections: [
    { heading: "1. Le recrutement et la formation des enquêteurs" },
    {
      paragraphs: [
        "Il est évident que dans le cadre des enquêtes dites « face à face », la qualité des résultats obtenus est fondamentalement liée au sérieux et au professionnalisme des enquêteurs.",
      ],
    },
    {
      heading: '1.1. Le recrutement des enquêteurs',
      paragraphs: ['Les critères de recrutement des enquêteurs peuvent être énoncés en quelques règles simples de bon sens.'],
      table: {
        headers: ['Qualités requises', 'Objectifs recherchés'],
        rows: [
          ['Sens du contact, empathie', 'Obtenir des réponses sans se faire rejeter ; Maintenir l\'intérêt au fur et à mesure des questions'],
          ["Esprit d'analyse, sens de l'observation et de l'écoute", 'Observer les réactions ; Interpréter correctement les réponses'],
          ['Expression orale correcte', 'Engager et entretenir une conversation ; Reformuler des questions et des réponses'],
          [
            'Neutralité, honnêteté',
            'Ne pas biaiser les réponses par son comportement sans explication ; Respecter les contraintes fixées par le donneur d\'ordre',
          ],
          ['Persévérance, résistance physique, patience', "Résistance à l'échec et à l'agressivité ; Travailler à des heures inhabituelles."],
        ],
      },
    },
    {
      heading: '1.2. La formation des enquêteurs',
      paragraphs: ['Elle doit porter sur :'],
      list: ["Le but de l'enquête et les hypothèses de travail", 'La méthode de sondage retenue', "La conduite de l'enquête", 'La saisie des informations'],
    },
    {
      heading: "2. L'administration du questionnaire",
      paragraphs: [
        "L'administration du questionnaire doit se faire dans une période favorable (choix judicieux des saisons de l'année, jours de la semaine, heures de la journée etc.…) et être bien organisée pour que les délais imposés soient respectés. Un planning doit être élaboré et respecté.",
        "L'administration du questionnaire suppose le choix d'une procédure précise :",
      ],
      list: ['Enquête à domicile', 'Enquête dans la rue', 'Enquête par correspondance', 'Enquête par téléphone'],
    },
    {
      heading: '3. Le contrôle des enquêteurs et des réponses obtenues',
      paragraphs: [
        "La fiabilité du sondage dépend pour une large part du sérieux du travail de l'enquêteur. Il faut donc le contrôler.",
        "Le contrôle est réalisé par sondage téléphonique, par l'envoi d'un vérificateur, par recoupement et par la cohérence des réponses.",
        'Si tous les questionnaires ont été remplis et remis par les enquêteurs, il faut alors vérifier que :',
      ],
      list: ['les enquêtés ont répondu correctement', 'les enquêteurs ont effectué leur travail convenablement.'],
    },
    {
      paragraphs: [
        'Les questionnaires non valables (informations inexactes) doivent être éliminés.',
        "Parfois les enquêteurs sont tentés de remplir eux-mêmes les questionnaires. Il faut alors découvrir la fraude qu'on reconnaît par les signes suivants :",
      ],
      list: [
        'questionnaires trop bien remplis',
        "invraisemblance entre la qualité de la personne soi-disant enquêtée et la qualité de ses réponses.",
        'Réponses identiques sur plusieurs questionnaires etc. …',
      ],
    },
    {
      heading: '4. Le dépouillement des questionnaires',
      paragraphs: ['Le dépouillement des questionnaires correspond aux étapes suivantes :'],
      list: ['saisie des réponses,', 'tris à plat,', 'tris croisés,', 'tris filtrés'],
    },
    {
      heading: '4.1. La saisie des réponses',
      paragraphs: [
        "L'utilisation d'un logiciel intégrant en amont la définition de la structure du questionnaire et la saisie du texte du questionnaire permet d'aboutir à une saisie des réponses très conviviale : l'utilisateur peut obtenir à l'écran d'une manière permanente et claire le libellé de la question (et des modalités s'y rapportant) au moment même où il procède à la saisie des réponses. Cette solution permet aussi un contrôle de vraisemblance des entrées (par exemple, l'entrée d'une réponse « 3 » à une question dont le code de modalité le plus élevé est « 2 » sera immédiatement rejetée).",
        "Quel que soit le logiciel utilisé, il est indispensable de numéroter tous les questionnaires avant de procéder à l'entrée des réponses ainsi que de procéder au codage des réponses.",
        "Après la saisie des réponses, il est nécessaire d'imprimer l'état de la saisie représentant la trace écrite des réponses saisies et enregistrées.",
      ],
    },
    {
      heading: '4.2. Les tris à plat',
      paragraphs: ['Les tris à plat correspondent à un décompte des réponses sur un caractère donné. Les tris à plat donnent par modalité :'],
      list: ['les fréquences absolues (nombre de réponses)', 'les fréquences relatives (pourcentage par rapport à une base choisie)'],
    },
    {
      paragraphs: ['Ex 1 : Question 8 — Sexe de la personne interrogée.'],
      table: {
        headers: ['Modalité', 'Réponses', 'Pourcentage', 'Histogramme'],
        rows: [
          ['1- Masculin', '74', '', ''],
          ['2- Féminin', '126', '', ''],
          ['Nbre répondants', '200', '', ''],
        ],
      },
    },
    {
      paragraphs: ["Ex 2 : Exemple de tableau pour question à réponse numérique (surface utile d'un magasin en m²)"],
      table: {
        headers: ['Modalité', 'Réponses', 'Pourcentage', 'Histogramme'],
        rows: [
          ['0- < 10', '57', '', ''],
          ['1- >= 10 et < 20', '29', '', ''],
          ['2- >= 20 et < 40', '28', '', ''],
          ['3- >= 40', '29', '', ''],
          ['4- non réponse', '57', '', ''],
          ['Echantillon', '200', '', ''],
        ],
      },
    },
    {
      paragraphs: [
        "Explication : dans le support d'origine, les colonnes « Pourcentage » et « Histogramme » ainsi que l'explication sont laissées à compléter.",
      ],
    },
    {
      heading: '4.3. Les tris croisés',
      paragraphs: [
        'Les tris croisés consistent à mettre en corrélation les réponses à deux ou plus de deux questions.',
        'On peut ainsi obtenir des tableaux à double entrée qui donnent généralement les résultats suivants :',
      ],
      list: [
        'nombre de réponses à l\'intersection des modalités de deux questions croisées,',
        "pourcentage de ces réponses par rapport au nombre de répondants ou par rapport à une autre base,",
        'représentation graphique de ces pourcentages avec certains progiciels.',
      ],
    },
    {
      paragraphs: ['Exemple de tableau : Q1 : « Consommez-vous le produit “X” ? » ; Q2 : « Sexe de la personne interrogée ».'],
      table: {
        headers: ['Q2 \\ Q1', 'OUI', 'NON', 'TOTAL'],
        rows: [
          ['Femmes', '120', '279', '399'],
          ['Hommes', '283', '318', '601'],
          ['TOTAL', '403', '597', '1000'],
        ],
      },
    },
    {
      paragraphs: ["NB : Les pourcentages ont été calculés par rapport au total de l'échantillon."],
    },
    {
      heading: '4.4. Les tris filtrés',
      paragraphs: [
        "Le filtrage consiste à créer des sous-populations à partir de l'échantillon d'origine. On peut ainsi passer les questionnaires au crible pour obtenir des sous-populations homogènes sur un ou plusieurs critères.",
      ],
    },
    {
      heading: "5. Le redressement de l'échantillon",
      paragraphs: [
        "Au moment de l'exploitation du questionnaire, les tris à plat effectués sur les questions signalétiques (âge, revenu, sexe, CSP…) peuvent faire apparaître des écarts importants entre la répartition au sein de l'échantillon et celle au sein de la population à étudier. Si l'on dispose de statistiques fiables de la population de base, on peut alors procéder au redressement de l'échantillon.",
      ],
    },
    {
      heading: '5.1. Le redressement par extraction',
      paragraphs: [
        "Il consiste à supprimer des questionnaires dans les catégories surreprésentées dans l'échantillon d'arrivée. Les questionnaires à retirer sont généralement tirés au sort. L'inconvénient de cette méthode est de réduire la taille de l'échantillon.",
      ],
    },
    {
      heading: '5.2. Le redressement par substitution',
      paragraphs: [
        "Il revient à remplacer des questionnaires en surnombre par des questionnaires dans les catégories sous-représentées. Les questionnaires à supprimer et ceux à dupliquer sont tirés au sort.",
        "La taille de l'échantillon est maintenue mais si les substitutions sont nombreuses on introduit un biais important.",
        "Exemple : Sur un échantillon de 1 000 personnes, vous constatez que vous avez 60 % de femmes et 40 % d'hommes. Alors que vous savez que dans votre base de sondage, il n'y a que 55 % de femmes et 45 % d'hommes. Il faut donc procéder à un redressement de l'échantillon. Deux méthodes sont possibles : le redressement par extraction ; le redressement par substitution.",
      ],
    },
    {
      heading: '6. La rédaction du rapport',
      paragraphs: [
        "Le rapport d'étude représente le lien entre l'étude elle-même et les actions qui découlent des résultats de celle-ci.",
        "Le contenu du rapport d'étude (de même que la pratique de l'étude) obéit à un certain nombre de règles déontologiques afin d'assurer à l'utilisateur la garantie d'une démarche rigoureuse.",
      ],
    },
    {
      heading: "6.1. Caractéristiques du rapport d'étude",
      paragraphs: [
        "Le rapport d'étude peut être considéré comme un produit à vendre. Cela sous-entend que comme n'importe quel produit, il présente en général les cinq caractéristiques suivantes :",
      ],
      list: [
        "il correspond à la satisfaction d'un besoin (besoin d'information pour prendre une décision)",
        "il s'adresse à des utilisateurs précis (cible du rapport d'étude)",
        'il doit être conditionné de façon adéquate (présentation des résultats).',
        "Il doit faire l'objet d'une action en communication (promotion du rapport d'étude)",
        "Il doit être correctement distribué (diffusion du rapport d'étude).",
      ],
    },
    {
      paragraphs: [
        "La comparaison du rapport d'étude avec un produit doit être cependant nuancée. En particulier, il faut noter que la promotion et la diffusion du rapport sont des étapes qui, dans le cas d'une étude confidentielle, font évidemment l'objet d'actions très limitées.",
      ],
    },
    { heading: '6.2. Le contenu du rapport' },
    {
      heading: '6.2.1 La présentation de la méthodologie',
      paragraphs: [
        "La méthodologie de la recherche doit être présentée en détail pour chaque étape (pré-enquête, enquête) et chaque approche utilisée (documentaire, qualitative, quantitative). Les points de la méthodologie qui doivent être détaillés dans le rapport d'étude sont les suivants :",
      ],
      list: [
        'hypothèses de travail et informations recherchées ;',
        "population mère étudiée (préciser les caractéristiques de la population cible ainsi que les unités statistiques).",
        "Méthode d'échantillonnage (expliquer la raison du choix de la méthode retenue, exposer les problèmes éventuels de mise en œuvre et fournir la structure des enquêtes effectivement réalisées) ;",
        "Nombre d'individus (préciser le nombre d'interviews réalisées, le nombre d'interviews effectivement exploitées. Si les écarts sont importants entre les différents nombres d'interviews, il conviendra d'en expliquer les raisons).",
        "Mode de collecte (le mode de collecte retenu devra être clairement précisé avec l'exposé des raisons du choix et le compte rendu des difficultés éventuelles).",
      ],
    },
    {
      heading: '6.2.2. Le compte rendu des réalisations',
      paragraphs: [
        "Cette partie concerne les étapes correspondant à la réalisation effective de l'enquête. Elle comportera notamment les éléments suivants :",
      ],
      list: [
        "Questionnaire : il s'agit de retracer les principales étapes de la mise au point du questionnaire (informations recherchées → questionnaire test → questionnaire définitif).",
        "Enquêteurs : indiquer le nombre d'enquêteurs, leur degré de formation, leur statut, leur expérience, etc.",
        "Déroulement de l'enquête : indiquer la période de déroulement de l'enquête, les écarts éventuels par rapport au planning initial, les éléments spécifiques à la période de déroulement (jours fériés, vacances, grèves, etc.…)",
        "Contrôles effectués : les méthodes de contrôle mises en œuvre seront décrites à trois niveaux (contrôle des enquêteurs, contrôle des réponses, contrôle de la saisie).",
      ],
    },
  ],
};
