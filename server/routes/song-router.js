const express = require('express');
const router = express.Router();

// Get our connection to the database
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  console.log('In song-router GET to read');

  // Build a string for the query
  const queryText = 'SELECT * FROM songs';
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Error getting all songs: ', err);
      res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
  console.log('In song-router POST to create');
  const queryText = `INSERT INTO songs (artist, track, published, rank)
  VALUES ($1, $2, $3,$4);`;
  pool.query(queryText, [req.body.artist, req.body.track, req.body.published, req.body.rank])
  .then((results) => {
    res.sendStatus(200);
  }).catch((err) => {
    console.log('Error getting all songs: ', err);
    res.sendStatus(500);
  })
});

router.put('/:id', (req, res) => {
  console.log('In song-router PUT to update');
  const queryText = `UPDATE songs SET track=$1 WHERE artist=$2;`;
  pool.query(queryText, [req.body.track, req.params.id])
  .then((results) => {
    res.sendStatus(200);
  }).catch((err) => {
    console.log('Error updating song: ', err);
    res.sendStatus(500);
  })
  res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  console.log('In song-router DELETE to delete');
  const queryText = 'DELETE FROM songs WHERE id=$1';
  // Passing two things to the query. 1) the query text
  // 2) the values to substitute into the query for the $1, $2, etc. 
  //    when subbing in multiple things, the order is important.
  pool.query(queryText, [id])
    .then((results)=>{
      console.log('Successful delete of song', results);
      res.sendStatus(200);
    }).catch((err)=>{
      console.log('Error deleting of song', err);
      res.sendStatus(500);
    })
});

module.exports = router;