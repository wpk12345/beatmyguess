// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "User" model that matches up with DB
var User = sequelize.define("user", {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  win: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  loss: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  accuracy: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  createdAt: Sequelize.DATEONLY,
  updatedAt: Sequelize.DATEONLY
});

// Syncs with DB
User.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = User;
