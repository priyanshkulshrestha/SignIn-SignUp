const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

const userSchema = new  mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})


userSchema.methods.generateAuthToken = function(){
    const tokken = jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"})
    return tokken
}

const User = mongoose.model("user",userSchema);

const validate = (data) => {
    const Schema = joi.object({
        firstName: joi.string().required().label("First name"),
        // lastName: joi.string().required().label("Last name"),
        email: joi.string().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    });
    return Schema.validate(data)
};

module.exports = {User, validate}