const Reviews = require("./Reviews");
const ReviewsQ = Object.assign(Reviews);

const Ratings = require("./Ratings");
const RatingsQ = Object.assign(Ratings);

const Recipes = require("./Recipes");
const RecipesQ = Object.assign(Recipes);

const Users = require("./Users");
const UsersQ = Object.assign(Users);

const Queries = {
  ReviewQueries: ReviewsQ,
  RatingQueries: RatingsQ,
  RecipeQueries: RecipesQ,
  UserQueries: UsersQ,
};

console.log("inside queries");

module.exports = Queries;
