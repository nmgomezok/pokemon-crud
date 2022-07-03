const express = require ("express");
const controller = require ("../controller/controller");
const upload = require ("../middlewares/multerMid");
const router = express.Router();


const {body} = require ("express-validator");

const validatePokeCrear = [

    body("name").notEmpty().withMessage("Debes completar el campo nombre"),
    body("descripcion").notEmpty().withMessage("Debes completar el campo descripción"),
    body("generation").notEmpty().withMessage("Debes completar el campo generation"),
    body("specie").notEmpty().withMessage("Debes completar el campo specie"),
    body("region").notEmpty().withMessage("Debes completar el campo region"),
    body("index").notEmpty().withMessage("Debes completar el campo index"),
    body("type").notEmpty().withMessage("Debes completar el campo type"),
    body("strongAgainst").notEmpty().withMessage("Debes completar el campo strongAgainst"),
    body("strongAgainst").notEmpty().withMessage("Debes completar el campo weakAgainst"),
]


router.get("/ver", controller.search);


//list all pokemon
router.get("/", controller.listAll);

//detail one pokemon
router.get("/edit/:id", controller.detail)

//list one pokemon to edit
router.get("/editPokemon/:id", controller.editA);

//edit one pokemon
router.put("/edit/:id", upload.single("img"), controller.editB)

//delete one pokemon
router.delete("/:id", controller.delete)

//create form
router.get('/createPokemon', controller.createA);

//processing create form
router.post("/createPokemon", upload.single("img"), validatePokeCrear, controller.createB)

module.exports = router;