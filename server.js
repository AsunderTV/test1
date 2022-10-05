var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require("path");

app.get("/", (req, res) => {
    res.send(`<h2>Declaration (Instruction: text size in heading 2): </h2>
    <p> Instruction: The rest text is displayed in paragraph as shown in screenshot </p> 
    <p>I declare that this text is my own work in accordance with Seneca Academic Policy. No part of this test has <br> been copied manually or electroncally from any other source.</p>
    <p>Name: <mark>Kayin Benjamin</mark></p>
    <p>Student Number: <mark>113415210</mark> <br> <br>
    <a href = "/test1"> Go To Test1</a>
    <p> Instruction: Test1 is a link, which directs users to the route test1.`);
});

app.get("/test1", (req, res) => {
    res.sendFile(path.join(__dirname, "test1.html"));
});


app.listen(HTTP_PORT, onHttpStart);

function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
  }