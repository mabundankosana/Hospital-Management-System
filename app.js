const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: '', 
  database: 'my_database' 
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database with thread ID: ' + connection.threadId);
});

// Example query to fetch data from the database
connection.query('SELECT * FROM users', (err, results, fields) => {
  if (err) {
    console.error('Error executing query: ' + err.stack);
    return;
  }
  console.log('Query results: ', results);
});

// Close the connection
connection.end();
