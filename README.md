# Marketing Pro

Application web (React + Vite + TypeScript) pour les professeurs de marketing.
Projet Firebase : `marketing-pro-783ac`.

## Demarrage

```bash
npm install
npm run dev
```

Ouvre http://localhost:5173

## Etat actuel

- **Fait** : structure des dossiers, theme (bleu marine/or, `src/styles/variables.css`),
  Firebase (Auth email/mot de passe + Google popup + reset de mot de passe, Firestore), routes
  protegees, Sidebar + Header responsive (menu hamburger sur mobile), Login (mise en page
  split-ecran avec panneau de presentation — masque sous 1024px), Register, Dashboard (stats
  reelles, recherche globale, moyenne generale/taux de reussite, moyenne par matiere),
  Parametres (profil, deconnexion, mode sombre/clair fonctionnel).
- **A venir** (pages presentes mais en placeholder "a venir") : Etudiants, Classes,
  Matieres, Cours, Evaluations, Notes (saisie + calcul auto des moyennes — la formule est
  deja prete dans `src/utils/calculations.ts`), Performances (graphiques detailles),
  Calendrier, Ressources, Contacts.

## Structure

Voir `src/` : `components/` (UI reutilisable), `pages/` (un fichier par route),
`services/` (`firebase.ts`, `authService.ts`, `teacherService.ts`, `dataService.ts` — CRUD
Firestore generique), `context/AuthContext.tsx`, `hooks/` (`useTeacherCollection`,
`useCohortStats`, `useTheme`), `types/index.ts`, `utils/calculations.ts`.

## Configuration

`.env` est deja rempli avec la config Firebase. Pour Google Sign-In, verifie que `localhost`
est bien dans la liste des domaines autorises (Firebase Console > Authentication > Settings >
Authorized domains — `localhost` y est present par defaut).

`firestore.rules` et `storage.rules` sont prets a etre deployes :
`firebase deploy --only firestore:rules,storage`.

## Logo

Le vrai logo est integre : `src/assets/images/logo/marketing-pro.png` (lockup complet —
icone + wordmark + baseline, utilise a la taille `lg`) et `marketing-pro-icon.png` (embleme
seul, recadre depuis le lockup pour rester lisible a la taille `sm` du header/sidebar, ou le
texte du lockup complet serait illisible une fois reduit). Charges via `import.meta.glob`
(voir `src/components/Logo.tsx`), avec `object-fit: contain` partout (jamais deforme).
`marketing-pro-icon-dark.png` est une variante sur fond sombre, utilisee dans le panneau de
presentation de l'ecran de connexion (le fond blanc des deux fichiers ci-dessus y serait
visible comme un rectangle disgracieux). Note : l'embleme du logo reste vert/or (image reelle
fournie) meme si le theme de l'interface est passe au bleu marine — les deux coexistent
volontairement plutot que de deformer artificiellement les couleurs du vrai logo.

## Responsive

Systeme de breakpoints a 4 paliers (`src/styles/variables.css` + media queries dans chaque
composant) :

- **Telephone** (0-767px) : Sidebar hors-champ (drawer) derriere le menu hamburger, logo
  centre dans le Header (remplace le titre de page), grille de stats sur 2 colonnes.
- **Tablette** (768-1023px) : Sidebar persistante mais compacte (rail d'icones ~76px, labels
  et texte de profil masques en CSS), grille de stats sur 2 colonnes.
- **Ordinateur** (1024-1439px) : Sidebar complete (260px) toujours visible, grille de stats
  sur 4 colonnes.
- **Grand ecran** (1440px+) : identique a l'ordinateur, mais le contenu est plafonne a
  `--content-max-width` (1440px) et centre — les cartes ne s'etirent pas sur toute la largeur
  d'un ecran 4K.

Garde-fous anti-debordement : `overflow-x: hidden` global, `img { max-width: 100% }`,
`min-width: 0` sur les conteneurs flex qui pourraient forcer un debordement horizontal.
