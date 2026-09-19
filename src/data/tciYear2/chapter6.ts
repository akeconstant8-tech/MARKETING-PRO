import type { TciChapter, TciDiagram } from '../tciTypes';

const diagramFactoring: TciDiagram = {
  width: 680,
  height: 340,
  boxes: [
    { label: 'Exportateur\n(Fournisseur)', x: 20, y: 20, w: 170, h: 55, emphasis: true },
    { label: 'Importateur\n(Client)', x: 490, y: 20, w: 170, h: 55, emphasis: true },
    { label: "Société d'affacturage\n(Factoring)", x: 245, y: 150, w: 190, h: 60, emphasis: true },
    { label: "Société d'assurance-\ncrédit", x: 245, y: 275, w: 190, h: 55, emphasis: true },
  ],
  arrows: [
    { points: [[190, 47], [490, 47]], badge: { text: '1' } },
    { points: [[250, 150], [105, 75]], badge: { text: '2' } },
    { points: [[575, 75], [435, 165]], badge: { text: '4' } },
    { points: [[340, 275], [340, 210]], badge: { text: '3' } },
  ],
  labels: [
    { text: 'Expédition de la marchandise', x: 340, y: 36, anchor: 'middle' },
    { text: 'Paiement anticipé', x: 110, y: 130, anchor: 'start' },
    { text: "Paiement à", x: 540, y: 128, anchor: 'start' },
    { text: "l'échéance", x: 540, y: 144, anchor: 'start' },
    { text: 'Couverture', x: 352, y: 238, anchor: 'start' },
    { text: 'des risques', x: 352, y: 254, anchor: 'start' },
  ],
  caption: 'Mécanisme du factoring',
};

export const year2Chapter6: TciChapter = {
  id: 'y2ch6',
  kind: 'chapitre',
  level: 2,
  number: 18,
  title: 'Les problèmes financiers du commerce international',
  intro:
    "Dans l'exercice de leurs activités internationales, les importateurs et exportateurs sont très souvent confrontés au problème de risque de change.",
  sections: [
    {
      heading: "I - Besoins financiers à l'import et à l'export",
      paragraphs: [
        "Les importateurs et exportateurs ont toujours manifesté le besoin d'avoir recours à des financements auprès des banques ou des compagnies d'assurances pour couvrir les charges relatives aux opérations d'importation et d'exportation notamment les frais de douane, de transport, d'assurance et de transit.",
      ],
    },
    {
      heading: 'II - Les sources de financement',
    },
    {
      heading: "1 - A l'exportation",
      paragraphs: ['Nous distinguons plusieurs sources de financement:'],
    },
    {
      heading: "1-1 - Des mesures accordées par l'Etat",
      paragraphs: [
        "Des mesures classiques peuvent être accordées aux exportateurs par l'Etat. Ce sont : les avantages fiscaux et l'allégement des procédures douanières",
      ],
    },
    {
      heading: '1-2 - Les crédits de financement',
      paragraphs: ["Ils sont octroyés par les banques aux exportateurs pour couvrir les insuffisances de leurs trésoreries."],
    },
    {
      heading: "1-3 - L'avance en devise à l'exportation",
      paragraphs: [
        "Elle permet d'emprunter pour la durée choisie, la valeur en devise de la facture émise auprès d'une banque en entendant le paiement (en devise) du client qui servira à rembourser la banque.",
      ],
    },
    {
      heading: "1-4 - La mobilisation des créances nées à l'exportation",
      paragraphs: [
        "Il s'agit des prêts accordés par les banques pour financer les opérations d'exportation. Pour ce faire, il faut que les marchandises soient effectivement expédiées.",
      ],
    },
    {
      heading: "1-5 - L'affacturage (factoring)",
      paragraphs: [
        "Il consiste à transférer ses créances commerciales à une société de factoring (un facteur) contre un paiement anticipé de l'exportation. C'est la société de factoring qui se chargera du recouvrement et en garantie la bonne fin contre le risque de non-paiement ou d'insolvabilité de l'acheteur.",
      ],
    },
    {
      heading: 'Mécanisme du factoring',
      diagram: diagramFactoring,
    },
    {
      heading: "2 - A l'importation",
      paragraphs: ['Nous retenons comme source de financement :'],
    },
    {
      heading: '2-1 - Le crédit acheteur',
      paragraphs: [
        "La banque se substitue à l'importateur en accordant un crédit à celui-ci afin de régler le fournisseur pour le compte de ce dernier (importateur).",
      ],
    },
    {
      heading: '2-2 - La mobilisation des indemnités de sinistre',
      paragraphs: [
        "Pour faire face au retard de paiement des indemnités de sinistre de l'assureur, l'entreprise sollicite auprès d'une banque un crédit correspondant au montant de l'indemnité. Dans ce cas, le banquier exigera de l'assureur, le transfert des droits à l'indemnité.",
      ],
    },
    {
      heading: '2-3 - Le crédit documentaire',
      paragraphs: [
        "Il favorise le financement de l'opération d'importation à partir des documents transmis à la banque émettrice par le vendeur a travers la banque notificatrice.",
      ],
    },
    {
      heading: "2-4 - L'avance en devise à l'importation",
      paragraphs: [
        "Elle permet à l'importateur d'emprunter la valeur de la marchandise importée en devise auprès d'une banque pour payer ses fournisseurs.",
      ],
    },
    {
      heading: 'III - Risque de change',
    },
    {
      heading: '1 - Définitions',
    },
    {
      heading: '1-1 Risque',
      paragraphs: ["Dans le domaine financier, le mot risque évoque l'idée de perte ou baisse éventuelle d'une créance."],
    },
    {
      heading: '1-2 - Le change',
      paragraphs: [
        "C'est la conversion d'une monnaie en une autre.",
        "En effet, c'est l'opération qui consiste à acheter ou à vendre des devises contre la monnaie nationale. Cette conversion s'effectue à partir d'un taux appelé taux de change.",
      ],
    },
    {
      heading: '1-3 - La devise',
      paragraphs: [
        'Une devise est une monnaie étrangère.',
        "Toutes les devises ont code ISO (International Standardisation Organisation) dont les principaux sont les suivants :",
      ],
      list: [
        'USD: Dollar Americain',
        'GBP: Livre sterling (Great Britain Pound)',
        'XOF: (Afrique de l\'ouest): franc CFA',
        'XAF: (Afrique centrale) : franc CFA',
        'EURO : Europe',
      ],
    },
    {
      heading: '1-4 - La formation du taux de change',
      paragraphs: [
        "Le taux de change exprime la valeur d'une monnaie dans une autre.",
        "Il se détermine par la confrontation de l'offre et de la demande des devises.",
      ],
    },
    {
      heading: '2 - Le marché des changes',
      paragraphs: [
        "Le marché des changes est un marché où s'achètent et se vendent les devises, c'est-à-dire les monnaies étrangères convertibles.",
        'On distingue le marché des changes au comptant et le marché des changes à terme.',
      ],
    },
    {
      heading: '2-1 - Le marché des changes au comptant',
      paragraphs: [
        "L'achat ou la vente des devises se réalise à un coût déterminé au moment de la conclusion du contrat. Le règlement et la livraison ont lieu immédiatement ou dans un délai de deux jours ouvrables au plus tard.",
      ],
    },
    {
      heading: '2-2 - Le marché des changes à terme',
      paragraphs: [
        "C'est un marché sur lequel l'achat et la vente de devises s'effectuent à un coût déterminé lors de la conclusion du contrat. Mais le règlement et la livraison des devises ont lieu à une certaine échéance pouvant atteindre plusieurs mois.",
        "On peut mesurer l'impact d'une évolution de la devise selon la position à travers le tableau suivant :",
      ],
      table: {
        headers: ["Position de l'entreprise / Evolution de la devise", 'Devise à la hausse', 'Devise à la baisse'],
        rows: [
          ['Exportateur', 'Favorable', 'Défavorable'],
          ['Importateur', 'Défavorable', 'Favorable'],
        ],
      },
    },
    {
      heading: '3 - Techniques de couverture des risques de change',
      paragraphs: [
        'Le risque de change est un risque lié à une variation des parités monétaires.',
        "Il intervient à l'exportation dès qu'il y a facturation en devises étrangères et à l'importation dès qu'il y a achat en devises étrangères.",
        'Le risque de change peut être couvert par les techniques suivantes :',
      ],
    },
    {
      heading: "3-1 - Le choix d'une monnaie de facturation",
      paragraphs: ["Les parties peuvent s'accorder sur le choix de la monnaie au cours stable (F CFA, EURO)"],
    },
    {
      heading: 'a - Le termaillage',
      paragraphs: [
        "C'est le fait qu'un exportateur choisit le moment d'encaissement d'une créance libellée en devise ou le fait qu'un importateur choisit le moment de paiement d'une dette libellée en devise en fonction de l'évolution du cours de change de cette devise.",
        "Ainsi si la monnaie se déprécie, l'exportateur retarde l'encaissement. Mais si la monnaie s'apprécie, il accélère l'encaissement.",
      ],
    },
    {
      heading: 'b - La compensation',
      paragraphs: [
        "C'est une forme élaborée du troc. C'est l'opération qui consiste à lier tout ou partie du règlement d'une exportation à l'achat de biens ou de services issus du pays destinataire de l'exportation. En clair, c'est le fait d'échanger des marchandises contre d'autres marchandises dans le pays de l'acheteur.",
      ],
    },
    {
      heading: 'c - Le forfaitage',
      paragraphs: [
        "Il consiste à céder au comptant une créance issue d'une exportation à un forfaitiste (société de recouvrement). Le taux de change obtenu par l'exportateur est celui en vigueur le jour de l'escompte et non pas celui qui sera quotté à la date d'échéance de l'effet.",
      ],
    },
    {
      heading: "d - L'avance en devise",
      paragraphs: [
        "C'est une opération par laquelle une banque prête des devises à une entreprise exportatrice ou importatrice. A l'exportation elle est à la fois mode de financement et mode de couverture du risque de change. Sa demande est possible dès que la créance est née. A l'importation, elle répond à une préoccupation de couverture du risque de change. L'importateur emprunte des devises pour régler son fournisseur dans une autre devise.",
      ],
    },
    {
      heading: 'd - Les opérations de couverture à terme',
      paragraphs: [
        "elles se fondent sur un échange de gré à gré d'une devise contre une autre sur la base d'un cours comptant minoré d'un déport ou majoré d'un report avec livraison réciproque à une date convenue.",
      ],
      list: [
        "Déport : c'est le fait que le cours à terme soit inférieur au cours du jour. La monnaie s'est donc dépréciée",
        "Report : on parle de report lorsque le cours à terme est supérieur au cours du jour. La monnaie s'est donc appréciée.",
      ],
    },
    {
      heading: 'IV - Détermination du cours à terme',
      paragraphs: ['Le cours à terme se détermine par la formule suivante :'],
      formulas: ['CT = CJ + [ CJ × (Tm − Td) ÷ 100 ] × (n ÷ 360)'],
    },
    {
      list: [
        'CT = Cours à terme',
        'CJ = Cours du jour ou cours comptant',
        'Tm = Taux de la monnaie locale',
        'Td = Taux de la devise',
        'n = nombre de jours (durée)',
      ],
      formulas: [
        'Montant à Payer (MAP) = CT × Montant de la dette',
        'Montant Net à Encaisser (Net à payer par la banque) = MAP ± Commission bancaire',
      ],
    },
    {
      paragraphs: [
        "NB : la commission bancaire réduit le montant de la créance à encaisser l'exportation. Par contre à l'importation, elle augmente la dette à payer.",
      ],
    },
    {
      heading: 'Exercices de synthèses',
    },
    {
      heading: 'Exercice I',
      paragraphs: [
        "La coopérative GEDEON de MAHAPLEU dans la région de Danané a exporté des noix de cola à son client à Dubaï.",
        'La facture s\'élève à 4500 USD payable dans deux mois.',
        'Les informations financières sont les suivantes :',
        'Cours du jour : 1dollar = 615 F CFA',
        'Taux de devise = 3,5%',
        'Taux du marché monétaire = 1,5%',
        'Echéance = 2 mois',
        'Commission bancaire = 1‰',
        'TRAVAIL A FAIRE :',
      ],
      list: [
        'Déterminez le cours à terme',
        'Le montant à percevoir par la banque',
        'Le montant à encaisser par la coopérative GOUEDAN à la banque.',
      ],
    },
    {
      paragraphs: ['RESOLUTION'],
    },
    {
      heading: 'Exercice II',
      paragraphs: [
        "Les établissements FELIX sont spécialisés dans le négoce de vin à l'import comme à l'export. Ils traitent le plus souvent en USD et en EURO. Ils acceptent la facturation à l'import en FCFA et en USD. Ils paient leurs importations (dettes) à 90 jours et se font à 60 jours. Leur portefeuille actuel comprend :",
      ],
      list: [
        'Créance export = 200 000 USD à 60 jours',
        'Créance export = 365 000€ à 60 jours',
        "Dette à l'import = 38 000 USD à 90 jours.",
      ],
    },
    {
      paragraphs: [
        'Les informations financières sont les suivantes :',
        'Cours du jour : 1USD = 715,000 ⇒ 715,0050 FCFA',
        '1€ = 655,9570 ⇒ 655,9680 FCFA',
        '1point = 1/10 000',
      ],
      table: {
        headers: ['Déport (-) report (+)', '30 jours', '60 jours', '90 jours'],
        rows: [
          ['USD', '35', '68', '95'],
          ['EURO', '-20', '- 46', '- 67'],
        ],
      },
    },
    {
      paragraphs: [
        "TRAVAIL A FAIRE : Déterminez les montants à encaisser ou à payer par les établissements FOFIE, sachant que la commission de change ou bancaire est de 2‰",
        "NB : À l'exportation les devises sont vendues à la banque à leur coût d'achat le plus bas. A l'importation les devises sont achetées à la banque à leur coût vendeur le plus élevé.",
        'RESOLUTION',
      ],
    },
  ],
};
