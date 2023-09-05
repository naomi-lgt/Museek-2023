const express = require('express')
const axios = require('axios')
const app = express()
const cors = require('cors')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const dotenv = require('dotenv')
dotenv.config()

const BASE_URL = 'https://genius-song-lyrics1.p.rapidapi.com';

let options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': process.env.GENIUS_API_HOST,
      'X-RapidAPI-Key': process.env.GENIUS_API_KEY
    }
};

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/search', async (req, res) => {
    const query = decodeURIComponent(req.query.path)
    console.log(query)

    options.params = {
        q: query,
        per_page: '10',
        page: '1'
    }

    try {
        const response = await axios.request(`${BASE_URL}/search/`, options)
        res.send(response.data)
    } catch(err) {
        console.log(err)
    }
})

app.get('/searchById', async (req, res) => {

    options.params = {id: req.query.id} 
    console.log(options)

    let lyricsAndDetailsArray = [];

    try {
        const lyrics = await axios.request(`${BASE_URL}/song/lyrics/`, options)
        // console.log(lyrics.data)
        const details = await axios.request(`${BASE_URL}/song/details/`, options)
        // console.log(details.data)
        const lyricsAndDetailsData = {...lyrics.data.lyrics, ...details.data}
        console.log(lyricsAndDetailsData)
        res.send(lyricsAndDetailsData)

    } catch(err) {
        console.log(err);
    }
})

app.get('/lyrics', async (req, res) => {
    console.log(req.query);

    const geniusURL = req.query.geniusURL
    const songPath = req.query.songPath
    try {
        const response = await axios.get(geniusURL + songPath)
        const dom = new JSDOM(response.data)
        const fetchedLyrics = dom.window.document.querySelectorAll('div[data-lyrics-container="true"]')
        const fetchedDescription = dom.window.document.querySelector("[class^=\"RichText__Container\"]")

        let lyricsArray = []
        let descriptionArray = []

        if(fetchedDescription !== null) {
            descriptionArray.push(fetchedDescription.innerHTML)
        }

        fetchedLyrics.forEach(lyrics => {
            const lyricsContent = lyrics.innerHTML
            lyricsArray.push(lyricsContent)
        })

        let lyricsAndDescriptionArray = []

        lyricsAndDescriptionArray.push(lyricsArray, descriptionArray)

        res.send(lyricsAndDescriptionArray)
    } catch (err) {
        console.log(err);
    }
})

app.listen(process.env.PORT || 3333, () => {
    console.log('Server running');
})