// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/", function (req, res) {
        res.redirect('/burgers');
    });

    // GET route for getting all of the posts
    app.get("/burgers", function (req, res) {
        db.Burger.findAll({})
            .then(function (burgers) {
                // res.json(dbBurger);
                // console.log({burgers:burgers});
                res.render('index', { burgers: burgers });
            });
    });

    app.post("/burgers/create", function (req, res) {
        db.Burger.create(req.body)
            .then(function () {
                res.redirect('/burgers');
            });
    });

    app.put("/burgers/update/:id", function (req, res) {
        db.Burger.update(
            {
                devoured: 1
            },
            {
                where: {
                    id: req.params.id
                }
            }).then(function () {
                res.redirect('/burgers');
            });
    });
};
