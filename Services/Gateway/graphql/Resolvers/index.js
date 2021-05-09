const Queries = require("./Queries");
const Mutations = require("./Mutations");

//const queries = Object.assign(Queries);
//const mutations = Object.assign(Mutations);

const resolver = {
  ...Queries,
  ...Mutations,
};

console.log("inside resolvers");

module.exports = resolver;
