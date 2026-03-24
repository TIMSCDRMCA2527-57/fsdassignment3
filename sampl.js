const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "register.html"));
});

app.use(express.static(__dirname));

app.post("/submit", (req, res) => {
    const { name, email, password } = req.body;

    res.send(`
        <h1>Registration Successful</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
        <br>
        <a href="/">Go Back</a>
    `);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});