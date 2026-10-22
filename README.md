# Les Petites Recettes de FloFlo

Carnet de recettes du monde réalisé en React pour le cours de frontend (B3).
On peut parcourir des recettes, les rechercher et les filtrer, consulter leur fiche détaillée,
les sauvegarder en favoris et créer sa propre recette.

## Sujet et API

- **Sujet** : un livre de recettes en ligne.
- **API** : [DummyJSON](https://dummyjson.com/docs/recipes), ressource `recipes` (50 recettes fictives).
  - `GET /recipes?limit=0` : toutes les recettes (liste) ;
  - `GET /recipes/:id` : une recette (page de détail) ;
  - `POST /recipes/add` : création d'une recette (formulaire).

## Prérequis

- [Node.js](https://nodejs.org/) **20.19 ou plus récent** (ou 22.12+), exigé par Vite 8 ;
- npm (installé avec Node.js) ;
- une connexion internet (les données viennent de l'API DummyJSON).

## Installation et lancement

```bash
git clone https://github.com/MrDunker844/Rendu-Front-b3.git
cd Rendu-Front-b3
npm install
npm run dev
```

Ouvrir ensuite l'adresse affichée dans le terminal (par défaut http://localhost:5173).

### Autres commandes

| Commande               | Rôle                                                  |
| ---------------------- | ----------------------------------------------------- |
| `npm run build`        | Vérifie les types (TypeScript) et construit le projet |
| `npm run preview`      | Lance la version construite                           |
| `npm run lint`         | Analyse le code avec Oxlint                           |
| `npm run format`       | Formate tout le code avec Prettier                    |
| `npm run format:check` | Vérifie le formatage sans modifier les fichiers       |

## Configuration

Aucune variable d'environnement n'est nécessaire : l'API DummyJSON est publique et ne demande pas de clé.
Son adresse est définie dans `src/shared/constants.ts` (`API_BASE_URL`).

## Choix techniques et bibliothèques

| Outil                     | Utilisation                                                         |
| ------------------------- | ------------------------------------------------------------------- |
| **React 19** + **Vite 8** | Interface et outil de développement                                 |
| **TypeScript**            | Typage des données de l'API, des props, des states et des fonctions |
| **React Router**          | Navigation entre les pages, paramètre d'URL pour la fiche détail    |
| **Tailwind CSS 4**        | Mise en forme, charte définie dans `src/index.css` (`@theme`)       |
| **Oxlint** / **Prettier** | Linter et formateur de code                                         |

- **Requêtes** : `fetch` et des hooks personnalisés (`useRecipes`, `useRecipe`, `useCreateRecipe`), sans bibliothèque supplémentaire.
- **Recherche, filtres et pagination côté client** : l'API ne permet pas de combiner une recherche texte avec deux filtres en un seul appel.
  Comme il n'y a que 50 recettes, elles sont toutes chargées une fois, puis filtrées (nom, cuisine, difficulté) et paginées (9 par page) dans le navigateur.
  Le filtrage porte sur toutes les recettes, la pagination sur les résultats filtrés.
- **Contextes React** :
  - `RecipeFiltersProvider` conserve la recherche, les filtres et la page courante pendant la navigation (aller-retour liste ↔ détail) ;
  - `FavoritesProvider` partage les favoris entre la liste, la fiche détail et la page des favoris.
- **localStorage** : les favoris y sont sauvegardés (`useEffect`) et relus au démarrage.
- **Architecture** : dossiers par fonctionnalité (`src/features/…` : `home`, `recipes`, `favorites`, `create-recipe`)
  et un dossier `src/shared/` pour ce qui est commun (composants d'interface, types, routes, constantes).
  Dans chaque fonctionnalité : `pages/`, `components/`, `hooks/`, `api/`, `utils/`, `types/`, `context/`.

## Fonctionnalités réalisées

- **Accueil** avec en-tête et navigation vers la liste, les favoris et la création.
- **Liste des recettes** : cartes avec image, nom, cuisine, difficulté et temps total ; toute la carte mène à la fiche.
- **Recherche et filtres** : recherche par nom + filtre par cuisine + filtre par difficulté, utilisables ensemble ;
  retour à la page 1 à chaque modification ; message quand aucune recette ne correspond.
- **Pagination** : boutons Précédent / Suivant et numéros de page, page courante mise en évidence.
- **Fiche détail** (`/recettes/:id`) : image, types de repas, temps de préparation et de cuisson, portions, calories,
  note, ingrédients et étapes. L'accès direct à l'URL et le rechargement fonctionnent.
- **Favoris** (`/favoris`) : ajout / retrait depuis les cartes et la fiche, sans doublon, sauvegarde dans le
  `localStorage`, message quand la liste est vide.
- **Création d'une recette** (`/nouvelle-recette`) : champs contrôlés, validation avant l'envoi avec messages
  explicites et focus sur le premier champ en erreur (`useRef`), envoi `POST` en JSON, bouton désactivé pendant l'envoi,
  message d'erreur avec « Réessayer » sans perdre la saisie, confirmation affichant la recette renvoyée par l'API.
- **États** : indicateur de chargement, message d'erreur avec bouton « Réessayer », listes vides.
- **Accessibilité** : labels associés aux champs, textes alternatifs, navigation au clavier avec focus visible,
  messages d'erreur reliés aux champs (`aria-invalid`, `aria-describedby`).
- **Responsive** : mise en page adaptée au mobile et à l'ordinateur.

## Bonus

- Projet réalisé en **TypeScript**.

## Limites et problèmes connus

- DummyJSON **simule** la création : la recette créée n'est pas enregistrée sur le serveur et n'apparaît pas dans la liste.
- La recherche, les filtres et la page courante sont perdus après un rechargement du navigateur (non exigé).
- Les favoris enregistrent une copie des recettes : si l'API modifiait une recette, le favori garderait l'ancienne version.
- La recherche porte uniquement sur le nom des recettes.
- `useRecipes` et `useRecipe` ont une structure proche ; ils pourraient être factorisés avec un hook générique.
- `RecipeCard` (dans `shared/`) utilise le bouton de favori de la fonctionnalité `favorites` : le dossier commun dépend donc d'une fonctionnalité.
- Les données de l'API sont en anglais et ne sont pas traduites.

## Utilisation de l'IA

- **Claude (Anthropic)** : utilisé comme tuteur tout au long du projet, pour analyser les consignes, découper le travail
  en étapes, expliquer les notions de React et de TypeScript, relire mon code (bugs et clean code) et expliquer les messages
  d'erreur. Une partie du code a été écrite par Claude, surtout la configuration, la mise en forme Tailwind, les composants
  d'affichage et certaines fonctions utilitaires ; je les ai relues pour pouvoir les expliquer. J'ai écrit moi-même ou
  complété les parties clés (types, hooks, contexte, routing, appels API, `useEffect`, `useRef`), avec ses indices et corrections.
- **Maquettes** : réalisées sur **Figma** et utilisées comme modèle visuel.

## Déploiement

Le projet n'est pas déployé.
