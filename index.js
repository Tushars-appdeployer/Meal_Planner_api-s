const { json } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.urlencoded({extended:false}));
app.use(express.json());


const PORT = process.env.PORT;
const MONGO_LIVE = process.env.MONGO_LIVE;

// imported routes
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

app.use("/admin",adminRoutes);
app.use("/user",userRoutes);

app.get('*',(req,res) => {
    res.render('404')
})

mongoose.connect(MONGO_LIVE,{
    dbName : 'name',
}).then(()=>{
    console.log("DataBase connected");
    app.listen(PORT,()=>{
        console.log(`server running at ${PORT}`);
    })
})
.catch((err)=>{
    console.log(err);
})