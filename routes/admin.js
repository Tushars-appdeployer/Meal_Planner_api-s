const routes = require("express").Router();
const { Router } = require("express");
const FOODITEMS = require("../model/foodItems");
const MEALS = require("../model/meals");

// @description post api to add fooditems 

routes.post("/addfooditems",async(req,res)=>{

    try{
        const {name ,calories,protien , carb, fat , accepted_unit , item_weight } = req.body;

        const f_item = {
            name, 
            calories,
            protien,
            carb,
            fat,
            accepted_unit,
            item_weight
        }
        console.log("f_items ",f_item);

        const result = await FOODITEMS.insertMany(f_item);
        if(!result)
        {
            res.status(200).json({ msg :"not inserted ", success: false });
        }
        res.status(200).json({ msg :"inserted successfully", success: true });

    }catch(err)
    {
        console.log(err.stack);
        res.status(500).json({ msg :"server error ", success: false , error : err });
    }
});

// @description post api to add meals

routes.post("/addmeals",async(req,res)=>{
    try{
        const { category , name , food_items} = req.body;
        // console.log("req.body",req.body);
        const meal = {
            category,
            name,
            food_items
        }
        // console.log(" meal  ",meal);

        const result = await MEALS.insertMany(meal);
        if(!result)
        {
            res.status(200).json({ msg :"not inserted ", success: false });
        }
        res.status(200).json({ msg :"inserted successfully", success: true });

    }catch(err)
    {
        console.log(err.stack);
        res.status(500).json({ msg :"server error ", success: false , error : err });
    }
});


// @description patch api to update the meals

routes.patch("/updatemeals",async(req,res)=>{
    try{
        const { id,food_items} = req.body;
        // console.log("req.body",req.body);
        const meal = {
            food_items
        }
        // console.log(" meal  ",meal);

        const result = await MEALS.findByIdAndUpdate(id,meal);
        if(!result)
        {
            res.status(200).json({ msg :"not updated ", success: false });
        }
        res.status(200).json({ msg :"updated successfully", success: true , data : result});

    }catch(err)
    {
        console.log(err.stack);
        res.status(500).json({ msg :"server error ", success: false , error : err });
    }
});




module.exports = routes