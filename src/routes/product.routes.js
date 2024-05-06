const express = require('express');
const productRouter = express.Router();

const ProductController = require('../controller/product.controller');
const ProductControllerInstence = new ProductController();

productRouter.get('/get', ProductControllerInstence.get);
productRouter.post('/create', ProductControllerInstence.create);

module.exports = productRouter;
