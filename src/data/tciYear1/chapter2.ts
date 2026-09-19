import type { TciChapter } from '../tciTypes';
import imgIncoterms1 from '../../assets/images/tci1/incoterms-2020-illustration.png';
import { year2Chapter1 } from '../tciYear2/chapter1';

const yearTwoTable = (heading: string) => year2Chapter1.sections.find((s) => s.heading === heading)!.table!;

export const year1Chapter2: TciChapter = {
  id: "ch2",
  kind: "chapitre",
  level: 1,
  number: 2,
  title: "Les Incoterms 2020",
  intro:
    "La vente est un contrat par lequel une personne (vendeur ou exportateur) s’oblige à livrer un bien ou un service à une autre personne (acheteur, importateur) qui s’engage à payer le prix convenu. Consciente de toutes les difficultés liées à la vente internationale au niveau des opérateurs économiques, la Chambre de Commerce Internationale (C.C.I) dont le siège est à Paris a élaboré une série de règles connues sous le vocable d’INCOTERMS permettant au vendeur et à l’acheteur de situer avec exactitude leurs obligations respectives. La première publication des incoterms date de 1936. Les INCOTERMS ont été plusieurs fois révisés en fonction de l’évolution des techniques du commerce international, des exigences des vendeurs et acheteurs et des problèmes de sûreté et sécurité dans les différents pays. Depuis 1990, les Incoterms sont révisés tous les 10 ans, soit une actualisation en 2000 puis en 2010. Et tout récemment en 2020. Depuis le 1er Janvier 2020, les incoterms 2020 sont en vigueur.",
  sections: [
      {
        heading: "I. Définition",
        paragraphs: [
          "Le sigle INCOTERMS signifie en Anglais International Commercial Terms et en Français les conditions internationales de vente.",
          "En clair, il s’agit des termes (ou normes ou clauses) standardisés utilisés par les acteurs (vendeurs et acheteurs) du commerce international.",
          "Entrés en vigueur le 1er janvier 2020, les INCOTERMS 2020 sont au nombre de onze (11).",
          "Chaque INCOTERMS s’exprime par un code (abréviation) de trois (03) lettres et doit être suivi d’un lieu précis dans la pratique. Etant une des conditions du contrat commercial, comme le prix, le délai…, un INCOTERMS est lié à l’acheminement des marchandises.",
        ],
      },
      {
        heading: "I. Présentation des incoterms 2020",
        paragraphs: ["Les incoterms 2020 sont au nombre de 11."],
      },
      {
        table: {
          headers: ["Incoterms", "Libellé Anglais", "Libellé Français"],
          rows: [
            ["EXW", "EX Works\nNamed place", "A l’usine...\nlieu convenu"],
            ["FCA", "Free Carrier…\nnamed place", "FranCo Transporteur…\nlieu convenu"],
            [
              "FAS",
              "Free AlongSide ship…\nnamed port of shipment",
              "Franco le Long du navire …\nport d’embarquement convenu",
            ],
            [
              "FOB",
              "Free On Board…\nnamed port of shipment",
              "Chargé à Bord/ Franco A bord...\nport d’embarquement convenu",
            ],
            [
              "CFR",
              "Cost and Freight …\nnamed port of destination",
              "Coût et Fret...\nport de destination convenu",
            ],
            [
              "CPT",
              "Carriage Paid To…\nnamed port of destination",
              "Port Payé jusqu’à …\nport de destination convenu",
            ],
            [
              "CIF",
              "Cost, Insurance and Freight...\nnamed port of destination",
              "Coût, Assurance et Fret...\nport de destination convenu",
            ],
            [
              "CIP",
              "Carriage and Insurance Paid to...\nnamed place of destination",
              "Port et Assurance Payés…\nlieu de destination convenu",
            ],
            [
              "DPU",
              "Delivered Place Unloaded...\nNamed place of destination",
              "Déchargé au lieu de destination convenu...",
            ],
            [
              "DAP",
              "Delivered at Place …\nnamed port of destination",
              "Rendu au...lieu de destination convenu",
            ],
            [
              "DDP",
              "Delivered Duty Paid...\nnamed place of destination",
              "Rendu Droits Acquittés…\nlieu de destination convenu",
            ],
          ],
        },
      },
      {
        paragraphs: [
          "NB : Un incoterm est toujours suivi d’un lieu géographique.",
          "Différence entre les INCOTERMS 2010 et INCOTERMS 2020",
          "Pas de révolution dans les règles Incoterms 2020, mais une consolidation des messages forts et quelques ajustements :",
        ],
        list: [
          "L’incoterm DAT : Delivered at Place (incoterm 2010) s’étend et est renommé DPU :",
        ],
      },
      {
        paragraphs: [
          "Delivered at Place Unloaded (Déchargé au lieu de destination convenu) (incoterm 2020).",
        ],
        list: [
          "Une option du FCA en cas de paiement via une sécurité bancaire : le « FCA+ connaissement maritime à bord » : les parties conviennent que l'acheteur donnera instructions au transporteur de remettre au vendeur une preuve de chargement à bord.",
          "Une différenciation des obligations d'assurance-transport entre le CIP et le CIF : couverture Tous Risques pour le CIP et couverture minimale pour le CIF. L'assurance couvre toujours au minimum 110 % de la valeur facturée.",
          "Des précisions quant au transit des marchandises en Incoterms D : le transit export éventuel avant le territoire d'importation est à charge du vendeur, alors que le transit import dans le territoire d'importation reste à charge de l'acheteur.",
          "La sûreté douanière et la sécurité du transport sont davantage traitées.",
          "les Incoterms s’appliquent également lorsque le transport est organisé avec des moyens en propre, sans recourir à un transporteur agissant comme tierce partie (prévu en EXW-FCA-DPU-DAP-DDP).",
        ],
      },
      {
        heading: "III. Le but des INCOTERMS",
        paragraphs: [
          "Les incoterms ont pour but de déterminer dans le cadre du contrat international d’achat et vente de marchandises, les obligations réciproques du vendeur et de l’acheteur, sur le triple plan des risques, des frais et des documents.",
          "En effet, dans un contrat commercial un Incoterm répartit les droits et obligations au cours de l'acheminement des marchandises entre vendeur (expéditeur) et acheteur (destinataire). En clair, un Incoterm définit ou traite trois principaux points :",
        ],
        list: [
          "la répartition des couts ou frais entre le vendeur et l'acheteur. Qui paie la douane, le transport l’assurance transport... ? Le transfert des coûts se fait au lieu de livraison associé à I'Incoterm choisi ;",
          "le lieu de transfert des risques du vendeur à l'acheteur (avaries, pertes, vols). Jusqu'où le vendeur est-il responsable des risques encourus par la marchandise ? Le transfert des risques se fait au lieu de remise de la marchandise à l'acheteur ou à son transporteur ;",
          "la fourniture des documents ou informations nécessaires à la livraison de la marchandise. Exemple : la facture commerciale, le connaissement maritime (bill of lading);",
        ],
      },
      {
        paragraphs: ["le certificat d'assurance…", "NB :"],
        list: [
          "selon les INCOTERMS le vendeur est le premier à remplir ses obligations contractuelles puis viennent celles de l'acheteur.",
          "le lieu de transfert des risques n'est pas celui du transfert de propriété. En effet, le lieu de transfert de propriété de la marchandise est régi par la loi du contrat.",
        ],
      },
      {
        heading: "IV. Différentes étapes de l’acheminement des marchandises",
        paragraphs: ["Nous distinguons trois étapes de l’acheminement des marchandises."],
        list: [
          "Le transport d’approche : appelé pré-transport ou pré-acheminement c’est le transport effectué de l’usine du vendeur au port, à l’aéroport ou à la gare de départ.",
          "Le transport principal : c’est le transport effectué entre le pays du vendeur et le pays de l’acheteur par voie maritime, aérienne, terrestre ou ferroviaire.",
          "Le post acheminement : appelé transport de fin de parcours, c’est le transport assuré du port, de l’aéroport ou la gare d’arrivée à l’entrepôt final (magasin) de l’acheteur.",
        ],
      },
      {
        figure: {
          src: imgIncoterms1,
          alt: "Illustration des incoterms 2020 : répartition du transport, du risque et de l'assurance entre vendeur et acheteur pour chaque Incoterm",
          caption: "Illustration des incoterms 2020 — répartition du transport, du risque et de l'assurance (Vendeur / Acheteur)",
        },
      },
      {
        heading: "VI- Classification des incoterms 2020",
        paragraphs: [
          "La Chambre de Commerce Internationale a proposé deux (02) classifications qui se présentent comme suit : selon le type de vente et selon le type de transport.",
        ],
      },
      {
        heading: "1) Classification selon le type de vente",
        paragraphs: [
          "Nous distinguons les incoterms de vente au départ et les incoterms de vente à l’arrivée.",
        ],
      },
      {
        heading: "1.1) Incoterms de vente au départ",
        paragraphs: [
          "Dans ce type de vente, la marchandise voyage sur le transport principal aux risque et périls de l’acheteur. Ce sont : EXW, FCA, FAS, FOB, CFR, CIF, CPT et CIP.",
        ],
      },
      {
        heading: "1.2) Incoterms de vente à l’arrivée",
        paragraphs: [
          "Avec les incoterms de vente à l’arrivée la marchandise voyage aux risques et périls du vendeur. Les incoterms concernés sont : DPU, DAP et DDP",
        ],
      },
      {
        heading: "2) Classification selon le mode de transport",
        paragraphs: [
          "Nous distinguons les incoterms exclusivement maritimes et les incoterms tous modes de transport.",
        ],
      },
      {
        heading: "2.1) Les incoterms exclusivement pour le transport maritime et/ou fluvial",
        paragraphs: [
          "(adaptés pour les cargaisons en vrac et en conventionnel) Sont utilisés exclusivement pour le transport maritime ou fluvial, les Incoterms suivants :",
          "FAS, FOB, CFR et CIF",
        ],
      },
      {
        heading: "2.2) Les incoterms multimodaux, pour tous les modes de transport (adaptés",
        paragraphs: [
          "pour les cargaisons conteneurisés)",
          "Sont utilisés pour tout mode de transport, les incoterms suivants : EXW, FCA, CPT, CIP, DPU, DAP et DDP.",
        ],
      },
      {
        heading: "VII- Analyse détaillée des risques et frais selon les incoterms",
      },
      {
        heading: "EXW : Ex Works (Départ Usine)",
        paragraphs: [
          "Lors d’un transport avec l’Incoterm EXW (Ex-Work), le vendeur met la marchandise à disposition de l’acheteur dans son usine, emballée. Le transfert du risque se fait donc à partir du chargement de la marchandise dans l’usine du vendeur. L’acheteur est alors en charge de tous les risques y relatif et s’occupe également du transport et des frais associés de la sortie de l’usine du vendeur jusqu’à la destination finale des biens. Ce terme représente l’obligation minimale du vendeur.",
        ],
      },
      {
        heading: "FCA : Free Carrier ( Franco -Transporteur, lieu de livraison convenu)",
        paragraphs: [
          "Le vendeur s’occupe d’emballer, de charger, de préacheminer et de dédouaner la marchandise à l’export. Le vendeur à dûment livré la marchandise dès lors que celle-ci, dédouanée à l’exportation, a été mise à la disposition du transporteur nommé par l’acheteur au lieu convenu. Il convient de noter que le lieu de livraison choisi à une incidence sur les obligations de chargement et de déchargement de la marchandise en ce lieu. Si la livraison est effectuée dans les locaux du vendeur, ce dernier est responsable du chargement de la marchandise ; si la livraison a lieu ailleurs, le vendeur est toujours responsable du chargement dans son usine, mais pas du déchargement.",
          "Cet incoterm est le plus versatile. Il est en fait estimé qu’une transaction internationale sur quatre utilise cet Incoterm. Son principal avantage est sa flexibilité dans l’adresse de livraison.",
          "Cela peut être l’adresse du vendeur, un entrepôt, un aéroport, Le vendeur et l’acheteur peuvent convenir que l’acheteur doit donner l’instruction à son transporteur de fournir au vendeur le connaissement comportant la mention de mise à bord après le chargement des marchandises. Le vendeur étant ensuite obligé de déposer ce connaissement auprès de son institution financière à l’intention de l’acheteur. …etc.",
        ],
      },
      {
        heading: "FAS : Free Alongside Ship (Franco le long du navire, port d’embarquement convenu)",
        paragraphs: [
          "Le vendeur à dûment livré dès lors que la marchandise a été placée le long du navire, au port d’embarquement convenu. C’est à partir de ce moment-là, que l’acheteur doit supporter tous les frais et risques de perte ou de dommage que la marchandise peut courir. Le terme FAS impose au vendeur l’obligation de dédouaner la marchandise à l’exportation.",
        ],
      },
      {
        heading: "FOB : Free on Board (Chargé à bord - port d’embarquement convenu)",
        paragraphs: [
          "Le vendeur a rempli son obligation de livraison quand la marchandise est placée à bord du navire au port d’embarquement désigné. Le vendeur dédouane la marchandise à l’exportation.",
          "L’acheteur choisit le navire et paye le fret maritime. Le transfert des risques s’effectue lorsque les marchandises sont à bord du navire. A partir de ce moment, l’acheteur doit supporter tous les frais.",
        ],
      },
      {
        heading: "CFR : Cost and Freight ( Coût et Fret, port de destination convenu)",
        paragraphs: [
          "Le vendeur doit choisir le navire et payer les frais et le fret nécessaires pour acheminer la marchandise au port de destination désigné. Les formalités d’exportation incombent au vendeur. Le transfert des risques s’effectue au moment où les marchandises sont mises à bord du navire, mais les marchandises voyagent aux risques de l’acheteur.",
        ],
      },
      {
        heading: "CIF : Cost Insurance and Freight (Coût Assurance et Fret, port de destination convenu)",
        paragraphs: [
          "Le vendeur a les mêmes obligations qu’en CFR mais il doit en plus fournir une assurance maritime minimale (garantie FAP Sauf). Les formalités d’exportation incombent au vendeur.",
          "La marchandise voyage, sur le transport maritime ou fluvial, aux risques et périls de l’acheteur. Le transfert des risques s’effectue au moment où les marchandises sont mises à bord du navire.",
        ],
      },
      {
        heading: "CPT : Carriage Paid To (Port Payé jusqu’à, lieu de destination convenu)",
        paragraphs: [
          "Le vendeur paie tous les frais depuis l’emballage jusqu’au transport principal. Sa particularité réside dans le fait que le transfert des frais se fait à l’arrivée, pendant que le transfert des risques se fait au départ dès lors que le vendeur a remis la marchandise au transporteur principal. Le vendeur paie donc le transport principal pour le compte de l’acheteur, et la marchandise voyage également aux risques de ce dernier. L’acheteur s’occupe alors de dédouaner et réceptionner les biens.",
        ],
      },
      {
        heading: "CIP : Carriage and Insurance Paid To (Port Payé Assurance Comprise Jusqu’au lieu de destination convenu)",
        paragraphs: [
          "Le vendeur s’occupe de livrer la marchandise jusqu’au lieu de destination choisi par l’acheteur. C’est que le vendeur doit souscrire une police d’assurance qui couvre le risque de l’acheteur pendant le transport principal garantie tout risque à 110%. L’acheteur est en charge du déchargement du véhicule à l’arrivée, du dédouanement à l’import puis du transport final.",
        ],
      },
      {
        heading: "DPU : Delivered At Place Unloaded (Déchargé au lieu destination convenu)",
        paragraphs: [
          "Le vendeur a rempli ses obligations lorsque la marchandise est placée à la disposition de l’acheteur déchargée du moyen de transport principal au lieu de destination convenu (ce lieu peut être un terminal, un entrepôt ou les locaux de l’acheteur).",
          "Le vendeur n’est pas tenu de gérer le dédouanement dans le pays de destination, sauf convention contraire avec une variante « DPU dédouanée ».",
          "Le DPU est le seul Incoterm qui impose au vendeur de décharger la marchandise à destination.",
        ],
      },
      {
        heading: "DAP : Delivered At Place (Rendu au lieu de destination, lieu convenu)",
        paragraphs: [
          "Le vendeur est en charge de livrer la marchandise jusqu’au lieu convenu avec l’acheteur, non déchargé. L’acheteur est en charge du dédouanement lié à l’importation et doit s’occuper du déchargement du véhicule à destination.",
        ],
      },
      {
        heading: "DDP : Delivered Duty Paid / Rendu Droits Acquittés, lieu de destination convenu",
        paragraphs: [
          "A l’inverse du terme EXW à l’usine, ce terme désigne l’obligation maximum du vendeur.",
          "Lors d’un incoterm DDP le vendeur est en charge de tous les risques et s’occupe du transport et frais annexes de son usine jusqu’à l’usine de l’acheteur. L’acheteur est seulement en charge du déchargement du véhicule à destination. Le terme DDP est exactement l’opposé d’EXW.",
        ],
      },
      {
        heading: "Remarque :",
        list: [
          "Les Incoterms sont classés dans l’ordre croissant des obligations du vendeur. Ainsi en EXW ses obligations sont minimales, mais en DDP elles sont maximales.",
          "Tous les frais placés avant un incoterm sont supportés par le vendeur, mais celles placées après cet incoterm sont supportées par l’acheteur.",
          "Selon la Chambre de Commerce Internationale, FOB est le dernier Incoterm dans le pays du vendeur et CFR est le premier Incoterm dans le pays de l’acheteur. Ils ne sont donc pas suivis de ville du même pays.",
          "En cas de vente EXW… le vendeur supporte seulement les frais d’emballage. Les autres charges incombent à l’acheteur. (Ex : Le chargement sur camion, le pré-acheminement)",
        ],
      },
      {
        heading: "VIII- STRUCTURE DES PRIX SELON LES INCOTERMS 2020",
        paragraphs: ["Nous retenons deux types de structure de prix selon les modes de transport"],
      },
      {
        heading: "LE TRANSPORT MARITIME",
        table: {
          headers: ["LE TRANSPORT MARITIME"],
          rows: yearTwoTable('Structure des prix selon le transport maritime').rows,
        },
      },
      {
        heading: "TRANSPORT MULTIMODAL",
        table: {
          headers: ["TRANSPORT MULTIMODAL"],
          rows: yearTwoTable('Structure des prix selon le transport multimodal').rows,
        },
      },
      {
        heading: "IX- Le Point de transfert des risques et des frais selon les incoterms 2020",
      },
      {
        table: {
          headers: ["INCOTERMS", "Lieux de transfert des risques et des frais"],
          rows: [
            [
              "EXW",
              "à la sortie de l'usine du vendeur (Atelier, établissement, entrepôt de production) ou bord champs.",
            ],
            [
              "FCA",
              "après le dédouanement dans le pays du vendeur (Lors de la remise des marchandises au transporteur principal au lieu convenu).",
            ],
            [
              "FAS",
              "après dédouanement dans le pays du vendeur à quai le long du navire du port d’embarquement.",
            ],
            [
              "FOB",
              "après dédouanement de la marchandise (A bord du navire au port d’embarquement).",
            ],
            [
              "CFR",
              "après chargement de la marchandise dans le bateau (A bord du navire au port d’embarquement).",
            ],
            [
              "CIF",
              "Après dédouanement de la marchandise dans le pays du vendeur (A bord du navire au port d’embarquement).",
            ],
            [
              "CPT",
              "Lorsque les marchandises sont remises au premier transporteur (Lors de la remise des marchandises au transporteur principal au lieu convenu.)",
            ],
            [
              "CIP",
              "à la livraison à l'acheteur (Lors de la remise des marchandises au transporteur principal au lieu convenu.)",
            ],
            [
              "DPU",
              "au déchargement des marchandises sur le terminal (ou autre) avant dédouanement (Au terminal maritime, fluvial, aérien, routier ou ferroviaire convenu).",
            ],
            [
              "DAP",
              "Au lieu de destination des biens avant déchargement (Lieu de destination ou à l’endroit convenu).",
            ],
            [
              "DDP",
              "à l'usine de l'acheteur Etablissement de l’acheteur (atelier, usine, magasin ou entrepôt de stockage)",
            ],
          ],
        },
      },
      {
        heading: "X- La Détermination des différents couts",
      },
      {
        heading: "1) Le prix EXW",
        paragraphs: [
          "Le Prix de Vente (Prix EXW, prix départ usine ou prix de vente bord champs) est composé des frais ou charges supportées (prix d’achat ou prix de revient ou cout d’achat ou cout de revient ou cout de production) plus la marge commerciale.",
          "Formule : PV = PA + MC",
          "Le prix de vente peut être déterminé à partir du taux de marque, taux de marge ou du coefficient multiplicateur.",
          "Le Taux de Marge (Txmarge)",
          "Le taux de marge est la marge commerciale exprimée en pourcentage du prix d’achat, prix de revient ou cout d’achat ou cout de revient.",
        ],
      },
      {
        formulas: ["Taux de marge = MC ÷ PA", "PV = PA × (1 + Taux de marge)"],
      },
      {
        heading: "Le taux de marque (Txmarque)",
        paragraphs: [
          "Le taux de marque est la marge commerciale exprimée en pourcentage du prix de vente, prix EXW, prix bord champ ou prix départ usine.",
        ],
        formulas: ["Taux de marque = MC ÷ PV", "PV = PA ÷ (1 − Taux de marque)"],
      },
      {
        heading: "Le coefficient multiplicateur (CM)",
        paragraphs: ["Il exprime le rapport entre le ou les prix de vente et d’achat"],
        formulas: ["CM = PV ÷ PA d’où PV = PA × CM"],
      },
      {
        paragraphs: [
          "NB : pour le résultat du CM, il faut toujours prendre tous les chiffres après la virgule.",
        ],
      },
      {
        heading: "APPLICATION 1 :",
        list: [
          "Jean effectue habituellement sur la vente des CD vidéo un taux de marque de 6,5%. Il commercialise un CD dont le coût d’achat est de 950 F CFA.",
        ],
      },
      {
        paragraphs: [
          "Travail à faire : Quel le prix de vente unitaire d’un CD ?",
          "b) Deborah vend un complet de pagnes dont le coût d’achat est de 30 500 FCFA. Elle pratique un taux de marge de 18%.",
        ],
      },
      {
        heading: "Travail à faire :",
        paragraphs: [
          "Quel sera le prix de vente d’un complet de pagnes ainsi que la marge commerciale réalisée ?",
        ],
      },
      {
        heading: "APPLICATION 2 :",
        paragraphs: [
          "L’entreprise CDC achète des fruits et légumes sur le marché ivoirien pour les revendre sur les marchés internationaux. Elle vous demande de déterminer le prix EX Works (EXW) d’une commande portant sur 3000 boites de conserves d’ananas. Les dépenses totales pour acquérir les 3000 boites de conserves sont estimées à 380 FCFA la boite.",
        ],
        list: [
          "Hypothèse 1 : l’entreprise envisage un bénéfice unitaire de 95 FCFA / boite de conserves",
          "Hypothèse 2 : l’entreprise envisage pratiquer un taux de marge de 25%.",
          "Hypothèse 3 : l’entreprise prévoir pratiquer un taux de marque de 20%.",
        ],
      },
      {
        heading: "2) La détermination du fret maritime ou fret net",
        paragraphs: [
          "Le fret est à la fois le chargement d’un navire et le montant payé par le chargeur pour que ses marchandises voyagent sur le moyen de transport principal. Ici nous retiendront cette deuxième définition.",
          "Pour déterminer le fret maritime, il faut respecter les étapes suivantes :",
        ],
      },
      {
        heading: "2.1 Le fret de base(FB)",
        paragraphs: [
          "Pour les expéditions en conventionnel (sacs, caisses, fûts…), le fret maritime est établit pour un voyage donné à l’unité payante (UP).",
          "Cette unité est la tonne (t) ou le mètre cube (m3) à l’avantage du navire.",
          "Ceci signifie que l’on paiera sur la base du plus élevé des deux (2) chiffres de masse en tonne et du volume en mètre cube (m3).",
          "Exemple : pour une expédition de 3m3 et ayant pour poids 4t, combien d’UP paiera-t-on ?",
          "NB : On dira que le chargement est en lourd lorsque le tonnage est supérieur au cubage et en léger si le cubage est supérieur au tonnage.",
          "FB (Fret de Base) : Tarif X nombre d’UP",
        ],
      },
      {
        heading: "Cas pratique",
        paragraphs: [
          "Une expédition d’un poids brut de 12 000 kg ayant un volume de 8m3 taxé à 1200 FCFA la tonne ou le m3",
          "Quel serait le Fret de Base ?",
        ],
      },
      {
        heading: "Résolution",
      },
      {
        heading: "2.2 Le fret net(FN)",
      },
      {
        heading: "2.2.1 Les correctifs",
        paragraphs: [
          "Certains sont conjoncturels et d’autres existe de manières permanentes.",
          "Leur mode de calcul peut varier d’une conférence à une autre.",
        ],
      },
      {
        heading: "Les ajustements conjoncturels",
        paragraphs: [
          "BAF (Bunker Adjustment Factor) ou surcharge fuel",
          "On l'appelle également IFP (Intérim Fuel Participation)",
          "Elle est destinée à intégrer les variations du prix du combustible être deux éditions du tarif qui s’applique comme un pourcentage de majoration (+) ou de réduction (-) sur le fret de base.",
          "CAF (Currency Adjustment Factor) ou surcharge monétaire",
          "C’est le même principe que BAF mais elle tient compte des variations de la devise dans laquelle est libellé le tarif.",
          "Cela nous permet d’obtenir la formule :",
          "CSP : Correctif Surcharge Portuaire ou Congestion de Surcharge Portuaire ou S.E.P (Surcharge d’Encombrement Portuaire)",
          "Le correctif va majorer le fret sur certaine destination ou une immobilisation anormale du navire est à prévoir. C’est une taxe à payer pour sur charge du port par l’armateur.",
        ],
      },
      {
        heading: "Formule contractée :",
      },
      {
        heading: "Les ajustements permanents",
        paragraphs: [
          "Ces ajustements sont appliqués en permanence quel que soit les conditions.",
          "Ils sont au nombre de trois (3) :",
        ],
        list: [
          "La surtaxe de colis lourds (en générale au-dessus de 5 T)",
          "La surtaxe de colis d'extra-longueur (en générale au-dessus de 12m.",
          "Le sur fret de déroulement",
        ],
      },
      {
        heading: "Les ristournes",
        paragraphs: [
          "Les conférences maritimes, en situation de concurrence vis-à-vis des outsiders, cherchent à fidéliser les chargeurs en leur offrant des avantages de prix.",
          "Deux systèmes sont couramment pratiqués.",
        ],
      },
      {
        heading: "Les ristournes de fidélité",
        paragraphs: [
          "Elles sont utilisées par la plus par des conférences en consentant aux chargeurs qui contractent un engagement de ne s’adresser qu’aux compagnies de la conférence.",
          "Elles sont en général de 8 à 9,5% du fret si elles sont déductibles immédiatement, ou de 9 à 10% si elles sont reversées tous les 6 mois sur l’ensemble des frets de la période.",
        ],
      },
      {
        heading: "Les taux de fret réduits",
        paragraphs: [
          "Formel environ 100%, ils sont appliqués par certaines conférences aux chargeurs ayant signés un contrat avec l’armement (armateur).",
          "Ce contrat formel prévoit des dommages-intérêts en cas de rupture de l’engagement du chargeur.",
        ],
      },
      {
        heading: "Formule contractée :",
      },
      {
        heading: "EXERCICES D’APPLICATIONS",
      },
      {
        heading: "Exercice n°1",
        paragraphs: [
          "Une expédition dont le poids brut est de 10 T, ayant un volume de 5 m3 et taxé à 500 F CFA/Tonne /m3 avec BAF = - 3% et CAF = 2%",
          "TRAVAIL A FAIRE : Calculer le fret maritime de cette cargaison.",
        ],
      },
      {
        heading: "Exercice n°2",
        paragraphs: [
          "Une expédition d’un poids brut de 80 T ayant un volume de 100 m3 taxable à 5000 F CFA/m3/T avec BAF = 2 % et CAF = - 3%",
          "TRAVAIL A FAIRE : Calculer le fret maritime cette expédition.",
        ],
      },
      {
        heading: "Exercicen°3",
        paragraphs: [
          "Les caractéristiques d’une commande de M Caleb vendeur de portable installé à Abidjan dans le centre commercial de Treichville sont les suivantes :",
          "- Quantité = 150 portables",
          "- Poids unitaire = 900 g",
          "- Volume unitaire = 0,027 m3",
          "- Emballage = 50 caisses pouvant contenir chacune 3 unités",
          "- Poids vide d’une caisse = 1,5 kg",
          "- Dimension d’une caisse = 60 cm x 50 cm x 40 cm",
          "- 1USD =450 FCFA ; FB = 25 USD l’UP avec BAF = 2% ; CAF = 1,5%",
          "TRAVAIL À FAIRE : Déterminer le fret maritime à payer par M Caleb.",
        ],
      },
      {
        heading: "Exercice n°4",
        paragraphs: [
          "Une compagnie de transport maritime pratique les tarifs suivants pour une destination donnée.",
          "200 000 F CFA la tonne ou 305 000 F CFA le m3",
          "Les caractéristiques de la marchandise sont :",
          "Poids = 87 T et volume = 51 m3",
          "La valeur FOB de la marchandise est de 41 400 000 F CFA",
          "BAF = 4% ; CAF = - 3%",
          "TRAVAIL A FAIRE : Calculer le CFR de cette marchandise.",
        ],
      },
      {
        heading: "Exercice n°5",
        paragraphs: [
          "Une compagnie de transport maritime pratique les tarifs suivants :",
          "200 000 F CFA la tonne ou 305 000 F CFA le m3",
          "Les caractéristiques de la marchandise sont :",
          "Poids = 87 T et volume = 51 m3 avec BAF = 4% ; CAF = - 3% et CSP de 20 000 F CFA",
          "TRAVAIL A FAIRE : Déterminer le fret maritime",
        ],
      },
      {
        heading: "Exercice n°6",
        paragraphs: [
          "Une compagnie de transport maritime pratique les tarifs suivants :",
          "200 000 F CFA la tonne ou 305 000 F CFA le m3",
          "Les caractéristiques de la marchandise sont :",
          "Poids = 87 T et volume = 51 m3 avec BAF = 4% ; CAF = - 3%; CSP= 3,5% et ristourne= 8%, a été accordée par le transporteur en guise de la fidélité du chargeur.",
          "TRAVAIL A FAIRE : Déterminer le fret maritime de cette expédition.",
        ],
      },
      {
        heading: "3. La Valeur d’assurance ou Valeur assurée (VA )",
        paragraphs: [
          "C’est la valeur des marchandises rendues à destination majorée d’un forfait. Ce forfait est l’estimation des dommages ou manques éventuels.",
        ],
      },
      {
        formulas: [
          "VA = CIF majoré de 10% = CIF + 10% CIF = CIF × 1,1 = 1,1 CIF",
          "VA = CFR majoré de 20% = CFR + 20% CFR = CFR × 1,2 = 1,2 CFR",
        ],
      },
      {
        heading: "4. La Prime d’Assurance (PA)",
        paragraphs: [
          "C’est le montant à payer par l’assuré à la compagnie d’assurance. Elle est déterminée en fonction des éléments suivants :",
        ],
        list: [
          "Valeur marchande du bien",
          "Nature de la police d’assurance",
          "Mode de transport utilisé",
        ],
      },
      {
        paragraphs: [
          "Comme formule générale nous avons :",
          "Prime d’assurance (PA) = Taux de la prime d’assurance x Valeur d’assurance (VA) + 2500FCFA.",
          "La formule simplifiée de la Prime d’Assurance (PA) en fonction de la VA :",
          "a) Lorsqu’on connait le montant CFR et que la VA est CIF + 10%CIF on détermine la prime d’assurance par la formule suivante :",
        ],
      },
      {
        formulas: ["PA = CFR ÷ [1 − (1,1 × TxAss)] − CFR + 2500 FCFA"],
      },
      {
        paragraphs: [
          "b) Lorsqu’on connait le montant CFR et que la VA est CFR + 20% CFR on peut déterminer la prime d’assurance par la formule suivante : PA = Taux d’assurance x 1,2CFR + 2500 FCFA.",
          "Application 1 : Une expédition fournie les informations suivantes :",
          "VA= 10.000.000 FCFA, Taux de la prime d’assurance = 0,3%,",
          "TAF : Calculez la prime d’assurance.",
          "Application 2 : Montant CFR = 17.000.000 FCFA, Taux de la prime d’assurance = 0, 4% VA= CFR + 20 % CFR",
          "TAF Calculez la prime d’assurance",
          "Application 3 : Montant CFR = 20.000.000 FCFA, Taux de la prime d’assurance = 0, 5% VA= CIF majoré de 10 % CIF",
          "TAF : Calculez la prime d’assurance",
          "Application 4 : La valeur CFR d’une marchandise est de 6.000.000FCFA, le taux d’assurance est de 0,4%",
          "TAF : Calculer la prime d’assurance sachant que :",
          "- Valeur assurée = CFR majoré de 20%",
          "- Valeur assurée = CIF majoré de 10%",
        ],
      },
      {
        heading: "5. La Douane Import (DI)",
        paragraphs: [
          "Ce sont les droits et taxes qui frappent les marchandises exportées ou importées sur le territoire national. On les appelle aussi les droits d’entrée ou de porte. Les différents éléments avec leurs quotités entrant dans le calcul des droits et taxes sont :",
        ],
      },
      {
        heading: "Taxes permanentes",
        list: [
          "Droit de Douane (DD), son taux varie (0% ; 5% ; 10% ; 20% et 35%)",
          "Redevance Statistique (RSTA), son taux est de 1%",
          "Taxe sur la Valeur Ajoutée (TVA), son taux est de 18%",
          "Prélèvement Communautaire de Solidarité (PCS) son taux est de 0,8%",
          "Prélèvement Union Africaine (PUA) son taux est de 0,2%",
          "Prélèvement Communautaire CEDEAO (PCC) son taux est de 0,5%",
          "Taxe Supplémentaire Douane (TSD), son montant est de 20.000 FCFA.",
        ],
      },
      {
        heading: "Les taxes non permanentes",
        paragraphs: [
          "A ces taxes permanentes, on peut ajouter suivant l’exercice des taxes temporaires. En Côte d’Ivoire, les taxes sont les suivantes",
        ],
        list: [
          "La TAI (Taxe d’Ajustement à l’Importation), son taux varie de 10 à 20 %.",
          "Et la TCP (Taxe Complémentaire de Protection), son taux est de 10%.",
          "Les accises : ce sont des taxes additionnelles qui sont imposées aux produits qui ne sont pas considérés comme de première nécessité :",
        ],
      },
      {
        paragraphs: [
          "NB : En transport maritime.",
          "En transport maritime les différentes quotités sont appliquées sur la valeur FOB ou sur la valeur CIF. Prendre CIF comme Valeur Statistique (VS) à l’import et prendre FOB comme Valeur Statistique (VS) à l’Export.",
          "En transport multimodal",
          "Les différentes quotités s’appliquent sur la valeur CIP. Prendre CIP comme Valeur Statistique (VS) à l’import et FCA comme valeur statistique à l’export.",
          "La VED (Valeur en Douane) devient la VS (Valeur Statistique). Ainsi :",
          "La Douane Import (DI) = Montant des Droits et Taxes de Douane + TSD Les droits et taxes sont généralement déterminés par deux méthodes :",
        ],
        list: ["La méthode traditionnelle ou classique", "La méthode du taux cumulé"],
      },
      {
        heading: "Méthode classique ou méthode traditionnelle",
        paragraphs: [
          "VS= Valeur statistique",
          "DD= 0%, 5%, 10%, 20% ; 35% ; RSTA= 1% ; TVA=18% ; PCS=0,8% PUA=0,2%, PCC= 0,5% ; TAI=10% ; TCP= 20%",
        ],
      },
      {
        formulas: [
          "Montant DD = VS × Taux DD",
          "Montant RSTA = VS × Taux RSTA",
          "Montant TAI = VS × Taux TAI",
          "Montant TCP = VS × Taux TCP",
          "Montant TVA = Taux TVA × (VS + Mtant DD + Mtant RSTA + Mtant TAI + Mtant TCP)",
          "Montant PCS = VS × Taux PCS",
          "Montant PUA = VS × Taux PUA",
          "Montant PCC = VS × Taux PCC",
          "= Montant des droits et taxes + TSD",
          "= Douane Import (DI)",
        ],
      },
      {
        heading: "Méthode du taux cumulé (TC)",
        paragraphs: [
          "Total de Droits et taxes= taux cumulé x Valeur Statistique Douane import (DI)= Montant des Droits et Taxes + TSD",
          "TC=",
          "NB : tous les taux de droits et taxes ne varient pas sauf celui de DD Si taux de DD = 5% alors Taux Cumulé (TC) = 26,58%",
          "Si taux de DD = 10% alors Taux Cumulé (TC) = 32,48%",
          "Si taux de DD = 20% alors Taux Cumulé (TC) = 44,28%",
          "Si taux de DD = 35% alors Taux Cumulé (TC) = 61,98%",
        ],
      },
      {
        heading: "Application :",
        paragraphs: [
          "Valeur Statistique (VS) : 4 000 000 FCFA. DD= 10% ; RSTA= 1% ; TVA=18% ;",
          "PCS=0,8%PUA=0,2%, PCC= 0,5% ; TSD= 20 000 FCFA.",
          "Calculez la Douane Import par les 2 méthodes.",
        ],
      },
      {
        heading: "6. La RPI",
        paragraphs: [
          "Le calcul de la RPI (Redevance de la Procédure à l’Importation) se fait selon les méthodes suivantes :",
          "1ère Méthode : Valeur FOB > à 1000.000 FCFA",
          "RPI= 0,75% FOB ou 0,75% FCA avec un minimum de perception de 100.000 FCFA",
          "Exemple : FOB = 3.000.000 FCFA",
          "RPI = 0,75% x 3.000.000",
          "RPI = 22.500 FCFA. Or ce montant (22500 FCFA) est > à 100.000 FCFA donc la RPI RPI = 100.000FCFA (minimum de perception)",
          "2ème Méthode : Valeur FOB comprise entre 500.000F et 1.000.000FCFA 500.000 FCFA< Valeur FOB < 1.000.000 FCFA",
          "RPI = 70.000F à verser à la Direction de l’Analyse, du Risque, du Renseignement et de la Valeur (DARRV) de la douane.",
          "3ème Méthode : Valeur FOB< 500.000FCFA",
          "RPI= 0 FCFA",
        ],
      },
      {
        heading: "7. Les honoraires",
        paragraphs: [
          "Les prestataires factureront leurs honoraires directement aux fournisseurs/Exportateurs, préalablement à l’Évaluation de la Conformité. Les honoraires seront fonction de la méthode d'évaluation appliquée selon les routes A, B ou C :",
        ],
      },
      {
        table: {
          headers: [
            "Routes",
            "Honoraires selon un pourcentage de la valeur FOB déclarée",
            "Honoraires minimum en Francs CFA",
            "Honoraires maximum en Francs CFA",
          ],
          rows: [
            ["A", "0,45%", "197 000", "2 684 000"],
            ["B", "0,40%", "187 150", "2 549 800"],
            ["C", "0,30%", "167 450", "2 281 400"],
          ],
        },
      },
      {
        paragraphs: ["Ces honoraires comprennent entre autres :"],
        list: [
          "La vérification documentaire ;",
          "L’inspection physique et le marquage de la marchandise contrôlée ;",
          "L’émission du certificat.",
        ],
      },
      {
        heading: "APPLICATION",
        list: [
          "Définissez le terme « incoterms »",
          "Depuis quand date la première publication des incoterms ?",
          "Quel est le but des incoterms ?",
          "Expliquez les termes suivants : pré acheminement, transport principal et post acheminement",
          "Selon le type de vente et le mode de transport comment se classent les incoterms ?",
          "Pour chaque opération, indiquez entre le vendeur et l’acheteur à qui incombe le paiement correspondant",
          "vous exportez FAS Abidjan, qui paie la douane export ?",
          "Vous vendez DPU Marseille, qui paie l’assurance transport ?",
          "Vous vendez CFR Lomé, qui paie la douane import ?",
          "Vous recevez en DAP Bouaké, qui paie le déchargement au magasin de destination",
          "Vous importez de la Grèce par voie maritime des olives d’une valeur départ usine de 5000 000 FCFA les frais de mise à FOB sont estimés à 700 000 FCFA et le transport s’élèvent à 300 000 FCFA. La prime d’assurance est de 50 000 FCFA.",
        ],
      },
      {
        paragraphs: [
          "DD= 10% ; RSTA= 1% ; TVA=18% ; PCS=0,8%PUA=0,2%, PCC= 0,5% ;",
          "TSD= 20 000 FCFA.",
        ],
      },
      {
        heading: "Travail à faire :",
        list: [
          "Calculez les droits et taxes de douane par la méthode classique.",
          "Calculez la Douane Import par la méthode du taux cumulé.",
        ],
      },
      {
        heading: "TRAVAUX PRATIQUES",
      },
      {
        heading: "EXERCICE I",
        paragraphs: [
          "Après deux années passées à IPAM section logistique, vous avez l’opportunité d’occuper le poste de service d’achat dans une entreprise installée à Yamoussoukro. Cette société spécialisée dans la vente de riz veut lancer une commande, mais elle attend de vous des propositions des prix suivants : EX-WORK Nancy ; FAS Marseille ; FOB Marseille ; CFR Abidjan ; CIF Abidjan ; DPU Abidjan ; DAP Yakro et DDP Yakro",
          "La commande porte sur 2000 sacs de 50 kg avec prix magasin d’un sac égal à 18 €.",
          "- transport Nancy-Marseille = 0,5 € /kg",
          "- douane export = 3000 €",
          "- camionnage magasin – quai = 10 €/tonne",
          "- magasinage 20 jours = 0,2 €/sac/jour",
          "- manutention bord = 80 €/tonne",
          "- fret maritime = 70 €/tonne",
          "- assurance = 0,5%(CIF + 10%CIF)",
          "- manutention bord – quai = 1500 €",
          "- transport Abidjan – Yakro = 500 €",
          "- droit d’entrée (Douane import) = 15%CIF",
          "1€=656 F CFA",
        ],
      },
      {
        heading: "EXERCICE II",
        paragraphs: [
          "Le marché de l’emploi devenant de plus en plus difficile, après votre formation en tant que gestionnaire commercial, vous décidez de vous installez à votre propre compte pour mener une activité dans l’import – export. Votre première commande s’est portée sur l’importation de lait concentré sucré en boite de 1kg en condition CIF Abidjan. Ainsi, vous recevez de votre fournisseur Hollandais ce qui suit :",
          "- le prix d’une boite de lait =500 F CFA",
          "- le nombre de la commande = 45 000 boites de lait",
          "- contenu d’une caisse = 375 cartons",
          "- contenu d’un carton = 24 boites",
          "- poids d’un carton vide = 0,5kg",
          "- frais de transport de l’usine au port = 125 000 F CFA",
          "- location et empotage = 25 000 F CFA/caisse",
          "- transit export = 75 000 F CFA/ caisse",
          "- manutention export = 90 500 F CFA/caisse",
          "- manutention bord = 18 000 F CAF/caisse",
          "- fret maritime = 140 000 F CFA/caisse",
          "- assurance maritime = 0,5%(CFR + 20%CFR)",
          "- acconage import = 90 000 F CFA/caisse",
          "- honoraire du transitaire = 35 500 F CFA/caisse",
          "- droit de porte = 300 000 F CFA",
          "- post acheminement = 125 000 FCFA",
          "TRAVAIL À FAIRE : chiffrez les prix suivants : EX-WORK ; FAS ; FOB ; CFR ; CIF ;",
          "DPU : DAP et DDP",
        ],
      },
      {
        heading: "EXERCICE III",
        paragraphs: [
          "Shalom est un négociant international installé à Katiola. Sa commande est des amandes de karité. La commande de son client Allemand GUETZ porte sur 3000 tonnes d’amande de karité. A partir des annexes chiffrez les différents prix suivants en précisant les villes :",
          "Ex-Works, FAS, FOB, CFR, CIF, DPU, DAP et DDP",
          "Annexe 1",
          "Les amandes de karité sont conditionnées dans des sacs appelés « Big bag ». Chaque sac contient 2 tonnes d’amandes et le prix bord champs est de 75 FCFA/KG",
          "NB : 1€ = 656 FCFA /1USD = 506 FCFA",
          "Annexe 2",
          "- pré-acheminement = 250 000 F CFA",
          "- douane export = 200 000 F CFA",
          "- camionnage à quai = 2500 F CFA/tonne",
        ],
        list: ["entreposage 6 jours à raison de 10 F CFA/sac/jour"],
      },
      {
        paragraphs: [
          "- acconage export = 8500 F CFA/tonne",
          "- transport principal = 80 USD/tonne",
          "- assurance = 0,5%(CIF + 10%CIF)",
          "- frais de déchargement à Hambourg = 950€",
          "- droit d’entrée cumulé = 10%CIF",
          "- post acheminement = 305€",
        ],
      },
      {
        heading: "EXERCICE IV",
        paragraphs: [
          "La Société CAJOU SARL de droit ivoirien, localisé à Bouaké est une unité de transformation ; de conditionnement et d’exportation de noix de cajou destinée aux marché asiatiques. Elle reçoit une importante commande de noix de de cajou de son principal client indien BOMBAY-LTD basé à MONBAI. Cette importante commande porte sur 300 000 kg et le transport préconisé par l’importateur en fonction de la quantité commandée est par voie maritime dans 80 sacs.",
          "Les détails de la commande sont en annexe.",
        ],
      },
      {
        heading: "TRAVAIL À FAIRE",
        list: ["Déterminez le coût de revient des produits semi-finis destinés à"],
      },
    ],
};
