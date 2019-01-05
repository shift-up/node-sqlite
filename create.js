// Import database
const sqlite3 = require('sqlite3').verbose();

// Connect to the database (creates new database .db file if it doesnt yet exist)
let db = new sqlite3.Database('./people.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the people database.');
});


let sql = 'CREATE TABLE contacts (' +
 'contact_id INTEGER PRIMARY KEY,' +
 'name TEXT NOT NULL,' + 
 'age integer NOT NULL UNIQUE' +
');';

// Create a table
db.run(sql);

// Insert a row into the table



// close the database connection
db.close();
