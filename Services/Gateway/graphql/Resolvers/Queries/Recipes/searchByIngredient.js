const recipeService = require("../../../../adapters/recipeService");

const searchByIngredients = ({ Values }) => {
  return recipeService.searchByIngredients(Values);
};

module.exports = searchByIngredients;
