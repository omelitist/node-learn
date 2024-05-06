const message = require("../error/message");
const SubCategoryModel = require("../model/subCategory.schema");


class SubCategoryController {

    async get(req, res) {
        try {
            const items = await SubCategoryModel.find().populate('product');
            res.status(200).json(items)
        } catch (err) {
            res.status(500).json({ message: message.ITEM_NOT_FOUND })
        }
    }

    async create(req, res) {
        try {
            const {name, product} = req.body;
            const newItems = await SubCategoryModel.create({
                name,
                product
            });
            await newItems.save();
            res.status(201).json(newItems)
        } catch (err) {
            res.status(400).json({ message: message.ITEM_NOT_CREATED })
        }
    }
}

module.exports = SubCategoryController;