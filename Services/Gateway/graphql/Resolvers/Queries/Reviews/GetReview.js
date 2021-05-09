const reviewService = require("../../../../adapters/reviewService");

const getReview = ({ user_id, recipe_id }) => {
  return reviewService.getReview(user_id, recipe_id);
};

module.exports = getReview;
