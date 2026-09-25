import type { TciChapter } from '../tciTypes';

export const fcme2Chapter4: TciChapter = {
  id: 'fcme2ch4',
  kind: 'chapitre',
  level: 2,
  number: 4,
  title: "Chapitre 4 : La détermination de la taille d'un échantillon",
  intro:
    "Un échantillon d'une population donnée est un sous-ensemble de cette population. C'est une fraction représentative de cette population que l'on interroge dans le cadre d'une étude. Les résultats obtenus sont étendus à la population totale.",
  sections: [
    { heading: "1. Définition d'un échantillon" },
    {
      paragraphs: [
        "Un échantillon d'une population donnée est un sous-ensemble de cette population. C'est une fraction représentative de cette population que l'on interroge dans le cadre d'une étude. Les résultats obtenus sont étendus à la population totale.",
      ],
    },
    {
      heading: "2. Le calcul de la taille de l'échantillon",
      paragraphs: [
        "La taille de l'échantillon résulte d'un compromis entre le budget de l'étude, le degré de fiabilité souhaité, la nature de la population et le problème à étudier. Plusieurs méthodes sont utilisées pour la fixation de la taille de l'échantillon.",
      ],
    },
    {
      heading: '2.1. Le taux de sondage',
      paragraphs: [
        "C'est la proportion de personnes à interroger dans la population de base.",
        "Application : Déterminez la taille de l'échantillon d'une population de base de 100 000 habitants au taux de sondage de 2%.",
      ],
    },
    {
      heading: '2.2. Les méthodes budgétaires',
      paragraphs: [
        "Deux méthodes sont actuellement utilisées. La première consiste à raisonner en terme de coût total de revient par questionnaire.",
      ],
      formulas: ['Echantillon (N) = Budget ÷ Coût direct d\'un questionnaire'],
    },
    {
      paragraphs: [
        "Application : Un cabinet dispose d'un budget de 3 000 000 F pour la réalisation d'une étude. Sachant que le coût de revient d'un questionnaire est estimé à 2 500 F, déterminez la taille de l'échantillon à constituer.",
        "La seconde méthode distingue les coûts fixes de l'étude et les coûts variables (directs) par questionnaire.",
      ],
      formulas: [
        'Echantillon (N) = (Budget − Coûts fixes) ÷ Coût direct par questionnaire',
        "Coût direct par questionnaire (CDQ) = CAQ + CVQ ; CAQ = coût d'administration d'un questionnaire ; CVQ = coût variable par questionnaire",
      ],
    },
    {
      paragraphs: [
        "Application 1 : Un cabinet dispose d'un budget de 3 500 000 F pour la réalisation d'une étude. Sachant que les charges fixes de cette étude sont évaluées à 1 500 000 F et que les charges variables par questionnaire s'élèvent à 800 F, quelle devra être la taille de l'échantillon à constituer ?",
        "Application 2 : Déterminez le coût d'administration d'un questionnaire (rémunération d'un enquêteur par questionnaire) à partir des informations suivantes :",
      ],
      list: [
        "Taille de l'échantillon = 3200 ménages",
        'Budget = 16 000 000 FCFA',
        'Charges fixes = 3 000 000 FCFA',
        'Frais de traitement = 900 000 FCFA',
        'Frais variables par questionnaire = 1250 FCFA',
      ],
    },
    { heading: "2.3. La détermination de la taille d'un échantillon probabiliste" },
    {
      heading: "2.3.1 Détermination de la taille d'un échantillon d'un sondage à plusieurs degrés",
      paragraphs: [
        "Cette méthode consiste à effectuer à différents niveaux successifs un tirage aléatoire. On tire au sort dans une base de sondage centralisatrice des unités primaires, dans celles-ci, on tire des unités secondaires, et ainsi de suite, jusqu'au tirage au sort des personnes physiques ou morales à interviewer.",
        "Application : Pour réaliser une étude dans une ville comme Abidjan, on tire au sort 5 communes, dans chaque commune 10 quartiers, dans chacun des quartiers 5 pâtés de maisons, dans les pâtés de maisons 5 immeubles, dans les immeubles 3 étages, dans les étages 2 appartements et dans chaque appartement une personne. Quelle sera la taille de l'échantillon qui sera constitué ?",
      ],
    },
    {
      heading: "2.3.2. Estimation et précision de l'échantillon probabiliste",
      paragraphs: [
        "Toute estimation tirée d'une enquête par sondage comporte une certaine marge d'erreur. La théorie des sondages permet de calculer cette marge d'erreur à condition que ce sondage ait été fait de manière aléatoire. La marge d'erreur d'une estimation est exprimée sous forme d'un seuil de confiance et d'un intervalle de confiance dans les termes suivants :",
        "Si sur un échantillon de taille (n), on a observé une fréquence (p) d'application d'un caractère ou d'une opinion, on a (s %) de chances pour que la fréquence dans la population mère figure dans une fourchette. Cette fourchette est appelée un intervalle de confiance et est notée IC = [p − e ; p + e].",
        'Notons : s = seuil de confiance ; n = taille de l\'échantillon ; t = seuil de probabilité, fonction de s, qui se lit dans la table de GAUSS ; e = écart ou marge d\'erreur ; q = 1 − p : pourcentage de personnes qui ne présentent pas le caractère observé.',
        'Les valeurs de t associées aux seuils de confiance courants sont :',
      ],
      table: {
        headers: ['(s) seuil de confiance', '(t) seuil de probabilité'],
        rows: [
          ['68 %', '1'],
          ['90 %', '1,645 ~ 1,65'],
          ['95 %', '1,96 ~ 2'],
          ['98 %', '2,33'],
          ['99 %', '2,576 ~ 2,58'],
          ['99,7 %', '2,96 ~ 3'],
        ],
      },
    },
    {
      paragraphs: ["La taille de l'échantillon est déterminée mathématiquement avec n comme taille de l'échantillon et e comme marge d'erreur acceptée."],
      formulas: ['n = t² × (p × q) ÷ e²', 'e = t × √(p × q ÷ n)'],
    },
    {
      heading: '2.3.3 Validité statistique',
      paragraphs: [
        "Il est admis qu'un échantillon de 30 individus au moins et dont la taille est ≥ à 1/7ème de la population de base est un échantillon représentatif ou exhaustif.",
        "Application 1 : On envisage de réaliser une enquête auprès des inactifs. Sachant qu'ils représentent 36 % de la population totale et que l'erreur acceptée est 3 % pour un seuil de confiance de 95 %. Calculer la taille de l'échantillon à constituer.",
        "Application 2 : Dans le seuil de confiance de 99% : 1- Déterminer l'erreur de la réponse d'un échantillon de 800 personnes si p = 0,4. 2- Quelle taille devrait avoir l'échantillon pour que l'erreur ne soit pas supérieure à 2% ? 3- Calculer l'intervalle de confiance.",
        "Application 3 : Au seuil de confiance de 95 % sachant que dans un échantillon de 1000 personnes 36 % ont regardé TV2 le dimanche à 20 h, estimez la proportion de téléspectateurs ayant regardé cette chaîne ce soir-là en tenant compte d'une marge d'erreur.",
      ],
    },
    {
      paragraphs: ["La formule issue de la méthode aléatoire ou probabiliste peut se décliner de la façon suivante (σ = écart type ; X̄ = panier moyen) :"],
      formulas: ['n = t² σ² ÷ e²', 'e = t σ ÷ √n', 'IC = [X̄ − e ; X̄ + e]'],
    },
    {
      paragraphs: [
        "Application 1 : Une étude dans le marché d'une commune d'Abidjan a donné les résultats suivants : au seuil de confiance de 95%, sachant que le panier moyen de la ménagère est de 500 F avec un écart type de 395 F et une marge d'erreur de 50 F, calculez la taille de l'échantillon ayant servi à la réalisation de cette étude.",
        "Application 2 : A partir d'une enquête réalisée auprès de 1000 personnes à la sortie d'un supermarché de la place, l'on s'est aperçu qu'au seuil de confiance de 90% le panier moyen du client était de 1 500 F avec un écart type de 450 F. TAF : Estimer le panier moyen des clients du magasin en tenant compte d'une marge d'erreur.",
        "Application 3 : Pour le lancement de son nouveau produit, une entreprise décide de réaliser une étude auprès des consommateurs potentiels au seuil de confiance de 99,7% avec une marge d'erreur de 2,5%. Cette entreprise vous fournit les informations suivantes concernant les statistiques de la population de base.",
      ],
      table: {
        headers: ['Critère', 'Modalité', 'Part'],
        rows: [
          ['Sexe', 'Hommes', '48,7%'],
          ['Sexe', 'Femmes', '51,3%'],
          ['Résidence', 'Zone urbaine', '73,3%'],
          ['Résidence', 'Zone rurale', '26,7%'],
          ['Age', '15 – 24 ans', '19,6%'],
          ['Age', '25 – 34 ans', '19,4%'],
          ['Age', '35 – 49 ans', '22,3%'],
          ['Age', '50 – 64 ans', '21,1%'],
          ['Age', '65 ans et plus', '17,6%'],
          ['Situation de famille', 'Mariés', '47,7%'],
          ['Situation de famille', 'Célibataires', '42,6%'],
          ['Situation de famille', 'Divorcés', '2,6%'],
          ['Situation de famille', 'Veufs', '7,1%'],
        ],
      },
    },
    {
      paragraphs: [
        'Le questionnaire sera administré par 15 enquêteurs.',
        "Travail à faire : 1°) Calculez la taille de l'échantillon à constituer. 2°) Présentez la composition de votre échantillon et l'organisation des enquêtés entre les enquêteurs.",
      ],
    },
  ],
};
