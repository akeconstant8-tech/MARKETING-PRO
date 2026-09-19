import type { TciChapter } from '../tciTypes';

export const year1Chapter7: TciChapter = {
  id: "ch7",
  kind: "chapitre",
  level: 1,
  number: 7,
  title: "Le transit en Côte d'Ivoire",
  intro:
    "Dans le contexte du commerce international, l’on emploie souvent le terme « transit ». Ainsi l’on entendra dire : Marchandises voyageant sous le régime du transit Sociétés de transit Dans le 1er cas, le terme transit désigne un régime douanier sous lequel une marchandise peut circuler à l’intérieur d’un pays ou traverser un territoire douanier en suspension des droits et taxes exigibles. Dans le deuxième cas, il désigne une activité professionnelle connue au plan juridique sous le vocable de « commerce transitaire ».",
  sections: [
      {
        heading: "I- Définition de transit",
        paragraphs: [
          "Le transit est une activité qui consiste à effectuer un certain nombre d’opérations permettant le passage en douane des marchandises. C’est la déclaration en détail.",
        ],
      },
      {
        heading: "II-Organisation du transit en Côte d’Ivoire",
        paragraphs: [
          "Le transit est régi par des lois précises consignées dans le code des douanes et le code du commerce. C’est aussi une corporation bien organisée, car nul ne peut déclarer en détail sans en être habilité. Cependant, les propriétaires peuvent être admis à déposer une déclaration détaillée lorsqu’il s’agit d’opérations non commerciales ou lorsqu’il n’existe aucun commissionnaire agréé en douane établi au lieu de dédouanement, ou lorsqu’il s’agit des opérations correspondant à leur situation sociale.",
        ],
      },
      {
        heading: "III- Qualités juridiques du transitaire",
        paragraphs: [
          "Antérieurement au 03 Septembre 1976, les opérateurs économiques pouvaient eux-mêmes déclarer leurs opérations d’import ou d’export. Mais depuis cette date, seuls les commissionnaires agréés en douane sont habilités à déclarer en détail les marchandises. Cette mesure vise deux objectifs :",
        ],
        list: [
          "Un objectif social : créer de nouveaux emplois par la mise en place d’une nouvelle corporation.",
          "Un objectif de transparence fiscale : sécuriser le trésor public en matière de recouvrement des droits de porte et amendes éventuelles par la réduction du nombre d’interlocuteurs économiques.",
        ],
      },
      {
        paragraphs: [
          "Ainsi est considéré comme commissionnaire agréé en douane toute personne physique (individu) ou morale (société de personnes) ayant pour profession d’accomplir pour des tiers (importateurs, exportateurs), les formalités de douane relatives à la déclaration en détail des marchandises.",
        ],
      },
      {
        heading: "IV- Conditions d’agrément",
        paragraphs: [
          "Pour pouvoir dédouaner pour un tiers, toute personne physique ou morale doit avoir reçu un agrément assorti d’un numéro qui est délivré par la Direction Générale des Douanes. Au préalable, les conditions suivantes doivent être remplies :",
        ],
        list: [
          "Introduire auprès de la douane une demande et un exemplaire du journal d’annonces légales informant de la constitution de la société.",
          "Le casier judiciaire du ou des dirigeants de la société.",
          "les statuts et règlements intérieurs de la société.",
          "Disposer d’un local situé dans le secteur géographique ou l’agrément est accordé.",
          "Disposer d’une libération d’un capital de 25.000.000 FCFA certifiée par une banque ou un notaire.",
          "Posséder un engagement d’une banque agréée en Côte d’Ivoire de mettre à la disposition du pétitionnaire un crédit d’enlèvement en cas d’octroi de l’agrément.",
          "Un cautionnement constitué auprès de la Banque Nationale d’Investissement (BNI) d’un montant de 30.000.000 FCFA à titre de garantie pour l’enlèvement des opérations de dédouanement.",
          "Disposer d’un registre de commerce.",
          "Disposer d’un compte contribuable.",
        ],
      },
      {
        heading: "V- Différents types de transitaires",
        paragraphs: ["Nous distinguons deux principaux types de transitaires :"],
        list: ["Le transitaire commissionnaire de transport, et", "Le transitaire mandataire."],
      },
      {
        heading: "1) Le transitaire commissionnaire de transport",
        paragraphs: [
          "Intermédiaire professionnel, il traite en gros avec le chargeur (son commettant). Il procède à certaines opérations qui consistent à faire acheminer au mieux des intérêts de son client des marchandises à destination. Ainsi, il réalise toutes les étapes d’opérations parfois complexes, échelonnées sur un vaste espace géographique et sur une longue période. Les opérations sont liées entre elles par un contrat unique et global appelé contrat de commission.",
        ],
      },
      {
        heading: "Schéma d’intervention du transitaire commissionnaire.",
        diagram: {
          width: 720,
          height: 220,
          boxes: [
            {
              label: "Commettant",
              x: 20,
              y: 40,
              w: 160,
              h: 90,
            },
            {
              label: "Transitaire\ncommissionnaire",
              x: 270,
              y: 20,
              w: 180,
              h: 130,
              emphasis: true,
            },
            {
              label: "Divers\nintervenants",
              x: 540,
              y: 40,
              w: 160,
              h: 90,
            },
          ],
          arrows: [
            {
              points: [
                [180, 85],
                [270, 85],
              ],
              badge: {
                text: "1",
              },
            },
            {
              points: [
                [450, 85],
                [540, 85],
              ],
              badge: {
                text: "2",
              },
            },
          ],
          labels: [
            {
              text: "Chargeur",
              x: 100,
              y: 175,
              anchor: "middle",
            },
            {
              text: "réel",
              x: 100,
              y: 192,
              anchor: "middle",
            },
            {
              text: "chargeur",
              x: 360,
              y: 175,
              anchor: "middle",
            },
            {
              text: "virtuel",
              x: 360,
              y: 192,
              anchor: "middle",
            },
            {
              text: "maillons de la chaîne",
              x: 620,
              y: 175,
              anchor: "middle",
            },
            {
              text: "logistique",
              x: 620,
              y: 192,
              anchor: "middle",
            },
          ],
          caption: "Schéma d'intervention du transitaire commissionnaire",
        },
      },
      {
        heading: "Commentaire",
        paragraphs: [
          "1) Contrat de commission entre le chargeur (commettant) et le commissionnaire. Le commettant (chargeur) indique au commissionnaire les opérations à effectuer et les résultats à obtenir.",
        ],
      },
      {
        heading: "2) Le commissionnaire prend des initiatives",
        list: [
          "Il conçoit l’opération du transport ;",
          "Il choisit le mode de transport adapté aux marchandises et la technologie adéquate (Conteneurs, avions),",
          "Il négocie et paie le fret,",
          "Il souscrit à une police tiers chargeur",
        ],
      },
      {
        paragraphs: [
          "En clair, le commissionnaire dispose du libre choix de ses sous-traitants, et est en conséquence responsable de leurs fautes comme des siennes propres. Ce que l’acheteur lui demande, c’est de lui faire parvenir des marchandises en bon état, dans les délais prescrits et au prix convenu. Il est donc redevable d’une obligation de résultat. C'est-à-dire qu’il garantit à son client un résultat précis ou positif. Si le résultat attendu n’est pas atteint, sa responsabilité est engagée sans que le client n’ait à prouver une faute quelconque. Pour mettre en jeu la responsabilité du transitaire commissionnaire de transport il faut apporter la preuve de ses fautes et de celles de ses sous traitants.",
          "L’usager a recours à cette solution en général lorsqu’il ne maîtrise pas les opérations d’import ou d’export ou pour des opérations ponctuelles.",
          "Relèvent de ce statut : le groupeur (de fret aérien, routier, maritime), l’organisateur de transport multimodal, le commissionnaire de transport maritime, l’affréteur routier, l’intégrateur (messagerie express internationale : exemple DHL, Chronopost).",
        ],
      },
      {
        heading: "2) Le transitaire mandataire",
        paragraphs: [
          "Il agit au nom et pour le compte de son mandant (le chargeur). En effet, le chargeur négocie directement le contrat de transport avec le transporteur et le contrat d’assurance avec l’assureur. Le transitaire n’a donc pas d’initiatives à prendre quant à l’organisation globale des opérations, mais il est tenu de suivre de manière scrupuleuse les instructions relatives aux opérations de détails qui lui sont indiquées dans le mandat par son client.",
        ],
      },
      {
        heading: "Schéma d’intervention du transitaire mandataire",
        diagram: {
          width: 720,
          height: 260,
          boxes: [
            {
              label: "Mandant",
              x: 20,
              y: 20,
              w: 150,
              h: 70,
            },
            {
              label: "Transitaire\nmandataire",
              x: 320,
              y: 10,
              w: 180,
              h: 80,
            },
            {
              label: "Assureur",
              x: 190,
              y: 140,
              w: 150,
              h: 55,
            },
            {
              label: "Sous-traitants",
              x: 480,
              y: 160,
              w: 200,
              h: 70,
            },
          ],
          arrows: [
            {
              points: [
                [170, 45],
                [320, 45],
              ],
              badge: {
                text: "1",
              },
            },
            {
              points: [
                [95, 90],
                [95, 200],
                [480, 200],
              ],
              badge: {
                text: "2",
              },
            },
            {
              points: [
                [130, 90],
                [200, 140],
              ],
              badge: {
                text: "3",
              },
            },
            {
              points: [
                [440, 90],
                [540, 160],
              ],
              badge: {
                text: "4",
              },
            },
          ],
          labels: [
            {
              text: "(Chargeur)",
              x: 20,
              y: 232,
              anchor: "start",
            },
            {
              text: "(Intervenants)",
              x: 600,
              y: 250,
              anchor: "middle",
            },
          ],
          caption: "Schéma d'intervention du transitaire mandataire",
        },
      },
      {
        heading: "Commentaire",
        paragraphs: [
          "1) Contrat de mandat entre le mandant et le mandataire : Le contrat de mandat contient les instructions données par le mandant au mandataire que ce dernier est tenu de suivre sous une certaine autonomie.",
        ],
      },
      {
        heading: "2) Le mandant procède :",
        list: [
          "Au choix du mode de transport adapté aux marchandises,",
          "Au choix du transporteur,",
          "A la négociation et au paiement du fret.",
        ],
      },
      {
        paragraphs: [
          "3) Le mandant souscrit au contrat d’assurance.",
          "4) Il existe des relations de collaboration entre le transitaire et les sous-traitants pour l’accomplissement de certaines tâches administratives (contrôle douanier), et physiques (empotage, dépotage, emballage…).",
          "En somme, le transitaire mandataire n’a pas le choix de ses sous-traitants. Ils lui sont imposés. Au plan juridique, il a une obligation de moyens. C'est-à-dire qu’il n’est tenu que de mettre au service du client tous les moyens dont il dispose pour la bonne exécution du contrat qui le lie au client. En cas de faute, il appartient au client d’apporter la preuve de la responsabilité de ce transitaire (il n’a pas utilisé tous les moyens promis par exemple). Il ne répond que de ses fautes personnelles (qui devront être démontrées) et non celles du transporteur.",
          "Le chargeur (mandant) a recours à cette solution lorsqu’il maîtrise les opérations d’import et d’export.",
          "Relèvent de ce statut : le transitaire portuaire et aéroportuaire, le consignataire de marchandise, le courtier de fret maritime et fluvial, l’entrepreneur de manutention, l’agent de fret aérien qui signe les LTA pour le compte des compagnies aériennes.",
        ],
      },
      {
        heading: "VI- Obligations et responsabilités du transitaire",
      },
      {
        heading: "1) Vis-à-vis de la douane",
        paragraphs: [
          "Vis-à-vis de la douane le commissionnaire et le mandataire ont le même statut. A ce titre ils doivent :",
        ],
        list: [
          "Déclarer en détail toutes les marchandises qui leur sont confiées par leur clientèle tant à l’import qu’à l’export",
          "Respecter sous peine d’amende les obligations qui découlent des régimes douaniers déclarés.",
          "Déclarer en leurs propres noms les marchandises. Ils sont donc débiteurs des droits de portes et taxes exigibles ainsi que les amendes éventuelles au profit de l’administration douanière.",
        ],
      },
      {
        heading: "2)vis-à-vis du chargeur",
        paragraphs: [
          "Vis-à-vis du chargeur, les obligations et responsabilités du transitaire commissionnaire diffèrent de celles du transitaire mandataire.",
        ],
      },
      {
        heading: "2.1) Cas du transitaire commissionnaire",
        list: [
          "Il est garant de l’arrivée des marchandises en qualité et quantité dans le délai déterminé sauf cas de force majeure.",
          "Il est aussi garant des avaries ou pertes des marchandises sauf stipulation contraire dans le contrat de transport (cas de force majeure dûment établie).",
        ],
      },
      {
        paragraphs: ["Exemple : l’insuffisance d’emballage."],
        list: [
          "Il est enfin garant des fautes des sous-traitants qu’il fait intervenir dans la chaine logistique sauf cas de force majeure.",
        ],
      },
      {
        heading: "2.2) Cas du transitaire mandataire",
        paragraphs: [
          "Lorsque le transitaire agit en la seule qualité de déclarant en douane, ses obligations et sa responsabilité découlent simplement des règles qui régissent le mandat. Ainsi,",
        ],
        list: [
          "Il n’est pas garant des faits des autres intermédiaires qui concourent à l’acheminement des marchandises.",
          "Il ne répond, que de ses fautes personnelles qui doivent être prouvées (omission de prendre des réserves à la réception des marchandises avariées, fausses déclarations intentionnelles).",
          "Il n’est pas tenu des résultats de l’opération de bout en bout, mais à l’exécution des tâches qui lui sont éditées par le mandant.",
        ],
      },
      {
        heading: "Tableau comparatif selon la qualité du transitaire",
        table: {
          headers: ["Transitaire mandataire", "Transitaire commissionnaire"],
          rows: [
            [
              "- Il exécute les ordres de son mandant.\n- Il n’a pas le choix de ses sous-traitants.\n- Il n’est pas responsable des fautes des sous-traitants, mais des siennes dûment prouvées.\n- Il répond à une obligation de moyens.",
              "- Il organise à sa guise et sous sa seule responsabilité toutes les opérations relatives à l’expédition des marchandises.\n- Il choisit à sa guise ses sous-traitants.\n- Il répond de ses fautes et de celles des sous-traitants.\n- Il répond à une obligation de résultat.",
            ],
          ],
        },
      },
      {
        heading: "VII- Critères de choix d’un transitaire",
        paragraphs: [
          "Le choix d’un transitaire se fait en fonction de la nature et du volume des marchandises et des impératifs. Voici quelques critères :",
        ],
        list: [
          "Le coût des prestations du transitaire (H.A.D) et les conditions de règlement.",
          "Le niveau du crédit d’enlèvement.",
          "La compétence du personnel du transitaire.",
          "L’Image de marque du transitaire vis-à-vis de sa clientèle et de la douane.",
          "L’équipement logistique disponible.",
          "La disponibilité d’un magasin en zone portuaire.",
          "La possibilité de faire du groupage.",
          "La localisation des correspondants du transitaire dans les grands ports à travers le monde pour la réalisation des opérations de bout en bout.",
        ],
      },
      {
        heading: "Exercice d’application",
        list: ["1 Définissez l’activité transit"],
      },
      {
        paragraphs: ["1.1.2 Depuis quand date cette corporation et quels en sont les objectifs ?"],
        list: [
          "3 Quelles sont les conditions d’agrément d’une société de transit en Côte d’Ivoire ?",
        ],
      },
      {
        heading: "1.1.4 Citez et expliquez les différents types de transitaires",
        paragraphs: [
          "1.1.5 Expliquez « obligation de résultat » et « obligation de moyens ».",
          "1.1.6 Quelles sont les obligations du transitaire vis-à-vis de la douane et du chargeur ?",
          "1.1.7 Quels peuvent être les critères de choix d’un transitaire ?",
        ],
      },
    ],
};
