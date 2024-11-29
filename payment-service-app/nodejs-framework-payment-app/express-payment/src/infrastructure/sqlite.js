const sqlite3 = require('sqlite3').verbose();

// Create an in-memory database
let db = new sqlite3.Database(':memory:');

// Create a table
db.run("CREATE TABLE user (id INT, name TEXT)", (err) => {
  if (err) {
    console.error(err.message);
  }
});

// Insert some data
db.run("INSERT INTO user VALUES (1, 'Alice')", (err) => {
  if (err) {
    console.error(err.message);
  }
});

// Query the data
db.get("SELECT * FROM user WHERE id = ?", [1], (err, row) => {
  if (err) {
    console.error(err.message);
  }
  console.log(row);  // { id: 1, name: 'Alice' }
});

// Close the in-memory database
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
});