// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var User = require("../models/users.js");

// Routes
// =============================================================
module.exports = function(app) {

 // Get all users
 app.get("/api/all", function(req, res) {
  User.findAll({}).then(function(results) {
    res.json(results);
  });
});


 // Add a user
 app.post("/api/new", function(req, res) {
  console.log("User Data:");
  console.log(req.body);
  User.create({
    username: req.body.username,
    password: req.body.password,
    wins: req.body.wins,
    losses: req.body.losses,
    accuracy: req.body.accuracy
  });
});

};