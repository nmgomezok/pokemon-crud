const express = require ("express");

const registerMid = require ("../middlewares/validations/registerMid");
const createMid = require ("../middlewares/validations/createMid");
const upload = require ("../middlewares/multerMid");

const controller = require ("../controller/controller");
const userController = require ("../controller/userController");

const router = express.Router();

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
router.post("/createPokemon", upload.single("img"), createMid, controller.createB)


//register use form 
router.post("/", registerMid, userController.register)







module.exports = router;