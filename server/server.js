const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./config/connection");

const { typeDefs, resolvers } = require("./schemas");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
// service:ehren-lewis:0Fxho3K1bDPUIkJSkIiIzQ