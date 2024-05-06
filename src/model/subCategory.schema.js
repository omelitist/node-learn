const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    product: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'product'
    }]
})

const SubCategoryModel = mongoose.model('subcategory', SubCategorySchema);

module.exports =  SubCategoryModel;