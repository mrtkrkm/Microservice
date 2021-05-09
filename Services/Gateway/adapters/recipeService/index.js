const got = require("got");

const RECIPE_URI = process.env.Recipe_service_uri;

class RecipeService {
  static async getAllRecipes() {
    try {
      var result = await got.get(`${RECIPE_URI}/`).json();
      console.log(result.data);
      return result.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async searchByCategory(value) {
    try {
      var result = await got
        .get(`${RECIPE_URI}/api/Search/ByCategory/${value}`)
        .json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async searchByIngredients(value) {
    try {
      var result = await got
        .get(`${RECIPE_URI}/api/Search/ByIngredient/${value}`)
        .json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = RecipeService;
