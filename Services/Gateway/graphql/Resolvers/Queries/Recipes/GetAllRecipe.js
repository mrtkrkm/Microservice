const recipeService = require("../../../../adapters/recipeService");

const getAllRecipes = () => {
  return recipeService.getAllRecipes();
};

module.exports = getAllRecipes;
