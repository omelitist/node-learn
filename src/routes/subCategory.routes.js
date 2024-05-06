const express = require('express');
const SubCategoryController = require('../controller/subCategory.controller');

const router = express.Router();
const SubCategoryControllerInstance = new SubCategoryController();

router.get('/get', SubCategoryControllerInstance.get);
router.post('/create', SubCategoryControllerInstance.create);

module.exports = router;
