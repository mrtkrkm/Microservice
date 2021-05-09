const UserService = require("../../../../adapters/userService");

const getUserById = (userId) => {
  return UserService.getByUserId(userId);
};

module.exports = getUserById;
