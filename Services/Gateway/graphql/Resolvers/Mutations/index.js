const User = require("./User");
const Review = require("./Reviews");
const Rating = require("./ratings");

const UserMutations = Object.assign(User);
const ReviewMutations = Object.assign(Review);
const RatingMutations = Object.assign(Rating);

const Mutations = {
  AuthMutation: UserMutations,
  ReviewMutation: ReviewMutations,
  RatingMutation: RatingMutations,
};

console.log("Mutate");
module.exports = Mutations;
