const express = require('express');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.listen(PORT, () =>
    console.log(`server listening on ${PORT}`));


