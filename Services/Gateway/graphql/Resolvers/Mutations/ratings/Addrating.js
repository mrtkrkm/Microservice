const ratingService = require("../../../../adapters/ratingService");

const addRating = ({ Input }) => {
  return ratingService.addRating(Input);
};

module.exports = addRating;
