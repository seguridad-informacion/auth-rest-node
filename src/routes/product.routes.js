const ProductController = require('../controllers/product.controller');

const verifyToken = require('../middleware/jwt.middleware');

const Router = require('express').Router();

Router.get('/api/products', verifyToken, ProductController.getProducts);

Router.post("/api/products", verifyToken, ProductController.createProduct);

Router.delete("/api/products/:id", verifyToken, ProductController.deleteProduct);

Router.put("/api/products/:id", verifyToken, ProductController.updateProduct);

module.exports = Router;
