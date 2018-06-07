const express = require('express');
const router = express.Router();

//get our connection to the database
const pool = require('../modules/pool');

router.get('/', (req,res)=>{
    console.log('in song-router GET to read'); 
    res.sendStatus(200);
});

router.post('/', (req,res)=>{
    console.log('in song-router POST to create'); 
    res.sendStatus(200);
});

router.put('/', (req,res)=>{
    console.log('in song-router PUT to update'); 
    res.sendStatus(200);
});

router.delete('/', (req,res)=>{
    console.log('in song-router DELETE rto delete');
    res.sendStatus(200); 
});

module.exports = router;