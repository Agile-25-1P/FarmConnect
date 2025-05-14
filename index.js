const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();
const registerUser = require("./Controller/register");

const PORT = 3000;

// ✅ Add this middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure session middleware
app.use(session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 }
}));

app.use(express.static(path.join(__dirname, 'pages')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.post("/submit", registerUser);

// Example route for login
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email === "buyer@example.com" && password === "password123") {
        req.session.user = { email, role: "buyer" };
        res.send("Login successful");
    } else {
        res.status(401).send("Invalid credentials");
    }
});

// Example route for logout
app.post("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).send("Logout failed");
        res.send("Logout successful");
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
