const reviewService = require("../../../../adapters/reviewService");

const UpdateReview = ({ Input }) => {
  return reviewService.updateReview(Input);
};

module.exports = UpdateReview;
