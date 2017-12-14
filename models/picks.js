// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "User" model that matches up with DB
var Picks = sequelize.define("picks", {
  pick: {
      type: BOOLEAN,
      allowNull: TRUE,
      defaultValue: false
  },
  createdAt: Sequelize.DATEONLY,
  updatedAt: Sequelize.DATEONLY
});

Picks.associate = function(models) {
     // We're saying that a Pick should belong to a User
    // A Pick can't be created without an User due to the foreign key constraint
    Picks.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };

// Syncs with DB
Picks.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Picks;
