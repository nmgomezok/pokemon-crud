let pokemon = require ("../models/pokemon.json");
const fs = require ("fs");
const path = require ("path");

const controller = {

    listar: (req, res) => {
        res.render("pokeListar", {pokemon})
    }, 

    detalle: (req, res) => {
        let id = req.params.id;
        let pokemonDetail = pokemon.find((item)=> item.id == id);
        res.render("pokeDetalle", {pokemonDetail})
    },

    delete: (req, res) => {
        let id = req.params.id;
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

    editA:  (req, res) => {
    let id = req.params.id;
    let pokemonEdit = pokemon.find((item)=> item.id == id);
    res.render("pokeEditar", {pokemonEdit})
    },

    editB: (req, res) => {
        let id = req.params.id;
        let file = req.file;
        const {name, type, strongAgainst, weakAgainst, descripcion, generation, specie, region, index} = req.body;
        pokemon.forEach(item => {
            if(item.id == id) {
                item.name = name;
                item.type = type;
                item.strongAgainst = strongAgainst;
                item.weakAgainst = weakAgainst;
                item.descripcion = descripcion; 
                item.generation = generation; 
                item.specie = specie; 
                item.region = region; 
                item.index = index;
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

    createA: (req, res) => {
        res.render('pokeCrear');
    },

    createB: (req, res) => {
        const newId = pokemon[(pokemon.length - 1)].id + 1;
        let file = req.file;
        let newPokemon = {
            id: newId,
            name: req.body.name,
            descripcion: req.body.descripcion,
            generation: req.body.generation,
            specie: req.body.specie,
            region: req.body.region,
            index: req.body.index,
            type: req.body.type,
            strongAgainst: req.body.strongAgainst.split(" "),
            weakAgainst: req.body.weakAgainst.split(" "),
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
