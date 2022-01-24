# Dans ma valise v 1.0.0

![](https://img.shields.io/badge/-Vue.js-05122A?style=for-the-badge&logo=Vue.js) 

## Contexte du projet

Depuis plusieurs années j'utilise l'application "We note" pour gérer une liste d'objets à emporter lors de mes voyages. Cette liste me permet de ne rien oublier. 

Néanmoins cette application ne me permet pas de trier par type de voyage. En effet, la liste m'affiche tout, y compris la doudoune de l'hiver alors que je cherche à faire mon sac pour deux jours de rando en été. 

Aussi je souhaitais pouvoir regrouper mes objets par lieu de rangement pour m'éviter de faire de nombreux aller et retour dans ma maison. 

## Concrètement que fait Dans ma valise ? 

Cette application permet d'afficher une liste d'objets à prendre pour ses voyages en précisant le lieu où il est rangé. 

On peut filtrer par type de voyages "2 jours + rando" ou "1 semaine + hiver" etc. Ceci permet de n'afficher que les objets utiles pour ce type de voyage. 

L'utilisateur peut cliquer sur l'objet pour indiquer qu'il est bien dans sa valise. 

L'utilisateur peut rajouter et supprimer des objets. 

## Screenshots du projet

<img src="./screenshot/valise01.jpg" alt="screenshot dans-ma-valise" width="300"/><img src="./screenshot/valise02.jpg" alt="screenshot dans-ma-valise" width="300"/>

<img src="./screenshot/valise03.jpg" alt="screenshot dans-ma-valise" width="300"/><img src="./screenshot/valise04.jpg" alt="screenshot dans-ma-valise" width="300"/>

## Stack Technique (prérequis) 

![](https://img.shields.io/badge/-Vue.js-05122A?style=for-the-badge&logo=Vue.js) 
![](https://img.shields.io/badge/-Node.js-05122A?style=for-the-badge&logo=Node.js) 
![](https://img.shields.io/badge/-Git-05122A?style=for-the-badge&logo=Git)

Vue.js : https://cli.vuejs.org/guide/installation.html

Git : https://git-scm.com/downloads

NodeJS (v12 ou supérieure) : https://nodejs.org/en/download/


## Installer le projet 


1. Télécharger le repo sur votre machine

```bash
git clone <url du repo>
```

2. Installez les dépendances

```bash
cd front-valise
npm install 
```
3. Compilation pour le développement
```
npm run serve
```
4. Compiler et minifier pour la production
```
npm run build
```

