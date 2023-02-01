const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const connectToMongo = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/inotebook", () => {
        console.log("connected")
    })
}

module.exports =connectToMongo;