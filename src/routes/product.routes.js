const Router = require('express').Router();

Router.get('/api/products', (req, res) => {
  res.send("get all products");
});

Router.get("/api/products/:id", (req, res) => {
  res.send("get product by id");
});

Router.post("/api/products", (req, res) => {
  res.send("create product");
});

Router.delete("/api/products/:id", (req, res) => {
  res.send("delete product");
});

Router.put("/api/products/:id", (req, res) => {
  res.send("update product");
});

module.exports = Router;
