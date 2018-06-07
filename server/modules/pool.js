//use for connection to the database
//pg is node mudule that we use to connect to our databse
const pg = require('pg');
const Pool = pg.Pool;

const DATABASE_NAME ='music_library';
const config = {
    database: DATABASE_NAME, //the name of the db to connect to
    host: 'localhost', //where the db is located
    port: 5432, //the port the db is listening on
    max: 10, //max number of connections
    idleTimeoutMillis: 30000 // limit of 30 seconds to connect
}
//make the database connection pool
const pool = new Pool(config);
//log that we have connected successfully
pool.on('connect', (client)=>{
    console.log('Connected to database', DATABASE_NAME, 'from', client); 
});
//handle errors for clients
pool.on('error', (err,client)=>{
    console.log('Error with databse connection from', client, 'error:', err);
    pricess.exit(-1);
});
