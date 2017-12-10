module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
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

  // User.associate = function(models) {
  //   // Associating User with Results
  //   // When an Author is deleted, also delete any associated Posts
  //   Author.hasMany(models.Post, {
  //     onDelete: "cascade"
  //   });
  // };

  return Users;
};
