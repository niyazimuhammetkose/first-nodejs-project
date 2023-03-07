var express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"))

const data = [
  { id: 1, name: "iphone 14", imageUrl: "iphone-14-pro.jpg", price: 30000 },
  { id: 2, name: "iphone 13", imageUrl: "iphone-14.jpg", price: 25000 },
  { id: 3, name: "iphone 12", imageUrl: "iphone-13.jpg", price: 20000 },
  { id: 4, name: "iphone 11", imageUrl: "iphone-se.jpg", price: 15000 },
];

app.use("/products/:id", function (req, res) {
  const product = data.find( u => u.id == req.params.id)
  res.render("product-details",product);
});

app.use("/products", function (req, res) {
  res.render("products", {
    products: data,
  });
});

app.use("/", function (req, res) {
  res.render("home");
});

app.listen(3000, () => {
  console.log("node.js server at port 3000");
});
