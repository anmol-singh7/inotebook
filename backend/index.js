const connectToMongo =require("./db");

const express= require("express");

connectToMongo();

const app=express();

const port = process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    console.log("connection successful by express");
})