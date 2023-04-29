const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

//-------------------DB Connection-----------------------------------------------//

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
 
//------------------------------------------------------------------------------------------------//


//--------------------------------APIS----------------------------------------//

app.get("/get", async (req, res) => {
    let sql = "SELECT * FROM todo.todo_info"
    connection.query(sql, (err, result) => {
        if (err) res.status(500).send(err)
        res.status(200).send(result)
    })
});

app.post("/add", async (req, res) => {
    if (!req.body.data) return res.send({ message: " empty todo not acceptable" })

    let sql = `INSERT INTO todo.todo_info(todotext) VALUES ("${req.body.data}");`
    connection.query(sql, (err, result) => {
        if (err) res.status(500).send(err)
        res.status(200).send(result)
    })
});

app.delete("/delete/:id", async (req, res) => {

    if (!req.params.id) return res.status(400)
    
    let sql = `DELETE FROM todo.todo_info WHERE id="${req.params.id}";`
    connection.query(sql, (err, result) => {
        if (err) res.status(500).send(err)
        res.status(200).send(result)
    })
});
//----------------------------------------------------------------------------------------//


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Your server is running successfully on PORT ${PORT}`)
    connection.connect(function (err) {
        if (err) {
            console.log("Error in the connection")
            console.log(err)
        }
        else {
            console.log(`Database Connected`)
        }
    })
}
);