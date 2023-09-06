const http = require("http");
const express = require("express");
const expressHbs = require("express-handlebars");
const engine = require("express-handlebars");

const app = express();

const path = require("path");

///PUG:
//app.set("view engine", "pug");
//shold be this: app.set("views", "views");
//but because I have node-modules OUTSIDE for some reason, use this:
//const viewsPath = path.join(__dirname, "views");
//app.set("views", viewsPath);

//Handlebars:
// app.engine(
//   "handlebars",
//   engine({
//     layoutsDir: path.join(__dirname, "views/layouts"),
//     defaultLayout: "main-layout",
//     extname: "handlebars",
//   })
// );
// app.set("view engine", "handlebars");
// const viewsPath = path.join(__dirname, "views"); //because of the way my modules are set up
// app.set("views", viewsPath);

//EJS:
app.set("view engine", "ejs");
const viewsPath = path.join(__dirname, "views");
app.set("views", viewsPath);

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false })); //parses request body
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
  //res.status(404).sendFile(path.join(__dirname, "views", "error404.html"));
});

const server = http.createServer(app);
server.listen(3000);
