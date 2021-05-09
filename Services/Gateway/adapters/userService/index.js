const got = require("got");

//const USER_URI = process.env.User_service_uri;

const USER_URI = "http://userApp:80";

class UserService {
  static async Register(Input) {
    try {
      console.log(`${USER_URI}/api/Auth/Register/`);
      const values = { ...Input };
      const result = await got.post(`${USER_URI}/api/Auth/Register/`, {
        json: values,
        responseType: "json",
      });

      console.log(result.body.data);
      return result.body.data.token;
    } catch (err) {
      console.error(err);
      throw Error(err);
    }
  }
  static async Login(email, password) {
    try {
      console.log("Email is" + email);
      console.log(password);
      const result = await got.post(`${USER_URI}/api/Auth/Login/`, {
        json: {
          email: email,
          password: password,
        },
        responseType: "json",
      });
      console.log(result);
      return result.body.token;
    } catch (err) {
      //console.error(err);
      return null;
    }
  }

  static async getByUserId(user_id) {
    try {
      var result = await got
        .get(`${USER_URI}/api//api/User/Getbyid/${user_id}`)
        .json();
      console.log(result);
      return result.data;
      console.log(result);
    } catch (err) {
      // Handle Error Here
      console.error(err);

      return null;
    }
  }
}

module.exports = UserService;
