# :musical_note: Bienvenue sur le dépot de Museek ! :notes:
🚀 Version 2.0 ([English](https://github.com/naomi-lgt/Museek-2023/blob/main/readme.md), [Français](https://github.com/naomi-lgt/Museek-2023/blob/main/README.fr.md))

Museek est un projet qui vous permet de rechercher les paroles de vos musiques préférées ! Le projet est entièrement conçu avec **JavaScript** et alimenté par l'**API de Genius** et **Node.js**.

<div align="center">
  <img src="https://s5.gifyu.com/images/S8Dz2.gif" alt="animated" />
</div>

[![Netlify Status](https://api.netlify.com/api/v1/badges/18e1a43d-de03-49e5-9cce-54dfb8038f06/deploy-status)](https://app.netlify.com/sites/museek2023/deploys)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

### Accédez au site [ici](https://museek2023.netlify.app)

## Technologies
Afin de pouvoir créer ce projet, j'ai utilisé les technologies suivantes:


### Front-end
- HTML
- CSS
- JavaScript
- Axios
- API Genius de [Rapidapi](https://rapidapi.com/Glavier/api/genius-song-lyrics1/)

### Back-end
- NPM
- Node.js
- Express
- Cors
- Dotenv
- Render

## Hiérarchie des fichiers
Le front-end et le back-end sont déployés séparément. Le front-end est hébergé via [Netlify](https://www.netlify.com) tandis que le back-end est déployé sur [Render](https://render.com).

### Front-end
Les fichiers à la racine sont les fichiers front-end. Dans **index.js**, vous pouvez voir l'entièreté du code front-end qui gère la barre de recherche, les requêtes à l'API et comment afficher les données. J'ai fait attention d'ajouter quelques commentaires dans mon code afin qu'il soit plus lisible et compréhensible.

Tout l'affichage a été réalisé en CSS pure dans le fichier **index.css**. J'ai aussi fait le design responsive avec une media query. L'affichage a été fait en **mobile first** et la media query a géré une viewport de bureau.

### Back-end
Dans le dossier **server**, le fichier **server.js** gère toutes les données. Utiliser un serveur Express a été très simple même si je n'y étais pas habitué. Le front-end envoie une requête au serveur avec deux paramètres (l'URL de l'API et la recherche utilisateur ou l'ID de la chanson). Le serveur reçoit et gère la requête avant d'envoyer une autre requête à l'API de Genius grâce aux paramètres passés par la requête front-end. Même si je pouvais gérer la plupart des requêtes dans le fichier du front-end, j'ai dû créer un serveur afin de pouvoir contourner les rejets de CORS.