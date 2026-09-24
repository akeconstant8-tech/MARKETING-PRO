import type { TciChapter } from '../tciTypes';

export const mkt2Chapter9: TciChapter = {
  id: 'mkt2ch9',
  kind: 'chapitre',
  level: 2,
  number: 9,
  title: 'Sujets du BTS Marketing (sessions 2019, 2018 et 2024)',
  intro:
    "Brevet de Technicien Supérieur — Filière tertiaire : Finances-Comptabilité et Gestion des Entreprises — Epreuve : Marketing — Durée de l'épreuve : 2 heures — Coefficient : 2.",
  sections: [
    { heading: 'BTS — Session 2019' },
    {
      paragraphs: [
        "La CFCI est une entreprise ivoirienne spécialisée dans la fabrication de produits cosmétiques à base de beurre de karité et d'extraits de plantes naturelles.",
        "Elle évolue sur un marché potentiel de 3 750 000 femmes dont 15% pour une raison ou une autre n'utilisent présentement pas de produits cosmétiques. Celles qui utilisent les produits cosmétiques dépensent en moyenne 6500 FCFA par mois en produits cosmétiques. La part de marché absolue de la CFCI est de 19,2%.",
      ],
    },
    {
      heading: 'Travail à faire 1',
      list: [
        '1/ Déterminez en nombre de femmes : a) Les Non Consommateurs Absolus ; b) Le Marché Actuel de la Profession',
        "2/ Déterminez le chiffre d'affaires annuel de : a) La CFCI ; b) La concurrence",
      ],
    },
    {
      paragraphs: [
        "En 2019, la CFCI désire lancer un nouveau produit : une crème antiride. Une étude de marché révèle que pour une première année, elle pourra vendre 374 000 unités au prix de vente unitaire de 6845 FCFA. Par ailleurs, les charges variables unitaires sont estimées à 4745 FCFA tandis que les charges fixes sont de 108 987 000 FCFA.",
      ],
    },
    {
      heading: 'Travail à faire 2',
      list: ['1) Déterminez le Seuil de Rentabilité en valeur et en quantité.', '2) Définissez les termes suivants : marché, produit, étude de marché.'],
    },
    {
      paragraphs: [
        "La fabrication de cette crème nécessite l'importation de tubes en plastique pour le conditionnement. Les caractéristiques de la première commande sont :",
      ],
      list: [
        'Commande : 15 000 tubes emballés dans des cartons ondulés pouvant contenir chacun 300 tubes.',
        'Prix unitaire : 1,5 €',
        'Préacheminement : 543 €',
        'Douane export : 98 €',
        'Transit export : 75 €',
        'Acconage export : 2 € par carton',
        'Fret Net : 200 USD',
        'Assurance : 12 USD',
      ],
    },
    { paragraphs: ['NB : 1 € = 656 FCFA ; 1 USD = 550 FCFA'] },
    {
      heading: 'Travail à faire 3',
      list: ['1) Déterminez le nombre de cartons', '2) Déterminez les prix EXW, FAS, FOB, CFR et CIF de cette commande.'],
    },
    { heading: 'BTS — Session 2018' },
    {
      heading: 'Dossier 1',
      paragraphs: [
        "Créée en 2000, l'entreprise REY est située dans la commune de GRAND-BASSAM. Elle est spécialisée dans la fabrication et la commercialisation des produits alimentaires. Leader dans son domaine, elle voit ses ventes au cours des cinq dernières années, suite à une rude concurrence, principalement pour les boîtes de jus d'ananas. M. Ketté, Directeur Commercial, vous communique les informations relatives aux ventes (en millions de FCFA) des boîtes de jus d'ananas sur le marché ivoirien.",
      ],
      table: {
        headers: ['Entreprises \\ Années', '2011', '2012', '2013', '2014', '2015'],
        rows: [
          ['Kassi', '420', '650', '600', '715', '700'],
          ['Goba', '400', '425', '500', '623', '598'],
          ['Rey', '410', '420', '502', '500', '496'],
          ['Cool', '625', '695', '750', '775', '800'],
          ['Affro', '550', '673', '720', '766', '780'],
        ],
      },
    },
    {
      heading: 'Travail à faire',
      list: [
        "1/ Calculez les parts de marché de l'entreprise REY d'année en année.",
        '2/ Calculez pour chaque année les parts de marché relatives de la société REY.',
        "3/ Calculez les taux de croissance du marché d'année en année et le taux de croissance moyen.",
      ],
    },
    {
      heading: 'Dossier 2',
      paragraphs: [
        "Pour répondre aux besoins de ses clients, après l'attentat meurtrier qu'a connu cette commune, l'entreprise REY passe une commande de 10 000 boîtes de fromage conditionné dans des cartons chez son fournisseur GM situé à Nantes. Ainsi, pour faciliter son importation, son transitaire lui donne les informations suivantes :",
      ],
      list: [
        'Poids total de la commande : 36,6 tonnes.',
        'Emballages : cartons contenant chacun 25 boîtes.',
        "Prix d'achat : 7 € /kg.",
        "Marge commerciale de 30% du prix d'achat.",
        'Transport Nantes-Marseille : 9 € /tonne.',
        'Entreposage : 5 jours à raison de 0,8 € / jour /tonne.',
        'Transit export : 7 €/tonne.',
        'Douane export : 450 €',
        'Chargement sur camion : 4,6 € /tonne.',
        'Frais de mise à FOB : 70 € /tonne.',
        'Transport maritime : 35 € /tonne.',
        'Assurance : 490 780 FCFA',
        'Acconage import : 15 FCFA /kg',
      ],
    },
    { paragraphs: ['NB : 1 € = 656 FCFA. Déterminez les prix EXW, FAS, FOB, CFR, CIF et DPU.'] },
    { heading: 'BTS — Session 2024' },
    {
      heading: 'Dossier 1',
      paragraphs: [
        "Pour déterminer le prix de vente de sa nouvelle crème glacée, le Glacier du Tonkpi a réalisé une étude auprès de 600 personnes. Les résultats sont les suivants :",
      ],
      table: {
        headers: ['Prix de vente', '350', '400', '450', '500', '550', '600', '650', '700'],
        rows: [
          ['prix excessif', '0', '10', '55', '65', '95', '140', '195', '40'],
          ['prix insuffisant', '120', '235', '115', '75', '55', '0', '0', '0'],
        ],
      },
    },
    {
      heading: 'Travail à faire',
      list: [
        "1- Calculez le prix psychologique d'acceptabilité.",
        "2- Déterminez l'intervalle de prix ayant recueilli plus de 50% d'acheteurs potentiels.",
      ],
    },
    {
      heading: 'Dossier 2',
      paragraphs: [
        'Le Glacier du Tonkpi passe une commande de 25 sacs de lait chez son fournisseur basé à Marseille. Les caractéristiques de commande sont :',
      ],
      list: [
        'Poids Brut total : 1350 kg',
        "Prix Départ usine d'un sac de lait : 135 €",
        'Préacheminement : 150 €',
        'Douane export : 120 €',
        'Transit export : 75 €',
        'Magasinage export : 142 €',
        'Acconage export : 0,15 € le kg brut',
        'Fret Marseille – Abidjan : 60 € / tonne brute',
        'Assurance : 0,5% CFR',
      ],
    },
    {
      paragraphs: [
        'Travail à faire : Calculez les prix EXW, FAS, FOB, CFR et CIF de cette commande.',
        "NB : Arrondir les résultats à l'unité la plus proche. 1 € = 656 FCFA",
      ],
    },
    {
      heading: 'Dossier 3',
      list: [
        '1. Définissez : a. Le marché potentiel d\'un produit ; b. Le marketing ; c. Le besoin ; d. Le sondage',
        '2. a. Enumérez les différents types de circuit de distribution. b. Donnez pour chaque type de circuit un exemple de produit adapté',
      ],
    },
  ],
};
