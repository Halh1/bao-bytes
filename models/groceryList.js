const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groceryListSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    list: [{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('GroceryList', groceryListSchema);