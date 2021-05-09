const reviewService = require("../../../../adapters/reviewService");

const addReview = ({ Input }) => {
  return reviewService.addReview(Input);
};

module.exports = addReview;
