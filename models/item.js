const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const itemSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Dairy', 'Vegetables', 'Fruits', 'Grains', 'Protein', 'Other'],
        required: true
    },
    expiration: {
        type: Boolean,
        default: false,
    },
    expDate:{
        type: Date,
        default: null,
    } 
}, {
    timestamps: true
});


module.exports = mongoose.model('Item', itemSchema);