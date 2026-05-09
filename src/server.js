const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json())

app.listen(3000, () =>(
    console.log("server open")
)) 

app.get("/", (req, res) => (
    res.send("Hello world")
))