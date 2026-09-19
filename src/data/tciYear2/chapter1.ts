import type { TciChapter } from '../tciTypes';
import imgIllustrationIncoterms from '../../assets/images/tci2/incoterms-2020-illustration.png';

export const year2Chapter1: TciChapter = {
  id: 'y2ch1',
  kind: 'chapitre',
  level: 2,
  number: 13,
  title: 'Les Incoterms 2020 (2e Année)',
  intro:
    "La vente est un contrat par lequel une personne (vendeur ou exportateur) s'oblige à livrer un bien ou un service à une autre personne (acheteur, importateur) qui s'engage à payer le prix convenu.",
  sections: [
    {
      heading: 'I - Généralités',
      paragraphs: [
        "Consciente de toutes les difficultés liées à la vente internationale au niveau des opérateurs économiques, la Chambre de Commerce Internationale (C.C.I) dont le siège est à Paris a élaboré une série de règles connues sous le vocable d'INCOTERMS permettant au vendeur et à l'acheteur de situer avec exactitude leurs obligations respectives.",
        "La première publication des incoterms date de 1936. Les INCOTERMS ont été plusieurs fois révisés en fonction de l'évolution des techniques du commerce international, des exigences des vendeurs et acheteurs et des problèmes de sûreté et sécurité dans les différents pays. Depuis 1990, les Incoterms sont révisés tous les 10 ans, soit une actualisation en 2000 puis en 2010. Et tout récemment en 2020. Depuis le 1er Janvier 2020, les incoterms 2020 sont en vigueur.",
        "Dans le cadre d'une vente internationale, un contrat de vente réuni un vendeur-exportateur et un acheteur–importateur.",
      ],
    },
    {
      heading: '1 - Le vendeur-exportateur',
      paragraphs: [
        "Il s'agit d'un producteur ou un commerçant exportateur.",
        "Son obligation essentielle est de livrer la marchandise à l'acheteur sitôt que ce dernier lui a versé le prix de la marchandise livrée doit être conforme aux termes du contrat de vente.",
      ],
    },
    {
      heading: "2 - L'acheteur importateur",
      paragraphs: [
        "Il s'agit aussi du commerçant importateur.",
        "Son obligation principale sera de payer le prix convenu et de prendre livraison de la marchandise au lieu fixé dans le contrat de vente.",
      ],
    },
    {
      heading: "II - Définition, importance et but de l'incoterm",
      paragraphs: [
        "1 - Définition. Le sigle INCOTERMS signifie en Anglais International Commercial Terms et en Français les conditions internationales de vente.",
        "En clair, il s'agit des termes (ou normes ou clauses) standardisés utilisés par les acteurs (vendeurs et acheteurs) du commerce international.",
        "Entrés en vigueur le 1er janvier 2020, les INCOTERMS 2020 sont au nombre de onze (11). Chaque INCOTERMS s'exprime par un code (abréviation) de trois (03) lettres et doit être suivi d'un lieu précis dans la pratique. Etant une des conditions du contrat commercial, comme le prix, le délai…, un INCOTERMS est lié à l'acheminement des marchandises.",
      ],
    },
    {
      heading: "2 - Importance et but de l'incoterm — a) L'importance de l'incoterm",
      paragraphs: ["Les incoterms présentent essentiellement les avantages suivants :"],
      list: [
        "L'uniformité : savoir que bien que n'ayant pas un caractère obligatoire, les incoterms sont universellement reconnus dans le commerce international.",
        "La précision : on reconnaît exactement les frais et les risques supportés par l'acheteur et le vendeur. Il donne la précision qui doit faire quoi ?",
        "La concision : ils sont concis pour un seul sigle et présente l'ensemble des obligations d'acheminement de la marchandise.",
        "Facultatif : ils présentent un caractère facultatif ; le vendeur et l'acheteur ne sont pas obligés de l'utiliser.",
      ],
    },
    {
      heading: "b) Le but de l'incoterm",
      paragraphs: [
        "L'incoterm a but de déterminer dans le cadre d'un contrat international d'achat et de vente de marchandises les obligations réciproques du vendeur et de l'acheteur sur le plan des risques, des frais et des documents à fournir.",
      ],
    },
    {
      heading: "III - Les différentes étapes de l'acheminement des marchandises",
      paragraphs: ["Nous distinguons trois (3) étapes de l'acheminement des marchandises."],
      list: [
        "Le transport d'approche : appelé pré-transport ou préacheminement ; c'est le transport effectué de l'usine du vendeur ou son magasin jusqu'au port, à l'aéroport ou à la gare de départ.",
        "Le transport principal : c'est le transport effectué entre le pays du vendeur et le pays de l'acheteur par voie maritime, aérienne, ferroviaire ou routière.",
        "Le post acheminement : appelé transport de fin de parcours ; c'est le transport assuré du port, aéroport ou gare d'arrivée à l'entrepôt final (magasin) de l'acheteur.",
      ],
    },
    {
      heading: 'IV - Présentation et classification des Incoterms',
      paragraphs: [
        "De la révision de 2020, il existe au total 11 incoterms élaborés par la Chambre de Commerce International de Paris et qui sont classés en 2 groupes distincts.",
      ],
    },
    {
      heading: '1 - Classification selon le type de vente — a) Vente au départ',
      paragraphs: [
        "Dans ce type de vente, la marchandise voyage sur le transport principal aux risques et périls de l'acheteur. Cette vente laisse donc les risques de transport principal à l'acheteur.",
        "Les incoterms concernés sont : EX-WORK, FAS, FOB, FCA, CPT, CFR, CIF et CIP.",
      ],
    },
    {
      heading: "b) Vente à l'arrivée",
      paragraphs: [
        "La vente à l'arrivée laisse donc les risques de transport principal au vendeur.",
        'Les incoterms concernés sont : DPU, DAP et DDP.',
      ],
    },
    {
      heading: '2 - Classification par mode de transport',
      paragraphs: [
        "a) Les incoterms maritime et fluviaux (4) (adaptés pour les cargaisons en vrac et en conventionnel). Il s'agit de : FAS, FOB, CFR, CIF.",
        "b) Les incoterms multimodaux (7), pour tous les modes de transport (adaptés pour les cargaisons conteneurisées). Il s'agit : EX-WORK, FCA, CPT, CIP, DPU, DAP et DDP.",
      ],
    },
    {
      heading: 'VI - Étude des obligations des parties selon les Incoterms',
    },
    {
      heading: '• EXW : Ex Works (Départ Usine)',
      paragraphs: [
        "Lors d'un transport avec l'Incoterm EXW (Ex-Work), le vendeur met la marchandise à disposition de l'acheteur dans son usine, emballée. Le transfert du risque se fait donc à partir du chargement de la marchandise dans l'usine du vendeur. L'acheteur est alors en charge de tous les risques y relatif et s'occupe également du transport et des frais associés de la sortie de l'usine du vendeur jusqu'à la destination finale des biens. Ce terme représente l'obligation minimale du vendeur.",
      ],
    },
    {
      heading: '• FCA : Free Carrier (Franco-Transporteur, lieu de livraison convenu)',
      paragraphs: [
        "Le vendeur s'occupe d'emballer, de charger, de préacheminer et de dédouaner la marchandise à l'export. Le vendeur à dûment livré la marchandise dès lors que celle-ci, dédouanée à l'exportation, a été mise à la disposition du transporteur nommé par l'acheteur au lieu convenu. Il convient de noter que le lieu de livraison choisi à une incidence sur les obligations de chargement et de déchargement de la marchandise en ce lieu. Si la livraison est effectuée dans les locaux du vendeur, ce dernier est responsable du chargement de la marchandise ; si la livraison a lieu ailleurs, le vendeur est toujours responsable du chargement dans son usine, mais pas du déchargement.",
        "Cet incoterm est le plus versatile. Il est en fait estimé qu'une transaction internationale sur quatre utilise cet Incoterm. Son principal avantage est sa flexibilité dans l'adresse de livraison. Cela peut être l'adresse du vendeur, un entrepôt, un aéroport,",
        "Le vendeur et l'acheteur peuvent convenir que l'acheteur doit donner l'instruction à son transporteur de fournir au vendeur le connaissement comportant la mention de mise à bord après le chargement des marchandises. Le vendeur étant ensuite obligé de déposer ce connaissement auprès de son institution financière à l'intention de l'acheteur. …etc.",
      ],
    },
    {
      heading: "• FAS : Free Alongside Ship (Franco le long du navire, port d'embarquement convenu)",
      paragraphs: [
        "Le vendeur à dûment livré dès lors que la marchandise a été placée le long du navire, au port d'embarquement convenu. C'est à partir de ce moment-là, que l'acheteur doit supporter tous les frais et risques de perte ou de dommage que la marchandise peut courir. Le terme FAS impose au vendeur l'obligation de dédouaner la marchandise à l'exportation.",
      ],
    },
    {
      heading: "• FOB : Free on Board (Chargé à bord - port d'embarquement convenu)",
      paragraphs: [
        "Le vendeur a rempli son obligation de livraison quand la marchandise est placée à bord du navire au port d'embarquement désigné. Le vendeur dédouane la marchandise à l'exportation. L'acheteur choisit le navire et paye le fret maritime. Le transfert des risques s'effectue lorsque les marchandises sont à bord du navire. A partir de ce moment, l'acheteur doit supporter tous les frais.",
      ],
    },
    {
      heading: '• CFR : Cost and Freight (Coût et Fret, port de destination convenu)',
      paragraphs: [
        "Le vendeur doit choisir le navire et payer les frais et le fret nécessaires pour acheminer la marchandise au port de destination désigné. Les formalités d'exportation incombent au vendeur. Le transfert des risques s'effectue au moment où les marchandises sont mises à bord du navire, mais les marchandises voyagent aux risques de l'acheteur.",
      ],
    },
    {
      heading: '• CIF : Cost Insurance and Freight (Coût Assurance et Fret, port de destination convenu)',
      paragraphs: [
        "Le vendeur a les mêmes obligations qu'en CFR mais il doit en plus fournir une assurance maritime minimale (garantie FAP Sauf). Les formalités d'exportation incombent au vendeur. La marchandise voyage, sur le transport maritime ou fluvial, aux risques et périls de l'acheteur. Le transfert des risques s'effectue au moment où les marchandises sont mises à bord du navire.",
      ],
    },
    {
      heading: '• CPT : Carriage Paid To (Port Payé jusqu\'à, lieu de destination convenu)',
      paragraphs: [
        "Le vendeur paie tous les frais depuis l'emballage jusqu'au transport principal. Sa particularité réside dans le fait que le transfert des frais se fait à l'arrivée, pendant que le transfert des risques se fait au départ dès lors que le vendeur a remis la marchandise au transporteur principal. Le vendeur paie donc le transport principal pour le compte de l'acheteur, et la marchandise voyage également aux risques de ce dernier. L'acheteur s'occupe alors de dédouaner et réceptionner les biens.",
      ],
    },
    {
      heading: "• CIP : Carriage and Insurance Paid To (Port Payé Assurance Comprise Jusqu'au lieu de destination convenu)",
      paragraphs: [
        "Le vendeur s'occupe de livrer la marchandise jusqu'au lieu de destination choisi par l'acheteur. C'est que le vendeur doit souscrire une police d'assurance qui couvre le risque de l'acheteur pendant le transport principal garantie tout risque à 110%. L'acheteur est en charge du déchargement du véhicule à l'arrivée, du dédouanement à l'import puis du transport final.",
      ],
    },
    {
      heading: '• DPU : Delivered At Place Unloaded (Déchargé au lieu destination convenu)',
      paragraphs: [
        "Le vendeur a rempli ses obligations lorsque la marchandise est placée à la disposition de l'acheteur déchargée du moyen de transport principal au lieu de destination convenu (ce lieu peut être un terminal, un entrepôt ou les locaux de l'acheteur).",
        "Le vendeur n'est pas tenu de gérer le dédouanement dans le pays de destination, sauf convention contraire avec une variante « DPU dédouanée ».",
        "Le DPU est le seul Incoterm qui impose au vendeur de décharger la marchandise à destination.",
      ],
    },
    {
      heading: '• DAP : Delivered At Place (Rendu au lieu de destination, lieu convenu)',
      paragraphs: [
        "Le vendeur est en charge de livrer la marchandise jusqu'au lieu convenu avec l'acheteur, non déchargé. L'acheteur est en charge du dédouanement lié à l'importation et doit s'occuper du déchargement du véhicule à destination.",
      ],
    },
    {
      heading: '• DDP : Delivered Duty Paid / Rendu Droits Acquittés, lieu de destination convenu',
      paragraphs: [
        "A l'inverse du terme EXW à l'usine, ce terme désigne l'obligation maximum du vendeur. Lors d'un incoterm DDP le vendeur est en charge de tous les risques et s'occupe du transport et frais annexes de son usine jusqu'à l'usine de l'acheteur. L'acheteur est seulement en charge du déchargement du véhicule à destination. Le terme DDP est exactement l'opposé d'EXW.",
      ],
    },
    {
      heading: 'NB : Incoterms 2020 — pas de révolution, mais une consolidation',
      paragraphs: [
        "Pas de révolution dans les règles Incoterms 2020, mais une consolidation des messages forts et quelques ajustements :",
      ],
      list: [
        "L'incoterm DAT : Delivered at Place (incoterm 2010) s'étend et est renommé DPU : Delivered at Place Unloaded (Déchargé au lieu de destination convenu) (incoterm 2020). Ce n'est pas une modification de fond du texte. Il s'agit simplement d'un changement de nom de la règle des Incoterms. Cela répondait aux commentaires des utilisateurs qui souhaitaient bien préciser que la destination actuelle n'a pas besoin d'être un terminal. La notion de « Terminal » doit être comprise comme celle de « Place » et la différence entre DAT et DAP consistait principalement dans le fait que dans DAT le vendeur n'avait pas l'obligation de décharger la marchandise. C'est donc désormais DPU avec U pour unloaded !",
        "Incoterm DPU : Delivered at Place Unloaded (Déchargé au lieu de destination convenu). Le vendeur a rempli ses obligations lorsque la marchandise est placée à la disposition de l'acheteur déchargée du moyen de transport principal au lieu de destination convenu (ce lieu peut être un terminal, un entrepôt ou les locaux de l'acheteur). Le vendeur n'est pas tenu de gérer le dédouanement dans le pays de destination, sauf convention contraire avec une variante « DPU dédouanée ». Le DPU est le seul Incoterm qui impose au vendeur de décharger la marchandise à destination.",
        "Une option du FCA en cas de paiement via une sécurité bancaire : le « FCA+ connaissement maritime à bord » : les parties conviennent que l'acheteur donnera instructions au transporteur de remettre au vendeur une preuve de chargement à bord.",
        "Une différenciation des obligations d'assurance-transport entre le CIP et le CIF : couverture Tous Risques pour le CIP et couverture minimale pour le CIF. L'assurance couvre toujours au minimum 110 % de la valeur facturée.",
        "Des précisions quant au transit des marchandises en Incoterms D : le transit export éventuel avant le territoire d'importation est à charge du vendeur, alors que le transit import dans le territoire d'importation reste à charge de l'acheteur.",
        "La sûreté douanière et la sécurité du transport sont davantage traitées.",
        "Les Incoterms s'appliquent également lorsque le transport est organisé avec des moyens en propre, sans recourir à un transporteur agissant comme tierce partie (prévu en EXW-FCA-DPU-DAP-DDP).",
      ],
    },
    {
      heading: 'VII - La structure des prix selon les Incoterms 2020',
      figure: {
        src: imgIllustrationIncoterms,
        alt: 'Illustration des incoterms 2020 : répartition du transport, du risque et de l\'assurance entre vendeur et acheteur pour chaque Incoterm',
        caption: 'Illustration des incoterms 2020 — répartition du transport, du risque et de l\'assurance (Vendeur / Acheteur)',
      },
    },
    {
      heading: 'Structure des prix selon le transport maritime',
      table: {
        headers: ['Structure des prix selon le transport maritime'],
        rows: [
          ["Prix d'achat des matières premières"],
          ['+ Coût de production (main d\'œuvre, énergie, emballage…).'],
          ['+ Frais de distribution'],
          ['+ Autres charges d\'exploitation'],
          ['+ Commissions éventuelles échéant aux intermédiaires'],
          ['= COUT DE REVIENT DES PRODUITS FINIS'],
          ['+ Marge de l\'exportateur / marge commerciale du fournisseur (taux de marque, taux de marge).'],
          ['= PRIX EXW… ou Prix départ usine / Prix Bord champs'],
          ['+ Location et empotage'],
          ['+ Chargement du camion ou du wagon'],
          ['+ Pré-acheminement (transport d\'approche, transport local au départ, camionnage au départ)'],
          ['+ Déchargement du camion au port'],
          ['+ Camionnage à quai et mise sous palan'],
          ['+ Prestation du transitaire export (Transit export ou HAD Export)'],
          ['+ Douane export / droit de sortie / Droit unique de sortie (DUS)'],
          ['+ Entreposage export / Magasinage export'],
          ['+ Droit de port à l\'export / Taxe portuaire'],
          ['+ Manutention portuaire sur terre'],
          ['+ taxe SYDAM'],
          ['= PRIX FAS'],
          ['+ Acconage export (embarquement à bord, frais de mise à bord, passage portuaire à l\'export)'],
          ['= PRIX FOB'],
          ['+ Fret net / Coût du transport principal'],
          ['+ Frais d\'émission B/L'],
          ['+ Taxe B/L (taxe connaissement)'],
          ['= PRIX CFR'],
          ["+ Prime d'Assurance"],
          ['= PRIX CIF'],
          ["+ Acconage import / déchargement du navire / passage portuaire à l'import"],
          ['= PRIX DPU'],
          ['+ Manutention quai-magasin ou air de dédouanement (MAD), transport de la marchandise du quai au magasin'],
          ["+ Magasinage à destination / entreposage import / Gardiennage import"],
          ['+ Chargement des marchandises à quai sur le moyen de transport pour post acheminement'],
          ["+ Post acheminement (transport de fin de parcours, camionnage à l'arrivée)"],
          ['= PRIX DAP'],
          ["+ Transit import / ouverture du dossier à destination (HAD import)"],
          ["+ Douane import (droits et taxes à l'import)"],
          ['+ RPI'],
          ['+ Droits du receveur de douane'],
          ['+ Taxe de sûreté (si la marchandise est en conteneur (TC))'],
          ['= PRIX DDP'],
          ["+ Déchargement du camion / wagon chez l'importateur"],
          ['+ Honoraires'],
          ['+ Frais financiers / bancaires'],
          ['+ Autres frais éventuels'],
          ['= COUT DE REVIENT DES MARCHANDISES IMPORTEES (Considéré comme cout de revient hors taxe)'],
          ["+ Marge bénéficiaire de l'importateur (Taux de marque ou taux de marge)"],
          ['= PRIX D\'ACHAT DU GROSSISTE (Hors taxe)'],
          ['+ Marge bénéficiaire du grossiste'],
          ["= PRIX D'ACHAT DU DETAILLANT (Hors taxe)"],
          ['+ Marge bénéficiaire du détaillant (Taux de marque ou taux de marge ou coefficient multiplicateur)'],
          ["= PRIX D'ACHAT DU CONSOMMATEUR FINAL (Hors taxe)"],
          ['+ TVA (18%)'],
          ["= PRIX D'ACHAT DU CONSOMMATEUR FINAL (TTC)."],
        ],
      },
    },
    {
      heading: 'Structure des prix selon le transport multimodal',
      table: {
        headers: ['Structure des prix selon le transport multimodal'],
        rows: [
          ["Prix d'achat des matières premières"],
          ["+ Coût de production (main d'œuvre, énergie, emballage…)."],
          ['+ Frais de distribution'],
          ["+ Autres charges d'exploitation"],
          ['+ Commissions éventuelles échéant aux intermédiaires'],
          ['= COUT DE REVIENT DES PRODUITS FINIS'],
          ["+ Marge de l'exportateur / marge commerciale du fournisseur (taux de marque, taux de marge)."],
          ['= PRIX EXW… ou Prix départ usine / Prix Bord champs'],
          ['+ Location et empotage du conteneur'],
          ['+ Chargement du camion ou du wagon'],
          ["+ Pré-acheminement (transport d'approche, transport local au départ, camionnage au départ)"],
          ['+ Déchargement du camion au port'],
          ['+ Camionnage à quai et mise sous palan'],
          ['+ Prestation du transitaire export (Transit export ou HAD Export)'],
          ['+ Douane export / droit de sortie / Droit unique de sortie (DUS)'],
          ['+ Entreposage export / Magasinage export'],
          ['+ Manutention portuaire sur terre'],
          ['+ taxe SYDAM'],
          ["+ Acconage export (embarquement, frais de mise à bord, passage portuaire à l'export)"],
          ['= PRIX FCA'],
          ['+ Fret net / Coût du transport principal'],
          ['+ Frais d\'émission LTA'],
          ['+ Taxe LTA'],
          ['= PRIX CPT'],
          ["+ Prime d'Assurance"],
          ['= PRIX CIP'],
          ["+ Acconage import / déchargement du navire / passage portuaire à l'import"],
          ['= PRIX DPU'],
          ['+ Manutention quai-magasin ou air de dédouanement (MAD), transport de la marchandise du quai au magasin'],
          ['+ Magasinage à destination / entreposage import / Gardiennage import'],
          ['+ Chargement des marchandises à quai sur le moyen de transport pour post acheminement'],
          ["+ Post acheminement (transport de fin de parcours, camionnage à l'arrivée)"],
          ['= PRIX DAP'],
          ['+ Transit import / ouverture du dossier à destination (HAD import)'],
          ["+ Douane import (droits et taxes à l'import)"],
          ['+ RPI'],
          ['+ Droits du receveur de douane'],
          ['+ Taxe de sûreté (si la marchandise est en conteneur (TC))'],
          ['= PRIX DDP'],
          ["+ Déchargement du camion / wagon chez l'importateur"],
          ['+ Frais financiers / bancaires'],
          ['+ Honoraires'],
          ['+ Autres frais éventuels'],
          ['= COUT DE REVIENT DES MARCHANDISES IMPORTEES (Considéré comme cout de revient hors taxe)'],
          ["+ Marge bénéficiaire de l'importateur (Taux de marque ou taux de marge)"],
          ["= PRIX D'ACHAT DU GROSSISTE (Hors taxe)"],
          ['+ Marge bénéficiaire du grossiste'],
          ["= PRIX D'ACHAT DU DETAILLANT (Hors taxe)"],
          ['+ Marge bénéficiaire du détaillant (Taux de marque ou taux de marge ou coefficient multiplicateur)'],
          ["= PRIX D'ACHAT DU CONSOMMATEUR FINAL (Hors taxe)"],
          ['+ TVA (18%)'],
          ["= PRIX D'ACHAT DU CONSOMMATEUR FINAL (TTC)."],
        ],
      },
    },
    {
      heading: '1 - Détermination des prix selon les incoterms',
      table: {
        headers: ['Sigles', 'Définition', 'Formulation'],
        rows: [
          ['CR', 'Coût de Revient', 'CR = DDP + Déchargement à destination finale + Honoraires + Frais bancaires + Autres frais éventuels'],
          ['PAG', 'Prix d\'Achat du Grossiste', 'PAG(HT) = CR + Marge bénéficiaire du grossiste (taux de marque ou taux de marge)'],
          ['PADG', 'Prix d\'Achat Demi-Grossiste', 'PADG(HT) = PAG + Marge bénéficiaire du Demi-grossiste'],
          [
            'PACF',
            'Prix d\'Achat du Consommateur Final',
            'PACF(TTC) = PADG + (PADG × CM) — Marge bénéficiaire du détaillant (taux de marque ou taux de marge ou Coefficient Multiplicateur) + montant TVA (18%)',
          ],
          [
            'CM',
            'Coefficient Multiplicateur',
            'CM = PV ÷ PA ; PV = CM × PA. NB : Il faut toujours prendre tous les chiffres après la virgule pour le résultat du CM.',
          ],
          ['Txmarge', 'Taux de Marge', 'Txmarge = MC ÷ PA ; PV = PA × (1 + Taux de marge)'],
          ['Txmarque', 'Taux de Marque', 'Txmarque = MC ÷ PV ; PV = PA ÷ (1 − txmarque)'],
        ],
      },
    },
    {
      heading: '2 - Le calcul du Prix de Vente (PV)',
      paragraphs: [
        "2-1 Les Ets JEREMIE importent 800 sacs de riz des USA. Le prix EXW d'un sac est 12 USD.",
        'TAF : calculez le prix EXW total de la commande.',
        "2-2 Les Ets DAVID achètent 600 sacs de lait avec DUPONT SA basée à Marseille en France. Le coût d'achat d'un sac est 6 €.",
        "TAF : calculez le prix EXW d'un sac sachant que : a- Le taux de marge est de 35%, b- Le taux de marque est de 35%.",
      ],
    },
    {
      heading: 'IX - La détermination du fret maritime : Fret Net (FN)',
      paragraphs: [
        "a) Les Ets GRACE importent 10000 boîtes de lait chargées dans 100 cartons de la Hollande. Le poids brut d'une boîte est de 600 grammes et le poids net (vide) d'un carton est de 3 kg. Le volume d'une boite et celui d'un carton sont respectivement de 0,0012 m3 et 0,15 m3. Le fret maritime est 25 USD L'UP avec BAF = -3% ; CAF = 2% ; CSP = 3% et Ristourne = 4%.",
        "TAF : 1- Calculez le fret net. 2- Calculez le fret net si BAF = 5 USD l'UP et CAF = 2%.",
        "b) Les Ets EDEN importent 2 conteneurs (TC) remplis de produits alimentaires des USA. Pour l'acheminement, le transporteur propose 1200 USD le TC. Les correctifs sont les suivants : BAF = 480 USD ; CAF = 495 USD.",
        'TAF : Calculez le fret maritime.',
        "c) Les Ets NOE expédient 600 sacs de noix de cajou en Inde. Pour le fret maritime, ils doivent payer 3 USD le sac avec BAF = 3%, CAF = -4% et ristourne = 3 %.",
        'TAF : Calculez le fret maritime.',
        'NB : 1 USD = 500 FCFA',
      ],
    },
    {
      heading: "X - Le calcul de la prime d'assurance",
      paragraphs: [
        "Prime d'assurance (PA) = Taux de la prime d'assurance × Valeur d'assurance (VA) + 2500 FCFA.",
        "La formule simplifiée de la Prime d'Assurance (PA) :",
        "a) Lorsqu'on connait le montant CFR et que la VA est CIF + 10 % CIF on détermine la prime d'assurance par la formule suivante :",
      ],
      formulas: ['PA = CFR ÷ [1 − (1,1 × TxAss)] − CFR + 2500 FCFA'],
    },
    {
      paragraphs: [
        "b) Lorsqu'on connait le montant CFR et que la VA est CFR + 20 % CFR on peut déterminer la prime d'assurance par la formule suivante :",
      ],
      formulas: ["PA = Taux d'assurance × 1,2 CFR + 2500 FCFA"],
    },
    {
      paragraphs: [
        "Les Ets VICTOIRE importent des vêtements de l'Italie d'une valeur CFR Abidjan de 30 000 000 FCFA. Le taux d'assurance défini par NSIA Assurance est de 0,5%.",
        "TAF : calculez la prime d'assurance avec : 1- Une valeur assurée de CIF × 110% ; 2- Une valeur assurée de CFR majoré de 20%.",
      ],
    },
    {
      heading: 'XI - Le calcul de la douane import',
      paragraphs: [
        "Les Ets REHOBOTH importent des produits alimentaires de l'Allemagne d'une valeur CIF Abidjan de 45 000 000 FCFA. Les taux des droits et taxes de douanes sont les suivants : DD = 20% ; RSTA = 1% ; PCS = 0,8% ; PUA = 0,2% ; PCC = 0,5% ; TVA = 18% ; TSD = 20000 FCFA.",
        'TAF : calculez le montant de la douane import par : 1- La méthode traditionnelle 2- La méthode du taux cumulé.',
      ],
    },
    {
      heading: 'XII - Le calcul des honoraires selon les valeurs FOB suivantes et selon la route A',
      paragraphs: [
        'Calculez les honoraires selon les valeurs FOB suivantes :',
      ],
      list: ['Valeur FOB = 12 000 €', 'Valeur FOB = 85 000 000 FCFA', 'Valeur FOB = 847 000 000 F CFA'],
    },
    {
      paragraphs: ['NB : 1 € = 656 FCFA'],
    },
  ],
};
