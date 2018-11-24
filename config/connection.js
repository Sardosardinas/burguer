//Set up MySQL connection
var mysql = require("mysql");

console.log("A song for when it works: are we humans? Or are we dancers?");

var connection;

if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        host: "localhost",
        port: 3307,
        user: "root",
        password: "",
        database: 'burger_db'
    })
}



//Make connection.
connection.connect(function(err){
    if (err) {
        console.error(`Error connecting: ${err.stack}`)
        return
    }
    console.log(`Connected as id ${connection.threadId}`)
})

//Exports connection for our ORM to use.
module.exports = connection