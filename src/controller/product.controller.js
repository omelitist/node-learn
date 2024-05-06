const message = require("../error/message");
const { ProductModel } = require("../model/product.schema");

class ProductController {
    async get(req,res){
        try{
            const item = await ProductModel.find();
            res.status(200).json(item)
        }catch(error){
            res.status(500).json({message : message.ITEM_NOT_FOUND})
        }
    }

    async create(req, res){
        try{
            const {name, price} = req.body
            const item = await ProductModel.create({
                name,
                price
            })
            res.status(200).json(item)
        }catch(error){
            res.status(500).json(item)
        }
    }
}

module.exports = ProductController;