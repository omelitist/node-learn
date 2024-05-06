const express = require('express');
const authorRouter = express.Router();
const AuthorController = require('../controller/author.controller');

const AuthorControllerInstence = new AuthorController()

authorRouter.get('/get', AuthorControllerInstence.get)
authorRouter.post('/create', AuthorControllerInstence.create)

module.exports = authorRouter;
