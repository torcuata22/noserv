//after refactoring

const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const app = express(); //runs express as a function

app.use(bodyParser.urlencoded({ extended: false })); //parses request body

app.use("/add-product", (req, res) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

app.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express</h1>");
});

//the above function will be executed with every request takes 3 arguments: req, res, next, next is the function that allows me to move to the next middleware
const server = http.createServer(app); //acts as request handler, too

server.listen(3000);
