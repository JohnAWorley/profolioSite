const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


pool.on('connect', () => {
    console.log('connected to DB');
});

pool.on('error', (error) => {
    console.log('Error connecting to DB', error);
});


router.post('/', (req, res) => {
    console.log('in POST route');
    let project = req.body;
    let queryString = `INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id" ) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    pool.query(queryString, [project.name, project.description, project.thumbnail, project.website, project.github, project.date_completed, project.tag_id ]).then(() => {
        res.sendStatus(201);
    }).catch((err) => {
        console.log('in server side post', err);
        res.sendStatus(500);
    })
});











module.exports = router;