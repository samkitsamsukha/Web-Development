// const express = require('express');
import express from 'express';


const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Server is ready')
// })

// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'Joke 1',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            id: 2,
            title: 'Joke 2',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            id: 3,
            title: 'Joke 3',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            id: 4,
            title: 'Joke 4',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            id: 5,
            title: 'Joke 5',
            content: 'lorem ipsum dolor sit amet'
        }
    ]
    res.send(jokes);
})

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`)
})