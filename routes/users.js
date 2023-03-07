

var express = require("express")

const db = require("../data/db")

const router = express.Router()

router.use("/products/:id", async function (req, res) {
    try {
      const [products, ] = await db.execute("SELECT * FROM products WHERE isActive=1 AND id=?",[req.params.id])
      res.render("product-details", products[0]);
    } catch (err) {
      console.log(err);
    }
  });
  
  router.use("/products", async function (req, res) {
    try {
      const [products, ] = await db.execute("SELECT * FROM products WHERE isActive=1")
      res.render("products", {products});
    } catch (err) {
      console.log(err);
    }
  });
  
  router.use("/", async function (req, res) {
    try {
      const [products, ] = await db.execute("SELECT * FROM products WHERE isHome=1 AND isActive=1")
      console.log(products)
      res.render("home", {products});
    } catch (err) {
      console.log(err);
    }
  });

  module.exports = router