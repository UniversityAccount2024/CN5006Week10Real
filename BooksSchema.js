let mongoose = require("mongoose")
const BookScheme = new mongoose.Schema({
    booktitle: {
        type: String,
        required: true
    },
    PubYear:Number,
    Author:String,
    Topic: String,
    Format: String
})

module.exports = mongoose.model("Bookmodel", BookScheme, "BookCollection2")