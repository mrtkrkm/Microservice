const UserService = require("../../../../adapters/userService");

const Login = ({ email, password }) => {
  return UserService.Login(email, password);
};

module.exports = Login;
