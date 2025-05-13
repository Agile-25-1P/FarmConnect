// const express = require("express")
// const path = require("path")
// const app = express()
// const registerUser = require("./Controller/register")

// const PORT = 3000

// app.use(express.static(path.join(__dirname, 'pages')));

// app.get("/", (req, res) => {
//         res.sendFile(path.join(__dirname, 'pages', 'index.html'));
// });
// // index.js
// app.post("/submit", registerUser);

// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// });

const express = require("express");
const path = require("path");
const app = express();
const registerUser = require("./Controller/register");

const PORT = 3000;

// ✅ Add this middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'pages')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.post("/submit", registerUser);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
