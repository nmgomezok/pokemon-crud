const {validationResult} = require ("express-validator")
const fs = require ("fs")
let pokemon = require ("../models/pokemon.json");
let users = require ("../models/user.json");

const userController = {

 
    register: (req, res) => { 
        let errors = validationResult(req) 
        if (!errors.isEmpty()) {
            return res.render('pokeListar',
            { 
                pokemon,
                errors: errors.mapped(),
                old: req.body
            })
        }  else {
            res.send("paso")
        }

    },

 

   









    filename: "../models/user.json",

    getData: function (){
        return JSON.parse(fs.readFileSync(this.filename, "utf-8"));
    },

    create: function (userData) {
        let allUsers = this.getData();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, 4))
        return true;

    },

    findById: function (id) {
        let allUsers = this.getData();
        let userFound = allUsers.find(item => item.id === id);
        return userFound;
    },

    findByField: function (field, text) {
        let allUsers = this.getData();
        let userFound = allUsers.find(item => item[field] === text);
        return userFound;
    },

    generateId: function(){
        let allUsers = this.getData();
        let lastUsers = allUsers.pop();
        if (lastUsers) {
            return lastUsers.id + 1 ;
        }
        return 1;
    },

    delete: function (id){
        let allUsers = this.getData();
        let finalUsers = allUsers.filter(item => item.id !== id);
        fs.writeFileSync(this.filename, JSON.stringify(finalUsers, null, 4))
        return true;

    }

}

module.exports = userController;
