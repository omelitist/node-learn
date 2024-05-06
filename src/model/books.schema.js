const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: String,
});

const bookModel = mongoose.model('Books', bookSchema);

module.exports = bookModel;
