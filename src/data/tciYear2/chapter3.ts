import type { TciChapter, TciDiagram } from '../tciTypes';
import imgLinerTerms from '../../assets/images/tci2/liner-terms-port.png';

const containerBoxes = (first: string) => [
  { label: first, x: 20, y: 75, w: 130, h: 50 },
  { label: 'Terminal à conteneur', x: 200, y: 75, w: 130, h: 50 },
  { label: '', x: 350, y: 93, w: 22, h: 14 },
  { label: 'Terminal à conteneur', x: 392, y: 75, w: 130, h: 50 },
  { label: 'Consignataire', x: 570, y: 75, w: 130, h: 50 },
];

const diagramFclFcl: TciDiagram = {
  width: 720,
  height: 190,
  boxes: containerBoxes('Empotage à domicile'),
  arrows: [
    { points: [[150, 100], [200, 100]] },
    { points: [[522, 100], [570, 100]] },
    { points: [[85, 75], [85, 30], [635, 30], [635, 75]], noHead: true },
  ],
  labels: [{ text: 'FCL/FCL', x: 360, y: 24, anchor: 'middle', bold: true }],
};

const diagramFclLcl: TciDiagram = {
  width: 720,
  height: 190,
  boxes: containerBoxes('Chargeur'),
  arrows: [
    { points: [[150, 100], [200, 100]] },
    { points: [[522, 100], [570, 100]] },
    { points: [[360, 30], [265, 30], [265, 75]] },
    { points: [[360, 30], [457, 30], [457, 75]] },
    { points: [[420, 125], [420, 165], [635, 165], [635, 125]] },
  ],
  labels: [
    { text: 'FCL /LCL', x: 360, y: 24, anchor: 'middle', bold: true },
    { text: 'Dégroupage', x: 528, y: 158, anchor: 'middle' },
  ],
};

const diagramLclLcl: TciDiagram = {
  width: 720,
  height: 190,
  boxes: containerBoxes('Chargeur'),
  arrows: [
    { points: [[360, 30], [265, 30], [265, 75]] },
    { points: [[360, 30], [457, 30], [457, 75]] },
    { points: [[85, 125], [85, 165], [265, 165], [265, 125]] },
    { points: [[457, 125], [457, 165], [635, 165], [635, 125]] },
  ],
  labels: [
    { text: 'LCL/LCL', x: 360, y: 24, anchor: 'middle', bold: true },
    { text: 'Port de départ', x: 265, y: 58, anchor: 'middle' },
    { text: "port d'arrivée", x: 457, y: 58, anchor: 'middle' },
    { text: 'Groupage', x: 175, y: 158, anchor: 'middle' },
    { text: 'Dégroupage', x: 546, y: 158, anchor: 'middle' },
  ],
};

const diagramLclFcl: TciDiagram = {
  width: 720,
  height: 190,
  boxes: containerBoxes('Chargeur'),
  arrows: [
    { points: [[522, 100], [570, 100]] },
    { points: [[360, 30], [265, 30], [265, 75]] },
    { points: [[360, 30], [457, 30], [457, 75]] },
    { points: [[85, 125], [85, 165], [265, 165], [265, 125]] },
  ],
  labels: [
    { text: 'LCL/FCL', x: 360, y: 24, anchor: 'middle', bold: true },
    { text: 'Port de départ', x: 265, y: 58, anchor: 'middle' },
    { text: "port d'arrivée", x: 457, y: 58, anchor: 'middle' },
    { text: 'Groupage', x: 175, y: 158, anchor: 'middle' },
  ],
};

export const year2Chapter3: TciChapter = {
  id: 'y2ch3',
  kind: 'chapitre',
  level: 2,
  number: 15,
  title: 'Le transport maritime',
  intro:
    "Le transport est une activité qui consiste à faire déplacer les personnes physiques, des objets d'un endroit à un autre. Lorsque ce déplacement se fait par mer, on parle de transport maritime. C'est le mode de transport le plus utilisé pour les livraisons intercontinentales pour des grandes quantités de marchandise. Appelé shipping, le transport maritime est associé à d'autres activités notamment la manutention, l'entreposage portuaire, le transit et l'agence maritime.",
  sections: [
    {
      heading: 'I - Organisation du transport maritime',
      paragraphs: [
        'Au plan organisationnel, nous distinguons deux (2) grands groupes : les conférences maritimes et les outsiders.',
      ],
    },
    {
      heading: '1 - Les différentes organisations internationales',
    },
    {
      heading: '1-1 - La convention internationale de Bruxelles (Belgique)',
      paragraphs: [
        "La convention internationale de Bruxelles du 25 Août 1924 a fait référence au connaissement dont la rédaction a suscité un certain nombre de critiques à cause de ses mentions non précises : que dit être, que dit pesé, disant contenir…",
        "Ses mentions non précises étaient source de problèmes en transport maritime parce que le transporteur pouvait les utilisés afin de justifier son innocence dans des éventuelles avaries. Ce qui compliquait le trafic maritime.",
        "Cette convention, pour résoudre ces problèmes, va tenir le transporteur responsable de ces éventuelles avaries ; c'est-à-dire qu'il est responsable des marchandises qui lui sont confiées et est tenu d'une obligation de résultat vis-à-vis du chargeur.",
        "Cependant, il bénéficie de certains cas qui lui dispensent de toute responsabilité :",
      ],
      list: [
        'Faute nautique (erreur de conduite) du capitaine ou de ses préposés',
        "Incendie (sauf s'il est prouvé que le transporteur n'a pas pris toutes les mesures pour l'éviter)",
        'Faits des guerres, émeutes ou troubles civils',
        'Sauvetage ou tentative de sauvetage de vies ou de biens en mer',
        "Insuffisance d'emballage",
        'Vice caché du navire qui endommage la marchandise',
      ],
    },
    {
      paragraphs: [
        "NB : Le transporteur doit fournir les preuves de ces causes qui lui exonèrent de toute responsabilité.",
      ],
    },
    {
      heading: '1-2 - La convention de Hambourg ou les règles de Hambourg',
      paragraphs: [
        "En tenant compte de l'évolution du transport maritime, certains articles de la convention de Bruxelles ont été mis en cause. Une nouvelle convention fut élaborée par CNUCED le 31 Mars 1978 appelée les règles de Hambourg.",
        "Ces règles vont aggraver la situation du transporteur en ne retenant que deux cas d'exonération :",
      ],
      list: [
        "Incendie (sauf s'il est prouvé que le transporteur n'a pas pris toutes les mesures pour l'éviter)",
        'Sauvetage ou tentative de sauvetage de vies ou de biens en mer',
      ],
    },
    {
      paragraphs: [
        "Mais le même article précis que pour tous préjudices résultant des dommages aux marchandises, retards de livraison…, le transporteur n'est pas responsable s'il prend toutes les mesures raisonnables pour les éviter.",
      ],
    },
    {
      heading: '2 - Le champ d\'application des textes',
    },
    {
      heading: '2-1 - La convention de Bruxelles',
      paragraphs: ["Cette convention ne s'applique qu'au transport sous connaissement. Elle exclut de sont champ d'application :"],
      list: [
        "Les contrats d'affrètement",
        'Le transport en pontée',
        'Le transport des animaux vivants',
        'Les opérations de chargement et de déchargement qui ne sont pas faites avec les grue ou matériels du navire.',
      ],
    },
    {
      heading: '2-2 - Les règles de Hambourg',
      paragraphs: ["Elles excluent aussi les contrats d'affrètement, mais ont une application beaucoup plus étendue qui concerne :"],
      list: [
        'Tout contrat de transport (avec ou sans connaissement)',
        'Le transport des animaux vivants',
        "Toutes les opérations intervenant entre la prise en charge par la compagnie du transporteur et la livraison.",
      ],
    },
    {
      heading: '2-3 - La loi française du 18/06/1966',
      paragraphs: [
        "Elle ne s'applique qu'au transport non soumis à une convention à laquelle la France est partie prenante.",
      ],
    },
    {
      heading: "3 - L'organisateur des armateurs",
    },
    {
      heading: '3-1 - Le consortium',
      paragraphs: [
        "Les compagnies maritimes ont adoptés un système d'union pour faire face aux lourdes contraintes qui émanent des plus solidaires a phagocyter les plus petits et les plus isolés.",
        "Ainsi, plusieurs compagnies de transport maritimes vont s'unir pour former de grands consortiums. Cette solidarité se caractérise par la mise en commun des moyens techniques et logistiques (navires, compétences, recherches…)",
      ],
    },
    {
      heading: '3-2 - Les conférences maritimes',
      paragraphs: [
        "A la fin du 19e siècle, les compagnies de transport maritime passent entre elles des accords spécifiques appelés conférences maritime ou Ring (association) qui desservent les mêmes lignes régulières à des conditions uniformisées (tarif, ristournes, fréquences des départs). Leur objectif est de bannir la concurrence entre elles.",
        'Exemple de quelques conférences maritimes:',
      ],
      list: [
        'COAC: Conférence Ouest Africaine',
        'COWA: Conference West African Coast',
        'MEWAC: Mediterranean West African Conference',
        'IKWAL: Italian Kingdom West African Line',
        'AWAFC: American West African Freight Conference',
        'UKWAL: United Kingdom West African Line.',
      ],
    },
    {
      heading: '3-3 - Les outsiders',
      paragraphs: [
        "Appelés armement hors conférences, les outsiders se déplacent en fonction des frets disponibles dans les ports. Travaillant au tramping, ils n'exploitent pas de lignes régulières, ni n'appliquent pas de taux de fret identique.",
      ],
    },
    {
      heading: 'II - Le contrat de transport maritime',
    },
    {
      heading: '1 - Définition',
      paragraphs: [
        "Le contrat de transport maritime est un accord (entre un expéditeur et un transporteur) selon lequel le chargeur s'engage à payer un fret au transporteur qui s'oblige à acheminer une marchandise d'un port à un autre sur un période déterminée.",
      ],
    },
    {
      heading: '2 - Conditions de formation du contrat de transport',
      paragraphs: ['Les conditions qui matérialisent le contrat de transport sont :'],
      list: [
        'La marchandise doit exister,',
        'Les parties au contrat doivent être connues.',
        "En effet, le chargeur ou son représentant (transitaire) doivent être connus d'une part et l'armateur ou la compagnie maritime doivent être connus d'autres parts.",
        'Le transporteur doit maîtriser la logistique nécessaire pour le déplacement des marchandises d\'un port à un autre,',
        'La preuve du contrat de transport doit exister. Cette preuve se matérialise soit par :',
        'Le connaissement maritime pour les expéditions en conteneurs',
        'La charte-partie pour la location totale ou partielle des navires',
      ],
    },
    {
      heading: '3 - Obligations du chargeur et du transporteur',
    },
    {
      heading: 'a) Les obligations du chargeur',
      paragraphs: ['Le chargeur doit :'],
      list: [
        "Fournir une déclaration écrite (note de chargement ou instructions d'expédition) précisant la nature, les marques, le nombre de colis, la liste de colisage",
        'Etiqueter et marquer les colis (signe distinctif des colis) et emballer suffisamment les marchandises pour les manutentions et le transport',
        "Empoter et arrimer les marchandises à l'intérieur des TC",
        'Payer le fret maritime',
      ],
    },
    {
      heading: 'b) Les obligations du transporteur',
      paragraphs: ['Le transporteur doit :'],
      list: [
        "Mettre son navire en état de navigabilité,",
        'Prendre en charge les marchandises,',
        'Emettre le connaissement (titre de transport),',
        'Charger et arrimer les marchandises à bord du navire,',
        'Transporter et garder les marchandises,',
        "Transborder si nécessaire en cas d'empêchement de poursuivre le voyage,",
        "Adresser un avis d'arrivée au destinataire,",
        'Décharger et livrer les marchandises.',
      ],
    },
    {
      heading: 'III - Les différents types de contrat',
    },
    {
      heading: 'III-1 Contrat sous connaissement',
    },
    {
      heading: '1 - Définition',
      paragraphs: [
        "C'est le document le document le plus utilisé dans les contrats de transport maritime. C'est le document qui sert de preuve de contrat de transport.",
        "Le B/L est un écrit (document) par lequel le capitaine d'un navire reconnaît avoir reçu à son bord les marchandises qui y sont énumérées.",
        "Il détermine aussi les obligations réciproques du chargeur et du transporteur maritime.",
      ],
    },
    {
      heading: '2 - Les fonctions du B/L',
      paragraphs: ['Le B/L a pour fonction comme :'],
      list: [
        "Un reçu de la marchandise prise en charge par un transporteur : l'embarquement est constaté par la mention « à bord » ou « on board »,",
        "Un titre de propriété de la marchandise qui confère à son détenteur un droit exclusif à obtenir livraison de la marchandise transportée, indépendamment de toute justification de propriété. On dit qu'il est négociable (possibilité de vendre la marchandise en cours de route).",
        "Une preuve écrite du contrat de transport : il atteste qu'il ya effectivement un contrat de transport entre le chargeur et le transporteur maritime.",
      ],
    },
    {
      paragraphs: [
        "Emis à la demande du chargeur par la compagnie maritime ou son agent (consignataire) dans les 24 heures après le chargement, le B/L est livré en 4 exemplaires originaux.",
        'Ils sont ventilés comme suit :',
      ],
      list: [
        'Une copie (1) pour le capitaine de bord (le B/L chef ou connaissement chef)',
        'Deux copies(2) pour le chargeur qui doit les faire parvenir au destinataire (les B/L commerciaux)',
        "Un pour l'armateur (propriétaire ou locataire du navire)",
      ],
    },
    {
      heading: '3 - Les différentes formes de B/L',
      paragraphs: ['Nous distinguons trois différentes formes de connaissement, ce sont :'],
    },
    {
      heading: '3-1 - Connaissement à personne dénommée ou connaissement nominatif (straight consigned bill of lading)',
      paragraphs: [
        "Il indique le nom, prénom et adresse du destinataire. La mention « à ordre » doit être rayée. A ce niveau, est seule la personne mentionnée sur le connaissement pourra prendre la marchandise en charge à l'arrivée. Il n'est pas négociable.",
        "Ce type de B/L est d'un usage courant car il comporte un inconvénient majeur sur le plan commercial ; en ce sens qu'il ne crée qu'au profil de la personne nommément désignée comme réceptionnaire.",
        "D'ordinaire, il est utilisé pour les expéditions de nature extra-commerciale c'est-à-dire de maison-mère à succursale ou de particulier à particulier.",
        'Cette formule est rarement utilisée.',
      ],
    },
    {
      heading: '3-2 - Le connaissement à ordre (to order bill of lading)',
      paragraphs: [
        "Il peut être transmissible par endossement avant d'être présenté pour le retrait de la marchandise. Le destinataire peut une banque ou un transitaire qui cèdera le document en échange de sécurité de paiement dans le cadre d'un crédit documentaire. Il peut s'agir aussi du chargeur qui vend la marchandise sous douane en cours de voyage. Donc le connaissement à ordre de est transmissible par endossement (négociable) soit au profit d'un nouveau propriétaire de la marchandise, soit au profit du destinataire réel s'il a été émis à l'ordre d'une banque (fréquemment en paiement par CREDOC).",
      ],
    },
    {
      heading: '3-3 - Le connaissement au porteur (blankendorsed bill of lading)',
      paragraphs: [
        "Sans mention du destinataire, les marchandises sont livrables à celui qui détient le connaissement. Ce connaissement vaut à son porteur la remise de la marchandise qu'il concerne. Il est négociable.",
      ],
    },
    {
      heading: '4 - Les mentions spéciales portées sur le B/L',
      paragraphs: [
        'Selon les conditions particulières de transport, le connaissement peut renfermer diverses indications, notamment : mise à bord et transbordement.',
        'Mise à bord : selon cette indication le connaissement peut être :',
      ],
      list: [
        "Connaissement à bord (shipped on board B/L). C'est un connaissement embarqué. Il atteste l'embarquement effectif des marchandises à bord du navire. C'est ce type de connaissement qui est plus demandé par l'acheteur dans un paiement par crédit documentaire.",
        "Received for shipment bill of lading: connaissement reçu pour embarquement. Il atteste la prise en charge des marchandises non encore chargées sur le navire par le transporteur. Le choix du navire et la date d'embarquement prévue peuvent être modifiés.",
      ],
    },
    {
      paragraphs: ['Transbordement (transport combiné) : par rapport à cette condition le connaissement peut être :'],
      list: [
        "Connaissement direct (through bill of lading) : il couvre plusieurs transports successifs (transport combiné). Chaque transporteur est responsable de la partie du transport qu'il assure lui-même.",
        "Connaissement FIATA (FIATA B/L) : document de transport combiné, il est émis par un commissionnaire de transport pour couvrir l'ensemble de transport.",
      ],
    },
    {
      paragraphs: ["NB : FIATA: Fédération Internationale des Agents de Transport et Assimilés (FIATA)."],
    },
    {
      heading: '5 - Les réserves du connaissement',
      paragraphs: [
        "Le transporteur maritime est présumé responsable des avaries ou pertes éventuelles entre la prise en charge des marchandises et le moment de leur livraison au destinataire. Ainsi, s'il doute de la bonne qualité et de la bonne quantité des marchandises ou s'il trouve insuffisant l'emballage, il peut émettre des réserves sur le connaissement.",
        'Le connaissement peut être :',
      ],
      list: [
        "Connaissement net de réserve (clean bill of lading) : connaissement sur lequel aucune ne réserve n'a été apposée lors de la prise en charge des marchandises. Cela signifie que soit les marchandises sont en bon état apparent soit le transporteur a reçu une lettre de garantie. Connaissement sans marque, non clausé, sans réserve.",
        "Connaissement surchargé ou clausé (unclean ou dirty B/L) : connaissement sur lequel le transporteur a porté des réserves après avoir constaté des manquants, le mauvais état des marchandises ou l'insuffisance de l'emballage.",
      ],
    },
    {
      heading: 'Remarque :',
      paragraphs: [
        "-En cas de vente EXW, FAS, FCA ou FOB, le fret est payé par l'acheteur. Par conséquent il faut la mention « fret collect » sur le BL.",
        "-Par contre de CFR à DDP, le fret est payé par le vendeur. Ainsi la mention « fret colected » ou « fret prepaid» est portée sur le BL.",
      ],
    },
    {
      heading: "III-2) Le contrat de transport sous l'affrètement",
      paragraphs: [
        "Le contrat d'affrètement couvre totalement ou partiellement la location d'un navire. Il concerne les importateurs et exportateurs dont les expéditions dépassent environs 300 tonnes ou dont les produits sont mis en vrac tels que le pétrole, les céréales, les matières premières.",
      ],
    },
    {
      heading: "1 - Les parties au contrat d'affrètement",
      paragraphs: [
        "Le contrat d'affrètement est accord entre l'armateur (fréteur ou shipowner) et un affréteur (locataire ou chartener). Le fréteur est celui qui fournit le navire ; il peut être une personne physique (armateur) ou morale (compagnie maritime). Par contre l'affréteur est l'utilisateur futur du navire.",
        "Le contrat est en général conclu par l'entremise d'un courtier d'affrètement. Le contrat d'affrètement est matérialisé par un document appelé la charte-partie.",
        'Elle énonce les engagements des parties contractantes.',
      ],
    },
    {
      heading: "2 - Les différents types d'affrètements",
      paragraphs: ["On distingue trois types de contrat d'affrètement. Ce sont :"],
      list: [
        "L'affrètement au voyage : le fréteur fournit le moyen de transport (navire) à l'affréteur pour une cargaison déterminée, un trajet défini dans un délai précis. L'affréteur paie le fret au fréteur, la gestion nautique et commerciale incombe au fréteur.",
        "L'affrètement à temps : Le contrat est conclu pour une durée déterminée (1 an en général). La gestion commerciale incombe à l'affréteur et la gestion nautique incombe au fréteur.",
        "L'affrètement coque nue (bareboat-charter) : location d'un navire par un affréteur pour une longue durée. La gestion nautique et commerciale sont assurées par l'affréteur",
      ],
    },
    {
      paragraphs: [
        "- Gestion commerciale : Approvisionnement de la soute combustible, frais d'escale et portuaire.",
        "- Gestion nautique : Equipement du navire en appareil navigant, entretiens curatifs et préventifs, assurance sur corps.",
      ],
    },
    {
      heading: '3 - Comparaison connaissement et charte-partie',
      table: {
        headers: ['Caractéristiques', 'Connaissement', 'Charte-partie ou affrètement'],
        rows: [
          ['La destination', 'Destination précise : cout élevé', 'Plusieurs destinations : cout moindre'],
          ['Capacité du navire', 'Une partie du navire', 'Tout le navire'],
          ['Durée du contrat', 'Longue période contractuelle', 'Courte durée'],
          ['Nombre de partenaires', 'Lie le transporteur à plusieurs chargeurs', 'Lie le transporteur à un seul chargeur'],
        ],
      },
    },
    {
      heading: 'IV - Causes d\'exonération de la responsabilité du transporteur',
      list: [
        "Innavigabilité du navire : il doit satisfaire ses obligations de mise en état de son navire avec une diligence raisonnable.",
        "Défaut d'emballage : si le transporteur a pris soin d'émettre des réserves,",
        'Défaut de marquage,',
        "Force majeure (tremblement de terre, guerre, fermeture de port ou de frontières…)",
        'Les grèves ou Lock out',
        "Vice caché du navire : faute commise lors d'une opération intéressant le navire lui-même et la cargaison",
        'Avaries communes, freinte de route',
        "Vice propre de la marchandise : tare affectant la marchandise et la prédisposant à se détériorer du fait transport ; le transporteur doit en apporter la preuve",
      ],
    },
    {
      heading: "Analyse d'un connaissement maritime (BL)",
      paragraphs: ['BILL OF LADING — ASIA LINE — For combined transport or port shipment'],
      table: {
        headers: ['Rubrique', 'Mention portée sur le connaissement'],
        rows: [
          ['Registrered Office', 'Danmar Lines Ltd, P.O. Box 2651, 4002 Bas of (Swistzerland'],
          ['Shipper', 'YUNG TEXTILE CO\n45F N°6594 SEC 5 HANG NORTH ROAD\nTEIPAU TAIWAN'],
          ['Document No.', 'PN 058L — 881 01 toffee number PE/532760'],
          ['Export references', ''],
          ['Consignee (not negotiable unless consigned to ceded)', "TO THE ORDER OF SIB\nCOTE D'IVOIRE\nABIDJAN"],
          [
            'Forwarding agent references (complete name and address)',
            'DANZAS AEI OCEAN SERVICES (TAIWAN) L\n3RD FLOOR, NO. 42\nCHI NAN ROAD, SECTION 2\nTEIPAU, 100\nTAIWAN',
          ],
          ['Notify party (see Clause 19)', "ETS SHALOM\nGAGNOA COTE D'IVOIRE"],
          [
            'Mention de remise des originaux',
            'Unless marked "NOW NEGOTIABLE / Express Bill one original of lading must be surrendered duty (wtttatearl M excrtands In (or the floods or de Hverv order.\nFor the release of goods\nTECRAM TRANSIT\nBP 1258 ABIDJAN\nTEL 00225 07020698',
          ],
          ['Pre-carriage by', ''],
          ['Place of receipt by pre-carrier', 'KE ELXJNG, TAIWAN'],
          ['On carriage to', "** COTE D' IVOIRE"],
          ['Vessel/voy. No.', '088 W HYUNDAI SPRINTER'],
          ['Port of loading', 'KEELUNG, TAIWAN'],
          ['Port of discharge', 'ABIDJAN PORT**'],
          ['Place of delivery by on-carrier', 'ABIDJAN PORT**'],
          ['Marks and numbers', 'ETS SHALOM\nGAGNOA .\nC/NO 1-12\nMADE IN TAIWAN'],
          ['Number of Container(s) or pkgs', '12 CARTONS'],
          [
            'King of packages – descriptions of goods',
            'SAID TO CONTAIN\nVOELAGE 100 PER CENT NYLON\nTAFEETAS 40 PER CENT NYLON 60 PER CENT POLYESTER\nAS PER ORDER 5865\nAS PER ORDER 5866\nLOADED INTO CONTAINER NO\nHDMU6094S70 89C187401\nON BOARD DATE 06 APR N\nLCL/LCL S/ONO: 8665\nSAY TOTAL TWELWE (12) CARTONS ONLY\n*** FREIGHT COLLECT ***',
          ],
          ["Gross weight In kilo's", '906.000'],
          ['Measurement In cubic metres', '3.360'],
        ],
      },
    },
    {
      heading: 'Travail à faire',
      list: [
        "Quelle est la particularité d'un connaissement maritime ?",
        "Quelles sont les différentes parties ? (Expéditeur, destinataire, importateur)",
        "Le connaissement est délivré à l'ordre de qui ? Pourquoi ?",
        'Quels sont les ports et pays de provenance et de destination ?',
        'Précisez le nom du navire et celui de la compagnie maritime',
        "De quel type d'expédition en conteneur s'agit-il ? Motivez votre réponse avec deux arguments",
        'Précisez la nature et les caractéristiques des marchandises',
        'Les marchandises sont-elles à bord du navire ? Justifiez votre réponse',
        "Qui paie le fret ? En déduire l'Incoterm approprié",
        "Comment l'importateur peut-il récupérer ses marchandises ?",
        "Qui sera averti de l'arrivée des marchandises ?",
        "Qui sont les transitaires à l'export et à l'import ?",
      ],
    },
    {
      heading: 'V - Les différents types d\'expéditions en conteneur (TC)',
      paragraphs: [
        "La détermination du fret complet exige que le mode d'empotage et de dépotage du TC soit précisé. Nous distinguons quatre (4) types d'expéditions en conteneur, ce sont :",
        'FCL/FCL ; FCL/LCL ; LCL/LCL ; LCL/FCL',
        "FCL : Full Container Load (conteneur plein, complet, individualisé). Le conteneur voyage de porte à porte (du magasin du vendeur au magasin de l'acheteur)",
        'LCL : Lessthan Conteneur Load (groupage dans un TC). Les voyages de quai à quai.',
      ],
    },
    {
      heading: '1 - Les différents frais',
      paragraphs: ['Les frais logistiques exports'],
      list: [
        'Empotage + chargement',
        'Pré-acheminement',
        'Déchargement du camion au port de départ',
        'Magasinage export',
        'Rapprochement sous palan (manutention terre export)',
        'Mise à bord (acconage export)',
      ],
    },
    {
      paragraphs: ['Les frais logistiques imports'],
      list: [
        'Mise à quai (acconage import) + dépotage',
        'Evacuation vers le quai (manutention terre import)',
        'Magasinage import',
        "Chargement du camion au port d'arrivée",
        'Post-acheminement',
        "Déchargement du camion chez l'importateur",
      ],
    },
    {
      paragraphs: ['Les frais administratifs'],
      list: ['Douane export', 'Douane import', 'HAD export', 'HAD import', 'Assurance'],
    },
    {
      heading: "2 - FCL/FCL (conteneur complet au départ et à l'arrivée)",
      paragraphs: [
        "Le chargeur empote lui-même ses marchandises dans le conteneur. Il scelle et l'expédie à son client étranger. Durant le transport, le TC ne sera ouvert que pour des vérifications douanières. Si le chargeur le désire, la compagnie maritime peut organiser la totalité du transport (pré-acheminement, transport principal, post-acheminement).",
      ],
      diagram: diagramFclFcl,
    },
    {
      paragraphs: [
        "Le fret complet FCL/FCL est la somme de l'ensemble des frais générés par la marchandise depuis le départ usine du pays de l'exportateur jusqu'à chez l'importateur.",
      ],
    },
    {
      heading: "3 - FCL/LCL (conteneur plein au départ et dégroupage à l'arrivée)",
      paragraphs: [
        "Le chargeur fait le plein d'un TC de plusieurs commandes de clients étrangers. Il les expédie vers le port. A l'arrivée, les colis seront tenus au centre de dégroupage à la disposition des différents réceptionnaires qui feront leur retrait sur présentation d'un sous connaissement.",
      ],
      diagram: diagramFclLcl,
    },
    {
      paragraphs: [
        "Le fret complet FCL/LCL est la somme de l'ensemble des frais générés par la marchandise depuis le départ usine du pays de l'exportateur jusqu'au magasin du port de destination.",
      ],
    },
    {
      heading: "3 - LCL/LCL (groupage au départ et dégroupage à l'arrivée)",
      paragraphs: [
        "Les marchandises d'un chargeur ne peuvent pas remplir un TC. Il les livre au centre de groupage de la compagnie maritime où elles feront le plein du TC avec les marchandises d'autres chargeurs. Toutes les marchandises doivent être compatibles et destinées au même port. A l'arrivée, le TC sera dépoté au centre de dégroupage ou chaque client viendra retirer son colis sur présentation d'un sous connaissement.",
      ],
      diagram: diagramLclLcl,
    },
    {
      paragraphs: [
        "Le fret LCL/LCL est la somme de l'ensemble des honoraires, des frais de manutention et transport générés par l'expédition depuis le magasin douanier du port de départ jusqu'au magasin douanier d'arrivée.",
      ],
    },
    {
      heading: '4 - LCL/FCL (groupage au départ pour un seul client étranger)',
      paragraphs: [
        "Un seul client étranger demande à ses fournisseurs de livrer leurs colis au même centre de groupage de la compagnie maritime pour faire le plein de son TC. A l'arrivée, le TC sera dépoté au magasin du client.",
      ],
      diagram: diagramLclFcl,
    },
    {
      paragraphs: [
        "Le fret LCL/LCL est la somme de l'ensemble des frais générés par l'expédition depuis le magasin douanier du port de départ jusqu'au magasin de l'importateur à la arrivée.",
      ],
    },
    {
      heading: 'VII - Les liner-terms',
      paragraphs: [
        "La tarification maritime prend également en compte les frais de manutention. C'est en ce sens que la détermination des liner-terms ou conditions de ligne régulières est très important puisqu'ils définissent les opérations de manutention qui sont inclues dans le fret maritime annoncé par la compagnie maritime et réalisées sous sa responsabilité.",
        "Appelés conditions de lignes régulières les liner-terms sont des règles de tarifications en transport maritime international. Ce sont des règles de répartition des frais et des risques entre chargeurs et transporteurs, lié aux opérations de chargements et de déchargements des navires.",
        "Donc les liner-terms définissent quelles opérations de manutentions sont à la charge du navire c'est-à-dire inclus dans le fret annoncé par la compagnie maritime et réalisé sous sa responsabilité. Ils offrent neuf (9) combinaisons à partir de trois (3) choix au port d'embarquement ( Quai, Sous-Palan, Bord) et de trois (3) choix au port de destination ( Bord, Sous-Palan, Quai).",
      ],
    },
    {
      heading: '1 - Les liners-terms',
      paragraphs: [
        "PORT DE DEPART : Quai — Sous-palan — Bord   |   PORT D'ARRIVEE : Bord — Sous-palan — Quai",
      ],
      figure: {
        src: imgLinerTerms,
        alt: "Schéma des liner-terms : port de départ et port d'arrivée avec les points numérotés de 1 à 10 (quai, sous-palan, bord) et les lignes Bord à sous palan, Quai à quai, Sous-palan à sous-palan et FIO",
        caption:
          "Liner-terms — port de départ (quai, sous-palan, bord) et port d'arrivée (bord, sous-palan, quai) ; lignes : Bord à sous palan, Quai à quai, Sous-palan à sous-palan, FIO",
      },
    },
    {
      paragraphs: [
        "Pour le calcul d'un fret selon les Liner-terms, il faut d'abord calculer le Fret net ou fret Bord/Bord (B/B) puis y ajouter les autres frais ou charges supportés au port de départ et/ou au port d'arrivée.",
      ],
    },
    {
      heading: '2 - Les conditions des lignes régulières',
      paragraphs: ['On a: B/B; Q/B ;Q/SP; B/SP; B/Q; SP/B; SP/SP; SP/Q; QQ'],
    },
    {
      heading: 'I. Fret B/B (de Bord à Bord)',
      paragraphs: [
        "Si le fret est coté B/B, cela signifie qu'aucune opération de manutention n'est à la charge du transporteur maritime. Il est appelé FIO (Free In Out)",
      ],
      formulas: ['Fret coté B/B = Fret Net = FIO'],
    },
    {
      heading: 'II. Fret Q/B (de Quai à Bord)',
      paragraphs: ["Dans ce cas, les frais de rapprochement et d'embarquement sont incorporés dans le fret net."],
      formulas: ['Fret Q/B ='],
    },
    {
      heading: 'III. Fret Q/SP (de Quai à Sous Palan)',
      paragraphs: ["Dans ce cas, les frais de rapprochement, d'embarquement et de débarquement sont incorporés dans le fret net."],
      formulas: ['Fret Q/SP ='],
    },
    {
      heading: 'IV. Fret B/SP (de Bord à Sous Palan)',
      paragraphs: [
        'Dans ce cas, les frais de débarquement sont incorporés dans le fret net.',
        "Il est aussi appelé Free in Under ship's Tackle.",
      ],
      formulas: ['Fret B/SP ='],
    },
    {
      heading: 'V. Fret B/Q (de Bord à Quai)',
      paragraphs: [
        "Dans ce cas, les frais d'embarquement et d'évacuation vers le quai ou magasin sont incorporés dans le fret net.",
      ],
      formulas: ['Fret B/Q ='],
    },
    {
      heading: 'VI. Fret SP/B (de Sous Palan)',
      paragraphs: ["Dans ce cas, les frais d'embarquement ou chargement sont incorporés au fret net."],
      formulas: ['Fret SP/B ='],
    },
    {
      heading: 'VII. Fret SP/SP (de Sous Palan à Sous Palan)',
      paragraphs: [
        "Dans ce cas, les frais d'embarquement et de débarquement sont incorporés dans le fret net. Il est aussi appelé Under Tackle",
      ],
      formulas: ['Fret SP/SP ='],
    },
    {
      heading: 'VIII. Fret SP/Q (de Sous Palan à Quai)',
      paragraphs: [
        "Dans ce cas, les frais d'embarquement, de débarquement et d'évacuation sont incorporés dans le fret net.",
      ],
      formulas: ['Fret SP/Q ='],
    },
    {
      heading: 'IX. Fret Q/Q (de Quai à Quai)',
      paragraphs: [
        "Dans ce cas, les frais de rapprochement, d'embarquement, de débarquement et d'évacuation sont incorporés dans le fret net. Il est aussi appelé PIER TO PIER",
      ],
      formulas: ['Fret Q/Q ='],
    },
    {
      heading: "Exercices d'application",
      list: [
        'Comparer les conférences maritimes aux outsiders',
        "Qu'est-ce qu'un connaissement ?",
        "Pourquoi le transporteur maritime émet il des réserves parfois avant de prendre en charge les marchandises ?",
        'Pourquoi le transporteur porte il la mention « clean » sur un connaissement ?',
        "Quelles sont les causes d'exonération de la responsabilité du transporteur en cas de dommage ?",
        'A quelle condition le connaissement est-il transmissible ?',
        'Comparez le tableau suivant par vrai ou faux',
      ],
      table: {
        headers: ['', 'FCL/FCL', 'LCL/LCL'],
        rows: [
          ['Fret élevé', '', ''],
          ['Risque de confusion', '', ''],
          ['Petite quantité de marchandise possible', '', ''],
          ['Plusieurs chargeurs', '', ''],
          ['Un seul destinataire', '', ''],
        ],
      },
    },
    {
      list: [
        'Calculez le nombre de cartons à mettre dans le conteneur (TC) en fonction des dimensions suivantes :',
        'Dimensions du conteneur (TC) : L = 5,88m ; l = 2,35m ; h = 2,25m',
        'Dimensions du carton : L = 980mm ; l = 470mm ; h = 1125mm.',
        'Une expédition vous donne les informations ci-dessous :',
        "Fret de base (FB) = 88 USD L'UP, BAF = 2% ; CAF = 3% ; nombre d'UP = 15",
      ],
    },
    {
      table: {
        headers: ['Port de départ', "Port d'arrivée"],
        rows: [
          ['Magasinage = 75000 FCFA', 'Mise à bord = 59000 FCFA'],
          ['Manutention terre = 90000 FCFA', 'Manutention terre = 67000 FCFA'],
          ['Mise à bord = 850000 FCFA', 'Magasinage = 40000 FCFA'],
        ],
      },
    },
    {
      paragraphs: ['Déterminez le fret selon les liner-terms : B/B ; B/SP ; B/Q ; SP/B ; SP/SP ; SP/Q ; Q/B ; Q/SP ; Q/Q.'],
    },
  ],
};
