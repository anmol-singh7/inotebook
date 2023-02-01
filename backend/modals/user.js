const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        minlength: 1,
        required: true

    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    password:{
        type:String,
        required:true 
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const User = new mongoose.model("User", UserSchema);
module.exports = User;