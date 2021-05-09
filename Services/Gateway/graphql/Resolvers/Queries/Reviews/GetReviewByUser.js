const reviewService = require("../../../../adapters/reviewService");

const getReviewByUser = ({ user_id }) => {
  return reviewService.getReviewByUserId(user_id);
};

module.exports = getReviewByUser;
