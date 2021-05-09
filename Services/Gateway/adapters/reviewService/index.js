const got = require("got");

const Review_URI = process.env.Review_service_uri;

class ReviewService {
  static async getAllReview() {
    try {
      var result = await got.get(`${Review_URI}/api/get_all`).json();
      console.log(result);
      return result.data;
      console.log(result);
    } catch (err) {
      // Handle Error Here
      console.error(err);

      return null;
    }
  }

  static async getReviewByUserId(user_id) {
    try {
      var result = await got
        .get(`${Review_URI}/api/getbyuser/${user_id}`)
        .json();
      return result.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async getReviewByRecipeId(recipe_id) {
    try {
      var result = await got
        .get(`${Review_URI}/api/getbyrecipe/${recipe_id}`)
        .json();
      return result.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async getReview(user_id, recipe_id) {
    try {
      var result = await got
        .get(`${Review_URI}/api/get_review/${user_id}/${recipe_id}`)
        .json();
      return result.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async updateReview(Input) {
    try {
      var inp = { ...Input };
      var { body } = await got.put(`${Review_URI}/api/update`, {
        json: inp,
        responseType: "json",
      });

      return body.message;
    } catch (err) {
      return err;
    }
  }

  static async addReview(Input) {
    try {
      var inp = { ...Input };
      var { body } = await got.post(`${Review_URI}/api/add`, {
        json: inp,
        responseType: "json",
      });

      return body.message;
    } catch (err) {
      return err;
    }
  }
}

module.exports = ReviewService;
