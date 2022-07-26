const routes = require("express").Router();
const { find, findById } = require("../model/user");
const USER = require("../model/user");

// @description post api to add user 

routes.post("/adduser",async(req,res)=>{

    try{
        const {name ,calories_requirement ,meal_plan } = req.body;
        // console.log("req.body ",req.body);
        meal_plan.map((plan)=>{
            let final_date = new Date(plan.date);
            plan.date = final_date;
        })

        const newUser = {
           name , 
           calories_requirement,
           meal_plan
        }
        // console.log("newUser  ",newUser);

        const result = await USER.insertMany(newUser);
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


// @description patch api to update the meals plans 

routes.patch("/updatemealplans",async(req,res)=>{
    try{
        const { id,meal_plan} = req.body;
        // console.log("req.body",req.body);
        let data1 = await USER.findById(id);
        if(!data1)
        {
            res.status(200).json({ msg :"invalid user", success: false});
        }

        meal_plan.map(async(plan)=>{
            let final_date = new Date(plan.date);
            plan.date = final_date;

            data1.meal_plan.map(async(plan1)=>{
                if(final_date.getDate() == plan1.date.getDate())
                {
                    plan1.meals = plan.meals;
                }

            })

        });

        const result = await USER.findByIdAndUpdate(id,data1);
        if(!result)
        {
            res.status(200).json({ msg :"not updated ", success: false });
        }
        res.status(200).json({ msg :"updated successfully", success: true , data:result});

    }catch(err)
    {
        console.log(err.stack);
        res.status(500).json({ msg :"server error ", success: false , error : err });
    }
});



module.exports = routes