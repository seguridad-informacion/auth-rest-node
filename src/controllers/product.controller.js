const { ProductService } = require("../services");

const ProductController = {};

ProductController.getProducts = async (req, res) => {
  try {
    const products = await ProductService.getProducts();
    return res.status(200).json(products);
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || "Interval server error.";
    return res.status(status).json({
      status,
      message,
    });
  }
};

ProductController.createProduct = async (req, res) => {
  try {
    const newProduct = await ProductService.createProduct(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || "Interval server error.";
    return res.status(status).json({
      status,
      message,
    });
  }
};

ProductController.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await ProductService.deleteProduct(req.params.id);
    return res.status(200).json(deletedProduct);
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || "Interval server error.";
    return res.status(status).json({
      status,
      message,
    });
  }
};

ProductController.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await ProductService.updateProduct(req.params.id, req.body);
    return res.status(200).json(updatedProduct);
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || "Interval server error.";
    return res.status(status).json({
      status,
      message,
    });
  }
};

module.exports = ProductController;
