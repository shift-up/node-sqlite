// Import database
const sqlite3 = require('sqlite3').verbose();

// Connect to the database (creates new database .db file if it doesnt yet exist)
let db = new sqlite3.Database('./people.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the people database.');
});

///////////////////////
// Create a table

let sql = 'CREATE TABLE contacts (' +
 'contact_id INTEGER PRIMARY KEY,' +
 'name TEXT NOT NULL,' + 
 'email TEXT NOT NULL UNIQUE,' + 
 'age integer NOT NULL' +
');';

db.run(sql);

///////////////////////
// Insert a row into the table

let sql_insert = 'INSERT INTO contacts (contact_id,name,email,age) VALUES (1, "John Doe", "jon@somthing.com", 25);'

db.run(sql_insert);


// close the database connection
db.close();
