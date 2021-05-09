const reviewService = require("../../../../adapters/reviewService");

const getReviewByRecipe = ({ recipe_id }) => {
  return reviewService.getReviewByRecipeId(recipe_id);
};

module.exports = getReviewByRecipe;
