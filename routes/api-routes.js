// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

 // GET route for getting all of the users
 app.get("/api/users/", function(req, res) {
   var query = {};
    db.Users.findAll({
      where: {
        username: req.params.username,
        win: req.params.win,
        loss: req.params.loss,
        accuracy: req.params.accuracy
      }

    })
    .then(function(dbUsers) {
      res.json(dbUsers);
    });
  });


  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
  //POST route for adding new users
  // app.post("/api/users/", function(req, res) {
  //   db.Users({
  //     username: req.body.username,
  //    password: req.body.password,
  //     win: req.body.win,
  //     loss: req.body.loss,
  //     accuracy: req.body.accuracy
  //   }).then(function(dbUsers) {
  //     // We have access to the new todo as an argument inside of the callback function
  //     res.json(dbUsers);
  //   });
  // });

};
