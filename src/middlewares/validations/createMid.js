const {check} = require ("express-validator")

module.exports = [

    check("name")
        .notEmpty().withMessage("You must write down a name").bail()
        .isLength({min:3 , max:15}).withMessage("You must write down a name between 3 and 15 characters"),

    check("prefix")
        .notEmpty().withMessage("You must write down a prefix").bail()
        .isNumeric().withMessage("You must write down a number").bail()
        .isLength({min:3 , max:3}).withMessage("You must write down a prefix of 3 digits"),

    check("mainDescripcion")
        .notEmpty().withMessage("You must write down a main description").bail()
        .isLength({max: 70}).withMessage("The main description is too long").bail()
        .isLength({min: 10}).withMessage("The main description is too short"),

    check("descripcion")
        .notEmpty().withMessage("You must write down a description").bail()
        .isLength({max: 300}).withMessage("The description is too long").bail()
        .isLength({min: 10}).withMessage("The description is too short"),


    check("generation")
        .notEmpty().withMessage("You must write down a generation").bail()
        .isLength({min:1, max:2}).withMessage("The generation must have one or two characters"),


    check("specie")
        .notEmpty().withMessage("You must write down a specie").bail()
        .isLength({min: 3}).withMessage("The specie atribute is too short").bail()
        .isLength({max: 15}).withMessage("The specie atribute is too long"),

    check("region")
        .notEmpty().withMessage("You must write down a region").bail()
        .isLength({min: 3}).withMessage("The region is too short").bail()
        .isLength({max: 15}).withMessage("The region is too long"),

    check("index")
        .notEmpty().withMessage("You must write down a index").bail()
        .isLength({min: 7, max:7}).withMessage("The index must have 7 characters : xxx/151"),

    check("type")
        .exists().withMessage("You must select at least one type"),

    check("strongAgainst")
        .exists().withMessage("You must select at least one strength"),

    check("weakAgainst")
        .exists().withMessage("You must select at least one weakness"),

    check("img")
        .custom((value, { req }) => {
            if(!req.file) {
                throw new Error("You must upload a image")
            } else if (req.file.error === "type") {
                throw new Error ("You must upload a png image")
            } else {
                return true;
            }
        })
]