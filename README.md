# Universal Paperclips Analytics

Une application React pour analyser les performances d'un agent AI dans le jeu Universal Paperclips. Ce projet a été créé en utilisant **Llama3 avec Ollama** et **Tesseract** pour créer un agent AI capable de jouer au jeu de manière autonome.

## 🤖 Agent AI

Ce site permet d'avoir des statistiques sur comment mon agent AI a fonctionné dans deux scénarios différents :
- **Avec des règles** : L'agent suit des stratégies spécifiques pour optimiser ses performances
- **Sans règles** : L'agent joue librement sans contraintes

### 🛠️ Technologies AI utilisées

- **Llama3** : Modèle de langage pour la prise de décision
- **Ollama** : Interface pour exécuter Llama3 localement
- **Tesseract** : OCR pour lire l'état du jeu à l'écran
- **React + TypeScript** : Interface utilisateur pour visualiser les résultats

## 📊 Métriques affichées

- Fonds disponibles ($)
- Inventaire non vendu
- Prix par trombone ($)
- Demande publique (%)
- Trombones par seconde
- Trombones en stock (inch)

## 🎮 Le jeu Universal Paperclips

Universal Paperclips est un jeu de gestion où l'objectif est de fabriquer des trombones et d'atteindre 100$ en le moins de tours possible.

### Actions disponibles :
- **Make Paperclip** : Fabrique manuellement 1 trombone (coûte 1 pouce de fil)
- **lower** : Diminue le prix de vente des trombones (augmente la demande)
- **raise** : Augmente le prix de vente des trombones (diminue la demande)
- **Marketing** : Améliore le marketing pour augmenter la demande (coûte 100$)
- **Wire** : N'achete pas de fil, cela ne sert à rien
- **AutoClippers** : Achete des machines automatiques qui fabriquent des trombones automatiquement (coûte 6.10$)

## 🤖 Prompts utilisés

### Prompt avec règles (Partie Rules)

```
Je joue à un jeu de gestion où je dois fabriquer des trombones.

OBJECTIF : Atteindre 100$ en le moins de tours possible.

EXPLICATION DES BOUTONS :
- "Make Paperclip" : Fabrique manuellement 1 trombone (coûte 1 pouce de fil)
- "lower" : Diminue le prix de vente des trombones (augmente la demande)
- "raise" : Augmente le prix de vente des trombones (diminue la demande)
- "Marketing" : Améliore le marketing pour augmenter la demande (coûte 100$)
- "Wire" : N'achete pas de fil, cela ne sert à rien.
- "AutoClippers" : Achete des machines automatiques qui fabriquent des trombones à ta place toutes les secondes sans que celà utilise un tour de jeu (coûte 6.10$)

RESTRICTION IMPORTANTE : Si Public Demand est à 1%, NE CLIQUE SURTOUT PAS sur "raise" car cela empêcherait toute vente.

Avant de payer AutoClippers, tu dois vérifier si tu as assez de fonds, sinon tu dois créer des trombones manuellement.

Voici l'état du jeu :

{state_text}

Voici les actions possibles :
{button_texts}

Quelle action dois-je effectuer maintenant pour atteindre 100$ rapidement ? Réponds uniquement par le nom exact du bouton à cliquer.
```

### Prompt sans règles (Partie Libre)

```
Je joue à un jeu de gestion où je dois fabriquer des trombones.
Voici l'état du jeu :

{state_text}

Voici les actions possibles :
{button_texts}

Quelle action dois-je effectuer maintenant ? Réponds uniquement par le nom exact du bouton à cliquer.
```

## 🚀 Fonctionnalités

- **Graphiques interactifs** : Visualisation des métriques de jeu avec ApexCharts
- **Sélecteur de données** : Basculement entre différents datasets (Partie Libre vs Partie Rules)
- **Design moderne** : Interface épurée avec couleurs vives
- **Responsive** : Compatible mobile et desktop

## 🛠️ Technologies utilisées

- **React 19**
- **TypeScript**
- **ApexCharts**
- **Tailwind CSS**
- **React Router**
- **Llama3** (via Ollama)
- **Tesseract OCR**

## 🚀 Déploiement

L'application est déployée sur GitHub Pages : [Lien vers l'application]

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/Maxence-villet/ai_universal_paperclips.git

# Installer les dépendances
npm install

# Lancer en mode développement
npm start

# Construire pour la production
npm run build

# Déployer sur GitHub Pages
npm run deploy
```

## 📁 Structure du projet

```
src/
├── app/
│   └── chartPage/
├── assets/
│   ├── partie_libre.json
│   └── partie_rules.json
├── components/
│   └── StackedAreaChart.tsx
└── App.tsx
```

## 🎨 Design

- **Thème** : Design épuré avec couleurs vives
- **Graphiques** : Stacked Area Charts avec grilles horizontales subtiles
- **Interface** : Minimaliste et intuitive

## 📝 Licence

MIT License
