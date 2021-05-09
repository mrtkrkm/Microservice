const ratingService = require("../../../../adapters/ratingService");

const getAllRating = () => {
  return ratingService.getAllRating();
};

module.exports = getAllRating;
