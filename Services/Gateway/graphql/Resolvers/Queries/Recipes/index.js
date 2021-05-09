const getAllRecipe = require("./GetAllRecipe");
const searchByCategory = require("./searchByCategory");
const searchByIngredients = require("./searchByIngredient");

const Recipes = {
  getAllRecipe,
  searchByCategory,
  searchByIngredients,
};
module.exports = Recipes;
