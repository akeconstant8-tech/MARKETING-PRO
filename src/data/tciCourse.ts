export interface TciSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface TciChapter {
  id: string;
  kind: 'chapitre' | 'cas';
  number: number;
  title: string;
  intro: string;
  sections: TciSection[];
}

export const TCI_COURSE_TITLE = 'Technique du Commerce International';
export const TCI_COURSE_SUBTITLE = "BTS Gestion Commerciale — 1ère Année";

export const tciChapters: TciChapter[] = [
  {
    id: 'ch1',
    kind: 'chapitre',
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
];
