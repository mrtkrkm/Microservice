const axios = require("axios");
const got = require("got");

const RATING_URI = process.env.Rating_service_uri;

class RatingService {
  static async getAllRating() {
    try {
      var result = await got.get(`${RATING_URI}/api/get_all`).json();
      return result.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async getRatingByUserId(user_id) {
    try {
      var result = await got
        .get(`${RATING_URI}/api/get_by_user/${user_id}`)
        .json();
      console.log(result);
      return result.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async addRating(Input) {
    try {
      var inp = { ...Input };
      var { body } = await got.post(`${RATING_URI}/api/rating`, {
        json: inp,
        responseType: "json",
      });

      return body.data;
    } catch (err) {
      return err;
    }
  }

  static async updateRating(Input) {
    try {
      var inp = { ...Input };
      var { body } = await got.put(`${RATING_URI}/api/rating`, {
        json: inp,
        responseType: "json",
      });

      return body.data;
    } catch (err) {
      return err;
    }
  }
}

module.exports = RatingService;
