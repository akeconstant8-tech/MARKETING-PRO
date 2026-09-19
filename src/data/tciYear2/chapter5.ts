import type { TciChapter, TciDiagram } from '../tciTypes';

const diagramSwift: TciDiagram = {
  width: 680,
  height: 280,
  boxes: [
    { label: 'Importateur (Client en CI)', x: 20, y: 20, w: 220, h: 50 },
    { label: "Banque de l'importateur (SGBCI)", x: 20, y: 190, w: 220, h: 60 },
    { label: "Banque de l'exportateur (BNP PARIBAS)", x: 440, y: 190, w: 220, h: 60 },
    { label: "Exportateur à l'étranger", x: 440, y: 20, w: 220, h: 50 },
  ],
  arrows: [
    { points: [[130, 70], [130, 190]] },
    { points: [[240, 220], [440, 220]] },
    { points: [[550, 190], [550, 70]] },
  ],
  labels: [
    { text: 'Demande de', x: 145, y: 122, anchor: 'start' },
    { text: 'virement', x: 145, y: 138, anchor: 'start' },
    { text: 'Transfert électronique par', x: 340, y: 204, anchor: 'middle' },
    { text: 'Ordinateurs', x: 340, y: 240, anchor: 'middle' },
    { text: 'Avis de', x: 565, y: 122, anchor: 'start' },
    { text: 'réception', x: 565, y: 138, anchor: 'start' },
  ],
  caption: 'Le mécanisme du réseau SWIFT',
};

const diagramRemdoc: TciDiagram = {
  width: 660,
  height: 300,
  boxes: [
    { label: 'Importateur', x: 20, y: 20, w: 180, h: 50 },
    { label: 'Exportateur', x: 460, y: 20, w: 180, h: 50 },
    { label: 'Banque présentatrice', x: 20, y: 220, w: 180, h: 60 },
    { label: 'Banque remettante', x: 460, y: 220, w: 180, h: 60 },
  ],
  arrows: [
    { points: [[460, 45], [200, 45]], badge: { text: '1' } },
    { points: [[60, 70], [60, 220]], badge: { text: '5' } },
    { points: [[150, 220], [150, 70]], badge: { text: '4' } },
    { points: [[200, 225], [460, 70]], badge: { text: '8' } },
    { points: [[500, 70], [500, 220]], badge: { text: '2' } },
    { points: [[590, 70], [590, 220]], badge: { text: '7' } },
    { points: [[460, 240], [200, 240]], badge: { text: '3' } },
    { points: [[200, 268], [460, 268]], badge: { text: '6' } },
  ],
  caption: 'Fonctionnement de la remise documentaire',
};

const diagramCredoc: TciDiagram = {
  width: 700,
  height: 330,
  boxes: [
    { label: 'Vendeur\nexportateur', x: 20, y: 20, w: 170, h: 55, emphasis: true },
    { label: 'Acheteur\nimportateur', x: 510, y: 20, w: 170, h: 55, emphasis: true },
    { label: 'Banque\nnotificatrice', x: 20, y: 250, w: 170, h: 60, emphasis: true },
    { label: 'Banque\némettrice', x: 510, y: 250, w: 170, h: 60, emphasis: true },
    { label: 'Douane\nexport', x: 250, y: 110, w: 90, h: 60 },
    { label: 'Douane\nimport', x: 370, y: 110, w: 90, h: 60 },
  ],
  arrows: [
    { points: [[350, 47], [190, 47]], badge: { text: '1', at: [350, 47] } },
    { points: [[350, 47], [510, 47]] },
    { points: [[150, 75], [250, 130]], badge: { text: '6' } },
    { points: [[530, 75], [460, 130]] },
    { points: [[295, 170], [295, 190], [415, 190], [415, 170]], noHead: true },
    { points: [[50, 250], [50, 75]], badge: { text: '5' } },
    { points: [[95, 75], [95, 250]], badge: { text: '7' } },
    { points: [[140, 250], [140, 75]], badge: { text: '11' } },
    { points: [[560, 75], [560, 250]], badge: { text: '2' } },
    { points: [[600, 250], [600, 75]], badge: { text: '3' } },
    { points: [[640, 250], [640, 75]], badge: { text: '9' } },
    { points: [[510, 268], [190, 268]], badge: { text: '4' } },
    { points: [[190, 285], [510, 285]], badge: { text: '8' } },
    { points: [[510, 302], [190, 302]], badge: { text: '10' } },
  ],
  caption: 'Fonctionnement du CREDOC',
};

export const year2Chapter5: TciChapter = {
  id: 'y2ch5',
  kind: 'chapitre',
  level: 2,
  number: 17,
  title: 'Les paiements internationaux',
  intro:
    "Le financement des transactions commerciales internationales nécessite l'usage d'un certain nombre d'instruments de paiement : le chèque, les effets de commerce et le virement international. Ces instruments sont utilisés pour la réalisation des opérations suivantes : l'encaissements simple, remise documentaire, crédit documentaire, contre remboursement.",
  sections: [
    {
      paragraphs: ['Ce module sera étudié en deux (2) parties :'],
      list: ['Les instruments de paiement ;', 'Les techniques de paiement'],
    },
    {
      heading: 'I - Les instruments de paiement',
      paragraphs: [
        "L'instrument de paiement est la forme matérielle servant de support au paiement. Il peut être physique (chèque, effet de commerce) ou informatisé (virement international)",
      ],
    },
    {
      heading: 'A - Le chèque',
    },
    {
      heading: '1 - Définition',
      paragraphs: [
        "Le chèque est un écrit sous la forme d'un mandat de paiement qui permet au tireur (exportateur) d'effectuer le retrait pour son profit de tout ou partie des fonds portés au crédit de son compte par le tiré (importateur). Il peut prendre deux formes comme moyen de paiement international.",
      ],
    },
    {
      heading: '2 - Les différents types de chèque',
    },
    {
      heading: "a - Le chèque d'entreprise",
      paragraphs: [
        "Il est émis par l'importateur et tiré sur un de ses comptes bancaire. La banque paiera alors la somme indiquée sur le chèque, sous réserve de provision suffisant au compte d'accord préalable de découvert admis.",
      ],
    },
    {
      heading: 'b - Le chèque de banque',
      paragraphs: [
        "C'est un chèque tiré par une banque sur elle-même à la demande du client. Il s'agit d'un chèque dont la banque est en même temps le tireur et le tiré.",
        "Ce chèque est extrait du chéquier de la banque (du guichet émetteur) et non d'un chèque extrait du chéquier du client. Le client doit préciser sur sa demande du chèque banque, le montant, le bénéficiaire, lieu de paiement…",
        "Il apporte une grande sécurité de paiement parce qu'il est émis par une banque.",
      ],
    },
    {
      heading: '3 - Les différentes formes de chèque',
    },
    {
      heading: 'a - Le chèque non barré',
      paragraphs: [
        "C'est un chèque ordinaire qui permet de régler immédiatement le bénéficiaire a vue.",
        "L'inconvénient, c'est que ce chèque s'expose à risque de vol.",
      ],
    },
    {
      heading: 'b - Le chèque barré',
      paragraphs: [
        "Ce type de chèque est une solution des risques de vol car l'encaissement ne peut se faire que par une banque. Il se caractérise par l'inscription de deux barres parallèles et transversales en haut et à gauche.",
      ],
    },
    {
      heading: 'c - Le chèque certifié',
      paragraphs: [
        "Il doit être présenté au tiré (banque) pour qu'il le signe au verso. Il s'agit d'une mesure de sécurité de la part du bénéficiaire qui désire s'assurer de l'existence d'une provision et la bloquer pendant le délai légal de présentation du chèque a la banque (8 jours sur un territoire donné, 20 jours lorsque les partenaires sont situés sur le même continent et 70 jours pour les partenaires situés sur des continents différents).",
      ],
    },
    {
      heading: '4 - Avantage et Inconvénients',
    },
    {
      heading: 'a - Avantages',
      list: [
        "Le chèque est ordre écrit et inconditionnel de paiement à vue",
        'Le chèque évite le transport de somme importante',
        'Le chèque est instrument de paiement international',
      ],
    },
    {
      heading: 'b - Inconvénients',
      list: [
        "L'émission du chèque est laissée à l'initiative de l'acheteur",
        "Si le chèque est libellé en devise, il y a risque de change",
        'Le chèque est souvent sans provision',
        'Le chèque peut être volé ou falsifié',
      ],
    },
    {
      heading: '5 - Les mentions apposées sur le chèque',
      list: [
        'La dénomination du chèque',
        'Le mandat de payer une personne déterminée',
        'Le nom du tiré (celui qui doit être payé)',
        "L'indication du lieu où le paiement doit s'effectuer",
        "L'indication de la date et du lieu où le chèque est crée",
        'La signature du tireur (celui qui émet le chèque)',
      ],
    },
    {
      heading: 'B - Les effets de commerce',
    },
    {
      heading: '1 - La lettre de change ou la traite',
      paragraphs: [
        "La lettre de change est un ordre signé par le tireur (exportateur) qui oblige le tiré (importateur) à payer une somme au bénéficiaire à vue (dans l'immédiat) ou à échéance (dans un délai déterminé). La traite est donc un instrument de paiement mais aussi de crédit.",
      ],
    },
    {
      heading: 'a - Les caractéristiques',
      paragraphs: ['La lettre de change étant un effet de commerce présente les caractéristiques suivantes :'],
      list: [
        "Elle peut être négociée, c'est-à-dire escomptée auprès d'une banque (il faut pour cela qu'elle ait été acceptée, c'est-à-dire signée par l'importateur ou le débiteur)",
        "Elle peut être avalisée par la banque du débiteur (de l'importateur), ce qui rassure l'exportateur de la garantie de la banque du tireur.",
        'Elle est transmissible par endossement.',
      ],
    },
    {
      heading: 'b - Les mentions',
      list: [
        'Dénomination de la lettre de change',
        'Le mandat de payer une somme déterminée',
        'Le nom du tiré',
        'Le lieu de paiement',
        "L'échéance",
        'La date et lieu de création',
        'la signature du tireur',
      ],
    },
    {
      heading: 'c - Avantages et Inconvénients',
      paragraphs: ['Avantages:'],
      list: [
        "Elle est émise à l'initiative du vendeur",
        "Elle matérialise une créance qui peut être escomptée auprès d'une banque",
        'Elle peut être donnée en gage',
      ],
    },
    {
      paragraphs: ['Inconvénients:'],
      list: [
        "La lettre de change ne supprime pas les risques d'impayés, de perte ou de vol",
        "Elle est soumise à l'acceptation de l'acheteur",
        'Le temps de recouvrement est souvent long',
      ],
    },
    {
      heading: '2 - Le billet à ordre',
      paragraphs: [
        "C'est un ordre donné par l'importateur à sa banque de débiter son compte et créditer celui de l'exportateur à échéance ou à vue. Il s'agit donc d'un transfert de fond d'un compte à un autre par une banque sur l'ordre de l'importateur au profit de l'exportateur à échéance ou à vue.",
      ],
    },
    {
      heading: 'a - Caractéristiques',
      paragraphs: [
        "La lettre de change et le billet à ordre ont les mêmes caractéristiques avec pour seule différence que le premier est émis par le débiteur (source de danger) d'où son utilisation rare dans le commerce international.",
        "NB : le vendeur qui impose la lettre de change comme instrument de paiement est en situation de force. Mais celui qui laisse le libre choix de l'instrument à son client rend son produit compétitif.",
      ],
    },
    {
      heading: 'C - Le virement international',
    },
    {
      heading: '1 - Définition',
      paragraphs: [
        "C'est l'instrument de règlement le plus utilisé. Le débiteur (importateur) donne l'ordre à son banquier de payer son créancier (exportateur) par virement.",
        "Il s'agit d'un moyen peu coûteux très rapide grâce au TELEX ou au système SWIFT et rendant l'impayé possible.",
      ],
    },
    {
      heading: '2 - Les différents types de virement',
    },
    {
      heading: 'a - virement courrier',
      paragraphs: [
        "L'ordre de virement transit par voie postale. Il en résulte que les délais peuvent être plus ou moins longs en fonction de la distance.",
      ],
    },
    {
      heading: 'b - Virement TELEX',
      paragraphs: [
        "Plus rapide que celui du courrier, il offre d'avantage de sécurité mais le support papier reste l'instrument de paiement qui laisse subsister un risque d'erreur.",
      ],
    },
    {
      heading: 'b - Virement SWIFT',
      paragraphs: [
        "Le virement SWIFT (Society World wide Interbank Financial Télécommunication) est un réseau informatique qui permet un paiement rapide. Il est plus souple, plus rapide et plus sûr que les deux autres.",
      ],
    },
    {
      heading: '3 - Le mécanisme du réseau SWIFT',
      diagram: diagramSwift,
    },
    {
      heading: '4 - Avantages et Inconvénients',
    },
    {
      heading: 'a) Avantages',
      list: ['Présente une sécurité de paiement', 'Rapide', 'Coût très réduit', 'Simple', 'Fonctionne 24h/24'],
    },
    {
      heading: 'b) Inconvénients',
      list: [
        "L'initiative de l'ordre de virement est laissée au débiteur",
        "Il peut exister un risque de change dans le cas d'un virement en devise",
      ],
    },
    {
      heading: 'D - La carte bancaire internationale',
      paragraphs: [
        "C'est un instrument qui permet d'effectuer des retraits et paiement dans le monde entier par simple validation à l'aide d'un code secret.",
        "Une opposition éventuelle de paiement n'est possible sauf en cas de perte, vol, fraude, l'ordre de paiement est donc irrévocable.",
      ],
    },
    {
      heading: 'II - Les techniques de paiement',
      paragraphs: [
        "Il s'agit de la procédure à suivre pour que le paiement puisse être réalisé.",
        'Nous étudierons :',
      ],
      list: ["L'encaissement simple", 'La remise documentaire', 'Le crédit documentaire', 'Le contre remboursement'],
    },
    {
      heading: "A - L'encaissement simple",
      paragraphs: [
        "Cette technique consiste pour l'exportateur à adresser la facture commerciale à son client en vue d'un règlement à vue ou à échéance (chèque, virement, lettre de change…).",
        'Cette technique est utilisée par des partenaires qui se font confiance.',
      ],
    },
    {
      heading: 'B - La remise documentaire (REMDOC)',
    },
    {
      heading: '1 - Définition',
      paragraphs: [
        "La remise documentaire est une procédure de recouvrement par laquelle une banque a reçu le mandat d'un exportateur d'encaisser une somme due par l'importateur contre remise des documents. C'est un paiement effectué sur présentation de documents.",
        "Cette technique s'appelle également encaissement documentaire ou paiement contre document (CAD : Cash Against Document)",
      ],
    },
    {
      heading: '2 - Les différents types de remise documentaire',
      list: [
        "La remise D/P, c'est-à-dire document contre paiement cash: cas ou l'importateur paie immédiatement le prix au banquier présentateur au comptant (chèque ou virement)",
        "La remise D/A, c'est-à-dire document contre acceptation (traite) : cas ou l'importateur n'obtient les documents que contre acceptation d'une ou plusieurs lettres de change tirée sur lui et payable à une échéance ultérieure.",
      ],
    },
    {
      heading: '3 - Les intervenants',
      paragraphs: ['Cette technique fait intervenir quatre parties :'],
      list: [
        "Le donneur d'ordre : c'est l'exportateur qui donne un mandat à sa banque.",
        "La banque remettante : c'est la banque de l'exportateur à qui l'opération a été confiée par le vendeur lui-même.",
        "L'importateur : c'est le débiteur de la banque commerciale.",
        "La banque présentatrice : c'est la banque de l'importateur chargée de l'encaissement auprès de la banque remettante.",
      ],
    },
    {
      heading: "4 - La lettre d'instruction",
      paragraphs: ["C'st un document par lequel l'exportateur mentionne l'ensemble de ses instructions qui sont:"],
      list: [
        'La liste des documents fourmis par lui-même',
        "Moyen de règlement que sa banque doit exiger de l'importateur (chèque, virement…)",
        "Mesure à prendre si les documents ne sont pas acceptés (entreposage, vente à d'autres clients, réexpédition, entraînant des coûts logistiques importants…)",
      ],
    },
    {
      heading: '5 - Fonctionnement',
      diagram: diagramRemdoc,
    },
    {
      heading: 'Légende',
      list: [
        "Expédition des marchandises par l'exportateur et rassemblement des documents",
        'Remise des documents à la banque remettante',
        "Transmission des documents et de la lettre d'instruction auprès de la banque présentatrice",
        "La banque présentatrice remet les documents à l'acheteur, soit contre remboursement, soit contre acceptation d'un ou de plusieurs effets de commerce.",
        "L'importateur donne l'ordre à sa banque de procéder au virement bancaire",
        'La transmission du paiement ou retour impayé',
        'Remise du paiement ou retour impayé',
        "Information donnée à l'exportateur par un avis de sort du paiement effectué.",
      ],
    },
    {
      paragraphs: [
        "NB: Un avis de sort est un document par lequel la banque présentatrice informe l'exportateur du paiement, de l'acceptation de la REMDOC ou des raisons pour lesquelles l'importateur retarde ou refuse de payer.",
        'Schéma simplifié:',
        'Légende:',
      ],
    },
    {
      heading: '6 - Avantages et inconvénients',
    },
    {
      heading: 'a) Avantage',
      list: [
        "L'acheteur ne peut retirer la marchandise en douane sans avoir préalablement régler son montant de la facture due au fournisseur exportateur.",
        'La procédure est plus souple que le CREDOC, moins rigoureuse sur le plan des documents et des dates',
        'Le coût bancaire est minime',
      ],
    },
    {
      heading: 'b) Inconvénients',
      list: [
        "Un refus de lever des documents par l'acheteur peut être désastreux : vente à perte, réexpédition de la marchandise ou frais de stockage important",
        "Une D/A n'offre pas une sécurité au vendeur car accepter n'est pas payer ; d'où risque de non-paiement à l'échéance.",
        "L'exportateur ne dispose aucun engagement irrévocable de la banque présentatrice.",
      ],
    },
    {
      heading: 'Les motifs de non paiement de la banque',
      list: [
        'Les documents ne sont pas conformes aux stipulations du contrat commercial',
        'Le montant facturé est supérieur à celui de la commande',
        "La marchandise n'est pas conforme à la commande, elle a été expédiée tardivement ou avant la date prévue ou n'est pas encore arrivée à destination",
        "Les documents sont parvenus à l'acheteur étranger après l'arrivée de la marchandise, lui occasionnant ainsi des frais de stationnement qu'il ne veut supporter.",
        "L'acheteur souhaite inspecter la marchandise avant de donner son accord éventuel au paiement",
        'Il manque des documents indispensables au dédouanement (certificat webb fontaine...)',
        "La licence d'importation n'a pas été encore obtenue",
        'Le jeu de connaissement est incomplet',
      ],
    },
    {
      heading: 'C - Le crédit documentaire (CREDOC)',
    },
    {
      heading: '1 - Définition',
      paragraphs: [
        "Le CREDOC est une promesse donnée par la banque de l'importateur à un exportateur selon laquelle le montant de sa créance lui sera réglé pourvu qu'il apporte à l'aide de documents énumérés dans l'accréditif la preuve qu'il a rempli ses obligations contractuelles.",
        "C'est un paiement promis par une banque sur documents exigés.",
      ],
    },
    {
      heading: '2 - Les intervenants',
      list: [
        "Le donneur d'ordre : c'est l'acheteur-importateur qui donne l'ordre à sa banque d'ouvrir un Credoc.",
        "La banque émettrice : c'est la banque de l'acheteur qui, après analyse des différents risques procède à l'ouverture du Credoc.",
        "Le bénéficiaire : c'est le vendeur-exportateur au profit duquel le Credoc est ouvert.",
        "La banque notificatrice ou confirmatrice : c'est la banque du vendeur-exportateur. Elle va notifier au vendeur l'ouverture du Credoc.",
      ],
    },
    {
      heading: "3 - L'accréditif",
      paragraphs: [
        "C'est un document que les banques mettent à la disposition de leurs clients pour l'ouverture d'un Credoc. Ce document est adressé à l'exportateur et comporte des mentions relatives à ses obligations contractuelles :",
      ],
      list: [
        'La liste des documents à fournir',
        "Date limite d'expédition des marchandises",
        "Date limite de présentation des documents à la banque émettrice",
      ],
    },
    {
      heading: '4 - Les différents types de CREDOC',
    },
    {
      heading: 'a) Credoc révocable',
      paragraphs: [
        "Avec ce type de crédit, l'acheteur peut à tout moment revenir sur sa promesse d'achat et demander à sa banque d'annuler le Credoc et cela même si le vendeur avait commencé à exécuter son opération.",
        'Ce type de Credoc peut mettre ainsi le vendeur dans une situation embarrassante.',
      ],
    },
    {
      heading: 'b) Credoc irrévocable',
      paragraphs: [
        "Il comporte un engagement ferme de la banque émettrice à payer la créance à l'exportateur à condition que les documents soient conformes aux instructions de l'acheteur et présentés dans les délais impartis. Il ne peut être modifié ou annulé qu'avec l'accord de toutes les parties. Cependant, le bénéficiaire reste à l'écoute d'une banque étrangère. Enfin, il peut être confronté au problème de transfert de fond, au risque de change et à l'interprétation des documents.",
      ],
    },
    {
      heading: 'c) Credoc irrévocable et confirmé',
      paragraphs: [
        "Il comporte un engagement de la banque émettrice et celui de la banque notificatrice (confirmatrice). La confirmation de la banque notificatrice permet au vendeur de se faire payer dans son pays.",
        "Ce qui supprime les risques de non transfert de fond, le risque de change et réduit les délais de règlement.",
      ],
    },
    {
      heading: '5 - Avantages et Inconvénients',
    },
    {
      heading: 'a) Avantages',
      list: [
        "Garantie de paiement de la part de la banque émettrice",
        "Permet de vérifier la solvabilité d'un client étranger",
        "Pas besoin de recourir à l'assurance-crédit",
        "Réalisation de la transaction commerciale dans de bonnes conditions compte tenu de la vigilance des banques",
      ],
    },
    {
      heading: 'b) Inconvénients',
      list: ['Lourdeur et lenteur des procédures', 'Coût onéreux pour les transactions de petits montants', "Difficulté d'interprétation"],
    },
    {
      heading: '6 - Fonctionnement du CREDOC',
      diagram: diagramCredoc,
    },
    {
      heading: 'Légende',
      list: [
        'Conclusion du contrat commercial et demande du paiement par CREDOC',
        "Demande d'ouverture du CREDOC par l'acheteur importateur à sa banque",
        "Analyse des différents risques liés à l'ouverture du CREDOC",
        "Ouverture de CREDOC par expédition de l'accréditif à la banque notificatrice",
        'Notification du CREDOC au vendeur exportateur par sa banque',
        "Formalités douanières export/import effectuées par le vendeur",
        'Remise des documents à la banque notificatrice et le transport international',
        'Transmission des documents à la banque émettrice',
        "Négociabilité des documents entre l'acheteur et sa banque",
        'Virement des fonds/douane à la banque émettrice',
        'Crédit du compte du fournisseur.',
      ],
    },
    {
      paragraphs: ['Schéma simplifié:'],
    },
    {
      heading: "Consigne pour l'ouverture d'un CREOC",
      paragraphs: [
        "La demande d'ouverture d'un Credoc par l'acheteur se fait sur un formulaire pré imprimé de banque ou certaines mentions obligatoires doivent être fournies :",
      ],
      list: [
        'Domiciliation du bénéficiaire,',
        'Le mode de réalisation,',
        'La validité, Désignation de la marchandise,',
        "Le prix de l'incoterm,",
        "Les documents requis sont (le plus souvent la facture commerciale, la liste de colisage, le certificat d'origine, les documents de transport, le certificat d'assurance, certificat d'analyse)",
      ],
    },
    {
      heading: 'Précaution à prendre',
      paragraphs: ["Le formalisme du crédit impose de prendre des précautions à différentes étapes du crédit."],
    },
    {
      heading: "1 - Précaution à prendre par les acteurs lors de l'ouverture",
      list: [
        "Précisions sur le type de crédit, le mode et le lieu de réalisation, le partage des frais bancaire entre l'acheteur et le vendeur",
        "Précisions sur la marchandise : désignation, qualité, le prix selon l'incoterm, description de l'emballage, des normes",
        'Précisions concernant le transport : mode (aérien, maritime, ferroviaire), technique de transport (FCL, LCL), transbordement autorisés',
        'Précisions sur les dates butoirs',
        "Précisions sur les documents exigés qui doivent être conformes à l'incoterm retenu",
      ],
    },
    {
      heading: '2 - Précautions à prendre par le bénéficiaire (vendeur) sur invitation de la banque notificatrice',
      list: [
        "La banque notificatrice aura vérifié au préalable l'authenticité du crédit",
        'Le bénéficiaire doit contrôler la conformité du crédit avec le contrat commercial',
        "Le bénéficiaire s'assure qu'il peut respecter les dates butoirs",
        "Le vendeur analyse les documents requis et vérifie s'il peut les fournir compte tenu de l'incoterm et de ses autres obligations contractuelles.",
      ],
    },
    {
      heading: 'Les dates butoirs',
      paragraphs: [
        'Une opération couverte par un Credoc incorpore des dates, évènements dont certaines constituent des dates butoirs. Ce sont :',
      ],
      list: [
        'Date de signature du contrat',
        "Date d'ouverture du Credoc",
        "Date limite d'expédition",
        "Date de vieillissement des documents de transport (21 jours après la date d'expédition). Au-delà de cette date, les banques pourront refuser les documents.",
        "Date de validité du Credoc. Elle est souvent cadrée sur la date limite d'expédition (+15 jours)",
      ],
    },
    {
      heading: 'Conseils pratiques',
      paragraphs: [
        "Eviter d'imposer au vendeur des dates butoirs trop courtes que le vendeur ne pourra pas respecter. Cela peut l'obliger à solliciter un report de ces dates, donc modification du Credoc ; et toute modification coûte des commissions bancaires que paient le vendeur et l'acheteur. Pour limiter les frais bancaires, utiliser les formules du type « tous les frais et commissions bancaires intervenant dans le pays du vendeur est à la charge du bénéficiaire du crédit »",
        "Le crédit ne doit pas être utilisé pour des petites sommes (montant < à 500 000 F CFA compte tenu des frais bancaires élevés)",
        "On doit demander la confirmation du Credoc lorsqu'il existe un risque de non-paiement de la banque émettrice quelle qu'en soit la nature.",
      ],
    },
    {
      heading: 'Les irrégularités les plus courantes',
      list: [
        'Crédit dont la date de validité est dépassée (crédit échu)',
        'Délai de présentation non respecté (les dates butoirs)',
        "Expédition tardive, dépassement de la date limite d'expédition, expédition incomplète, documents incomplets",
        "Documents incompatibles entre eux (quantité sur la facture c'est-à-dire différente de la quantité expédiée)",
        'Différence dans les montants inscrits sur les factures et sur la lettre de change.',
        "Absence de signature sur les documents qui l'imposent",
        "Risques couverts par l'assurance différents de ceux exigés dans le crédit",
      ],
    },
    {
      heading: 'Les CREDOCS spéciaux',
      list: [
        "Le CREDOC revolving ou renouvelable : C'est un crédit documentaire dont le montant se reconstitue automatiquement après chaque utilisation par le bénéficiaire sans aucune nouvelle ouverture de Credoc et ce, qu'a son échéance. C'est-à-dire qu'il permet de régler plusieurs expéditions sans qu'il soit nécessaire d'ouvrir un Credoc distinct pour chacune d'elle.",
        "Le CREDOC red clause : c'est un crédit dans lequel se trouve incorporée une clause spéciale autorisant à la banque notificatrice ou confirmatrice à effectuer des avances au bénéficiaire avant présentation des documents. C'est-à-dire qu'il constitue un préfinancement (une avance) pour l'exportation avant la livraison des marchandises et la remise documentaire",
        "Le CREDOC green clause : il constitue une avance contre marchandises dans les magasins du transitaire qui délivre des certificats d'entrepôts avec nantissement des produits",
        "Le CREDOC transférable : il permet au bénéficiaire d'autoriser la banque réalisatrice à transférer le crédit en totalité ou en partie à plusieurs tiers. Il est beaucoup utilisé dans les opérations de sous-traitance",
        "Le CREDOC adossé ou back to back : le crédit adossé est un crédit import (adossé) à un Credo export. Le bénéficiaire du crédit export est le donneur d'ordre du crédit import et la banque notificatrice ou confirmatrice devient la banque émettrice. C'est-à-dire qu'il s'agit d'un Credoc adossé au premier Credoc ouvert par un exportateur au profit d'une sous-traitance.",
      ],
    },
    {
      heading: 'Les modifications de réalisation',
      list: [
        "Le crédit est réalisable par paiement à vue : paiement immédiat par la banque désignée contre les requis",
        "Le crédit est réalisable par paiement différé : le paiement est soumis à un délai dans l'accréditif",
        'Le crédit est réalisable par acceptation : la banque accepte une traite contre les documents.',
        "Le crédit est réalisable par négociation : la banque escompte une traite tirée sur elle-même ou sur la banque émettrice.",
      ],
    },
    {
      heading: 'La lettre de crédit stand-by (stand by letter of credit)',
      paragraphs: [
        "Cette lettre n'est pas une technique de paiement ; c'est seulement une garantie donnée par une banque. Cette dernière s'engage à payer le vendeur en cas de défaillance de l'acheteur bien qu'étant de nature différente, la lettre de crédit stand-by se présente de la même manière qu'un CREDOC. C'est une garantie permettant l'exécution d'un contrat ou d'une obligation.",
      ],
    },
    {
      heading: '1 - Méthode de fonctionnement',
      paragraphs: [
        "En cas de non-paiement par le client, le vendeur bénéficiaire remet à la banque émettrice la lettre de crédit stand-by ainsi que les documents suivants : la facture commerciale, une attestation établie par lui-même indiquant qu'il a livré les marchandises et qu'il n'a pas reçu à l'échéance le paiement du contrat et une copie non négociable du connaissement apportant la preuve du contrat de base.",
      ],
    },
    {
      heading: '2 - Avantages',
      list: ['Offre une souplesse au niveau de la documentation', 'Elle est moins coûteuse'],
    },
    {
      heading: '3 - La différence entre Credoc et lettre de crédit stand-by',
      paragraphs: [
        "Le Credoc est une garantie et une technique de paiement alors que la lettre de crédit stand-by est uniquement une lettre de garantie bancaire.",
        "La réalisation du Credoc correspond à une situation normale de règlement d'un contrat alors que la mise en œuvre d'une lettre de crédit stand-by sanctionne le défaut de paiement.",
      ],
    },
    {
      heading: 'D - Le contre remboursement',
      paragraphs: [
        "Encore appelé COD (Cash On Delivery) consiste à livrer la marchandise contre son paiement en chargeant le transitaire ou le transporteur de procéder à l'encaissement du moment de la créance.",
      ],
    },
    {
      heading: 'Exercices de synthèse',
    },
    {
      heading: 'I - Cochez la ou les bonnes réponses (certaines questions admettent plusieurs réponses)',
    },
    {
      heading: '1 - Un chèque de banque est',
      list: [
        "Un engagement direct de paiement de la part d'une banque",
        "Emis par l'importateur sur instructions de sa banque",
        "Emis par la banque de l'importateur suivant les instructions de ce dernier",
      ],
    },
    {
      heading: '2 - Un virement bancaire est réalisé lorsque',
      list: [
        "L'exportateur demande à sa banque d'intervenir auprès de la banque de l'importateur pour que celle-ci paie la somme due",
        "L'importateur demande à son banquier de débiter son compte pour créditer celui de l'exportateur",
        "L'importateur demande à son banquier de créditer son compte pour débiter celui de l'exportateur.",
      ],
    },
    {
      heading: '3 - Une lettre de garantie bancaire est un document',
      list: [
        "Emis par une banque dans le cadre d'un crédit documentaire",
        "Qui engage la banque émettrice à payer irrévocablement et inconditionnellement en cas de défaillance de l'acheteur",
      ],
    },
    {
      heading: '4 - Une remise documentaire est une procédure qui',
      list: [
        "Entraîne un engagement de payer de la part de la banque de l'importateur en cas de défaillance de ce dernier",
        "Crée des obligations pour la banque de l'exportateur en cas de défaillance de l'importateur et de sa banque",
        "N'engage pas les banques au niveau du paiement",
      ],
    },
    {
      heading: '5 - Le crédit documentaire irrévocable comporte',
      list: [
        "Un engagement de paye de la banque de l'importateur en cas de défaillance de ce dernier dès lors que les conditions indiquées dans le Credoc sont respectées",
        "Un engagement de payer de la banque de l'exportateur en cas de défaillance de l'importateur et de sa banque",
        'Aucun engagement des banques au niveau du paiement',
      ],
    },
    {
      heading: "6 - La lettre de crédit commerciale utilisée par les anglo-saxons se distingue essentiellement du crédit documentaire",
      list: [
        "Le nombre des participants réduit à trois, importateur, banque de l'importateur et exportateur",
        "L'absence d'engagement bancaire de la part de la banque de l'importateur ou banque émettrice",
        "L'impossibilité de tirer une traite sur la banque émettrice",
      ],
    },
    {
      heading: 'II - Un crédit documentaire irrévocable peut être amendé ou annulé par :',
      list: [
        "Par l'exportateur",
        "Par l'importateur",
        "D'un commun accord entre importateur et exportateur",
        "D'un commun accord entre les deux banques émettrices et notificatrice.",
      ],
    },
    {
      heading: 'III - Reconstituez les bonnes réponses',
      paragraphs: [
        'Revolving',
        'Sauf bonne fin (SBF) — Chèque',
        'SWIFT — Traite',
        'Crédit après encaissement — Virement',
        'Document contre paiement (D/P) — Remise documentaire',
        'Aval bancaire — Crédit documentaire',
        'Document contre acceptation (D/A)',
      ],
    },
    {
      heading: 'IV - Complétez les tableaux par OUI ou NON',
      table: {
        headers: ['', 'Remise documentaire', 'Crédit irrévocable et confirmé', 'Lettre de crédit stand-by'],
        rows: [
          ['Technique de paiement', '', '', ''],
          ['Garantie de paiement', '', '', ''],
          ['4 parties en présence', '', '', ''],
        ],
      },
    },
    {
      table: {
        headers: ['', 'La lettre de change', 'Le billet à ordre'],
        rows: [
          ["Emis par l'importateur", '', ''],
          ["Emis par l'exportateur", '', ''],
          ['Négociation', '', ''],
          ['Peut être avalisé', '', ''],
          ['Est transmissible', '', ''],
          ['Imposé par le vendeur', '', ''],
          ['Proposé par le client', '', ''],
          ['Rare en commerce international', '', ''],
        ],
      },
    },
  ],
};
