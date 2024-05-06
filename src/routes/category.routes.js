const {Router} = require('express');
const CategoryController = require('../controller/category.controller');
const categoeyRoute = Router();

const CategoryControllerInstance = new CategoryController()
categoeyRoute.get('/get', CategoryControllerInstance.get);
categoeyRoute.post('/create', CategoryControllerInstance.create);

module.exports = categoeyRoute;