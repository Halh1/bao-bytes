const Item = require('../../models/item');

module.exports = {
    create,
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