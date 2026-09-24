import type { TciChapter } from '../tciTypes';

export const mkt2Chapter5: TciChapter = {
  id: 'mkt2ch5',
  kind: 'chapitre',
  level: 2,
  number: 5,
  title: "Première partie, Chapitre V : Les techniques de paiement à l'international",
  intro:
    "Le choix de la technique de paiement dans le contrat de vente est d'autant plus important dans les relations commerciales internationales que les risques de non-paiement sont décuplés du fait de l'éloignement des entreprises. Différentes techniques sont à la disposition des entreprises. Il existe les techniques de paiement non documentaire et les techniques de paiement documentaire.",
  sections: [
    {
      paragraphs: ["Nous traiterons dans ce cadre de FCGE seulement les techniques de paiement documentaire."],
    },
    { heading: 'I- Le crédit documentaire (CREDOC)' },
    {
      paragraphs: [
        "Dans le cadre du commerce international, les montants très élevés et l'éloignement des partenaires ont nécessité la création par les banques d'un instrument de paiement spécifique appelé « crédit documentaire », lettre de crédit (L/C) ou plus familièrement « CREDOC ». Tout en conciliant l'intérêt du vendeur (être payé) et celui de l'acheteur (recevoir dans les qualités, les quantités et les délais contractuels, la marchandise commandée), il permet d'apporter la sécurité de paiement recherchée par le vendeur et en même temps la sécurité de livraison pour l'acheteur.",
        "La difficulté réside dans les positions diamétralement opposées de l'acheteur et du vendeur. La situation idéale pour le premier est « je reçois la marchandise, je paie », alors que pour le second c'est « vous payez, j'envoie la marchandise ».",
        'Le crédit documentaire est une technique connue mondialement et existant depuis très longtemps qui permet de satisfaire ces deux exigences !',
      ],
    },
    {
      heading: '1. Définition',
      paragraphs: [
        "Le crédit documentaire est l'engagement d'une banque de payer un montant défini au fournisseur d'une marchandise ou d'un service, contre la remise, dans un délai déterminé, de documents (énumérés) qui prouvent que les marchandises ont été expédiées ou que les prestations ou services ont été effectués. L'objet de ces documents est de justifier l'exécution correcte des obligations de l'exportateur. Ces documents seront ensuite transmis par la banque à l'acheteur contre remboursement, pour que ce dernier puisse prendre possession de la marchandise.",
        "Ainsi, l'acheteur ne transmet aucun fonds au vendeur tant qu'il n'a pas reçu les documents pour prendre possession de la marchandise, et le vendeur reçoit le paiement dès qu'il l'a expédiée, pour autant que les obligations documentaires aient été respectées.",
        'La technique du crédit documentaire répond donc à une double exigence :',
      ],
      list: [
        "Faire bénéficier l'exportateur d'un engagement bancaire émanant de la banque de l'importateur et distincte de la sienne (celle de l'exportateur), du paiement effectif de l'importateur (la banque s'engageant à payer, même si l'importateur éprouve une quelconque difficulté à le faire) ;",
        "Donner l'assurance à l'importateur que le paiement par sa banque ne sera effectué que si le vendeur peut montrer qu'il a correctement exécuté ses propres obligations contractuelles.",
      ],
    },
    {
      heading: '2. Différents types de CREDOC',
      list: [
        "Credoc révocable : avec ce type de crédit, l'acheteur peut à tout moment revenir sur sa promesse d'achat et demander à sa banque d'annuler le Credoc et cela même si le vendeur avait commencé à exécuter son opération. Ce type de Credoc peut mettre ainsi le vendeur dans une situation embarrassante.",
        "Le crédit documentaire irrévocable : qui ne peut être amendé ou annulé que si toutes les parties concernées y consentent.",
        "Le crédit documentaire irrévocable et confirmé : en plus de l'engagement irrévocable de payer de la banque émettrice, le vendeur obtient également celui d'une banque appelée « banque confirmante » de son propre pays ou d'une grande banque internationale située dans un pays à risque politique pratiquement nul.",
      ],
    },
    {
      heading: 'a. Les acteurs du crédit documentaire',
      list: [
        "Le donneur d'ordre : il est le plus souvent l'acheteur ou un intermédiaire qui agit pour le compte de l'acheteur (exemple : une centrale d'achat ou d'importation). C'est celui qui donne les instructions d'ouverture du crédit documentaire à la banque émettrice.",
        "Le bénéficiaire : le bénéficiaire du crédit documentaire est celui en faveur de qui est ouvert le crédit documentaire. Il s'agit donc du vendeur.",
        "La banque émettrice : c'est la banque qui procède à l'ouverture du crédit documentaire sur base des instructions de son client : le donneur d'ordre. Elle est généralement située dans le pays de l'acheteur et s'engage directement vis-à-vis du bénéficiaire.",
        "La banque notificatrice : c'est la banque correspondante de la banque émettrice dans le pays du vendeur. Elle va notifier au vendeur l'ouverture du crédit documentaire.",
      ],
    },
    {
      heading: "b. L'accréditif",
      paragraphs: [
        "C'est un document que les banques mettent à la disposition de leurs clients pour l'ouverture d'un Credoc. Ce document est adressé à l'exportateur et comporte des mentions relatives à ses obligations contractuelles :",
      ],
      list: ['La liste des documents à fournir', 'Date limite d\'expédition des marchandises', 'Date limite de présentation des documents à la banque émettrice'],
    },
    {
      heading: 'c. Présentation de la technique du crédit documentaire',
      paragraphs: [
        "Note : la lecture de ce schéma se fait le plus facilement en suivant la numérotation dans l'ordre correspondant à l'évolution des opérations. (Le schéma lui-même n'apparaît pas dans le support de cours fourni : seule cette note figure à la page 30.)",
      ],
    },
    {
      heading: '3- Les avantages du crédit documentaire',
      paragraphs: ['Il permet entre autres de payer de manière aisée.'],
      list: [
        'Il permet une protection juridique,',
        "Il répond au besoin de financement de l'importateur ou l'exportateur,",
        "Il élimine le risque commercial (insolvabilité du client), réduit des risques politiques, et permet également d'éviter les impayés.",
        "Il permet également à l'importateur de recevoir des documents qui sont conformes aux termes et conditions du crédit documentaire.",
      ],
    },
    {
      heading: '4- Les inconvénients',
      paragraphs: ['Ce mode de règlement est relativement :'],
      list: ['Complexe et minutieux', 'Coûteux'],
    },
    { heading: 'II- La remise documentaire export (Export payment against documents)' },
    {
      heading: '2-1. Contexte',
      paragraphs: [
        "Vous traitez un marché avec un acheteur étranger. En raison du montant faible, vous ne souhaitez pas passer par un crédit documentaire. Une solution intermédiaire, moins lourde, mais aussi moins sécurisée est possible : la Remise documentaire.",
      ],
    },
    {
      heading: '2-2. Définition',
      paragraphs: [
        "La remise documentaire (ou payment against documents) est un mode de paiement bancaire reposant sur l'engagement de la banque de l'acheteur à ne délivrer les documents que contre paiement, acceptation d'une traite ou aval d'une traite.",
      ],
    },
    {
      heading: '2-3. Déroulement',
      paragraphs: [
        "Vous remettez à votre banque les documents originaux qui sont nécessaires à votre acheteur pour dédouaner sa marchandise pour encaissement.",
        "Votre banque envoie les documents à la banque de votre acheteur avec instruction, selon votre demande, de ne libérer les documents à votre acheteur que :",
      ],
      list: [
        'Contre paiement (débit du compte de votre client).',
        "Contre acceptation d'une traite que vous aurez jointe au jeu de documents",
        "Contre aval bancaire à apposer sur une traite que vous aurez jointe au jeu de documents.",
      ],
    },
    {
      paragraphs: ["Usuellement, les documents transmis dans le cadre d'une remise documentaire sont :"],
      list: [
        'La Facture commerciale en plusieurs exemplaires,',
        'Le Document de transport,',
        "Le Certificat d'origine,",
        'La Liste de colisage et de poids,',
        "Le Certificat d'assurance,",
        'Le Certificat phytosanitaire,',
        "La Traite (si acceptation ou aval).",
      ],
    },
    {
      heading: '2.4- Avantages',
      list: ['Elle est un système plus simple à mettre en place', 'Elle est plus rapide', 'Elle est moins chère'],
    },
    {
      heading: '2.5- Inconvénients',
      list: [
        "Contrairement au crédit documentaire, il n'y a donc aucune garantie de paiement de la banque de l'acheteur.",
        "En cas de refus ou d'incapacité de l'acheteur de payer les documents, vous devrez assumer le coût du rapatriement des marchandises, à moins de trouver un nouvel acheteur sur place.",
        "En cas d'acceptation d'un effet : à l'échéance, l'effet peut être impayé, malgré l'acceptation de l'acheteur.",
      ],
    },
    {
      paragraphs: [
        "A retenir : Une remise documentaire ne présente aucun engagement bancaire à payer. Elle est à réserver à de petites commandes ou à des acheteurs connus et assurés (assurances crédit).",
      ],
    },
    {
      heading: '2.6 Les différents types de remise documentaire',
      list: [
        "La remise D/P, c'est-à-dire document contre paiement cash : cas où l'importateur paie immédiatement le prix au banquier présentateur au comptant (chèque ou virement)",
        "La remise D/A, c'est-à-dire document contre acceptation (traite) : cas où l'importateur n'obtient les documents que contre acceptation d'une ou plusieurs lettres de change tirées sur lui et payables à une échéance.",
      ],
    },
    {
      heading: '2.7 Les intervenants',
      paragraphs: ['Cette technique fait intervenir quatre parties :'],
      list: [
        "Le donneur d'ordre : c'est l'exportateur qui donne un mandat à sa banque.",
        "La banque remettante : c'est la banque de l'exportateur à qui l'opération a été confiée par le vendeur lui-même.",
        "L'importateur : c'est le débiteur de la banque commerciale.",
        "La banque présentatrice : c'est la banque de l'importateur chargée de l'encaissement auprès de la banque remettante.",
      ],
    },
    {
      heading: "2.8 La lettre d'instruction",
      paragraphs: ["C'est un document par lequel l'exportateur mentionne l'ensemble de ses instructions qui sont :"],
      list: [
        'La liste des documents fournis par lui-même',
        "Moyen de règlement que sa banque doit exiger de l'importateur (chèque, virement…)",
        "Mesure à prendre si les documents ne sont pas acceptés (entreposage, vente à d'autres clients, réexpédition, entraînant des coûts logistiques importants…)",
      ],
    },
    {
      heading: '2.9 Fonctionnement',
      paragraphs: [
        "(Le schéma de fonctionnement annoncé à cette rubrique n'apparaît pas dans le support de cours fourni : seul le titre figure à la page 32.)",
      ],
    },
  ],
};
