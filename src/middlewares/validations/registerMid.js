const {check} = require ("express-validator")

module.exports = [

    check("userId")
        .notEmpty().withMessage("You must write down a user identificacion").bail()
        .isLength({min:3 , max:15}).withMessage("You must write down a user id between 3 and 15 characters"),

    check("email")
        .notEmpty().withMessage("You must write down a email").bail()
        .isEmail().withMessage("You must write down a valid email").bail()
        .isLength({min:5}).withMessage("You email is too short"),

    check("password")
        .notEmpty().withMessage("You must write down password").bail()
        .isLength({max: 15}).withMessage("The password is too long").bail()
        .isLength({min: 8}).withMessage("The password is too short"),

    check("repassword")
        .notEmpty().withMessage("You must re enter the password").bail()
        .isLength({max: 15}).withMessage("The password is too long").bail()
        .isLength({min: 8}).withMessage("The password is too short")
]