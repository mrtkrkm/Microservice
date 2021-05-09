const ratingService = require("../../../../adapters/ratingService");

const UpdateRating = ({ Input }) => {
  return ratingService.updateRating(Input);
};

module.exports = UpdateRating;
