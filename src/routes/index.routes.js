const express = require ("express");
const controller = require ("../controller/controller");
const upload = require ("../middlewares/multerMid");
const router = express.Router();


const {body} = require ("express-validator");

// const validatePokeCrear = [

//     body("name")
//     body("prefix")
//     body("img")
//     body("mainDescripcion")
//     body("descripcion")
//     body("generation")
//     body("specie")
//     body("region")
//     body("index")
//     body("type").
//     body("strongAgainst")
//     body("weakAgainst")
// ]


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
router.post("/createPokemon", upload.single("img"), controller.createB)

module.exports = router;