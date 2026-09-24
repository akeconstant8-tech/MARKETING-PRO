import type { TciChapter } from '../tciTypes';

const commonStart = [
  "Prix d'achat des matières premières",
  "+ Coût de production (main d'œuvre, énergie, emballage…).",
  '+ Frais de distribution',
  "+ Autres charges d'exploitation",
  '+ Commissions éventuelles échéant aux intermédiaires',
  '= COUT DE REVIENT DES PRODUITS FINIS',
  "+ Marge de l'exportateur / marge commerciale du fournisseur (taux de marque, taux de marge).",
  '= PRIX EXW… ou Prix départ usine / Prix Bord champs',
  '+ Location et empotage du conteneur',
  '+ Chargement du camion ou du wagon',
  "+ Pré-acheminement (transport d'approche, transport local au départ, camionnage au départ)",
  '+ Déchargement du camion au port',
  '+ Camionnage à quai et mise sous palan',
  '+ Prestation du transitaire export (Transit export ou HAD Export)',
  '+ Douane export / droit de sortie / Droit unique de sortie (DUS)',
  '+ Entreposage export / Magasinage export',
  "+ Droit de port à l'export / Taxe portuaire",
  '+ Manutention portuaire sur terre',
];

const commonEnd = [
  "+ Acconage import / déchargement du navire / passage portuaire à l'import",
  '= PRIX DPU',
  '+ Manutention quai-magasin ou air de dédouanement (MAD), transport de la marchandise du quai au magasin',
  '+ Magasinage à destination / entreposage import / Gardiennage import',
  '+ Chargement des marchandises à quai sur le moyen de transport pour post acheminement',
  "+ Post acheminement (transport de fin de parcours, camionnage à l'arrivée)",
  '= PRIX DAP',
  '+ Transit import / ouverture du dossier à destination (HAD import)',
  "+ Douane import (droits et taxes à l'import)",
  '+ RPI',
  '+ Droits du receveur de douane',
  '= PRIX DDP',
  "+ Déchargement du camion / wagon chez l'importateur",
  '+ Honoraires',
  '+ Frais financiers / bancaires',
  '= COUT DE REVIENT DES MARCHANDISES IMPORTEES (coût de revient hors taxe)',
  "+ Marge bénéficiaire de l'importateur (Taux de marque ou taux de marge)",
  "= PRIX D'ACHAT DU GROSSISTE (Hors taxe)",
  '+ Marge bénéficiaire du grossiste',
  "= PRIX D'ACHAT DU DETAILLANT (Hors taxe)",
  '+ Marge bénéficiaire du détaillant (Taux de marque ou taux de marge ou coefficient multiplicateur)',
  "= PRIX D'ACHAT DU CONSOMMATEUR FINAL (Hors taxe)",
  '+ TVA (18%)',
  "= PRIX D'ACHAT DU CONSOMMATEUR FINAL (TTC).",
];

const maritimeMiddle = [
  '= PRIX FAS',
  "+ Acconage export (embarquement, frais de mise à bord, passage portuaire)",
  '= PRIX FOB',
  '+ Fret net / Coût du transport principal',
  "+ Frais d'émission B/L",
  '+ Taxe B/L (taxe connaissement)',
  '= PRIX CFR',
  "+ Prime d'assurance = taux de prime x valeur d'assurance",
  '= PRIX CIF',
];

const multimodalMiddle = [
  "+ Acconage export (embarquement, frais de mise à bord, passage portuaire)",
  '= PRIX FCA',
  '+ Fret net / Coût du transport principal',
  "+ Frais d'émission B/L ou LTA",
  '+ Taxe B/L (taxe connaissement) ou taxe LTA',
  '= PRIX CPT',
  "+ Prime d'Assurance",
  '= PRIX CIP',
];

export const mkt2Chapter3: TciChapter = {
  id: 'mkt2ch3',
  kind: 'chapitre',
  level: 2,
  number: 3,
  title: 'Première partie, Chapitre III : Les Incoterms 2020',
  intro:
    "La vente est un contrat par lequel une personne (vendeur ou exportateur) s'oblige à livrer un bien ou un service à une autre personne (acheteur, importateur) qui s'engage à payer le prix convenu.",
  sections: [
    {
      heading: 'Introduction',
      paragraphs: [
        "Consciente de toutes les difficultés liées à la vente internationale au niveau des opérateurs économiques, la Chambre de Commerce Internationale (C.C.I) dont le siège est à Paris a élaboré une série de règles connues sous le vocable d'INCOTERMS permettant au vendeur et à l'acheteur de situer avec exactitude leurs obligations respectives. Le sigle INCOTERMS signifie en Anglais International Commercial Terms et en Français les conditions internationales de vente.",
        "La première publication des incoterms date de 1936. Les INCOTERMS ont été plusieurs fois révisés en fonction de l'évolution des techniques du commerce international, des exigences des vendeurs et acheteurs et des problèmes de sûreté et sécurité dans les différents pays. Depuis 1990, les Incoterms sont révisés tous les 10 ans, soit une actualisation en 2000 puis en 2010. Depuis le 1er Janvier 2020, les incoterms 2020 sont en vigueur.",
      ],
    },
    { heading: 'I- Définition, but et objectifs' },
    {
      heading: '1- Définition',
      paragraphs: [
        "Le sigle INCOTERMS signifie en Anglais International Commercial Terms et en Français les conditions internationales de vente. En clair, il s'agit des termes (ou normes ou clauses) standardisés utilisés par les acteurs (vendeurs et acheteurs) du commerce international.",
        "Entrés en vigueur le 1er janvier 2020, les INCOTERMS 2020 sont au nombre de onze (11). Chaque INCOTERMS s'exprime par un code (abréviation) de trois (03) lettres et doit être suivi d'un lieu précis dans la pratique. Etant une des conditions du contrat commercial, comme le prix, le délai…, un INCOTERMS est lié à l'acheminement des marchandises.",
      ],
    },
    {
      heading: '2- But des Incoterms',
      paragraphs: [
        "Les INCOTERMS ont pour but de déterminer dans le cadre du contrat international d'achat et vente de marchandises, les obligations réciproques du vendeur et de l'acheteur, sur le triple plan des risques, des frais et des documents.",
      ],
    },
    {
      heading: '3- Objectifs',
      paragraphs: ['Les incoterms tels que définis ci-dessus visent à lever trois obstacles essentiels qui gênent le commerce international :'],
      list: [
        "la barrière des distances : la distance est un obstacle au commerce international parce que les opérateurs économiques ne se connaissent pas généralement. Il existe donc de part et d'autre une méfiance sur la qualité de la marchandise et le paiement de celle-ci.",
        "la langue : c'est un obstacle important car pour échanger, il faut parler le même langage et avoir la même conception des relations commerciales. C'est l'anglais qui est la langue de référence des incoterms.",
        "les usages commerciaux : ils dépendent du système juridique et parfois politique du pays dans lequel se trouve l'importateur ou l'exportateur.",
      ],
    },
    {
      paragraphs: ["Ainsi les incoterms constituent un outil inestimable permettant d'éviter des malentendus et des erreurs d'interprétations des contrats."],
    },
    {
      heading: "II- Les différentes étapes de l'acheminement des marchandises",
      paragraphs: ["Nous distinguons trois étapes de l'acheminement des marchandises."],
      list: [
        "Le transport d'approche : appelé pré-transport ou préacheminement, c'est le transport effectué de l'usine du vendeur au port, à l'aéroport ou à la gare de départ.",
        "Le transport principal : c'est le transport effectué entre le pays du vendeur et le pays de l'acheteur par voie maritime, aérienne, terrestre ou ferroviaire.",
        "Le post acheminement : appelé transport de fin de parcours, c'est le transport assuré du port, de l'aéroport ou la gare d'arrivée à l'entrepôt final (magasin) de l'acheteur.",
      ],
    },
    {
      heading: 'III- Classification des Incoterms',
      paragraphs: [
        "La Chambre de Commerce Internationale a proposé deux grandes classifications qui se présentent comme suit : selon le type de vente et selon le type de transport.",
      ],
    },
    {
      heading: '1) Classification selon le type de vente',
      paragraphs: ["Nous distinguons les incoterms de vente au départ et les incoterms de vente à l'arrivée."],
      list: [
        'Incoterms de vente au départ : EXW, FCA, FAS, FOB, CFR, CIF, CPT et CIP.',
        "Incoterms de vente à l'arrivée : avec ces incoterms la marchandise voyage sur le transport principal aux risques et périls du vendeur. Ce sont DPU, DAP et DDP.",
      ],
    },
    {
      paragraphs: ['Remarque :'],
      list: [
        'Tous les incoterms de vente au départ commencent par les lettres E, F et C.',
        "Tous les incoterms de vente à l'arrivée commencent par la lettre D.",
      ],
    },
    {
      heading: '2) Classification selon le mode de transport',
      paragraphs: ['Nous distinguons les incoterms exclusivement maritimes et les incoterms tous modes de transport.'],
      list: [
        'Les incoterms exclusivement pour le transport maritime et/ou fluvial (adaptés pour les cargaisons en vrac et en conventionnel) : FAS, FOB, CFR et CIF.',
        'Les incoterms multimodaux, pour tous les modes de transport (adaptés pour les cargaisons conteneurisées) : EXW, FCA, CPT, CIP, DPU, DAP et DDP.',
      ],
    },
    {
      heading: 'IV- Présentation',
      paragraphs: ['Les incoterms 2020 sont au nombre de 11.'],
      table: {
        headers: ['Incoterms', 'Libellé Anglais', 'Libellé Français'],
        rows: [
          ['EXW', 'EX Works — Named place', "A l'usine... lieu convenu"],
          ['FCA', 'Free Carrier… named place', 'FranCo Transporteur… lieu convenu'],
          ['FAS', 'Free AlongSide ship… named port of shipment', "Franco le Long du navire … port d'embarquement convenu"],
          ['FOB', 'Free On Board… named port of shipment', "Chargé à Bord / Franco A bord... port d'embarquement convenu"],
          ['CFR', 'Cost and Freight … named port of destination', 'Coût et Fret... port de destination convenu'],
          ['CPT', 'Carriage Paid To… named port of destination', "Port Payé jusqu'à … port de destination convenu"],
          ['CIF', 'Cost, Insurance and Freight... named port of destination', 'Coût, Assurance et Fret... port de destination convenu'],
          ['CIP', 'Carriage and Insurance Paid to... named place of destination', 'Port et Assurance Payés… lieu de destination convenu'],
          ['DPU', 'Delivered Place Unloaded... Named place of destination', 'Déchargé au lieu de destination convenu...'],
          ['DAP', 'Delivered at Place … named port of destination', 'Rendu au... lieu de destination convenu'],
          ['DDP', 'Delivered Duty Paid... named place of destination', 'Rendu Droits Acquittés… lieu de destination convenu'],
        ],
      },
    },
    { paragraphs: ["NB : Un incoterm est toujours suivi d'un lieu géographique."] },
    { heading: 'V- Analyse détaillée des risques et frais selon les incoterms' },
    {
      heading: 'EXW : Ex Works (Départ Usine)',
      paragraphs: [
        "Lors d'un transport avec l'Incoterm EXW (Ex-Works), le vendeur met la marchandise à disposition de l'acheteur dans son usine, emballée. Le transfert du risque se fait donc à partir du chargement de la marchandise dans l'usine du vendeur. L'acheteur est alors en charge de tous les risques y relatifs et s'occupe également du transport et des frais associés de la sortie de l'usine du vendeur jusqu'à la destination finale des biens. Ce terme représente l'obligation minimale du vendeur.",
      ],
    },
    {
      heading: 'FCA : Free Carrier (Franco-Transporteur, lieu de livraison convenu)',
      paragraphs: [
        "Le vendeur s'occupe d'emballer, de charger, de préacheminer et de dédouaner la marchandise à l'export. Le vendeur a dûment livré la marchandise dès lors que celle-ci, dédouanée à l'exportation, a été mise à la disposition du transporteur nommé par l'acheteur au lieu convenu. Il convient de noter que le lieu de livraison choisi a une incidence sur les obligations de chargement et de déchargement de la marchandise en ce lieu. Si la livraison est effectuée dans les locaux du vendeur, ce dernier est responsable du chargement de la marchandise ; si la livraison a lieu ailleurs, le vendeur est toujours responsable du chargement dans son usine, mais pas du déchargement.",
        "Cet incoterm est le plus versatile. Il est en fait estimé qu'une transaction internationale sur quatre utilise cet Incoterm. Son principal avantage est sa flexibilité dans l'adresse de livraison. Cela peut être l'adresse du vendeur, un entrepôt, un aéroport,",
        "Le vendeur et l'acheteur peuvent convenir que l'acheteur doit donner l'instruction à son transporteur de fournir au vendeur le connaissement comportant la mention de mise à bord après le chargement des marchandises. Le vendeur étant ensuite obligé de déposer ce connaissement auprès de son institution financière à l'intention de l'acheteur. …etc.",
      ],
    },
    {
      heading: "FAS : Free Alongside Ship (Franco le long du navire, port d'embarquement convenu)",
      paragraphs: [
        "Le vendeur a dûment livré dès lors que la marchandise a été placée le long du navire, au port d'embarquement convenu. C'est à partir de ce moment-là, que l'acheteur doit supporter tous les frais et risques de perte ou de dommage que la marchandise peut courir. Le terme FAS impose au vendeur l'obligation de dédouaner la marchandise à l'exportation.",
      ],
    },
    {
      heading: "FOB : Free on Board (Chargé à bord - port d'embarquement convenu)",
      paragraphs: [
        "Le vendeur a rempli son obligation de livraison quand la marchandise est placée à bord du navire au port d'embarquement désigné. Le vendeur dédouane la marchandise à l'exportation. L'acheteur choisit le navire et paye le fret maritime. Le transfert des risques s'effectue lorsque les marchandises sont à bord du navire. A partir de ce moment, l'acheteur doit supporter tous les frais.",
      ],
    },
    {
      heading: 'CFR : Cost and Freight (Coût et Fret, port de destination convenu)',
      paragraphs: [
        "Le vendeur doit choisir le navire et payer les frais et le fret nécessaires pour acheminer la marchandise au port de destination désigné. Les formalités d'exportation incombent au vendeur. Le transfert des risques s'effectue au moment où les marchandises sont mises à bord du navire, mais les marchandises voyagent aux risques de l'acheteur.",
      ],
    },
    {
      heading: 'CIF : Cost Insurance and Freight (Coût Assurance et Fret, port de destination convenu)',
      paragraphs: [
        "Le vendeur a les mêmes obligations qu'en CFR mais il doit en plus fournir une assurance maritime minimale (garantie FAP Sauf). Les formalités d'exportation incombent au vendeur. La marchandise voyage, sur le transport maritime ou fluvial, aux risques et périls de l'acheteur. Le transfert des risques s'effectue au moment où les marchandises sont mises à bord du navire.",
      ],
    },
    {
      heading: "CPT : Carriage Paid To (Port Payé jusqu'à, lieu de destination convenu)",
      paragraphs: [
        "Le vendeur paie tous les frais depuis l'emballage jusqu'au transport principal. Sa particularité réside dans le fait que le transfert des frais se fait à l'arrivée, pendant que le transfert des risques se fait au départ dès lors que le vendeur a remis la marchandise au transporteur principal. Le vendeur paie donc le transport principal pour le compte de l'acheteur, et la marchandise voyage également aux risques de ce dernier. L'acheteur s'occupe alors de dédouaner et réceptionner les biens.",
      ],
    },
    {
      heading: "CIP : Carriage and Insurance Paid To (Port Payé Assurance Comprise Jusqu'au lieu de destination convenu)",
      paragraphs: [
        "Le vendeur s'occupe de livrer la marchandise jusqu'au lieu de destination choisi par l'acheteur. C'est que le vendeur doit souscrire une police d'assurance qui couvre le risque de l'acheteur pendant le transport principal, garantie tout risque à 110%. L'acheteur est en charge du déchargement du véhicule à l'arrivée, du dédouanement à l'import puis du transport final.",
      ],
    },
    {
      heading: 'DPU : Delivered At Place Unloaded (Déchargé au lieu de destination convenu)',
      paragraphs: [
        "Le vendeur a rempli ses obligations lorsque la marchandise est placée à la disposition de l'acheteur déchargée du moyen de transport principal au lieu de destination convenu (ce lieu peut être un terminal, un entrepôt ou les locaux de l'acheteur).",
        "Le vendeur n'est pas tenu de gérer le dédouanement dans le pays de destination, sauf convention contraire avec une variante « DPU dédouanée ».",
        "Le DPU est le seul Incoterm qui impose au vendeur de décharger la marchandise à destination.",
      ],
    },
    {
      heading: 'DAP : Delivered At Place (Rendu au lieu de destination, lieu convenu)',
      paragraphs: [
        "Le vendeur est en charge de livrer la marchandise jusqu'au lieu convenu avec l'acheteur, non déchargé. L'acheteur est en charge du dédouanement lié à l'importation et doit s'occuper du déchargement du véhicule à destination.",
      ],
    },
    {
      heading: 'DDP : Delivered Duty Paid / Rendu Droits Acquittés, lieu de destination convenu',
      paragraphs: [
        "A l'inverse du terme EXW à l'usine, ce terme désigne l'obligation maximum du vendeur. Lors d'un incoterm DDP le vendeur est en charge de tous les risques et s'occupe du transport et frais annexes de son usine jusqu'à l'usine de l'acheteur. L'acheteur est seulement en charge du déchargement du véhicule à destination. Le terme DDP est exactement l'opposé d'EXW.",
      ],
    },
    {
      heading: 'Remarque',
      list: [
        "Les Incoterms sont classés dans l'ordre croissant des obligations du vendeur. Ainsi en EXW ses obligations sont minimales, mais en DDP elles sont maximales.",
        "Tous les frais placés avant un incoterm sont supportés par le vendeur, mais celles placées après cet incoterm sont supportées par l'acheteur.",
        "Selon la Chambre de Commerce Internationale, FOB est le dernier Incoterm dans le pays du vendeur et CFR est le premier Incoterm dans le pays de l'acheteur. Ils ne sont donc pas suivis de ville du même pays. En cas de vente EXW… le vendeur supporte seulement les frais d'emballage. Les autres charges incombent à l'acheteur. (Ex : Le chargement sur camion, le pré-acheminement).",
      ],
    },
    {
      heading: 'VI- Structure des prix selon les Incoterms 2020',
      paragraphs: ['Nous retenons deux types de structure de prix selon les modes de transport.'],
    },
    {
      heading: 'Structure des prix selon le transport maritime',
      table: {
        headers: ['Structure des prix selon le transport maritime'],
        rows: [...commonStart, ...maritimeMiddle, ...commonEnd].map((r) => [r]),
      },
    },
    {
      heading: 'Structure des prix selon le transport multimodal',
      table: {
        headers: ['Structure des prix selon le transport multimodal'],
        rows: [...commonStart, ...multimodalMiddle, ...commonEnd].map((r) => [r]),
      },
    },
    {
      heading: 'VI- Détermination du prix de vente',
      paragraphs: [
        "Le Prix de Vente (Prix EXW, prix départ usine ou prix de vente bord champs) est composé des frais ou charges supportées (prix d'achat ou prix de revient ou coût d'achat ou coût de revient ou coût de production) plus la marge commerciale.",
        'Le prix de vente peut être déterminé à partir du taux de marque, taux de marge ou du coefficient multiplicateur.',
      ],
      formulas: ['PV = PA + MC'],
    },
    {
      heading: '1- Le taux de marque',
      paragraphs: [
        "Le taux de marque représente l'expression de la marge commerciale réalisée en fonction du prix EXW, du prix départ usine ou du prix bord champs.",
      ],
      formulas: ['PV (Ex-Works) = PA ÷ (1 − taux de marque)'],
    },
    {
      heading: "Exemple d'application",
      paragraphs: [
        "Caleb effectue habituellement sur la vente des CD vidéo un taux de marque de 6,5%. Il commercialise un CD dont le coût d'achat est de 935 FCFA.",
        'TRAVAIL A FAIRE : Quel est le prix de vente unitaire du CD ?',
      ],
    },
    {
      heading: '2- Le taux de marge',
      paragraphs: ['Le taux de marge est la marge commerciale exprimée en pourcentage du coût de revient (CR).'],
      formulas: ['PV = PA × (1 + taux de marge)'],
    },
    {
      heading: "Exemple d'application",
      paragraphs: [
        "Emmanuel vend des chemises dont le coût d'achat est de 30 500 FCFA. Il pratique un taux de marge de 18%.",
        "TRAVAIL A FAIRE : Quel sera le prix de vente d'une chemise ainsi que la marge commerciale réalisée ?",
      ],
    },
    {
      heading: '3- Le coefficient multiplicateur (CM)',
      paragraphs: ["Il exprime le rapport entre le ou les prix de vente et d'achat."],
      formulas: ['CM = PV ÷ PA d\'où le PV = PA × CM'],
    },
    { paragraphs: ['NB : pour le résultat du CM, il faut toujours prendre tous les chiffres après la virgule.'] },
    {
      heading: 'VII- Le fret maritime',
      paragraphs: [
        "Le fret est à la fois le chargement d'un navire et le montant payé par le chargeur pour que ses marchandises voyagent sur le moyen de transport principal. Ici nous retiendrons cette deuxième définition.",
        'NB : à partir du fret il y a conversion ou changement de la monnaie.',
      ],
    },
    {
      heading: "IX- La prime d'assurance",
      paragraphs: [
        "La prime d'assurance est le montant à payer par l'assuré à la compagnie d'assurance. Elle est déterminée en fonction des éléments suivants :",
      ],
      list: ['Valeur marchande du bien', "Nature de la police d'assurance", 'Mode de transport utilisé'],
    },
    { heading: 'X- Cas pratiques' },
    {
      heading: 'Exercice I',
      paragraphs: [
        "Voici des informations pour l'expédition de noix d'anacarde : l'entrepôt du vendeur est à Abengourou, le port d'embarquement Abidjan et le port de débarquement Marseille :",
      ],
      list: [
        'Coût de production 20 000 F CFA',
        'Coût de réseau de distribution 5 300 000 F CFA',
        "Autres charges d'exploitation 2 840 000 F CFA",
        "Marge de l'exportateur 10% des coûts de revient des produits finis",
        'Chargement du camion 249 000 F CFA',
        'Pré acheminement 475 000 F CFA',
        'Manutention terre 175 000 F CFA',
        'Acconage export 240 000 F CFA',
        'Fret maritime 458 euros',
        'Assurance 194 euros',
      ],
    },
    {
      paragraphs: [
        'NB : 1 euro = 655 FCFA',
        "L'acheteur se trouvant à Paris, demande à l'entreprise TK Export d'effectuer toutes ses opérations de transit, une fois la marchandise à Marseille. Les informations ci-dessous sont données :",
      ],
      list: [
        "Passage portuaire à l'import 200 euros",
        'Entreposage import 120 euros',
        'Post acheminement 780 euros',
        'Transit import 1 200 euros',
        'Douane import 2 700 euros',
        'Déchargement du camion 900 euros',
      ],
    },
    {
      paragraphs: [
        'TAF : 1. Calculez les prix EXW ; FAS ; FOB ; CFR ; CIF ; DPU ; DAP et DDP en précisant les villes. 2. Calculez le coût de revient des marchandises exportées.',
      ],
    },
    {
      heading: 'Exercice II',
      paragraphs: [
        "Après deux années passées à IPAM section logistique, vous avez l'opportunité d'occuper le poste de service d'achat dans une entreprise installée à Yamoussoukro. Cette société spécialisée dans la vente de riz veut lancer une commande de la France (Nancy-Marseille), mais elle attend de vous des propositions des prix suivants : EX-WORK Nancy ; FAS Marseille ; FOB Marseille ; CFR Abidjan ; CIF Abidjan ; DPU Abidjan ; DAP Yamoussoukro et DDP Yamoussoukro.",
        "La commande porte sur 2000 sacs de 50 kg avec prix magasin d'un sac égal à 18 €.",
      ],
      list: [
        'transport Nancy-Marseille = 0,5 € /kg',
        'douane export = 3000 €',
        'camionnage magasin – quai = 10 €/tonne',
        'magasinage 20 jours = 0,2 €/sac/jour',
        'manutention bord = 80 €/tonne',
        'fret maritime = 70 €/tonne',
        'assurance = 590 €',
        'manutention bord – quai = 1500 €',
        'transport Abidjan – Yakro = 500 €',
        "droit d'entrée (Douane import) = 15% CIF",
      ],
    },
    { paragraphs: ['NB : 1 € = 656 FCFA'] },
    {
      heading: 'Exercice III',
      paragraphs: [
        "Le marché de l'emploi devenant de plus en plus difficile, après votre formation en tant que gestionnaire commercial, vous décidez de vous installer à votre propre compte pour mener une activité dans l'import-export.",
        "Votre première commande s'est portée sur l'importation de lait concentré sucré en boîte de 1 kg en condition CIF Abidjan. Ainsi, vous recevez de votre fournisseur hollandais ce qui suit :",
      ],
      list: [
        "le prix d'une boîte de lait = 500 F CFA",
        'le nombre de la commande = 45 000 boîtes de lait',
        "contenu d'une caisse = 375 cartons",
        "contenu d'un carton = 24 boîtes",
        "frais de transport de l'usine au port = 125 000 F CFA",
        'location et empotage = 25 000 F CFA/caisse',
        'transit export = 75 000 F CFA/caisse',
        'manutention export = 90 500 F CFA/caisse',
        'manutention bord = 18 000 F CFA/caisse',
        'fret maritime = 140 000 F CFA/caisse',
        'assurance maritime = 60 000 FCFA',
        'acconage import = 90 000 F CFA/caisse',
        'post acheminement = 125 000 FCFA',
        'droit de porte = 300 000 F CFA',
      ],
    },
    { paragraphs: ['TRAVAIL À FAIRE : chiffrez les prix suivants : EX-WORK ; FAS ; FOB ; CFR ; CIF ; DPU ; DAP et DDP.'] },
    {
      heading: 'Exercice IV',
      paragraphs: [
        "David est un négociant international installé à Katiola. Sa commande est des amandes de karité. La commande de son client allemand GUETZ installé à Hambourg porte sur 3000 tonnes d'amandes de karité.",
        'A partir des annexes chiffrez les différents prix suivants en précisant les villes : Ex-Works, FAS, FOB, CFR, CIF, DPU, DAP et DDP.',
        "Annexe 1 : Les amandes de karité sont conditionnées dans des sacs appelés « Big bag ». Chaque sac contient 2 tonnes d'amandes et le prix bord champs est de 75 FCFA/KG.",
        'NB : 1 € = 656 FCFA ; 1 USD = 506 FCFA',
        'Annexe 2 :',
      ],
      list: [
        'pré-acheminement = 250 000 F CFA',
        'douane export = 200 000 F CFA',
        'camionnage à quai = 2500 F CFA/tonne',
        'entreposage 6 jours à raison de 10 F CFA/sac/jour',
        'acconage export = 8500 F CFA/tonne',
        'transport principal = 80 USD/tonne',
        'assurance = 3207 €',
        'frais de déchargement à Hambourg = 950 €',
        'droit d\'entrée cumulé = 10% CIF',
        'post acheminement = 305 €',
      ],
    },
  ],
};
