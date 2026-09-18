export interface TciSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface TciChapter {
  id: string;
  kind: 'chapitre' | 'cas';
  level: 1 | 2;
  number: number;
  title: string;
  intro: string;
  sections: TciSection[];
}

export const TCI_COURSE_TITLE = 'Technique du Commerce International';
export const TCI_COURSE_SUBTITLE = "BTS Gestion Commerciale — 1ère & 2ème Année";
export const TCI_COURSE_SUBTITLE_1 = "BTS Gestion Commerciale — 1ère Année";
export const TCI_COURSE_SUBTITLE_2 = "BTS Gestion Commerciale — 2ème Année";

export const tciChapters: TciChapter[] = [
  {
    id: 'ch1',
    kind: 'chapitre',
    level: 1,
    number: 1,
    title: "L'environnement du commerce international",
    intro:
      "La révolution industrielle du XIXe siècle a favorisé l'implantation d'industries et le développement des transports en Europe, provoquant surproduction et recherche de nouveaux débouchés à l'étranger — l'origine du commerce international moderne.",
    sections: [
      {
        heading: 'Définition',
        paragraphs: [
          "Le commerce international est un ou plusieurs échanges entre deux ou plusieurs pays à travers les importations et les exportations. Il est aussi appelé échange international : un ensemble d'opérations impliquant le mouvement des produits.",
        ],
      },
      {
        heading: "Importance pour l'économie d'un pays",
        paragraphs: [
          "Environ plus de 20 % du produit mondial brut est destiné à l'exportation. Aucun pays ne peut vivre en autarcie et espérer une puissance économique et militaire.",
        ],
        list: [
          'Maintenir la coopération entre nations',
          "Faire entrer des devises pour développer transports et infrastructures",
          'Bénéficier de la croissance économique mondiale',
          'Utiliser les capacités de production',
          'Gagner en notoriété et mieux connaître la concurrence',
        ],
      },
      {
        heading: 'Organisations à vocation commerciale',
        list: [
          "OMC — favorise le commerce mondial (nation la plus favorisée, traitement national)",
          'CNUCED — avantages aux pays en développement (créée en 1964)',
          "CCI — à l'origine des Incoterms et du CREDOC, siège à Paris",
        ],
      },
      {
        heading: 'Organisations à vocation financière',
        list: [
          'FMI — combat les désordres monétaires, garant du système monétaire international',
          'Banque Mondiale — BIRD, SFI, AID, AMGI, CIRDI : aide au développement des PVD',
        ],
      },
      {
        heading: 'La chaîne des intervenants',
        paragraphs: [
          "L'exportateur et l'importateur sont les acteurs principaux. Autour d'eux gravitent des acteurs intermédiaires :",
        ],
        list: [
          'Compagnies de transport (pré-acheminement, transport principal, post-acheminement)',
          "Compagnies d'assurance",
          'Administrations (licences, agréments, certificats d\'origine)',
          'Transitaire (CAD) — seul habilité à déclarer en détail les marchandises',
          'Douane, manutentionnaires, consignataire, banques',
          'Sociétés de contrôle — BIVAC, COTECNA, INTERTEK, SGS',
        ],
      },
    ],
  },
  {
    id: 'ch2',
    kind: 'chapitre',
    level: 1,
    number: 2,
    title: 'Les Incoterms 2020',
    intro:
      "La CCI a élaboré dès 1936 une série de règles standardisées — les Incoterms — permettant au vendeur et à l'acheteur de situer avec exactitude leurs obligations. La version 2020 est en vigueur depuis le 1er janvier 2020.",
    sections: [
      {
        heading: 'Définition',
        paragraphs: [
          'Un Incoterm est un code de 3 lettres, toujours suivi d\'un lieu précis, qui répartit entre vendeur et acheteur les coûts, les risques et les documents liés à l\'acheminement de la marchandise.',
        ],
      },
      {
        heading: 'Les 11 Incoterms 2020',
        list: [
          'EXW — À l\'usine',
          'FCA — Franco Transporteur',
          'FAS — Franco le long du navire',
          'FOB — Chargé à bord',
          'CFR — Coût et Fret',
          'CPT — Port Payé jusqu\'à',
          'CIF — Coût, Assurance et Fret',
          'CIP — Port et Assurance Payés',
          'DPU — Déchargé au lieu de destination',
          'DAP — Rendu au lieu de destination',
          'DDP — Rendu Droits Acquittés',
        ],
      },
      {
        heading: 'Le but des Incoterms',
        list: [
          'Répartition des coûts entre vendeur et acheteur',
          'Lieu de transfert des risques (avaries, pertes, vols)',
          'Fourniture des documents (facture, connaissement, certificat d\'assurance)',
        ],
      },
      {
        heading: 'Point clé : coût et risque ne se transfèrent pas toujours au même endroit',
        paragraphs: [
          'Pour les Incoterms « C » (CFR, CIF, CPT, CIP), le vendeur paie le transport principal — parfois l\'assurance — bien au-delà du point où le risque a déjà basculé sur l\'acheteur. C\'est la nuance la plus importante à retenir de ce chapitre.',
        ],
      },
      {
        heading: 'Classification',
        list: [
          'Vente au départ (risque acheteur) — EXW, FCA, FAS, FOB, CFR, CIF, CPT, CIP',
          'Vente à l\'arrivée (risque vendeur) — DPU, DAP, DDP',
          'Exclusivement maritimes — FAS, FOB, CFR, CIF',
          'Multimodaux — EXW, FCA, CPT, CIP, DPU, DAP, DDP',
        ],
      },
      {
        heading: 'Formules de calcul essentielles',
        list: [
          'Prix de vente : PV = PA + Marge commerciale',
          'Taux de marge (% du prix d\'achat) : PV = PA × (1 + taux de marge)',
          'Taux de marque (% du prix de vente) : PV = PA ÷ (1 − taux de marque)',
          'Fret de base : Tarif × nombre d\'UP (tonne ou m³, au plus élevé des deux)',
          'Prime d\'assurance : Taux × Valeur d\'assurance + 2 500 FCFA',
        ],
      },
    ],
  },
  {
    id: 'ch3',
    kind: 'chapitre',
    level: 1,
    number: 3,
    title: "Le conditionnement et l'emballage",
    intro:
      "Le conditionnement et l'emballage occupent une place déterminante dans l'acheminement des marchandises : mal adaptés, ils sont à l'origine de la majeure partie des avaries.",
    sections: [
      {
        heading: 'Le conditionnement',
        paragraphs: [
          "L'enveloppe matérielle en contact direct avec le produit — l'habillage qui le contient pour la vente.",
        ],
        list: ['Protection', 'Esthétique', 'Information', 'Distinction'],
      },
      {
        heading: "L'emballage",
        paragraphs: [
          'Le contenant qui assure temporairement la manutention, le transport et le stockage du produit.',
        ],
        list: ['Fonction physico-chimique', 'Fonction mécanique', 'Fonction anti-vol'],
      },
      {
        heading: 'Critères de choix',
        list: [
          'Nature de la marchandise',
          'Moyen de transport',
          'Nombre de manutentions',
          'Poids et forme du produit',
          'Environnement climatique et durée du voyage',
          'Coût et réglementations administratives',
        ],
      },
      {
        heading: 'Emballage et Incoterms',
        paragraphs: [
          "L'emballage est toujours à la charge et sous la seule responsabilité du vendeur, à charge pour l'acheteur de préciser ses exigences à la commande.",
        ],
      },
      {
        heading: 'Les conteneurs',
        list: [
          '20 pieds — 32 m³, 18 tonnes, 10 palettes',
          '40 pieds — 64 m³, 27 tonnes, 20 palettes',
        ],
      },
    ],
  },
  {
    id: 'ch4',
    kind: 'chapitre',
    level: 1,
    number: 4,
    title: 'La réglementation du commerce extérieur de la Côte d\'Ivoire',
    intro:
      "La Côte d'Ivoire a opté pour le régime de la liberté comme principe directeur de son commerce extérieur — une liberté encadrée pour identifier les opérateurs, protéger l'industrie nationale et préserver le droit de regard de l'État.",
    sections: [
      {
        heading: 'Les régimes à l\'importation',
        list: [
          'Régime de la liberté — FDI dès 500 000 FCFA de FOB',
          'Régime d\'agrément — animaux vivants, produits pharmaceutiques, armes...',
          'Régime de la limitation — textiles (pagnes), produits pétroliers, licence d\'importation exigée dès 25 000 FCFA',
        ],
      },
      {
        heading: 'Les régimes à l\'exportation',
        list: [
          'Régime de la liberté — sauf produits du décret 93-331 (or, diamant, masques...)',
          'Régime de l\'autorisation préalable — minerais, cacao, café, ananas, bois',
          'Régime de la prohibition — ivoire brut, essences de bois protégées',
        ],
      },
      {
        heading: 'Le programme de Vérification de Conformité (VOC)',
        paragraphs: [
          'Depuis le décret n° 2017-567, quatre prestataires mandatés : BIVAC BV, COTECNA, INTERTEK, SGS. Le Certificat de Conformité (COC) est valable 3 mois, exigible en douane depuis le 16 juillet 2018.',
        ],
        list: [
          'Route A (0,45 % FOB) — fournisseur irrégulier / produit sensible : inspection systématique',
          'Route B (0,40 % FOB) — fournisseur régulier, produit enregistré : contrôle aléatoire',
          'Route C (0,30 % FOB) — fabricant sous licence : vérification documentaire uniquement',
        ],
      },
    ],
  },
  {
    id: 'ch5',
    kind: 'chapitre',
    level: 1,
    number: 5,
    title: 'La réglementation du FINEX',
    intro:
      "Créé en 1962, le FINEX (Financement des Exportations) est une sous-direction de la Direction du Trésor. Aucune exportation de capitaux n'est possible sans autorisation du ministère de l'Économie et des Finances.",
    sections: [
      {
        heading: 'Les missions du FINEX',
        list: [
          'Contrôle des opérations de change à l\'import et à l\'export',
          'Importation de l\'or et rapatriement des créances',
          'Paiement des dettes nées de l\'importation',
          'Établissement de la balance commerciale avec la BCEAO',
        ],
      },
      {
        heading: 'La domiciliation',
        paragraphs: [
          "La domiciliation confie à une banque commerciale le transfert de fonds (rapatriement à l'export, paiement à l'import) et la cession de devises.",
        ],
        list: [
          "Export — non obligatoire sous 500 000 FCFA, échéance de paiement : 180 jours maximum",
          "Import — non obligatoire sous 1 000 000 FCFA",
        ],
      },
    ],
  },
  {
    id: 'ch6',
    kind: 'chapitre',
    level: 1,
    number: 6,
    title: "La douane en Côte d'Ivoire",
    intro:
      "La douane détermine l'assiette des droits et taxes, procède à leur liquidation et à leur collecte au profit de l'État — quatre missions : fiscale, protection, économique et statistique.",
    sections: [
      {
        heading: 'Les circuits de la déclaration',
        list: [
          'Rouge — visite obligatoire (produits sensibles à la fraude)',
          'Vert — bon à enlever automatique',
          'Blanc — industriels sélectionnés, liquidation instantanée',
          'Orange — visite facultative',
        ],
      },
      {
        heading: 'Paiement des droits et taxes',
        paragraphs: [
          'Paiement au comptant (espèces, chèque, obligation cautionnée) ou à crédit via une soumission cautionnée annuelle (20 000 000 FCFA minimum), avec une remise de 2 ‰.',
        ],
      },
      {
        heading: 'Taxes permanentes',
        list: [
          'Droit de Douane (DD) — 0 / 5 / 10 / 20 / 35 % selon la catégorie',
          'RSTA — 1 %',
          'TVA — 18 %',
          'PCS — 0,8 % · PUA — 0,2 % · PCC — 0,5 %',
          'TSD — 20 000 FCFA forfaitaire',
        ],
      },
    ],
  },
  {
    id: 'ch7',
    kind: 'chapitre',
    level: 1,
    number: 7,
    title: "Le transit en Côte d'Ivoire",
    intro:
      "Depuis le 3 septembre 1976, seuls les Commissionnaires Agréés en Douane sont habilités à déclarer en détail les marchandises.",
    sections: [
      {
        heading: 'Le transitaire commissionnaire de transport',
        paragraphs: [
          "Lié à son commettant par un contrat de commission, il choisit ses sous-traitants, négocie et paie le fret. Il répond d'une obligation de résultat : sa responsabilité est engagée dès que le résultat n'est pas atteint.",
        ],
      },
      {
        heading: 'Le transitaire mandataire',
        paragraphs: [
          "Il agit au nom et pour le compte de son mandant, qui négocie lui-même transport et assurance. Il répond d'une obligation de moyens : au client de prouver la faute.",
        ],
      },
      {
        heading: "Conditions d'agrément d'une société de transit",
        list: [
          'Capital libéré de 25 000 000 FCFA certifié',
          'Cautionnement de 30 000 000 FCFA auprès de la BNI',
          'Registre de commerce et compte contribuable',
        ],
      },
      {
        heading: "Critères de choix d'un transitaire",
        list: [
          'Coût des prestations et conditions de règlement',
          "Niveau du crédit d'enlèvement",
          'Compétence du personnel et image de marque',
          'Équipement logistique et magasin portuaire',
          'Réseau de correspondants à l\'international',
        ],
      },
    ],
  },
  {
    id: 'cas1',
    kind: 'cas',
    level: 1,
    number: 8,
    title: 'Cas CIPA',
    intro:
      'La Compagnie Ivoirienne de Produits Alimentaires importe 240 cartons de conserves depuis Casablanca (36 USD/carton, marge 35 %).',
    sections: [
      {
        heading: 'Travail à faire',
        list: [
          'Chiffrer les prix EXW, FAS, FOB, CFR, CIF, DPU, DAP et DDP en précisant les villes',
          "Expliquer « pays d'origine » et « pays de provenance »",
          'En FOB, qui supporte le fret, l\'assurance et les risques du transport principal ?',
        ],
      },
    ],
  },
  {
    id: 'cas2',
    kind: 'cas',
    level: 1,
    number: 9,
    title: 'Cas Rehoboth',
    intro:
      'Rehoboth SA importe 200 costumes italiens depuis Naples (60 € pièce, marge 10 %).',
    sections: [
      {
        heading: 'Travail à faire',
        list: [
          'Chiffrer les prix EXW, FAS, FOB, CFR, CIF, DPU, DAP et DDP',
          "Expliquer « Incoterms de vente au départ » et « à l'arrivée »",
          "Conditions d'agrément d'une société de transit en Côte d'Ivoire",
        ],
      },
    ],
  },
  {
    id: 'cas3',
    kind: 'cas',
    level: 1,
    number: 10,
    title: 'Cas Gloire Informatique',
    intro:
      "Esther importe du matériel informatique depuis Ningbo Zhoushan (Chine) via son transitaire SDV-SAGA : ordinateurs, imprimantes, bureaux, photocopieuses, climatiseurs, télévisions, réfrigérateurs.",
    sections: [
      {
        heading: 'Travail à faire',
        list: [
          'Chiffrer les prix EXW, FAS, FOB, CFR, CIF, DPU, DAP et DDP',
          'Déterminer le coût de revient des marchandises importées',
          "Quelle est la qualité juridique de SDV-SAGA ? Justifier",
        ],
      },
    ],
  },
  {
    id: 'cas4',
    kind: 'cas',
    level: 1,
    number: 11,
    title: 'Cas SIT',
    intro:
      'La Société Ivoirienne de Textiles commande 1 100 pagnes à son fournisseur hollandais M. Zeit, à Amsterdam, avant la fête de Pâques.',
    sections: [
      {
        heading: 'Travail à faire',
        list: [
          'Chiffrer les prix EXW, FAS, FOB, CFR, CIF, DPU, DAP, DDP et le coût de revient',
          'Cette opération est-elle soumise à domiciliation ?',
          "70 % de la commande vendue en Côte d'Ivoire, 30 % exportée au Mali — sous quels régimes ?",
        ],
      },
    ],
  },
  {
    id: 'cas5',
    kind: 'cas',
    level: 1,
    number: 12,
    title: 'Cas Mardochée et Compagnie',
    intro:
      "Les établissements Mardochée (Daoukro, région d'Iffou) commandent du lait à un fournisseur hollandais d'Amsterdam.",
    sections: [
      {
        heading: 'Travail à faire',
        list: [
          'Élaborer la cotation complète : EXW, FAS, FOB, CFR, CIF, DPU, DAP, DDP',
          'Déterminer le prix d\'achat total et la marge commerciale',
          "Sous quel régime placer une marchandise inspectée par la SGS et vendue immédiatement ?",
          'Pourquoi le commissionnaire a-t-il une obligation de résultat, et le mandataire une obligation de moyens ?',
        ],
      },
    ],
  },
  {
    id: 'ch8',
    kind: 'chapitre',
    level: 2,
    number: 13,
    title: "Les Incoterms 2020 (2e Année)",
    intro:
      "Les Incoterms sont des règles standardisées, élaborées par la Chambre de Commerce Internationale (CCI, Paris), qui situent avec exactitude les obligations respectives du vendeur-exportateur et de l'acheteur-importateur dans une vente internationale. Publiés en 1936, révisés tous les 10 ans depuis 1990, les Incoterms 2020 sont en vigueur depuis le 1er janvier 2020.",
    sections: [
      {
        heading: 'Importance des Incoterms',
        list: [
          "Uniformité — universellement reconnus, bien que facultatifs",
          "Précision — chacun fixe exactement qui supporte quels frais et risques",
          "Concision — un seul sigle de 3 lettres résume l'ensemble des obligations",
          "Facultatif — le vendeur et l'acheteur ne sont jamais obligés de les utiliser",
        ],
      },
      {
        heading: "Les 3 étapes de l'acheminement",
        list: [
          "Transport d'approche (pré-acheminement) — de l'usine du vendeur au port/aéroport/gare de départ",
          "Transport principal — entre le pays du vendeur et celui de l'acheteur",
          "Post-acheminement — du port/aéroport/gare d'arrivée jusqu'au magasin de l'acheteur",
        ],
      },
      {
        heading: 'Classification des 11 Incoterms 2020',
        paragraphs: [
          "Selon le type de vente : vente au départ (risques du transport principal à la charge de l'acheteur — EXW, FAS, FOB, FCA, CPT, CFR, CIF, CIP) ou vente à l'arrivée (risques à la charge du vendeur — DPU, DAP, DDP).",
          "Selon le mode de transport : incoterms maritimes et fluviaux (FAS, FOB, CFR, CIF) réservés au vrac/conventionnel, et incoterms multimodaux (EX-WORK, FCA, CPT, CIP, DPU, DAP, DDP) adaptés aux cargaisons conteneurisées.",
        ],
      },
      {
        heading: 'Obligations essentielles par Incoterm',
        list: [
          "EXW (Ex Works) — obligation minimale du vendeur : marchandise mise à disposition dans son usine",
          "FCA (Free Carrier) — le vendeur dédouane à l'export et livre au transporteur désigné par l'acheteur, au lieu convenu",
          "FAS (Free Alongside Ship) — livraison le long du navire, au port d'embarquement convenu",
          "FOB (Free on Board) — le vendeur livre à bord du navire ; l'acheteur choisit le navire et paie le fret",
          "CFR (Cost and Freight) — le vendeur paie le fret jusqu'au port de destination, mais le risque passe à bord",
          "CIF (Cost Insurance and Freight) — comme le CFR, plus une assurance maritime minimale (garantie FAP Sauf)",
          "CPT (Carriage Paid To) — le vendeur paie le transport principal ; le risque passe dès la remise au transporteur",
          "CIP (Carriage and Insurance Paid To) — comme le CPT, avec une assurance tous risques à 110 %",
          "DPU (Delivered At Place Unloaded) — seul Incoterm où le vendeur décharge la marchandise à destination",
          "DAP (Delivered At Place) — livraison au lieu convenu, non déchargée",
          "DDP (Delivered Duty Paid) — obligation maximale du vendeur, opposé exact de l'EXW",
        ],
      },
      {
        heading: 'Nouveautés des Incoterms 2020',
        list: [
          "Le DAT (2010) est renommé DPU : Delivered at Place Unloaded",
          "Option FCA avec connaissement maritime « à bord » pour les paiements sécurisés par banque",
          "Différenciation de la couverture d'assurance : Tous Risques pour le CIP, couverture minimale pour le CIF",
          "Précisions sur le transit export/import et sur la sûreté douanière",
          "Les Incoterms s'appliquent aussi quand le transport est organisé avec des moyens propres (EXW, FCA, DPU, DAP, DDP)",
        ],
      },
    ],
  },
  {
    id: 'ch9',
    kind: 'chapitre',
    level: 2,
    number: 14,
    title: "L'assurance transport (2e Année)",
    intro:
      "L'assurance transport, obligatoire pour tout opérateur de commerce international depuis 1929, consiste à faire supporter par une compagnie d'assurance, moyennant une prime, les dommages et avaries subis par les marchandises durant leur acheminement.",
    sections: [
      {
        heading: 'Le contrat et ses parties',
        paragraphs: [
          "Le contrat d'assurance transport (« police d'assurance ») doit être écrit et consensuel. L'assuré doit fournir les renseignements sur la marchandise, payer la prime et déclarer tout aggravement du risque ; l'assureur doit délivrer un certificat d'assurance et indemniser dans les délais.",
        ],
        list: [
          "Co-assurance — le risque est réparti entre plusieurs assureurs dont le principal (apériteur)",
          "Réassurance — l'assureur se fait assurer à son tour pour tout ou partie du risque",
          "Agents et courtiers d'assurance, commissaires d'avaries, expert maritime, banques",
        ],
      },
      {
        heading: 'Risques couverts et non couverts',
        list: [
          "Couverts — perte totale, avaries particulières, avaries communes (avaries dommages / avaries frais), risques majeurs (guerre, émeutes, pillages)",
          "Non couverts — faute de l'assuré, défaut d'emballage, retard de livraison, vice propre de la marchandise, freinte de route, franchise (déduite ou atteinte)",
        ],
      },
      {
        heading: 'Les garanties',
        list: [
          "FAP Sauf — couvre avaries communes et particulières listées après le « sauf », mais ni le vol ni la perte de colis",
          "Tous risques — couvre en plus le vol total ou partiel et les pertes partielles",
          "Guerre et assimilés — dommages causés par l'homme (guerre, attentats, pillages, disparition du navire)",
        ],
      },
      {
        heading: "Types de police d'assurance",
        list: [
          "Police au voyage — une seule expédition ponctuelle",
          "Police à alimenter ou à éteindre — grand contrat à expéditions échelonnées, avis d'aliment par envoi",
          "Police d'abonnement (flottante) — toutes les expéditions du chargeur pendant un an, taux unique",
          "Police tiers-chargeur — souscrite par le transitaire ou transporteur pour le compte de ses clients (PME)",
        ],
      },
      {
        heading: 'Valeur, prime et indemnisation',
        paragraphs: [
          "Valeur d'assurance (VA) = CIF + 10 % ou CFR + 20 %. Prime d'assurance (PA) = Taux d'assurance × VA + 2 500 FCFA.",
          "En avarie particulière : Indemnité provisoire = Taux d'avarie × VA, puis Indemnité = Indemnité provisoire + frais annexes + honoraires d'expert (moins la franchise le cas échéant).",
          "En avarie commune : le Taux d'Avarie Commune (TAC) = Masses actives ÷ Masses passives × 100 ; la contribution de chaque partie = TAC × sa valeur assurée.",
        ],
      },
    ],
  },
  {
    id: 'ch10',
    kind: 'chapitre',
    level: 2,
    number: 15,
    title: 'Le transport maritime (2e Année)',
    intro:
      "Le transport maritime (« shipping ») est le mode le plus utilisé pour les livraisons intercontinentales en grande quantité. Il est encadré par deux grandes conventions internationales : Bruxelles (1924) et Hambourg (1978, plus contraignante pour le transporteur).",
    sections: [
      {
        heading: 'Organisation du transport maritime',
        list: [
          "Consortium — union de compagnies mettant en commun navires, compétences et recherches",
          "Conférences maritimes (Ring) — accords entre compagnies desservant les mêmes lignes à conditions uniformisées, pour bannir la concurrence entre elles",
          "Outsiders — armement hors conférence, travaillant au tramping, sans lignes régulières ni tarif fixe",
        ],
      },
      {
        heading: 'Le connaissement (B/L)',
        paragraphs: [
          "Le Bill of Lading est le document le plus utilisé du transport maritime : reçu de la marchandise, titre de propriété négociable et preuve écrite du contrat de transport. Émis en 4 exemplaires originaux dans les 24h suivant le chargement.",
        ],
        list: [
          "Nominatif (straight) — non négociable, réservé aux expéditions extra-commerciales",
          "À ordre (to order) — transmissible par endossement, fréquent en paiement CREDOC",
          "Au porteur (blank-endorsed) — livrable à quiconque le détient",
          "Clean B/L — sans réserve ; Dirty/unclean B/L — avec réserves du transporteur",
        ],
      },
      {
        heading: "L'affrètement (charte-partie)",
        paragraphs: [
          "Couvre la location totale ou partielle d'un navire (expéditions > 300 t ou marchandises en vrac). Trois formes : au voyage, à temps (durée déterminée), coque nue (bareboat-charter).",
        ],
        list: [
          "Connaissement — destination précise, coût élevé, une partie du navire, plusieurs chargeurs",
          "Charte-partie — plusieurs destinations possibles, coût moindre, tout le navire, un seul chargeur",
        ],
      },
      {
        heading: 'Types d\'expéditions en conteneur (TC)',
        list: [
          "FCL/FCL — conteneur complet au départ et à l'arrivée, de porte à porte",
          "FCL/LCL — conteneur plein au départ, dégroupage à l'arrivée",
          "LCL/LCL — groupage au départ, dégroupage à l'arrivée, de quai à quai",
          "LCL/FCL — groupage au départ pour un seul client étranger",
        ],
      },
      {
        heading: 'Les liner-terms',
        paragraphs: [
          "Règles de répartition des frais de manutention entre chargeur et transporteur, à partir de trois choix au départ (Quai, Sous-Palan, Bord) et trois choix à l'arrivée (Bord, Sous-Palan, Quai) — soit 9 combinaisons : B/B (FIO), Q/B, Q/SP, B/SP, B/Q, SP/B, SP/SP, SP/Q, Q/Q (pier to pier).",
        ],
      },
    ],
  },
  {
    id: 'ch11',
    kind: 'chapitre',
    level: 2,
    number: 16,
    title: 'Le transport aérien (2e Année)',
    intro:
      "Longtemps considéré comme un moyen de transport de luxe, le transport aérien a connu un grand essor avec le développement des échanges internationaux. Le contrat de transport aérien est matérialisé par la Lettre de Transport Aérien (LTA ou Air Way Bill).",
    sections: [
      {
        heading: 'Responsabilité et exonération',
        paragraphs: [
          "La convention de Varsovie (1929) présume la responsabilité du transporteur aérien depuis la prise en charge jusqu'à la remise au destinataire.",
        ],
        list: [
          "Exonération si le transporteur prouve avoir pris toutes les mesures nécessaires (force majeure)",
          "Exonération en cas de faute de la partie lésée (ex. défaut d'emballage constaté au départ)",
        ],
      },
      {
        heading: 'La convention de Chicago et les libertés de l\'air',
        list: [
          "Liberté 1 — survoler un pays étranger sans atterrir",
          "Liberté 2 — escale technique (ravitaillement), sans embarquer ni débarquer",
          "Liberté 3 — débarquer fret/passagers en provenance du pays d'immatriculation",
          "Liberté 4 — embarquer fret/passagers à destination du pays d'immatriculation",
          "Liberté 5 — embarquer dans un pays B à destination d'un pays tiers C",
          "Liberté 6 — combinaison des libertés 3 et 5, pour détourner du trafic",
        ],
      },
      {
        heading: 'IATA, ATAF et la LTA',
        paragraphs: [
          "L'IATA (créée en 1945) définit les tarifs communs (TACT) et les normes de sécurité ; l'ATAF concerne les relations France – anciennes colonies d'Afrique. La LTA est établie en 3 exemplaires (transporteur, expéditeur, chargeur-importateur) et n'est pas négociable, sauf en CREDOC.",
        ],
        list: [
          "LTA compagnie — coordonnées pré-imprimées du transporteur émetteur",
          "LTA mère et domestique — groupage aérien : une Master AWB + une House AWB par expéditeur",
          "LTA neutre — sans coordonnées du transporteur",
        ],
      },
      {
        heading: 'Tarification du fret aérien',
        list: [
          "Méthode du poids-pivot (ULD) — un forfait pour un poids donné, puis taxation au kg au-delà",
          "Rapport poids-volume — 1 tonne = 6 m³ ; on retient le poids taxable le plus élevé entre poids brut et équivalent volume",
          "Règle du payant-pour — en faveur du chargeur : on facture la tranche de poids immédiatement supérieure, souvent plus avantageuse",
        ],
      },
    ],
  },
  {
    id: 'ch12',
    kind: 'chapitre',
    level: 2,
    number: 17,
    title: 'Les paiements internationaux (2e Année)',
    intro:
      "Le financement des transactions internationales mobilise des instruments de paiement (chèque, effets de commerce, virement) mis en œuvre par des techniques de paiement (encaissement simple, remise documentaire, crédit documentaire, contre remboursement).",
    sections: [
      {
        heading: 'Les instruments de paiement',
        list: [
          "Le chèque — d'entreprise ou de banque ; non barré, barré ou certifié",
          "La lettre de change (traite) — émise par l'exportateur, négociable et transmissible par endossement",
          "Le billet à ordre — émis par l'importateur, rarement utilisé en commerce international",
          "Le virement international — courrier, TELEX ou SWIFT (le plus rapide et le plus sûr)",
          "La carte bancaire internationale — paiement irrévocable par code secret",
        ],
      },
      {
        heading: 'La remise documentaire (REMDOC)',
        paragraphs: [
          "Une banque reçoit mandat de l'exportateur d'encaisser une somme due par l'importateur contre remise de documents. Elle fait intervenir 4 parties : le donneur d'ordre, la banque remettante, l'importateur et la banque présentatrice.",
        ],
        list: [
          "Remise D/P (document contre paiement) — paiement comptant immédiat",
          "Remise D/A (document contre acceptation) — documents remis contre acceptation d'une traite payable à échéance",
        ],
      },
      {
        heading: 'Le crédit documentaire (CREDOC)',
        paragraphs: [
          "Promesse de la banque de l'importateur de régler l'exportateur sur présentation de documents conformes à l'accréditif. Intervenants : donneur d'ordre, banque émettrice, bénéficiaire, banque notificatrice/confirmatrice.",
        ],
        list: [
          "CREDOC révocable — annulable à tout moment par l'acheteur",
          "CREDOC irrévocable — engagement ferme de la banque émettrice",
          "CREDOC irrévocable et confirmé — engagement des deux banques, supprime le risque de transfert et de change",
          "Formes spéciales — revolving (renouvelable), red clause (avance avant expédition), green clause (avance contre marchandises entreposées), transférable, adossé (back to back)",
        ],
      },
      {
        heading: 'Autres techniques',
        list: [
          "Encaissement simple — facture adressée directement au client, entre partenaires de confiance",
          "Lettre de crédit stand-by — garantie bancaire (non un moyen de paiement) qui ne joue qu'en cas de défaillance de l'acheteur",
          "Contre remboursement (COD) — livraison contre paiement encaissé par le transitaire ou le transporteur",
        ],
      },
    ],
  },
  {
    id: 'ch13',
    kind: 'chapitre',
    level: 2,
    number: 18,
    title: 'Les problèmes financiers du commerce international (2e Année)',
    intro:
      "Importateurs et exportateurs doivent financer leurs opérations (douane, transport, assurance, transit) et se prémunir contre le risque de change lié à la fluctuation des devises.",
    sections: [
      {
        heading: 'Sources de financement à l\'exportation',
        list: [
          "Mesures étatiques — avantages fiscaux, allégement des procédures douanières",
          "Crédits de financement bancaires pour couvrir les insuffisances de trésorerie",
          "Avance en devise à l'exportation — emprunt remboursé par le paiement du client",
          "Mobilisation des créances nées à l'exportation, une fois la marchandise expédiée",
          "Affacturage (factoring) — cession des créances à un factor contre paiement anticipé",
        ],
      },
      {
        heading: "Sources de financement à l'importation",
        list: [
          "Crédit acheteur — la banque règle le fournisseur pour le compte de l'importateur",
          "Mobilisation des indemnités de sinistre en attendant le règlement de l'assureur",
          "Crédit documentaire — finance l'opération à partir des documents transmis",
          "Avance en devise à l'importation — pour payer les fournisseurs étrangers",
        ],
      },
      {
        heading: 'Le risque de change',
        paragraphs: [
          "Le taux de change se forme par la confrontation de l'offre et de la demande de devises, sur le marché des changes au comptant (règlement sous 2 jours) ou à terme (règlement à échéance convenue). Une devise à la hausse est favorable à l'exportateur et défavorable à l'importateur (et inversement).",
        ],
      },
      {
        heading: 'Techniques de couverture du risque de change',
        list: [
          "Choix d'une monnaie de facturation stable (F CFA, EURO)",
          "Termaillage — accélérer ou retarder l'encaissement/le paiement selon l'évolution du cours",
          "Compensation — échanger des marchandises contre d'autres marchandises",
          "Forfaitage — céder au comptant une créance export à un forfaitiste",
          "Avance en devise — financement et couverture à la fois",
          "Couverture à terme — déport (cours à terme inférieur au cours du jour) ou report (cours à terme supérieur)",
        ],
      },
    ],
  },
  {
    id: 'ch14',
    kind: 'chapitre',
    level: 2,
    number: 19,
    title: "La gestion des commandes à l'export et à l'import (2e Année)",
    intro:
      "Réussir à l'international exige une grande rigueur administrative et commerciale, depuis la prospection d'un acheteur ou d'un fournisseur jusqu'à la réception de la commande.",
    sections: [
      {
        heading: 'À l\'exportation',
        paragraphs: [
          "Le service export bâtit son travail en trois étapes : la prospection d'un acheteur potentiel, la préparation de la commande (facture pro forma, emballage, transitaire), puis les formalités d'expédition.",
          "La facture pro forma donne le prix, le produit et les conditions de vente/paiement ; contrairement à la facture commerciale, elle n'oblige pas l'acheteur à payer.",
        ],
        list: [
          "Service commercial — vérifie les mentions du bon de commande (incoterm, conditionnement)",
          "Magasinage et production — vérifient la disponibilité du stock ou la capacité de fabrication",
          "Transport — met en place les moyens logistiques (affrètement, conteneurs)",
          "Douane export — le seul droit à payer en Côte d'Ivoire est le DUS, calculé sur la valeur FOB",
        ],
      },
      {
        heading: "À l'importation : sélection des fournisseurs",
        list: [
          "Critères commerciaux — notoriété, prix, conditions de paiement, qualité des services",
          "Critères techniques — qualité de fabrication, certification ISO",
          "Critères de gestion — efficacité administrative, structure organisationnelle claire",
        ],
      },
      {
        heading: "L'appel d'offre",
        paragraphs: [
          "Consultation adressée à plusieurs fournisseurs, via un cahier des charges, pour obtenir l'offre la plus intéressante.",
        ],
        list: [
          "Appel d'offre ouvert — adressé à toutes les entreprises intéressées",
          "Appel d'offre restreint — réservé aux entreprises jugées compétentes",
          "Appel d'offre de fonctionnement — désignation nominative, simple commande",
          "L'adjudicateur définit le projet, l'adjudicataire est retenu, les soumissionnaires répondent à la consultation",
        ],
      },
      {
        heading: 'Les 4 étapes de la commande import',
        list: [
          "Passation — émission d'un bon de commande précisant fournisseur, marchandise, incoterm et transport",
          "Suivi — accusé de réception, relance du fournisseur, organisation du transport et de l'assurance",
          "Mise à jour des fichiers fournisseurs/articles et constitution du dossier d'achat",
          "Réception — contrôle de la marchandise, réserves éventuelles, choix du régime douanier",
        ],
      },
    ],
  },
  {
    id: 'cas6',
    kind: 'cas',
    level: 2,
    number: 20,
    title: 'Cas Israël et Fils',
    intro:
      "Trois jeunes diplômés en commerce international, Daniel, Jean et Paul, décrochent chacun une commande auprès d'un industriel hollandais : noix de cajou, café et cacao, en CIF Abidjan.",
    sections: [
      {
        heading: 'Travail à faire',
        list: [
          "Déterminer le prix EXW de chaque exportateur (coefficient multiplicateur, taux de marge, taux de marque)",
          "Préciser le statut du transitaire ELOHIM TRANSIT vis-à-vis de la douane",
          "Les trois produits peuvent-ils être empotés dans le même conteneur ? Motiver la réponse",
          "Comparer la lettre de crédit stand-by au CREDOC irrévocable et confirmé",
        ],
      },
    ],
  },
  {
    id: 'cas7',
    kind: 'cas',
    level: 2,
    number: 21,
    title: 'Cas Ets Yeshua',
    intro:
      "Installés à Nassian, les Ets YESHUA distribuent des produits alimentaires. Face à une forte demande de riz, ils commandent chez un fournisseur thaïlandais basé à Bangkok.",
    sections: [
      {
        heading: 'Travail à faire',
        list: [
          "Calculer les prix EXW, CPT, CIP, DPU, DAP, DDP et le coût de revient",
          "Identifier les documents nécessaires à l'obtention du code importateur/exportateur",
          "Préciser le régime douanier du riz et le document à lever pour son importation",
          "Préciser l'emballage et le type de conteneur appropriés à l'expédition du riz",
        ],
      },
    ],
  },
  {
    id: 'cas8',
    kind: 'cas',
    level: 2,
    number: 22,
    title: 'Cas La Cave de Yop',
    intro:
      "Basée à Yopougon, LA CAVE DE YOP importe des vins d'Europe. Elle diversifie ses fournisseurs avec DJOMO, basé à Durban, pour une commande de 580 cartons de vins en CFR Abidjan.",
    sections: [
      {
        heading: 'Travail à faire',
        list: [
          "Calculer les prix EXW, FAS, FOB, CFR, CIF, DAP, DPU et DDP",
          "Identifier les obligations de l'acheteur et du vendeur en vente CFR Abidjan",
          "Un incident endommage 15 cartons durant le transport : quel montant payer au fournisseur ?",
          "Calculer l'indemnité totale (honoraires du commissaire d'avarie, frais annexes, franchise)",
        ],
      },
    ],
  },
  {
    id: 'cas9',
    kind: 'cas',
    level: 2,
    number: 23,
    title: 'Cas Victoire SA',
    intro:
      "Installée à Bangolo, VICTOIRE SA distribue des produits alimentaires et souhaite approvisionner son magasin en farine de blé auprès d'un fournisseur français basé au Havre.",
    sections: [
      {
        heading: 'Travail à faire',
        list: [
          "Déterminer les prix EXW, FAS, FOB, CFR, CIF, DPU, DAP et DDP en précisant les villes",
          "Préciser le statut douanier de la farine de blé et le document requis à l'import",
          "Identifier le statut du transitaire et ses obligations envers son client",
          "Expliquer pourquoi le fournisseur refuse de livrer en DDP Bangolo",
        ],
      },
    ],
  },
  {
    id: 'cas10',
    kind: 'cas',
    level: 2,
    number: 24,
    title: 'Cas Mage SA',
    intro:
      "Installée à Yopougon, MAGE SA distribue des produits chimiques. Pour honorer une commande urgente auprès d'un laboratoire français, elle confie l'expédition à SAGA Transit en transport aérien.",
    sections: [
      {
        heading: 'Travail à faire',
        list: [
          "Calculer le fret aérien par la méthode du « payant-pour »",
          "Calculer les prix EXW, FCA, CPT, CIP, DPU, DAP, DDP et le coût de revient",
          "Préciser le statut de SAGA Transit vis-à-vis de MAGE SA et de la douane",
          "Comparer le virement international à la remise documentaire pour le règlement de la facture",
        ],
      },
    ],
  },
];
