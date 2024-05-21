const Item = require('../../models/item');

module.exports = {
    create,
    delete: deleteItem,
    index
};

async function create(req, res) {
    try {
        const { name, type, expiration, expDate } = req.body;
        const newItem = new Item({
            name,
            type,
            expiration,
            expDate
          });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json(error);
    }
}

async function deleteItem(req, res) {
    console.log(req.params.id)
    try {
        const itemId = req.params.id;
        await Item.findByIdAndDelete(itemId);
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.json(error)
        // res.status(400).json(error);
    }
}

async function index(req, res) {
    try {
        const items = await Item.find({});
        res.json(items);
        // res.status(200).json({ message: 'Item found successfully' });
    } catch (error) {
        res.status(400).json(error);
    }      
}