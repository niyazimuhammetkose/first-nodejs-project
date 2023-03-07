var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url == "/") {
    fs.readFile("index.html", (err, html) => {
      res.write(html);
      res.end;
    });
  } else if (req.url == "/products") {
    fs.readFile("products.html", (err, html) => {
      res.write(html);
      res.end;
    });
  } else {
    res.write("<h1>404 Not Found</h1>");
    res.end;
  }
});

server.listen(3000, () => {
  console.log("node.js server at port 3000");
});
