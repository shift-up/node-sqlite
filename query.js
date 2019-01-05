// Import database
const sqlite3 = require('sqlite3').verbose();

// Connect to the database (creates new database .db file if it doesnt yet exist)
let db = new sqlite3.Database('./people.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the people database.');
});


// Run an SQL query
let sql = `SELECT * FROM contacts
           ORDER BY name`;
 
db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }

  rows.forEach((row) => {
    
    console.log(row);

  });
});
 
// close the database connection
db.close();
