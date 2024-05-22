const Item = require('../../models/item');
const GroceryList = require('../../models/groceryList');
const pantry = require('../../models/pantry');
module.exports = {
    create,
    delete: deleteItem,
    index,
    getUserItems,
    getPantryItems,
    transferItem,
    deletePantryItems,
    update,
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

        const userId = req.user._id;
        const groceryList = await GroceryList.findOne({ user: userId });
        groceryList.list.push(newItem);
        await groceryList.save();

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
async function getUserItems(req, res) {
    try {
        const userId = req.params.userId;
        const groceryList = await GroceryList.findOne({ user: userId }).populate('list');
        res.json(groceryList.list);
    } catch (error) {
        res.status(400).json(error);
    }
}
async function getPantryItems(req, res) {
    try {
        const userId = req.params.userId;
        const pantryList = await pantry.findOne({ user: userId }).populate('list');
        res.json(pantryList.list);
    } catch (error) {
        res.status(400).json(error);
    }
}

async function transferItem(req, res) {
    try {
        const itemId = req.params.itemId;
        const userId = req.user._id;
        const groceryList = await GroceryList.findOne({ user: userId });
        const pantryList = await pantry.findOne({ user: userId });
        const item = await Item.findById(itemId);

        groceryList.list = groceryList.list.filter(item => item.toString() !== itemId);
        pantryList.list.push(item);

        await groceryList.save();
        await pantryList.save();

        res.status(200).json({ message: 'Item transferred successfully' });
    } catch (error) {
        res.status(400).json(error);
    }
}

async function deletePantryItems(req, res) {
   try { const userPantry = await pantry.findOne({'user': req.params.userId})
    userPantry.list.remove(req.params.itemId);
    await Item.findByIdAndDelete(req.params.itemId);
    await userPantry.save();
    res.status(200).json({ message: 'Item deleted successfully' });
} catch (error) {
    res.json(error);
}
}

async function update(req, res) {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json(error);
    }
}