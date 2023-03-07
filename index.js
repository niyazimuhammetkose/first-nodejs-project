var express = require("express")

const app = express();

const db = require("./data/db")

app.set("view engine", "ejs")

app.use(express.static("public"))
app.use(express.static("node_modules"))

app.use("/products/:id", function (req, res) {
  db.execute("SELECT * FROM products WHERE isActive=1 AND id=?",[req.params.id])
  .then( result => {
    res.render("product-details", result[0][0]);
  })
  .catch( err => {
    console.log(err);
  })
});

app.use("/products", function (req, res) {
  db.execute("SELECT * FROM products WHERE isActive=1")
  .then( result => {
    res.render("products", {
      products: result[0],
    });
  })
  .catch( err => {
    console.log(err);
  })
});

app.use("/", function (req, res) {
  db.execute("SELECT * FROM products WHERE isHome=1 AND isActive=1")
  .then( result => {
    res.render("home", {
      products: result[0],
    });
  })
  .catch( err => {
    console.log(err);
  })
});

app.listen(3000, () => {
  console.log("node.js server at port 3000");
});
