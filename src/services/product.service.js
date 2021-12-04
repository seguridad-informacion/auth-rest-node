const ProductRepository = require("../repositories/product.repository");

const ProductService = {};

ProductService.getProducts = async () => {
  const products = await ProductRepository.getProducts();
  return products;
};

ProductService.createProduct = async (product) => {
  const newProduct = await ProductRepository.createProduct(product);
  return newProduct;
};

ProductService.deleteProduct = async (id) => {
  const deletedProduct = await ProductRepository.deleteProduct(id);
  return deletedProduct;
};

ProductService.updateProduct = async (id, product) => {
  const updatedProduct = await ProductRepository.updateProduct(id, product);
  return updatedProduct;
};

module.exports = ProductService;
