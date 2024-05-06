const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: String,
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Books',
    },
  ],
});

const authorModel = mongoose.model('author', authorSchema);
module.exports = authorModel;
