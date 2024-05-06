const message = require("../error/message");
const { CategoryModel } = require("../model/category.schema");

class CategoryController {

    async get(req, res){
        try{
            const item = await CategoryModel.find().populate({
                path: 'subcategory',
                populate:[{
                    path: 'product'
                }]
            })
            res.status(200).json(item)
        }catch(error){
            res.status(500).json({message : message.ITEM_NOT_FOUND});
        }
    }

    async create(req, res){
        try{
            const {name, subcategory} = req.body;
            const item = await CategoryModel.create({
                name,
                subcategory
            });
            res.status(200).json(item)
        }catch(error){
            res.status(500).json({message : message.ITEM_NOT_FOUND});
        }
    }
}

module.exports = CategoryController;