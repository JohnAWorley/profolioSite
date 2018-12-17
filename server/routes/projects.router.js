const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


pool.on('connect', () => {
    console.log('connected to DB');
});

pool.on('error', (error) => {
    console.log('Error connecting to DB', error);
});


// let rez = {
//     id: 2,
//     name: 'the return data',
//     description: 'trial data',
//     thumbnail: '/images/goat_small.jpg',
//     website: 'https://www.google.com',
//     github: 'https://www.github.com',
//     date_completed: '05/05/1994',
//     tag_id: 'react'

// } // trial data

router.get('/', (req, res) => {
    console.log('in GET route');
    let queryString = `SELECT projects.name, projects.description, projects.github, projects.thumbnail, projects.website, projects.date_completed, tags.name as tag
    FROM projects JOIN tags ON projects.tag_id = tags.id ORDER BY projects.date_completed DESC; `;
    pool.query(queryString).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('error in get route ', err);
        
        res.sendStatus(500);
    });
});

module.exports = router;