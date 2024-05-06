const message = require("../error/message");
const bookModel = require("../model/books.schema");

class BookController{

    async get(req,res){
        try{
            const data = await bookModel.find()
            res.status(200).json(data);
        }catch(error){
            res.status(500).json({message : message.ITEM_NOT_FOUND})
        }
    }

    async create(req,res){
        try{
            const { name, author } = req.body;
            console.log(name)
            const data = await bookModel.create({name, author: author})
            res.status(200).json(data);
        }catch(error){
            res.status(500).json({message : message.ITEM_NOT_CREATED})
        }
    }

}

module.exports = BookController;