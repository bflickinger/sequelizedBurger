module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("Burger", {
	  burger_name: {
		  type: DataTypes.STRING,
		  allowNull: false
	  },
	  devoured: {
		  type: DataTypes.BOOLEAN,
		  allowNull: false,
		  defaultValue: false
		}
	});
  
	// Author.associate = function(models) {
	//   // Associating Author with Posts
	//   // When an Author is deleted, also delete any associated Posts
	//   Author.hasMany(models.Post, {
	// 	onDelete: "cascade"
	//   });
	// };
  
	return Burger;
  };