const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = 3000;

// Use CORS middleware to allow requests from your Angular frontend
app.use(cors({
  origin: 'http://localhost:4200' // Replace with your Angular frontend's URL
}));

const scrapeTheVerge = async () => {
    const url = 'https://sea.mashable.com/article';
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const articleClass = 'blogroll';

    let headlines = [];
    $('li.' + articleClass).each((i, elem) => {
        const titleElement = $(elem).find('div.caption');
        const dateElement = $(elem).find('time.datepublished');
        const title = titleElement.text().trim();
        const link = $(elem).find('a').attr('href');
        const date = new Date(dateElement.text().trim());

        if (date >= new Date('2022-01-01')) {
            headlines.push({ title, link, date });
        }
    });

    headlines.sort((a, b) => b.date - a.date);
    return headlines;
};

app.get('/api/headlines', async (req, res) => {
    try {
        const headlines = await scrapeTheVerge();
        res.json(headlines);
    } catch (error) {
        res.status(500).send('Error scraping the website');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
