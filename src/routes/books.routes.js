const express = require('express');
const bookRouter = express.Router();
const BookController = require('../controller/book.controller');

const BookControllerInstence = new BookController();

bookRouter.get('/get', BookControllerInstence.get);
bookRouter.post('/create', BookControllerInstence.create);

module.exports = bookRouter;
