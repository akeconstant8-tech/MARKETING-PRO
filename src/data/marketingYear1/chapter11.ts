import type { TciChapter } from '../tciTypes';

export const mktChapter11: TciChapter = {
  id: 'mkt1ch11',
  kind: 'chapitre',
  level: 1,
  number: 11,
  title: 'Troisième partie, Chapitre 4 : La communication',
  intro: 'Objectif : Identifier les principaux moyens de communication.',
  sections: [
    {
      heading: 'I. Définition',
      paragraphs: [
        "La communication marketing consiste pour une organisation à transmettre des messages à son public en vue de modifier leurs comportements mentaux (motivation, connaissance, image, attitude, …) et par voie de conséquence leur comportement effectif.",
        "Alors que la promotion consiste à faciliter ou à stimuler certains comportements effectifs (notamment l'achat d'un produit par des moyens, exemple : une distribution gratuite d'un échantillon d'un produit, en vue de le faire essayer par les consommateurs).",
      ],
    },
    {
      heading: '1) Politique de communication',
      paragraphs: [
        "C'est l'énoncé qui guide la réflexion et l'action dans la création et le développement des relations avec différents partenaires.",
      ],
    },
    { heading: 'I) Les types de communication' },
    {
      heading: '1) La communication institutionnelle (corporate advertising)',
      paragraphs: [
        "Il s'agit de la publicité qui porte non sur les produits, mais sur l'entreprise elle-même en tant qu'institution, membre de la communauté. Elle a pour but de promouvoir les multiples aspects de son activité qui bénéficient à cette communauté, sous l'angle économique, technique, humain, social, etc.",
        "Ce type de communication vise alors à dégager la personnalité de l'entreprise, à positionner l'entreprise.",
      ],
    },
    {
      heading: '2) La communication commerciale',
      paragraphs: [
        "C'est le cas le plus fréquent. Un annonceur veut soutenir les ventes d'un produit ou d'une marque, lui procurer une meilleure image, le repositionner, le faire mieux connaître, etc.",
        "Ce type de communication s'adresse aux désirs des consommateurs.",
      ],
    },
    { heading: 'II) Les formes de communication' },
    {
      heading: '1) Les actions Médias',
      paragraphs: [
        "Il s'agit essentiellement de toutes les actions de communication, notamment la publicité, passant par les médias. Un support est un véhicule de la publicité, alors qu'un média est un groupe de supports de même nature. On a comme médias « traditionnels » : la presse, la télévision, la radio, l'affichage et le cinéma, auxquels vient s'ajouter internet.",
      ],
      table: {
        headers: ['Médias', 'Supports'],
        rows: [
          ['Télévision', 'La RTI1, RTI2, Canal+, TV5…'],
          ['Radio', 'Jam, fréquence2, nostalgie, RFI…'],
          ['Presse', 'Fraternité Matin, Gbich, Top Visage…'],
          ['Affichage', 'Panneaux routiers, bus, Murs…'],
          ['Cinéma', 'Majestic, Ivoire…'],
          ['Internet', 'Sites, Boîtes électroniques…'],
        ],
      },
    },
    { heading: '2) Les actions hors médias' },
    {
      heading: 'a) La promotion vente',
      paragraphs: [
        "Ensemble de techniques provoquant une augmentation rapide mais provisoire des ventes d'un bien, par l'attribution d'un avantage exceptionnel. La promotion des ventes vise en général l'une ou une combinaison des quatre cibles suivantes : les Consommateurs, les Distributeurs, la Force de vente, les Prescripteurs. Les techniques de promotion des ventes les plus courantes sont :",
      ],
      list: [
        "Les réductions de prix : le produit est offert à un prix temporaire inférieur au prix habituel. Les réductions de prix sont simples, rapides et efficaces.",
        "Les primes : attirer le client en lui offrant, à l'occasion de l'achat d'un produit, la perspective d'obtenir gratuitement un autre article ou service.",
        "Les essais et échantillonnages : remise à l'utilisateur potentiel d'un spécimen gratuit du produit (échantillonnage) ou on procède à un essai gratuit ou à une démonstration.",
        "Les jeux et les concours : ils sont utilisés en période de croissance du chiffre d'affaires pour augmenter les ventes et fidéliser la clientèle, pour atténuer la saisonnalité du produit, pour entretenir la notoriété de la marque.",
        "Les remises et primes : réductions temporaires de prix aux distributeurs et en fonction des quantités achetées, des primes sont versées en espèces ou sous forme d'achat gratuit.",
        'Les concours et aides diverses : cadeaux en espèces ou en nature, conseils financiers, formation…',
      ],
    },
    {
      heading: 'b) Mécénat',
      paragraphs: [
        "L'entreprise crée ou finance une activité culturelle ou une œuvre sociale, sportive, artistique, etc. dans un but apparemment désintéressé. Elle profite néanmoins de l'action qu'elle mène dans l'intérêt général pour se faire connaître du public et créer une image de bienfaisance en qui les consommateurs peuvent avoir confiance.",
      ],
    },
    {
      heading: 'c) Le sponsoring (Parrainage)',
      paragraphs: [
        "Soutien financier qu'une entreprise apporte à une activité culturelle, sportive et qu'elle fait savoir avec force pour obtenir des retombées publicitaires quasi-gratuites.",
      ],
    },
    {
      heading: 'd) Le marketing direct',
      paragraphs: [
        "Ensemble des moyens de communication directs, individuels et interactifs autre que le face à face, en vue de déclencher de la part des personnes visées une action immédiate. Ses principales techniques sont :",
      ],
      list: [
        'Le publipostage ou mailing : message de marketing direct envoyé par la poste et comportant une offre commerciale.',
        "La publicité directe : annonce dans un média assortie d'une offre d'achat et d'un coupon réponse.",
        'Le phoning : contact direct avec un client ou un prospect en émission ou réception d\'appel par téléphone.',
      ],
    },
    {
      heading: 'e) Relations Publiques',
      paragraphs: [
        "Contacts personnels avec des publics particuliers (Pouvoirs publics, Prescripteurs, Leaders d'opinion, Distributeurs, Milieux intellectuels et financiers, etc.) pour les informer, gagner leur sympathie et les inciter à diffuser à leur tour, à des publics plus larges, les informations qu'on leur a fournies. Les moyens d'action des relations publiques sont : les visites d'entreprise, le service consommateur, les cadeaux d'entreprise, les relations avec la presse.",
      ],
    },
    {
      heading: 'f) Manifestations commerciales',
      paragraphs: ["Faire connaître à des clients potentiels, les activités et les produits d'une entreprise."],
    },
  ],
};
