const UserService = require("../../../../adapters/userService");

const Register = ({ Input }) => {
  console.log("aaaaaa");
  return UserService.Register(Input);
};

module.exports = Register;
