const reviewService = require("../../../../adapters/reviewService");

const getAllReview = () => {
  return reviewService.getAllReview();
};

module.exports = getAllReview;
