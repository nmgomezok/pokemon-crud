let pokemon = require ("../models/pokemon.json");
let pokemonTypes = require ("../models/pokeTypes.json")
const fs = require ("fs");
const path = require ("path");
const {validationResult} = require ("express-validator");

const controller = {

    //list all pokemon => GET
    search: (req, res) => {
        res.render("ver", {pokemon})
    },

    listAll: (req, res) => {
        res.render("pokeListar", {pokemon})
    }, 

    //detail one pokemon => GET
    detail: (req, res) => {
        let id = req.params.id;

        if (pokemon.find((item)=> item.id == id)){
            let pokemonDetail = pokemon.find((item)=> item.id == id);
            res.render("pokeDetalle", {pokemonDetail, pokemon})
        } else {
            res.render("error404")
        }
    },

    //delete one pokemon => DELETE
    delete: (req, res) => {
        let id = req.params.id; 
        let pokemonPhoto = pokemon.find((item)=> item.id == id);
        let pokePhoto = path.join(__dirname, "../../public/" + pokemonPhoto.img)
        if (fs.existsSync(pokePhoto)) {
            fs.unlinkSync(pokePhoto)
        }
        pokemon = pokemon.filter((item) => item.id != id)
        fs.writeFileSync(
            path.join(__dirname, "../models/pokemon.json"),
            JSON.stringify(pokemon, null, 4),
            {
                encoding: "utf-8",
            }
        );
        res.render("./pokeListar", {pokemon})
    },

    //list one pokemon to edit => GET
    editA:  (req, res) => {
        let id = req.params.id;
        if (pokemon.find((item)=> item.id == id)){
            let pokemonEdit = pokemon.find((item)=> item.id == id);
            res.render("pokeEditar", {pokemonEdit, pokemonTypes})
        } else {
            res.render("error404")
        }
    },

    //edit one pokemon => PUT
    editB: (req, res) => {
        let id = req.params.id;
        let file = req.file;
        console.log(req.body)
        const {name, prefix, mainDescripcion, descripcion, generation, specie, region, index, type, strongAgainst, weakAgainst} = req.body;
        pokemon.forEach(item => {
            if(item.id == id) {
                item.name = name;
                item.prefix = prefix;
                item.mainDescripcion = mainDescripcion;
                item.descripcion = descripcion; 
                item.generation = generation; 
                item.specie = specie; 
                item.region = region;
                item.index = index; 
                item.type = type;
                item.strongAgainst = strongAgainst;
                item.weakAgainst = weakAgainst;
                item.img = `img/${file.filename}`
            }
        });
        fs.writeFileSync(
            path.join(__dirname, "../models/pokemon.json"),
            JSON.stringify(pokemon, null, 4),
            {
                encoding: "utf-8",
            }
        );
        res.render("./pokeListar", {pokemon})
    },

    //create form => GET
    createA: (req, res) => {
        res.render('pokeCrear', {pokemonTypes}); 
    },

    //processing create form => POST
    createB: (req, res) => {
        
        console.log(req.body)
        const newId = pokemon[(pokemon.length - 1)].id + 1;
        let file = req.file;
        let newPokemon = {
            id: newId,
            name: req.body.name,
            prefix: req.body.prefix,
            mainDescripcion: req.body.mainDescripcion,
            descripcion: req.body.descripcion,
            generation: req.body.generation,
            specie: req.body.specie,
            region: req.body.region,
            index: req.body.index,
            type: req.body.type,
            strongAgainst: req.body.strongAgainst,
            weakAgainst: req.body.weakAgainst,
            img: `img/${file.filename}`
        }
        pokemon.push(newPokemon);
        fs.writeFileSync(
            path.join(__dirname, "../models/pokemon.json"),
            JSON.stringify(pokemon, null, 4),
            {
                encoding: "utf-8",
            }
        );
        res.render("./pokeListar", {pokemon})
    }
}

module.exports = controller;
