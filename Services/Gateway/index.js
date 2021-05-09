const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/types");
const resolver = require("./graphql/Resolvers");

const PORT = process.env.environment || 5009;

const app = express();

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
};
app.use(allowCrossDomain);
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,

    rootValue: resolver,

    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Server is active on Port ${PORT}`));
