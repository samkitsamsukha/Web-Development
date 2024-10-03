require('dotenv').config();
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/samkit', (req, res) => {
    res.send("Samkit Samsukha")
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login to the website</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${port}`);
})