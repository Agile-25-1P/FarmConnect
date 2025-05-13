const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./farmconnect.db", (err) => {
        if (err) {
                console.error("Could not connect to database", err);
        } else {
                console.log("Connect to sqlite3 database");
        }
});


// Table creation and other queries goes here.

module.exports = db;
