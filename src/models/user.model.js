const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {type : String, required : true},
    lastName : {type: String, required : true},
    email : {type : String, required: true, unique: true},
    pincode : {type: Number, required: true},
    age : {type: Number, required: true},
    gender : {type: String, enum :["Male", "Female", "Others"], required: true}
},
{
    versionKey : false,
    timestamps : true
});

module.exports = mongoose.model("user", userSchema);