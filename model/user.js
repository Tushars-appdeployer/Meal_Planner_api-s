const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true
    },
    calories_requirement:{
        type: Number,
        required:true,
        trim:true
    },
    meal_plan:[
        {
            date :{
                type:Date,
                required:true
            },
            meals:[
                {
                    type:String,
                    required:true,
                    trim:true
                }
            ]

        }
    ]
})

module.exports = mongoose.model('Users',usersSchema);