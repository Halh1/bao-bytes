const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const itemSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Dairy', 'Vegetables', 'Fruits', 'Grains', 'Protien', 'Other'],
        required: true
    },
    expiration: {
        type: Boolean,
        default: true,
        required: true
    },
    expDate:{
        type: Date,
        required: true
    } 
}, {
    timestamps: true
});


module.exports = mongoose.model('Item', itemSchema);