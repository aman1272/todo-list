const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: 'root',
  database: 'todo',
  password: "amaN@1234",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0
});

connection.connect(function (err) {
  if (err) {
    console.log("Error in the connection")
    console.log(err)
  }
  else {
    console.log(`Database Connected`)
  }
})
module.exports = connection
