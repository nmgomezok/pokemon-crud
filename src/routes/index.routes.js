const express = require ("express");
const controller = require ("../controller/controller");
const upload = require ("../middlewares/multerMid");
const router = express.Router();

//listar pokemones
router.get("/", controller.listar);

//detalle de los pokemon
router.get("/editar/:id", controller.detalle)

//actualizar pokemones
router.get("/editPokemon/:id", controller.editA);
router.put("/edit/:id", upload.single("img"), controller.editB)

//borrar pokemones
router.delete("/:id", controller.delete)

//crear pokemones
router.get('/createPokemon', controller.createA);
router.post("/createPokemon", upload.single("img"), controller.createB)

module.exports = router;