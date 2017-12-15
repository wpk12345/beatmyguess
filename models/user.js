// Dependencies
// =============================================================

module.exports = function(sequelize, DataTypes) {
  // Creates a "User" model that matches up with DB
  var User = sequelize.define("User", {
    username: {
      type:DataTypes.STRING},
    password: {
      type:DataTypes.STRING},
    wins: {
      type:DataTypes.INTEGER,
      defaultValue: '0'},
    losses: { 
      type: DataTypes.INTEGER,
      defaultValue: '0'},
    accuracy: {
      type: DataTypes.INTEGER,
      defaultValue: 0}
  });

  User.associate = function(models) {
    // Associating User with Picks
    User.hasMany(models.Picks, {
      onDelete: "cascade"
    });
  };
  console.log(User);
  return User;
};
