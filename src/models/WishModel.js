const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    productID:{type: mongoose.Schema.types.objectId, required: true},
    userID:{type: mongoose.Schema.types.objectId, required: true}
},{ timestamp:true, versionKey: false});
const WishModel = mongoose.model('wishes',DataSchema);
module.exports = WishModel;