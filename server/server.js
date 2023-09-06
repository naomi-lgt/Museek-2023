const express = require('express')
const axios = require('axios')
const app = express()
const cors = require('cors')

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

    try {
        const lyrics = await axios.request(`${BASE_URL}/song/lyrics/`, options)
        const details = await axios.request(`${BASE_URL}/song/details/`, options)
        const lyricsAndDetailsData = {...lyrics.data.lyrics, ...details.data}
        res.send(lyricsAndDetailsData)
    } catch(err) {
        console.log(err);
    }
})

app.listen(process.env.PORT || 3333, () => {
    console.log('Server running');
})