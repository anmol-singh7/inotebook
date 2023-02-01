const mongoose = require("mongoose");
//const validator = require("validator");

const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 1,
        required: true

    },
    description: {
        type: String,
        required: true,
        unique: [true, "Email id already present"],
     
    },
    tag: {
        type: String,
        
    },
    date: {
        type: Date,
        default: Date.now
    }

});

const Notes = new mongoose.model("Note", NotesSchema);
module.exports = Notes;