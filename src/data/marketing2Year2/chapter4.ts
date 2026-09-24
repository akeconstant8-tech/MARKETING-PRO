import type { TciChapter } from '../tciTypes';

export const mkt2Chapter4: TciChapter = {
  id: 'mkt2ch4',
  kind: 'chapitre',
  level: 2,
  number: 4,
  title: 'Première partie, Chapitre IV : Généralités sur la douane',
  intro:
    "La Direction Générale des Douanes ivoiriennes est rattachée au Ministère de l'Economie et des Finances. Administration publique, la douane est chargée de déterminer l'assiette des droits et des taxes imposés aux marchandises importées ou à exporter. Puis, elle les liquide au profit de l'Etat.",
  sections: [
    { heading: 'I) Connaissance de la douane' },
    {
      paragraphs: [
        "En effet, l'assiette en douane est la base de calcul des droits et taxes. Elle représente soit la valeur CIF ou CIF ajustée à l'import, soit la valeur point de sortie à l'export (FAS, FCA). La liquidation, quant à elle, représente le calcul des droits et taxes de porte (droits et taxes de sortie ou d'entrée).",
        "En vue de bien accomplir les missions qui lui sont assignées, l'administration des douanes est composée d'une Direction Générale, de sous-directions départementales, de sous-directions régionales, de bureaux et de postes de douane à l'intérieur comme aux frontières.",
      ],
    },
    {
      heading: '1) Les missions de la Douane',
      paragraphs: ['Nous distinguons quatre principales missions : la mission fiscale, la mission de protection, la mission économique et la mission statistique.'],
      list: [
        "1.1) Mission fiscale : plus connue du public, la mission fiscale consiste à percevoir les droits et taxes de douane exigibles sur les marchandises importées et à exporter.",
        "1.2) Mission de protection : la douane contrôle les entrées en Côte d'Ivoire de marchandises étrangères et les sorties des marchandises ivoiriennes. Elle applique des mesures de prohibition et surtout de contingentement sur certaines marchandises étrangères.",
        "1.3) Mission économique et d'incitation : la douane dispose de divers régimes douaniers économiques ou suspensifs en vue d'attirer les investisseurs et de mobiliser les capitaux nationaux.",
        '1.4) Mission statistique : la douane élabore et diffuse les statistiques du commerce extérieur.',
      ],
    },
    {
      heading: '2) Formalités douanières',
      paragraphs: ['Elles consistent essentiellement en deux opérations : la conduite en douane et la mise en douane.'],
    },
    {
      heading: '2.1) La conduite en douane',
      paragraphs: [
        "La conduite en douane répond au souci de l'administration douanière d'empêcher les marchandises de passer en dehors des bureaux de douane :",
      ],
      list: [
        'Par la voie maritime, en déversant par des barques légères, les marchandises dans les zones côtières ;',
        'Par la voie aérienne, en parachutant les colis en plein vol en dehors des bureaux des Douanes ;',
        'Par la voie terrestre, en empruntant des voies détournées qui évitent les postes frontières et les bureaux des Douanes.',
      ],
    },
    {
      heading: "Comment réaliser cette conduite en douane ? a) A l'importation (provenance étrangère)",
      list: [
        "Par voie maritime : la loi douanière impose deux principales obligations au capitaine d'un navire qui doit mouiller dans les eaux territoriales ivoiriennes : obligation d'accoster dans un port pourvu d'un bureau de douane ; obligation de dépôt du manifeste, qui est l'état général de chargement d'un navire dans un bureau de douane dans la zone maritime de 20 Km de la côte vers le large.",
        "Par voie aérienne : les aéronefs sont contraints d'atterrir sur les aérodromes pourvus d'un bureau de douane. Obligation de dépôt du manifeste, respect de la convention IATA (International Air Transport Association) de CHICAGO de 1944 et de suivi de la voie aérienne légale (couloir aérien).",
        "Par voie terrestre : obligation de suivre la route légale (déterminée par arrêté du préfet). Obligation de dépôt de la lettre de voiture ou de la feuille de route sur lesquelles sont reprises les marchandises.",
      ],
    },
    {
      paragraphs: ['NB : En transport terrestre, on parle de lettre de voiture et non de manifeste.'],
    },
    {
      heading: "b) A l'exportation (provenance ivoirienne)",
      paragraphs: [
        "A l'exportation, les formalités préalables au dédouanement des marchandises sont les mêmes quel que soit le mode de transport utilisé. En effet, toutes les marchandises doivent accéder au bureau des douanes par la voie légale ou à tout autre lieu désigné par la Douane pour y être déclarées en détail.",
      ],
    },
    {
      heading: '2.2) La mise en douane',
      paragraphs: [
        "La mise en douane consiste à faire prendre les marchandises en charge par le service des douanes en attendant l'intervention de leurs destinataires ou de leurs expéditeurs réels. C'est donc une situation d'attente. Elle commence par le dépôt d'une déclaration sommaire.",
      ],
    },
    {
      heading: "A) A l'importation",
      list: [
        "Par voie maritime : que les marchandises soient débarquées ou non, le capitaine du navire ou son représentant doit déposer dans les 24 heures après l'arrivée du navire au port à titre de déclaration sommaire les documents suivants : le manifeste de cargaison (il comporte le n° du connaissement, les marques et numéros des colis, nombre et nature des colis, noms usuels des marchandises = dénomination commerciale) ; le manifeste de provisions de bord (il comprend toute la provision nécessaire à la vie de l'équipage et des passagers : carburant, nourriture, eau potable) ; le manifeste de pacotilles (il comprend les articles destinés à l'usage personnel des passagers : vêtements, articles de toilette, boissons...) ; la documentation d'identification du navire : acte de nationalité, carnet de bord du capitaine, liste d'équipage et des passagers ; les connaissements ou les chartes-parties (preuve de contrat de port maritime d'affrètement : preuve du contrat, titre de propriété, reçu de la marchandise).",
        "Par voie aérienne : dans la pratique, la déclaration sommaire s'établit sur un document unique englobant les marchandises, les passagers et les membres de l'équipage. La Déclaration Sommaire Générale est déposée au bureau de douane dès l'arrivée de l'aéronef.",
        "Par voie terrestre : la déclaration sommaire est constituée par la feuille de route ou lettre de voiture ou feuille de transport sous le couvert de laquelle les marchandises sont transportées par voie d'eau navigable, par route ou par voie ferrée. Elle est déposée par le conducteur de véhicule.",
      ],
    },
    {
      heading: "B) A l'exportation",
      paragraphs: [
        "Il n'y a pas de déclaration sommaire à l'exportation. Les marchandises destinées à l'exportation sont acheminées vers les points d'embarquement et déclarées en détail au bureau des douanes. Mais par la voie maritime et aérienne le manifeste de sortie doit être déposé avant l'embarquement des marchandises. Pour certains produits nécessaires à la consommation locale (denrées alimentaires) et ceux faisant partie du patrimoine culturel national (objet d'art), des formalités exceptionnelles peuvent être exigées.",
      ],
    },
    { heading: 'II- Les régimes douaniers' },
    {
      heading: '2.1) Définition',
      paragraphs: [
        "Les régimes douaniers désignent l'usage que l'importateur ou l'exportateur entend réserver à ses marchandises. En d'autres termes, c'est le statut juridique sous lequel les marchandises entrent, sortent ou circulent librement et légalement sur un territoire douanier. Par exemple un produit qui entre sur un territoire douanier peut être destiné à : la consommation ; la réparation ; la production ; une exportation ; au transit...",
        'Tous ces cas de figure sont soumis à un régime douanier particulier. Il existe deux grandes catégories de régimes douaniers :',
      ],
      list: [
        'Les régimes douaniers de droit commun appelés régimes douaniers définitifs ou fondamentaux',
        'Les régimes douaniers suspensifs ou économiques.',
      ],
    },
    {
      heading: '2.2) Les régimes douaniers de droit commun',
      paragraphs: [
        "Ces régimes s'appliquent à l'importation et à l'exportation. Ils sont dits définitifs parce qu'ils soumettent l'importateur ou l'exportateur au paiement immédiat des droits et taxes exigibles. Tous les produits placés sous ces régimes sont assujettis au paiement des droits et taxes de douane. Ces régimes sont :",
      ],
      list: [
        '4000 (C100 ou D3) : Mise à la consommation directe (vente ou utilisation).',
        '4052 (C500) : Mise à la consommation ensuite d\'admission temporaire.',
        '1000 (E100 ou D6) : Exportation définitive de produits pris sur le marché local.',
        '3050 (R500) : Exportation de produits ensuite d\'admission temporaire pour transformation de matières premières.',
        "4070 (C300) : Mise à la consommation en suite d'entrepôt.",
      ],
    },
    {
      heading: "a) A l'importation",
      paragraphs: [
        "La mise à la consommation (D3 - C100 - 4000) : c'est le régime douanier qui permet à l'importateur après paiement des droits et taxes exigibles de mettre les marchandises à la disposition des consommateurs sur le territoire douanier.",
        "Exemple : Paul importe de la France 1000 paires de chaussures destinées à la vente sur le territoire douanier.",
        'TRAVAIL A FAIRE : Sous quel régime douanier devra-t-il déclarer les marchandises et qu\'est-ce que cela implique du point de vue fiscal ?',
        "Réponse : Les marchandises doivent être déclarées sous le régime de la mise à la consommation directe (sous le régime D3 - C100 - 4000). Ces marchandises feront l'objet d'une imposition aux droits et taxes en vigueur ; droit de douane (DD), redevance statistique (RESTA), prélèvement communautaire de solidarité (PCS), prélèvement communautaire CEDEAO (PCC), taxe sur la valeur ajoutée (TVA)... Paul devra s'acquitter de ces droits avant de mettre ses marchandises sur le marché.",
      ],
    },
    {
      heading: "b) A l'exportation",
      paragraphs: [
        "La simple sortie ou exportation simple (D6 - E101 - 1000) : c'est le régime d'exportation définitive. L'exportateur devra payer un Droit Unique de Sortie (DUS) avant la sortie effective de ses marchandises.",
        "Exemple : Daniel reçoit une commande portant sur 25 paires de chaussures de son client malien.",
        "Travail à faire : Sous quel régime douanier devra-t-il déclarer les marchandises à la douane ivoirienne ? Et qu'est-ce que cela implique du point de vue fiscal ? (conséquences juridiques)",
        "Réponse : Ces 25 paires de chaussures seront déclarées sous le régime de la simple sortie (D6 - E101 - 1000). Daniel devra payer le Droit Unique de Sortie.",
      ],
    },
    {
      heading: '2.3) Les régimes douaniers économiques',
      paragraphs: [
        "Les marchandises qui entrent sur le territoire douanier ivoirien ne sont pas toutes destinées à la consommation. Certaines marchandises bénéficient du régime suspensif leur accordant la suspension du paiement immédiat des droits et taxes de douane. Sous ces régimes, les droits et taxes de douane exigibles aux marchandises sont en suspension. Les régimes douaniers économiques sont :",
      ],
      list: [
        '7000 (S300 ou D3) : Entrée en entrepôt fictif, réel ou spécial pour stockage.',
        '7080 (S400) : Mise en entrepôt de produits pétroliers raffinés localement',
        '8000 (S111 ou D15) : Transit national (circulation sur le territoire national).',
        '3080 (R300 ou D25) : Transit international par route, air, fer.',
        '2300 (E810) : Exportation temporaire pour réparation ou transformation',
        "6022 (C800) : Mise à la consommation en suite d'exportation temporaire pour transformation",
        '5200 (ex S531) : Admission Temporaire pour Transformation (A.T.T)',
        '5000 : Admission Temporaire Ordinaire (A.T.O).',
      ],
    },
    {
      heading: "a) A l'importation — Le Régime de l'Entrepôt (D11-S300-7000)",
      paragraphs: [
        "Ce régime permet à l'importateur de faire entrer des marchandises sur le territoire douanier, de les stocker en entrepôt en suspension du paiement des droits de taxes douaniers. Ces marchandises qui sont stockées sur le territoire douanier sont considérées par le principe de l'extraterritorialité comme n'ayant pas franchi la barrière douanière. Elles restent sous douane en attendant que l'importateur leur affecte une destination définitive. Il y a trois types d'entrepôts :",
      ],
      list: [
        "Entrepôt réel ou public : ils appartiennent à une collectivité ou un organisme public. Ce type d'entrepôt est soumis à un contrôle permanent de la douane (présence de la douane 24h/24h). Durée de séjour : 3 ans",
        "Entrepôt fictif ou privé : les locaux appartiennent à des opérateurs privés qui s'engagent vis-à-vis de la douane à conserver les marchandises en conteneurs plombés. La possession de ce type d'entrepôt est soumise à un acquit à caution. Durée de séjour : 2 ans",
        "Entrepôt spécial : il est utilisé pour le stockage de produit nécessitant des précautions ou installations de stockage particulières. Durée de séjour : 18 mois",
      ],
    },
    {
      heading: "Le régime de l'Admission Temporaire (D18 - S501 - 5080)",
      paragraphs: [
        "Ce régime permet d'admettre temporairement des marchandises sur le territoire douanier en suspension du paiement des droits et taxes de douane. Ces marchandises sont destinées soit à prendre part :",
      ],
      list: [
        'à des manifestations commerciales (foire, salon, exposition...)',
        "à des activités industrielles (réparation, transformation, complément de main d'œuvre)",
        'soit enfin à être utilisées par les organismes internationaux et les ambassades.',
      ],
    },
    {
      heading: 'Les Régimes de Transit International (D25 - S111 - 8000)',
      paragraphs: [
        "Les marchandises affectées sous ce régime traversent le territoire douanier en suspension du paiement des droits et taxes de douane. C'est un régime de franchise.",
      ],
    },
    {
      heading: "b) A l'exportation — Le régime de l'exportation temporaire (D56 - E810 - 2300)",
      paragraphs: ['On distingue les trois (3) variantes suivantes :'],
      list: [
        'Le type commercial : les marchandises sortent du territoire pour prendre part à une manifestation commerciale.',
        'Le type industriel : les biens quittent le pays pour une activité industrielle temporaire.',
        "Le type administratif : ce sont généralement des biens appartenant aux ambassades et aux organismes internationaux.",
      ],
    },
    {
      heading: 'NB : Importance des régimes douaniers économiques',
      paragraphs: ['Les régimes douaniers économiques permettent :'],
      list: [
        'de constituer des stocks disponibles sur le territoire national,',
        'la circulation des marchandises à travers le transit national ou international',
        'de transformer les produits',
        "d'alléger les charges de trésorerie des entreprises.",
      ],
    },
    {
      heading: "Exercice d'application",
      paragraphs: [
        "Quels sont les régimes douaniers applicables aux situations suivantes et qu'est-ce que cela implique de la part de l'intéressé sur le plan fiscal ?",
      ],
      list: [
        "a) Dans le cadre du Salon Africain des Ressources Agricoles et Animales (SARA), une entreprise sénégalaise entre en Côte d'Ivoire avec 2 tonnes d'arachides de diverses essences.",
        "b) Un agriculteur ivoirien exporte vers la France 600 cartons d'ananas destinés à la vente sur le marché français.",
        'c) La clinique « Aime ton Prochain » expédie un appareil médical en Belgique pour réparation.',
        "d) Le transitaire TRANSCOM réceptionne 10 tonnes de marchandises au port d'Abidjan destinées à son client résident au Burkina Faso.",
        "e) Jacques achète des appareils électroménagers en Allemagne pour son usage domestique personnel.",
      ],
    },
    { heading: 'III- Les principaux régimes douaniers du SYDAM WORLD' },
    { paragraphs: ['Présentation des nouveaux régimes douaniers les plus utilisés :'] },
    {
      heading: "3.1 Les régimes douaniers d'exportation (EX)",
      table: {
        headers: ['Code', 'Libellé'],
        rows: [
          ['EX 1000', 'Exportation définitive'],
          ['EX 2100', 'Exportation temporaire pour ouvraison'],
          ['EX 2151', 'Exportation temporaire pour ouvraison en suite de perfectionnement – système suspension'],
          ['EX 2200', "Exportation temporaire avec retour en l'état"],
          ['EX 3151', 'Réexportation en suite de perfectionnement – système suspension'],
          ['EX 3152', 'Réexportation pour ouvraison en suite perfectionnement – système rembours'],
          ['EX 3153', "Réexportation en suite d'admission temporaire en suspension totale des droits et taxes"],
          ['EX 3154', "Réexportation en suite d'admission temporaire avec paiement partiel des droits et taxes"],
          ['EX 3155', "Réexportation en suite d'admission temporaire en suspension totale des droits et taxes (TD avec spécification)"],
          ['EX 3156', "Réexportation en suite d'admission temporaire avec paiement partiel des droits et taxes (TD avec spécification)"],
          ['EX 3171', "Réexportation en suite d'entrepôt"],
          ['EX 9100', 'Avitaillement'],
          ['EX 9171', "Avitaillement en suite d'entrepôt"],
          ['EX 9200', 'Comptoir de vente'],
          ['EX 9271', "Comptoir de vente en suite d'entrepôt"],
        ],
      },
    },
    {
      heading: "3.2 Les régimes douaniers d'importation (IM)",
      table: {
        headers: ['Code', 'Libellé'],
        rows: [
          ['IM 4000', 'Mise à la consommation directe'],
          ['IM 4051', 'Mise à la consommation en suite de perfectionnement – système suspension'],
          ['IM 4053', "Mise à la consommation en suite d'admission temporaire en suspension totale des droits et taxes"],
          ['IM 4054', "Mise à la consommation en suite d'admission temporaire sous le régime de la taxation partielle"],
          ['IM 4055', "Mise à la consommation en suite d'admission temporaire en suspension totale des droits et taxes (TD avec spécification)"],
          ['IM 4056', "Mise à la consommation en suite d'admission temporaire sous le régime de la taxation partielle (TD avec spécification)"],
          ['IM 4071', 'Mise à la consommation en suite entrepôt'],
          ['IM 4092', 'Mise à la consommation en suite de comptoir de vente'],
          ['IM 4800', 'Permis à enlever avec régularisation'],
          ['IM 4900', 'Permis à enlever sans régularisation'],
          ['IM 5100', 'Perfectionnement – système suspension'],
          ['IM 5171', "Perfectionnement – système suspension en sortie d'entrepôt"],
          ['IM 5200', 'Perfectionnement – système rembours'],
          ['IM 5271', "Perfectionnement – système rembours en sortie d'entrepôt"],
          ['IM 5300', 'Admission temporaire en suspension totale des droits et taxes'],
          ['IM 5351', 'Admission temporaire en suspension totale en suite de perfectionnement – système suspension'],
          ['IM 5371', "Admission temporaire en suspension totale en sortie d'entrepôt"],
          ['IM 5400', 'Admission temporaire avec paiement partiel des droits et taxes'],
          ['IM 5451', 'Admission temporaire avec paiement partiel des droits et taxes en suite de perfectionnement – système suspension'],
          ['IM 5471', "Admission temporaire avec paiement partiel des droits et taxes en sortie d'entrepôt"],
          ['IM 6110', 'Régime des retours'],
          ['IM 6121', 'Réimportation en suite exportation temporaire pour ouvraison'],
          ['IM 6122', "Réimportation en suite d'exportation temporaire avec retour en l'état"],
          ['IM 6123', "Réimportation en suite d'exportation temporaire avec retour en l'état (TD avec spécification)"],
          ['IM 7000', 'Mise en entrepôt'],
          ['IM 7121', "Mise en entrepôt en suite d'exportation temporaire pour ouvraison"],
          ['IM 7151', 'Mise en entrepôt en suite de perfectionnement – système suspension'],
          ['IM 7152', 'Mise en entrepôt en suite de perfectionnement – système rembours'],
          ['IM 7153', "Mise en entrepôt en suite d'admission temporaire en suspension totale des droits et taxes"],
          ['IM 7154', "Mise en entrepôt en suite d'admission temporaire sous le régime de la taxation partielle"],
          ['IM 7155', "Mise en entrepôt en suite d'admission temporaire en suspension totale des droits et taxes (TD avec spécification)"],
          ['IM 7156', "Mise en entrepôt en suite d'admission temporaire sous le régime de la taxation partielle (TD avec spécification)"],
          ['IM 7171', "Changement d'entrepôt ou changement de propriétaire en entrepôt"],
          ['IM 8000', 'Procédure de régularisation (réservé au service des douanes)'],
        ],
      },
    },
    {
      heading: 'a) La catégorisation',
      paragraphs: ['Les produits sont classés en cinq catégories :'],
      list: [
        'Catégorie 0 : les biens sociaux essentiels',
        "Catégorie 1 : les biens de première nécessité, les matières premières de base, les biens d'équipement",
        'Catégorie 2 : les intrants et les produits intermédiaires',
        'Catégorie 3 : les biens de consommation finale.',
        'Catégorie 4 : les produits stratégiques ou spécifiques pour le développement économique',
      ],
    },
    {
      paragraphs: ['Les taux des droits et taxes inscrits au TEC se présentent suivant le tableau des catégories de produits ci-après :'],
      table: {
        headers: ['Catégorie', 'Marchandises concernées', 'DD', 'RSTA', 'PCS', 'PUA', 'PCC'],
        rows: [
          [
            '0',
            "Les biens sociaux essentiels relevant d'une liste limitative. Exemple : les livres scolaires, les journaux, les préservatifs, les médicaments, les gants pour la chirurgie, les antibiotiques, les moustiquaires imprégnées, les appareils de rééducation (prothèses, simulateurs cardiaques, chaises roulantes pour handicapés)…",
            '0%',
            '1%',
            '0,8%',
            '0,2%',
            '0,5%',
          ],
          ['1', "Les biens de première nécessité, les matières premières de base, les biens d'équipement, les intrants spécifiques.", '5%', '1%', '0,8%', '0,2%', '0,5%'],
          ['2', 'Les intrants et produits intermédiaires', '10%', '1%', '0,8%', '0,2%', '0,5%'],
          ['3', 'Les biens de consommation finale et tous les autres produits non repris ailleurs', '20%', '1%', '0,8%', '0,2%', '0,5%'],
          ['4', 'Les produits stratégiques ou spécifiques pour le développement économique', '35%', '1%', '0,8%', '0,2%', '0,5%'],
        ],
      },
    },
    {
      heading: 'a) Les taxes permanentes',
      list: [
        'Droit de Douane (DD), son taux varie (0% ; 5% ; 10% ; 20% et 35%)',
        'Redevance Statistique (RSTA), son taux est de 1%',
        'Taxe sur la Valeur Ajoutée (TVA), son taux est de 18%',
        'Prélèvement Communautaire de Solidarité (PCS) son taux est de 0,8%',
        'Prélèvement Union Africaine (PUA) son taux est de 0,2%',
        'Prélèvement Communautaire CEDEAO (PCC) son taux est de 0,5%',
        'Taxe Supplémentaire Douane (TSD), son montant est de 20.000 FCFA.',
      ],
    },
    {
      heading: 'b) Les taxes non permanentes',
      paragraphs: ["A ces taxes permanentes, on peut ajouter suivant l'exercice des taxes temporaires. En Côte d'Ivoire, les taxes sont les suivantes :"],
      list: [
        "La TAI (Taxe d'Ajustement à l'Importation), son taux varie de 10 à 20 %.",
        'Et la TCP (Taxe Complémentaire de Protection), son taux est de 10%.',
        "Les accises : ce sont des taxes additionnelles qui sont imposées aux produits qui ne sont pas considérés comme de première nécessité. Exemple : Tabac, Taxe Spéciale sur le Tabac (TST) ; Boisson, Taxe Spéciale sur les Boissons (TSB) ; Viande, Prélèvement Sur la Viande (PSV)",
      ],
    },
    {
      paragraphs: [
        "REMARQUE : La TAI (Taxe d'Ajustement à l'Importation) remplace désormais la TCI (Taxe Conjoncturelle à l'Importation) et la TCP (Taxe Complémentaire de Protection) remplace la TDI (Taxe Dégressive à l'Importation). La TAI est valable pour 5 ans et la TCP pour 2 ans.",
      ],
    },
  ],
};
