module.exports = function(sequelize, DataTypes) {
  var Results = sequelize.define("Results", {
    category: DataTypes.STRING,
    question: DataTypes.STRING,
    choice_a: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    choice_b: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  // User.associate = function(models) {
  //   // Associating User with Results
  //   // When an Author is deleted, also delete any associated Posts
  //   Author.hasMany(models.Post, {
  //     onDelete: "cascade"
  //   });
  // };

  return Results;
};
