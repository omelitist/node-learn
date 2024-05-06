const message = require('../error/message');
const authorModel = require('../model/author.schema');
const bookModel = require('../model/books.schema');

class AuthorController {
  async get(req, res) {
    try {
      const data = await authorModel.find().populate('books');
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: message.ITEM_NOT_FOUND });
    }
  }

  async create(req, res) {
    try {
      const { name, books } = req.body;
      const existingAuthor = await authorModel.findOne({ name });
      if (existingAuthor) {
        existingAuthor.books.push({ _id: books });
        existingAuthor = await existingAuthor.save();
        res.status(500).json(existingAuthor);
      } else {
        const data = await authorModel.create({ name, books });
        res.status(200).json(data);
      }
    } catch (error) {
      res.status(500).json({ message: message.ITEM_NOT_CREATED });
    }
  }
}

module.exports = AuthorController;
