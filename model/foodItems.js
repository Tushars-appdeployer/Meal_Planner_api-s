const mongoose = require("mongoose");

const foodItemsSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true
    },
    calories:{
        type: String,
        required:true,
        trim:true
    },
    protien:{
        type: String,
        required:true,
        trim:true
    },
    carb:{
        type: String,
        required:true,
        trim:true
    },
    fat:{
        type: String,
        required:true,
        trim:true
    },
    accepted_unit:[{
        type:String,
        enum : ['ml','liter','kg','g','item'],
        default: 'g',
        required:true
    }],
    item_weight:{
        type: String,
        required:true,
        trim:true
    },
})

module.exports = mongoose.model('FoodItems',foodItemsSchema);