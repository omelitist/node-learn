const mongoose = require('mongoose');

const catagorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subcategory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'subcategory',
    },
  ],
});

const CategoryModel = mongoose.model('category', catagorySchema);

module.exports = { CategoryModel };
