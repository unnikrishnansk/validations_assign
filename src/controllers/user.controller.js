const express = require("express");

const User = require("../models.user.model");

router.post("/", async (req,res) => {
    try{
        const user = await User.create(req.body);
    
        return res.status(200).send(user);
    }
    catch(err)
    {
        return res.status(500).send({message:err.message});
    }
});
router.post("/",
    body("email")
    .isEmail()
    .withMessage("Enter a valid emailId")
    .custom(async (value) => {
        const user = await User.findOne({email :  value});
        if(user)
        {
            throw new Error("Email already exists");
        }
        return true;
    }),

    body("pincode")
    .not()
    .isEmpty()
    .withMessage("pincode cannot be empty")
    .isNumeric()
    .withMessage("pincode should always be number")
    .custom((value) => {
        if(value<100000 || value>999999)
        {
            throw new Error("Provide 6 digit number");
        }
        return true;
    }),

    body("age")
    .not()
    .isEmpty()
    .withMessage("Age cannot be Empty")
    .isNumeric()
    .withMessage("Age can only be number")
    .custom((value) => {
        if(value<1 || val>100)
        {
            throw new Error("Provide a valid age")
        }
        return true;
    })
)

const router = express.Router();

module.exports = router;

