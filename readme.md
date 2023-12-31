# :musical_note: Welcome to the Museek repository! :notes:
🚀 Version 2.0 ([English](https://github.com/naomi-lgt/Museek-2023/blob/main/readme.md), [Français](https://github.com/naomi-lgt/Museek-2023/blob/main/README.fr.md))

Museek is a project allowing you to search for your favorite music lyrics! The project is entirely made with **JavaScript**  and powered by the **Genius API** and **Node.js**.

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

### Check the website [here](https://museek2023.netlify.app)

## Technologies
In order to make this project, I used the following technologies:


### Front-end
- HTML
- CSS
- JavaScript
- Axios
- Genius API from [Rapidapi](https://rapidapi.com/Glavier/api/genius-song-lyrics1/)

### Back-end
- NPM
- Node.js
- Express
- Cors
- Dotenv
- Render

## File hierarchy
The front-end and back-end are deployed separately. The front-end is hosted via [Netlify](https://www.netlify.com) whereas the back-end is deployed on [Render](https://render.com).

### Front-end
The root folder files are the front-end files. In **index.js**, you are able to see the full front-end code handling the search bar, the API requests and how to display the data. I made sure to add some comments in my code so that it is readable and understandable.

All the styling was done in pure CSS in the **index.css** file. I also made the design responsive with a media query. The styling was made in **mobile first** and the media query handled a desktop viewport.

### Back-end
In the **server** folder, the **server.js** file is where all the data is handled. Using an Express server was very easy even though I was not used to it. The front-end sends a request to the server with two parameters (the API URL and the user query or the song ID). The server receives and handles the request before sending another request do the Genius API thanks to the parameters passed via the front-end request. Even though I could technically handle most requests in the front-end file, I had to create the server so as to bypass CORS rejections.