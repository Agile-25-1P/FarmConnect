const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./farmconnect.db", (err) => {
        if (err) {
                console.error("Could not connect to database", err);
        } else {
                console.log("Connect to sqlite3 database");
        }
});


db.run(`CREATE TABLE IF NOT EXISTS user (
    UserID INTEGER PRIMARY KEY AUTOINCREMENT,
    UserName TEXT NOT NULL,
    UserType TEXT NOT NULL,
    EmailAddress TEXT NOT NULL,
    PhoneNo TEXT,
    Password TEXT NOT NULL
)`);


module.exports = db;
