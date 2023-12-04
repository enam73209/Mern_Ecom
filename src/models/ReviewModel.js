const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    productID:{type: mongoose.Schema.types.objectId, required:true},
    userID:{type: mongoose.Schema.types.objectId, required: true},
    des:{type: String, required: true},
    rating:{type: String, required: true},
},{timestamp: true, versionKey: false});
const ReviewModel = mongoose.model('reviews',DataSchema);
module.exports = ReviewModel;