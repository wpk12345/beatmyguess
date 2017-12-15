// Dependencies
// =============================================================

module.exports = function(sequelize, DataTypes) {
  var Picks = sequelize.define("Picks", {
    pickOne: {
      type: DataTypes.STRING
    },
    pickTwo: {
      type: DataTypes.STRING
    },
    pickThree: {
      type: DataTypes.STRING
    },
    pickFour: {
      type: DataTypes.STRING
    },
    pickFive: {
      type: DataTypes.STRING
    },
    pickSix: {
      type: DataTypes.STRING
    },
    pickSeven: {
      type: DataTypes.STRING
    },
    pickEight: {
      type: DataTypes.STRING
    },
    pickNine: {
      type: DataTypes.STRING
    },
    pickTen: {
      type: DataTypes.STRING
    },
    pickEleven: {
      type: DataTypes.STRING
    },
    pickTwelve: {
      type: DataTypes.STRING
    },
    pickThirteen: {
      type: DataTypes.STRING
    },
    pickFourteen: {
      type: DataTypes.STRING
    },
    pickFifteen: {
      type: DataTypes.STRING
    },
    pickSixteen: {
      type: DataTypes.STRING
    },
    //   createdAt: DataTypes.DATEONLY,
    //   updatedAt: DataTypes.DATEONLY
    // }, {
    // timestamps: false
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

  return Picks;
};
