const recipeService = require("../../../../adapters/recipeService");

const searchBycategories = ({ Values }) => {
  return recipeService.searchByCategory(Values);
};

module.exports = searchBycategories;
