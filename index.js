
var express = require("express")

const app = express()

app.set("view engine", "ejs")

app.use("/products/:id", function (req,res) {
  res.render("product-details")
})

app.use("/products", function (req,res) {
  res.render("products")
})

app.use("/", function (req,res) {
  res.render("home")
})

app.listen(3000, () => {
  console.log("node.js server at port 3000");
})
