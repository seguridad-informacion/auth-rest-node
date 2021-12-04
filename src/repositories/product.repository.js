const { ProductModel } = require("../models");

const ProductRepository = {};

ProductRepository.getProducts = () => ProductModel.find();

ProductRepository.createProduct = (product) => ProductModel.create(product);

ProductRepository.deleteProduct = (id) => ProductModel.findByIdAndDelete(id);

ProductRepository.updateProduct = (id, product) => ProductModel.findByIdAndUpdate(id, product);

module.exports = ProductRepository;
