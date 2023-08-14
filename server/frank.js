const express = require('express');

const app = express();
app.use(express.json());

app.get('/getCourses', async (req, res) => {
    try {
        const response = await fetch("https://consularlao.gov.la:3000/users");
        const movies = await response.json();
        res.json(movies)

    } catch (error) {
        res.json({ error: error })
    }
});


module.exports = app