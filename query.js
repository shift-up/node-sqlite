// Import database
const sqlite3 = require('sqlite3').verbose();

// Connect to the database (creates new database .db file if it doesnt yet exist)
let db = new sqlite3.Database('./chinook.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});


// Run an SQL query
let sql = `SELECT name FROM contacts
           ORDER BY name`;
 
db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }

  rows.forEach((row) => {
    
    console.log(row.name);

  });
});
 
// close the database connection
db.close();
