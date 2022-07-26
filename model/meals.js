const mongoose = require("mongoose");

const mealsSchema = mongoose.Schema({
    category:{
        type: String,
        enum : ['breakfast','lunch','evening snake','dinner'],
        required:true,
    },
    name:{
        type: String,
        required:true,
        trim:true
    }
    ,
    food_items:[{
        type: String,
        required:true,
    }]
})

module.exports = mongoose.model('Meals',mealsSchema);