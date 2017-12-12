module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING
    },
    win: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    loss: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    accuracy: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  return Users;
};
