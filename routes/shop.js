const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/", productsController.getProducts);

module.exports = router;

// const path = require("path");

// const express = require("express");

// const rootDir = require("../util/path");
// const adminData = require("./admin");

// const router = express.Router();

// router.get("/", (req, res, next) => {
//   const products = adminData.products;
//   res.render("shop", {
//     prods: products,
//     pageTitle: "Shop",
//     path: "/",
//     hasProducts: products.length > 0,
//     activeShop: true,
//     productCSS: true,
//   });
// });

//used to be (before templting engines):
// router.get("/", (req, res, next) => {
//   console.log("shop.js", adminData.products);
//   res.sendFile(path.join(rootDir, "views", "shop.html"));
// });

module.exports = router;
