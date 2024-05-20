const Item = require('../../models/item');

module.exports = {
    create,
    delete: deleteItem
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
    try {
        const itemId = req.params.id;
        await Item.findByIdAndDelete(itemId);
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(400).json(error);
    }
}