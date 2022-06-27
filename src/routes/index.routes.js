const express = require ("express");
const controller = require ("../controller/controller");
const upload = require ("../middlewares/multerMid");
const router = express.Router();

//list all pokemon
router.get("/", controller.listAll);

//detail one pokemon
router.get("/editar/:id", controller.detail)

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