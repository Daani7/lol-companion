# Tier List App

Cette application permet de découvrir, créer et même de gérer une **Tier List** pour les champions de *League of Legends*. Les utilisateurs peuvent ajouter, retirer et organiser les champions dans des catégories (S, A, B, C, D).

## Fonctionnalités

- Affichage des champions de *League of Legends*.
- Ajout de champions dans différentes catégories.
- Fonctionnalité de glisser-déposer pour organiser les champions dans les catégories.
- Utilisation de **Zustand** pour la gestion de l'état.
- Utilisation de **TanStack Query** pour la gestion des données asynchrones.
- **Gestion des mutations avec `useMutation`** :
  - Permet l'ajout et la suppression de champions dans les différentes catégories de la tier list.
  - Lorsqu'un champion est ajouté ou retiré d'une catégorie, la mutation est effectuée de manière asynchrone, et la liste des champions est rafraîchie.
  - Utilisation des callbacks `onSuccess`, `onError`, et `onSettled` pour gérer les retours et erreurs lors de la mutation.

## Prérequis

Avant de commencer, assurez-vous que vous avez les outils suivants installés sur votre machine :

- **Node.js** (version 14 ou supérieure)
- **npm** (ou **Yarn**)

## Installation

### 1. Clonez le dépôt du projet

```bash
git clone 'https://github.com/Daani7/lol-companion'
```

### 2.  Accédez au répertoire du projet
```bash
cd lol-companion
npm install
Ou
yarn install

npm run dev
OU
yarn dev
```

src/
│
├── components/             # Composants réutilisables (Atoms, Molecules, Organisms)
│   ├── TierColomn/         # Composant pour afficher une colonne de champions
│   └── ...
├── pages/                  # Pages de l'application
│   ├── TierListPage/       # Page principale affichant la tier list
│   └── ...
├── store/                  # Gestion de l'état avec Zustand
│   └── useTierListStore.ts # Store pour gérer l'ajout et la suppression de champions
├── api/                    # Appels API pour récupérer les champions
│   └── lolApi.ts           # API pour récupérer les champions de League of Legends
└── ...

### Auteur
Nom de l'auteur : Derbala Dani
