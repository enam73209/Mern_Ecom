const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    productID:{type: mongoose.Schema.types.objectId, required:true},
    userID:{type: mongoose.Schema.types.objectId, required: true},
    color:{type: String, required: true},
    price:{type: String, required: true},
    qty:{type: String, required: true},
    size:{type: String, required: true}
},{timestamp: true, versionKey: false});
const CartModel = mongoose.model('carts', DataSchema);
module.exports = CartModel;